import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function RatedTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="rated-typescript-sdk"
      metaDescription={`We are building reputation for machines, starting with Ethereum validators. Our mission is to instill greater transparency and rich context in Web3 infrastructure data.`}
      company="Rated"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rated/logo.png"
      companyKebabCase="rated"
      clientNameCamelCase="rated"
      homepage="rated.network"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rated/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rated/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["blockchain","cryptocurrency","web_3"]}
      methods={[
  {
    "url": "/v0/pricingPlans",
    "method": "getPlans",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pricing",
    "typeScriptTag": "pricing",
    "description": "Get Pricing Plans",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/validators/{validator_index_or_pubkey}/effectiveness",
    "method": "getEffectivenessAggregation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Effectiveness",
    "parameters": [
      {
        "name": "validatorIndexOrPubkey",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "from",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filterType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "307",
        "description": "Validator requested by a valid PubKey"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/validators/effectiveness",
    "method": "getEffectivenessAggregation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Effectiveness Aggregation",
    "parameters": [
      {
        "name": "pubkeys",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "indices",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "from",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "to",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "filterType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "groupBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "307",
        "description": "Validators aggregation requested by valid PubKeys"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/validators",
    "method": "listGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Metadata List",
    "parameters": [
      {
        "name": "from",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 100
      },
      {
        "name": "operatorsIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "withdrawalAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "idType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/validators/{validator_index_or_pubkey}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Metadata",
    "parameters": [
      {
        "name": "validatorIndexOrPubkey",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "307",
        "description": "Validator requested by a valid PubKey"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/validators/{validator_index_or_pubkey}/apr",
    "method": "getApr",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Apr",
    "parameters": [
      {
        "name": "validatorIndexOrPubkey",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "window",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WINDOW"
      },
      {
        "name": "aprType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "307",
        "description": "Validator requested by a valid PubKey"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/operators",
    "method": "getSummaries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Operators",
    "typeScriptTag": "operators",
    "description": "Get Summaries",
    "parameters": [
      {
        "name": "window",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WINDOW"
      },
      {
        "name": "poolType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "idType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "from",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 15
      },
      {
        "name": "parentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parentEntity",
        "schema": "string",
        "required": false,
        "description": "Use parentId"
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/operators/percentiles",
    "method": "getPercentiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Operators",
    "typeScriptTag": "operators",
    "description": "Get Percentiles",
    "parameters": [
      {
        "name": "window",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WINDOW"
      },
      {
        "name": "idType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDTYPE"
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/operators/{operator_id}",
    "method": "getOperatorById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Operators",
    "typeScriptTag": "operators",
    "description": "Get Operator",
    "parameters": [
      {
        "name": "operatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATOR_ID"
      },
      {
        "name": "idType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/operators/{operator_id}/effectiveness",
    "method": "getEffectiveness",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Operators",
    "typeScriptTag": "operators",
    "description": "Get Effectiveness",
    "parameters": [
      {
        "name": "operatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATOR_ID"
      },
      {
        "name": "idType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "from",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filterType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/operators/{operator_id}/relayers",
    "method": "getRelayerStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Operators",
    "typeScriptTag": "operators",
    "description": "Get Relayer Stats",
    "parameters": [
      {
        "name": "operatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATOR_ID"
      },
      {
        "name": "idType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "window",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/operators/{operator_id}/apr",
    "method": "getApr",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Operators",
    "typeScriptTag": "operators",
    "description": "Get Operator Apr",
    "parameters": [
      {
        "name": "operatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATOR_ID"
      },
      {
        "name": "window",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WINDOW"
      },
      {
        "name": "idType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "aprType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/operators/{operator_id}/summary",
    "method": "getSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Operators",
    "typeScriptTag": "operators",
    "description": "Get Operator Summary",
    "parameters": [
      {
        "name": "operatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATOR_ID"
      },
      {
        "name": "window",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WINDOW"
      },
      {
        "name": "idType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/operators/{operator_id}/stakeMovement",
    "method": "getStakeMovement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Operators",
    "typeScriptTag": "operators",
    "description": "Get Activations Exits Aggregate",
    "parameters": [
      {
        "name": "operatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATOR_ID"
      },
      {
        "name": "stakeAction",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "window",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/network/stats",
    "method": "getStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Network",
    "typeScriptTag": "network",
    "description": "Get Network Stats",
    "parameters": [
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/network/overview",
    "method": "getOverview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Network",
    "typeScriptTag": "network",
    "description": "Get Network Overview",
    "parameters": [
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/network/capacity",
    "method": "getChurnCapacity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Network",
    "typeScriptTag": "network",
    "description": "Get Network Churn Capacity",
    "parameters": [
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/network/capacity/pool",
    "method": "getChurnCapacityPool",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Network",
    "typeScriptTag": "network",
    "description": "Get Network Churn Capacity Pool",
    "parameters": [
      {
        "name": "window",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stakeAction",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/network/dailyRewards",
    "method": "getDailyRewards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Network",
    "typeScriptTag": "network",
    "description": "Get Network Daily Rewards",
    "parameters": [
      {
        "name": "from",
        "schema": "undefined",
        "required": false,
        "description": "The starting date (https://api-docs.rated.network/rated-api/api-reference to return. For example, 2024-01-01."
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/network/dailyRewards/{date}",
    "method": "dailyRewardsByDayGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Network",
    "typeScriptTag": "network",
    "description": "Get Daily Rewards By Day",
    "parameters": [
      {
        "name": "date",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/withdrawals/predicted/operators/{operator_id}",
    "method": "predictedOperatorsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Withdrawals",
    "typeScriptTag": "withdrawals",
    "description": "Get Withdrawals Predicted By Operator",
    "parameters": [
      {
        "name": "operatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATOR_ID"
      },
      {
        "name": "from",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/withdrawals/predicted/slot/{withdrawal_slot}",
    "method": "getPredictedBySlot",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Withdrawals",
    "typeScriptTag": "withdrawals",
    "description": "Get Withdrawals Predicted By Slot",
    "parameters": [
      {
        "name": "withdrawalSlot",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/selfReports/validators",
    "method": "createReportValidators",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Self Reports",
    "typeScriptTag": "selfReports",
    "description": "Report Validators",
    "parameters": [
      {
        "name": "xRatedNetwork",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "validators",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "poolTag",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/slashings/overview",
    "method": "overviewGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Slashings",
    "typeScriptTag": "slashings",
    "description": "Get Slashing Overview",
    "parameters": [
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/slashings/leaderboard",
    "method": "getLeaderboard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Slashings",
    "typeScriptTag": "slashings",
    "description": "Get Slashing Leaderboard",
    "parameters": [
      {
        "name": "from",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "slashingRole",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/slashings/cohortAnalysis",
    "method": "getCohortAnalysis",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Slashings",
    "typeScriptTag": "slashings",
    "description": "Get Slashing Cohort Analysis",
    "parameters": [
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/slashings/timeseries",
    "method": "getTimeSeries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Slashings",
    "typeScriptTag": "slashings",
    "description": "Get Slashing Time Series",
    "parameters": [
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/slashings",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Slashings",
    "typeScriptTag": "slashings",
    "description": "Get Slashing Penalties All",
    "parameters": [
      {
        "name": "from",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/slashings/{validator_index_or_pubkey}",
    "method": "penaltyGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Slashings",
    "typeScriptTag": "slashings",
    "description": "Get Slashing Penalties",
    "parameters": [
      {
        "name": "validatorIndexOrPubkey",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/p2p/geographical",
    "method": "getGeographicalDistribution",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "P2P (https://api-docs.rated.network/rated-api/api-reference",
    "typeScriptTag": "p2PHttps:ApiDocsRatedNetworkRatedApiApiReference",
    "description": "Get P2P Geographical Distribution",
    "parameters": [
      {
        "name": "distType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/p2p/hostingProvider",
    "method": "getP2PHostingProviderDistribution",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "P2P (https://api-docs.rated.network/rated-api/api-reference",
    "typeScriptTag": "p2PHttps:ApiDocsRatedNetworkRatedApiApiReference",
    "description": "Get P2P Hosting Provider Distribution",
    "parameters": [
      {
        "name": "from",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "distType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/blocks",
    "method": "listGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blocks",
    "typeScriptTag": "blocks",
    "description": "Get Blocks",
    "parameters": [
      {
        "name": "from",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/eth/blocks/{consensus_slot}",
    "method": "bySlotGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blocks",
    "typeScriptTag": "blocks",
    "description": "Get Blocks By Slot",
    "parameters": [
      {
        "name": "consensusSlot",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/polygon/validators/{validator_id}/effectiveness",
    "method": "getEffectiveness",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Polygon Validators",
    "typeScriptTag": "polygonValidators",
    "description": "Validator Checkpoint Effectiveness",
    "parameters": [
      {
        "name": "validatorId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "from",
        "schema": "undefined",
        "required": false,
        "description": "The starting checkpoint or date (https://api-docs.rated.network/rated-api/api-reference to return. For example, 41100 or 2021-01-01."
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": "Checkpoint or UTC day"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 15
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
      }
    ]
  },
  {
    "url": "/v0/polygon/validators/{validator_id}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Polygon Validators",
    "typeScriptTag": "polygonValidators",
    "description": "Validator Metadata",
    "parameters": [
      {
        "name": "validatorId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/v0/polygon/validators",
    "method": "listGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Polygon Validators",
    "typeScriptTag": "polygonValidators",
    "description": "Validator Summaries",
    "parameters": [
      {
        "name": "window",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WINDOW"
      },
      {
        "name": "delegatorAddress",
        "schema": "string",
        "required": false,
        "description": "The delegator address to filter by."
      },
      {
        "name": "from",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 15
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
      }
    ]
  },
  {
    "url": "/v0/polygon/validators/{validator_id}/summary",
    "method": "getSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Polygon Validators",
    "typeScriptTag": "polygonValidators",
    "description": "Validator Summary",
    "parameters": [
      {
        "name": "validatorId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "window",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WINDOW"
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
      }
    ]
  },
  {
    "url": "/v0/polygon/network/overview",
    "method": "getOverview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Polygon Network",
    "typeScriptTag": "polygonNetwork",
    "description": "Get Network Overview",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/polygon/delegators",
    "method": "getSummaries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Polygon Delegators",
    "typeScriptTag": "polygonDelegators",
    "description": "Delegator Summaries",
    "parameters": [
      {
        "name": "window",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WINDOW"
      },
      {
        "name": "from",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 15
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
      }
    ]
  },
  {
    "url": "/v0/polygon/delegators/{delegator_address}/summary",
    "method": "getSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Polygon Delegators",
    "typeScriptTag": "polygonDelegators",
    "description": "Delegator Summary",
    "parameters": [
      {
        "name": "delegatorAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELEGATOR_ADDRESS"
      },
      {
        "name": "window",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WINDOW"
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
      }
    ]
  },
  {
    "url": "/v0/polygon/delegators/{delegator_address}/rewards",
    "method": "getRewards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Polygon Delegators",
    "typeScriptTag": "polygonDelegators",
    "description": "Delegator Rewards",
    "parameters": [
      {
        "name": "delegatorAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELEGATOR_ADDRESS"
      },
      {
        "name": "from",
        "schema": "undefined",
        "required": false,
        "description": "The starting (https://api-docs.rated.network/rated-api/api-reference checkpoint or date (https://api-docs.rated.network/rated-api/api-reference to return. For example, 41100 or 2021-01-01."
      },
      {
        "name": "to",
        "schema": "undefined",
        "required": false,
        "description": "The ending (https://api-docs.rated.network/rated-api/api-reference checkpoint or date (https://api-docs.rated.network/rated-api/api-reference to return. For example, 41100 or 2021-01-01."
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": "Checkpoint or UTC day"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of time periods (days or checkpoint) in the results.",
        "default": 15
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
      }
    ]
  },
  {
    "url": "/v0/solana/network/overview",
    "method": "getOverview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Solana Network",
    "typeScriptTag": "solanaNetwork",
    "description": "Get Network Overview",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/solana/network/validatorDistributions",
    "method": "validatorDistributionsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Solana Network",
    "typeScriptTag": "solanaNetwork",
    "description": "Get Validator Distributions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/solana/validators/{validator_id}/rewards",
    "method": "getValidatorRewards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Solana Validators",
    "typeScriptTag": "solanaValidators",
    "description": "Validator Rewards",
    "parameters": [
      {
        "name": "validatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALIDATOR_ID"
      },
      {
        "name": "from",
        "schema": "undefined",
        "required": false,
        "description": "UTC day or slot multiple of 3k"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": "UTC day or 3k block interval"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 15
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
      }
    ]
  },
  {
    "url": "/v0/solana/validators/{validator_id}/performance",
    "method": "getPerformance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Solana Validators",
    "typeScriptTag": "solanaValidators",
    "description": "Validator Performance",
    "parameters": [
      {
        "name": "validatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALIDATOR_ID"
      },
      {
        "name": "from",
        "schema": "undefined",
        "required": false,
        "description": "UTC day or slot multiple of 3k"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": "UTC day or 3k block interval"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 15
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
      }
    ]
  },
  {
    "url": "/v0/solana/validators/{validator_id}/performance/latency",
    "method": "getValidatorLatency",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Solana Validators",
    "typeScriptTag": "solanaValidators",
    "description": "Validator Latency",
    "parameters": [
      {
        "name": "validatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALIDATOR_ID"
      },
      {
        "name": "from",
        "schema": "integer",
        "required": false,
        "description": "Slot to get vote latency from."
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 15
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
      }
    ]
  },
  {
    "url": "/v0/solana/validators/{validator_id}",
    "method": "metadataGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Solana Validators",
    "typeScriptTag": "solanaValidators",
    "description": "Validator Metadata",
    "parameters": [
      {
        "name": "validatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALIDATOR_ID"
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
      }
    ]
  },
  {
    "url": "/v0/solana/validators",
    "method": "getSummaries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Solana Validators",
    "typeScriptTag": "solanaValidators",
    "description": "Validator Summaries",
    "parameters": [
      {
        "name": "window",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WINDOW"
      },
      {
        "name": "from",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 15
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
      }
    ]
  },
  {
    "url": "/v0/solana/validators/{validator_id}/summary",
    "method": "getSummaryById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Solana Validators",
    "typeScriptTag": "solanaValidators",
    "description": "Validator Summary",
    "parameters": [
      {
        "name": "validatorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALIDATOR_ID"
      },
      {
        "name": "window",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WINDOW"
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
      }
    ]
  },
  {
    "url": "/v1/tags",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get Tags",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
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
      }
    ]
  },
  {
    "url": "/v1/tags",
    "method": "createTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create Tag",
    "parameters": [
      {
        "name": "xRatedNetwork",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
      }
    ]
  },
  {
    "url": "/v1/tags/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get Tag",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Update Tag",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "xRatedNetwork",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags/{id}/validators",
    "method": "getTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Tag Validators",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags/{id}/validators",
    "method": "add",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Add Validators",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "xRatedNetwork",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pubkeys",
        "schema": "array",
        "required": true,
        "description": ""
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
      }
    ]
  },
  {
    "url": "/v1/tags/{id}/validators/{pubkey}",
    "method": "removeValidator",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Remove Validator",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "pubkey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PUBKEY"
      },
      {
        "name": "xRatedNetwork",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/entities/{entity_id}/effectiveness",
    "method": "getEffectiveness",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entity",
    "typeScriptTag": "entity",
    "description": "Get Entity Effectiveness",
    "parameters": [
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITY_ID"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYTYPE"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/entities/{entity_id}/attestations",
    "method": "getAttestations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entity",
    "typeScriptTag": "entity",
    "description": "Get Entity Attestations",
    "parameters": [
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITY_ID"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYTYPE"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/entities/{entity_id}/proposals",
    "method": "getProposals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entity",
    "typeScriptTag": "entity",
    "description": "Get Entity Proposals",
    "parameters": [
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITY_ID"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYTYPE"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/validators/effectiveness",
    "method": "getEffectiveness",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Validators Effectiveness",
    "parameters": [
      {
        "name": "pubkeys",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "indices",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "groupBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/validators/attestations",
    "method": "getAttestations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Validators Attestations",
    "parameters": [
      {
        "name": "pubkeys",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "indices",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "groupBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/validators/proposals",
    "method": "getProposals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Validators Proposals",
    "parameters": [
      {
        "name": "pubkeys",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "indices",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "groupBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/validators/{validator_index_or_pubkey}/effectiveness",
    "method": "getEffectiveness",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Validator Effectiveness",
    "parameters": [
      {
        "name": "validatorIndexOrPubkey",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/validators/{validator_index_or_pubkey}/attestations",
    "method": "getAttestations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Validator Attestations",
    "parameters": [
      {
        "name": "validatorIndexOrPubkey",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/validators/{validator_index_or_pubkey}/proposals",
    "method": "getProposalsByValidatorIndexOrPubkey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Validator Proposals",
    "parameters": [
      {
        "name": "validatorIndexOrPubkey",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/sets/{set_id}/effectiveness",
    "method": "getSetEffectiveness",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Effectiveness",
    "typeScriptTag": "effectiveness",
    "description": "Get Set Effectiveness",
    "parameters": [
      {
        "name": "setId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SET_ID"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/sets/{set_id}/attestations",
    "method": "getAttestations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attestation",
    "typeScriptTag": "attestation",
    "description": "Get Set Attestations",
    "parameters": [
      {
        "name": "setId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SET_ID"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/sets/{set_id}/proposals",
    "method": "listGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Proposal",
    "typeScriptTag": "proposal",
    "description": "Get Set Proposals",
    "parameters": [
      {
        "name": "setId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SET_ID"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/entities/{entity_id}/rewards",
    "method": "getRewards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entity",
    "typeScriptTag": "entity",
    "description": "Get Entity Rewards",
    "parameters": [
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITY_ID"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYTYPE"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/entities/{entity_id}/penalties",
    "method": "getPenalties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entity",
    "typeScriptTag": "entity",
    "description": "Get Entity Penalties",
    "parameters": [
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITY_ID"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYTYPE"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/validators/{validator_index_or_pubkey}/rewards",
    "method": "getRewards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Validator Rewards",
    "parameters": [
      {
        "name": "validatorIndexOrPubkey",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/validators/{validator_index_or_pubkey}/penalties",
    "method": "getPenalties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Validator Penalties",
    "parameters": [
      {
        "name": "validatorIndexOrPubkey",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/sets/{set_id}/rewards",
    "method": "privateSetRewardsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reward",
    "typeScriptTag": "reward",
    "description": "Get Private Set Rewards",
    "parameters": [
      {
        "name": "setId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SET_ID"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/sets/{set_id}/penalties",
    "method": "privateSetPenaltiesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Penalty",
    "typeScriptTag": "penalty",
    "description": "Get Private Set Penalties",
    "parameters": [
      {
        "name": "setId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SET_ID"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "toDay",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/entities/summaries",
    "method": "getSummaries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entity",
    "typeScriptTag": "entity",
    "description": "Get Entities Summaries",
    "parameters": [
      {
        "name": "entityType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "window",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/entities/{entity_id}/summaries",
    "method": "getSummaries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entity",
    "typeScriptTag": "entity",
    "description": "Get Entity Summaries",
    "parameters": [
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITY_ID"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "window",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/entities",
    "method": "listGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entity",
    "typeScriptTag": "entity",
    "description": "Get Entities",
    "parameters": [
      {
        "name": "entityType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/entities/{entity_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entity",
    "typeScriptTag": "entity",
    "description": "Get Entity",
    "parameters": [
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITY_ID"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYTYPE"
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/validators",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Validators",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/eth/validators/{validator_index_or_pubkey}",
    "method": "getValidator",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Validators",
    "typeScriptTag": "validators",
    "description": "Get Validator",
    "parameters": [
      {
        "name": "validatorIndexOrPubkey",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "xRatedNetwork",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Rated API Beta"
      apiBaseUrl="https://api.rated.network"
      apiVersion="0.0.1"
      endpoints={49}
      sdkMethods={49}
      schemas={133}
      parameters={149}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rated/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rated/openapi.yaml"
      developerDocumentation="api-docs.rated.network/rated-api/api-reference"
    />
  );
}
  