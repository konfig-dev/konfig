import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function DigitalOceanTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="digital-ocean-typescript-sdk"
      metaDescription="DigitalOcean is a cloud infrastructure provider that offers virtual servers, storage, networking, and more to help developers deploy and scale applications quickly and easily. Known for its simplicity and developer-friendly tools, DigitalOcean is used by startup companies, independent developers, and enterprises alike to power a wide range of web applications and services."
      company="DigitalOcean"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/digitalocean/logo.png"
      clientNameCamelCase="digitalOcean"
      homepage="digitalocean.com"
      lastUpdated={new Date("2024-03-13T01:59:29.812Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/digitalocean/favicon.png"
      // Missing contactUrl
      contactEmail="api-engineering@digitalocean.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/digitalocean/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["cloud","data_center","storage","virtual_private_servers","developer_tools","automation","collaboration"]}
      methods={[
  {
    "url": "/v2/1-clicks",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "1-Click Applications",
    "typeScriptTag": "1ClickApplications",
    "description": "List 1-Click Applications",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Restrict results to a certain type of 1-Click.",
        "example": "kubernetes"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/1-clicks/kubernetes",
    "method": "installKubernetesApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "1-Click Applications",
    "typeScriptTag": "1ClickApplications",
    "description": "Install Kubernetes 1-Click Applications",
    "parameters": [
      {
        "name": "addon_slugs",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "kube-state-metrics",
          "loki"
        ],
        "default": []
      },
      {
        "name": "cluster_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "50a994b6-c303-438f-9495-7e896cfe6b08"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/account",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Get User Information",
    "parameters": [],
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/account/keys",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SSH Keys",
    "typeScriptTag": "sshKeys",
    "description": "List All SSH Keys",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/account/keys",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SSH Keys",
    "typeScriptTag": "sshKeys",
    "description": "Create a New SSH Key",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 512189
      },
      {
        "name": "fingerprint",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3b:16:bf:e4:8b:00:8b:b8:59:8c:a9:d3:f0:19:45:fa"
      },
      {
        "name": "public_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ssh-rsa AEXAMPLEaC1yc2EAAAADAQABAAAAQQDDHr/jh2Jy4yALcK4JyWbVkPRaWmhck3IgCoeOO3z1e2dBowLh64QAM+Qb72pxekALga2oi4GvT+TlWNhzPH4V example"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My SSH Public Key"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/account/keys/{ssh_key_identifier}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SSH Keys",
    "typeScriptTag": "sshKeys",
    "description": "Delete an SSH Key",
    "parameters": [
      {
        "name": "sshKeyIdentifier",
        "schema": "undefined",
        "required": true,
        "description": "Either the ID or the fingerprint of an existing SSH key.",
        "example": 512189
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/account/keys/{ssh_key_identifier}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SSH Keys",
    "typeScriptTag": "sshKeys",
    "description": "Retrieve an Existing SSH Key",
    "parameters": [
      {
        "name": "sshKeyIdentifier",
        "schema": "undefined",
        "required": true,
        "description": "Either the ID or the fingerprint of an existing SSH key.",
        "example": 512189
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/account/keys/{ssh_key_identifier}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "SSH Keys",
    "typeScriptTag": "sshKeys",
    "description": "Update an SSH Key's Name",
    "parameters": [
      {
        "name": "sshKeyIdentifier",
        "schema": "undefined",
        "required": true,
        "description": "Either the ID or the fingerprint of an existing SSH key.",
        "example": 512189
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "My SSH Public Key"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/actions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Actions",
    "typeScriptTag": "actions",
    "description": "List All Actions",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/actions/{action_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Actions",
    "typeScriptTag": "actions",
    "description": "Retrieve an Existing Action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "A unique numeric ID that can be used to identify and reference an action.",
        "example": 36804636
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "List All Apps",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "withProjects",
        "schema": "boolean",
        "description": "Whether the project_id of listed apps should be fetched and included.",
        "example": true
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Create a New App",
    "parameters": [
      {
        "name": "spec",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "project_id",
        "schema": "string",
        "required": false,
        "description": ""
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Delete an App",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the app",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Retrieve an Existing App",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the app",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "The name of the app to retrieve.",
        "example": "myApp"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Update an App",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the app",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "spec",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/components/{component_name}/logs",
    "method": "getActiveDeploymentLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Retrieve Active Deployment Logs",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "componentName",
        "schema": "string",
        "required": true,
        "description": "An optional component name. If set, logs will be limited to this component only.",
        "example": "component"
      },
      {
        "name": "follow",
        "schema": "boolean",
        "description": "Whether the logs should follow live updates.",
        "example": true
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime",
        "example": "BUILD",
        "default": "UNSPECIFIED"
      },
      {
        "name": "podConnectionTimeout",
        "schema": "string",
        "description": "An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`.",
        "example": "3m"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/deployments",
    "method": "listDeployments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "List App Deployments",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/deployments",
    "method": "createDeployment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Create an App Deployment",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "force_build",
        "schema": "boolean",
        "description": "",
        "example": true
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/deployments/{deployment_id}",
    "method": "getDeploymentInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Retrieve an App Deployment",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "The deployment ID",
        "example": "3aa4d20e-5527-4c00-b496-601fbd22520a"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/deployments/{deployment_id}/cancel",
    "method": "cancelDeployment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Cancel a Deployment",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "The deployment ID",
        "example": "3aa4d20e-5527-4c00-b496-601fbd22520a"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/deployments/{deployment_id}/components/{component_name}/logs",
    "method": "getDeploymentLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Retrieve Deployment Logs",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "The deployment ID",
        "example": "3aa4d20e-5527-4c00-b496-601fbd22520a"
      },
      {
        "name": "componentName",
        "schema": "string",
        "required": true,
        "description": "An optional component name. If set, logs will be limited to this component only.",
        "example": "component"
      },
      {
        "name": "follow",
        "schema": "boolean",
        "description": "Whether the logs should follow live updates.",
        "example": true
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime",
        "example": "BUILD",
        "default": "UNSPECIFIED"
      },
      {
        "name": "podConnectionTimeout",
        "schema": "string",
        "description": "An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`.",
        "example": "3m"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/deployments/{deployment_id}/logs",
    "method": "getAggregateDeploymentLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Retrieve Aggregate Deployment Logs",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "The deployment ID",
        "example": "3aa4d20e-5527-4c00-b496-601fbd22520a"
      },
      {
        "name": "follow",
        "schema": "boolean",
        "description": "Whether the logs should follow live updates.",
        "example": true
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime",
        "example": "BUILD",
        "default": "UNSPECIFIED"
      },
      {
        "name": "podConnectionTimeout",
        "schema": "string",
        "description": "An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`.",
        "example": "3m"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/logs",
    "method": "getActiveDeploymentLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Retrieve Active Deployment Aggregate Logs",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "follow",
        "schema": "boolean",
        "description": "Whether the logs should follow live updates.",
        "example": true
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime",
        "example": "BUILD",
        "default": "UNSPECIFIED"
      },
      {
        "name": "podConnectionTimeout",
        "schema": "string",
        "description": "An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`.",
        "example": "3m"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/tiers",
    "method": "listTiers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "List App Tiers",
    "parameters": [],
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/tiers/{slug}",
    "method": "getTierInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Retrieve an App Tier",
    "parameters": [
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "The slug of the tier",
        "example": "basic"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/tiers/instance_sizes",
    "method": "listInstanceSizes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "List Instance Sizes",
    "parameters": [],
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/tiers/instance_sizes/{slug}",
    "method": "getInstanceSize",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Retrieve an Instance Size",
    "parameters": [
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "The slug of the instance size",
        "example": "basic-xxs"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/regions",
    "method": "listRegions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "List App Regions",
    "parameters": [],
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/propose",
    "method": "proposeAppSpec",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Propose an App Spec",
    "parameters": [
      {
        "name": "spec",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "app_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "b6bdf840-2854-4f87-a36c-5f231c617c84"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/alerts",
    "method": "listAlerts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "List all app alerts",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/alerts/{alert_id}/destinations",
    "method": "updateDestinationsForAlerts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Update destinations for alerts",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "alertId",
        "schema": "string",
        "required": true,
        "description": "The alert ID",
        "example": "5a624ab5-dd58-4b39-b7dd-8b7c36e8a91d"
      },
      {
        "name": "emails",
        "schema": "array",
        "description": "",
        "example": [
          "sammy@digitalocean.com"
        ]
      },
      {
        "name": "slack_webhooks",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/rollback",
    "method": "rollbackDeployment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Rollback App",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "deployment_id",
        "schema": "string",
        "description": "",
        "example": "3aa4d20e-5527-4c00-b496-601fbd22520a"
      },
      {
        "name": "skip_pin",
        "schema": "boolean",
        "description": "",
        "example": false
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/rollback/validate",
    "method": "validateRollback",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Validate App Rollback",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "deployment_id",
        "schema": "string",
        "description": "",
        "example": "3aa4d20e-5527-4c00-b496-601fbd22520a"
      },
      {
        "name": "skip_pin",
        "schema": "boolean",
        "description": "",
        "example": false
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/rollback/commit",
    "method": "commitRollback",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Commit App Rollback",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/rollback/revert",
    "method": "revertRollback",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Revert App Rollback",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/metrics/bandwidth_daily",
    "method": "getAppDailyBandwidthMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Retrieve App Daily Bandwidth Metrics",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday.",
        "example": "2023-01-17T00:00:00Z"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/metrics/bandwidth_daily",
    "method": "getMultipleDailyMetrics",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Retrieve Multiple Apps' Daily Bandwidth Metrics",
    "parameters": [
      {
        "name": "app_ids",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf",
          "c2a93513-8d9b-4223-9d61-5e7272c81cf5"
        ]
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2023-01-17T00:00:00Z"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/cdn/endpoints",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CDN Endpoints",
    "typeScriptTag": "cdnEndpoints",
    "description": "List All CDN Endpoints",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/cdn/endpoints",
    "method": "createNewEndpoint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CDN Endpoints",
    "typeScriptTag": "cdnEndpoints",
    "description": "Create a New CDN Endpoint",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "892071a0-bb95-49bc-8021-3afd67a210bf"
      },
      {
        "name": "origin",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "static-images.nyc3.digitaloceanspaces.com"
      },
      {
        "name": "endpoint",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "static-images.nyc3.cdn.digitaloceanspaces.com"
      },
      {
        "name": "ttl",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3600,
        "default": 3600
      },
      {
        "name": "certificate_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "892071a0-bb95-49bc-8021-3afd67a210bf"
      },
      {
        "name": "custom_domain",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "static.example.com"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2018-03-21T16:02:37Z"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/cdn/endpoints/{cdn_id}",
    "method": "deleteEndpoint",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CDN Endpoints",
    "typeScriptTag": "cdnEndpoints",
    "description": "Delete a CDN Endpoint",
    "parameters": [
      {
        "name": "cdnId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a CDN endpoint.",
        "example": "19f06b6a-3ace-4315-b086-499a0e521b76"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/cdn/endpoints/{cdn_id}",
    "method": "getExistingEndpoint",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CDN Endpoints",
    "typeScriptTag": "cdnEndpoints",
    "description": "Retrieve an Existing CDN Endpoint",
    "parameters": [
      {
        "name": "cdnId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a CDN endpoint.",
        "example": "19f06b6a-3ace-4315-b086-499a0e521b76"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/cdn/endpoints/{cdn_id}",
    "method": "updateEndpoint",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CDN Endpoints",
    "typeScriptTag": "cdnEndpoints",
    "description": "Update a CDN Endpoint",
    "parameters": [
      {
        "name": "cdnId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a CDN endpoint.",
        "example": "19f06b6a-3ace-4315-b086-499a0e521b76"
      },
      {
        "name": "ttl",
        "schema": "integer",
        "description": "",
        "example": 3600,
        "default": 3600
      },
      {
        "name": "certificate_id",
        "schema": "string",
        "description": "",
        "example": "892071a0-bb95-49bc-8021-3afd67a210bf"
      },
      {
        "name": "custom_domain",
        "schema": "string",
        "description": "",
        "example": "static.example.com"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/cdn/endpoints/{cdn_id}/cache",
    "method": "purgeCache",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CDN Endpoints",
    "typeScriptTag": "cdnEndpoints",
    "description": "Purge the Cache for an Existing CDN Endpoint",
    "parameters": [
      {
        "name": "cdnId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a CDN endpoint.",
        "example": "19f06b6a-3ace-4315-b086-499a0e521b76"
      },
      {
        "name": "files",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "path/to/image.png",
          "path/to/css/*"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/certificates",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "List All Certificates",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Name of expected certificate",
        "example": "certificate-name",
        "default": ""
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/certificates",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Create a New Certificate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/certificates/{certificate_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Delete a Certificate",
    "parameters": [
      {
        "name": "certificateId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a certificate.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/certificates/{certificate_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Retrieve an Existing Certificate",
    "parameters": [
      {
        "name": "certificateId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a certificate.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/customers/my/balance",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Get Customer Balance",
    "parameters": [],
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/customers/my/billing_history",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "List Billing History",
    "parameters": [],
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/customers/my/invoices",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "List All Invoices",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/customers/my/invoices/{invoice_uuid}",
    "method": "getInvoiceByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Retrieve an Invoice by UUID",
    "parameters": [
      {
        "name": "invoiceUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the invoice",
        "example": "22737513-0ea7-4206-8ceb-98a575af7681"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/customers/my/invoices/{invoice_uuid}/csv",
    "method": "getInvoiceCsvByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Retrieve an Invoice CSV by UUID",
    "parameters": [
      {
        "name": "invoiceUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the invoice",
        "example": "22737513-0ea7-4206-8ceb-98a575af7681"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/customers/my/invoices/{invoice_uuid}/pdf",
    "method": "getPdfByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Retrieve an Invoice PDF by UUID",
    "parameters": [
      {
        "name": "invoiceUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the invoice",
        "example": "22737513-0ea7-4206-8ceb-98a575af7681"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/customers/my/invoices/{invoice_uuid}/summary",
    "method": "getInvoiceSummaryByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Retrieve an Invoice Summary by UUID",
    "parameters": [
      {
        "name": "invoiceUuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the invoice",
        "example": "22737513-0ea7-4206-8ceb-98a575af7681"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/options",
    "method": "listOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "List Database Options",
    "parameters": [],
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases",
    "method": "listClusters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "List All Database Clusters",
    "parameters": [
      {
        "name": "tagName",
        "schema": "string",
        "required": false,
        "description": "Limits the results to database clusters with a specific tag.",
        "example": "production"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases",
    "method": "createCluster",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Create a New Database Cluster",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}",
    "method": "destroyCluster",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Destroy a Database Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}",
    "method": "getClusterInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Retrieve an Existing Database Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/config",
    "method": "getClusterConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Retrieve an Existing Database Cluster Configuration",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/config",
    "method": "updateConfigCluster",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Update the Database Configuration for an Existing Database",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "config",
        "schema": "undefined",
        "description": ""
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/ca",
    "method": "getPublicCertificate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Retrieve the Public Certificate",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/online-migration",
    "method": "getMigrationStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Retrieve the Status of an Online Migration",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/online-migration",
    "method": "startOnlineMigration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Start an Online Migration",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "source",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disable_ssl",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "ignore_dbs",
        "schema": "array",
        "description": "",
        "example": [
          "db0",
          "db1"
        ],
        "default": []
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/online-migration/{migration_id}",
    "method": "stopOnlineMigration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Stop an Online Migration",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "migrationId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier assigned to the online migration.",
        "example": "77b28fc8-19ff-11eb-8c9c-c68e24557488"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/migrate",
    "method": "migrateClusterToNewRegion",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Migrate a Database Cluster to a New Region",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "lon1"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/resize",
    "method": "resizeCluster",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Resize a Database Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "size",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "db-s-4vcpu-8gb"
      },
      {
        "name": "num_nodes",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 3
      },
      {
        "name": "storage_size_mib",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 61440
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/firewall",
    "method": "listFirewallRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "List Firewall Rules (Trusted Sources) for a Database Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/firewall",
    "method": "updateFirewallRules",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Update Firewall Rules (Trusted Sources) for a Database",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "rules",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/maintenance",
    "method": "configureMaintenanceWindow",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Configure a Database Cluster's Maintenance Window",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "description",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "Update TimescaleDB to version 1.2.1",
          "Upgrade to PostgreSQL 11.2 and 10.7 bugfix releases"
        ]
      },
      {
        "name": "day",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "tuesday"
      },
      {
        "name": "hour",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "14:00"
      },
      {
        "name": "pending",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/backups",
    "method": "listBackups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "List Backups for a Database Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/replicas",
    "method": "listReadOnlyReplicas",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "List All Read-only Replicas",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/replicas",
    "method": "createReadOnlyReplica",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Create a Read-only Replica",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "production"
        ]
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "read-nyc3-01"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "nyc3"
      },
      {
        "name": "size",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "db-s-2vcpu-4gb"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "creating"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-01-11T18:37:36Z"
      },
      {
        "name": "private_network_uuid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "9423cbad-9211-442f-820b-ef6915e99b5f"
      },
      {
        "name": "connection",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "private_connection",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "storage_size_mib",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 61440
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/events",
    "method": "listEventsLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "List all Events Logs",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/replicas/{replica_name}",
    "method": "destroyReadonlyReplica",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Destroy a Read-only Replica",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "replicaName",
        "schema": "string",
        "required": true,
        "description": "The name of the database replica.",
        "example": "read-nyc3-01"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/replicas/{replica_name}",
    "method": "getExistingReadOnlyReplica",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Retrieve an Existing Read-only Replica",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "replicaName",
        "schema": "string",
        "required": true,
        "description": "The name of the database replica.",
        "example": "read-nyc3-01"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/replicas/{replica_name}/promote",
    "method": "promoteReadonlyReplicaToPrimary",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Promote a Read-only Replica to become a Primary Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "replicaName",
        "schema": "string",
        "required": true,
        "description": "The name of the database replica.",
        "example": "read-nyc3-01"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/users",
    "method": "listUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "List all Database Users",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/users",
    "method": "addUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Add a Database User",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/users/{username}",
    "method": "removeUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Remove a Database User",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The name of the database user.",
        "example": "app-01"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/users/{username}",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Retrieve an Existing Database User",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The name of the database user.",
        "example": "app-01"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/users/{username}",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Update a Database User",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The name of the database user.",
        "example": "app-01"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/users/{username}/reset_auth",
    "method": "resetUserAuth",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Reset a Database User's Password or Authentication Method",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The name of the database user.",
        "example": "app-01"
      },
      {
        "name": "mysql_settings",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/dbs",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "List All Databases",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/dbs",
    "method": "add",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Add a New Database",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "alpha"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/dbs/{database_name}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Delete a Database",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "databaseName",
        "schema": "string",
        "required": true,
        "description": "The name of the database.",
        "example": "alpha"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/dbs/{database_name}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Retrieve an Existing Database",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "databaseName",
        "schema": "string",
        "required": true,
        "description": "The name of the database.",
        "example": "alpha"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/pools",
    "method": "listConnectionPools",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "List Connection Pools (PostgreSQL)",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/pools",
    "method": "addNewConnectionPool",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Add a New Connection Pool (PostgreSQL)",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "backend-pool"
      },
      {
        "name": "mode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "transaction"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10
      },
      {
        "name": "db",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "defaultdb"
      },
      {
        "name": "user",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "doadmin"
      },
      {
        "name": "connection",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "private_connection",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "standby_connection",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "standby_private_connection",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/pools/{pool_name}",
    "method": "deleteConnectionPool",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Delete a Connection Pool (PostgreSQL)",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "poolName",
        "schema": "string",
        "required": true,
        "description": "The name used to identify the connection pool.",
        "example": "backend-pool"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/pools/{pool_name}",
    "method": "getConnectionPool",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Retrieve Existing Connection Pool (PostgreSQL)",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "poolName",
        "schema": "string",
        "required": true,
        "description": "The name used to identify the connection pool.",
        "example": "backend-pool"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/pools/{pool_name}",
    "method": "updateConnectionPoolPostgresql",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Update Connection Pools (PostgreSQL)",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "poolName",
        "schema": "string",
        "required": true,
        "description": "The name used to identify the connection pool.",
        "example": "backend-pool"
      },
      {
        "name": "mode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "transaction"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10
      },
      {
        "name": "db",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "defaultdb"
      },
      {
        "name": "user",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "doadmin"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/eviction_policy",
    "method": "getEvictionPolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Retrieve the Eviction Policy for a Redis Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/eviction_policy",
    "method": "configureEvictionPolicy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Configure the Eviction Policy for a Redis Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "eviction_policy",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "allkeys_lru"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/sql_mode",
    "method": "getSqlMode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Retrieve the SQL Modes for a MySQL Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/sql_mode",
    "method": "updateSqlMode",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Update SQL Mode for a Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "sql_mode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ANSI,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION,NO_ZERO_DATE,NO_ZERO_IN_DATE,STRICT_ALL_TABLES"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/upgrade",
    "method": "upgradeMajorVersion",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Upgrade Major Version for a Database",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "version",
        "schema": "string",
        "description": "",
        "example": "8"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/topics",
    "method": "listTopicsKafkaCluster",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "List Topics for a Kafka Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/topics",
    "method": "createTopicKafkaCluster",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Create Topic for a Kafka Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "customer-events"
      },
      {
        "name": "partitions",
        "schema": "number",
        "description": "",
        "example": 3
      },
      {
        "name": "replication",
        "schema": "number",
        "description": "",
        "example": 2
      },
      {
        "name": "config",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/topics/{topic_name}",
    "method": "deleteTopicKafkaCluster",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Delete Topic for a Kafka Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "topicName",
        "schema": "string",
        "required": true,
        "description": "The name used to identify the Kafka topic.",
        "example": "customer-events"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/topics/{topic_name}",
    "method": "getTopicKafkaCluster",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Get Topic for a Kafka Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "topicName",
        "schema": "string",
        "required": true,
        "description": "The name used to identify the Kafka topic.",
        "example": "customer-events"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/databases/{database_cluster_uuid}/topics/{topic_name}",
    "method": "updateTopicKafkaCluster",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Update Topic for a Kafka Cluster",
    "parameters": [
      {
        "name": "databaseClusterUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a database cluster.",
        "example": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30"
      },
      {
        "name": "topicName",
        "schema": "string",
        "required": true,
        "description": "The name used to identify the Kafka topic.",
        "example": "customer-events"
      },
      {
        "name": "replication_factor",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "partition_count",
        "schema": "integer",
        "description": "",
        "example": 3
      },
      {
        "name": "config",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/domains",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "List All Domains",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/domains",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Create a New Domain",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "example.com"
      },
      {
        "name": "ip_address",
        "schema": "string",
        "description": "",
        "example": "192.0.2.1"
      },
      {
        "name": "ttl",
        "schema": "integer",
        "description": "",
        "example": 1800
      },
      {
        "name": "zone_file",
        "schema": "string",
        "description": "",
        "example": "$ORIGIN example.com.\n$TTL 1800\nexample.com. IN SOA ns1.digitalocean.com. hostmaster.example.com. 1415982609 10800 3600 604800 1800\nexample.com. 1800 IN NS ns1.digitalocean.com.\nexample.com. 1800 IN NS ns2.digitalocean.com.\nexample.com. 1800 IN NS ns3.digitalocean.com.\nexample.com. 1800 IN A 1.2.3.4\n"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/domains/{domain_name}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Delete a Domain",
    "parameters": [
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "The name of the domain itself.",
        "example": "example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/domains/{domain_name}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Retrieve an Existing Domain",
    "parameters": [
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "The name of the domain itself.",
        "example": "example.com"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/domains/{domain_name}/records",
    "method": "listAllRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain Records",
    "typeScriptTag": "domainRecords",
    "description": "List All Domain Records",
    "parameters": [
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "The name of the domain itself.",
        "example": "example.com"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "A fully qualified record name. For example, to only include records matching sub.example.com, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`.",
        "example": "sub.example.com"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "The type of the DNS record. For example: A, CNAME, TXT, ...",
        "example": "A"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/domains/{domain_name}/records",
    "method": "createNewRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domain Records",
    "typeScriptTag": "domainRecords",
    "description": "Create a New Domain Record",
    "parameters": [
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "The name of the domain itself.",
        "example": "example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/domains/{domain_name}/records/{domain_record_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Domain Records",
    "typeScriptTag": "domainRecords",
    "description": "Delete a Domain Record",
    "parameters": [
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "The name of the domain itself.",
        "example": "example.com"
      },
      {
        "name": "domainRecordId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the domain record.",
        "example": 3352896
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/domains/{domain_name}/records/{domain_record_id}",
    "method": "getExistingRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain Records",
    "typeScriptTag": "domainRecords",
    "description": "Retrieve an Existing Domain Record",
    "parameters": [
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "The name of the domain itself.",
        "example": "example.com"
      },
      {
        "name": "domainRecordId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the domain record.",
        "example": 3352896
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/domains/{domain_name}/records/{domain_record_id}",
    "method": "updateRecordById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Domain Records",
    "typeScriptTag": "domainRecords",
    "description": "Update a Domain Record",
    "parameters": [
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "The name of the domain itself.",
        "example": "example.com"
      },
      {
        "name": "domainRecordId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the domain record.",
        "example": 3352896
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 28448429
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NS"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@"
      },
      {
        "name": "data",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ns1.digitalocean.com"
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "port",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "ttl",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1800
      },
      {
        "name": "weight",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "flags",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/domains/{domain_name}/records/{domain_record_id}",
    "method": "updateRecordById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Domain Records",
    "typeScriptTag": "domainRecords",
    "description": "Update a Domain Record",
    "parameters": [
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "The name of the domain itself.",
        "example": "example.com"
      },
      {
        "name": "domainRecordId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the domain record.",
        "example": 3352896
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 28448429
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NS"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@"
      },
      {
        "name": "data",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ns1.digitalocean.com"
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "port",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "ttl",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1800
      },
      {
        "name": "weight",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "flags",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets",
    "method": "deleteByTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "Deleting Droplets by Tag",
    "parameters": [
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "Specifies Droplets to be deleted by tag.",
        "example": "env:test"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "List All Droplets",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
      },
      {
        "name": "tagName",
        "schema": "string",
        "required": false,
        "description": "Used to filter Droplets by a specific tag. Can not be combined with `name`.",
        "example": "env:prod"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Used to filter list response by Droplet name returning only exact matches. It is case-insensitive and can not be combined with `tag_name`.",
        "example": "web-01"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "Create a New Droplet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "Delete an Existing Droplet",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "Retrieve an Existing Droplet",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}/backups",
    "method": "listBackups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "List Backups for a Droplet",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}/snapshots",
    "method": "listSnapshots",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "List Snapshots for a Droplet",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}/actions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Droplet Actions",
    "typeScriptTag": "dropletActions",
    "description": "List Actions for a Droplet",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}/actions",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Droplet Actions",
    "typeScriptTag": "dropletActions",
    "description": "Initiate a Droplet Action",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/actions",
    "method": "actOnTaggedDroplets",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Droplet Actions",
    "typeScriptTag": "dropletActions",
    "description": "Acting on Tagged Droplets",
    "parameters": [
      {
        "name": "tagName",
        "schema": "string",
        "required": false,
        "description": "Used to filter Droplets by a specific tag. Can not be combined with `name`.",
        "example": "env:prod"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}/actions/{action_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Droplet Actions",
    "typeScriptTag": "dropletActions",
    "description": "Retrieve a Droplet Action",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
      },
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "A unique numeric ID that can be used to identify and reference an action.",
        "example": 36804636
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}/kernels",
    "method": "listKernels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "List All Available Kernels for a Droplet",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}/firewalls",
    "method": "listFirewalls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "List all Firewalls Applied to a Droplet",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}/neighbors",
    "method": "listNeighbors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "List Neighbors for a Droplet",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}/destroy_with_associated_resources",
    "method": "listAssociatedResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "List Associated Resources for a Droplet",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}/destroy_with_associated_resources/selective",
    "method": "destroyAssociatedResourcesSelective",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "Selectively Destroy a Droplet and its Associated Resources",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
      },
      {
        "name": "floating_ips",
        "schema": "array",
        "description": "",
        "example": [
          "6186916"
        ]
      },
      {
        "name": "reserved_ips",
        "schema": "array",
        "description": "",
        "example": [
          "6186916"
        ]
      },
      {
        "name": "snapshots",
        "schema": "array",
        "description": "",
        "example": [
          "61486916"
        ]
      },
      {
        "name": "volumes",
        "schema": "array",
        "description": "",
        "example": [
          "ba49449a-7435-11ea-b89e-0a58ac14480f"
        ]
      },
      {
        "name": "volume_snapshots",
        "schema": "array",
        "description": "",
        "example": [
          "edb0478d-7436-11ea-86e6-0a58ac144b91"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}/destroy_with_associated_resources/dangerous",
    "method": "deleteDangerous",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "Destroy a Droplet and All of its Associated Resources (Dangerous)",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
      },
      {
        "name": "xDangerous",
        "schema": "boolean",
        "required": true,
        "description": "Acknowledge this action will destroy the Droplet and all associated resources and _can not_ be reversed.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}/destroy_with_associated_resources/status",
    "method": "checkDestroyStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "Check Status of a Droplet Destroy with Associated Resources Request",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An objects containing information about a resources scheduled for deletion."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/droplets/{droplet_id}/destroy_with_associated_resources/retry",
    "method": "retryDestroyWithAssociatedResources",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "Retry a Droplet Destroy with Associated Resources Request",
    "parameters": [
      {
        "name": "dropletId",
        "schema": "integer",
        "required": true,
        "description": "A unique identifier for a Droplet instance.",
        "example": 3164444
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/firewalls",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "List All Firewalls",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/firewalls",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Create a New Firewall",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/firewalls/{firewall_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Delete a Firewall",
    "parameters": [
      {
        "name": "firewallId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to identify and reference a firewall.",
        "example": "bb4b2611-3d72-467b-8602-280330ecd65c"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/firewalls/{firewall_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Retrieve an Existing Firewall",
    "parameters": [
      {
        "name": "firewallId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to identify and reference a firewall.",
        "example": "bb4b2611-3d72-467b-8602-280330ecd65c"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/firewalls/{firewall_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Update a Firewall",
    "parameters": [
      {
        "name": "firewallId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to identify and reference a firewall.",
        "example": "bb4b2611-3d72-467b-8602-280330ecd65c"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/firewalls/{firewall_id}/droplets",
    "method": "removeDroplets",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Remove Droplets from a Firewall",
    "parameters": [
      {
        "name": "firewallId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to identify and reference a firewall.",
        "example": "bb4b2611-3d72-467b-8602-280330ecd65c"
      },
      {
        "name": "droplet_ids",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          49696269
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/firewalls/{firewall_id}/droplets",
    "method": "addDroplets",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Add Droplets to a Firewall",
    "parameters": [
      {
        "name": "firewallId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to identify and reference a firewall.",
        "example": "bb4b2611-3d72-467b-8602-280330ecd65c"
      },
      {
        "name": "droplet_ids",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          49696269
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/firewalls/{firewall_id}/tags",
    "method": "removeTags",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Remove Tags from a Firewall",
    "parameters": [
      {
        "name": "firewallId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to identify and reference a firewall.",
        "example": "bb4b2611-3d72-467b-8602-280330ecd65c"
      },
      {
        "name": "tags",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/firewalls/{firewall_id}/tags",
    "method": "addTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Add Tags to a Firewall",
    "parameters": [
      {
        "name": "firewallId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to identify and reference a firewall.",
        "example": "bb4b2611-3d72-467b-8602-280330ecd65c"
      },
      {
        "name": "tags",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/firewalls/{firewall_id}/rules",
    "method": "removeRules",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Remove Rules from a Firewall",
    "parameters": [
      {
        "name": "firewallId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to identify and reference a firewall.",
        "example": "bb4b2611-3d72-467b-8602-280330ecd65c"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/firewalls/{firewall_id}/rules",
    "method": "addRules",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Add Rules to a Firewall",
    "parameters": [
      {
        "name": "firewallId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to identify and reference a firewall.",
        "example": "bb4b2611-3d72-467b-8602-280330ecd65c"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/floating_ips",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Floating IPs",
    "typeScriptTag": "floatingIPs",
    "description": "List All Floating IPs",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/floating_ips",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Floating IPs",
    "typeScriptTag": "floatingIPs",
    "description": "Create a New Floating IP",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/floating_ips/{floating_ip}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Floating IPs",
    "typeScriptTag": "floatingIPs",
    "description": "Delete a Floating IP",
    "parameters": [
      {
        "name": "floatingIp",
        "schema": "string",
        "required": true,
        "description": "A floating IP address.",
        "example": "45.55.96.47"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/floating_ips/{floating_ip}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Floating IPs",
    "typeScriptTag": "floatingIPs",
    "description": "Retrieve an Existing Floating IP",
    "parameters": [
      {
        "name": "floatingIp",
        "schema": "string",
        "required": true,
        "description": "A floating IP address.",
        "example": "45.55.96.47"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/floating_ips/{floating_ip}/actions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Floating IP Actions",
    "typeScriptTag": "floatingIpActions",
    "description": "List All Actions for a Floating IP",
    "parameters": [
      {
        "name": "floatingIp",
        "schema": "string",
        "required": true,
        "description": "A floating IP address.",
        "example": "45.55.96.47"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/floating_ips/{floating_ip}/actions",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Floating IP Actions",
    "typeScriptTag": "floatingIpActions",
    "description": "Initiate a Floating IP Action",
    "parameters": [
      {
        "name": "floatingIp",
        "schema": "string",
        "required": true,
        "description": "A floating IP address.",
        "example": "45.55.96.47"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/floating_ips/{floating_ip}/actions/{action_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Floating IP Actions",
    "typeScriptTag": "floatingIpActions",
    "description": "Retrieve an Existing Floating IP Action",
    "parameters": [
      {
        "name": "floatingIp",
        "schema": "string",
        "required": true,
        "description": "A floating IP address.",
        "example": "45.55.96.47"
      },
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "A unique numeric ID that can be used to identify and reference an action.",
        "example": 36804636
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/functions/namespaces",
    "method": "listNamespaces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Functions",
    "typeScriptTag": "functions",
    "description": "List Namespaces",
    "parameters": [],
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/functions/namespaces",
    "method": "createNamespace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Functions",
    "typeScriptTag": "functions",
    "description": "Create Namespace",
    "parameters": [
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "nyc1"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my namespace"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/functions/namespaces/{namespace_id}",
    "method": "deleteNamespace",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Functions",
    "typeScriptTag": "functions",
    "description": "Delete Namespace",
    "parameters": [
      {
        "name": "namespaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the namespace to be managed.",
        "example": "fn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/functions/namespaces/{namespace_id}",
    "method": "getNamespaceDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Functions",
    "typeScriptTag": "functions",
    "description": "Get Namespace",
    "parameters": [
      {
        "name": "namespaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the namespace to be managed.",
        "example": "fn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/functions/namespaces/{namespace_id}/triggers",
    "method": "listTriggers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Functions",
    "typeScriptTag": "functions",
    "description": "List Triggers",
    "parameters": [
      {
        "name": "namespaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the namespace to be managed.",
        "example": "fn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/functions/namespaces/{namespace_id}/triggers",
    "method": "createTriggerInNamespace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Functions",
    "typeScriptTag": "functions",
    "description": "Create Trigger",
    "parameters": [
      {
        "name": "namespaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the namespace to be managed.",
        "example": "fn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my trigger"
      },
      {
        "name": "function",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "hello"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCHEDULED"
      },
      {
        "name": "is_enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "scheduled_details",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}",
    "method": "deleteTrigger",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Functions",
    "typeScriptTag": "functions",
    "description": "Delete Trigger",
    "parameters": [
      {
        "name": "namespaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the namespace to be managed.",
        "example": "fn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      },
      {
        "name": "triggerName",
        "schema": "string",
        "required": true,
        "description": "The name of the trigger to be managed.",
        "example": "my trigger"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}",
    "method": "getTriggerDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Functions",
    "typeScriptTag": "functions",
    "description": "Get Trigger",
    "parameters": [
      {
        "name": "namespaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the namespace to be managed.",
        "example": "fn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      },
      {
        "name": "triggerName",
        "schema": "string",
        "required": true,
        "description": "The name of the trigger to be managed.",
        "example": "my trigger"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}",
    "method": "updateTriggerDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Functions",
    "typeScriptTag": "functions",
    "description": "Update Trigger",
    "parameters": [
      {
        "name": "namespaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the namespace to be managed.",
        "example": "fn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      },
      {
        "name": "triggerName",
        "schema": "string",
        "required": true,
        "description": "The name of the trigger to be managed.",
        "example": "my trigger"
      },
      {
        "name": "is_enabled",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "scheduled_details",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/images",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "List All Images",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Filters results based on image type which can be either `application` or `distribution`.",
        "example": "distribution"
      },
      {
        "name": "private",
        "schema": "boolean",
        "required": false,
        "description": "Used to filter only user images.",
        "example": true
      },
      {
        "name": "tagName",
        "schema": "string",
        "required": false,
        "description": "Used to filter images by a specific tag.",
        "example": "base-image"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/images",
    "method": "importCustomImageFromUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Create a Custom Image",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Cloud-optimized image w/ small footprint"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ubuntu-18.04-minimal"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "http://cloud-images.ubuntu.com/minimal/releases/bionic/release/ubuntu-18.04-minimal-cloudimg-amd64.img"
      },
      {
        "name": "distribution",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Ubuntu"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "nyc3"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/images/{image_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Delete an Image",
    "parameters": [
      {
        "name": "imageId",
        "schema": "integer",
        "required": true,
        "description": "A unique number that can be used to identify and reference a specific image.",
        "example": 62137902
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/images/{image_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Retrieve an Existing Image",
    "parameters": [
      {
        "name": "imageId",
        "schema": "undefined",
        "required": true,
        "description": "A unique number (id) or string (slug) used to identify and reference a\nspecific image.\n\n**Public** images can be identified by image `id` or `slug`.\n\n**Private** images *must* be identified by image `id`.\n"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/images/{image_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Update an Image",
    "parameters": [
      {
        "name": "imageId",
        "schema": "integer",
        "required": true,
        "description": "A unique number that can be used to identify and reference a specific image.",
        "example": 62137902
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": " "
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Nifty New Snapshot"
      },
      {
        "name": "distribution",
        "schema": "string",
        "description": "",
        "example": "Ubuntu"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/images/{image_id}/actions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Image Actions",
    "typeScriptTag": "imageActions",
    "description": "List All Actions for an Image",
    "parameters": [
      {
        "name": "imageId",
        "schema": "integer",
        "required": true,
        "description": "A unique number that can be used to identify and reference a specific image.",
        "example": 62137902
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/images/{image_id}/actions",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Image Actions",
    "typeScriptTag": "imageActions",
    "description": "Initiate an Image Action",
    "parameters": [
      {
        "name": "imageId",
        "schema": "integer",
        "required": true,
        "description": "A unique number that can be used to identify and reference a specific image.",
        "example": 62137902
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/images/{image_id}/actions/{action_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Image Actions",
    "typeScriptTag": "imageActions",
    "description": "Retrieve an Existing Action",
    "parameters": [
      {
        "name": "imageId",
        "schema": "integer",
        "required": true,
        "description": "A unique number that can be used to identify and reference a specific image.",
        "example": 62137902
      },
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "A unique numeric ID that can be used to identify and reference an action.",
        "example": 36804636
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters",
    "method": "listClusters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "List All Kubernetes Clusters",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters",
    "method": "createNewCluster",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Create a New Kubernetes Cluster",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "k8s",
          "k8s:bd5f5959-5e1e-4205-a714-a914373942af",
          "production",
          "web-team"
        ]
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1.18.6-do.0"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "prod-cluster-01"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "nyc1"
      },
      {
        "name": "cluster_subnet",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.244.0.0/16"
      },
      {
        "name": "service_subnet",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.245.0.0/16"
      },
      {
        "name": "vpc_uuid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "c33931f2-a26a-4e61-b85c-4e95a2ec431b"
      },
      {
        "name": "ipv4",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "68.183.121.157"
      },
      {
        "name": "endpoint",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://bd5f5959-5e1e-4205-a714-a914373942af.k8s.ondigitalocean.com"
      },
      {
        "name": "node_pools",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "maintenance_policy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_upgrade",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "status",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2018-11-15T16:00:11Z"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2018-11-15T16:00:11Z"
      },
      {
        "name": "surge_upgrade",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "ha",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "registry_enabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}",
    "method": "deleteCluster",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Delete a Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}",
    "method": "getClusterInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Retrieve an Existing Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}",
    "method": "updateCluster",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Update a Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "k8s",
          "k8s:bd5f5959-5e1e-4205-a714-a914373942af",
          "production",
          "web-team"
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "prod-cluster-01"
      },
      {
        "name": "maintenance_policy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_upgrade",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "surge_upgrade",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "ha",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources",
    "method": "listAssociatedResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "List Associated Resources for Cluster Deletion",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An object containing the IDs of resources associated with a Kubernetes cluster."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources/selective",
    "method": "selectiveClusterDestroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Selectively Delete a Cluster and its Associated Resources",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "load_balancers",
        "schema": "array",
        "description": "",
        "example": [
          "4de7ac8b-495b-4884-9a69-1050c6793cd6"
        ]
      },
      {
        "name": "volumes",
        "schema": "array",
        "description": "",
        "example": [
          "ba49449a-7435-11ea-b89e-0a58ac14480f"
        ]
      },
      {
        "name": "volume_snapshots",
        "schema": "array",
        "description": "",
        "example": [
          "edb0478d-7436-11ea-86e6-0a58ac144b91"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources/dangerous",
    "method": "deleteClusterAssociatedResourcesDangerous",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Delete a Cluster and All of its Associated Resources (Dangerous)",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/kubeconfig",
    "method": "getKubeconfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Retrieve the kubeconfig for a Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "expirySeconds",
        "schema": "integer",
        "required": false,
        "description": "The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry.",
        "example": 300,
        "default": 0
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/credentials",
    "method": "getCredentialsByClusterId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Retrieve Credentials for a Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "expirySeconds",
        "schema": "integer",
        "required": false,
        "description": "The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry.",
        "example": 300,
        "default": 0
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/upgrades",
    "method": "getAvailableUpgrades",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Retrieve Available Upgrades for an Existing Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/upgrade",
    "method": "upgradeCluster",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Upgrade a Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "version",
        "schema": "string",
        "description": "",
        "example": "1.16.13-do.0"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/node_pools",
    "method": "listNodePools",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "List All Node Pools in a Kubernetes Clusters",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/node_pools",
    "method": "addNodePool",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Add a Node Pool to a Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "s-1vcpu-2gb"
      },
      {
        "name": "count",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 3
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "new-pool"
      },
      {
        "name": "auto_scale",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "min_nodes",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 3
      },
      {
        "name": "max_nodes",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 6
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}",
    "method": "deleteNodePool",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Delete a Node Pool in a Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "nodePoolId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes node pool.",
        "example": "cdda885e-7663-40c8-bc74-3a036c66545d"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}",
    "method": "getNodePool",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Retrieve a Node Pool for a Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "nodePoolId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes node pool.",
        "example": "cdda885e-7663-40c8-bc74-3a036c66545d"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}",
    "method": "updateNodePool",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Update a Node Pool in a Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "nodePoolId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes node pool.",
        "example": "cdda885e-7663-40c8-bc74-3a036c66545d"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "k8s",
          "k8s:bd5f5959-5e1e-4205-a714-a914373942af",
          "k8s-worker",
          "production",
          "web-team"
        ]
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "cdda885e-7663-40c8-bc74-3a036c66545d"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "frontend-pool"
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "",
        "example": 3
      },
      {
        "name": "labels",
        "schema": "object",
        "description": "",
        "example": null
      },
      {
        "name": "taints",
        "schema": "array",
        "description": ""
      },
      {
        "name": "auto_scale",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "min_nodes",
        "schema": "integer",
        "description": "",
        "example": 3
      },
      {
        "name": "max_nodes",
        "schema": "integer",
        "description": "",
        "example": 6
      },
      {
        "name": "nodes",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/nodes/{node_id}",
    "method": "deleteNodeInNodePool",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Delete a Node in a Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "nodePoolId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes node pool.",
        "example": "cdda885e-7663-40c8-bc74-3a036c66545d"
      },
      {
        "name": "nodeId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a node in a Kubernetes node pool.",
        "example": "478247f8-b1bb-4f7a-8db9-2a5f8d4b8f8f"
      },
      {
        "name": "skipDrain",
        "schema": "integer",
        "required": false,
        "description": "Specifies whether or not to drain workloads from a node before it is deleted. Setting it to `1` causes node draining to be skipped. Omitting the query parameter or setting its value to `0` carries out draining prior to deletion.",
        "example": 1,
        "default": 0
      },
      {
        "name": "replace",
        "schema": "integer",
        "required": false,
        "description": "Specifies whether or not to replace a node after it has been deleted. Setting it to `1` causes the node to be replaced by a new one after deletion. Omitting the query parameter or setting its value to `0` deletes without replacement.",
        "example": 1,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/recycle",
    "method": "recycleNodePool",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Recycle a Kubernetes Node Pool",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "nodePoolId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes node pool.",
        "example": "cdda885e-7663-40c8-bc74-3a036c66545d"
      },
      {
        "name": "nodes",
        "schema": "array",
        "description": "",
        "example": [
          "d8db5e1a-6103-43b5-a7b3-8a948210a9fc"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/user",
    "method": "getUserInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Retrieve User Information for a Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/options",
    "method": "listOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "List Available Regions, Node Sizes, and Versions of Kubernetes",
    "parameters": [],
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/clusterlint",
    "method": "getClusterLintDiagnostics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Fetch Clusterlint Diagnostics for a Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "runId",
        "schema": "string",
        "required": false,
        "description": "Specifies the clusterlint run whose results will be retrieved.",
        "example": "50c2f44c-011d-493e-aee5-361a4a0d1844"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/clusters/{cluster_id}/clusterlint",
    "method": "runClusterlintChecks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Run Clusterlint Checks on a Kubernetes Cluster",
    "parameters": [
      {
        "name": "clusterId",
        "schema": "string",
        "required": true,
        "description": "A unique ID that can be used to reference a Kubernetes cluster.",
        "example": "bd5f5959-5e1e-4205-a714-a914373942af"
      },
      {
        "name": "include_groups",
        "schema": "array",
        "description": "",
        "example": [
          "basic",
          "doks",
          "security"
        ]
      },
      {
        "name": "include_checks",
        "schema": "array",
        "description": "",
        "example": [
          "bare-pods",
          "resource-requirements"
        ]
      },
      {
        "name": "exclude_groups",
        "schema": "array",
        "description": "",
        "example": [
          "workload-health"
        ]
      },
      {
        "name": "exclude_checks",
        "schema": "array",
        "description": "",
        "example": [
          "default-namespace"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/registry",
    "method": "removeRegistry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Remove Container Registry from Kubernetes Clusters",
    "parameters": [
      {
        "name": "cluster_uuids",
        "schema": "array",
        "description": "",
        "example": [
          "bd5f5959-5e1e-4205-a714-a914373942af",
          "50c2f44c-011d-493e-aee5-361a4a0d1844"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/kubernetes/registry",
    "method": "addContainerRegistryToClusters",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Kubernetes",
    "typeScriptTag": "kubernetes",
    "description": "Add Container Registry to Kubernetes Clusters",
    "parameters": [
      {
        "name": "cluster_uuids",
        "schema": "array",
        "description": "",
        "example": [
          "bd5f5959-5e1e-4205-a714-a914373942af",
          "50c2f44c-011d-493e-aee5-361a4a0d1844"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/load_balancers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "List All Load Balancers",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/load_balancers",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Create a New Load Balancer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/load_balancers/{lb_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Delete a Load Balancer",
    "parameters": [
      {
        "name": "lbId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a load balancer.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/load_balancers/{lb_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Retrieve an Existing Load Balancer",
    "parameters": [
      {
        "name": "lbId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a load balancer.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/load_balancers/{lb_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Update a Load Balancer",
    "parameters": [
      {
        "name": "lbId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a load balancer.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/load_balancers/{lb_id}/droplets",
    "method": "removeDroplets",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Remove Droplets from a Load Balancer",
    "parameters": [
      {
        "name": "lbId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a load balancer.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      },
      {
        "name": "droplet_ids",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          3164444,
          3164445
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/load_balancers/{lb_id}/droplets",
    "method": "assignDroplets",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Add Droplets to a Load Balancer",
    "parameters": [
      {
        "name": "lbId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a load balancer.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      },
      {
        "name": "droplet_ids",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          3164444,
          3164445
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/load_balancers/{lb_id}/forwarding_rules",
    "method": "removeForwardingRules",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Remove Forwarding Rules from a Load Balancer",
    "parameters": [
      {
        "name": "lbId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a load balancer.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      },
      {
        "name": "forwarding_rules",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/load_balancers/{lb_id}/forwarding_rules",
    "method": "addForwardingRules",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Add Forwarding Rules to a Load Balancer",
    "parameters": [
      {
        "name": "lbId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a load balancer.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      },
      {
        "name": "forwarding_rules",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/alerts",
    "method": "listAlertPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "List Alert Policies",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/alerts",
    "method": "createAlertPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Create Alert Policy",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "droplet_tag"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CPU Alert"
      },
      {
        "name": "alerts",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "compare",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GreaterThan"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "entities",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "192018292"
        ]
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "v1/insights/droplet/cpu"
      },
      {
        "name": "value",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 80
      },
      {
        "name": "window",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5m"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/alerts/{alert_uuid}",
    "method": "deleteAlertPolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Delete an Alert Policy",
    "parameters": [
      {
        "name": "alertUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for an alert policy.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/alerts/{alert_uuid}",
    "method": "getExistingAlertPolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Retrieve an Existing Alert Policy",
    "parameters": [
      {
        "name": "alertUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for an alert policy.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/alerts/{alert_uuid}",
    "method": "updateAlertPolicy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Update an Alert Policy",
    "parameters": [
      {
        "name": "alertUuid",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for an alert policy.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "droplet_tag"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CPU Alert"
      },
      {
        "name": "alerts",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "compare",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GreaterThan"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "entities",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "192018292"
        ]
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "v1/insights/droplet/cpu"
      },
      {
        "name": "value",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 80
      },
      {
        "name": "window",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5m"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/droplet/bandwidth",
    "method": "getDropletBandwidthMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get Droplet Bandwidth Metrics",
    "parameters": [
      {
        "name": "hostId",
        "schema": "string",
        "required": true,
        "description": "The droplet ID.",
        "example": "17209102"
      },
      {
        "name": "interface",
        "schema": "string",
        "required": true,
        "description": "The network interface.",
        "example": "private"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": true,
        "description": "The traffic direction.",
        "example": "inbound"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/droplet/cpu",
    "method": "dropletCpuMetricsget",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get Droplet CPU Metrics",
    "parameters": [
      {
        "name": "hostId",
        "schema": "string",
        "required": true,
        "description": "The droplet ID.",
        "example": "17209102"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/droplet/filesystem_free",
    "method": "getDropletFilesystemFreeMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get Droplet Filesystem Free Metrics",
    "parameters": [
      {
        "name": "hostId",
        "schema": "string",
        "required": true,
        "description": "The droplet ID.",
        "example": "17209102"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/droplet/filesystem_size",
    "method": "getDropletFilesystemSizeMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get Droplet Filesystem Size Metrics",
    "parameters": [
      {
        "name": "hostId",
        "schema": "string",
        "required": true,
        "description": "The droplet ID.",
        "example": "17209102"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/droplet/load_1",
    "method": "getDropletLoad1Metrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get Droplet Load1 Metrics",
    "parameters": [
      {
        "name": "hostId",
        "schema": "string",
        "required": true,
        "description": "The droplet ID.",
        "example": "17209102"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/droplet/load_5",
    "method": "dropletLoad5MetricsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get Droplet Load5 Metrics",
    "parameters": [
      {
        "name": "hostId",
        "schema": "string",
        "required": true,
        "description": "The droplet ID.",
        "example": "17209102"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/droplet/load_15",
    "method": "getDropletLoad15Metrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get Droplet Load15 Metrics",
    "parameters": [
      {
        "name": "hostId",
        "schema": "string",
        "required": true,
        "description": "The droplet ID.",
        "example": "17209102"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/droplet/memory_cached",
    "method": "dropletMemoryCachedMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get Droplet Cached Memory Metrics",
    "parameters": [
      {
        "name": "hostId",
        "schema": "string",
        "required": true,
        "description": "The droplet ID.",
        "example": "17209102"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/droplet/memory_free",
    "method": "getDropletMemoryFreeMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get Droplet Free Memory Metrics",
    "parameters": [
      {
        "name": "hostId",
        "schema": "string",
        "required": true,
        "description": "The droplet ID.",
        "example": "17209102"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/droplet/memory_total",
    "method": "getDropletMemoryTotalMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get Droplet Total Memory Metrics",
    "parameters": [
      {
        "name": "hostId",
        "schema": "string",
        "required": true,
        "description": "The droplet ID.",
        "example": "17209102"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/droplet/memory_available",
    "method": "getDropletMemoryAvailableMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get Droplet Available Memory Metrics",
    "parameters": [
      {
        "name": "hostId",
        "schema": "string",
        "required": true,
        "description": "The droplet ID.",
        "example": "17209102"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/apps/memory_percentage",
    "method": "getAppMemoryPercentageMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get App Memory Percentage Metrics",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app UUID.",
        "example": "2db3c021-15ad-4088-bfe8-99dc972b9cf6"
      },
      {
        "name": "appComponent",
        "schema": "string",
        "required": false,
        "description": "The app component name.",
        "example": "sample-application"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/apps/cpu_percentage",
    "method": "getAppCpuPercentageMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get App CPU Percentage Metrics",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app UUID.",
        "example": "2db3c021-15ad-4088-bfe8-99dc972b9cf6"
      },
      {
        "name": "appComponent",
        "schema": "string",
        "required": false,
        "description": "The app component name.",
        "example": "sample-application"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/monitoring/metrics/apps/restart_count",
    "method": "getAppRestartCountMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Get App Restart Count Metrics",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app UUID.",
        "example": "2db3c021-15ad-4088-bfe8-99dc972b9cf6"
      },
      {
        "name": "appComponent",
        "schema": "string",
        "required": false,
        "description": "The app component name.",
        "example": "sample-application"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Timestamp to start metric window.",
        "example": "1620683817"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Timestamp to end metric window.",
        "example": "1620705417"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "List All Projects",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create a Project",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "My website API"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "4e1bfbc3-dc3e-41f2-a18f-1b4d7ba71679"
      },
      {
        "name": "owner_uuid",
        "schema": "string",
        "description": "",
        "example": "99525febec065ca37b2ffe4f852fd2b2581895e7"
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "description": "",
        "example": 258992
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "my-web-api"
      },
      {
        "name": "purpose",
        "schema": "string",
        "description": "",
        "example": "Service or API"
      },
      {
        "name": "environment",
        "schema": "string",
        "description": "",
        "example": "Production"
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": "",
        "example": "2018-09-27T20:10:35Z"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": "",
        "example": "2018-09-27T20:10:35Z"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects/default",
    "method": "getDefaultProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Retrieve the Default Project",
    "parameters": [],
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects/default",
    "method": "updateDefaultProjectAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Patch the Default Project",
    "parameters": [],
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects/default",
    "method": "updateDefaultProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update the Default Project",
    "parameters": [],
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects/{project_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Delete an Existing Project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a project.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "412",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects/{project_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Retrieve an Existing Project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a project.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects/{project_id}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Patch a Project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a project.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects/{project_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update a Project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a project.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects/{project_id}/resources",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project Resources",
    "typeScriptTag": "projectResources",
    "description": "List Project Resources",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a project.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects/{project_id}/resources",
    "method": "assignToProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project Resources",
    "typeScriptTag": "projectResources",
    "description": "Assign Resources to a Project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a project.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      },
      {
        "name": "resources",
        "schema": "array",
        "description": "",
        "example": [
          "do:droplet:13457723"
        ]
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects/default/resources",
    "method": "listDefault",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project Resources",
    "typeScriptTag": "projectResources",
    "description": "List Default Project Resources",
    "parameters": [],
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/projects/default/resources",
    "method": "assignResourcesToDefault",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project Resources",
    "typeScriptTag": "projectResources",
    "description": "Assign Resources to Default Project",
    "parameters": [
      {
        "name": "resources",
        "schema": "array",
        "description": "",
        "example": [
          "do:droplet:13457723"
        ]
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/regions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Regions",
    "typeScriptTag": "regions",
    "description": "List All Data Center Regions",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "Delete Container Registry",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "Get Container Registry Information",
    "parameters": [],
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "Create Container Registry",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "example"
      },
      {
        "name": "subscription_tier_slug",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "basic"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "fra1"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/subscription",
    "method": "getSubscriptionInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "Get Subscription Information",
    "parameters": [],
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/subscription",
    "method": "updateSubscriptionTier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "Update Subscription Tier",
    "parameters": [
      {
        "name": "tier_slug",
        "schema": "string",
        "description": "",
        "example": "basic"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/docker-credentials",
    "method": "getDockerCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "Get Docker Credentials for Container Registry",
    "parameters": [
      {
        "name": "expirySeconds",
        "schema": "integer",
        "required": false,
        "description": "The duration in seconds that the returned registry credentials will be valid. If not set or 0, the credentials will not expire.",
        "example": 3600,
        "default": 0
      },
      {
        "name": "readWrite",
        "schema": "boolean",
        "required": false,
        "description": "By default, the registry credentials allow for read-only access. Set this query parameter to `true` to obtain read-write credentials.",
        "example": true,
        "default": false
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/validate-name",
    "method": "validateName",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "Validate a Container Registry Name",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "example"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/{registry_name}/repositories",
    "method": "listRepositories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "List All Container Registry Repositories",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
      },
      {
        "name": "registryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry.",
        "example": "example"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/{registry_name}/repositoriesV2",
    "method": "listRepositoriesV2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "List All Container Registry Repositories (V2)",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return. Ignored when 'page_token' is provided.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageToken",
        "schema": "string",
        "required": false,
        "description": "Token to retrieve of the next or previous set of results more quickly than using 'page'.",
        "example": "eyJUb2tlbiI6IkNnZGpiMjlz"
      },
      {
        "name": "registryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry.",
        "example": "example"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/{registry_name}/repositories/{repository_name}/tags",
    "method": "listRepositoryTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "List All Container Registry Repository Tags",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
      },
      {
        "name": "registryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry.",
        "example": "example"
      },
      {
        "name": "repositoryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`.",
        "example": "repo-1"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/{registry_name}/repositories/{repository_name}/tags/{repository_tag}",
    "method": "deleteRepositoryTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "Delete Container Registry Repository Tag",
    "parameters": [
      {
        "name": "registryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry.",
        "example": "example"
      },
      {
        "name": "repositoryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`.",
        "example": "repo-1"
      },
      {
        "name": "repositoryTag",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry repository tag.",
        "example": "06a447a"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/{registry_name}/repositories/{repository_name}/digests",
    "method": "listRepositoryManifests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "List All Container Registry Repository Manifests",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
      },
      {
        "name": "registryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry.",
        "example": "example"
      },
      {
        "name": "repositoryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`.",
        "example": "repo-1"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/{registry_name}/repositories/{repository_name}/digests/{manifest_digest}",
    "method": "deleteRepositoryManifestByDigest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "Delete Container Registry Repository Manifest",
    "parameters": [
      {
        "name": "registryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry.",
        "example": "example"
      },
      {
        "name": "repositoryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`.",
        "example": "repo-1"
      },
      {
        "name": "manifestDigest",
        "schema": "string",
        "required": true,
        "description": "The manifest digest of a container registry repository tag.",
        "example": "sha256:cb8a924afdf0229ef7515d9e5b3024e23b3eb03ddbba287f4a19c6ac90b8d221"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/{registry_name}/garbage-collection",
    "method": "getActiveGarbageCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "Get Active Garbage Collection",
    "parameters": [
      {
        "name": "registryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry.",
        "example": "example"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/{registry_name}/garbage-collection",
    "method": "startGarbageCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "Start Garbage Collection",
    "parameters": [
      {
        "name": "registryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry.",
        "example": "example"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/{registry_name}/garbage-collections",
    "method": "listGarbageCollections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "List Garbage Collections",
    "parameters": [
      {
        "name": "registryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry.",
        "example": "example"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/{registry_name}/garbage-collection/{garbage_collection_uuid}",
    "method": "cancelGarbageCollection",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "Update Garbage Collection",
    "parameters": [
      {
        "name": "registryName",
        "schema": "string",
        "required": true,
        "description": "The name of a container registry.",
        "example": "example"
      },
      {
        "name": "garbageCollectionUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of a garbage collection run.",
        "example": "eff0feee-49c7-4e8f-ba5c-a320c109c8a8"
      },
      {
        "name": "cancel",
        "schema": "boolean",
        "description": "",
        "example": true
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/registry/options",
    "method": "listOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Container Registry",
    "typeScriptTag": "containerRegistry",
    "description": "List Registry Options (Subscription Tiers and Available Regions)",
    "parameters": [],
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/reports/droplet_neighbors_ids",
    "method": "listDropletNeighbors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Droplets",
    "typeScriptTag": "droplets",
    "description": "List All Droplet Neighbors",
    "parameters": [],
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/reserved_ips",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reserved IPs",
    "typeScriptTag": "reservedIPs",
    "description": "List All Reserved IPs",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/reserved_ips",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reserved IPs",
    "typeScriptTag": "reservedIPs",
    "description": "Create a New Reserved IP",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/reserved_ips/{reserved_ip}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Reserved IPs",
    "typeScriptTag": "reservedIPs",
    "description": "Delete a Reserved IP",
    "parameters": [
      {
        "name": "reservedIp",
        "schema": "string",
        "required": true,
        "description": "A reserved IP address.",
        "example": "45.55.96.47"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/reserved_ips/{reserved_ip}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reserved IPs",
    "typeScriptTag": "reservedIPs",
    "description": "Retrieve an Existing Reserved IP",
    "parameters": [
      {
        "name": "reservedIp",
        "schema": "string",
        "required": true,
        "description": "A reserved IP address.",
        "example": "45.55.96.47"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/reserved_ips/{reserved_ip}/actions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reserved IP Actions",
    "typeScriptTag": "reservedIpActions",
    "description": "List All Actions for a Reserved IP",
    "parameters": [
      {
        "name": "reservedIp",
        "schema": "string",
        "required": true,
        "description": "A reserved IP address.",
        "example": "45.55.96.47"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/reserved_ips/{reserved_ip}/actions",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reserved IP Actions",
    "typeScriptTag": "reservedIpActions",
    "description": "Initiate a Reserved IP Action",
    "parameters": [
      {
        "name": "reservedIp",
        "schema": "string",
        "required": true,
        "description": "A reserved IP address.",
        "example": "45.55.96.47"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/reserved_ips/{reserved_ip}/actions/{action_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reserved IP Actions",
    "typeScriptTag": "reservedIpActions",
    "description": "Retrieve an Existing Reserved IP Action",
    "parameters": [
      {
        "name": "reservedIp",
        "schema": "string",
        "required": true,
        "description": "A reserved IP address.",
        "example": "45.55.96.47"
      },
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "A unique numeric ID that can be used to identify and reference an action.",
        "example": 36804636
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/sizes",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sizes",
    "typeScriptTag": "sizes",
    "description": "List All Droplet Sizes",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/snapshots",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snapshots",
    "typeScriptTag": "snapshots",
    "description": "List All Snapshots",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
      },
      {
        "name": "resourceType",
        "schema": "string",
        "required": false,
        "description": "Used to filter snapshots by a resource type.",
        "example": "droplet"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/snapshots/{snapshot_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Snapshots",
    "typeScriptTag": "snapshots",
    "description": "Delete a Snapshot",
    "parameters": [
      {
        "name": "snapshotId",
        "schema": "undefined",
        "required": true,
        "description": "Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot.",
        "example": 6372321
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/snapshots/{snapshot_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snapshots",
    "typeScriptTag": "snapshots",
    "description": "Retrieve an Existing Snapshot",
    "parameters": [
      {
        "name": "snapshotId",
        "schema": "undefined",
        "required": true,
        "description": "Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot.",
        "example": 6372321
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tags",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List All Tags",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tags",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create a New Tag",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "extra-awesome"
      },
      {
        "name": "resources",
        "schema": "object",
        "description": "",
        "example": {
          "count": 5,
          "last_tagged_uri": "https://api.digitalocean.com/v2/images/7555620",
          "droplets": {
            "count": 1,
            "last_tagged_uri": "https://api.digitalocean.com/v2/droplets/3164444"
          },
          "images": {
            "count": 1,
            "last_tagged_uri": "https://api.digitalocean.com/v2/images/7555620"
          },
          "volumes": {
            "count": 1,
            "last_tagged_uri": "https://api.digitalocean.com/v2/volumes/3d80cb72-342b-4aaa-b92e-4e4abb24a933"
          },
          "volume_snapshots": {
            "count": 1,
            "last_tagged_uri": "https://api.digitalocean.com/v2/snapshots/1f6f46e8-6b60-11e9-be4e-0a58ac144519"
          },
          "databases": {
            "count": 1,
            "last_tagged_uri": "https://api.digitalocean.com/v2/databases/b92438f6-ba03-416c-b642-e9236db91976"
          }
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tags/{tag_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Delete a Tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.",
        "example": "awesome"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tags/{tag_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Retrieve a Tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.",
        "example": "awesome"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tags/{tag_id}/resources",
    "method": "untagResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Untag a Resource",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.",
        "example": "awesome"
      },
      {
        "name": "resources",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "resource_id": "9569411",
            "resource_type": "droplet"
          },
          {
            "resource_id": "7555620",
            "resource_type": "image"
          },
          {
            "resource_id": "3d80cb72-342b-4aaa-b92e-4e4abb24a933",
            "resource_type": "volume"
          }
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tags/{tag_id}/resources",
    "method": "tagResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Tag a Resource",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.",
        "example": "awesome"
      },
      {
        "name": "resources",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "resource_id": "9569411",
            "resource_type": "droplet"
          },
          {
            "resource_id": "7555620",
            "resource_type": "image"
          },
          {
            "resource_id": "3d80cb72-342b-4aaa-b92e-4e4abb24a933",
            "resource_type": "volume"
          }
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/volumes",
    "method": "deleteByRegionAndName",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Block Storage",
    "typeScriptTag": "blockStorage",
    "description": "Delete a Block Storage Volume by Name",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "The block storage volume's name.",
        "example": "example"
      },
      {
        "name": "region",
        "schema": "string",
        "description": "The slug identifier for the region where the resource is available.",
        "example": "nyc3"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/volumes",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Block Storage",
    "typeScriptTag": "blockStorage",
    "description": "List All Block Storage Volumes",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "The block storage volume's name.",
        "example": "example"
      },
      {
        "name": "region",
        "schema": "string",
        "description": "The slug identifier for the region where the resource is available.",
        "example": "nyc3"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/volumes",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Block Storage",
    "typeScriptTag": "blockStorage",
    "description": "Create a New Block Storage Volume",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/volumes/actions",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Block Storage Actions",
    "typeScriptTag": "blockStorageActions",
    "description": "Initiate A Block Storage Action By Volume Name",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/volumes/snapshots/{snapshot_id}",
    "method": "deleteVolumeSnapshot",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Block Storage",
    "typeScriptTag": "blockStorage",
    "description": "Delete a Volume Snapshot",
    "parameters": [
      {
        "name": "snapshotId",
        "schema": "undefined",
        "required": true,
        "description": "Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot.",
        "example": 6372321
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/volumes/snapshots/{snapshot_id}",
    "method": "getSnapshotDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Block Storage",
    "typeScriptTag": "blockStorage",
    "description": "Retrieve an Existing Volume Snapshot",
    "parameters": [
      {
        "name": "snapshotId",
        "schema": "undefined",
        "required": true,
        "description": "Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot.",
        "example": 6372321
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/volumes/{volume_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Block Storage",
    "typeScriptTag": "blockStorage",
    "description": "Delete a Block Storage Volume",
    "parameters": [
      {
        "name": "volumeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the block storage volume.",
        "example": "7724db7c-e098-11e5-b522-000f53304e51"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/volumes/{volume_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Block Storage",
    "typeScriptTag": "blockStorage",
    "description": "Retrieve an Existing Block Storage Volume",
    "parameters": [
      {
        "name": "volumeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the block storage volume.",
        "example": "7724db7c-e098-11e5-b522-000f53304e51"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/volumes/{volume_id}/actions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Block Storage Actions",
    "typeScriptTag": "blockStorageActions",
    "description": "List All Actions for a Volume",
    "parameters": [
      {
        "name": "volumeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the block storage volume.",
        "example": "7724db7c-e098-11e5-b522-000f53304e51"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/volumes/{volume_id}/actions",
    "method": "initiateAttachAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Block Storage Actions",
    "typeScriptTag": "blockStorageActions",
    "description": "Initiate A Block Storage Action By Volume Id",
    "parameters": [
      {
        "name": "volumeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the block storage volume.",
        "example": "7724db7c-e098-11e5-b522-000f53304e51"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/volumes/{volume_id}/actions/{action_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Block Storage Actions",
    "typeScriptTag": "blockStorageActions",
    "description": "Retrieve an Existing Volume Action",
    "parameters": [
      {
        "name": "volumeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the block storage volume.",
        "example": "7724db7c-e098-11e5-b522-000f53304e51"
      },
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "A unique numeric ID that can be used to identify and reference an action.",
        "example": 36804636
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/volumes/{volume_id}/snapshots",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Block Storage",
    "typeScriptTag": "blockStorage",
    "description": "List Snapshots for a Volume",
    "parameters": [
      {
        "name": "volumeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the block storage volume.",
        "example": "7724db7c-e098-11e5-b522-000f53304e51"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/volumes/{volume_id}/snapshots",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Block Storage",
    "typeScriptTag": "blockStorage",
    "description": "Create Snapshot from a Volume",
    "parameters": [
      {
        "name": "volumeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the block storage volume.",
        "example": "7724db7c-e098-11e5-b522-000f53304e51"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "base-image",
          "prod"
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "big-data-snapshot1475261774"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/vpcs",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPCs",
    "typeScriptTag": "vpCs",
    "description": "List All VPCs",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/vpcs",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "VPCs",
    "typeScriptTag": "vpCs",
    "description": "Create a New VPC",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/vpcs/{vpc_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "VPCs",
    "typeScriptTag": "vpCs",
    "description": "Delete a VPC",
    "parameters": [
      {
        "name": "vpcId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a VPC.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/vpcs/{vpc_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPCs",
    "typeScriptTag": "vpCs",
    "description": "Retrieve an Existing VPC",
    "parameters": [
      {
        "name": "vpcId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a VPC.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/vpcs/{vpc_id}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "VPCs",
    "typeScriptTag": "vpCs",
    "description": "Partially Update a VPC",
    "parameters": [
      {
        "name": "vpcId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a VPC.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/vpcs/{vpc_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "VPCs",
    "typeScriptTag": "vpCs",
    "description": "Update a VPC",
    "parameters": [
      {
        "name": "vpcId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a VPC.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/vpcs/{vpc_id}/members",
    "method": "listMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPCs",
    "typeScriptTag": "vpCs",
    "description": "List the Member Resources of a VPC",
    "parameters": [
      {
        "name": "vpcId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a VPC.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      },
      {
        "name": "resourceType",
        "schema": "string",
        "required": false,
        "description": "Used to filter VPC members by a resource type.",
        "example": "droplet"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uptime/checks",
    "method": "listChecks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Uptime",
    "typeScriptTag": "uptime",
    "description": "List All Checks",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uptime/checks",
    "method": "createCheck",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uptime",
    "typeScriptTag": "uptime",
    "description": "Create a New Check",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Landing page check"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "https"
      },
      {
        "name": "target",
        "schema": "string",
        "description": "",
        "example": "https://www.landingpage.com"
      },
      {
        "name": "regions",
        "schema": "array",
        "description": "",
        "example": [
          "us_east",
          "eu_west"
        ]
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uptime/checks/{check_id}",
    "method": "deleteCheck",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Uptime",
    "typeScriptTag": "uptime",
    "description": "Delete a Check",
    "parameters": [
      {
        "name": "checkId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a check.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uptime/checks/{check_id}",
    "method": "getCheckById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Uptime",
    "typeScriptTag": "uptime",
    "description": "Retrieve an Existing Check",
    "parameters": [
      {
        "name": "checkId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a check.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uptime/checks/{check_id}",
    "method": "updateCheckSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Uptime",
    "typeScriptTag": "uptime",
    "description": "Update a Check",
    "parameters": [
      {
        "name": "checkId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a check.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Landing page check"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "https"
      },
      {
        "name": "target",
        "schema": "string",
        "description": "",
        "example": "https://www.landingpage.com"
      },
      {
        "name": "regions",
        "schema": "array",
        "description": "",
        "example": [
          "us_east",
          "eu_west"
        ]
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": true
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uptime/checks/{check_id}/state",
    "method": "getCheckState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Uptime",
    "typeScriptTag": "uptime",
    "description": "Retrieve Check State",
    "parameters": [
      {
        "name": "checkId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a check.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uptime/checks/{check_id}/alerts",
    "method": "listAllAlerts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Uptime",
    "typeScriptTag": "uptime",
    "description": "List All Alerts",
    "parameters": [
      {
        "name": "checkId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a check.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Number of items returned per page",
        "example": 2,
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which 'page' of paginated results to return.",
        "example": 1,
        "default": 1
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uptime/checks/{check_id}/alerts",
    "method": "createNewAlert",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uptime",
    "typeScriptTag": "uptime",
    "description": "Create a New Alert",
    "parameters": [
      {
        "name": "checkId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a check.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uptime/checks/{check_id}/alerts/{alert_id}",
    "method": "deleteAlert",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Uptime",
    "typeScriptTag": "uptime",
    "description": "Delete an Alert",
    "parameters": [
      {
        "name": "checkId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a check.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      },
      {
        "name": "alertId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for an alert.",
        "example": "17f0f0ae-b7e5-4ef6-86e3-aa569db58284"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uptime/checks/{check_id}/alerts/{alert_id}",
    "method": "getExistingAlert",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Uptime",
    "typeScriptTag": "uptime",
    "description": "Retrieve an Existing Alert",
    "parameters": [
      {
        "name": "checkId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a check.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      },
      {
        "name": "alertId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for an alert.",
        "example": "17f0f0ae-b7e5-4ef6-86e3-aa569db58284"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uptime/checks/{check_id}/alerts/{alert_id}",
    "method": "updateAlertSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Uptime",
    "typeScriptTag": "uptime",
    "description": "Update an Alert",
    "parameters": [
      {
        "name": "checkId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for a check.",
        "example": "4de7ac8b-495b-4884-9a69-1050c6793cd6"
      },
      {
        "name": "alertId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier for an alert.",
        "example": "17f0f0ae-b7e5-4ef6-86e3-aa569db58284"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Landing page degraded performance"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "latency"
      },
      {
        "name": "threshold",
        "schema": "integer",
        "description": "",
        "example": 300
      },
      {
        "name": "comparison",
        "schema": "string",
        "description": "",
        "example": "greater_than"
      },
      {
        "name": "notifications",
        "schema": "object",
        "description": ""
      },
      {
        "name": "period",
        "schema": "string",
        "description": "",
        "example": "2m"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="DigitalOcean API"
      apiBaseUrl="https://api.digitalocean.com"
      apiVersion="2.0"
      endpoints={189}
      sdkMethods={300}
      schemas={486}
      parameters={617}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/digitalocean/openapi.yaml"
    />
  );
}
  