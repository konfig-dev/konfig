import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";

import { Sdk } from "@site/src/components/Sdk";

export default function GoDaddyDomainsTypeScriptSdk() {
  return (
    <Sdk
      sdkName="godaddy-typescript-sdk"
      metaDescription="All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way."
      company="GoDaddy"
      serviceName="Domains"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/godaddy/domains/logo.png"
      clientNameCamelCase="goDaddy"
      homepage="developer.godaddy.com"
      lastUpdated={new Date("2024-03-13T01:24:30.233Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/godaddy/domains/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/godaddy/domains/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      
      categories={["hosting"]}
      methods={[
  {
    "url": "/v1/domains",
    "method": "getDomainsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Retrieve a list of Domains for the specified Shopper",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper ID whose domains are to be retrieved"
      },
      {
        "name": "statuses",
        "schema": "array",
        "required": false,
        "description": "Only include results with `status` value in the specified set"
      },
      {
        "name": "statusGroups",
        "schema": "array",
        "required": false,
        "description": "Only include results with `status` value in any of the specified groups"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of domains to return"
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Marker Domain to use as the offset in results"
      },
      {
        "name": "includes",
        "schema": "array",
        "required": false,
        "description": "Optional details to be included in the response"
      },
      {
        "name": "modifiedDate",
        "schema": "string",
        "required": false,
        "description": "Only include results that have been modified since the specified date"
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
        "statusCode": "422",
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
    "url": "/v1/domains/agreements",
    "method": "getLegalAgreements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Retrieve the legal agreement(s) required to purchase the specified TLD and add-ons",
    "parameters": [
      {
        "name": "xMarketId",
        "schema": "string",
        "required": false,
        "description": "Unique identifier of the Market used to retrieve/translate Legal Agreements",
        "default": "en-US"
      },
      {
        "name": "tlds",
        "schema": "array",
        "required": true,
        "description": "list of TLDs whose legal agreements are to be retrieved"
      },
      {
        "name": "privacy",
        "schema": "boolean",
        "required": true,
        "description": "Whether or not privacy has been requested",
        "example": true
      },
      {
        "name": "forTransfer",
        "schema": "boolean",
        "required": false,
        "description": "Whether or not domain tranfer has been requested"
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
    "url": "/v1/domains/available",
    "method": "checkDomainAvailability",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Determine whether or not the specified domain is available for purchase",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain name whose availability is to be checked",
        "example": "DOMAIN"
      },
      {
        "name": "checkType",
        "schema": "string",
        "required": false,
        "description": "Optimize for time ('FAST') or accuracy ('FULL')",
        "default": "FAST"
      },
      {
        "name": "forTransfer",
        "schema": "boolean",
        "required": false,
        "description": "Whether or not to include domains available for transfer. If set to True, checkType is ignored",
        "default": false
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
        "statusCode": "422",
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
    "url": "/v1/domains/available",
    "method": "checkDomainAvailabilityPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Determine whether or not the specified domains are available for purchase",
    "parameters": [
      {
        "name": "checkType",
        "schema": "string",
        "required": false,
        "description": "Optimize for time ('FAST') or accuracy ('FULL')",
        "default": "FAST"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "203",
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
    "url": "/v1/domains/contacts/validate",
    "method": "validateDomainContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Validate the request body using the Domain Contact Validation Schema for specified domains.",
    "parameters": [
      {
        "name": "xPrivateLabelId",
        "schema": "integer",
        "required": false,
        "description": "PrivateLabelId to operate as, if different from JWT",
        "default": 1
      },
      {
        "name": "marketId",
        "schema": "string",
        "required": false,
        "description": "MarketId in which the request is being made, and for which responses should be localized",
        "default": "en-US"
      },
      {
        "name": "contactAdmin",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactBilling",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactPresence",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactRegistrant",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactTech",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "domains",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response was specified"
      },
      {
        "statusCode": "204",
        "description": "Request was successful"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v1/domains/purchase",
    "method": "createDomainPurchase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Purchase and register the specified Domain",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "The Shopper for whom the domain should be purchased"
      },
      {
        "name": "consent",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "contactAdmin",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactBilling",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactRegistrant",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactTech",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "nameServers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "period",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "privacy",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "renewAuto",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
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
        "statusCode": "422",
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
    "url": "/v1/domains/purchase/schema/{tld}",
    "method": "getDomainSchema",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Retrieve the schema to be submitted when registering a Domain for the specified TLD",
    "parameters": [
      {
        "name": "tld",
        "schema": "string",
        "required": true,
        "description": "The Top-Level Domain whose schema should be retrieved",
        "example": "TLD"
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
        "statusCode": "422",
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
    "url": "/v1/domains/purchase/validate",
    "method": "validateDomainPurchase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Validate the request body using the Domain Purchase Schema for the specified TLD",
    "parameters": [
      {
        "name": "consent",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "contactAdmin",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactBilling",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactRegistrant",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactTech",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "nameServers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "period",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "privacy",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "renewAuto",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request was successful"
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
    "url": "/v1/domains/suggest",
    "method": "suggestAlternateDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Suggest alternate Domain names based on a seed Domain, a set of keywords, or the shopper's purchase history",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper ID for which the suggestions are being generated"
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Domain name or set of keywords for which alternative domain names will be suggested"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Two-letter ISO country code to be used as a hint for target region<br/><br/>\nNOTE: These are sample values, there are many\n<a href=\"http://www.iso.org/iso/country_codes.htm\">more</a>"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "Name of city to be used as a hint for target region"
      },
      {
        "name": "sources",
        "schema": "array",
        "required": false,
        "description": "Sources to be queried<br/><br/><ul>\n<li><strong>CC_TLD</strong> - Varies the TLD using Country Codes</li>\n<li><strong>EXTENSION</strong> - Varies the TLD</li>\n<li><strong>KEYWORD_SPIN</strong> - Identifies keywords and then rotates each one</li>\n<li><strong>PREMIUM</strong> - Includes variations with premium prices</li></ul>"
      },
      {
        "name": "tlds",
        "schema": "array",
        "required": false,
        "description": "Top-level domains to be included in suggestions<br/><br/>\nNOTE: These are sample values, there are many\n<a href=\"http://www.godaddy.com/tlds/gtld.aspx#domain_search_form\">more</a>"
      },
      {
        "name": "lengthMax",
        "schema": "integer",
        "required": false,
        "description": "Maximum length of second-level domain"
      },
      {
        "name": "lengthMin",
        "schema": "integer",
        "required": false,
        "description": "Minimum length of second-level domain"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of suggestions to return"
      },
      {
        "name": "waitMs",
        "schema": "integer",
        "required": false,
        "description": "Maximum amount of time, in milliseconds, to wait for responses\nIf elapses, return the results compiled up to that point",
        "default": 1000
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/domains/tlds",
    "method": "getTldsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Retrieves a list of TLDs supported and enabled for sale",
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
    "url": "/v1/domains/{domain}",
    "method": "cancelDomainPurchase",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Cancel a purchased domain",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain to cancel",
        "example": "DOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request was successful"
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
    "url": "/v1/domains/{domain}",
    "method": "getDomainDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Retrieve details for the specified Domain",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper ID expected to own the specified domain"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain name whose details are to be retrieved",
        "example": "DOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "203",
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
    "url": "/v1/domains/{domain}",
    "method": "updateDomainDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Update details for the specified Domain",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain whose details are to be updated",
        "example": "DOMAIN"
      },
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper for whom Domain is to be updated. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com"
      },
      {
        "name": "consent",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "exposeWhois",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "locked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "nameServers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "renewAuto",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "subaccountId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request was successful"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v1/domains/{domain}/contacts",
    "method": "updateDomainContacts",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Update domain",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper for whom domain contacts are to be updated. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain whose Contacts are to be updated.",
        "example": "DOMAIN"
      },
      {
        "name": "contactAdmin",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactBilling",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactRegistrant",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "contactTech",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response was specified"
      },
      {
        "statusCode": "204",
        "description": "Request was successful"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/domains/{domain}/privacy",
    "method": "cancelPrivacyRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Submit a privacy cancellation request for the given domain",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper ID of the owner of the domain"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain whose privacy is to be cancelled",
        "example": "DOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request was successful"
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
    "url": "/v1/domains/{domain}/privacy/purchase",
    "method": "purchasePrivacyForDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Purchase privacy for a specified domain",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper ID of the owner of the domain"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain for which to purchase privacy",
        "example": "DOMAIN"
      },
      {
        "name": "consent",
        "schema": "undefined",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v1/domains/{domain}/records",
    "method": "addDnsRecordsToDomain",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Add the specified DNS Records to the specified Domain",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain whose DNS Records are to be augmented",
        "example": "DOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request was successful"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/domains/{domain}/records",
    "method": "replaceDnsRecords",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Replace all DNS Records for the specified Domain",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain whose DNS Records are to be replaced",
        "example": "DOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request was successful"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/domains/{domain}/records/{type}",
    "method": "replaceDnsRecordsType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Replace all DNS Records for the specified Domain with the specified Type",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain whose DNS Records are to be replaced",
        "example": "DOMAIN"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "DNS Record Type for which DNS Records are to be replaced",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request was successful"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/domains/{domain}/records/{type}/{name}",
    "method": "deleteAllDnsRecords",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Delete all DNS Records for the specified Domain with the specified Type and Name",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain whose DNS Records are to be deleted",
        "example": "DOMAIN"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "DNS Record Type for which DNS Records are to be deleted",
        "example": "TYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "DNS Record Name for which DNS Records are to be deleted",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/domains/{domain}/records/{type}/{name}",
    "method": "getDnsRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Retrieve DNS Records for the specified Domain, optionally with the specified Type and/or Name",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain whose DNS Records are to be retrieved",
        "example": "DOMAIN"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "DNS Record Type for which DNS Records are to be retrieved",
        "example": "TYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "DNS Record Name for which DNS Records are to be retrieved",
        "example": "NAME"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Number of results to skip for pagination"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of items to return"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/domains/{domain}/records/{type}/{name}",
    "method": "replaceDnsRecordsType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Replace all DNS Records for the specified Domain with the specified Type and Name",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain whose DNS Records are to be replaced",
        "example": "DOMAIN"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "DNS Record Type for which DNS Records are to be replaced",
        "example": "TYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "DNS Record Name for which DNS Records are to be replaced",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request was successful"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/domains/{domain}/renew",
    "method": "renewDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Renew the specified Domain",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper for whom Domain is to be renewed. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain to renew",
        "example": "DOMAIN"
      },
      {
        "name": "period",
        "schema": "integer",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v1/domains/{domain}/transfer",
    "method": "purchaseTransferProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Purchase and start or restart transfer process",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "The Shopper to whom the domain should be transfered"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain to transfer in",
        "example": "DOMAIN"
      },
      {
        "name": "authCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHCODE"
      },
      {
        "name": "consent",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "contactAdmin",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactBilling",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactRegistrant",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contactTech",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "period",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "privacy",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "renewAuto",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v1/domains/{domain}/verifyRegistrantEmail",
    "method": "resendContactEmailVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "v1",
    "typeScriptTag": "v1",
    "description": "Re-send Contact E-mail Verification for specified Domain",
    "parameters": [
      {
        "name": "xShopperId",
        "schema": "string",
        "required": false,
        "description": "Shopper for whom domain contact e-mail should be verified. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain whose Contact E-mail should be verified.",
        "example": "DOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request was successful"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/customers/{customerId}/domains/forwards/{fqdn}",
    "method": "cancelForwardingRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Submit a forwarding cancellation request for the given fqdn",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "fqdn",
        "schema": "string",
        "required": true,
        "description": "The fully qualified domain name whose forwarding details are to be deleted.",
        "example": "FQDN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v2/customers/{customerId}/domains/forwards/{fqdn}",
    "method": "getForwardingInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Retrieve the forwarding information for the given fqdn",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "fqdn",
        "schema": "string",
        "required": true,
        "description": "The fully qualified domain name whose forwarding details are to be retrieved.",
        "example": "FQDN"
      },
      {
        "name": "includeSubs",
        "schema": "boolean",
        "required": false,
        "description": "Optionally include all sub domains if the fqdn specified is a domain and not a sub domain."
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
        "statusCode": "422",
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
    "url": "/v2/customers/{customerId}/domains/forwards/{fqdn}",
    "method": "createForwardingConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Create a new forwarding configuration for the given FQDN",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your own customer id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "fqdn",
        "schema": "string",
        "required": true,
        "description": "The fully qualified domain name whose forwarding details are to be modified.",
        "example": "FQDN"
      },
      {
        "name": "mask",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE",
        "default": "REDIRECT_PERMANENT"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v2/customers/{customerId}/domains/forwards/{fqdn}",
    "method": "modifyForwardingInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Modify the forwarding information for the given fqdn",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "fqdn",
        "schema": "string",
        "required": true,
        "description": "The fully qualified domain name whose forwarding details are to be modified.",
        "example": "FQDN"
      },
      {
        "name": "mask",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE",
        "default": "REDIRECT_PERMANENT"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v2/customers/{customerId}/domains/notifications",
    "method": "getNextDomain",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Retrieve the next domain notification",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
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
    "url": "/v2/customers/{customerId}/domains/notifications/optIn",
    "method": "listOptedInTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Retrieve a list of notification types that are opted in",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
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
    "url": "/v2/customers/{customerId}/domains/notifications/optIn",
    "method": "optInNotifications",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Opt in to recieve notifications for the submitted notification types",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "types",
        "schema": "array",
        "required": true,
        "description": "The notification types that should be opted in"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Command successful"
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
    "url": "/v2/customers/{customerId}/domains/notifications/schemas/{type}",
    "method": "getSchema",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Retrieve the schema for the notification data for the specified notification type",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The notification type whose schema should be retrieved",
        "example": "TYPE"
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
        "statusCode": "422",
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
    "url": "/v2/customers/{customerId}/domains/notifications/{notificationId}/acknowledge",
    "method": "acknowledgeDomainNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Acknowledge a domain notification",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "notificationId",
        "schema": "string",
        "required": true,
        "description": "The notification ID to acknowledge",
        "example": "NOTIFICATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Message acknowledged"
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
    "url": "/v2/customers/{customerId}/domains/register",
    "method": "purchaseRegisterDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Purchase and register the specified Domain",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "consent",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "nameServers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "period",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "privacy",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "renewAuto",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/REGISTER to poll status"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v2/customers/{customerId}/domains/register/schema/{tld}",
    "method": "getRegisterSchema",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Retrieve the schema to be submitted when registering a Domain for the specified TLD",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "tld",
        "schema": "string",
        "required": true,
        "description": "The Top-Level Domain whose schema should be retrieved",
        "example": "TLD"
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
        "statusCode": "422",
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
    "url": "/v2/customers/{customerId}/domains/register/validate",
    "method": "validateDomainRegistration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Validate the request body using the Domain Registration Schema for the specified TLD",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "consent",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "nameServers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "period",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "privacy",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "renewAuto",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
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
    "url": "/v2/customers/{customerId}/domains/{domain}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Retrieve details for the specified Domain",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain name whose details are to be retrieved",
        "example": "DOMAIN"
      },
      {
        "name": "includes",
        "schema": "array",
        "required": false,
        "description": "Optional details to be included in the response"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "203",
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
    "url": "/v2/customers/{customerId}/domains/{domain}/actions",
    "method": "getRecentList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Actions",
    "typeScriptTag": "actions",
    "description": "Retrieves a list of the most recent actions for the specified domain",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain whose actions are to be retrieved",
        "example": "DOMAIN"
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
    "url": "/v2/customers/{customerId}/domains/{domain}/actions/{type}",
    "method": "cancelRecentAction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Actions",
    "typeScriptTag": "actions",
    "description": "Cancel the most recent user action for the specified domain",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain whose action is to be cancelled",
        "example": "DOMAIN"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The type of action to cancel",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was successful"
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
        "statusCode": "409",
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
    "url": "/v2/customers/{customerId}/domains/{domain}/actions/{type}",
    "method": "getRecentAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Actions",
    "typeScriptTag": "actions",
    "description": "Retrieves the most recent action for the specified domain",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain whose action is to be retrieved",
        "example": "DOMAIN"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The type of action to retrieve",
        "example": "TYPE"
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
        "statusCode": "409",
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
    "url": "/v2/customers/{customerId}/domains/{domain}/redeem",
    "method": "redeemDomainRestore",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Purchase a restore for the given domain to bring it out of redemption",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain to request redeem for",
        "example": "DOMAIN"
      },
      {
        "name": "consent",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/REDEEM to poll status"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v2/customers/{customerId}/domains/{domain}/renew",
    "method": "renewDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Renew the specified Domain",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain to be renewed",
        "example": "DOMAIN"
      },
      {
        "name": "consent",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "expires",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXPIRES"
      },
      {
        "name": "period",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/RENEW to poll status"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v2/customers/{customerId}/domains/{domain}/transfer",
    "method": "purchaseTransferProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Purchase and start or restart transfer process",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain to transfer in",
        "example": "DOMAIN"
      },
      {
        "name": "authCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHCODE"
      },
      {
        "name": "consent",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "identityDocumentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "period",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "privacy",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "renewAuto",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/TRANSFER to poll status"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v2/customers/{customerId}/domains/{domain}/transferInAccept",
    "method": "acceptTransferIn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Accepts the transfer in",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain to accept the transfer in for",
        "example": "DOMAIN"
      },
      {
        "name": "authCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/TRANSFER_IN_ACCEPT to poll status"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v2/customers/{customerId}/domains/{domain}/transferInCancel",
    "method": "cancelTransferIn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Cancels the transfer in",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain to cancel the transfer in for",
        "example": "DOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/TRANSFER_IN_CANCEL to poll status"
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
        "statusCode": "409",
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
    "url": "/v2/customers/{customerId}/domains/{domain}/transferInRestart",
    "method": "restartTransferIn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Restarts transfer in request from the beginning",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain to restart the transfer in",
        "example": "DOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/TRANSFER_IN_RESTART to poll status"
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
        "statusCode": "409",
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
    "url": "/v2/customers/{customerId}/domains/{domain}/transferInRetry",
    "method": "retryTransferInProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Retries the current transfer in request with supplied Authorization code",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain to retry the transfer in",
        "example": "DOMAIN"
      },
      {
        "name": "authCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/TRANSFER_IN_RETRY to poll status"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v2/customers/{customerId}/domains/{domain}/transferOut",
    "method": "initiateTransferOut",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Initiate transfer out to another registrar for a .uk domain.",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain to initiate the transfer out for",
        "example": "DOMAIN"
      },
      {
        "name": "registrar",
        "schema": "string",
        "required": true,
        "description": "Registrar tag to push transfer to",
        "example": "REGISTRAR"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/TRANSFER_OUT_REQUESTED to poll status"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
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
    "url": "/v2/customers/{customerId}/domains/{domain}/transferOutAccept",
    "method": "acceptTransferOut",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Accept transfer out",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain to accept the transfer out for",
        "example": "DOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/TRANSFER_OUT_ACCEPT to poll status"
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
        "statusCode": "409",
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
    "url": "/v2/customers/{customerId}/domains/{domain}/transferOutReject",
    "method": "rejectTransferOut",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Reject transfer out",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
        "example": "CUSTOMERID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "Domain to reject the transfer out for",
        "example": "DOMAIN"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": "Transfer out reject reason"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/TRANSFER_OUT_REJECT to poll status"
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
        "statusCode": "409",
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
    "url": "/v2/domains/maintenances",
    "method": "getUpcomingMaintenancesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Retrieve a list of upcoming system Maintenances",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Only include results with the selected `status` value.  Returns all results if omitted<br/><ul><li><strong style='margin-left: 12px;'>ACTIVE</strong> - The upcoming maintenance is active.</li><li><strong style='margin-left: 12px;'>CANCELLED</strong> - The upcoming maintenance has been cancelled.</li></ul>"
      },
      {
        "name": "modifiedAtAfter",
        "schema": "string",
        "required": false,
        "description": "Only include results with `modifiedAt` after the supplied date"
      },
      {
        "name": "startsAtAfter",
        "schema": "string",
        "required": false,
        "description": "Only include results with `startsAt` after the supplied date"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results to return",
        "default": 100
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
        "statusCode": "422",
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
    "url": "/v2/domains/maintenances/{maintenanceId}",
    "method": "getUpcomingMaintenanceDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Retrieve the details for an upcoming system Maintenances",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": false,
        "description": "A client provided identifier for tracking this request."
      },
      {
        "name": "maintenanceId",
        "schema": "string",
        "required": true,
        "description": "The identifier for the system maintenance",
        "example": "MAINTENANCEID"
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
  }
]
    }
      language="TypeScript"
      apiTitle=""
      apiBaseUrl="https:////api.ote-godaddy.com"
      apiVersion="1.0.0"
      endpoints={42}
      sdkMethods={53}
      schemas={104}
      parameters={234}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/godaddy/domains/openapi.yaml"
    />
  );
}
  