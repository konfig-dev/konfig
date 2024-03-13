import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BasetenTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="baseten-typescript-sdk"
      metaDescription={`At Baseten we provide all the infrastructure you need to deploy and serve ML models performantly, scalably, and cost-efficiently.Get started in minutes, and avoid getting tangled in complex deployment processes. You can deploy best-in-class open-source models and take advantage of optimized serving for your own models.We also utilize horizontally scalable services that take you from prototype to production, with light-speed inference on infra that autoscales with your traffic.Best in class doesn't mean breaking the bank. Run your models on the best infrastructure without running up costs by taking advantage of our scaled-to-zero feature.`}
      company="Baseten"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baseten/logo.png"
      clientNameCamelCase="baseten"
      homepage="baseten.co"
      lastUpdated={new Date("2024-03-13T17:47:38.295Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baseten/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baseten/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["ai","ml","developer_tools","automation","collaboration","media","cloud","open_source","machine_learning","deployment","scalability","cost_efficiency","llm","stable_diffusion","tts","text_to_audio","text_to_speech","text_to_image","image_to_video","image_classification","text_embeddings","audio_to_text","image_to_text"]}
      methods={[
  {
    "url": "/v1/secrets",
    "method": "getAllSecrets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Secret",
    "typeScriptTag": "secret",
    "description": "Gets all secrets",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of Baseten secrets."
      }
    ]
  },
  {
    "url": "/v1/secrets",
    "method": "upsertNewSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Secret",
    "typeScriptTag": "secret",
    "description": "Upserts a secret",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Baseten secret. Note that we do not support retrieving secret values."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/development",
    "method": "getDevelopmentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployment",
    "typeScriptTag": "deployment",
    "description": "Gets a model's development deployment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A deployment of a model."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/production",
    "method": "getProductionDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployment",
    "typeScriptTag": "deployment",
    "description": "Gets a model's production deployment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A deployment of a model."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/{deployment_id}",
    "method": "detailsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployment",
    "typeScriptTag": "deployment",
    "description": "Gets a model's deployment by id",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A deployment of a model."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/development/autoscaling_settings",
    "method": "updateDevelopmentSetting",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "AutoscalingSetting",
    "typeScriptTag": "autoscalingSetting",
    "description": "Updates a development deployment's autoscaling settings",
    "parameters": [
      {
        "name": "min_replica",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "max_replica",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "autoscaling_window",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "scale_down_delay",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "concurrency_target",
        "schema": "integer",
        "description": "",
        "default": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response to a request to update autoscaling settings."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/production/autoscaling_settings",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "AutoscalingSetting",
    "typeScriptTag": "autoscalingSetting",
    "description": "Updates a production deployment's autoscaling settings",
    "parameters": [
      {
        "name": "min_replica",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "max_replica",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "autoscaling_window",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "scale_down_delay",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "concurrency_target",
        "schema": "integer",
        "description": "",
        "default": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response to a request to update autoscaling settings."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/{deployment_id}/autoscaling_settings",
    "method": "updateDeploymentSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "AutoscalingSetting",
    "typeScriptTag": "autoscalingSetting",
    "description": "Updates a deployment's autoscaling settings",
    "parameters": [
      {
        "name": "min_replica",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "max_replica",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "autoscaling_window",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "scale_down_delay",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "concurrency_target",
        "schema": "integer",
        "description": "",
        "default": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response to a request to update autoscaling settings."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Baseten management API"
      apiBaseUrl="https://api.baseten.co"
      apiVersion="1.0.0"
      endpoints={7}
      sdkMethods={14}
      schemas={9}
      parameters={17}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baseten/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/baseten/openapi.yaml"
      developerDocumentation="docs.baseten.co/welcome"
    />
  );
}
  