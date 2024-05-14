import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function JinaAiTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="jina-ai-typescript-sdk"
      metaDescription={`Founded in February 2020, Jina AI has swiftly emerged as a global pioneer in multimodal AI technology. Within an impressive timeframe of 20 months, we have successfully raised $37.5M, marking our strong position in the AI industry. Our ground-breaking technology, open-sourced on GitHub, has empowered over 40,000 developers around the globe to seamlessly build and deploy sophisticated multimodal applications.

In 2023, we've made significant strides in advancing AI generation tools grounded on multimodal technology. This innovation has benefited over 250,000 users worldwide, catering to a plethora of unique business requirements. From facilitating business growth and enhancing operational efficiency to optimizing costs, Jina AI is dedicated to empowering businesses to excel in the multimodal era.`}
      company="Jina AI"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jina-ai/logo.png"
      companyKebabCase="jina-ai"
      clientNameCamelCase="jinaAi"
      homepage="jina.ai"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jina-ai/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jina-ai/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["artificial_intelligence","open_source","developer_tools","machine_learning","ai","vector_search","embedding"]}
      methods={[
  {
    "url": "/v1/embeddings",
    "method": "createRepresentation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "embeddings",
    "typeScriptTag": "embeddings",
    "description": "Create Embedding",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Output of the embedding service"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/bulk-embeddings",
    "method": "uploadFileAndGetEmbeddings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "bulk-embeddings",
    "typeScriptTag": "bulkEmbeddings",
    "description": "Start Bulk Embedding",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "model",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/bulk-embeddings/{job_id}",
    "method": "getJob",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bulk-embeddings",
    "typeScriptTag": "bulkEmbeddings",
    "description": "Retrieve Job",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOB_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/bulk-embeddings/{job_id}/download-result",
    "method": "downloadResultPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "bulk-embeddings",
    "typeScriptTag": "bulkEmbeddings",
    "description": "Download Result",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOB_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rerank",
    "method": "pairRanking",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "rerank",
    "typeScriptTag": "rerank",
    "description": "Rank",
    "parameters": [
      {
        "name": "model",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL"
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "documents",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "top_n",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "return_documents",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Output of the embedding service"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/multi-embeddings",
    "method": "generateEmbeddings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "multi-embeddings",
    "typeScriptTag": "multiEmbeddings",
    "description": "Create Multi Embeddings",
    "parameters": [
      {
        "name": "model",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL"
      },
      {
        "name": "input",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "input_type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "document"
      },
      {
        "name": "encoding_format",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Output of the embedding service"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/",
    "method": "checkStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get the health of Universal API service",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pydantic BaseModel for Jina health check, used as the response model in REST app."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="The Jina Embedding Serving API"
      apiBaseUrl="https://api.jina.ai"
      apiVersion="0.0.89"
      endpoints={8}
      sdkMethods={8}
      schemas={20}
      parameters={18}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jina-ai/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jina-ai/openapi.yaml"
      developerDocumentation="api.jina.ai/redoc"
    />
  );
}
  