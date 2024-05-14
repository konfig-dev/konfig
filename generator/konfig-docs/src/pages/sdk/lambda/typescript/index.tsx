import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function LambdaTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="lambda-typescript-sdk"
      metaDescription={`Lambda provides computation to accelerate human progress. We're a team of Deep Learning engineers building the world's best GPU cloud, clusters, servers, and workstations. Our products power engineers and researchers at the forefront of human knowledge. Customers include Intel, Microsoft, Google, Amazon Research, Tencent, Kaiser Permanente, MIT, Stanford, Harvard, Caltech, Los Alamos National Lab, Disney, and the Department of Defense.`}
      company="Lambda"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lambda/logo.png"
      companyKebabCase="lambda"
      clientNameCamelCase="lambda"
      homepage="lambdalabs.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lambda/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lambda/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["artificial_intelligence","gpu","machine_learning","gpus","distributed_training"]}
      methods={[
  {
    "url": "/instance-types",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InstanceType",
    "typeScriptTag": "instanceType",
    "description": "Retrieve list of offered instance types",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/instances",
    "method": "listRunningInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Instance",
    "typeScriptTag": "instance",
    "description": "List running instances",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/instances/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Instance",
    "typeScriptTag": "instance",
    "description": "List details of a specific instance",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier (https://docs.lambdalabs.com/on-demand-cloud/cloud-api of the instance",
        "example": "0920582c7ff041399e34823a0be62549"
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
      }
    ]
  },
  {
    "url": "/instance-operations/launch",
    "method": "createInstances",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Instance",
    "typeScriptTag": "instance",
    "description": "Launch instances",
    "parameters": [
      {
        "name": "region_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "us-tx-1"
      },
      {
        "name": "instance_type_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "gpu_1x_a100"
      },
      {
        "name": "ssh_key_names",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "file_system_names",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "training-node-1"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/instance-operations/terminate",
    "method": "terminateInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Instance",
    "typeScriptTag": "instance",
    "description": "Terminate an instance",
    "parameters": [
      {
        "name": "instance_ids",
        "schema": "array",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/instance-operations/restart",
    "method": "restartInstances",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Instance",
    "typeScriptTag": "instance",
    "description": "Restart instances",
    "parameters": [
      {
        "name": "instance_ids",
        "schema": "array",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/ssh-keys",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Key",
    "typeScriptTag": "key",
    "description": "List SSH keys",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/ssh-keys",
    "method": "addSshKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Key",
    "typeScriptTag": "key",
    "description": "Add SSH key",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "macbook-pro"
      },
      {
        "name": "public_key",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDfKpav4ILY54InZe27G user"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The added or generated SSH public key. If a new key pair was generated, the response body contains a `private_key` property that *must* be saved locally. Lambda Cloud does not store private keys."
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/ssh-keys/{id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SSHKey",
    "typeScriptTag": "sshKey",
    "description": "Delete SSH key",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier (https://docs.lambdalabs.com/on-demand-cloud/cloud-api of the SSH key",
        "example": "0920582c7ff041399e34823a0be62548"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Deletion successful"
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/file-systems",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FileSystem",
    "typeScriptTag": "fileSystem",
    "description": "List file systems",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Lambda Cloud API"
      apiBaseUrl="https://cloud.lambdalabs.com/api/v1/"
      apiVersion="1.5.3"
      endpoints={9}
      sdkMethods={10}
      schemas={33}
      parameters={12}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lambda/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lambda/openapi.yaml"
      developerDocumentation="docs.lambdalabs.com/on-demand-cloud/cloud-api"
    />
  );
}
  