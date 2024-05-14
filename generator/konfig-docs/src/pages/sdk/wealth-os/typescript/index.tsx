import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function WealthOsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="wealth-os-typescript-sdk"
      metaDescription={`WealthOS is an API first, enterprise, core wealth management platform built to accelerate digital adoption and innovation within the wealth management industry.

By leveraging the latest advances in cloud-native technologies, WealthOS will offer the wealth management industry the upgraded technology infrastructure that's powering digital innovation in the financial services industry.

We plan to offer an extensive feature set coupled with pre-built integration to a market place of specialist service providers, allowing wealth managers to do more things on a single platform.

Our modular architecture allows you to use WealthOS fully to launch your entire digital value proposition, or in parts to complement an existing proposition. Our API first platform allows you to simply plug, and play.

 WealthOS dramatically reduces time to market for wealth management products and features while also reducing the total cost of ownership.`}
      company="WealthOS"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wealthos/logo.png"
      companyKebabCase="wealth-os"
      clientNameCamelCase="wealthOs"
      homepage="wealthos.cloud/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wealthos/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wealthos/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["financial_services","wealth_management"]}
      methods={[
  {
    "url": "/tenant/test/hello-world-be",
    "method": "getBeGreetings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Test Methods",
    "typeScriptTag": "testMethods",
    "description": "Wealth Manager Greeting for BE",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/investors/v1",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Investors",
    "typeScriptTag": "investors",
    "description": "Get All Investors",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "string",
        "required": false,
        "description": "Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_number, both page_size and page_number will be defaulted to 500 and 1. Max page size is 2000. Results are sorted decending order of the created date & time."
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": false,
        "description": "Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_size, both page_size and page_number will be defaulted to 500 and 1. Results are sorted decending order of the created date & time."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting order; results are sorted by creation time.",
        "default": "desc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Array of investors"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/investors/v1",
    "method": "createNewInvestor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Investors",
    "typeScriptTag": "investors",
    "description": "Create Investor",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mr."
      },
      {
        "name": "gender",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "male"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "David"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Brown"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "kyc_pending"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "davidbrown@gmail.com"
      },
      {
        "name": "mobile_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+441234567890"
      },
      {
        "name": "home_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+441234587830"
      },
      {
        "name": "office_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+442072343456"
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GBR"
      },
      {
        "name": "tax_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AB123456C"
      },
      {
        "name": "kyc_aml_status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "not_started",
        "default": "not_started"
      },
      {
        "name": "dealing_status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "inactive",
        "default": "inactive"
      },
      {
        "name": "id_numbers",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "id_type": "passport",
            "id_number": "2324839048381"
          }
        ]
      },
      {
        "name": "address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "mifid_tax_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2382392274"
      },
      {
        "name": "tax_residency_compliant",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1990-12-20"
      },
      {
        "name": "retirement_age",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 60
      },
      {
        "name": "tax_residence",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "GB-ENG"
      },
      {
        "name": "employment_status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "employed"
      },
      {
        "name": "mpaa_triggered",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "mpaa_triggered_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2023-01-30"
      },
      {
        "name": "workplace_employers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "lta_protection_details",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "lta_protection_type": "primary",
            "lta_primary_protection_factor": "20.00"
          },
          {
            "lta_protection_type": "fp14"
          }
        ]
      },
      {
        "name": "expression_of_wish",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "bank_accounts",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "JSON for the Investor creation response resource type"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/investors/v1/{investor_id}",
    "method": "getInvestorDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Investors",
    "typeScriptTag": "investors",
    "description": "Get Investor",
    "parameters": [
      {
        "name": "investorId",
        "schema": "string",
        "required": true,
        "description": "Investor Id",
        "example": "INVESTOR_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "JSON for the Investor resource type"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/investors/v1/{investor_id}",
    "method": "updateInvestorDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Investors",
    "typeScriptTag": "investors",
    "description": "Update Investor",
    "parameters": [
      {
        "name": "investorId",
        "schema": "string",
        "required": true,
        "description": "Investor Id",
        "example": "INVESTOR_ID"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mr."
      },
      {
        "name": "gender",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "male"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "David"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Brown"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "kyc_pending"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "davidbrown@gmail.com"
      },
      {
        "name": "mobile_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+441234567890"
      },
      {
        "name": "home_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+441234587830"
      },
      {
        "name": "office_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+442072343456"
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "GBR"
      },
      {
        "name": "tax_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AB123456C"
      },
      {
        "name": "kyc_aml_status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "not_started"
      },
      {
        "name": "dealing_status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "inactive"
      },
      {
        "name": "id_numbers",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "id_type": "passport",
            "id_number": "2324839048381"
          }
        ]
      },
      {
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "mifid_tax_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2382392274"
      },
      {
        "name": "tax_residency_compliant",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1990-12-20"
      },
      {
        "name": "retirement_age",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 60
      },
      {
        "name": "tax_residence",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "GB-ENG"
      },
      {
        "name": "employment_status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "employed"
      },
      {
        "name": "mpaa_triggered",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "mpaa_triggered_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2023-01-30"
      },
      {
        "name": "workplace_employers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "lta_protection_details",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "lta_protection_type": "primary",
            "lta_primary_protection_factor": "20.00"
          },
          {
            "lta_protection_type": "fp14"
          }
        ]
      },
      {
        "name": "expression_of_wish",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "kyc_aml_status_last_updated",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-08-12T07:36:05.884Z"
      },
      {
        "name": "reference_version",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-08-12T07:36:05.884Z"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-07-10T07:36:05.884Z"
      },
      {
        "name": "deleted_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "JSON for the Investor resource type"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/financial-products/v1",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Financial Products",
    "typeScriptTag": "financialProducts",
    "description": "Get All Financial Products",
    "parameters": [
      {
        "name": "productTypes",
        "schema": "string",
        "required": false,
        "description": "multiple product types as a comma seperated string"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/payments/v1/{transaction_id}",
    "method": "getByTransactionId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get Payment by Transaction Id",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "Transaction Id",
        "example": "TRANSACTION_ID"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/pots/v1",
    "method": "getInvestorPots",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pots, Holdings and Transactions",
    "typeScriptTag": "pots,HoldingsAndTransactions",
    "description": "Get all pots for an investor",
    "parameters": [
      {
        "name": "investorId",
        "schema": "string",
        "required": true,
        "description": "Investor Id",
        "example": "INVESTOR_ID"
      },
      {
        "name": "financialProductId",
        "schema": "string",
        "description": "multiple financial product ids as comma seperated string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Array of all active investment pots created by the investor"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/pots/v1",
    "method": "createNewPots",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pots, Holdings and Transactions",
    "typeScriptTag": "pots,HoldingsAndTransactions",
    "description": "Create new pots",
    "parameters": [
      {
        "name": "request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUEST_ID"
      },
      {
        "name": "investor_id",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "financial_product_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "sipp_accumulation"
      },
      {
        "name": "pots",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "pot_name": "Retirement Pot 1",
            "portfolio_template_id": "pft-c60c9472-6668-4f7a-aa69",
            "pot_currency": "GBP",
            "status": "active"
          },
          {
            "pot_name": "Retirement Pot 2",
            "portfolio_template_id": "pft-c60c9472-6668-4f7a-aa69",
            "pot_currency": "CHF",
            "status": "active"
          }
        ]
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/pots/v1/evaluate-rebalance",
    "method": "evaluatePortfolioDeviation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rebalance",
    "typeScriptTag": "rebalance",
    "description": "Evaluate rebalance",
    "parameters": [
      {
        "name": "request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUEST_ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pot"
      },
      {
        "name": "values",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "pot-UKW3452850",
          "pot-SDQ5239730"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Contains rebalance request id and status"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/pots/v1/rebalance-evaluation-status",
    "method": "getEvaluationDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rebalance",
    "typeScriptTag": "rebalance",
    "description": "Retrieve rebalance evaluation request details",
    "parameters": [
      {
        "name": "rebalanceEvaluationId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the rebalance evaluation request",
        "example": "REBALANCE_EVALUATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "contains array for pot details"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/pots/v1/rebalance",
    "method": "triggerRebalanceProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rebalance",
    "typeScriptTag": "rebalance",
    "description": "Trigger rebalance process",
    "parameters": [
      {
        "name": "request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUEST_ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pot"
      },
      {
        "name": "values",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "pot-UKW3452850",
          "pot-SDQ5239730"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Containes the response for the rebalance request"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/pots/v1/rebalance-results",
    "method": "requestDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rebalance",
    "typeScriptTag": "rebalance",
    "description": "Retrieve rebalance request details",
    "parameters": [
      {
        "name": "rebalanceRequestId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the rebalance request",
        "example": "REBALANCE_REQUEST_ID"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/pots/v1/value",
    "method": "listTotalPotValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pots, Holdings and Transactions",
    "typeScriptTag": "pots,HoldingsAndTransactions",
    "description": "Get total value of all pots of an investor",
    "parameters": [
      {
        "name": "investorId",
        "schema": "string",
        "required": true,
        "description": "Investor Id",
        "example": "INVESTOR_ID"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/pots/v1/holdings",
    "method": "getHoldingsByPot",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pots, Holdings and Transactions",
    "typeScriptTag": "pots,HoldingsAndTransactions",
    "description": "Get total holdings of an Investor",
    "parameters": [
      {
        "name": "investorId",
        "schema": "string",
        "required": true,
        "description": "Id of the investor",
        "example": "INVESTOR_ID"
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
      }
    ]
  },
  {
    "url": "/tenant/pots/v1/{pot_id}",
    "method": "getPot",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pots, Holdings and Transactions",
    "typeScriptTag": "pots,HoldingsAndTransactions",
    "description": "Retrive existing pot from pot id",
    "parameters": [
      {
        "name": "potId",
        "schema": "string",
        "required": true,
        "description": "Pot Id",
        "example": "POT_ID"
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
      }
    ]
  },
  {
    "url": "/tenant/pots/v1/{pot_id}",
    "method": "updatePotDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Pots, Holdings and Transactions",
    "typeScriptTag": "pots,HoldingsAndTransactions",
    "description": "Update existing Pot details",
    "parameters": [
      {
        "name": "potId",
        "schema": "string",
        "required": true,
        "description": "Pot Id",
        "example": "POT_ID"
      },
      {
        "name": "pot_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Retirement Pot"
      },
      {
        "name": "portfolio_template_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "pft-c60c9472-6668-4f7a-aa69"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reference_version",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/pots/v1/{pot_id}/value",
    "method": "getCurrentPotValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pots, Holdings and Transactions",
    "typeScriptTag": "pots,HoldingsAndTransactions",
    "description": "Get current value of a pot",
    "parameters": [
      {
        "name": "potId",
        "schema": "string",
        "required": true,
        "description": "Pot Id",
        "example": "POT_ID"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/pots/v1/{pot_id}/holdings",
    "method": "getCurrentHoldings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pots, Holdings and Transactions",
    "typeScriptTag": "pots,HoldingsAndTransactions",
    "description": "Get current holdings of a pot",
    "parameters": [
      {
        "name": "potId",
        "schema": "string",
        "required": true,
        "description": "Pot Id",
        "example": "POT_ID"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/pots/v1/{pot_id}/transactions",
    "method": "getPotTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pots, Holdings and Transactions",
    "typeScriptTag": "pots,HoldingsAndTransactions",
    "description": "Get pending & past transactions of a pot",
    "parameters": [
      {
        "name": "potId",
        "schema": "string",
        "required": true,
        "description": "Pot Id",
        "example": "POT_ID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "From timestamp for the query. This must be in ISO format. Eg. 2021-08-12T07:54:47.011Z. If not present the from is set to 2000-01-01T00:00:00.000Z"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "To timestamp for the query. This must be in ISO format. Eg. 2021-08-12T07:54:47.011Z. If not present the to is set to current time."
      },
      {
        "name": "subTransactionType",
        "schema": "string",
        "required": false,
        "description": "Sub transaction type of the transactions to be retrieved from the API"
      },
      {
        "name": "pageSize",
        "schema": "string",
        "required": false,
        "description": "Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_number, both page_size and page_number will be defaulted to 1000 and 1. Max page size is 8000. Results are sorted decending order of the created date & time."
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": false,
        "description": "Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_size, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting order; results are sorted by creation time.",
        "default": "desc"
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
      }
    ]
  },
  {
    "url": "/tenant/investment-products/v1",
    "method": "getConfiguredProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Investment Products",
    "typeScriptTag": "investmentProducts",
    "description": "Get Configured Investment Products",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": "status of investment product. If empty will return all investment products."
      },
      {
        "name": "pageSize",
        "schema": "string",
        "required": false,
        "description": "Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_number, both page_size and page_number will be defaulted to 1000 and 1. Max page size is 3000. Results are sorted decending order of the created date & time."
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": false,
        "description": "Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_size, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time."
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
      }
    ]
  },
  {
    "url": "/tenant/investment-products/v1/current-prices",
    "method": "getCurrentPrices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Investment Products",
    "typeScriptTag": "investmentProducts",
    "description": "Get Current Prices of all Investment Products",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "string",
        "required": false,
        "description": "Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_number, both page_size and page_number will be defaulted to 1000 and 1. Max page size is 15000. Results are sorted decending order of the created date & time."
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": false,
        "description": "Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_size, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "status of investment product. If empty will return all investment products."
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
      }
    ]
  },
  {
    "url": "/tenant/investment-products/v1/{investment_product_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Investment Products",
    "typeScriptTag": "investmentProducts",
    "description": "Get details of a given Investment Product",
    "parameters": [
      {
        "name": "investmentProductId",
        "schema": "string",
        "required": true,
        "description": "Investment Product Id",
        "example": "INVESTMENT_PRODUCT_ID"
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
      }
    ]
  },
  {
    "url": "/tenant/investment-products/v1/{investment_product_id}/current-price",
    "method": "getCurrentPrice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Investment Products",
    "typeScriptTag": "investmentProducts",
    "description": "Get Current Price of an Investment Product",
    "parameters": [
      {
        "name": "investmentProductId",
        "schema": "string",
        "required": true,
        "description": "Investment Product Id",
        "example": "INVESTMENT_PRODUCT_ID"
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
      }
    ]
  },
  {
    "url": "/tenant/portfolio-templates/v1/{portfolio_template_id}",
    "method": "getTemplateById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolio Templates",
    "typeScriptTag": "portfolioTemplates",
    "description": "Retrive existing Portfolio template",
    "parameters": [
      {
        "name": "portfolioTemplateId",
        "schema": "string",
        "required": true,
        "description": "Portfolio ID",
        "example": "PORTFOLIO_TEMPLATE_ID"
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
      }
    ]
  },
  {
    "url": "/tenant/portfolio-templates/v1/{portfolio_template_id}",
    "method": "updateTemplate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Portfolio Templates",
    "typeScriptTag": "portfolioTemplates",
    "description": "Update existing Portfolio template",
    "parameters": [
      {
        "name": "portfolioTemplateId",
        "schema": "string",
        "required": true,
        "description": "Portfolio ID",
        "example": "PORTFOLIO_TEMPLATE_ID"
      },
      {
        "name": "portfolio_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PFT5689"
      },
      {
        "name": "ratios",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "reference_version",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/transactions/v1/buy",
    "method": "executeBuyTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Execute Buy Transaction(https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
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
      }
    ]
  },
  {
    "url": "/tenant/transactions/v1/sell",
    "method": "executeSellTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Execute Sell Transaction(https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
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
      }
    ]
  },
  {
    "url": "/tenant/transactions/v1/switch",
    "method": "getSwitchStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Switch Instruction",
    "typeScriptTag": "switchInstruction",
    "description": "Retrieve Switch instruction from Switch ID",
    "parameters": [
      {
        "name": "switchTransactionId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the switch instruction",
        "example": "SWITCH_TRANSACTION_ID"
      },
      {
        "name": "includeDetails",
        "schema": "boolean",
        "description": "If set to `true` details of individual buy and sell (https://wos-gb.sandbox.wealthos.cloud/admin/documentation transactions will be included"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/transactions/v1/switch",
    "method": "executeSwitchTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Switch Instruction",
    "typeScriptTag": "switchInstruction",
    "description": "Execute Switch Instruction",
    "parameters": [
      {
        "name": "request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUEST_ID"
      },
      {
        "name": "pot_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pot-UKW3452850"
      },
      {
        "name": "sell_instructions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "buy_instructions",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/rates/v1",
    "method": "getRateDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rates",
    "typeScriptTag": "rates",
    "description": "Get Configured Rates",
    "parameters": [
      {
        "name": "rateType",
        "schema": "string",
        "required": true,
        "description": "Type of Rate",
        "example": "RATE_TYPE"
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
      }
    ]
  },
  {
    "url": "/tenant/transactions/v1/fee",
    "method": "createFeeTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Fees",
    "typeScriptTag": "fees",
    "description": "Create Fee",
    "parameters": [
      {
        "name": "request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUEST_ID"
      },
      {
        "name": "pot_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pot-UKW3452850"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GBP"
      },
      {
        "name": "transaction_value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123.45"
      },
      {
        "name": "sub_transaction_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Custody fees"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "JSON for the Fee creation response"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/transactions/v1/withdrawal",
    "method": "createSingleWithdrawal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Withdrawals",
    "typeScriptTag": "withdrawals",
    "description": "Create Withdrawal",
    "parameters": [
      {
        "name": "request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUEST_ID"
      },
      {
        "name": "pot_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pot-SDQ5659730"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "transaction_value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123.45"
      },
      {
        "name": "sub_transaction_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Withdrawal"
      },
      {
        "name": "bank_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ba-example-bank-account"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "JSON for the Withdrawal creation response"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/withdrawals/v1/{transaction_id}",
    "method": "updateWithdrawalPaymentDate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LISA Transactions",
    "typeScriptTag": "lisaTransactions",
    "description": "Update existing LISA withdrawal transaction",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "Transaction ID of the withdrawal transaction that needs to be updated",
        "example": "TRANSACTION_ID"
      },
      {
        "name": "request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "20b904f7-8d05-4efd-bd36-4ec3b1ce8e03"
      },
      {
        "name": "reference_verison",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "trade_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-09-01"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "JSON for the LISA Withdrawal update response"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/utility/v1/upload-a-file",
    "method": "copyFileToInternalStore",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utility",
    "typeScriptTag": "utility",
    "description": "Upload a file",
    "parameters": [
      {
        "name": "file_paths",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/bank-accounts/v1",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Retrieve all the bank accounts of a particular investor",
    "parameters": [
      {
        "name": "investorId",
        "schema": "string",
        "required": true,
        "description": "Valid Investor Id",
        "example": "INVESTOR_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Array of bank accounts"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/bank-accounts/v1",
    "method": "createNewAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Create new bank account",
    "parameters": [
      {
        "name": "bank_account_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ba-20b904f7-8d05-4efd-bd36-4ec3b1ce8e03"
      },
      {
        "name": "investor_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "inv-QXR38578"
      },
      {
        "name": "contributing_party_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "cem-ZWV37971"
      },
      {
        "name": "account_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "David Brown"
      },
      {
        "name": "bank_account_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "investor"
      },
      {
        "name": "default_account",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "no"
      },
      {
        "name": "bank_account_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "12345678"
      },
      {
        "name": "account_status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "active"
      },
      {
        "name": "sort_code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123456"
      },
      {
        "name": "building_society_roll_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12345672"
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
      }
    ]
  },
  {
    "url": "/tenant/bank-accounts/v1/{bank_account_id}",
    "method": "getBankAccountById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Retrieve existing bank account from bank account id",
    "parameters": [
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "Bank Account Id",
        "example": "BANK_ACCOUNT_ID"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/bank-accounts/v1/{bank_account_id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Update existing bank account details",
    "parameters": [
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "Bank Account Id",
        "example": "BANK_ACCOUNT_ID"
      },
      {
        "name": "account_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "David Brown"
      },
      {
        "name": "default_account",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "no"
      },
      {
        "name": "account_status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "inactive"
      },
      {
        "name": "reference_version",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2
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
      }
    ]
  },
  {
    "url": "/tenant/investor-accounts/v1",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Investor Accounts",
    "typeScriptTag": "investorAccounts",
    "description": "Retrieve all the investor accounts",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "string",
        "required": false,
        "description": "Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_number, both page_size and page_number will be defaulted to 1000 and 1. Max page size is 4000. Results are sorted decending order of the created date & time."
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": false,
        "description": "Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_size, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time."
      },
      {
        "name": "financialProductId",
        "schema": "string",
        "description": "Multiple financial product ids as comma seperated string"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "Multiple account ids as comma seperated string"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Multiple statuses as comma seperated string"
      },
      {
        "name": "investorId",
        "schema": "string",
        "description": "Multiple investor ids as comma seperated string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Array of investor accounts"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/investor-accounts/v1/{account_id}",
    "method": "getAccountById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Investor Accounts",
    "typeScriptTag": "investorAccounts",
    "description": "Retrieve existing investor account from account id",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the investor account",
        "example": "ACCOUNT_ID"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/investor-accounts/v1/{account_id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Investor Accounts",
    "typeScriptTag": "investorAccounts",
    "description": "Update Investor Account Details",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the investor account",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "custodian_account_reference",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CAR573838383"
      },
      {
        "name": "custodian_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CID594898ff"
      },
      {
        "name": "custodian_client_reference",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CCR578fh8"
      },
      {
        "name": "regulator_advisor_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "RAI48483jd"
      },
      {
        "name": "reference_version",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/fees/v1/codes",
    "method": "getFeeCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fees",
    "typeScriptTag": "fees",
    "description": "Get Fee Codes (https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "parameters": [
      {
        "name": "feeCodes",
        "schema": "string",
        "required": false,
        "description": "Fee codes to be retrieved from the API. Can give multiple fee codes as comma separated values. (ex- FF_50,PF_75)"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status of the fee code to be retrieved from the API (Active, Inactive)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Definition of Get fee code response"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/fees/v1/setups",
    "method": "getFeeSetups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fees",
    "typeScriptTag": "fees",
    "description": "Get Fee Setups (https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "parameters": [
      {
        "name": "feeCalculationEntity",
        "schema": "string",
        "required": false,
        "description": "Level at which the recurring fee sub transaction type is setup. Can give multiple fee calculation entities as comma separated values to be retrieved via the API.(Options - Investor, Financial Product, Portfolio)"
      },
      {
        "name": "feeCalculationMethod",
        "schema": "string",
        "required": false,
        "description": "Fee calculation method used for fee computation for this fee sub transaction type to be retrieved via the API.(Options - Daily Accrual)"
      },
      {
        "name": "subTransactionType",
        "schema": "string",
        "required": false,
        "description": "Fee Sub transaction type set up for the entity. Can give multiple Sub transaction types as comma separated values.(ex- Service fees,Platform fees)"
      },
      {
        "name": "feeCodes",
        "schema": "string",
        "required": false,
        "description": "Fee codes of the fee setup to be retrieved from the API. Can give multiple fee codes as comma separated values.(ex- FF_50,PF_75)"
      },
      {
        "name": "assignedTo",
        "schema": "string",
        "required": false,
        "description": "Instances of the entity for which the fee sub transaction type is setup.(Options - All, a single instance, or an array of instances of the entity)"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Start date of the fee setup to be retrieved from the API. Should be on YYYY-MM-DD format."
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "End date of the fee setup to be retrieved from the API. Should be on YYYY-MM-DD format."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status of the fee code to be retrieved from the API (Active, Inactive)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Definition of Get fee setup response"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/fees/v1/exemptions",
    "method": "getExemptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fees",
    "typeScriptTag": "fees",
    "description": "Get Fee Exemptions (https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "parameters": [
      {
        "name": "feeExemptionEntity",
        "schema": "string",
        "required": false,
        "description": "Level at which the recurring fee sub transaction type is setup. Can give multiple fee exemption entities as comma separated values to be retrieved via the API.(Options - Investor,Financial Product,Portfolio)"
      },
      {
        "name": "subTransactionType",
        "schema": "string",
        "required": false,
        "description": "Fee Sub transaction type set up for the entity. Can give multiple Sub transaction types as comma separated values.(ex- Service fees,Platform fees)"
      },
      {
        "name": "assignedTo",
        "schema": "string",
        "required": false,
        "description": "Instances of the entity for which the fee sub transaction type is setup.(Options - All or a single instance )"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Start date of the fee setup to be retrieved from the API. Should be on YYYY-MM-DD format."
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "End date of the fee setup to be retrieved from the API. Should be on YYYY-MM-DD format."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status of the fee code to be retrieved from the API (Active, Inactive)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Definition of Get fee exemption response"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/investors/v1/{investor_id}/fee-nominations",
    "method": "deleteFeeNomination",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Investors",
    "typeScriptTag": "investors",
    "description": "Delete Fee Nomination for an Investor (https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "parameters": [
      {
        "name": "investorId",
        "schema": "string",
        "required": true,
        "description": "Investor Id",
        "example": "INVESTOR_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success message"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/investors/v1/{investor_id}/fee-nominations",
    "method": "getFeeNomination",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Investors",
    "typeScriptTag": "investors",
    "description": "Get Fee Nomination for an Investor (https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "parameters": [
      {
        "name": "investorId",
        "schema": "string",
        "required": true,
        "description": "Investor Id",
        "example": "INVESTOR_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Definition of Fee nomination creation response"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/investors/v1/{investor_id}/fee-nominations",
    "method": "updateFeeNomination",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Investors",
    "typeScriptTag": "investors",
    "description": "Update Fee Nomination for an Investor (https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "parameters": [
      {
        "name": "investorId",
        "schema": "string",
        "required": true,
        "description": "Investor Id",
        "example": "INVESTOR_ID"
      },
      {
        "name": "nominations",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "nominee_pot_id": "pot-UKW3452800"
          }
        ]
      },
      {
        "name": "reference_version",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Definition of Fee nomination creation response"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/investors/v1/{investor_id}/fee-nominations",
    "method": "createFeeNominationForInvestor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Investors",
    "typeScriptTag": "investors",
    "description": "Create Fee Nomination for an Investor (https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "parameters": [
      {
        "name": "investorId",
        "schema": "string",
        "required": true,
        "description": "Investor Id",
        "example": "INVESTOR_ID"
      },
      {
        "name": "nominations",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "nominee_pot_id": "pot-UKW3452800"
          }
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Definition of Fee nomination creation response"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/contributing-employers/v1",
    "method": "getByInvestor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contributing Employers",
    "typeScriptTag": "contributingEmployers",
    "description": "Retrieve all the contributing employers of a particular investor",
    "parameters": [
      {
        "name": "investorId",
        "schema": "string",
        "description": "Valid Investor Id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Array of contributing employers"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/contributing-employers/v1",
    "method": "createNewEmployer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contributing Employers",
    "typeScriptTag": "contributingEmployers",
    "description": "Create new contributing employer",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Acme Ltd"
      },
      {
        "name": "investor_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "inv-QXR38578"
      },
      {
        "name": "registration_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "12345678"
      },
      {
        "name": "address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "active"
      },
      {
        "name": "bank_accounts",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contributing Employer"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/contributing-employers/v1/{contributing_employer_id}",
    "method": "getParticularEmployer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contributing Employers",
    "typeScriptTag": "contributingEmployers",
    "description": "Retrieve a particular contributing employer",
    "parameters": [
      {
        "name": "contributingEmployerId",
        "schema": "string",
        "required": true,
        "description": "Contributing Employer Id",
        "example": "CONTRIBUTING_EMPLOYER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contributing Employer"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/contributing-employers/v1/{contributing_employer_id}",
    "method": "updateParticularEmployer",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contributing Employers",
    "typeScriptTag": "contributingEmployers",
    "description": "Update a particular contributing employer",
    "parameters": [
      {
        "name": "contributingEmployerId",
        "schema": "string",
        "required": true,
        "description": "Contributing Employer Id",
        "example": "CONTRIBUTING_EMPLOYER_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Acme Ltd"
      },
      {
        "name": "registration_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12345678"
      },
      {
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "active"
      },
      {
        "name": "reference_version",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contributing Employer"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/recurring-contributions/v1",
    "method": "getAllContributions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recurring Contributions",
    "typeScriptTag": "recurringContributions",
    "description": "Get All Recurring Contributions",
    "parameters": [
      {
        "name": "contributionId",
        "schema": "string",
        "required": false,
        "description": "Contribution Id"
      },
      {
        "name": "potId",
        "schema": "string",
        "required": false,
        "description": "Pot Id"
      },
      {
        "name": "financialProductId",
        "schema": "string",
        "required": false,
        "description": "Financial Product Id"
      },
      {
        "name": "investorId",
        "schema": "string",
        "required": false,
        "description": "Investor Id"
      },
      {
        "name": "paymentType",
        "schema": "string",
        "required": false,
        "description": "Payment type of the payment to be retrieved from the API"
      },
      {
        "name": "subTransactionType",
        "schema": "string",
        "required": false,
        "description": "Sub Transaction Type of the recurring contribution"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status of the recurring contribution"
      },
      {
        "name": "pageSize",
        "schema": "string",
        "required": false,
        "description": "Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_number, both page_size and page_number will be defaulted to 1000 and 1. Max page size is 8000. Results are sorted decending order of the created date & time."
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": false,
        "description": "Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_size, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting order; results are sorted by creation time.",
        "default": "desc"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/recurring-contributions/v1",
    "method": "createPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recurring Contributions",
    "typeScriptTag": "recurringContributions",
    "description": "Create Recurring Payment",
    "parameters": [
      {
        "name": "request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUEST_ID"
      },
      {
        "name": "contribution_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Contributions to SIPP"
      },
      {
        "name": "pot_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pot-UKW34528503"
      },
      {
        "name": "investor_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "inv-XUT11265"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100.00"
      },
      {
        "name": "sub_transaction_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Regular contribution - Employer"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GBP"
      },
      {
        "name": "payment_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "direct_debit"
      },
      {
        "name": "service_provider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "gocardless"
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "invest"
      },
      {
        "name": "investment_instructions",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "investment_product_id": "isa_1223931892",
            "quantity": "300"
          },
          {
            "investment_product_id": "isa_9913091898",
            "quantity": "500"
          }
        ]
      },
      {
        "name": "source_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "cem-ASP43560"
      },
      {
        "name": "payment_schedule",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "interval_unit": "monthly",
          "interval": 2,
          "date": 1,
          "start_date": "2023-04-02",
          "end_date": "2023-11-02"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/recurring-contributions/v1/{contribution_id}",
    "method": "updateRecurringPayment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Recurring Contributions",
    "typeScriptTag": "recurringContributions",
    "description": "Update Recurring Payment",
    "parameters": [
      {
        "name": "contributionId",
        "schema": "string",
        "required": true,
        "description": "Contribution Id",
        "example": "CONTRIBUTION_ID"
      },
      {
        "name": "amount",
        "schema": "string",
        "description": "",
        "example": "1500.00"
      },
      {
        "name": "contribution_name",
        "schema": "string",
        "description": "",
        "example": "New contributions to SIPP"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/recurring-contributions/v1/{contribution_id}/pause",
    "method": "pausePaymentSetup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recurring Contributions",
    "typeScriptTag": "recurringContributions",
    "description": "Pause Recurring Payment",
    "parameters": [
      {
        "name": "contributionId",
        "schema": "string",
        "required": true,
        "description": "Contribution Id",
        "example": "CONTRIBUTION_ID"
      },
      {
        "name": "pause_cycles",
        "schema": "integer",
        "description": "",
        "example": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/recurring-contributions/v1/{contribution_id}/resume",
    "method": "resumeContribution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recurring Contributions",
    "typeScriptTag": "recurringContributions",
    "description": "Resume Recurring Payment",
    "parameters": [
      {
        "name": "contributionId",
        "schema": "string",
        "required": true,
        "description": "Contribution Id",
        "example": "CONTRIBUTION_ID"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/recurring-contributions/v1/{contribution_id}/cancel",
    "method": "cancelRecurringPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recurring Contributions",
    "typeScriptTag": "recurringContributions",
    "description": "Cancel Recurring Payment",
    "parameters": [
      {
        "name": "contributionId",
        "schema": "string",
        "required": true,
        "description": "Contribution Id",
        "example": "CONTRIBUTION_ID"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/pots/v1/crystallisation",
    "method": "getAllRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SIPP Crystallisation",
    "typeScriptTag": "sippCrystallisation",
    "description": "Get All Crystallisation Requests",
    "parameters": [
      {
        "name": "crystallisationId",
        "schema": "string",
        "required": false,
        "description": "Crystallisation Id"
      },
      {
        "name": "investorId",
        "schema": "string",
        "required": false,
        "description": "Investor Id"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status of crystallisation request"
      },
      {
        "name": "pageSize",
        "schema": "string",
        "required": false,
        "description": "Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_number, both page_size and page_number will be defaulted to 1000 and 1. Max page size is 8000. Results are sorted decending order of the created date & time."
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": false,
        "description": "Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_size, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting order; results are sorted by creation time.",
        "default": "desc"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/pots/v1/crystallisation",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SIPP Crystallisation",
    "typeScriptTag": "sippCrystallisation",
    "description": "Create a crystallisation request",
    "parameters": [
      {
        "name": "request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUEST_ID"
      },
      {
        "name": "investor_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "inv-XUT11265"
      },
      {
        "name": "bank_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ba-bc00c28f-b3fc-42b7"
      },
      {
        "name": "crystallisation_instructions",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "pot_id": "pot-GYQ5423100",
            "value": "1000"
          }
        ]
      },
      {
        "name": "drawdown_instructions",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "pot_id": "pot-XWL3855774",
            "purpose": "cash",
            "percentage": "30"
          },
          {
            "pot_id": "pot-SDQ5009730",
            "purpose": "invest",
            "percentage": "70"
          }
        ]
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
      }
    ]
  },
  {
    "url": "/tenant/investors/v1/tax-codes",
    "method": "getAllTaxCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Investors",
    "typeScriptTag": "investors",
    "description": "Get All Tax Codes",
    "parameters": [
      {
        "name": "investorId",
        "schema": "string",
        "required": false,
        "description": "Investor Id"
      },
      {
        "name": "pageSize",
        "schema": "string",
        "required": false,
        "description": "Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_number, both page_size and page_number will be defaulted to 1000 and 1. Max page size is 4000. Results are sorted decending order of the created date & time."
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": false,
        "description": "Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_size, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting order; results are sorted by creation time.",
        "default": "desc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Array of tax codes"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/recurring-withdrawals/v1",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recurring Withdrawals",
    "typeScriptTag": "recurringWithdrawals",
    "description": "Get All Recurring Withdrawals",
    "parameters": [
      {
        "name": "withdrawalId",
        "schema": "string",
        "required": false,
        "description": "Withdrawal Id"
      },
      {
        "name": "potId",
        "schema": "string",
        "required": false,
        "description": "Pot Id"
      },
      {
        "name": "financialProductId",
        "schema": "string",
        "required": false,
        "description": "Financial Product Id"
      },
      {
        "name": "investorId",
        "schema": "string",
        "required": false,
        "description": "Investor Id"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status of the recurring withdrawal"
      },
      {
        "name": "pageSize",
        "schema": "string",
        "required": false,
        "description": "Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_number, both page_size and page_number will be defaulted to 1000 and 1. Max page size is 8000. Results are sorted decending order of the created date & time."
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": false,
        "description": "Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_size, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting order; results are sorted by creation time.",
        "default": "desc"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/recurring-withdrawals/v1",
    "method": "createNewWithdrawal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recurring Withdrawals",
    "typeScriptTag": "recurringWithdrawals",
    "description": "Create Recurring Withdrawal",
    "parameters": [
      {
        "name": "request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUEST_ID"
      },
      {
        "name": "withdrawal_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Withdrawals to SIPP"
      },
      {
        "name": "investor_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "inv-XUT11265"
      },
      {
        "name": "pot_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pot-GYQ5423100"
      },
      {
        "name": "bank_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ba-92yu982d-at6u-4242-9856-83"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100.00"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GBP"
      },
      {
        "name": "withdrawal_schedule",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "interval_unit": "monthly",
          "interval": 2,
          "date": 1,
          "start_date": "2023-04-02",
          "end_date": "2023-11-02"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/recurring-withdrawals/v1/{withdrawal_id}",
    "method": "updateActiveWithdrawal",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Recurring Withdrawals",
    "typeScriptTag": "recurringWithdrawals",
    "description": "Update Recurring Withdrawal",
    "parameters": [
      {
        "name": "withdrawalId",
        "schema": "string",
        "required": true,
        "description": "Withdrawal Id",
        "example": "WITHDRAWAL_ID"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1500.00"
      },
      {
        "name": "withdrawal_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "New withdrawals to SIPP"
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2024-10-30"
      },
      {
        "name": "reference_version",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/recurring-withdrawals/v1/{withdrawal_id}/cancel",
    "method": "cancelRecurringWithdrawal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recurring Withdrawals",
    "typeScriptTag": "recurringWithdrawals",
    "description": "Cancel Recurring Withdrawal",
    "parameters": [
      {
        "name": "withdrawalId",
        "schema": "string",
        "required": true,
        "description": "Withdrawal Id",
        "example": "WITHDRAWAL_ID"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/workplace-employers/v1",
    "method": "getAllEmployers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workplace Employers",
    "typeScriptTag": "workplaceEmployers",
    "description": "Get all workplace employers (https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "string",
        "required": false,
        "description": "Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_number, both page_size and page_number will be defaulted to 1000 and 1. Max page size is 8000."
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": false,
        "description": "Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_size, both page_size and page_number will be defaulted to 1000 and 1."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting order; results are sorted by creation time.",
        "default": "desc"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/workplace-employers/v1",
    "method": "createEmployer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workplace Employers",
    "typeScriptTag": "workplaceEmployers",
    "description": "Create workplace employer (https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Romayo Ltd"
      },
      {
        "name": "registration_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "12345678"
      },
      {
        "name": "registered_address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "correspondence_address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "company_structure",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LLC"
      },
      {
        "name": "contact_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "kyb_aml_status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "clear",
        "default": "not_started"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "active"
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
      }
    ]
  },
  {
    "url": "/tenant/workplace-employers/v1/{workplace_employer_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workplace Employers",
    "typeScriptTag": "workplaceEmployers",
    "description": "Get existing workplace employer (https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "parameters": [
      {
        "name": "workplaceEmployerId",
        "schema": "string",
        "required": true,
        "description": "Workplace Employer Id",
        "example": "WORKPLACE_EMPLOYER_ID"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/workplace-employers/v1/{workplace_employer_id}",
    "method": "updateEmployerDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Workplace Employers",
    "typeScriptTag": "workplaceEmployers",
    "description": "Update workplace employer (https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "parameters": [
      {
        "name": "workplaceEmployerId",
        "schema": "string",
        "required": true,
        "description": "Workplace Employer Id",
        "example": "WORKPLACE_EMPLOYER_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Romayo Ltd"
      },
      {
        "name": "registration_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12345678"
      },
      {
        "name": "registered_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "correspondence_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "company_structure",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LLC"
      },
      {
        "name": "contact_details",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "kyb_aml_status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "clear",
        "default": "not_started"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "active"
      },
      {
        "name": "reference_version",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 1
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/workplace-employers/v1/{workplace_employer_id}/investors",
    "method": "getAllInvestors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workplace Employers",
    "typeScriptTag": "workplaceEmployers",
    "description": "Get all investors of a workplace employer (https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "parameters": [
      {
        "name": "workplaceEmployerId",
        "schema": "string",
        "required": true,
        "description": "Workplace Employer Id",
        "example": "WORKPLACE_EMPLOYER_ID"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/payments/v1",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get All Payments",
    "parameters": [
      {
        "name": "paymentType",
        "schema": "string",
        "required": false,
        "description": "Payment type of the payment to be retrieved from the API (electronic_fund_transfer, card, direct_debit)"
      },
      {
        "name": "serviceProvider",
        "schema": "string",
        "required": false,
        "description": "Service provider of the payment to be retrieved from the API (truelayer, stripe, gocardless, none)"
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": "Purpose of the payment to be retrieved from the API (cash, invest)"
      },
      {
        "name": "subTransactionType",
        "schema": "string",
        "required": false,
        "description": "Sub transaction types of the payments to be retrieved from the API. Can give multiple sub transaction types as comma separated values. (ex- Lump sum,Regular contribution)"
      },
      {
        "name": "investorId",
        "schema": "string",
        "required": false,
        "description": "investor_id of the payments to be retrieved from the API. Can give multiple investor ids as comma separated values. (ex- inv-XLZ8990,inv-RFT6758)"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "status of the payments to be retrieved from the API. Can give multiple statuses as comma separated values. (ex- succeeded,pending_confirmation)"
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": false,
        "description": "source_id of the payments to be retrieved from the API. Can give multiple source ids as comma separated values. (ex- cem-BGJ20491,cem-TGY90961)"
      },
      {
        "name": "contributionId",
        "schema": "string",
        "required": false,
        "description": "contribution_id of the payments to be retrieved from the API. Can give multiple contribution ids as comma separated values. (ex- BCV-GH-BUH2965,RCB-GC-RGH2065)"
      },
      {
        "name": "pageSize",
        "schema": "string",
        "required": false,
        "description": "Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_number, both page_size and page_number will be defaulted to 1000 and 1. Max page size is 8000. Results are sorted decending order of the created date & time."
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": false,
        "description": "Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_size, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time."
      },
      {
        "name": "potId",
        "schema": "string",
        "required": false,
        "description": "Pot Id"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting order; results are sorted by creation time. ",
        "default": "desc"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/payments/v1",
    "method": "createPaymentIntent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Create Single Payment Intent",
    "parameters": [
      {
        "name": "request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUEST_ID"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "100.00"
      },
      {
        "name": "pot_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pot-UKW3452850"
      },
      {
        "name": "payment_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "electronic_fund_transfer"
      },
      {
        "name": "service_provider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "truelayer"
      },
      {
        "name": "service_provider_params",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "GBP"
      },
      {
        "name": "sub_transaction_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Lump sum"
      },
      {
        "name": "source_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "cem-ASP43560"
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "invest"
      },
      {
        "name": "investment_instructions",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "investment_product_id": "isa_1223931892",
            "quantity": "300"
          },
          {
            "investment_product_id": "isa_9913091898",
            "quantity": "500"
          }
        ]
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/portfolio-templates/v1",
    "method": "getAllTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolio Templates",
    "typeScriptTag": "portfolioTemplates",
    "description": "Get all the Portfolio templates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Array of all portfolio templates applicable to the investor"
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
      }
    ]
  },
  {
    "url": "/tenant/portfolio-templates/v1",
    "method": "createNewTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portfolio Templates",
    "typeScriptTag": "portfolioTemplates",
    "description": "Create new Portfolio Template",
    "parameters": [
      {
        "name": "portfolio_template_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pft-c60c9472-6668-4f7a-aa69"
      },
      {
        "name": "portfolio_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PFT5689"
      },
      {
        "name": "owner",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SYSTEM"
      },
      {
        "name": "ratios",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "investment_product_id": "ETF069GBP",
            "ratio": "60"
          },
          {
            "investment_product_id": "BND058GBP",
            "ratio": "40"
          }
        ]
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
      }
    ]
  },
  {
    "url": "/tenant/transactions/v1",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Retrieve All Transactions",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": false,
        "description": "Unique identifier for the transaction"
      },
      {
        "name": "parentTransactionId",
        "schema": "string",
        "required": false,
        "description": "Unique identifier for parent transaction"
      },
      {
        "name": "aggregatedTransactionId",
        "schema": "string",
        "required": false,
        "description": "Unique identifier for the aggregated transaction"
      },
      {
        "name": "investorId",
        "schema": "string",
        "required": false,
        "description": "Investor ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": "Account ID"
      },
      {
        "name": "potId",
        "schema": "string",
        "required": false,
        "description": "Pot ID"
      },
      {
        "name": "subTransactionType",
        "schema": "string",
        "required": false,
        "description": "Sub transaction type"
      },
      {
        "name": "subType",
        "schema": "string",
        "required": false,
        "description": "Status of the transaction. Multiple statuses as comma separated string can be entered"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "The start date of the withdrawal charges to be retrieved from the API. Should be on YYYY-MM-DD format"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The end date of the withdrawal charges to be retrieved from the API. Should be on YYYY-MM-DD format"
      },
      {
        "name": "pageSize",
        "schema": "string",
        "required": false,
        "description": "Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_number, both page_size and page_number will be defaulted to 1000 and 1. Max page size is [4000]. Results are sorted descending order of the created date & time"
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": false,
        "description": "Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided or provided without page_size, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted descending order of the created date & time"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sorting order; results are sorted by creation time."
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenant/withdrawals/v1",
    "method": "createSingleWithdrawal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Withdrawals",
    "typeScriptTag": "withdrawals",
    "description": "Create Single Withdrawal",
    "parameters": [
      {
        "name": "request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUEST_ID"
      },
      {
        "name": "pot_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pot-SDQ5659730"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "transaction_value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123.45"
      },
      {
        "name": "sub_transaction_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Withdrawal"
      },
      {
        "name": "bank_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ba-example-bank-account"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "JSON for the Withdrawal response"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="WealthOS API"
      apiBaseUrl="https://web_host_name"
      apiVersion="v1"
      endpoints={58}
      sdkMethods={85}
      schemas={675}
      parameters={434}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wealthos/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wealthos/openapi.yaml"
      developerDocumentation="wos-gb.sandbox.wealthos.cloud/admin/documentation"
    />
  );
}
  