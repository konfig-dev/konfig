import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function LogisticsOsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="logistics-os-typescript-sdk"
      metaDescription={`We provide an algorithm REST API for companies in the last mile delivery space to dispatch drivers and optimize delivery sequences. Our customers range from traditional logistics companies with fleet management platforms to on-demand delivery companies with mobile apps and drivers. Clients can easily integrate our algorithm into their existing system to find optimal delivery plans. We are also planning to develop on-prem solutions so customers could deploy and host locally for flexibility and data security.

What's different about LogisticsOS?

There are many route optimization products in the market but there are three major flaws with them: They tend to make drivers traveling around the city, take hours to compute a result, and their solutions do not scale well with increasing volume.

We think customers deserve something better. So, we have built a generation leap route optimization engine that solves the above problems by,

Producing solutions with high route density. Drivers are now able to stay in one area.

Producing consistent results and scales linearly with increasing volume.

Significantly reduced computation time, I.e., hours to minutes, and minutes to seconds.

Further reduce the total travel time by another 10%-20%, which results in direct savings for delivery companies.`}
      company="LogisticsOS"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/logisticsos/logo.png"
      companyKebabCase="logistics-os"
      clientNameCamelCase="logisticsOs"
      homepage="www.logisticsos.com/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/logisticsos/favicon.png"
      // Missing contactUrl
      contactEmail="support@logisticsos.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/logisticsos/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["logistics_provider","route_optimization","driver_dispatch","delivery_management","shipping_api","optimization_engine","delivery_planning","fleet_management"]}
      methods={[
  {
    "url": "/vrp/v3",
    "method": "result",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Optimization APIs",
    "typeScriptTag": "optimizationApIs",
    "description": "Vehicle Routing Problem Result",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job ID returned by `/vrp` POST.",
        "example": "JOB_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
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
        "statusCode": "403",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/vrp/v3",
    "method": "solveVrpProblem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Optimization APIs",
    "typeScriptTag": "optimizationApIs",
    "description": "Vehicle Routing Problem",
    "parameters": [
      {
        "name": "orders",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "start_depots",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "end_depots",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "breaks",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "vehicle_types",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "routing_profiles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "polygons",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "solver_parameters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "units",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "od_location",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "od_data_type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "binary"
      },
      {
        "name": "user_tags",
        "schema": "array",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/tsp/v3",
    "method": "result",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Optimization APIs",
    "typeScriptTag": "optimizationApIs",
    "description": "Traveling Salesman Problem Result",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job ID returned by `/tsp` POST.",
        "example": "JOB_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
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
        "statusCode": "403",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/tsp/v3",
    "method": "solveTsp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Optimization APIs",
    "typeScriptTag": "optimizationApIs",
    "description": "Traveling Salesman Problem",
    "parameters": [
      {
        "name": "orders",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "vehicle",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "start_depot",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "end_depot",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "breaks",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "routing_profile",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "solver_parameters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "units",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "user_tags",
        "schema": "array",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/ondemand/v3",
    "method": "result",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Optimization APIs",
    "typeScriptTag": "optimizationApIs",
    "description": "On-demand Result",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job ID returned by `/ondemand` POST.",
        "example": "JOB_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
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
        "statusCode": "403",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/ondemand/v3",
    "method": "assignOrders",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Optimization APIs",
    "typeScriptTag": "optimizationApIs",
    "description": "On-demand",
    "parameters": [
      {
        "name": "current_routes",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "orders",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "routing_profiles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "polygons",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "solver_parameters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "units",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "user_tags",
        "schema": "array",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/replan/v3",
    "method": "result",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Optimization APIs",
    "typeScriptTag": "optimizationApIs",
    "description": "Replanning Result",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job ID returned by `/replan` POST.",
        "example": "JOB_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
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
        "statusCode": "403",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/replan/v3",
    "method": "replanRoutePlan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Optimization APIs",
    "typeScriptTag": "optimizationApIs",
    "description": "Replanning",
    "parameters": [
      {
        "name": "current_routes",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "routing_profiles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "solver_parameters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "units",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "user_tags",
        "schema": "array",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/route/v1",
    "method": "calculateRoute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Routing APIs",
    "typeScriptTag": "routingApIs",
    "description": "Routing",
    "parameters": [
      {
        "name": "parameters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "locations",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/matrix/v1",
    "method": "result",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Routing APIs",
    "typeScriptTag": "routingApIs",
    "description": "Matrix Routing Result",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job ID returned by `/matrix` POST.",
        "example": "JOB_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "303",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/matrix/v1",
    "method": "calculateMatrix",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Routing APIs",
    "typeScriptTag": "routingApIs",
    "description": "Matrix Routing",
    "parameters": [
      {
        "name": "accept",
        "schema": "string",
        "description": "By default, Matrix Routing API returns result in JSON format. Alternatively, you can specify `application/octet-stream` in the `accept` HTTP header to request binary format, which might be preferred when you need faster parsing and smaller memory usage.\n",
        "default": "application/json"
      },
      {
        "name": "parameters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "origins",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "destinations",
        "schema": "array",
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
        "statusCode": "202",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/match/v1",
    "method": "calculateRoute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Routing APIs",
    "typeScriptTag": "routingApIs",
    "description": "Map Matching",
    "parameters": [
      {
        "name": "parameters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "waypoints",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="LogisticsOS API Services"
      apiBaseUrl="https://logisticsosapi.com"
      apiVersion="3.0"
      endpoints={7}
      sdkMethods={12}
      schemas={65}
      parameters={48}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/logisticsos/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/logisticsos/openapi.yaml"
      developerDocumentation="www.logisticsos.com/docs?version=3"
    />
  );
}
  