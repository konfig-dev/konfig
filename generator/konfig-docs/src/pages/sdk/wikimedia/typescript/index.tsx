import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function WikimediaTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="wikimedia-typescript-sdk"
      metaDescription="Wikimedia is a global movement whose mission is to bring free educational content to the world."
      company="Wikimedia"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wikimedia/logo.png"
      clientNameCamelCase="wikimedia"
      homepage="wikimedia.org"
      lastUpdated={new Date("2024-03-13T02:25:22.175Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wikimedia/favicon.ico"
      contactUrl="http://mediawiki.org/wiki/REST_API"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wikimedia/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["media"]}
      methods={[
  {
    "url": "/feed/availability",
    "method": "getByWikiDomain",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feed content availability",
    "typeScriptTag": "feedContentAvailability",
    "description": "Gets availability of featured feed content for the apps by wiki domain.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/media/math/check/{type}",
    "method": "checkFormula",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Math",
    "typeScriptTag": "math",
    "description": "Check and normalize a TeX formula.",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The input type of the given formula; can be tex or inline-tex",
        "example": "TYPE"
      },
      {
        "name": "q",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Q"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the checked formula"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/media/math/formula/{hash}",
    "method": "getFormulaByHash",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Math",
    "typeScriptTag": "math",
    "description": "Get a previously-stored formula",
    "parameters": [
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "The hash string of the previous POST data",
        "example": "HASH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the checked formula"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/media/math/render/{format}/{hash}",
    "method": "renderFormulaByHash",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Math",
    "typeScriptTag": "math",
    "description": "Get rendered formula in the given format.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "required": true,
        "description": "The output format; can be svg or mml",
        "example": "FORMAT"
      },
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "The hash string of the previous POST data",
        "example": "HASH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The rendered formula"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/bytes-difference/absolute/aggregate/{project}/{editor-type}/{page-type}/{granularity}/{start}/{end}",
    "method": "getAbsoluteAggregateByProjectAndDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bytes difference data",
    "typeScriptTag": "bytesDifferenceData",
    "description": "Get the sum of absolute value of text bytes difference between current edit and\nprevious one.\n",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff. For projects like commons without language codes, use commons.wikimedia. For\nprojects like www.mediawiki.org, you can use that full string, or just use mediawiki\nor mediawiki.org. If you're interested in the aggregation of all projects, use\nall-projects.\n",
        "example": "PROJECT"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging to\nthe bot group but having bot-like names) or user (registered account not in bot group\nnor having bot-like name). If you are interested in edits regardless of their\neditor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "pageType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by page-type, use one of content (edits on pages in content\nnamespaces) or non-content (edits on pages in non-content namespaces). If you are\ninterested in edits regardless of their page-type, use all-page-types.\n",
        "example": "PAGE-TYPE"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "Time unit for the response data. As of today, supported values are daily and monthly\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The date of the first day to include, in YYYYMMDD format",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The date of the last day to include, in YYYYMMDD format",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/bytes-difference/absolute/per-page/{project}/{page-title}/{editor-type}/{granularity}/{start}/{end}",
    "method": "getAbsolutePerPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bytes difference data",
    "typeScriptTag": "bytesDifferenceData",
    "description": "Get the sum of absolute text bytes difference per page.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff. For projects like commons without language codes, use commons.wikimedia. For\nprojects like www.mediawiki.org, you can use that full string, or just use mediawiki\nor mediawiki.org.\n",
        "example": "PROJECT"
      },
      {
        "name": "pageTitle",
        "schema": "string",
        "required": true,
        "description": "The page-title to request absolute bytes-difference for. Should be prefixed with the\npage canonical namespace.\n",
        "example": "PAGE-TITLE"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging to\nthe bot group but having bot-like names) or user (registered account not in bot group\nnor having bot-like name). If you are interested in edits regardless of their\neditor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "Time unit for the response data. As of today, supported values are daily and monthly\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The date of the first day to include, in YYYYMMDD format",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The date of the last day to include, in YYYYMMDD format",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/bytes-difference/net/aggregate/{project}/{editor-type}/{page-type}/{granularity}/{start}/{end}",
    "method": "getNetAggregateByProjectAndDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bytes difference data",
    "typeScriptTag": "bytesDifferenceData",
    "description": "Get the sum of net text bytes difference between current edit and previous one.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff. For projects like commons without language codes, use commons.wikimedia. For\nprojects like www.mediawiki.org, you can use that full string, or just use mediawiki\nor mediawiki.org. If you're interested in the aggregation of all projects, use\nall-projects.\n",
        "example": "PROJECT"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging to\nthe bot group but having bot-like names) or user (registered account not in bot group\nnor having bot-like name). If you are interested in edits regardless of their\neditor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "pageType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by page-type, use one of content (edits on pages in content\nnamespaces) or non-content (edits on pages in non-content namespaces). If you are\ninterested in edits regardless of their page-type, use all-page-types.\n",
        "example": "PAGE-TYPE"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "Time unit for the response data. As of today, supported values are daily and monthly\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The date of the first day to include, in YYYYMMDD format",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The date of the last day to include, in YYYYMMDD format",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/bytes-difference/net/per-page/{project}/{page-title}/{editor-type}/{granularity}/{start}/{end}",
    "method": "getSumNetTextBytesDifferencePerPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bytes difference data",
    "typeScriptTag": "bytesDifferenceData",
    "description": "Get the sum of net text bytes difference per page.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff. For projects like commons without language codes, use commons.wikimedia. For\nprojects like www.mediawiki.org, you can use that full string, or just use mediawiki\nor mediawiki.org.\n",
        "example": "PROJECT"
      },
      {
        "name": "pageTitle",
        "schema": "string",
        "required": true,
        "description": "The page-title to request net bytes-difference for. Should be prefixed with the\npage canonical namespace.\n",
        "example": "PAGE-TITLE"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging to\nthe bot group but having bot-like names) or user (registered account not in bot group\nnor having bot-like name). If you are interested in edits regardless of their\neditor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "Time unit for the response data. As of today, supported values are daily and monthly\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The date of the first day to include, in YYYYMMDD format",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The date of the last day to include, in YYYYMMDD format",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/edited-pages/aggregate/{project}/{editor-type}/{page-type}/{activity-level}/{granularity}/{start}/{end}",
    "method": "getAggregateByProjectAndDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Edited pages data",
    "typeScriptTag": "editedPagesData",
    "description": "Get edited-pages counts for a project.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff.  For projects like commons without language codes, use commons.wikimedia.\nFor projects like www.mediawiki.org, you can use that full string, or just use\nmediawiki or mediawiki.org.\n",
        "example": "PROJECT"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging to\nthe bot group but having bot-like names) or user (registered account not in bot group\nnor having bot-like name). If you are interested in edits regardless of their\neditor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "pageType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by page-type, use one of content (edited-pages in content\nnamespaces) or non-content (edited-pages in non-content namespaces). If you are\ninterested in edited-pages regardless of their page-type, use all-page-types.\n",
        "example": "PAGE-TYPE"
      },
      {
        "name": "activityLevel",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits,\n25..99-edits or 100..-edits. If you are interested in edited-pages regardless\nof their activity level, use all-activity-levels.\n",
        "example": "ACTIVITY-LEVEL"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "The time unit for the response data. As of today, supported values are\ndaily and monthly.\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The date of the first day to include, in YYYYMMDD format",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The date of the last day to include, in YYYYMMDD format",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/edited-pages/new/{project}/{editor-type}/{page-type}/{granularity}/{start}/{end}",
    "method": "getNewPagesCountsForProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Edited pages data",
    "typeScriptTag": "editedPagesData",
    "description": "Get new pages counts for a project.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff.  For projects like commons without language codes, use commons.wikimedia.\nFor projects like www.mediawiki.org, you can use that full string, or just use\nmediawiki or mediawiki.org. If you're interested in the aggregation of all\nprojects, use all-projects.\n",
        "example": "PROJECT"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging\nto the bot group but having bot-like names) or user (registered account not in bot\ngroup nor having bot-like name). If you are interested in edits regardless of\ntheir editor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "pageType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by page-type, use one of content (new pages in content\nnamespaces) or non-content (new pages in non-content namespaces). If you are\ninterested in new-articles regardless of their page-type, use all-page-types.\n",
        "example": "PAGE-TYPE"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "The time unit for the response data. As of today, supported values are\ndaily and monthly.\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The date of the first day to include, in YYYYMMDD format",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The date of the last day to include, in YYYYMMDD format",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/edited-pages/top-by-absolute-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day}",
    "method": "getTopByAbsoluteBytesDifference",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Edited pages data",
    "typeScriptTag": "editedPagesData",
    "description": "Get top 100 edited-pages by absolute bytes-difference.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff. For projects like commons without language codes, use commons.wikimedia. For\nprojects like www.mediawiki.org, you can use that full string, or just use mediawiki\nor mediawiki.org.\n",
        "example": "PROJECT"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging to\nthe bot group but having bot-like names) or user (registered account not in bot group\nnor having bot-like name). If you are interested in edits regardless of their\neditor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "pageType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by page-type, use one of content (edits on pages in content\nnamespaces) or non-content (edits on pages in non-content namespaces). If you are\ninterested in edits regardless of their page-type, use all-page-types.\n",
        "example": "PAGE-TYPE"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "The year of the date for which to retrieve top edited-pages, in YYYY format.",
        "example": "YEAR"
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "The month of the date for which to retrieve top edited-pages, in MM format. If you want to get the top edited-pages of a whole month, the day parameter should be all-days.",
        "example": "MONTH"
      },
      {
        "name": "day",
        "schema": "string",
        "required": true,
        "description": "The day of the date for which to retrieve top edited-pages, in DD format, or all-days for a monthly value.",
        "example": "DAY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/edited-pages/top-by-edits/{project}/{editor-type}/{page-type}/{year}/{month}/{day}",
    "method": "getTopByEditsCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Edited pages data",
    "typeScriptTag": "editedPagesData",
    "description": "Get top 100 edited-pages by edits count.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff. For projects like commons without language codes, use commons.wikimedia. For\nprojects like www.mediawiki.org, you can use that full string, or just use mediawiki\nor mediawiki.org.\n",
        "example": "PROJECT"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging to\nthe bot group but having bot-like names) or user (registered account not in bot group\nnor having bot-like name). If you are interested in edits regardless of their\neditor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "pageType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by page-type, use one of content (edits on pages in content\nnamespaces) or non-content (edits on pages in non-content namespaces). If you are\ninterested in edits regardless of their page-type, use all-page-types.\n",
        "example": "PAGE-TYPE"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "The year of the date for which to retrieve top edited-pages, in YYYY format.",
        "example": "YEAR"
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "The month of the date for which to retrieve top edited-pages, in MM format. If you want to get the top edited-pages of a whole month, the day parameter should be all-days.",
        "example": "MONTH"
      },
      {
        "name": "day",
        "schema": "string",
        "required": true,
        "description": "The day of the date for which to retrieve top edited-pages, in DD format, or all-days for a monthly value.",
        "example": "DAY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/edited-pages/top-by-net-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day}",
    "method": "getTopByNetBytesDifference",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Edited pages data",
    "typeScriptTag": "editedPagesData",
    "description": "Get top 100 edited-pages by net bytes-difference.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff. For projects like commons without language codes, use commons.wikimedia. For\nprojects like www.mediawiki.org, you can use that full string, or just use mediawiki\nor mediawiki.org.\n",
        "example": "PROJECT"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging to\nthe bot group but having bot-like names) or user (registered account not in bot group\nnor having bot-like name). If you are interested in edits regardless of their\neditor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "pageType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by page-type, use one of content (edits on pages in content\nnamespaces) or non-content (edits on pages in non-content namespaces). If you are\ninterested in edits regardless of their page-type, use all-page-types.\n",
        "example": "PAGE-TYPE"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "The year of the date for which to retrieve top edited-pages, in YYYY format.",
        "example": "YEAR"
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "The month of the date for which to retrieve top edited-pages, in MM format. If you want to get the top edited-pages of a whole month, the day parameter should be all-days.",
        "example": "MONTH"
      },
      {
        "name": "day",
        "schema": "string",
        "required": true,
        "description": "The day of the date for which to retrieve top edited-pages, in DD format, or all-days for a monthly value.",
        "example": "DAY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/editors/aggregate/{project}/{editor-type}/{page-type}/{activity-level}/{granularity}/{start}/{end}",
    "method": "getEditorsCountsForProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Editors data",
    "typeScriptTag": "editorsData",
    "description": "Get editors counts for a project.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff.  For projects like commons without language codes, use commons.wikimedia.\nFor projects like www.mediawiki.org, you can use that full string, or just use\nmediawiki or mediawiki.org.\n",
        "example": "PROJECT"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging\nto the bot group but having bot-like names) or user (registered account not in bot\ngroup nor having bot-like name). If you are interested in edits regardless\nof their editor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "pageType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by page-type, use one of content (edits made in content\nnamespaces) or non-content (edits made in non-content namespaces). If you are\ninterested in editors regardless of their page-type, use all-page-types.\n",
        "example": "PAGE-TYPE"
      },
      {
        "name": "activityLevel",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits,\n25..99-edits or 100..-edits. If you are interested in editors regardless\nof their activity-level, use all-activity-levels.\n",
        "example": "ACTIVITY-LEVEL"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "The time unit for the response data. As of today, supported values are\ndaily and monthly.\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The date of the first day to include, in YYYYMMDD format",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The date of the last day to include, in YYYYMMDD format",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/editors/top-by-absolute-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day}",
    "method": "getTopByAbsoluteBytesDifference",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Editors data",
    "typeScriptTag": "editorsData",
    "description": "Get top 100 editors by absolute bytes-difference.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff. For projects like commons without language codes, use commons.wikimedia. For\nprojects like www.mediawiki.org, you can use that full string, or just use mediawiki\nor mediawiki.org.\n",
        "example": "PROJECT"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging to\nthe bot group but having bot-like names) or user (registered account not in bot group\nnor having bot-like name). If you are interested in edits regardless of their\neditor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "pageType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by page-type, use one of content (edits on pages in content\nnamespaces) or non-content (edits on pages in non-content namespaces). If you are\ninterested in edits regardless of their page-type, use all-page-types.\n",
        "example": "PAGE-TYPE"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "The year of the date for which to retrieve top editors, in YYYY format.",
        "example": "YEAR"
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days.",
        "example": "MONTH"
      },
      {
        "name": "day",
        "schema": "string",
        "required": true,
        "description": "The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value.",
        "example": "DAY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/editors/top-by-edits/{project}/{editor-type}/{page-type}/{year}/{month}/{day}",
    "method": "getTopEditorsByEditsCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Editors data",
    "typeScriptTag": "editorsData",
    "description": "Get top 100 editors by edits count.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff. For projects like commons without language codes, use commons.wikimedia. For\nprojects like www.mediawiki.org, you can use that full string, or just use mediawiki\nor mediawiki.org.\n",
        "example": "PROJECT"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging to\nthe bot group but having bot-like names) or user (registered account not in bot group\nnor having bot-like name). If you are interested in edits regardless of their\neditor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "pageType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by page-type, use one of content (edits on pages in content\nnamespaces) or non-content (edits on pages in non-content namespaces). If you are\ninterested in edits regardless of their page-type, use all-page-types.\n",
        "example": "PAGE-TYPE"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "The year of the date for which to retrieve top editors, in YYYY format.",
        "example": "YEAR"
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days.",
        "example": "MONTH"
      },
      {
        "name": "day",
        "schema": "string",
        "required": true,
        "description": "The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value.",
        "example": "DAY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/editors/top-by-net-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day}",
    "method": "getTopByNetBytesDifference",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Editors data",
    "typeScriptTag": "editorsData",
    "description": "Get top 100 editors by net bytes-difference.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff. For projects like commons without language codes, use commons.wikimedia. For\nprojects like www.mediawiki.org, you can use that full string, or just use mediawiki\nor mediawiki.org.\n",
        "example": "PROJECT"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging to\nthe bot group but having bot-like names) or user (registered account not in bot group\nnor having bot-like name). If you are interested in edits regardless of their\neditor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "pageType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by page-type, use one of content (edits on pages in content\nnamespaces) or non-content (edits on pages in non-content namespaces). If you are\ninterested in edits regardless of their page-type, use all-page-types.\n",
        "example": "PAGE-TYPE"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "The year of the date for which to retrieve top editors, in YYYY format.",
        "example": "YEAR"
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days.",
        "example": "MONTH"
      },
      {
        "name": "day",
        "schema": "string",
        "required": true,
        "description": "The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value.",
        "example": "DAY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/edits/aggregate/{project}/{editor-type}/{page-type}/{granularity}/{start}/{end}",
    "method": "getEditsCountsForProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Edits data",
    "typeScriptTag": "editsData",
    "description": "Get edits counts for a project.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff.  For projects like commons without language codes, use commons.wikimedia.\nFor projects like www.mediawiki.org, you can use that full string, or just use\nmediawiki or mediawiki.org. If you're interested in the aggregation of\nall projects, use all-projects.\n",
        "example": "PROJECT"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging\nto the bot group but having bot-like names) or user (registered account not in bot\ngroup nor having bot-like name). If you are interested in edits regardless\nof their editor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "pageType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by page-type, use one of content (edits on pages in content\nnamespaces) or non-content (edits on pages in non-content namespaces). If you are\ninterested in edits regardless of their page-type, use all-page-types.\n",
        "example": "PAGE-TYPE"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "The time unit for the response data. As of today, supported values are\ndaily and monthly.\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The date of the first day to include, in YYYYMMDD format",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The date of the last day to include, in YYYYMMDD format",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/edits/per-page/{project}/{page-title}/{editor-type}/{granularity}/{start}/{end}",
    "method": "getPageEditCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Edits data",
    "typeScriptTag": "editsData",
    "description": "Get edit counts for a page in a project.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff. For projects like commons without language codes, use commons.wikimedia. For\nprojects like www.mediawiki.org, you can use that full string, or just use mediawiki\nor mediawiki.org.\n",
        "example": "PROJECT"
      },
      {
        "name": "pageTitle",
        "schema": "string",
        "required": true,
        "description": "The page-title to request edits for. It should be prefixed with canonical namespace.\nSpaces will be converted to underscores.\n",
        "example": "PAGE-TITLE"
      },
      {
        "name": "editorType",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by editor-type, use one of anonymous, group-bot (registered\naccounts belonging to the bot group), name-bot (registered accounts not belonging to\nthe bot group but having bot-like names) or user (registered account not in bot group\nnor having bot-like name). If you are interested in edits regardless of their\neditor-type, use all-editor-types.\n",
        "example": "EDITOR-TYPE"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "Time unit for the response data. As of today, supported values are daily and monthly\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The date of the first day to include, in YYYYMMDD format",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The date of the last day to include, in YYYYMMDD format",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/legacy/pagecounts/aggregate/{project}/{access-site}/{granularity}/{start}/{end}",
    "method": "getPagecountsAggregateByProjectAndDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legacy data",
    "typeScriptTag": "legacyData",
    "description": "Given a project and a date range, returns a timeseries of pagecounts.\nYou can filter by access site (mobile or desktop) and you can choose between monthly,\ndaily and hourly granularity as well.\n\n- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n- Rate limit: 100 req/s\n- License: Data accessible via this endpoint is available under the\n  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).\n",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff. For projects like commons without language codes, use commons.wikimedia.\n",
        "example": "PROJECT"
      },
      {
        "name": "accessSite",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by access site, use one of desktop-site or mobile-site. If you are interested in pagecounts regardless of access site use all-sites.",
        "example": "ACCESS-SITE"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "The time unit for the response data. As of today, the supported granularities for\nthis endpoint are hourly, daily and monthly.\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The timestamp of the first hour/day/month to include, in YYYYMMDDHH format.",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The timestamp of the last hour/day/month to include, in YYYYMMDDHH format.\nIn hourly and daily granularities this value is inclusive, in the monthly granularity\nthis value is exclusive.\n",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/pageviews/aggregate/{project}/{access}/{agent}/{granularity}/{start}/{end}",
    "method": "getPageviewCountsByProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pageviews data",
    "typeScriptTag": "pageviewsData",
    "description": "Get pageview counts for a project.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by project, use the domain of any Wikimedia project,\nfor example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'.\nIf you are interested in all pageviews regardless of project, use all-projects.\n",
        "example": "PROJECT"
      },
      {
        "name": "access",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by access method, use one of desktop, mobile-app or mobile-web.\nIf you are interested in pageviews regardless of access method, use all-access.\n",
        "example": "ACCESS"
      },
      {
        "name": "agent",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by agent type, use one of user or spider. If you are interested\nin pageviews regardless of agent type, use all-agents.\n",
        "example": "AGENT"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "The time unit for the response data. As of today, the supported granularities for this\nendpoint are hourly, daily, and monthly.\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The timestamp of the first hour/day/month to include, in YYYYMMDDHH format",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The timestamp of the last hour/day/month to include, in YYYYMMDDHH format",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/pageviews/per-article/{project}/{access}/{agent}/{article}/{granularity}/{start}/{end}",
    "method": "getPageviewCountsByArticleDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pageviews data",
    "typeScriptTag": "pageviewsData",
    "description": "Get pageview counts for a page.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by project, use the domain of any Wikimedia project,\nfor example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'.\n",
        "example": "PROJECT"
      },
      {
        "name": "access",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by access method, use one of desktop, mobile-app\nor mobile-web. If you are interested in pageviews regardless of access method,\nuse all-access.\n",
        "example": "ACCESS"
      },
      {
        "name": "agent",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by agent type, use one of user, bot or spider. If you are\ninterested in pageviews regardless of agent type, use all-agents.\n",
        "example": "AGENT"
      },
      {
        "name": "article",
        "schema": "string",
        "required": true,
        "description": "'The title of any article in the specified project. Any spaces should be replaced\nwith underscores. It also should be URI-encoded, so that non-URI-safe characters like\n%, / or ? are accepted. Example: Are_You_the_One%3F'.\n",
        "example": "ARTICLE"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "The time unit for the response data. As of today, the only supported granularity for\nthis endpoint is daily and monthly.\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The date of the first day to include, in YYYYMMDD or YYYYMMDDHH format",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The date of the last day to include, in YYYYMMDD or YYYYMMDDHH format",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/pageviews/top-by-country/{project}/{access}/{year}/{month}",
    "method": "listByCountryAndAccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pageviews data",
    "typeScriptTag": "pageviewsData",
    "description": "Get pageviews by country and access method.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by project, use the domain of any Wikimedia project,\nfor example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'.\n",
        "example": "PROJECT"
      },
      {
        "name": "access",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by access method, use one of desktop, mobile-app or mobile-web.\nIf you are interested in pageviews regardless of access method, use all-access.\n",
        "example": "ACCESS"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "The year of the date for which to retrieve top countries, in YYYY format.",
        "example": "YEAR"
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "The month of the date for which to retrieve top countries, in MM format.\n",
        "example": "MONTH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/pageviews/top/{project}/{access}/{year}/{month}/{day}",
    "method": "listMostViewedArticlesByProjectAndTimespan",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pageviews data",
    "typeScriptTag": "pageviewsData",
    "description": "Get the most viewed articles for a project.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by project, use the domain of any Wikimedia project,\nfor example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'.\n",
        "example": "PROJECT"
      },
      {
        "name": "access",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by access method, use one of desktop, mobile-app or mobile-web.\nIf you are interested in pageviews regardless of access method, use all-access.\n",
        "example": "ACCESS"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "The year of the date for which to retrieve top articles, in YYYY format.",
        "example": "YEAR"
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "The month of the date for which to retrieve top articles, in MM format. If you want\nto get the top articles of a whole month, the day parameter should be all-days.\n",
        "example": "MONTH"
      },
      {
        "name": "day",
        "schema": "string",
        "required": true,
        "description": "The day of the date for which to retrieve top articles, in DD format.",
        "example": "DAY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/registered-users/new/{project}/{granularity}/{start}/{end}",
    "method": "getNewUserCountsByProjectAndDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Registered users data",
    "typeScriptTag": "registeredUsersData",
    "description": "Get newly registered users counts for a project.",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "The name of any Wikimedia project formatted like {language code}.{project name},\nfor example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped\noff.  For projects like commons without language codes, use commons.wikimedia.\nFor projects like www.mediawiki.org, you can use that full string, or just use\nmediawiki or mediawiki.org. If you're interested in the aggregation of\nall projects, use all.\n",
        "example": "PROJECT"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "The time unit for the response data. As of today, supported values are\ndaily and monthly.\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The date of the first day to include, in YYYYMMDD format",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The date of the last day to include, in YYYYMMDD format",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics/unique-devices/{project}/{access-site}/{granularity}/{start}/{end}",
    "method": "getByProjectAndDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Unique devices data",
    "typeScriptTag": "uniqueDevicesData",
    "description": "Get unique devices count per project",
    "parameters": [
      {
        "name": "project",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by project, use the domain of any Wikimedia project,\nfor example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'.\n",
        "example": "PROJECT"
      },
      {
        "name": "accessSite",
        "schema": "string",
        "required": true,
        "description": "If you want to filter by accessed site, use one of desktop-site or mobile-site.\nIf you are interested in unique devices regardless of accessed site, use or all-sites.\n",
        "example": "ACCESS-SITE"
      },
      {
        "name": "granularity",
        "schema": "string",
        "required": true,
        "description": "The time unit for the response data. As of today, the supported granularities\nfor this endpoint are daily and monthly.\n",
        "example": "GRANULARITY"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "The timestamp of the first day/month to include, in YYYYMMDD format",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "The timestamp of the last day/month to include, in YYYYMMDD format",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/transform/html/from/{from_lang}/to/{to_lang}",
    "method": "contentMachineTranslate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transform",
    "typeScriptTag": "transform",
    "description": "Machine-translate content",
    "parameters": [
      {
        "name": "fromLang",
        "schema": "string",
        "required": true,
        "description": "The source language code",
        "example": "FROM_LANG"
      },
      {
        "name": "toLang",
        "schema": "string",
        "required": true,
        "description": "The target language code",
        "example": "TO_LANG"
      },
      {
        "name": "html",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HTML"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/transform/html/from/{from_lang}/to/{to_lang}/{provider}",
    "method": "contentMachineTranslate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transform",
    "typeScriptTag": "transform",
    "description": "Machine-translate content",
    "parameters": [
      {
        "name": "fromLang",
        "schema": "string",
        "required": true,
        "description": "The source language code",
        "example": "FROM_LANG"
      },
      {
        "name": "toLang",
        "schema": "string",
        "required": true,
        "description": "The target language code",
        "example": "TO_LANG"
      },
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The machine translation provider id",
        "example": "PROVIDER"
      },
      {
        "name": "html",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HTML"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/transform/list/tool/{tool}",
    "method": "getListToolLanguagePairs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transform",
    "typeScriptTag": "transform",
    "description": "Lists the tools and language pairs available for the given tool category",
    "parameters": [
      {
        "name": "tool",
        "schema": "string",
        "required": true,
        "description": "The tool category to list tools and language pairs for",
        "example": "TOOL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/transform/list/tool/{tool}/{from}",
    "method": "toolLanguagePairsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transform",
    "typeScriptTag": "transform",
    "description": "Lists the tools and language pairs available for the given tool category",
    "parameters": [
      {
        "name": "tool",
        "schema": "string",
        "required": true,
        "description": "The tool category to list tools and language pairs for",
        "example": "TOOL"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "The source language code",
        "example": "FROM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/transform/list/tool/{tool}/{from}/{to}",
    "method": "toolLanguagePairsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transform",
    "typeScriptTag": "transform",
    "description": "Lists the tools and language pairs available for the given tool category",
    "parameters": [
      {
        "name": "tool",
        "schema": "string",
        "required": true,
        "description": "The tool category to list tools and language pairs for",
        "example": "TOOL"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "The source language code",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "The target language code",
        "example": "TO"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/transform/word/from/{from_lang}/to/{to_lang}/{word}",
    "method": "getDictionaryMeaning",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transform",
    "typeScriptTag": "transform",
    "description": "Fetch the dictionary meaning of a word",
    "parameters": [
      {
        "name": "fromLang",
        "schema": "string",
        "required": true,
        "description": "The source language code",
        "example": "FROM_LANG"
      },
      {
        "name": "toLang",
        "schema": "string",
        "required": true,
        "description": "The target language code",
        "example": "TO_LANG"
      },
      {
        "name": "word",
        "schema": "string",
        "required": true,
        "description": "The word to lookup",
        "example": "WORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/transform/word/from/{from_lang}/to/{to_lang}/{word}/{provider}",
    "method": "getDictionaryMeaning",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transform",
    "typeScriptTag": "transform",
    "description": "Fetch the dictionary meaning of a word",
    "parameters": [
      {
        "name": "fromLang",
        "schema": "string",
        "required": true,
        "description": "The source language code",
        "example": "FROM_LANG"
      },
      {
        "name": "toLang",
        "schema": "string",
        "required": true,
        "description": "The target language code",
        "example": "TO_LANG"
      },
      {
        "name": "word",
        "schema": "string",
        "required": true,
        "description": "The word to lookup",
        "example": "WORD"
      },
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "The dictionary provider id",
        "example": "PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/transform/list/languagepairs",
    "method": "listLanguagePairs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transform",
    "typeScriptTag": "transform",
    "description": "Lists the language pairs supported by the back-end",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/transform/list/pair/{from}/{to}",
    "method": "languagePairList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transform",
    "typeScriptTag": "transform",
    "description": "Lists the tools available for a language pair",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "The source language code",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "The target language code",
        "example": "TO"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Wikimedia"
      apiBaseUrl="https://wikimedia.org/api/rest_v1"
      apiVersion="1.0.0"
      endpoints={35}
      sdkMethods={42}
      schemas={63}
      parameters={155}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wikimedia/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wikimedia/openapi.yaml"
      
    />
  );
}
  