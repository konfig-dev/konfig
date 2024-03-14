import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ZapierEmbedTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="zapier-embed-typescript-sdk"
      metaDescription={`Zapier is a tool that allows users to connect and automate workflows between different apps and services. With Zapier, users can create "Zaps" that integrate various applications to streamline tasks and improve efficiency. It offers a wide range of integrations, making it easy for users to set up automated actions without the need for coding skills.`}
      company="Zapier"
      serviceName="Embed"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zapier/embed/logo.png"
      companyKebabCase="zapier"
      clientNameCamelCase="zapierEmbed"
      homepage="zapier.com"
      lastUpdated={new Date("2024-03-14T08:10:33.678Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zapier/embed/favicon.png"
      contactUrl="https://help.zapier.com/hc/en-us"
      contactEmail="contact@zapier.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zapier/embed/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["automation","developer_tools","productivity_software","developer_apis","business_productivity","data_integration","development_platforms","integrations"]}
      methods={[
  {
    "url": "/actions",
    "method": "listAvailableActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Actions",
    "typeScriptTag": "actions",
    "description": "Get Actions",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "A canonical App ID, as provided by the `/apps` endpoint.",
        "example": "868f9d3c-2ea0-4f19-a32d-a61b276ab8de"
      },
      {
        "name": "actionType",
        "schema": "string",
        "required": true,
        "description": "The type of Action to filter for.",
        "example": "READ"
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/authentications",
    "method": "getAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentications",
    "typeScriptTag": "authentications",
    "description": "Get Authentications",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "A canonical App ID, as provided by the `/apps` endpoint.",
        "example": "868f9d3c-2ea0-4f19-a32d-a61b276ab8de"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Used for paginating results. Specifies the maximum number of items to return per page. If this value is not set, it defaults to 10.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Used for paginating results. Specifies the offset to use."
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/authentications",
    "method": "createNewAuthentication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentications",
    "typeScriptTag": "authentications",
    "description": "Create Authentication",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/actions/{action}/inputs",
    "method": "getInputFields",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Actions",
    "typeScriptTag": "actions",
    "description": "Get Input Fields",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/actions/{action}/outputs",
    "method": "getOutputFields",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Actions",
    "typeScriptTag": "actions",
    "description": "Get Output Fields",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/actions/{action}/inputs/{input}/choices",
    "method": "getChoices",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Actions",
    "typeScriptTag": "actions",
    "description": "Get Choices",
    "parameters": [
      {
        "name": "page",
        "schema": "string",
        "description": "The page of choices to return, defaults to the first",
        "example": "1",
        "default": "1"
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/apps",
    "method": "listPopular",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get Apps",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Used for paginating results. Specifies the amount of apps to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Used for paginating results. Specifies the offset of the apps to return."
      },
      {
        "name": "category",
        "schema": "string",
        "description": "Categories that apps must have in order to be returned in the response. E.g. Accounting (`accounting`), AI Tools (`ai-tools`), and All (`all`).\nThe full list of valid categories can be retrieved using the `category` endpoint, detailed [here](https://platform.zapier.com/embed/partner-api#get-v1categories)."
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Parameter to limit the results to apps whose titles match the provided query."
      },
      {
        "name": "ids",
        "schema": "string",
        "description": "Parameter to restrict the results to apps whose ID matches those in the provided comma-separated value. Cannot be combined with `category`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/zap-runs",
    "method": "getZapRuns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Experimental",
    "typeScriptTag": "experimental",
    "description": "Get Zap Runs",
    "parameters": [
      {
        "name": "fromDate",
        "schema": "string",
        "description": "Find Zap runs equal to or newer than this date. If not provided, results default to last 30 days' Zap Runs.",
        "example": "2024-01-01T10:09:08.07"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "Find Zap runs less than this date.",
        "example": "2023-01-02T11:10:09.08"
      },
      {
        "name": "zapId",
        "schema": "string",
        "description": "Find Zap runs for the specified Zap ID.",
        "example": "001fa849-dc8e-aca6-a09b-ba705bceada1"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of returned Zap Runs.",
        "example": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Number of Zap Runs to skip.",
        "example": 10
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Performs a text search against the `zap_title`, `data_in`, and `data_out` fields, returning only zap runs that match the specified keywords."
      },
      {
        "name": "statuses",
        "schema": "string",
        "description": "Accepts one or more status values separated by commas, enabling the filtering of zap runs based on the specified status or statuses provided.",
        "example": "throttled"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/zaps",
    "method": "getFilteredZaps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Zaps",
    "typeScriptTag": "zaps",
    "description": "Get Zaps",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Used for paginating results. Specifies the amount of apps to return"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Used for paginating results. Specifies the offset of the apps to return"
      },
      {
        "name": "inputs",
        "schema": "object",
        "description": "You may pass inputs[KEY]=VALUE1,VALUE2 to filter for Zaps that contain those settings. For example, if your OAuth app is Trello you may filter for Zaps that contain a certain Trello board using inputs[board]=BOARD_ID — Keys are defined by your app on the developer platform."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma separated list of Zap fields that should be expanded from ids to full objects in the response. If a field may not be expanded, its encoded form will be returned instead.",
        "example": "steps.action"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/zaps",
    "method": "createZap",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Zaps",
    "typeScriptTag": "zaps",
    "description": "Create a Zap",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma separated list of Zap fields that should be expanded from ids to full objects in the response. If a field may not be expanded, its encoded form will be returned instead."
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "title": "My Zap",
          "type": "zap",
          "id": "00000000-0000-c000-8000-000000012345X",
          "is_enabled": true,
          "last_successful_run_date": "2019-08-24T14:15:22Z",
          "steps": [
            {
              "title": null,
              "action": "uag:1f188536-6dd0-4172-8414-2b90914ddee9",
              "inputs": {},
              "authentication": "b3eYnwl"
            },
            {
              "title": null,
              "action": "uag:1f188536-6dd0-4172-8414-2b90914ddaa7",
              "inputs": {},
              "authentication": "BRn9rRg"
            }
          ],
          "links": {
            "html_editor": "https://zapier.com/webintent/edit-zap/00000000-0000-c000-8000-000000012345"
          },
          "updated_at": "2019-08-24T14:15:22Z"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/actions/{action}/test",
    "method": "testActionExecution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Actions",
    "typeScriptTag": "actions",
    "description": "Test an action (step)",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": "",
        "example": {
          "authentication": "BRn9rRg",
          "inputs": {
            "text": "Hi there",
            "channel": "U036WM3E84D"
          }
        }
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
        "statusCode": "406",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Zapier Embed API"
      apiBaseUrl="https://api.zapier.com/v2"
      apiVersion="1.0.0"
      endpoints={9}
      sdkMethods={20}
      schemas={46}
      parameters={30}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zapier/embed/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zapier/embed/openapi.yaml"
      developerDocumentation="docs.api.zapier.com/api#/v4f9fwzq9hclo-zapier-embed-api"
    />
  );
}
  