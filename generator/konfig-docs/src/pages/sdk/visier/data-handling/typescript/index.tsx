import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VisierDataHandlingTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="visier-data-handling-typescript-sdk"
      metaDescription={`Visier is the people impact platform that puts the right insights in the right hands, at the right time, throughout the business.

We help organizations of all sizes unlock the power of their people data for business impact. This includes enterprises using our category-leading people analytics software, partners embedding our solution into existing apps, and developers building on the Visier platform.

As the global leader in people analytics, Visier has over 25,000 customers in 75 countries around the world, including enterprises like BASF, Bridgestone, Electronic Arts, McKesson, MerckKGaA, and more. Visier is headquartered in Vancouver, BC with offices and team members worldwide.`}
      company="Visier"
      serviceName="DataHandling"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/data-handling/logo.png"
      companyKebabCase="visier"
      clientNameCamelCase="visierDataHandling"
      homepage="visier.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/data-handling/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/data-handling/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["enterprise_software","people_analytics","business_impact","team_management","workforce_insights","human_resources","workforce_intelligence","workforce_analytics","hr_metrics","hr_analytics","hr_dashboard","hr_reporting","workforce_planning","human_capital_management","workforce_solutions","talent_acquisition_analytics"]}
      methods={[
  {
    "url": "/v1/op/data-connector-credentials",
    "method": "dataConnectorCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Retrieve a list of all data connector credentials",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The tenant code of a specific analytic tenant that you want to retrieve for."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit to retrieve."
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
    "url": "/v1/op/data-connector-credentials",
    "method": "createConnectorCredential",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Create a connector credential",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The tenant code of a specific analytic tenant that you want to create the credential for."
      },
      {
        "name": "dataProviderAuthParams",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dataProviderBasicInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dataProviderMetadata",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/op/data-connectors",
    "method": "dataConnectors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Retrieve a list of all data connectors",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The tenant code of a specific analytic tenant that you want to retrieve for."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit to retrieve."
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
    "url": "/v1/op/data-connectors/assignCredentials",
    "method": "assignConnectorCredential",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Assign connector credentials to data connectors",
    "parameters": [
      {
        "name": "connectors",
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
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/op/data-versions",
    "method": "latestEnabledDv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Retrieve the latest enabled data versions for all analytic tenants",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The tenant code of a specific analytic tenant that you want to retrieve data versions for.\n Use this if you are only interested in the results for one analytic tenant."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit of analytic tenants to retrieve data versions for.\n This parameter is not used if the tenantCode parameter is specified."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The index to start retrieving results from, also known as offset. The index begins at 0."
      },
      {
        "name": "numberOfVersions",
        "schema": "integer",
        "description": "The number of latest enabled data versions to retrieve. The maximum value is 5."
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
    "url": "/v1/op/data-versions/disable",
    "method": "disableDv",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Disable data versions for a list of analytic tenants",
    "parameters": [
      {
        "name": "model",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/op/data/startExtractAndLoad",
    "method": "startExtraction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Trigger extraction jobs",
    "parameters": [
      {
        "name": "model",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/op/data/startload",
    "method": "startLoad",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Start the data load for an analytic tenant",
    "parameters": [
      {
        "name": "model",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/op/data/uploads",
    "method": "retrieveDataUploads",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Retrieve data uploads",
    "parameters": [
      {
        "name": "uploadJobId",
        "schema": "string",
        "description": "The job ID of an upload job. Use this if you are interested in the data uploads for a specific upload job."
      },
      {
        "name": "tenantCode",
        "schema": "integer",
        "description": "The tenant code of a specific analytic tenant that you want to retrieve the data uploads for."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit of analytic tenants to retrieve data uploads for. This parameter is not used if the tenantCode parameter is specified."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The index to start retrieving results from, also known as offset. The index begins at 0."
      },
      {
        "name": "numberOfDataUploads",
        "schema": "integer",
        "description": "The maximum number of latest enabled data uploads to retrieve for each analytic tenant. The maximum value is 5."
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
    "url": "/v1/op/data/uploads/exclude",
    "method": "excludeDataUplaods",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Exclude data uploads",
    "parameters": [
      {
        "name": "model",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/op/data/uploads/include",
    "method": "includeDataUploads",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Include data uploads",
    "parameters": [
      {
        "name": "model",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/op/job-status/jobs",
    "method": "jobStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Retrieve the statuses of all jobs",
    "parameters": [
      {
        "name": "startTime",
        "schema": "string",
        "description": "The start time from which to retrieve job statuses."
      },
      {
        "name": "endTime",
        "schema": "string",
        "description": "The end time from which to retrieve job statuses."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "The specific status to restrict the list of job to."
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
    "url": "/v1/op/job-status/jobs/:jobId",
    "method": "jobIdStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Retrieve a specific job's status",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "description": "The unique ID of the job to retrieve the status for."
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
    "url": "/v1/op/jobs/cancel",
    "method": "cancelJobs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Cancel a list of jobs",
    "parameters": [
      {
        "name": "jobIds",
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
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/op/jobs/dispatching-jobs/:jobId",
    "method": "dispatchingJobStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Retrieve a dispatching job's status",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "description": "The ID of the job you want to retrieve."
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
    "url": "/v1/op/jobs/dispatching-jobs/:jobId/extraction-jobs",
    "method": "extractionJobAndStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Retrieve a dispatching job's extraction jobs with their statuses",
    "parameters": [
      {
        "name": "dispatchingJobId",
        "schema": "string",
        "description": "The ID of the dispatching job that generated the extraction jobs."
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The tenant code of a specific analytic tenant that you want to retrieve the extraction job status for.\n Use this if you are only interested in the results for one analytic tenant."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit of extraction job statuses to retrieve."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The index to start retrieving results from, also known as offset. The index begins at 0."
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": "The ID of the dispatching job you want to retrieve."
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
    "url": "/v1/op/jobs/dispatching-jobs/:jobId/processing-jobs",
    "method": "processingJobAndStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Retrieve a dispatching job's processing jobs with their statuses",
    "parameters": [
      {
        "name": "dispatchingJobId",
        "schema": "string",
        "description": "The ID of the dispatching job that generated the extraction jobs."
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The tenant code of a specific analytic tenant that you want to retrieve the extraction job status for.\n Use this if you are only interested in the results for one analytic tenant."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit of extraction job statuses to retrieve."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The index to start retrieving results from, also known as offset. The index begins at 0."
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": "The ID of the dispatching job you want to retrieve."
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
    "url": "/v1/op/jobs/dispatching-jobs/:jobId/receiving-jobs",
    "method": "receivingJobAndStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Retrieve a dispatching job's receiving jobs with their statuses",
    "parameters": [
      {
        "name": "dispatchingJobId",
        "schema": "string",
        "description": "The ID of the dispatching job that generated the extraction jobs."
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The tenant code of a specific analytic tenant that you want to retrieve the extraction job status for.\n Use this if you are only interested in the results for one analytic tenant."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit of extraction job statuses to retrieve."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The index to start retrieving results from, also known as offset. The index begins at 0."
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": "The ID of the dispatching job you want to retrieve."
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
    "url": "/v1/op/jobs/processing-jobs/:receivingJobId",
    "method": "processingJobStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Retrieve processing job statuses by receiving job ID",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The tenant code of the tenant you want to retrieve the processing jobs for.\n Use this if you are only interested in the results for one analytic tenant."
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
      },
      {
        "name": "receivingJobId",
        "schema": "string",
        "description": "The receiving job ID"
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
    "url": "/v1/op/jobs/receiving-jobs/:receivingJobId",
    "method": "receivingJobStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Retrieve a receiving job's status",
    "parameters": [
      {
        "name": "jobs",
        "schema": "boolean",
        "description": "If \"true\", returns the status of receiving jobs spawned by the receiving job specified by jobId."
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The tenant code of the tenant you want to retrieve the receiving jobs for. Use this if you are only interested\n in the results for one analytic tenant."
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
      },
      {
        "name": "receivingJobId",
        "schema": "string",
        "description": "The jobId provided after sending data to Visier."
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
    "url": "/v1/op/data-connector-credentials/:id",
    "method": "deleteConnectorCredential",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "DataAndJobHandling",
    "typeScriptTag": "dataAndJobHandling",
    "description": "Delete a connector credential",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "The credentialId of the credential you want to delete."
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "The tenant code of the analytic tenant in which the credential you're deleting."
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
  }
]
    }
      language="TypeScript"
      apiTitle="Visier Data and Job Handling APIs"
      apiBaseUrl="https://{vanity-name}.api.visier.io"
      apiVersion="22222222.99201.1256"
      endpoints={20}
      sdkMethods={21}
      schemas={98}
      parameters={57}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/data-handling/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/visier/data-handling/openapi.yaml"
      developerDocumentation="docs.visier.com/developer/apis/apis.htm"
    />
  );
}
  