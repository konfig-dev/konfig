import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function RedkikTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="redkik-typescript-sdk"
      metaDescription={`Redkik is a global InsurTech company with the mission to transform and improve the insurance industry for all parties within logistics and transportation. Redkik's innovative software eliminates the need for annual and complex insurance policies. Through Redkik's embedded integration with licensed insurance providers, existing platforms and online systems can offer their customers tailored and transactional insurance at the time of sale.

Starting as a cargo insurance solution, the market's immediate response has since molded the flexible software to be used to solve additional inefficiencies for warehouse, gap, spike and cyber insurance while multiple other applications are currently being developed.

The team of Redkik has a big passion for innovation and technology,  together with great experience and deep knowledge from logistics and transportation, risk management, cargo insurance, machine learning, and software development.

Join Redkik's rapidly growing network of global partners and exceed your business goals by offering transactional insurance through Redkik's seamless API integration.`}
      company="Redkik"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/redkik/logo.png"
      companyKebabCase="redkik"
      clientNameCamelCase="redkik"
      homepage="redkik.com/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/redkik/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/redkik/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["risk_management","insurance","cargo"]}
      methods={[
  {
    "url": "/api/v2/user/api-tokens",
    "method": "createUserApiToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ApiTokenController",
    "typeScriptTag": "apiTokenController",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "roles",
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
      }
    ]
  },
  {
    "url": "/api/v2/user/api-tokens/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ApiTokenController",
    "typeScriptTag": "apiTokenController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/audits",
    "method": "getAudits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuditController",
    "typeScriptTag": "auditController",
    "description": "Fetches audits in batches set by perPage (default 20). Should be used mainly from UI.",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Index of page"
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "Page size"
      },
      {
        "name": "globalFilter",
        "schema": "string",
        "required": false,
        "description": "Global filter of filterable fields"
      },
      {
        "name": "order",
        "schema": "object",
        "required": false,
        "description": "Stringified TypeOrm order",
        "example": {
          "name": "ASC",
          "age": "DESC"
        }
      },
      {
        "name": "where",
        "schema": "array",
        "required": false,
        "description": "Stringified TypeOrm where query",
        "example": {
          "name": "John Smith",
          "age": 24
        }
      },
      {
        "name": "select",
        "schema": "object",
        "required": false,
        "description": "Stringified TypeOrm select query",
        "example": {
          "name": true,
          "age": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "206",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/audits",
    "method": "createUserAudits",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AuditController",
    "typeScriptTag": "auditController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYID"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYTYPE"
      },
      {
        "name": "secondaryEntityId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      },
      {
        "name": "createdAt",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/oauth/authorize",
    "method": "authorizeOauthUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentications",
    "typeScriptTag": "authentications",
    "description": "",
    "parameters": [
      {
        "name": "responseType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESPONSE_TYPE"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "codeChallenge",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "codeChallengeMethod",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "errorCode",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/oauth/forgotten",
    "method": "getForgottenOauth",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentications",
    "typeScriptTag": "authentications",
    "description": "",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/oauth/auth/login",
    "method": "postOauthLogin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentications",
    "typeScriptTag": "authentications",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v2/user/oauth/auth/reset",
    "method": "resetOauthToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentications",
    "typeScriptTag": "authentications",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v2/user/oauth/token",
    "method": "createUserOauthToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentications",
    "typeScriptTag": "authentications",
    "description": "",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANT_TYPE"
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "refresh_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "redirect_uri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code_verifier",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/oauth/exchange",
    "method": "exchangeOauthToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentications",
    "typeScriptTag": "authentications",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/oauth/logout",
    "method": "performLogout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentications",
    "typeScriptTag": "authentications",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v2/user/oauth/mfa",
    "method": "getMfaDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentications",
    "typeScriptTag": "authentications",
    "description": "",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "csrfToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "error",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/api/v2/user/oauth/check-mfa-code",
    "method": "checkMfaCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentications",
    "typeScriptTag": "authentications",
    "description": "",
    "parameters": [
      {
        "name": "mfaCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MFACODE"
      },
      {
        "name": "csrf_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CSRF_TOKEN"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations",
    "method": "getOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "Fetches organizations in batches set by perPage (default 20). Should be used mainly from UI.",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Index of page"
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "Page size"
      },
      {
        "name": "globalFilter",
        "schema": "string",
        "required": false,
        "description": "Global filter of filterable fields"
      },
      {
        "name": "order",
        "schema": "object",
        "required": false,
        "description": "Stringified TypeOrm order",
        "example": {
          "name": "ASC",
          "age": "DESC"
        }
      },
      {
        "name": "where",
        "schema": "array",
        "required": false,
        "description": "Stringified TypeOrm where query",
        "example": {
          "name": "John Smith",
          "age": 24
        }
      },
      {
        "name": "select",
        "schema": "object",
        "required": false,
        "description": "Stringified TypeOrm select query",
        "example": {
          "name": true,
          "age": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "206",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations",
    "method": "createUserOrganization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
      },
      {
        "name": "allowQuotation",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "allowPayCard",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "allowPayInvoice",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "allowConfirmationPayCard",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "allowConfirmationPayInvoice",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "allowedImmediatePaymentTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allowConsignee",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "allowLetterOfCredit",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "allowUserClaim",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "users",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "parentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stripeAccountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalReference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "referencePrefix",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "publicUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "publicDateFormat",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "publicLocale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allowReferrals",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "allowReferAccepted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "allowConfirm",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "allowModifyBookingFee",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "allowBeneficiary",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "allowMultiCommodity",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "allowClaims",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "claimTemplateId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastInvoicedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invoiceCustomerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requireNotification",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "notificationMethod",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contactEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hideCosts",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "costBreakdown",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COSTBREAKDOWN"
      },
      {
        "name": "hideZeroValues",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "requireConfirmation",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "street",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "postcode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "formatted",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FORMATTED"
      },
      {
        "name": "taxRulesetId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "descendants",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allowedAddressTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "enforceTrackingCode",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/chart",
    "method": "getOrganizationChart",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "Fetches organization hierarchy chart",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "206",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/find",
    "method": "findUserOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "skip",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "take",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "where",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "select",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/find/ids",
    "method": "findUserOrganizationIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "select",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/list",
    "method": "listUserOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "skip",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "take",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "where",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "select",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/available-policies",
    "method": "listAvailablePolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "Returns a list of policies that can be assigned to organization of the user",
    "parameters": [],
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
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}/endorsements",
    "method": "getUserEndorsements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Index of page"
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "Page size"
      },
      {
        "name": "globalFilter",
        "schema": "string",
        "required": false,
        "description": "Global filter of filterable fields"
      },
      {
        "name": "order",
        "schema": "object",
        "required": false,
        "description": "Stringified TypeOrm order",
        "example": {
          "name": "ASC",
          "age": "DESC"
        }
      },
      {
        "name": "where",
        "schema": "array",
        "required": false,
        "description": "Stringified TypeOrm where query",
        "example": {
          "name": "John Smith",
          "age": 24
        }
      },
      {
        "name": "select",
        "schema": "object",
        "required": false,
        "description": "Stringified TypeOrm select query",
        "example": {
          "name": true,
          "age": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "206",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}",
    "method": "deleteOrganizationById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}",
    "method": "updateOrganizationById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowQuotation",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allowPayCard",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allowPayInvoice",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allowConfirmationPayCard",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allowConfirmationPayInvoice",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allowedImmediatePaymentTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "allowConsignee",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allowLetterOfCredit",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allowUserClaim",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "schema": "number",
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "description": ""
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stripeAccountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalReference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "referencePrefix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "publicUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "publicDateFormat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "publicLocale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowReferrals",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allowReferAccepted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allowConfirm",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allowModifyBookingFee",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allowBeneficiary",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allowMultiCommodity",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allowClaims",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "claimTemplateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastInvoicedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoiceCustomerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billingAddress",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billingEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requireNotification",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "notificationMethod",
        "schema": "number",
        "description": ""
      },
      {
        "name": "contactEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hideCosts",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "costBreakdown",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hideZeroValues",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "requireConfirmation",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "street",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "formatted",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxRulesetId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "descendants",
        "schema": "array",
        "description": ""
      },
      {
        "name": "allowedAddressTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "enforceTrackingCode",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}/stripe-account",
    "method": "getStripeAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}/closure-values",
    "method": "getClosureValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}/policies",
    "method": "getPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "Returns the assigned policies of a requested organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}/details",
    "method": "getOrganizationDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "Returns detailed information for an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}/api-tokens",
    "method": "getUserApiTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Index of page"
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "Page size"
      },
      {
        "name": "globalFilter",
        "schema": "string",
        "required": false,
        "description": "Global filter of filterable fields"
      },
      {
        "name": "order",
        "schema": "object",
        "required": false,
        "description": "Stringified TypeOrm order",
        "example": {
          "name": "ASC",
          "age": "DESC"
        }
      },
      {
        "name": "where",
        "schema": "array",
        "required": false,
        "description": "Stringified TypeOrm where query",
        "example": {
          "name": "John Smith",
          "age": 24
        }
      },
      {
        "name": "select",
        "schema": "object",
        "required": false,
        "description": "Stringified TypeOrm select query",
        "example": {
          "name": true,
          "age": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "206",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}/setup",
    "method": "getUserOrganizationSetup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}/descendantIds",
    "method": "getDescendantIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}/name",
    "method": "getOrganizationNameById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}/insurers",
    "method": "listInsurerAssignedForOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "Returns list of insurers assigned for requested organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}/insurers",
    "method": "updateInsurersList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "Update list of insurers assigned for organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "insurerIds",
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
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}/assigned-policies",
    "method": "getAssignedPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "Returns the assigned policies of a requested organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/{id}/assigned-policies",
    "method": "assignPolicies",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OrganizationController",
    "typeScriptTag": "organizationController",
    "description": "Assign policies for requested organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "policies",
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
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/organization-policies/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationPolicyController",
    "typeScriptTag": "organizationPolicyController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/organizations/organization-policies/{policyId}",
    "method": "deletePolicyById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "OrganizationPolicyController",
    "typeScriptTag": "organizationPolicyController",
    "description": "",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/roles",
    "method": "getUserRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RoleController",
    "typeScriptTag": "roleController",
    "description": "Fetches roles in batches set by perPage (default 20). Should be used mainly from UI.",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Index of page"
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "Page size"
      },
      {
        "name": "globalFilter",
        "schema": "string",
        "required": false,
        "description": "Global filter of filterable fields"
      },
      {
        "name": "order",
        "schema": "object",
        "required": false,
        "description": "Stringified TypeOrm order",
        "example": {
          "name": "ASC",
          "age": "DESC"
        }
      },
      {
        "name": "where",
        "schema": "array",
        "required": false,
        "description": "Stringified TypeOrm where query",
        "example": {
          "name": "John Smith",
          "age": 24
        }
      },
      {
        "name": "select",
        "schema": "object",
        "required": false,
        "description": "Stringified TypeOrm select query",
        "example": {
          "name": true,
          "age": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "206",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/roles",
    "method": "createRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "RoleController",
    "typeScriptTag": "roleController",
    "description": "",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mappings",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "clientMappings",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "abac",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "data",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/roles/{id}",
    "method": "deleteUserRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "RoleController",
    "typeScriptTag": "roleController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/roles/{id}",
    "method": "getUserRolesById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RoleController",
    "typeScriptTag": "roleController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/roles/{id}",
    "method": "updateUserRole",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "RoleController",
    "typeScriptTag": "roleController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mappings",
        "schema": "array",
        "description": ""
      },
      {
        "name": "clientMappings",
        "schema": "array",
        "description": ""
      },
      {
        "name": "abac",
        "schema": "array",
        "description": ""
      },
      {
        "name": "data",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/status",
    "method": "getUserStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "StatusController",
    "typeScriptTag": "statusController",
    "description": "",
    "parameters": [],
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
      }
    ]
  },
  {
    "url": "/api/v2/user/users",
    "method": "getUsersList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "Fetches users in batches set by perPage (default 20). Should be used mainly from UI.",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Index of page"
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "Page size"
      },
      {
        "name": "globalFilter",
        "schema": "string",
        "required": false,
        "description": "Global filter of filterable fields"
      },
      {
        "name": "order",
        "schema": "object",
        "required": false,
        "description": "Stringified TypeOrm order",
        "example": {
          "name": "ASC",
          "age": "DESC"
        }
      },
      {
        "name": "where",
        "schema": "array",
        "required": false,
        "description": "Stringified TypeOrm where query",
        "example": {
          "name": "John Smith",
          "age": 24
        }
      },
      {
        "name": "select",
        "schema": "object",
        "required": false,
        "description": "Stringified TypeOrm select query",
        "example": {
          "name": true,
          "age": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "206",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/users",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "roles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "organization",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "profile",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "dateFormat",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATEFORMAT"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOCALE"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedAt",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/users/find",
    "method": "findUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "skip",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "take",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "relations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "where",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "select",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/users/generate-otp-secret",
    "method": "generateOtpSecret",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [],
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
      }
    ]
  },
  {
    "url": "/api/v2/user/users/{id}",
    "method": "deleteUserById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/users/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/users/{id}",
    "method": "updateUserById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "organization",
        "schema": "object",
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profile",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dateFormat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deletedAt",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/users/{id}/profile",
    "method": "getUserProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "206",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/users/{id}/profile",
    "method": "updateUserProfile",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "id",
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
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "dateFormat",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATEFORMAT"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "oldPassword",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mfaType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mfaCode",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/users/setup-otp",
    "method": "setupOtp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "mfaSecret",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/users/{id}/roles",
    "method": "getUserRolesById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/users/password",
    "method": "resetPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "oldpassword",
        "schema": "string",
        "description": ""
      },
      {
        "name": "newpassword",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/users/reset-password",
    "method": "resetPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "password",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/users/{id}/reset-password",
    "method": "resetUserPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/api/v2/user/users/generate-mfa-code",
    "method": "generateMfaCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "userId",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user/users/reset-mfa-type",
    "method": "resetMfaType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserController",
    "typeScriptTag": "userController",
    "description": "",
    "parameters": [
      {
        "name": "mfaCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MFACODE"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
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
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="userservice"
      apiBaseUrl="https://sales.app.redkik.com/api/v2/"
      apiVersion="2.0.0"
      endpoints={47}
      sdkMethods={60}
      schemas={94}
      parameters={285}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/redkik/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/redkik/openapi.yaml"
      developerDocumentation="sales.app.redkik.com/api/v2/apidoc/?urls.primaryName=UserService"
    />
  );
}
  