import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VisierDataIntakeTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="visier-data-intake-typescript-sdk"
      metaDescription={`Visier is the people impact platform that puts the right insights in the right hands, at the right time, throughout the business.

We help organizations of all sizes unlock the power of their people data for business impact. This includes enterprises using our category-leading people analytics software, partners embedding our solution into existing apps, and developers building on the Visier platform.

As the global leader in people analytics, Visier has over 25,000 customers in 75 countries around the world, including enterprises like BASF, Bridgestone, Electronic Arts, McKesson, MerckKGaA, and more. Visier is headquartered in Vancouver, BC with offices and team members worldwide.`}
      company="Visier"
      serviceName="DataIntake"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/data-intake/logo.png"
      companyKebabCase="visier"
      clientNameCamelCase="visierDataIntake"
      homepage="visier.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/data-intake/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/data-intake/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["enterprise_software","people_analytics","business_impact","team_management","workforce_insights","human_resources","workforce_intelligence","workforce_analytics","hr_metrics","hr_analytics","hr_dashboard","hr_reporting","workforce_planning","human_capital_management","workforce_solutions","talent_acquisition_analytics"]}
      methods={[
  {
    "url": "/v1/op/data-sources",
    "method": "getSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataIntake",
    "typeScriptTag": "dataIntake",
    "description": "Retrieve a list of sources",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The existing sources."
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/op/data-transfer-sessions",
    "method": "startTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DataIntake",
    "typeScriptTag": "dataIntake",
    "description": "Start a transfer session",
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
    "url": "/v1/op/data-transfer-sessions/{transferSessionId}/add",
    "method": "pushData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "DataIntake",
    "typeScriptTag": "dataIntake",
    "description": "Transfer data to sources via JSON",
    "parameters": [
      {
        "name": "transferSessionId",
        "schema": "string",
        "required": true,
        "description": "The transfer session ID returned after the data transfer session starts.",
        "example": "TRANSFERSESSIONID"
      },
      {
        "name": "sourceId",
        "schema": "string",
        "description": "The unique identifier associated with the source you want to transfer data to."
      },
      {
        "name": "sequence",
        "schema": "integer",
        "description": "The unique sequence number associated with a batch of records."
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The code of the tenant you want to transfer data to. For example, WFF_j1r or WFF_j1r~c7o."
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
    "url": "/v1/op/data-transfer-sessions/{transferSessionId}/cancel",
    "method": "pushDataCancel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "DataIntake",
    "typeScriptTag": "dataIntake",
    "description": "Cancel a transfer session",
    "parameters": [
      {
        "name": "transferSessionId",
        "schema": "string",
        "required": true,
        "description": "The transfer session ID to cancel.",
        "example": "TRANSFERSESSIONID"
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
    "url": "/v1/op/data-transfer-sessions/{transferSessionId}/upload",
    "method": "uploadData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "DataIntake",
    "typeScriptTag": "dataIntake",
    "description": "Transfer data to sources via file upload",
    "parameters": [
      {
        "name": "transferSessionId",
        "schema": "string",
        "required": true,
        "description": "The transfer session ID returned after the data transfer session starts.",
        "example": "TRANSFERSESSIONID"
      },
      {
        "name": "sourceId",
        "schema": "string",
        "description": "The unique identifier associated with the source you want to transfer data to."
      },
      {
        "name": "sequence",
        "schema": "string",
        "description": "The unique sequence number associated with a batch of records."
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The code of the tenant you want to transfer data to. For example, WFF_j1r or WFF_j1r~c7o."
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
    "url": "/v1/op/jobs/processing-jobs/{receivingJobId}",
    "method": "getProcessingJobsByParentReceivingJobId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataIntake",
    "typeScriptTag": "dataIntake",
    "description": "Retrieve processing job statuses by receiving job ID",
    "parameters": [
      {
        "name": "receivingJobId",
        "schema": "string",
        "required": true,
        "description": "The receiving job ID.",
        "example": "RECEIVINGJOBID"
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The tenant code of the tenant you want to retrieve the processing jobs for. Use this if you are only interested in the results for one analytic tenant."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit of processing jobs to retrieve per page."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The index to start retrieving results from, also known as offset. The index begins at 0."
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
    "url": "/v1/op/jobs/receiving-jobs",
    "method": "pushDataComplete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DataIntake",
    "typeScriptTag": "dataIntake",
    "description": "Complete a transfer session",
    "parameters": [
      {
        "name": "transferSessionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "processingData",
        "schema": "boolean",
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
    "url": "/v1/op/jobs/receiving-jobs/{receivingJobId}",
    "method": "receivingJobStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataIntake",
    "typeScriptTag": "dataIntake",
    "description": "Retrieve a receiving job’s status",
    "parameters": [
      {
        "name": "receivingJobId",
        "schema": "string",
        "required": true,
        "description": "The **dataReceivingJobId** provided after a data transfer session completes. See **`/v1/op/jobs/receiving-jobs`**.",
        "example": "RECEIVINGJOBID"
      },
      {
        "name": "jobs",
        "schema": "boolean",
        "description": "If true, returns the status of receiving jobs spawned by the receiving job specified by receivingJobId."
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The tenant code of the tenant you want to retrieve the receiving jobs for. Use this if you are only interested in the results for one analytic tenant."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The index to start retrieving results from, also known as offset. The index begins at 0."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of job statuses to return per page."
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
    "url": "/v1alpha/data/upload/files/{filename}",
    "method": "fileToVisier",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "DataUpload",
    "typeScriptTag": "dataUpload",
    "description": "Upload a data file to Visier",
    "parameters": [
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "The filename of the data file to upload, including the file extension (such as .zip or .csv).",
        "example": "FILENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "307",
        "description": "Redirect to Visier's upload infrastructure."
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
      apiTitle="Visier Data Intake APIs"
      apiBaseUrl="https://{vanity-name}.api.visier.io"
      apiVersion="22222222.99201.1256"
      endpoints={9}
      sdkMethods={9}
      schemas={19}
      parameters={21}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/data-intake/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/visier/data-intake/openapi.yaml"
      developerDocumentation="docs.visier.com/developer/apis/apis.htm"
    />
  );
}
  