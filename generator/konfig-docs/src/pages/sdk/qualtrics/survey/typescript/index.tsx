import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function QualtricsSurveyTypeScriptSdk() {
  return (
    <Sdk
      sdkName="qualtrics-survey-typescript-sdk"
      metaDescription="Know what your customers and employees need, when they need it, and deliver it every time with powerful, AI driven Experience Management (XM) software."
      company="Qualtrics"
      serviceName="Survey"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/qualtrics/survey/logo.svg"
      clientNameCamelCase="qualtrics"
      homepage="api.qualtrics.com"
      lastUpdated={new Date("2024-02-16T00:45:04.983Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/qualtrics/survey/favicon.png"
      contactUrl="https://www.qualtrics.com/support/"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/qualtrics/survey/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/survey-definitions",
    "method": "createDefinition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Create Survey",
    "parameters": [],
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/survey-definitions/{surveyId}",
    "method": "removeDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Delete Survey",
    "parameters": [
      {
        "name": "surveyId",
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
    "url": "/survey-definitions/{surveyId}",
    "method": "getDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Get Survey",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/survey-definitions/{surveyId}/metadata",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Get Survey Metadata",
    "parameters": [
      {
        "name": "surveyId",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/survey-definitions/{surveyId}/metadata",
    "method": "updateMetadata",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Surveys",
    "typeScriptTag": "surveys",
    "description": "Update Metadata",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "SurveyName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SurveyDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SurveyStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SurveyStartDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SurveyExpirationDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/survey-definitions/{surveyId}/blocks",
    "method": "createNewBlock",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Survey Blocks",
    "typeScriptTag": "surveyBlocks",
    "description": "Create Block",
    "parameters": [
      {
        "name": "surveyId",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/survey-definitions/{surveyId}/blocks/{blockId}",
    "method": "removeBlock",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Survey Blocks",
    "typeScriptTag": "surveyBlocks",
    "description": "Delete Block",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "blockId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
    "url": "/survey-definitions/{surveyId}/blocks/{blockId}",
    "method": "getDefinitionBlock",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey Blocks",
    "typeScriptTag": "surveyBlocks",
    "description": "Get Block",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "blockId",
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
    "url": "/survey-definitions/{surveyId}/blocks/{blockId}",
    "method": "updateDefinitionBlock",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Survey Blocks",
    "typeScriptTag": "surveyBlocks",
    "description": "Update Block",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "blockId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
    "url": "/survey-definitions/{surveyId}/questions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey Questions",
    "typeScriptTag": "surveyQuestions",
    "description": "Get Questions",
    "parameters": [
      {
        "name": "surveyId",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/survey-definitions/{surveyId}/questions",
    "method": "createNewQuestion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Survey Questions",
    "typeScriptTag": "surveyQuestions",
    "description": "Create Question",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "blockId",
        "schema": "string",
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
    "url": "/survey-definitions/{surveyId}/questions/{questionId}",
    "method": "removeQuestion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Survey Questions",
    "typeScriptTag": "surveyQuestions",
    "description": "Delete Question",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "questionId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
    "url": "/survey-definitions/{surveyId}/questions/{questionId}",
    "method": "getDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey Questions",
    "typeScriptTag": "surveyQuestions",
    "description": "Get Question",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "questionId",
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
    "url": "/survey-definitions/{surveyId}/questions/{questionId}",
    "method": "updateDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Survey Questions",
    "typeScriptTag": "surveyQuestions",
    "description": "Update Question",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "questionId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
    "url": "/survey-definitions/{surveyId}/flow",
    "method": "getFlowDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey Flows",
    "typeScriptTag": "surveyFlows",
    "description": "Get Flow",
    "parameters": [
      {
        "name": "surveyId",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/survey-definitions/{surveyId}/flow",
    "method": "updateDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Survey Flows",
    "typeScriptTag": "surveyFlows",
    "description": "Update Flow",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "FlowID",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "Type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "Flow",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "Properties",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/survey-definitions/{surveyId}/flow/{flowId}",
    "method": "updateFlowElementDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Survey Flows",
    "typeScriptTag": "surveyFlows",
    "description": "Updates Flow Element Definition",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "flowId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
    "url": "/survey-definitions/{surveyId}/options",
    "method": "getOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey Options",
    "typeScriptTag": "surveyOptions",
    "description": "Get Options",
    "parameters": [
      {
        "name": "surveyId",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/survey-definitions/{surveyId}/options",
    "method": "updateOptions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Survey Options",
    "typeScriptTag": "surveyOptions",
    "description": "Update Options",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "AnonymizeResponse",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Autofocus",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "Autoadvance",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "AutoadvancePages",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "AvailableLanguages",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "BackButton",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "BallotBoxStuffingPrevention",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "BallotBoxStuffingPreventionBehavior",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BallotBoxStuffingPreventionMessage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BallotBoxStuffingPreventionMessageLibrary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BallotBoxStuffingPreventionURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CollectGeoLocation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomStyles",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomLanguages",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "EmailThankYou",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EOSMessage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EOSRedirectURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ExternalCSS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "headerMid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Header",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "footerMid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Footer",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "InactiveSurvey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "InactiveMessage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "InactiveMessageLibrary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "NoIndex",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "nextButtonMid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "NextButton",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "PageTransition",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PartialData",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "PartialDataCloseAfter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PasswordProtection",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "previousButtonMid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PreviousButton",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ProgressBarDisplay",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "QuestionsPerPage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RecaptchaV3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RefererCheck",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RefererURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ResponseSummary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SaveAndContinue",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "SecureResponseFiles",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "Skin",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "SurveyExpiration",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "SurveyExpirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SurveyMetaDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SurveyLanguage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SurveyName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SurveyProtection",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "SurveyStartDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SurveyTermination",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "SurveyTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ThankYouEmailMessage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ThankYouEmailMessageLibrary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ValidateMessage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ValidationMessage",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ValidationMessageLibrary",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/survey-definitions/{surveyId}/versions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey Versions",
    "typeScriptTag": "surveyVersions",
    "description": "List Survey Versions",
    "parameters": [
      {
        "name": "surveyId",
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
    "url": "/survey-definitions/{surveyId}/versions",
    "method": "createNewVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Survey Versions",
    "typeScriptTag": "surveyVersions",
    "description": "Create Survey Version",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "Description",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "Published",
        "schema": "boolean",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/survey-definitions/{surveyId}/versions/{versionId}",
    "method": "getDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey Versions",
    "typeScriptTag": "surveyVersions",
    "description": "Get Survey Version",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
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
    "url": "/survey-definitions/{surveyId}/quotas",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey Quotas",
    "typeScriptTag": "surveyQuotas",
    "description": "Get Quotas for Survey",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "skipToken",
        "schema": "string",
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
    "url": "/survey-definitions/{surveyId}/quotas",
    "method": "createNewQuota",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Survey Quotas",
    "typeScriptTag": "surveyQuotas",
    "description": "Create Quota",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "quotaGroupId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "Occurrences",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "Count",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CountForUndo",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Logic",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "LogicType",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "QuotaAction",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ActionElement",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "ActionInfo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ActionLogic",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ID",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "QuotaRealm",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "QuotaSchedule",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "EndSurveyOptions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "WebServiceOptions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "CrossLogicDef",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "PerformActionOnUser",
        "schema": "boolean",
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
    "url": "/survey-definitions/{surveyId}/quotas/{quotaId}",
    "method": "deleteQuota",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Survey Quotas",
    "typeScriptTag": "surveyQuotas",
    "description": "Delete Quota",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "quotaId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
    "url": "/survey-definitions/{surveyId}/quotas/{quotaId}",
    "method": "getDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey Quotas",
    "typeScriptTag": "surveyQuotas",
    "description": "Get Quota for Survey",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "quotaId",
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
    "url": "/survey-definitions/{surveyId}/quotas/{quotaId}",
    "method": "updateDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Survey Quotas",
    "typeScriptTag": "surveyQuotas",
    "description": "Update Quota in the Given Survey",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "quotaId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "Occurrences",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "Count",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CountForUndo",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Logic",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "LogicType",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "QuotaAction",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ActionElement",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "ActionInfo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ActionLogic",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ID",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "QuotaRealm",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "QuotaSchedule",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "EndSurveyOptions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "WebServiceOptions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "CrossLogicDef",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "PerformActionOnUser",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
    "url": "/survey-definitions/{surveyId}/quotagroups",
    "method": "listQuotaGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey Quotas",
    "typeScriptTag": "surveyQuotas",
    "description": "Get Quota Groups for Survey",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "skipToken",
        "schema": "string",
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
    "url": "/survey-definitions/{surveyId}/quotagroups",
    "method": "createQuotaGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Survey Quotas",
    "typeScriptTag": "surveyQuotas",
    "description": "Create Quota Group",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ID",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "Id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MultipleMatch",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Public",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "Quotas",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Selected",
        "schema": "boolean",
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
    "url": "/survey-definitions/{surveyId}/quotagroups/{quotaGroupId}",
    "method": "removeQuotaGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Survey Quotas",
    "typeScriptTag": "surveyQuotas",
    "description": "Delete Quota Group",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "quotaGroupId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
    "url": "/survey-definitions/{surveyId}/quotagroups/{quotaGroupId}",
    "method": "getQuotaGroupDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey Quotas",
    "typeScriptTag": "surveyQuotas",
    "description": "Get Quota Group for Survey",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "quotaGroupId",
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
    "url": "/survey-definitions/{surveyId}/quotagroups/{quotaGroupId}",
    "method": "updateQuotaGroupDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Survey Quotas",
    "typeScriptTag": "surveyQuotas",
    "description": "Update Quota Group",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "quotaGroupId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ID",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "Id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MultipleMatch",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Public",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "Quotas",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Selected",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
    "url": "/surveys/{surveyId}/languages",
    "method": "getAvailableLanguages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey Languages",
    "typeScriptTag": "surveyLanguages",
    "description": "Get Languages",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the survey."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/surveys/{surveyId}/languages",
    "method": "updateEnabledLanguages",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Survey Languages",
    "typeScriptTag": "surveyLanguages",
    "description": "Update Languages",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "AvailableLanguages",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/surveys/{surveyId}/translations/{languageCode}",
    "method": "getBySurveyIdAndLanguageCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Survey Translations",
    "typeScriptTag": "surveyTranslations",
    "description": "Get Survey Translations JSON",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "languageCode",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/surveys/{surveyId}/translations/{languageCode}",
    "method": "updateTranslations",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Survey Translations",
    "typeScriptTag": "surveyTranslations",
    "description": "Update Survey Translations",
    "parameters": [
      {
        "name": "surveyId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "languageCode",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was successful and there's no additional result to return"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Qualtrics Survey API"
      apiBaseUrl="https://yul1.qualtrics.com/API/v3"
      apiVersion="3.0.0"
      endpoints={18}
      sdkMethods={36}
      schemas={220}
      parameters={177}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/qualtrics/survey/openapi.yaml"
    />
  );
}
  