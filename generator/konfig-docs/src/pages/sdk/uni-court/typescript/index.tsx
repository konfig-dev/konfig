import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function UniCourtTypeScriptSdk() {
  return (
    <Sdk
      sdkName="unicourt-typescript-sdk"
      metaDescription="UniCourt is a leader in making court data more accessible and useful. We provide real-time access to court data from state, federal, and local courts, as well as analytics, case management, and automation tools for legal professionals."
      company="UniCourt"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unicourt/logo.png"
      clientNameCamelCase="uniCourt"
      homepage="unicourt.com"
      lastUpdated={new Date("2024-02-17T00:45:59.211Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unicourt/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unicourt/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/attorney/{attorneyId}",
    "method": "getAttorneyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets details for a requested Attorney ID.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/attorney/{attorneyId}/associatedParties",
    "method": "getAssociatedParties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets Associated Party details for a requested Attorney ID.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/billingCycleUsage/{billingCycle}",
    "method": "getApiUsageByBillingCycle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Usage API",
    "typeScriptTag": "usageApi",
    "description": "Specify the billing cycle to know the API usage.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/billingCycles",
    "method": "listPreviousBillingCycles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Usage API",
    "typeScriptTag": "usageApi",
    "description": "Get all the previous 12 billing cycles.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/callbacks",
    "method": "listCallbacksWithCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Callback API",
    "typeScriptTag": "callbackApi",
    "description": "Get list of callback types with count for a requested Date.",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "description": "Date for which fetch the callback type list. By default, the date will be set to current date."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Status of the callbacks. Default status will fetch all callbacks."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/case/{caseId}",
    "method": "getCaseInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets case information for a requested Case ID.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/case/{caseId}/attorneys",
    "method": "getAttorneysByCaseId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets Attorneys for a requested Case ID.",
    "parameters": [
      {
        "name": "isVisible",
        "schema": "boolean",
        "required": false,
        "description": "Retrieve attorneys in the case with the specified caseId value whose isVisible flag is set to the specified value."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/case/{caseId}/docketEntries",
    "method": "getDocketEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets Docket Entries for a requested Case ID.",
    "parameters": [
      {
        "name": "docketNumber",
        "schema": "integer",
        "description": "Retrieve the docket entry witih the specified docket number in the case with the specified caseId value."
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Sort the retrieved docket entries in ascending order or descending order of date."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/case/{caseId}/docketEntries/primaryDocuments",
    "method": "getPrimaryDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets Primary Documents of Docket Entries.",
    "parameters": [
      {
        "name": "docketNumber",
        "schema": "integer",
        "required": true,
        "description": "Retrieve the primary documents associated with the specified docket number in the case with the specified caseId value."
      },
      {
        "name": "inLibrary",
        "schema": "boolean",
        "required": false,
        "description": "Retrieve the primary documents in the with the specified inLibrary flag in the case with the specified caseId value."
      },
      {
        "name": "afterFirstFetchDate",
        "schema": "string",
        "description": "Retrieve all primary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date."
      },
      {
        "name": "libraryDate",
        "schema": "string",
        "description": "Retrieve all primary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Primary Documents refers to documents that are directly related to a docket entry. Primary Documents could be specific to a courts or case type in courts. For isntance the below example is in PACER. PACER District Courts - Here the primary document is one which is attached to the docket number. Because in district for a primary document it can have many attachments associatated to it. PACER Appeal Courts - Here the attachments for a docket entry are the primary documents. Because in appeal for those attachments there is no primary documents."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/case/{caseId}/docketEntries/secondaryDocuments",
    "method": "getSecondaryDocumentsForDocketEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets Secondary Documents of Docket Entries.",
    "parameters": [
      {
        "name": "docketNumber",
        "schema": "integer",
        "required": true,
        "description": "Retrieve the secondary documents associated with the specified docket number in the case with the specified caseId value."
      },
      {
        "name": "inLibrary",
        "schema": "boolean",
        "description": "Retrieve the secondary documents in the with the specified inLibrary flag in the case with the specified caseId value."
      },
      {
        "name": "afterFirstFetchDate",
        "schema": "string",
        "description": "Retrieve all secondary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date."
      },
      {
        "name": "libraryDate",
        "schema": "string",
        "description": "Retrieve all secondary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Secondary Documents refers to documents that are attached to a docket entry. Secondary Documents could be specific to a courts or case type in courts. For isntance the below example is in PACER. PACER District Courts - Here the secondary document is one which is attached in the docket entry."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/case/{caseId}/documents",
    "method": "getDocumentsForCase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Documents API",
    "typeScriptTag": "caseDocumentsApi",
    "description": "Gets Documents for a requested Case ID.",
    "parameters": [
      {
        "name": "inLibrary",
        "schema": "boolean",
        "description": "Filter all the documents those are added to the UniCourt library."
      },
      {
        "name": "afterFirstFetchDate",
        "schema": "string",
        "description": "Get all the documents which were added to the case on or after a specific date."
      },
      {
        "name": "libraryDate",
        "schema": "string",
        "description": "Sort all the documents based on the date when the document was added to the UniCourt Library."
      },
      {
        "name": "firstFetchDate",
        "schema": "string",
        "description": "Sort all the documents based on the date it was fetched from the source site."
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Sort documents with document order."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page for which the result should be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/case/{caseId}/hearings",
    "method": "getHearingsForCase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets Hearings for a requested Case ID.",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Specify the sort order of hearings in the case with the specified caseId."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/case/{caseId}/judges",
    "method": "getJudgesForCase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets Judges for a requested Case ID.",
    "parameters": [
      {
        "name": "isVisible",
        "schema": "boolean",
        "required": false,
        "description": "Retrieve attorneys judges in the case with the specified caseId value whose isVisible flag is set to the specified value."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/case/{caseId}/parties",
    "method": "getCaseParties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets Parties for a requested Case ID.",
    "parameters": [
      {
        "name": "isVisible",
        "schema": "boolean",
        "required": false,
        "description": "Retrieve parties in the case with the specified caseId value whose isVisible flag is set to the specified value."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved."
      },
      {
        "name": "partyRoleId",
        "schema": "string",
        "required": false,
        "description": "Retrieve all parties with the specified partyRoleId value in the case with the specified caseId value."
      },
      {
        "name": "partyRoleGroupId",
        "schema": "string",
        "required": false,
        "description": "Retrieve all parties with the specified partyRoleGroupId value in the case with the specified caseId value."
      },
      {
        "name": "attorneyRepresentationTypeId",
        "schema": "string",
        "required": false,
        "description": "Retrieve all parties with the specified attorneyRepresentationTypeId value in the case with the specified caseId value."
      },
      {
        "name": "partyClassificationType",
        "schema": "string",
        "required": false,
        "description": "Retrieve all parties with the specified partyClassificationType value in the case with the specified caseId value."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/case/{caseId}/relatedCases",
    "method": "getRelatedCases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets Related Cases for a requested Case ID.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByAreaOfLaw",
    "method": "getCaseCountByAreaOfLaw",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Area Of Law.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Case Counts by Area Of Law Response."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByCaseClass",
    "method": "getCaseCountAnalyticsByCaseClass",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Case Class.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Case Counts by Case Class Response."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByCaseFiledDate",
    "method": "getCaseCountAnalyticsByCaseFiledDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Case Filed Date.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "required": true,
        "description": "GroupBy"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response for Case Count by filing date."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByCaseType",
    "method": "getCaseCountByCaseType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Case Type.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Case Counts by Case Types Response."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByCaseTypeGroup",
    "method": "getCaseCountAnalyticsByCaseTypeGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Case Type Group.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Case Counts by Case Type Group Response."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByCourt",
    "method": "getCaseCountAnalyticsByCourt",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Court.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Case Counts by Court."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByCourtLocation",
    "method": "getCaseCountAnalyticsByCourtLocation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Court Location.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Case Counts by Court Location Response."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByCourtSystem",
    "method": "getCaseCountAnalyticsByCourtSystem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Court System.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Case Counts by Court System."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByCourtType",
    "method": "getCaseCountAnalyticsByCourtType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by CourtType.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Case Counts by Court Type."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByJurisdictionGeo",
    "method": "getCaseCountAnalyticsByJurisdictionGeo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Jurisdiction Geo.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Case Counts by Juridiction Geo Response."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByNormAttorney",
    "method": "getCaseCountAnalyticsByNormAttorney",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Attorney.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByNormJudge",
    "method": "getCaseCountAnalyticsByNormJudge",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Judge.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByNormLawFirm",
    "method": "getCaseCountAnalyticsByNormLawFirm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Norm Law Firm.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByNormParty",
    "method": "getCaseCountAnalyticsByNormParty",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Party.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByPartyRole",
    "method": "getCaseCountAnalyticsByPartyRole",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Party Role.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Case Count by Party Type Response."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseCountAnalyticsByPartyRoleGroup",
    "method": "getCaseCountAnalyticsByPartyRoleGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Party Role Group.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Case Count by Party Type Group Response."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseDocument/{caseDocumentId}",
    "method": "getDocumentDetailsByDocumentId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Documents API",
    "typeScriptTag": "caseDocumentsApi",
    "description": "Gets details for a requested Document ID.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseDocumentDownload/{caseDocumentId}",
    "method": "getDownloadableUrlForDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Documents API",
    "typeScriptTag": "caseDocumentsApi",
    "description": "Gets downloadable URL for a requested Document ID.",
    "parameters": [
      {
        "name": "isPreviewDocument",
        "schema": "boolean",
        "description": "If the document you want to download is a preview of a document."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "403",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseDocumentOrder",
    "method": "addDocumentOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Case Documents API",
    "typeScriptTag": "caseDocumentsApi",
    "description": "Add Case Document Order for requested Document Ids.",
    "parameters": [
      {
        "name": "caseDocumentId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "isPreviewOnly",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "pacerOptions",
        "schema": "object",
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
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "402",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseDocumentOrder/callbacks",
    "method": "listDocumentOrderCallbacks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Documents API",
    "typeScriptTag": "caseDocumentsApi",
    "description": "Get Case Document Order Callback list for a requested Date.",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "description": "Date for which fetch the Case Document Order Callback list. By default, the date will be set to current date."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Status of Document Order callbacks. Default status will fetch all callbacks."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Page to fetch the Case Document Order Callback list.<br>\n  - Minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseDocumentOrder/callbacks/{caseDocumentOrderCallbackId}",
    "method": "getCallbackById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Documents API",
    "typeScriptTag": "caseDocumentsApi",
    "description": "Get Case Document Order Callback for a requested Case Document Order Callback Id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseExport/callbacks",
    "method": "getCallbackListForRequestedDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Export API",
    "typeScriptTag": "caseExportApi",
    "description": "Get Case Export Callback list for a requested Date.",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "description": "The date for which callbacks are to be retrieved."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "The status code of the callbacks to be retrieved."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the callbacks to be retrieved.<br>\n  - Minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseExport/callbacks/{caseExportCallbackId}",
    "method": "getCallbackById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Export API",
    "typeScriptTag": "caseExportApi",
    "description": "Get Case Export Callback for a requested Case Export Callback Id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseExport/{caseId}",
    "method": "getCaseExportByCaseId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Export API",
    "typeScriptTag": "caseExportApi",
    "description": "Gets case exported for a requested Case ID.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseSearch",
    "method": "searchByKeywordExpressions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Search API",
    "typeScriptTag": "caseSearchApi",
    "description": "Case search.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": true,
        "description": "Query parameter for keyword expressions.</a>\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Query parameter specifying how results are to be sorted. Results can be sorted according to filedDate or relevancy."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Query parameter specifying whether search result are sorted in ascending or descending order."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved.\n- Minimum: 1\n- Maximum: 1000\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseSearch/{caseSearchId}",
    "method": "getSearchResultsByCaseSearchId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Search API",
    "typeScriptTag": "caseSearchApi",
    "description": "Case search results for a given caseSearchId.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved.\n- Minimum: 1\n- Maximum: 1000\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseTrack",
    "method": "addCaseTrack",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Case Tracking API",
    "typeScriptTag": "caseTrackingApi",
    "description": "Add Case Track for the requested Case Id.",
    "parameters": [
      {
        "name": "caseTrackParams",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success object contains its message related to the API request."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "403",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseTrack/{caseId}",
    "method": "removeCaseTrackById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Case Tracking API",
    "typeScriptTag": "caseTrackingApi",
    "description": "Remove Case Track for a specific Case Id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success object contains its message related to the API request."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseTrack/{caseId}",
    "method": "getCaseTrack",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Tracking API",
    "typeScriptTag": "caseTrackingApi",
    "description": "Get Case Track for a requested Case Id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseTracks",
    "method": "getCaseTrackList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Tracking API",
    "typeScriptTag": "caseTrackingApi",
    "description": "Get Case Track list.",
    "parameters": [
      {
        "name": "lastFetchDate",
        "schema": "string",
        "description": "The lastFetchDate value of the tracked case. The date value should be entered in the format YYYY-MM-DDTHH:MM:SS+ZZ:zz.\n"
      },
      {
        "name": "lastFetchDateWithUpdates",
        "schema": "string",
        "description": "The date on which changes were last found in the case information.\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.<br>\n  - Minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseUpdate",
    "method": "addCaseUpdateForCaseId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Case Update API",
    "typeScriptTag": "caseUpdateApi",
    "description": "Add Case Update for the requested Case Id.",
    "parameters": [
      {
        "name": "caseId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "pacerOptions",
        "schema": "object",
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
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseUpdate/{caseId}",
    "method": "getCaseUpdatesByCaseId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Update API",
    "typeScriptTag": "caseUpdateApi",
    "description": "Get Case Updates for a requested CaseId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/caseUpdates",
    "method": "getCaseUpdates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Update API",
    "typeScriptTag": "caseUpdateApi",
    "description": "Get Case Update  list for a requested Date.",
    "parameters": [
      {
        "name": "caseId",
        "schema": "string",
        "description": "The caseId value of the case for which updates should be retrieved."
      },
      {
        "name": "requestedDate",
        "schema": "string",
        "description": "The date for which case updates are to be retrieved."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Status of the case updates to be retrieved."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the callbacks to be retrieved.<br>\n  - Minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/courtCoverage/{courtId}",
    "method": "getCourtCoverageByCourtId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Availability API",
    "typeScriptTag": "courtAvailabilityApi",
    "description": "Gets Court Coverage of all courts of specific type.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/dailyUsage/{date}",
    "method": "getApiUsageByDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Usage API",
    "typeScriptTag": "usageApi",
    "description": "Get API usage for a requested Date.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/generateNewToken",
    "method": "generateNewToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication API",
    "typeScriptTag": "authenticationApi",
    "description": "Generate new token to access API.",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "clientSecret",
        "schema": "string",
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
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "403",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/invalidateAllTokens",
    "method": "invalidateAllTokens",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Authentication API",
    "typeScriptTag": "authenticationApi",
    "description": "API to invalidate all access tokens.",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success object contains its message related to the API request."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/invalidateToken",
    "method": "invalidateAccessToken",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Authentication API",
    "typeScriptTag": "authenticationApi",
    "description": "API to invalidate the access token.",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success object contains its message related to the API request."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/judge/{judgeId}",
    "method": "getJudgeDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets details for a requested Judge ID.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/listAllTokenIds",
    "method": "getAllTokenIds",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Authentication API",
    "typeScriptTag": "authenticationApi",
    "description": "API to list all the access tokens Id.",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "clientSecret",
        "schema": "string",
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
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/areaOfLaw",
    "method": "listAreaOfLaw",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "AreaOfLaw Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "Retrieve one or more areas of law using a keyword expression. Keyword expressions should be constructed according to the rules given above.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/areaOfLaw/{areaOfLawId}",
    "method": "getAreaOfLaw",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "AreaOfLaw Object for the given AreaOfLaw Id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/attorneyRepresentationType",
    "method": "getAttorneyRepType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Attorney Representation Type Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the attorney representation type.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/attorneyRepresentationType/{attorneyRepresentationTypeId}",
    "method": "getAttorneyRepType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Attorney Representation Type Object for the given attorneyRepresentationTypeId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/attorneyType",
    "method": "getAttorneyTypeUsingKeywordExpression",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Attorney Type Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the attorney type.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/attorneyType/{attorneyTypeId}",
    "method": "getAttorneyTypeObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Attorney Type Object for given Attorney Type Id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/caseClass",
    "method": "getCaseClassByKeyword",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Case Class Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired case class.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/caseClass/{caseClassId}",
    "method": "getCaseClassById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Case Class Object for the given Case Class Id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/caseRelationshipType",
    "method": "getCaseRelationshipTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Case Relationship Type Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the case relationship type.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/caseRelationshipType/{caseRelationshipTypeId}",
    "method": "getCaseRelationshipTypeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Case Relationship Type Object for the given caseRelationshipTypeId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/caseStatus",
    "method": "getCaseStatusByKeyword",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Case Status Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired case status.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/caseStatus/{caseStatusId}",
    "method": "getCaseStatusById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Returns the caseStatus information for the given caseStatusId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/caseStatusGroup",
    "method": "getCaseStatusGroupUsingKeywordExpression",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Case Status Group Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired case status group.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/caseStatusGroup/{caseStatusGroupId}",
    "method": "getCaseStatusGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Returns the caseStatusGroup information for the given caseStatusGroupId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/caseType",
    "method": "getCaseTypesByKeyword",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Case Type Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "Retrieve one or more case types using a keyword expression. Keyword expressions should be constructed according to the rules given above.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/caseType/{caseTypeId}",
    "method": "getCaseType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "CaseType Object for given Case Type Id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/caseTypeGroup",
    "method": "listCaseTypeGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "CaseTypeGroup Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "Retrieve one or more case type groups using a keyword expression. Keyword expressions should be constructed according to the rules given above.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/caseTypeGroup/{caseTypeGroupId}",
    "method": "getCaseTypeGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "CaseType Group for the given CaseType Group Id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/causeOfAction",
    "method": "getCauseOfActionByKeyword",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "CauseOfAction Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired cause of action.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/causeOfAction/{causeOfActionId}",
    "method": "getCauseOfAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "CauseOfAction Object for the given causeOfActionId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/causeOfActionAdditionalData",
    "method": "getCauseOfActionAdditionalData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "CauseOfActionAdditionaData Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired cause of action additional data.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/causeOfActionAdditionalData/{causeOfActionAdditionalDataId}",
    "method": "getCauseOfActionAdditionalData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "CauseOfActionAdditionalData Object for the given causeOfActionAdditionalDataId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/causeOfActionGroup",
    "method": "getCauseOfActionGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "CauseOfActionGroup Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired cause of action group.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/causeOfActionGroup/{causeOfActionGroupId}",
    "method": "getCauseOfActionGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "CauseOfActionGroup Object for the given causeOfActionGroupId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/charge",
    "method": "getChargesUsingKeyword",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Charge Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired charge.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/charge/{chargeId}",
    "method": "getChargeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Charge Object for the given chargeId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/chargeAdditionalData",
    "method": "getAdditionalChargeInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Charge Additional Data Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired charge additional data.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/chargeAdditionalData/{chargeAdditionalDataId}",
    "method": "getChargeAdditionalData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Charge Additional Data Object for the given chargeAdditionalDataId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/chargeDegree",
    "method": "getChargeDegreeUsingKeywordExpression",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "ChargeDegree Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired charge degree.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/chargeDegree/{chargeDegreeId}",
    "method": "getChargeDegreeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "ChargeDegree Object for the given chargeDegreeId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/chargeGroup",
    "method": "getChargeGroupsByKeyword",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Charge Group Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired charge group.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/chargeGroup/{chargeGroupId}",
    "method": "getChargeGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Charge Group Object for the given chargeGroupId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/chargeSeverity",
    "method": "getChargeSeverityByKeyword",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "ChargeSeverity Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired charge severity.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/chargeSeverity/{chargeSeverityId}",
    "method": "getChargeSeverity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "ChargeSeverity Object for the given chargeSeverityId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/court",
    "method": "getCourts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Court Objects.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression that sets forth the criteria concerning the court or courts to be retrieved. Keyword expressions should be constructed according to the rules shown above.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/court/{courtId}",
    "method": "getCourtObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Court Object for given courtId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/court/{courtId}/appealCourts",
    "method": "getAppealCourtsForCourt",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Appeal Court Objects for given courtId.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/court/{courtId}/courtLocations",
    "method": "getCourtLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Associated Court Location for given courtId.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/court/{courtId}/jurisdictionGeo",
    "method": "getJurisdictionGeoObjectsForCourt",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Jurisdiction Geo Objects for given courtId.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/courtLocation",
    "method": "getCourtLocation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Courthouse Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression that sets forth the criteria concerning the court location or court locations to target. Keyword expressions should be constructed according to the rules shown above.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/courtLocation/{courtLocationId}",
    "method": "getCourtLocationObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Courthouse Object for given Court Location Id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/courtLocation/{courtLocationId}/courts",
    "method": "getCourtsByLocation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Associated Court for given Court Location.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/courtServiceStatus",
    "method": "getCourtServiceStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Court Service Status Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired court. Keyword expressions should be constructed according to the rules given above.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/courtServiceStatus/{courtServiceStatusId}",
    "method": "getCourtServiceStatusById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Court Service Status Object for the given courtServiceStatusId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/courtSystem",
    "method": "listCourtSystems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Court System Objects.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression that sets forth the criteria concerning the court system or court systems. Keyword expressions should be constructed according to the rules shown above.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/courtSystem/{courtSystemId}",
    "method": "getCourtSystem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Court System Object for given courtSystemId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/courtType",
    "method": "getCourtTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Court Type Objects.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression that sets forth the criteria concerning the court type or court types. Keyword expressions should be constructed according to the rules shown above.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/courtType/{courtTypeId}",
    "method": "getCourtTypeObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Court Type Object for given courtTypeId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/judgeType",
    "method": "getJudgeTypeObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Judge Type Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the judge type.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/judgeType/{judgeTypeId}",
    "method": "getJudgeTypeObjectById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Judge Type Object for the given judgeTypeId.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/jurisdictionGeo",
    "method": "getJurisdictionGeoForCourt",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Jurisdiction Geo Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired jurisdiction geography. Keyword expressions should be constructed according to the rules given above.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/jurisdictionGeo/{jurisdictionGeoId}",
    "method": "getJurisdictionGeo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Jurisdiction Geo Object for given Jurisdiction Geo Id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/jurisdictionGeo/{jurisdictionGeoId}/courts",
    "method": "associatedCourtForJurisdictionGeo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Associated Court for given Jurisdiction Geo.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Page number.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort field."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Sort order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/partyRole",
    "method": "getPartyRolesByKeyword",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Party Role Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired party role.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/partyRole/{partyRoleId}",
    "method": "getPartyRole",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Party Role Object.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/partyRoleGroup",
    "method": "getPartyRoleGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Party Role Group Object.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The keyword expression targeting the desired party role group.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the results to be retrieved.\n- minimum: 1\n- maximum: 100\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field according to which search results are to be sorted."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Whether search results are to be shown in ascending or descending order."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/masterData/partyRoleGroup/{partyRoleGroupId}",
    "method": "getPartyRoleGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Court Standards API",
    "typeScriptTag": "courtStandardsApi",
    "description": "Party Role Group Object.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normAttorney/{normAttorneyId}",
    "method": "getNormAttorneyById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attorney Analytics API",
    "typeScriptTag": "attorneyAnalyticsApi",
    "description": "Norm Attorney Details.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Norm Attorney"
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normAttorney/{normAttorneyId}/associatedNormJudges",
    "method": "getJudgesAssociatedWithAttorney",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attorney Analytics API",
    "typeScriptTag": "attorneyAnalyticsApi",
    "description": "Judges faced by the Attorney.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normAttorney/{normAttorneyId}/associatedNormLawFirms",
    "method": "getAssociatedLawFirms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attorney Analytics API",
    "typeScriptTag": "attorneyAnalyticsApi",
    "description": "Law Firms the attorney has worked for.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normAttorney/{normAttorneyId}/associatedNormParties",
    "method": "listAssociatedNormParties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attorney Analytics API",
    "typeScriptTag": "attorneyAnalyticsApi",
    "description": "Parties Represented By the Attorney.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normAttorney/{normAttorneyId}/caseCountAnalyticsByOpposingNormAttorney",
    "method": "getCaseCountAnalyticsByOpposingNormAttorneyForNormAttorney",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Opposing Norm Attorney.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normAttorneySearch",
    "method": "searchAttorneyInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attorney Analytics API",
    "typeScriptTag": "attorneyAnalyticsApi",
    "description": "Attorney search.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved.\n- Minimum: 1\n- Maximum: 1000\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normAttorneySearch/{normAttorneySearchId}",
    "method": "getNormAttorneySearchResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attorney Analytics API",
    "typeScriptTag": "attorneyAnalyticsApi",
    "description": "Norm attorney search results for a given normAttorneySearchId.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved.\n- Minimum: 1\n- Maximum: 1000\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normJudge/{normJudgeId}",
    "method": "getNormJudgeDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Judge Analytics API",
    "typeScriptTag": "judgeAnalyticsApi",
    "description": "Norm Judge Details.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Norm Judge"
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normJudge/{normJudgeId}/associatedNormAttorneys",
    "method": "listAssociatedNormAttorneys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Judge Analytics API",
    "typeScriptTag": "judgeAnalyticsApi",
    "description": "Attorneys Associated with the Judge.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normJudge/{normJudgeId}/associatedNormLawFirms",
    "method": "listLawFirmsAssociatedWithJudge",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Judge Analytics API",
    "typeScriptTag": "judgeAnalyticsApi",
    "description": "Law Firms Associated With the Judge.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normJudge/{normJudgeId}/associatedNormParties",
    "method": "getAssociatedNormParties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Judge Analytics API",
    "typeScriptTag": "judgeAnalyticsApi",
    "description": "Parties Associated with the Judge.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normJudgeSearch",
    "method": "searchNormJudges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Judge Analytics API",
    "typeScriptTag": "judgeAnalyticsApi",
    "description": "Judge search.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved.\n- Minimum: 1\n- Maximum: 1000\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normJudgeSearch/{normJudgeSearchId}",
    "method": "getNormJudgeSearchResultsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Judge Analytics API",
    "typeScriptTag": "judgeAnalyticsApi",
    "description": "Norm judge search results for a given normJudgeSearchId.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved.\n- Minimum: 1\n- Maximum: 1000\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normLawFirm/{normLawFirmId}",
    "method": "getNormLawFirmById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Law Firm Analytics API",
    "typeScriptTag": "lawFirmAnalyticsApi",
    "description": "Norm LawFirm Details.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for Norm Law Firm containing Organization sub-field."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normLawFirm/{normLawFirmId}/associatedNormAttorneys",
    "method": "listAssociatedNormAttorneys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Law Firm Analytics API",
    "typeScriptTag": "lawFirmAnalyticsApi",
    "description": "Attorneys working for the Law Firm.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normLawFirm/{normLawFirmId}/associatedNormJudges",
    "method": "getAssociatedNormJudges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Law Firm Analytics API",
    "typeScriptTag": "lawFirmAnalyticsApi",
    "description": "Judges Faced By the Law Firm.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normLawFirm/{normLawFirmId}/associatedNormParties",
    "method": "listAssociatedNormParties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Law Firm Analytics API",
    "typeScriptTag": "lawFirmAnalyticsApi",
    "description": "Parties Represented by the Law Firm.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normLawFirm/{normLawFirmId}/caseCountAnalyticsByOpposingNormLawFirm",
    "method": "getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Opposing Norm Law Firm.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normLawFirmSearch",
    "method": "searchLawFirms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Law Firm Analytics API",
    "typeScriptTag": "lawFirmAnalyticsApi",
    "description": "Law firm search.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved.\n- Minimum: 1\n- Maximum: 1000\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normLawFirmSearch/{normLawFirmSearchId}",
    "method": "getNormLawFirmSearchResultById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Law Firm Analytics API",
    "typeScriptTag": "lawFirmAnalyticsApi",
    "description": "Norm law firm search result for a given normLawFirmSearchId.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved.\n- Minimum: 1\n- Maximum: 1000\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normParty/{normPartyId}",
    "method": "getNormPartyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Party Analytics API",
    "typeScriptTag": "partyAnalyticsApi",
    "description": "Norm Party Details.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Norm Party"
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normParty/{normPartyId}/associatedNormAttorneys",
    "method": "getAssociatedNormAttorneys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Party Analytics API",
    "typeScriptTag": "partyAnalyticsApi",
    "description": "Attorneys that represented the Party.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normParty/{normPartyId}/associatedNormJudges",
    "method": "listJudgesAssociatedWithNormParty",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Party Analytics API",
    "typeScriptTag": "partyAnalyticsApi",
    "description": "Judges Faced By the Party.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normParty/{normPartyId}/associatedNormLawFirms",
    "method": "listAssociatedNormLawFirms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Party Analytics API",
    "typeScriptTag": "partyAnalyticsApi",
    "description": "Law Firms that represented the Party.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normParty/{normPartyId}/caseCountAnalyticsByOpposingNormParty",
    "method": "getCaseCountAnalyticsByOpposingNormPartyForANormParty",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Analytics API",
    "typeScriptTag": "caseAnalyticsApi",
    "description": "Case Count Analytics by Opposing Norm Party.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number.\n- minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normPartySearch",
    "method": "searchNormParties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Party Analytics API",
    "typeScriptTag": "partyAnalyticsApi",
    "description": "Party search.",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The URL encoded query you are searching for.\nThe query can be as simple as a keyword, but supports many additional options and filters.</a>\n"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved.\n- Minimum: 1\n- Maximum: 1000\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/normPartySearch/{normPartySearchId}",
    "method": "getNormPartySearchResultsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Party Analytics API",
    "typeScriptTag": "partyAnalyticsApi",
    "description": "Norm party search results for a given normPartySearchId.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved.\n- Minimum: 1\n- Maximum: 1000\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacer/importCaseByCourtUsingCaseNumber",
    "method": "importPacerCaseByCourtUsingCaseNumberGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER API",
    "typeScriptTag": "pacerApi",
    "description": "Find PACER Case for a requested Case Number and Court.",
    "parameters": [
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": "The PACER username of the PACER account under which the case should be imported."
      },
      {
        "name": "pacerClientCode",
        "schema": "string",
        "required": true,
        "description": "The PACER client code under which the case should be imported."
      },
      {
        "name": "caseNumber",
        "schema": "string",
        "required": true,
        "description": "The case number of the case to be imported."
      },
      {
        "name": "courtId",
        "schema": "string",
        "required": true,
        "description": "The courtId value of the court from which the case is to be imported."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCaseLocator/caseSearch/allCourts",
    "method": "searchAllCourtsCases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER API",
    "typeScriptTag": "pacerApi",
    "description": "PACER Case Locator Search API for All Courts.",
    "parameters": [
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": "The username of the PACER account under which the search is to be performed."
      },
      {
        "name": "pacerClientCode",
        "schema": "string",
        "required": true,
        "description": "The PACER client code under which the search is to be performed."
      },
      {
        "name": "caseNumber",
        "schema": "string",
        "description": "The case number of the target case. You may use the following case-number formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit)."
      },
      {
        "name": "pacerCaseId",
        "schema": "integer",
        "description": "The PACER-assigned identifier of the target case."
      },
      {
        "name": "caseTitle",
        "schema": "string",
        "description": "The title of the target case. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc."
      },
      {
        "name": "caseOffice",
        "schema": "integer",
        "description": "The divisional office in which the case was filed."
      },
      {
        "name": "caseSequenceNumber",
        "schema": "integer",
        "description": "The PACER-assigned sequence number of the target case. Ex 12345"
      },
      {
        "name": "caseYear",
        "schema": "integer",
        "description": "The two- or four-digit year in which the target case was filed."
      },
      {
        "name": "caseTypeArray",
        "schema": "array",
        "description": "The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr"
      },
      {
        "name": "courtRegionIdArray",
        "schema": "array",
        "description": "The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae"
      },
      {
        "name": "caseFiledStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseFiledEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "sortParameterQuery",
        "schema": "string",
        "description": "How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings. \n\n\tScenario: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC"
      },
      {
        "name": "caseStatus",
        "schema": "string",
        "description": "Whether the target case is marked as 'open' or 'closed' within PACER."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCaseLocator/caseSearch/appealCourts",
    "method": "searchAppealCourtsCases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER API",
    "typeScriptTag": "pacerApi",
    "description": "PACER Case Locator Search API for All Courts.",
    "parameters": [
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": "The username of the PACER account under which the search is to be performed."
      },
      {
        "name": "pacerClientCode",
        "schema": "string",
        "required": true,
        "description": "The PACER client code under which the search is to be performed."
      },
      {
        "name": "caseNumber",
        "schema": "string",
        "description": "The case number of the target case. You may use the following case-number formats: \n\n\tyy-nnnnn  \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits)."
      },
      {
        "name": "pacerCaseId",
        "schema": "integer",
        "description": "The PACER-assigned identifier of the target case."
      },
      {
        "name": "caseTitle",
        "schema": "string",
        "description": "The title of the target case. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc."
      },
      {
        "name": "caseOffice",
        "schema": "integer",
        "description": "The divisional office in which the case was filed."
      },
      {
        "name": "caseSequenceNumber",
        "schema": "integer",
        "description": "The PACER-assigned sequence number of the target case. Ex 12345"
      },
      {
        "name": "caseYear",
        "schema": "integer",
        "description": "The two- or four-digit year in which the target case was filed."
      },
      {
        "name": "caseTypeArray",
        "schema": "array",
        "description": "The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr"
      },
      {
        "name": "natureOfSuitsArray",
        "schema": "array",
        "description": "The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases in U.S. Courts of Appeals. \n\n\tScenario: When mulitple nature of suits needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search with the nature of suit 1110 (Insurance) and 1150 (Overpayments & Enforc. of Judgments), My query in the request will look like the example mentioned below. \n\n\tExample: natureOfSuitsArray=1110&natureOfSuitsArray=1150"
      },
      {
        "name": "courtRegionIdArray",
        "schema": "array",
        "description": "The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae"
      },
      {
        "name": "caseFiledStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseFiledEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "sortParameterQuery",
        "schema": "string",
        "description": "How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings. \n\n\tScenario: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC"
      },
      {
        "name": "caseStatus",
        "schema": "string",
        "description": "Whether the target case is marked as 'open' or 'closed' within PACER."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCaseLocator/caseSearch/bankruptcyCourts",
    "method": "searchBankruptcyCases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER API",
    "typeScriptTag": "pacerApi",
    "description": "PACER Case Locator Search API for Bankruptcy Courts.",
    "parameters": [
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": "The username of the PACER account under which the search is to be performed."
      },
      {
        "name": "pacerClientCode",
        "schema": "string",
        "required": true,
        "description": "The PACER client code under which the search is to be performed."
      },
      {
        "name": "caseNumber",
        "schema": "string",
        "description": "The case number of the target case. You may use the following case-number formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit)."
      },
      {
        "name": "pacerCaseId",
        "schema": "integer",
        "description": "The PACER-assigned identifier of the target case."
      },
      {
        "name": "caseTitle",
        "schema": "string",
        "description": "The title of the target case. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc."
      },
      {
        "name": "caseOffice",
        "schema": "integer",
        "description": "The divisional office in which the case was filed."
      },
      {
        "name": "caseSequenceNumber",
        "schema": "integer",
        "description": "The PACER-assigned sequence number of the target case. Ex 12345"
      },
      {
        "name": "caseYear",
        "schema": "integer",
        "description": "The two- or four-digit year in which the target case was filed."
      },
      {
        "name": "caseTypeArray",
        "schema": "array",
        "description": "The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr"
      },
      {
        "name": "federalBankruptcyChapterArray",
        "schema": "array",
        "description": "The chapter of the U.S. Bankruptcy Code under which the target case was filed. Please see Appendix D for a list of valid chapter numbers. \n\n\tScenario: When mulitple Federal Bankruptcy Chapters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search with the Federal Bankruptcy Chapters 7 (Chapter 7) and 11 (Chapter 11), My query in the request will look like the example mentioned below. \n\n\tExample: federalBankruptcyChapterArray=7&federalBankruptcyChapterArray=11"
      },
      {
        "name": "courtRegionIdArray",
        "schema": "array",
        "description": "The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae"
      },
      {
        "name": "caseFiledStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseFiledEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseDischargedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). \n\n\tNote: This parameter is applicable since we only perform this search for Bankruptcy Court type."
      },
      {
        "name": "caseDischargedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). \n\n\tNote: This parameter is applicable since we only perform this search for Bankruptcy Court type."
      },
      {
        "name": "caseDismissedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). \n\n\tNote: This parameter is applicable since we only perform this search for Bankruptcy Court type."
      },
      {
        "name": "caseDismissedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "sortParameterQuery",
        "schema": "string",
        "description": "How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings. \n\n\tScenario: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC"
      },
      {
        "name": "caseStatus",
        "schema": "string",
        "description": "Whether the target case is marked as 'open' or 'closed' within PACER."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCaseLocator/caseSearch/civilCourts",
    "method": "searchCivilCases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER API",
    "typeScriptTag": "pacerApi",
    "description": "PACER Case Locator Search API for All Courts.",
    "parameters": [
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": "The username of the PACER account under which the search is to be performed."
      },
      {
        "name": "pacerClientCode",
        "schema": "string",
        "required": true,
        "description": "The PACER client code under which the search is to be performed."
      },
      {
        "name": "caseNumber",
        "schema": "string",
        "description": "The case number of the target case. You may use the following case-number formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit)."
      },
      {
        "name": "pacerCaseId",
        "schema": "integer",
        "description": "The PACER-assigned identifier of the target case."
      },
      {
        "name": "caseTitle",
        "schema": "string",
        "description": "The title of the target case. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc."
      },
      {
        "name": "caseOffice",
        "schema": "integer",
        "description": "The divisional office in which the case was filed."
      },
      {
        "name": "caseSequenceNumber",
        "schema": "integer",
        "description": "The PACER-assigned sequence number of the target case."
      },
      {
        "name": "caseYear",
        "schema": "integer",
        "description": "The two- or four-digit year in which the target case was filed."
      },
      {
        "name": "caseTypeArray",
        "schema": "array",
        "description": "The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr"
      },
      {
        "name": "natureOfSuitsArray",
        "schema": "array",
        "description": "The PACER-assigned nature of suit classification of the target case. Please see Appendix E for valid nature-of-suit classifications for cases. \n\n\tScenario: When mulitple nature of suits needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search with the nature of suit 110 (Insurance) and 140 (Negotiable Instrument), My query in the request will look like the example mentioned below. \n\n\tExample: natureOfSuitsArray=110&natureOfSuitsArray=140"
      },
      {
        "name": "courtRegionIdArray",
        "schema": "array",
        "description": "The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae"
      },
      {
        "name": "caseFiledStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseFiledEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "sortParameterQuery",
        "schema": "string",
        "description": "How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings. \n\n\tScenario: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC"
      },
      {
        "name": "caseStatus",
        "schema": "string",
        "description": "Whether the target case is marked as 'open' or 'closed' within PACER."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCaseLocator/caseSearch/criminalCourts",
    "method": "searchCriminalCases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER API",
    "typeScriptTag": "pacerApi",
    "description": "PACER Case Locator Search API for All Courts.",
    "parameters": [
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": "The username of the PACER account under which the search is to be performed."
      },
      {
        "name": "pacerClientCode",
        "schema": "string",
        "required": true,
        "description": "The PACER client code under which the search is to be performed."
      },
      {
        "name": "caseNumber",
        "schema": "string",
        "description": "The case number of the target case. You may use the following case-number formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit)."
      },
      {
        "name": "pacerCaseId",
        "schema": "integer",
        "description": "The PACER-assigned identifier of the target case."
      },
      {
        "name": "caseTitle",
        "schema": "string",
        "description": "The title of the target case. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc."
      },
      {
        "name": "caseOffice",
        "schema": "integer",
        "description": "The divisional office in which the case was filed."
      },
      {
        "name": "caseSequenceNumber",
        "schema": "integer",
        "description": "The PACER-assigned sequence number of the target case. Ex 12345"
      },
      {
        "name": "caseYear",
        "schema": "integer",
        "description": "The two- or four-digit year in which the target case was filed."
      },
      {
        "name": "caseTypeArray",
        "schema": "array",
        "description": "The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr"
      },
      {
        "name": "courtRegionIdArray",
        "schema": "array",
        "description": "The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae"
      },
      {
        "name": "caseFiledStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseFiledEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "sortParameterQuery",
        "schema": "string",
        "description": "How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings. \n\n\tScenario: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC"
      },
      {
        "name": "caseStatus",
        "schema": "string",
        "description": "Whether the target case is marked as 'open' or 'closed' within PACER."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCaseLocator/caseSearch/multiDistrictCourts",
    "method": "searchMultiDistrictCourtCases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER API",
    "typeScriptTag": "pacerApi",
    "description": "PACER Case Locator Search API for All Courts.",
    "parameters": [
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": "The username of the PACER account under which the search is to be performed."
      },
      {
        "name": "pacerClientCode",
        "schema": "string",
        "required": true,
        "description": "The PACER client code under which the search is to be performed."
      },
      {
        "name": "caseNumber",
        "schema": "string",
        "description": "The case number of the target case. You may use the following case-number formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit)."
      },
      {
        "name": "jpmlNumber",
        "schema": "integer",
        "description": "Master JPML Case Number."
      },
      {
        "name": "pacerCaseId",
        "schema": "integer",
        "description": "The PACER-assigned identifier of the target case."
      },
      {
        "name": "caseTitle",
        "schema": "string",
        "description": "The title of the target case. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc."
      },
      {
        "name": "caseOffice",
        "schema": "integer",
        "description": "The divisional office in which the case was filed."
      },
      {
        "name": "caseSequenceNumber",
        "schema": "integer",
        "description": "The PACER-assigned sequence number of the target case. Ex 12345"
      },
      {
        "name": "caseYear",
        "schema": "integer",
        "description": "The two- or four-digit year in which the target case was filed."
      },
      {
        "name": "caseTypeArray",
        "schema": "array",
        "description": "The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr"
      },
      {
        "name": "courtRegionIdArray",
        "schema": "array",
        "description": "The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae"
      },
      {
        "name": "caseFiledStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseFiledEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "sortParameterQuery",
        "schema": "string",
        "description": "How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings. \n\n\tScenario: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC"
      },
      {
        "name": "caseStatus",
        "schema": "string",
        "description": "Whether the target case is marked as 'open' or 'closed' within PACER."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCaseLocator/partySearch/allCourts",
    "method": "searchAllCourtsCases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER API",
    "typeScriptTag": "pacerApi",
    "description": "PACER Case Locator Search API for All Courts.",
    "parameters": [
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": "The username of the PACER account under which the search is to be performed."
      },
      {
        "name": "pacerClientCode",
        "schema": "string",
        "required": true,
        "description": "The PACER client code under which the search is to be performed."
      },
      {
        "name": "caseNumber",
        "schema": "string",
        "description": "The case number of the target case. You may use the following case-number formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit)."
      },
      {
        "name": "pacerCaseId",
        "schema": "integer",
        "description": "The PACER-assigned identifier of the target case."
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "The last name (for an individual) or the entity name (for a business entity) of the target party."
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "The first name of the target party."
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": "The middle name of the target party."
      },
      {
        "name": "generation",
        "schema": "string",
        "description": "The suffix (e.g., Jr., III) of the target party's name."
      },
      {
        "name": "partyType",
        "schema": "string",
        "description": "The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court."
      },
      {
        "name": "partyExactNameMatch",
        "schema": "boolean",
        "description": "Specify whether the search string must match the name of the target party exactly."
      },
      {
        "name": "partyRoleArray",
        "schema": "array",
        "description": "The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court."
      },
      {
        "name": "caseTitle",
        "schema": "string",
        "description": "The title of the target case. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc."
      },
      {
        "name": "caseOffice",
        "schema": "integer",
        "description": "The divisional office in which the case was filed."
      },
      {
        "name": "caseSequenceNumber",
        "schema": "integer",
        "description": "The PACER-assigned sequence number of the target case."
      },
      {
        "name": "caseYear",
        "schema": "integer",
        "description": "The two- or four-digit year in which the target case was filed."
      },
      {
        "name": "caseTypeArray",
        "schema": "array",
        "description": "The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr"
      },
      {
        "name": "courtRegionIdArray",
        "schema": "array",
        "description": "The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae"
      },
      {
        "name": "caseYearFrom",
        "schema": "integer",
        "description": "Limit the results of the search to those cases from the year specified or later"
      },
      {
        "name": "caseYearTo",
        "schema": "integer",
        "description": "Limit the results of the search to those cases from the year specified or earlier"
      },
      {
        "name": "caseFiledStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseFiledEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "sortParameterQuery",
        "schema": "string",
        "description": "How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings. \n\n\tScenario 1: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC \n\n\tScenario 2: When you want to sort the response using the case parameters in the party search. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC"
      },
      {
        "name": "caseStatus",
        "schema": "string",
        "description": "Whether the target case is marked as 'open' or 'closed' within PACER."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCaseLocator/partySearch/appealCourts",
    "method": "searchAppealCourtsCases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER API",
    "typeScriptTag": "pacerApi",
    "description": "PACER Case Locator Search API for All Courts.",
    "parameters": [
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": "The username of the PACER account under which the search is to be performed."
      },
      {
        "name": "pacerClientCode",
        "schema": "string",
        "required": true,
        "description": "The PACER client code under which the search is to be performed."
      },
      {
        "name": "caseNumber",
        "schema": "string",
        "description": "The case number of the target case. You may use the following case-number formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit)."
      },
      {
        "name": "pacerCaseId",
        "schema": "integer",
        "description": "The PACER-assigned identifier of the target case."
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "The last name (for an individual) or the entity name (for a business entity) of the target party."
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "The first name of the target party."
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": "The middle name of the target party."
      },
      {
        "name": "generation",
        "schema": "string",
        "description": "The suffix (e.g., Jr., III) of the target party's name."
      },
      {
        "name": "partyType",
        "schema": "string",
        "description": "The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court."
      },
      {
        "name": "partyExactNameMatch",
        "schema": "boolean",
        "description": "Specify whether the search string must match the name of the target party exactly."
      },
      {
        "name": "partyRoleArray",
        "schema": "array",
        "description": "The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court."
      },
      {
        "name": "caseTitle",
        "schema": "string",
        "description": "The title of the target case. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc."
      },
      {
        "name": "caseOffice",
        "schema": "integer",
        "description": "The divisional office in which the case was filed."
      },
      {
        "name": "caseSequenceNumber",
        "schema": "integer",
        "description": "The PACER-assigned sequence number of the target case. Ex 12345"
      },
      {
        "name": "caseYear",
        "schema": "integer",
        "description": "The two- or four-digit year in which the target case was filed."
      },
      {
        "name": "caseTypeArray",
        "schema": "array",
        "description": "The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr"
      },
      {
        "name": "courtRegionIdArray",
        "schema": "array",
        "description": "The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae"
      },
      {
        "name": "caseYearFrom",
        "schema": "integer",
        "description": "Limit the results of the search to those cases from the year specified or later"
      },
      {
        "name": "caseYearTo",
        "schema": "integer",
        "description": "Limit the results of the search to those cases from the year specified or earlier"
      },
      {
        "name": "caseFiledStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseFiledEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "sortParameterQuery",
        "schema": "string",
        "description": "How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings. \n\n\tScenario 1: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC \n\n\tScenario 2: When you want to sort the response using the case parameters in the party search. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC"
      },
      {
        "name": "caseStatus",
        "schema": "string",
        "description": "Whether the target case is marked as 'open' or 'closed' within PACER."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCaseLocator/partySearch/bankruptcyCourts",
    "method": "searchBankruptcyCourts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER API",
    "typeScriptTag": "pacerApi",
    "description": "PACER Case Locator Search API for All Courts.",
    "parameters": [
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": "The username of the PACER account under which the search is to be performed."
      },
      {
        "name": "pacerClientCode",
        "schema": "string",
        "required": true,
        "description": "The PACER client code under which the search is to be performed."
      },
      {
        "name": "caseNumber",
        "schema": "string",
        "description": "The case number of the target case. You may use the following case-number formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit)."
      },
      {
        "name": "pacerCaseId",
        "schema": "integer",
        "description": "The PACER-assigned identifier of the target case."
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "The last name (for an individual) or the entity name (for a business entity) of the target party."
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "The first name of the target party."
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": "The middle name of the target party."
      },
      {
        "name": "generation",
        "schema": "string",
        "description": "The suffix (e.g., Jr., III) of the target party's name."
      },
      {
        "name": "partyType",
        "schema": "string",
        "description": "The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court."
      },
      {
        "name": "partyExactNameMatch",
        "schema": "boolean",
        "description": "Specify whether the search string must match the name of the target party exactly."
      },
      {
        "name": "partyRoleArray",
        "schema": "array",
        "description": "The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court."
      },
      {
        "name": "caseTitle",
        "schema": "string",
        "description": "The title of the target case. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc."
      },
      {
        "name": "caseOffice",
        "schema": "integer",
        "description": "The divisional office in which the case was filed."
      },
      {
        "name": "caseSequenceNumber",
        "schema": "integer",
        "description": "The PACER-assigned sequence number of the target case. Ex 12345"
      },
      {
        "name": "caseYear",
        "schema": "integer",
        "description": "The two- or four-digit year in which the target case was filed."
      },
      {
        "name": "caseTypeArray",
        "schema": "array",
        "description": "The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr"
      },
      {
        "name": "courtRegionIdArray",
        "schema": "array",
        "description": "The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae"
      },
      {
        "name": "caseYearFrom",
        "schema": "integer",
        "description": "Limit the results of the search to those cases from the year specified or later"
      },
      {
        "name": "caseYearTo",
        "schema": "integer",
        "description": "Limit the results of the search to those cases from the year specified or earlier"
      },
      {
        "name": "ssnOrEin",
        "schema": "string",
        "description": "The Social Security number or the federal Employer Identification Number of the target party. Either number can be entered with or without dashes."
      },
      {
        "name": "fourDigitSsn",
        "schema": "string",
        "description": "The last four digits of the Social Security number of the target party.\n\n\tNote: When specified, a last name/entity name must also be specified."
      },
      {
        "name": "caseFiledStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseFiledEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseDischargedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). \n\n\tNote: This parameter is applicable since we only perform this search for Bankruptcy Court type."
      },
      {
        "name": "caseDischargedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as discharged within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). \n\n\tNote: This parameter is applicable since we only perform this search for Bankruptcy Court type."
      },
      {
        "name": "caseDismissedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00). \n\n\tNote: This parameter is applicable since we only perform this search for Bankruptcy Court type."
      },
      {
        "name": "caseDismissedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as dismissed within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "sortParameterQuery",
        "schema": "string",
        "description": "How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings. \n\n\tScenario 1: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC \n\n\tScenario 2: When you want to sort the response using the case parameters in the party search. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC"
      },
      {
        "name": "caseStatus",
        "schema": "string",
        "description": "Whether the target case is marked as 'open' or 'closed' within PACER."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCaseLocator/partySearch/civilCourts",
    "method": "searchCivilCasesInCourts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER API",
    "typeScriptTag": "pacerApi",
    "description": "PACER Case Locator Search API for All Courts.",
    "parameters": [
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": "The username of the PACER account under which the search is to be performed."
      },
      {
        "name": "pacerClientCode",
        "schema": "string",
        "required": true,
        "description": "The PACER client code under which the search is to be performed."
      },
      {
        "name": "caseNumber",
        "schema": "string",
        "description": "The case number of the target case. You may use the following case-number formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit)."
      },
      {
        "name": "pacerCaseId",
        "schema": "integer",
        "description": "The PACER-assigned identifier of the target case."
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "The last name (for an individual) or the entity name (for a business entity) of the target party."
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "The first name of the target party."
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": "The middle name of the target party."
      },
      {
        "name": "generation",
        "schema": "string",
        "description": "The name suffix (e.g., III, MD)."
      },
      {
        "name": "partyType",
        "schema": "string",
        "description": "The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court."
      },
      {
        "name": "partyExactNameMatch",
        "schema": "boolean",
        "description": "Specify whether the search string must match the name of the target party exactly."
      },
      {
        "name": "partyRoleArray",
        "schema": "array",
        "description": "The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court."
      },
      {
        "name": "caseTitle",
        "schema": "string",
        "description": "The title of the target case. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc."
      },
      {
        "name": "caseOffice",
        "schema": "integer",
        "description": "The divisional office in which the case was filed."
      },
      {
        "name": "caseSequenceNumber",
        "schema": "integer",
        "description": "The PACER-assigned sequence number of the target case. Ex 12345"
      },
      {
        "name": "caseYear",
        "schema": "integer",
        "description": "The two- or four-digit year in which the target case was filed."
      },
      {
        "name": "caseTypeArray",
        "schema": "array",
        "description": "The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr"
      },
      {
        "name": "courtRegionIdArray",
        "schema": "array",
        "description": "The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae"
      },
      {
        "name": "caseYearFrom",
        "schema": "integer",
        "description": "Limit the results of the search to those cases from the year specified or later"
      },
      {
        "name": "caseYearTo",
        "schema": "integer",
        "description": "Limit the results of the search to those cases from the year specified or earlier"
      },
      {
        "name": "caseFiledStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseFiledEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "sortParameterQuery",
        "schema": "string",
        "description": "How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings. \n\n\tScenario 1: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC \n\n\tScenario 2: When you want to sort the response using the case parameters in the party search. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC"
      },
      {
        "name": "caseStatus",
        "schema": "string",
        "description": "Whether the target case is marked as 'open' or 'closed' within PACER."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCaseLocator/partySearch/criminalCourts",
    "method": "searchCriminalCases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER API",
    "typeScriptTag": "pacerApi",
    "description": "PACER Case Locator Search API for All Courts.",
    "parameters": [
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": "The username of the PACER account under which the search is to be performed."
      },
      {
        "name": "pacerClientCode",
        "schema": "string",
        "required": true,
        "description": "The PACER client code under which the search is to be performed."
      },
      {
        "name": "caseNumber",
        "schema": "string",
        "description": "The case number of the target case. You may use the following case-number formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit)."
      },
      {
        "name": "pacerCaseId",
        "schema": "integer",
        "description": "The PACER-assigned identifier of the target case."
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "The last name (for an individual) or the entity name (for a business entity) of the target party."
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "The first name of the target party."
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": "The middle name of the target party."
      },
      {
        "name": "generation",
        "schema": "string",
        "description": "The suffix (e.g., Jr., III) of the target party's name."
      },
      {
        "name": "partyType",
        "schema": "string",
        "description": "The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court."
      },
      {
        "name": "partyExactNameMatch",
        "schema": "boolean",
        "description": "Specify whether the search string must match the name of the target party exactly."
      },
      {
        "name": "partyRoleArray",
        "schema": "array",
        "description": "The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court."
      },
      {
        "name": "caseTitle",
        "schema": "string",
        "description": "The title of the target case. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc."
      },
      {
        "name": "caseOffice",
        "schema": "integer",
        "description": "The divisional office in which the case was filed."
      },
      {
        "name": "caseSequenceNumber",
        "schema": "integer",
        "description": "The PACER-assigned sequence number of the target case. Ex 12345"
      },
      {
        "name": "caseYear",
        "schema": "integer",
        "description": "The two- or four-digit year in which the target case was filed."
      },
      {
        "name": "caseTypeArray",
        "schema": "array",
        "description": "The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr"
      },
      {
        "name": "courtRegionIdArray",
        "schema": "array",
        "description": "The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae"
      },
      {
        "name": "caseYearFrom",
        "schema": "integer",
        "description": "Limit the results of the search to those cases from the year specified or later"
      },
      {
        "name": "caseYearTo",
        "schema": "integer",
        "description": "Limit the results of the search to those cases from the year specified or earlier"
      },
      {
        "name": "caseFiledStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseFiledEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "sortParameterQuery",
        "schema": "string",
        "description": "How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings. \n\n\tScenario 1: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC \n\n\tScenario 2: When you want to sort the response using the case parameters in the party search. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC"
      },
      {
        "name": "caseStatus",
        "schema": "string",
        "description": "Whether the target case is marked as 'open' or 'closed' within PACER."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCaseLocator/partySearch/multiDistrictCourts",
    "method": "searchMultiDistrictCourtCases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER API",
    "typeScriptTag": "pacerApi",
    "description": "PACER Case Locator Search API for All Courts.",
    "parameters": [
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": "The username of the PACER account under which the search is to be performed."
      },
      {
        "name": "pacerClientCode",
        "schema": "string",
        "required": true,
        "description": "The PACER client code under which the search is to be performed."
      },
      {
        "name": "caseNumber",
        "schema": "string",
        "description": "The case number of the target case. You may use the following case-number formats: \n\n\tyy-nnnnn \n\n\tyy-tp-nnnnn \n\n\tyy tp nnnnn \n\n\tyytpnnnnn \n\n\to:yy-nnnnn \n\n\to:yy-tp-nnnnn \n\n\to:yy tp nnnnn \n\n\to:yytpnnnnn \n\nwhere: \n\nyy  case year (may be 2 or 4 digits) \n\nnnnnn  case number (up to 5 digits) \n\ntp  case type (up to 2 characters) \n\no  office where the case was filed (1 digit)."
      },
      {
        "name": "jpmlNumber",
        "schema": "integer",
        "description": "Master JPML Case Number."
      },
      {
        "name": "pacerCaseId",
        "schema": "integer",
        "description": "The PACER-assigned identifier of the target case."
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "The last name (for an individual) or the entity name (for a business entity) of the target party."
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "The first name of the target party."
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": "The middle name of the target party."
      },
      {
        "name": "generation",
        "schema": "string",
        "description": "The suffix (e.g., Jr., III) of the target party's name."
      },
      {
        "name": "partyType",
        "schema": "string",
        "description": "The court-assigned party type for a party involved in a case. Party type codes are created and assigned by individual courts, and as such, their meanings can vary from court to court."
      },
      {
        "name": "partyExactNameMatch",
        "schema": "boolean",
        "description": "Specify whether the search string must match the name of the target party exactly."
      },
      {
        "name": "partyRoleArray",
        "schema": "array",
        "description": "The court-assigned role for a party to a case. Party role codes are created and assigned by individual courts, and as such, their meanings can vary from court to court."
      },
      {
        "name": "caseTitle",
        "schema": "string",
        "description": "The title of the target case. \n\n\tExamples: \n\n\tA search for case title john doe v will result in all cases with the case title John Doe v. \n\n\tA search for case title Acme, Inc. will result in all case titles starting with Acme, Inc."
      },
      {
        "name": "caseOffice",
        "schema": "integer",
        "description": "The divisional office in which the case was filed."
      },
      {
        "name": "caseSequenceNumber",
        "schema": "integer",
        "description": "The PACER-assigned sequence number of the target case. Ex 12345"
      },
      {
        "name": "caseYear",
        "schema": "integer",
        "description": "The two- or four-digit year in which the target case was filed."
      },
      {
        "name": "caseTypeArray",
        "schema": "array",
        "description": "The PACER-assigned case type of the target case. Please see Appendix A for valid case-type values. \n\n\tScenario: When mulitple case types needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search only with the case type civil(cv) and criminal(cr), My query in the request will look like the example mentioned below. \n\n\tExample: caseTypeArray=cv&caseTypeArray=cr"
      },
      {
        "name": "courtRegionIdArray",
        "schema": "array",
        "description": "The PACER-assigned court region in which the target case was filed. Please see Appendix B for valid court-region values. \n\n\tScenario: When mulitple court region ids needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to search in the court regions California Central (cac) and California Eastern (cae), My query in the request will look like the example mentioned below. \n\n\tExample: courtRegionIdArray=cac&courtRegionIdArray=cae"
      },
      {
        "name": "caseYearFrom",
        "schema": "integer",
        "description": "Limit the results of the search to those cases from the year specified or later"
      },
      {
        "name": "caseYearTo",
        "schema": "integer",
        "description": "Limit the results of the search to those cases from the year specified or earlier"
      },
      {
        "name": "caseFiledStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseFiledEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was filed. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedStartDate",
        "schema": "string",
        "description": "The date on which or after which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "caseTerminatedEndDate",
        "schema": "string",
        "description": "The date on which or before which the target case was marked as terminated within PACER. The date format must be YYYY-MM-DDTHH:MM:SS+ZZ:zz, (e.g., 2017-12-20T12:54:24+00:00)."
      },
      {
        "name": "sortParameterQuery",
        "schema": "string",
        "description": "How search results from PACER are to be sorted. Please see Appendix C for valid sort-related settings. \n\n\tScenario 1: When mulitple sort paramters needs to be requested. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of courtId and caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtId,ASC&caseId,ASC \n\n\tScenario 2: When you want to sort the response using the case parameters in the party search. \n\n\tImagine for a given case number 12-1234 I would like to sort the results in the Ascending order of caseOffice and descending order of caseId, My query in the request will look like the example mentioned below. \n\n\tExample: sortParameterQuery=courtCase.caseOffice,ASC&caseid,DESC"
      },
      {
        "name": "caseStatus",
        "schema": "string",
        "description": "Whether the target case is marked as 'open' or 'closed' within PACER."
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCredential",
    "method": "listPacerCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER Credential API",
    "typeScriptTag": "pacerCredentialApi",
    "description": "Get Pacer Credential List.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number of the PACER credentials to be retrieved.<br>\n  - Minimum: 1\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCredential",
    "method": "registerPacerCredential",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PACER Credential API",
    "typeScriptTag": "pacerCredentialApi",
    "description": "Add Pacer Credential.",
    "parameters": [
      {
        "name": "defaultPacerClientCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pacerUserId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success object contains its message related to the API request."
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "429",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCredential/{pacerUserId}",
    "method": "removeForUserId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PACER Credential API",
    "typeScriptTag": "pacerCredentialApi",
    "description": "Remove Pacer credential for a specific Pacer User Id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success object contains its message related to the API request."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/pacerCredential/{pacerUserId}",
    "method": "getPacerCredential",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PACER Credential API",
    "typeScriptTag": "pacerCredentialApi",
    "description": "Get Pacer Credential for a requested pacer User Id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/party/{partyId}",
    "method": "getPartyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets details for a requested Party ID.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  },
  {
    "url": "/party/{partyId}/associatedAttorneys",
    "method": "getAssociatedAttorneyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Case Docket API",
    "typeScriptTag": "caseDocketApi",
    "description": "Gets Associated Attorney details for a requested Party ID.",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "Query parameter specifying the page number of the search results to be retrieved."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "404",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "451",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      },
      {
        "statusCode": "500",
        "description": "Exception object contains specific error code and its message related to the API request validation error or error occurred during API request processing."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="UniCourt Enterprise APIs"
      apiBaseUrl="https://enterpriseapi.unicourt.com/"
      apiVersion="1.0.0"
      endpoints={155}
      sdkMethods={615}
      schemas={220}
      parameters={546}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unicourt/openapi.yaml"
    />
  );
}
  