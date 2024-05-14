import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SellsyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="sellsy-typescript-sdk"
      metaDescription={`Sellsy is a CRM, invoicing and pre-accounting suite for optimized business management and customer experience. A collaborative tool to give marketing, sales and administrative teams the means to be effective! 🚀

With 6,300 clients, Sellsy surrounds itself with almost 130 employees to carry out its projects. Sellsy remains, above all, a French company created by two entrepreneurs, Frédéric Coulais and Alain Mevellec, for entrepreneurs. Since its creation in 2009, Sellsy has placed innovation at the heart of its strategy, in order to offer companies simple, efficient and secure digital solutions.

👉 To learn more about Sellsy and its CRM suite, visit go.sellsy.com`}
      company="Sellsy"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sellsy/logo.png"
      companyKebabCase="sellsy"
      clientNameCamelCase="sellsy"
      homepage="sellsy.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sellsy/favicon.png"
      // Missing contactUrl
      contactEmail="api@sellsy.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sellsy/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["crm","invoicing"]}
      methods={[
  {
    "url": "/comments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Comments List",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
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
    "url": "/comments",
    "method": "createComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Create a comment",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contains all properties + _embed for an Item endpoint"
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/comments/{id}",
    "method": "removeComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Delete a comment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Comment deleted"
      }
    ]
  },
  {
    "url": "/comments/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Get comment details",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains all properties + _embed for an Item endpoint"
      }
    ]
  },
  {
    "url": "/comments/{id}",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Update a comment",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        "name": "timetracking",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains all properties + _embed for an Item endpoint"
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/comments/search",
    "method": "searchComments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Search comments",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/companies",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Companies List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=invoicing_contact&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - main_contact, dunning_contact, invoicing_contact: `contacts.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/companies",
    "method": "createNewCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Create a company",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=invoicing_contact&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - main_contact, dunning_contact, invoicing_contact: `contacts.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Example company"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "contact@example-company.com"
      },
      {
        "name": "website",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "http://example-company.com"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+33100000000"
      },
      {
        "name": "mobile_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+33600000000"
      },
      {
        "name": "fax_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+33100000000"
      },
      {
        "name": "legal_france",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "capital",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "4000"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CLI-1654"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "An handed-written note describing this company"
      },
      {
        "name": "auxiliary_code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "0EX11C"
      },
      {
        "name": "social",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "rate_category_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 9956
      },
      {
        "name": "accounting_code_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12345
      },
      {
        "name": "accounting_purchase_code_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 98556
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 112
      },
      {
        "name": "is_archived",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "business_segment",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "number_of_employees",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "marketing_campaigns_subscriptions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "created",
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/search",
    "method": "searchCompanies",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Search companies",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=invoicing_contact&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - main_contact, dunning_contact, invoicing_contact: `contacts.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/companies/favourite-filters",
    "method": "listFavouriteFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "List companies favourite filters",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/companies/{id}",
    "method": "removeCompany",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Delete company",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Company deleted"
      }
    ]
  },
  {
    "url": "/companies/{id}",
    "method": "getInformations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get Company",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=invoicing_contact&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - main_contact, dunning_contact, invoicing_contact: `contacts.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/companies/{id}",
    "method": "updateInformation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Update Company",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=invoicing_contact&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - main_contact, dunning_contact, invoicing_contact: `contacts.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Example company"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "contact@example-company.com"
      },
      {
        "name": "website",
        "schema": "string",
        "description": "",
        "example": "http://example-company.com"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": "",
        "example": "+33100000000"
      },
      {
        "name": "mobile_number",
        "schema": "string",
        "description": "",
        "example": "+33600000000"
      },
      {
        "name": "fax_number",
        "schema": "string",
        "description": "",
        "example": "+33100000000"
      },
      {
        "name": "legal_france",
        "schema": "object",
        "description": ""
      },
      {
        "name": "capital",
        "schema": "string",
        "description": "",
        "example": "4000"
      },
      {
        "name": "reference",
        "schema": "string",
        "description": "",
        "example": "CLI-1654"
      },
      {
        "name": "note",
        "schema": "string",
        "description": "",
        "example": "An handed-written note describing this company"
      },
      {
        "name": "auxiliary_code",
        "schema": "string",
        "description": "",
        "example": "0EX11C"
      },
      {
        "name": "social",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rate_category_id",
        "schema": "integer",
        "description": "",
        "example": 9956
      },
      {
        "name": "accounting_code_id",
        "schema": "integer",
        "description": "",
        "example": 12345
      },
      {
        "name": "accounting_purchase_code_id",
        "schema": "integer",
        "description": "",
        "example": 98556
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "description": "",
        "example": 112
      },
      {
        "name": "is_archived",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "business_segment",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "number_of_employees",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "marketing_campaigns_subscriptions",
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{companyId}/addresses",
    "method": "getAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get company addresses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{companyId}/addresses",
    "method": "addAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Create a company address",
    "parameters": [
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Main office"
      },
      {
        "name": "address_line_1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "30 Commercial Road"
      },
      {
        "name": "address_line_2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Finance and Accounting"
      },
      {
        "name": "address_line_3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Lighthouse Promotions"
      },
      {
        "name": "address_line_4",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO Box 215"
      },
      {
        "name": "postal_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "75012"
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Paris"
      },
      {
        "name": "country_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FR"
      },
      {
        "name": "is_invoicing_address",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_delivery_address",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "geocode",
        "schema": "object",
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{companyId}/addresses/{id}",
    "method": "deleteAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Delete a company address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Address deleted"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/addresses/{id}",
    "method": "getAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get a company address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{companyId}/addresses/{id}",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Update a company address",
    "parameters": [
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Main office"
      },
      {
        "name": "address_line_1",
        "schema": "string",
        "description": "",
        "example": "30 Commercial Road"
      },
      {
        "name": "address_line_2",
        "schema": "string",
        "description": "",
        "example": "Finance and Accounting"
      },
      {
        "name": "address_line_3",
        "schema": "string",
        "description": "",
        "example": "Lighthouse Promotions"
      },
      {
        "name": "address_line_4",
        "schema": "string",
        "description": "",
        "example": "PO Box 215"
      },
      {
        "name": "postal_code",
        "schema": "string",
        "description": "",
        "example": "75012"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "Paris"
      },
      {
        "name": "country_code",
        "schema": "string",
        "description": "",
        "example": "FR"
      },
      {
        "name": "is_invoicing_address",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_delivery_address",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "geocode",
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{id}/payments",
    "method": "recordPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Record payment on a company",
    "parameters": [
      {
        "name": "number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "reference"
      },
      {
        "name": "paid_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1970-01-01T00:00:00+00:00"
      },
      {
        "name": "payment_method_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 7
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "credit"
      },
      {
        "name": "amount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Invoice XXX paid"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{id}/contacts",
    "method": "getContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get a company contacts",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=delivery_address&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/companies/{companyId}/contacts/{contactId}",
    "method": "unlinkContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Unlink a contact of company",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Contact unlinked"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/contacts/{contactId}",
    "method": "linkContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Link a contact at one company",
    "parameters": [
      {
        "name": "roles",
        "schema": "array",
        "description": "",
        "example": [
          "main",
          "dunning"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact already linked"
      },
      {
        "statusCode": "201",
        "description": "Contact linked"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/contacts/{contactId}",
    "method": "updateContactOfCompanyLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Update a contact of company link",
    "parameters": [
      {
        "name": "roles",
        "schema": "array",
        "description": "",
        "example": [
          "main",
          "dunning"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact updated"
      }
    ]
  },
  {
    "url": "/companies/{id}/custom-fields",
    "method": "getCustomFieldsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Company custom fields List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/companies/{id}/custom-fields",
    "method": "updateCustomFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Update Company custom fields",
    "parameters": [
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Company's custom fields updated"
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{companyId}/smart-tags",
    "method": "getSmartTagsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Company smart tags List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{companyId}/smart-tags",
    "method": "linkSmartTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Link smart tags to company",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{companyId}/files",
    "method": "listFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "List directories and files of a company",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{companyId}/files",
    "method": "attachFileToCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Attach file to a company",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "File schema"
      }
    ]
  },
  {
    "url": "/contacts/{id}/companies",
    "method": "getCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Companies contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Contact id",
        "example": 0
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
    "url": "/smart-tags/{linkedtype}/autocomplete",
    "method": "autocompleteGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Smart Tags",
    "typeScriptTag": "smartTags",
    "description": "Smart tags autocomplete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/smart-tags/{id}",
    "method": "deleteSmartTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Smart Tags",
    "typeScriptTag": "smartTags",
    "description": "Delete a smart tags",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Smart tags deleted"
      }
    ]
  },
  {
    "url": "/custom-fields",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Custom Fields List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/custom-fields/{id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Get custom field",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/custom-fields/search",
    "method": "search",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Custom Fields Search",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/estimates",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Get all estimates",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=payment_method_ids&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - payment_method_ids: `payments.read`<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - contact: `contacts.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned <br/><br /> <strong>Aggregations on amounts only works in addition with the currency filter</strong>\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field\n> Value `numero` is deprecated and will be deleted on the July 1st 2022. Use `number` instead.",
        "example": "id"
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
    "url": "/estimates",
    "method": "createNewEstimate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Create estimate",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=payment_method_ids&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - payment_method_ids: `payments.read`<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - contact: `contacts.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned <br/><br /> <strong>Aggregations on amounts only works in addition with the currency filter</strong>\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/estimates/search",
    "method": "searchEstimates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Search estimates",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=payment_method_ids&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - payment_method_ids: `payments.read`<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - contact: `contacts.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned <br/><br /> <strong>Aggregations on amounts only works in addition with the currency filter</strong>\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field\n> Value `numero` is deprecated and will be deleted on the July 1st 2022. Use `number` instead.",
        "example": "id"
      },
      {
        "name": "filters",
        "schema": "object",
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
        "description": "Validation and logic errors"
      }
    ]
  },
  {
    "url": "/estimates/{id}/custom-fields",
    "method": "listCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Estimate custom fields List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/estimates/{id}/custom-fields",
    "method": "updateCustomFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Update Estimate custom fields",
    "parameters": [
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Estimate's custom fields updated"
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/estimates/favourite-filters",
    "method": "listFavouriteFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "List estimates favourite filters",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/estimates/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Get an estimate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Estimate no found"
      }
    ]
  },
  {
    "url": "/estimates/{id}",
    "method": "updateEstimate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Update estimate",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=payment_method_ids&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - payment_method_ids: `payments.read`<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - contact: `contacts.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned <br/><br /> <strong>Aggregations on amounts only works in addition with the currency filter</strong>\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/estimates/{id}/status",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Update estimate status",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=payment_method_ids&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - payment_method_ids: `payments.read`<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - contact: `contacts.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned <br/><br /> <strong>Aggregations on amounts only works in addition with the currency filter</strong>\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "sent"
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
    "url": "/estimates/compute",
    "method": "computeEstimate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Compute an estimate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/estimates/{documentId}/files",
    "method": "getFilesForEstimate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "List directories and files of an estimate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/estimates/{documentId}/files",
    "method": "attachFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Attach file to an estimate",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "File schema"
      }
    ]
  },
  {
    "url": "/estimates/{id}/payments",
    "method": "getPaymentsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Estimate payments list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/estimates/{documentId}/payments/{paymentId}",
    "method": "unlinkPayment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Unlink payment from estimate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Payment unlinked"
      }
    ]
  },
  {
    "url": "/estimates/{documentId}/payments/{paymentId}",
    "method": "linkPaymentToEstimate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Link payment to estimate",
    "parameters": [
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 123.45
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/estimates/{id}/smart-tags",
    "method": "getSmartTagsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Estimate smart-tags list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/estimates/{id}/smart-tags",
    "method": "linkSmartTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Link smart tags to estimate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/estimates/{estimateId}/primes/{primeId}",
    "method": "unlinkPrime",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Unlink a prime from an estimate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Prime unlinked"
      },
      {
        "statusCode": "403",
        "description": "Either primes on documents are not activated on your account or you don't have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "Requested prime was not applied on the document"
      }
    ]
  },
  {
    "url": "/estimates/{estimateId}/primes/{primeId}",
    "method": "linkPrimeToEstimate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Link prime to estimate",
    "parameters": [
      {
        "name": "quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12
      },
      {
        "name": "amount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12.34"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Prime linked"
      },
      {
        "statusCode": "403",
        "description": "Either primes on documents are not activated on your account or you don't have the required privileges"
      }
    ]
  },
  {
    "url": "/estimates/{estimateId}/discount-incl-taxes/{discountId}",
    "method": "unlinkDiscountInclTaxes",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Unlink a discount including taxes from an estimate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Discount unlinked"
      },
      {
        "statusCode": "403",
        "description": "Either Discounts on documents are not activated on your account or you don't have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "Requested discount was not applied on the document"
      }
    ]
  },
  {
    "url": "/estimates/{estimateId}/discount-incl-taxes/{discountId}",
    "method": "linkDiscountIncludingTaxes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Estimates",
    "typeScriptTag": "estimates",
    "description": "Link discount including taxes to estimate",
    "parameters": [
      {
        "name": "quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12
      },
      {
        "name": "amount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12.34"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Discount linked"
      },
      {
        "statusCode": "403",
        "description": "Either discounts on documents are not activated on your account or you don't have the required privileges"
      }
    ]
  },
  {
    "url": "/orders",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get all orders",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order field",
        "example": "id"
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
    "url": "/orders",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Create an order",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/compute",
    "method": "calculateOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Compute an order",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get order",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Update an order",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/search",
    "method": "searchOrders",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Search orders",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order field",
        "example": "id"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/orders/{id}/payments",
    "method": "getPaymentsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Order payments list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{id}/smart-tags",
    "method": "listSmartTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Order smart tags List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{id}/smart-tags",
    "method": "linkSmartTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Link smart tags to an order",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{id}/custom-fields",
    "method": "getCustomFieldsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Order custom fields List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/orders/{id}/custom-fields",
    "method": "updateCustomFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Update Order custom fields",
    "parameters": [
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Order's custom fields updated"
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/favourite-filters",
    "method": "listFavouriteFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "List orders favourite filters",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/orders/{documentId}/payments/{paymentId}",
    "method": "unlinkPayment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Unlink payment from order",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Payment unlinked"
      }
    ]
  },
  {
    "url": "/orders/{documentId}/payments/{paymentId}",
    "method": "linkPaymentToOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Link payment to order",
    "parameters": [
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 123.45
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{documentId}/files",
    "method": "listFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "List directories and files of an orders",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{documentId}/files",
    "method": "attachFileToOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Attach file to an order",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "File schema"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/primes/{primeId}",
    "method": "unlinkPrime",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Unlink a prime from an order",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Prime unlinked"
      },
      {
        "statusCode": "403",
        "description": "Either primes on documents are not activated on your account or you don't have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "Requested prime was not applied on the document"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/primes/{primeId}",
    "method": "linkPrimeToOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Link prime to order",
    "parameters": [
      {
        "name": "quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12
      },
      {
        "name": "amount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12.34"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Prime linked"
      },
      {
        "statusCode": "403",
        "description": "Either primes on documents are not activated on your account or you don't have the required privileges"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/discount-incl-taxes/{discountId}",
    "method": "unlinkDiscountInclTaxes",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Unlink a discount including taxes from an order",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Discount unlinked"
      },
      {
        "statusCode": "403",
        "description": "Either discounts on documents are not activated on your account or you don't have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "Requested discount was not applied on the document"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/discount-incl-taxes/{discountId}",
    "method": "linkDiscountInclTaxes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Link discount including taxes to order",
    "parameters": [
      {
        "name": "quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12
      },
      {
        "name": "amount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12.34"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Discount linked"
      },
      {
        "statusCode": "403",
        "description": "Either discounts on documents are not activated on your account or you don't have the required privileges"
      }
    ]
  },
  {
    "url": "/individuals",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Individuals List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=invoicing_address&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - main_contact, dunning_contact, invoicing_contact: `contacts.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/individuals",
    "method": "createNewIndividual",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Create an individual",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=invoicing_address&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - main_contact, dunning_contact, invoicing_contact: `contacts.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Martin"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Jean"
      },
      {
        "name": "civility",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "mr"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "jean.martin@personal-example.com"
      },
      {
        "name": "website",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "http://personal-example.com"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+33100000000"
      },
      {
        "name": "mobile_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+33600000000"
      },
      {
        "name": "fax_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+33100000000"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "IND-1654"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "An handed-written note describing this company"
      },
      {
        "name": "auxiliary_code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "0EX11C"
      },
      {
        "name": "social",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "rate_category_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 9956
      },
      {
        "name": "accounting_code_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12345
      },
      {
        "name": "accounting_purchase_code_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 98556
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 112
      },
      {
        "name": "is_archived",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "marketing_campaigns_subscriptions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sync",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "created",
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/individuals/search",
    "method": "searchResults",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Search individuals",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=invoicing_address&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - main_contact, dunning_contact, invoicing_contact: `contacts.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/individuals/favourite-filters",
    "method": "listFavouriteFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "List individuals favourite filters",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/individuals/{individualId}/files",
    "method": "listFilesOfIndividual",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "List directories and files of an individual",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/individuals/{individualId}/files",
    "method": "attachFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Attach file to an individual",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "File schema"
      }
    ]
  },
  {
    "url": "/individuals/{id}/smart-tags",
    "method": "getSmartTagsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Individual smart tags List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/individuals/{id}/smart-tags",
    "method": "linkSmartTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Link smart tags to individual",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/individuals/{id}",
    "method": "removeIndividual",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Delete Individual",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Individual deleted"
      }
    ]
  },
  {
    "url": "/individuals/{id}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Get Individual",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=invoicing_address&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - main_contact, dunning_contact, invoicing_contact: `contacts.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/individuals/{id}",
    "method": "updateInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Update Individual",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=invoicing_address&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - main_contact, dunning_contact, invoicing_contact: `contacts.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": "",
        "example": "Martin"
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": "",
        "example": "Jean"
      },
      {
        "name": "civility",
        "schema": "string",
        "description": "",
        "example": "mr"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "jean.martin@personal-example.com"
      },
      {
        "name": "website",
        "schema": "string",
        "description": "",
        "example": "http://personal-example.com"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": "",
        "example": "+33100000000"
      },
      {
        "name": "mobile_number",
        "schema": "string",
        "description": "",
        "example": "+33600000000"
      },
      {
        "name": "fax_number",
        "schema": "string",
        "description": "",
        "example": "+33100000000"
      },
      {
        "name": "reference",
        "schema": "string",
        "description": "",
        "example": "IND-1654"
      },
      {
        "name": "note",
        "schema": "string",
        "description": "",
        "example": "An handed-written note describing this company"
      },
      {
        "name": "auxiliary_code",
        "schema": "string",
        "description": "",
        "example": "0EX11C"
      },
      {
        "name": "social",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rate_category_id",
        "schema": "integer",
        "description": "",
        "example": 9956
      },
      {
        "name": "accounting_code_id",
        "schema": "integer",
        "description": "",
        "example": 12345
      },
      {
        "name": "accounting_purchase_code_id",
        "schema": "integer",
        "description": "",
        "example": 98556
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "description": "",
        "example": 112
      },
      {
        "name": "is_archived",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "marketing_campaigns_subscriptions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sync",
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/individuals/{individualId}/addresses",
    "method": "getAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Get individual addresses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/individuals/{individualId}/addresses",
    "method": "createAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Create an individual address",
    "parameters": [
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Main office"
      },
      {
        "name": "address_line_1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "30 Commercial Road"
      },
      {
        "name": "address_line_2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Finance and Accounting"
      },
      {
        "name": "address_line_3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Lighthouse Promotions"
      },
      {
        "name": "address_line_4",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO Box 215"
      },
      {
        "name": "postal_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "75012"
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Paris"
      },
      {
        "name": "country_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FR"
      },
      {
        "name": "is_invoicing_address",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_delivery_address",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "geocode",
        "schema": "object",
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/individuals/{individualId}/addresses/{id}",
    "method": "deleteAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Delete an individual address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Address deleted"
      }
    ]
  },
  {
    "url": "/individuals/{individualId}/addresses/{id}",
    "method": "getAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Get an individual address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/individuals/{individualId}/addresses/{id}",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Update an individual address",
    "parameters": [
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Main office"
      },
      {
        "name": "address_line_1",
        "schema": "string",
        "description": "",
        "example": "30 Commercial Road"
      },
      {
        "name": "address_line_2",
        "schema": "string",
        "description": "",
        "example": "Finance and Accounting"
      },
      {
        "name": "address_line_3",
        "schema": "string",
        "description": "",
        "example": "Lighthouse Promotions"
      },
      {
        "name": "address_line_4",
        "schema": "string",
        "description": "",
        "example": "PO Box 215"
      },
      {
        "name": "postal_code",
        "schema": "string",
        "description": "",
        "example": "75012"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "Paris"
      },
      {
        "name": "country_code",
        "schema": "string",
        "description": "",
        "example": "FR"
      },
      {
        "name": "is_invoicing_address",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_delivery_address",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "geocode",
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
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/individuals/{id}/payments",
    "method": "recordPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Record payment on an individual",
    "parameters": [
      {
        "name": "number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "reference"
      },
      {
        "name": "paid_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1970-01-01T00:00:00+00:00"
      },
      {
        "name": "payment_method_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 7
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "credit"
      },
      {
        "name": "amount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Invoice XXX paid"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/individuals/{id}/contacts",
    "method": "getContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Get an individual contacts",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=delivery_address&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/individuals/{individualId}/contacts/{contactId}",
    "method": "deleteLinkBetweenContactAndIndividual",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Delete link between contact and individual",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Delete link between contact and individual"
      }
    ]
  },
  {
    "url": "/individuals/{individualId}/contacts/{contactId}",
    "method": "linkContactToIndividual",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Link contact to individual",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact already link"
      },
      {
        "statusCode": "201",
        "description": "Contact was link to individual"
      }
    ]
  },
  {
    "url": "/individuals/{id}/custom-fields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Individual custom fields List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/individuals/{id}/custom-fields",
    "method": "updateCustomFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Update Individual custom fields",
    "parameters": [
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Individual's custom fields updated"
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/activities/crm",
    "method": "getActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CRM Activities",
    "typeScriptTag": "crmActivities",
    "description": "Get the CRM activity",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "date"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result. <br/> <strong>Aggregations by date only works with due_date filter : </strong> <br/> - For aggregations.by_day_and_event, maximum interval of due_date is 90 days <br/> - For aggregations.by_month_and_event, maximum interval of due_date is 365 days"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/activities/crm/search",
    "method": "searchActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CRM Activities",
    "typeScriptTag": "crmActivities",
    "description": "Search in CRM activity",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "date"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result. <br/> <strong>Aggregations by date only works with due_date filter : </strong> <br/> - For aggregations.by_day_and_event, maximum interval of due_date is 90 days <br/> - For aggregations.by_month_and_event, maximum interval of due_date is 365 days"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
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
        "statusCode": "206",
        "description": ""
      }
    ]
  },
  {
    "url": "/activities/crm/export",
    "method": "exportActivitySearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CRM Activities",
    "typeScriptTag": "crmActivities",
    "description": "Export the CRM activity",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "date"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      }
    ]
  },
  {
    "url": "/activities/crm/metas",
    "method": "getMetaInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CRM Activities",
    "typeScriptTag": "crmActivities",
    "description": "Get meta informations for activity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The listing meta"
      }
    ]
  },
  {
    "url": "/custom-activities/{id}",
    "method": "deleteCustomActivity",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Activities",
    "typeScriptTag": "customActivities",
    "description": "Delete Custom Activity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/custom-activities/{id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Activities",
    "typeScriptTag": "customActivities",
    "description": "Get Custom Activity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Custom Activity Object"
      }
    ]
  },
  {
    "url": "/custom-activities/{id}",
    "method": "editCustomActivity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Activities",
    "typeScriptTag": "customActivities",
    "description": "Update Custom Activity",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "xZk348lb2"
      },
      {
        "name": "type_id",
        "schema": "string",
        "description": "",
        "example": "vJ340fF1"
      },
      {
        "name": "action",
        "schema": "string",
        "description": "",
        "example": "Jean-pierre has opened a new ticket on Xeno."
      },
      {
        "name": "relation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": "",
        "example": "1970-01-01T00:00:00+00:00",
        "default": "Current datetime"
      },
      {
        "name": "author",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "1970-01-01T00:00:00+00:00"
      },
      {
        "name": "updated",
        "schema": "string",
        "description": "",
        "example": "1970-01-01T00:00:00+00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Custom Activity Object"
      }
    ]
  },
  {
    "url": "/custom-activities",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Activities",
    "typeScriptTag": "customActivities",
    "description": "Customs Activities List",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "date"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
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
    "url": "/custom-activities",
    "method": "createActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Activities",
    "typeScriptTag": "customActivities",
    "description": "Create Custom Activity",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "xZk348lb2"
      },
      {
        "name": "type_id",
        "schema": "string",
        "description": "",
        "example": "vJ340fF1"
      },
      {
        "name": "action",
        "schema": "string",
        "description": "",
        "example": "Jean-pierre has opened a new ticket on Xeno."
      },
      {
        "name": "relation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": "",
        "example": "1970-01-01T00:00:00+00:00",
        "default": "Current datetime"
      },
      {
        "name": "author",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": "",
        "example": "1970-01-01T00:00:00+00:00"
      },
      {
        "name": "updated",
        "schema": "string",
        "description": "",
        "example": "1970-01-01T00:00:00+00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Custom Activity Object"
      }
    ]
  },
  {
    "url": "/custom-activities/search",
    "method": "performSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Activities",
    "typeScriptTag": "customActivities",
    "description": "Search Custom Activities",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/custom-activity-types/{id}",
    "method": "getType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Activities",
    "typeScriptTag": "customActivities",
    "description": "Get Custom Activity Type",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a type of custom activity"
      }
    ]
  },
  {
    "url": "/custom-activity-types/{id}",
    "method": "updateType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Activities",
    "typeScriptTag": "customActivities",
    "description": "Update Custom Activity Type",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "xZk348lb2"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Xeni"
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1970-01-01T00:00:00+00:00"
      },
      {
        "name": "updated",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1970-01-01T00:00:00+00:00"
      },
      {
        "name": "author",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a type of custom activity"
      }
    ]
  },
  {
    "url": "/custom-activity-types",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Activities",
    "typeScriptTag": "customActivities",
    "description": "Custom Activity Types List",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
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
    "url": "/custom-activity-types",
    "method": "createType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Activities",
    "typeScriptTag": "customActivities",
    "description": "Create Custom Activity Type",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "xZk348lb2"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Xeni"
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1970-01-01T00:00:00+00:00"
      },
      {
        "name": "updated",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1970-01-01T00:00:00+00:00"
      },
      {
        "name": "author",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Represents a type of custom activity"
      }
    ]
  },
  {
    "url": "/scopes",
    "method": "listScopes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Management",
    "typeScriptTag": "apiManagement",
    "description": "Scopes List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/scopes/tree",
    "method": "getScopesTree",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Management",
    "typeScriptTag": "apiManagement",
    "description": "Get Scopes Tree",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/clients",
    "method": "listClients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Management",
    "typeScriptTag": "apiManagement",
    "description": "List OAuth clients",
    "parameters": [
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
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
    "url": "/clients",
    "method": "createOAuthClient",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Management",
    "typeScriptTag": "apiManagement",
    "description": "Create OAuth client",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/clients/{id}",
    "method": "deleteOAuthClient",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Management",
    "typeScriptTag": "apiManagement",
    "description": "Delete OAuth client",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Client deleted"
      }
    ]
  },
  {
    "url": "/clients/{id}",
    "method": "getOAuthClient",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Management",
    "typeScriptTag": "apiManagement",
    "description": "Get OAuth client",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The OAuth client for Sellsy API"
      }
    ]
  },
  {
    "url": "/clients/{id}",
    "method": "updateOAuthClient",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Management",
    "typeScriptTag": "apiManagement",
    "description": "Update OAuth client",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The OAuth client for Sellsy API"
      }
    ]
  },
  {
    "url": "/personal-access-tokens",
    "method": "listPersonalAccessTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Management",
    "typeScriptTag": "apiManagement",
    "description": "List personal access tokens",
    "parameters": [
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
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
    "url": "/personal-access-tokens",
    "method": "createPersonalAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Management",
    "typeScriptTag": "apiManagement",
    "description": "Create personal access token",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MyToken"
      },
      {
        "name": "user_id",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": 1257
      },
      {
        "name": "scopes",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "companies.read",
          "companies.write"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/personal-access-tokens/metas",
    "method": "getPersonalAccessTokensMeta",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Management",
    "typeScriptTag": "apiManagement",
    "description": "Get meta informations for personal access tokens",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The personal access tokens metas"
      }
    ]
  },
  {
    "url": "/personal-access-tokens/{id}",
    "method": "deletePersonalAccessToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Management",
    "typeScriptTag": "apiManagement",
    "description": "Delete personal access token",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Personal access token deleted"
      }
    ]
  },
  {
    "url": "/personal-access-tokens/{id}",
    "method": "getOAuthToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Management",
    "typeScriptTag": "apiManagement",
    "description": "Get personal access token",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounting-codes",
    "method": "getCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Get accounting codes",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "code"
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
    "url": "/accounting-codes",
    "method": "createCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Create an accounting code",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "411000"
      },
      {
        "name": "label",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Provision of services"
      },
      {
        "name": "views",
        "schema": "array",
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
        "description": "Code already exists"
      },
      {
        "statusCode": "403",
        "description": "Module is not accessible"
      }
    ]
  },
  {
    "url": "/accounting-codes/{id}",
    "method": "deleteCode",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Delete an accounting code",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Accounting code deleted"
      },
      {
        "statusCode": "403",
        "description": "Module is not accessible"
      }
    ]
  },
  {
    "url": "/accounting-codes/search",
    "method": "searchCodes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Search accounting codes",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "code"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/accounting-journal/{type}",
    "method": "journalList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Get accounting journal",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result. <br/> <strong>Aggregations by date only works with due_date filter : </strong> <br/> - For aggregations.by_day_and_event, maximum interval of due_date is 90 days <br/> - For aggregations.by_month_and_event, maximum interval of due_date is 365 days"
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
    "url": "/accounting-journal/{type}/search",
    "method": "journalSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Search accounting journal",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result. <br/> <strong>Aggregations by date only works with due_date filter : </strong> <br/> - For aggregations.by_day_and_event, maximum interval of due_date is 90 days <br/> - For aggregations.by_month_and_event, maximum interval of due_date is 365 days"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/accounting-journal/{type}/metas",
    "method": "journalMetaGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Get meta informations for accounting journal",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The listing meta"
      }
    ]
  },
  {
    "url": "/accounting-journal/{type}/export",
    "method": "journalExport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounting",
    "typeScriptTag": "accounting",
    "description": "Export accounting journal",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      }
    ]
  },
  {
    "url": "/taxes",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Taxes list",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.\n"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "includeEcotax",
        "schema": "boolean",
        "description": "Include ecotaxes in the response"
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
    "url": "/taxes",
    "method": "createTax",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Create tax",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "rate",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 20
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TVA"
      },
      {
        "name": "before_sibling",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 57
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/taxes/search",
    "method": "searchTaxes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Search taxes",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.\n"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
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
    "url": "/taxes/{id}",
    "method": "removeTax",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Delete tax",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Tax deleted"
      }
    ]
  },
  {
    "url": "/taxes/{id}",
    "method": "getTaxInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Get Tax",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "includeEcotax",
        "schema": "boolean",
        "description": "Include ecotaxes in the response"
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
    "url": "/taxes/{id}",
    "method": "updateTaxInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Update tax",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "includeEcotax",
        "schema": "boolean",
        "description": "Include ecotaxes in the response"
      },
      {
        "name": "rate",
        "schema": "number",
        "description": "",
        "example": 20
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "TVA"
      },
      {
        "name": "before_sibling",
        "schema": "integer",
        "description": "",
        "example": 57
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
    "url": "/taxes/accounting-codes",
    "method": "getAccountingCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Taxes accounting codes list",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.\n"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/taxes/{id}/accounting-codes",
    "method": "getAccountingCodesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Tax accounting codes list",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.\n"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/taxes/{id}/accounting-codes",
    "method": "updateAccountingCodes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Taxes",
    "typeScriptTag": "taxes",
    "description": "Update tax accounting codes",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "debit_vat",
        "schema": "object",
        "description": ""
      },
      {
        "name": "collection_vat",
        "schema": "object",
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
    "url": "/rate-categories",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rate Categories",
    "typeScriptTag": "rateCategories",
    "description": "Rate categories list",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.\n"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/rate-categories",
    "method": "createCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rate Categories",
    "typeScriptTag": "rateCategories",
    "description": "Create rate category",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Tarif HT"
      },
      {
        "name": "includes_taxes",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "EUR"
      },
      {
        "name": "tax_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3822666
      },
      {
        "name": "accounting_code_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1160745
      },
      {
        "name": "discount_accounting_code_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1160745
      },
      {
        "name": "default_layouts",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "price",
        "schema": "undefined",
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
        "statusCode": "402",
        "description": "Quotas limit reached on your current plan"
      }
    ]
  },
  {
    "url": "/rate-categories/{id}",
    "method": "removeCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Rate Categories",
    "typeScriptTag": "rateCategories",
    "description": "Delete Rate category",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Rate category deleted"
      }
    ]
  },
  {
    "url": "/rate-categories/{id}",
    "method": "getCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rate Categories",
    "typeScriptTag": "rateCategories",
    "description": "Get rate category",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/rate-categories/{id}",
    "method": "updateRateCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Rate Categories",
    "typeScriptTag": "rateCategories",
    "description": "Update a rate category",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Tarif HT"
      },
      {
        "name": "includes_taxes",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "EUR"
      },
      {
        "name": "tax_id",
        "schema": "integer",
        "description": "",
        "example": 3822666
      },
      {
        "name": "accounting_code_id",
        "schema": "integer",
        "description": "",
        "example": 1160745
      },
      {
        "name": "discount_accounting_code_id",
        "schema": "integer",
        "description": "",
        "example": 1160745
      },
      {
        "name": "default_layouts",
        "schema": "object",
        "description": ""
      },
      {
        "name": "price",
        "schema": "undefined",
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
    "url": "/payments/methods/{id}",
    "method": "getMethod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get the payment method",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment method id",
        "example": "ID"
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
    "url": "/payments/methods",
    "method": "getMethods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "List of all payment methods",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "rank"
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
    "url": "/payments/methods/search",
    "method": "searchMethods",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Search methods of payment",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "rank"
      },
      {
        "name": "filters",
        "schema": "object",
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
    "url": "/ocr/pur-invoice",
    "method": "listPurchaseInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purchase (https://api.sellsy.com/doc/v2/",
    "typeScriptTag": "purchaseHttps:ApiSellsyComDocV2",
    "description": "Ocr List - Purchase invoices",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "completed_at"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
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
    "url": "/ocr/pur-invoice/search",
    "method": "searchDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Purchase (https://api.sellsy.com/doc/v2/",
    "typeScriptTag": "purchaseHttps:ApiSellsyComDocV2",
    "description": "Search OCR - Purchase invoices",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "completed_at"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "filters",
        "schema": "object",
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
    "url": "/ocr/pur-invoice/metas",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purchase (https://api.sellsy.com/doc/v2/",
    "typeScriptTag": "purchaseHttps:ApiSellsyComDocV2",
    "description": "Get Metadata for purchase invoice OCR",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Contacts List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=delivery_address&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/contacts",
    "method": "createContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create a contact",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=delivery_address&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/search",
    "method": "searchContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Search contacts",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=delivery_address&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/contacts/favourite-filters",
    "method": "listFavouriteFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List contacts favourite filters",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/contacts/{id}",
    "method": "removeContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete contact",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Contact deleted"
      }
    ]
  },
  {
    "url": "/contacts/{id}",
    "method": "getInformations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get contact",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=delivery_address&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/contacts/{id}",
    "method": "updateContactInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update contact",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=delivery_address&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities: `opportunities.read`<br /> - estimates,invoices,orders,deliveries: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/addresses",
    "method": "getAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get contact addresses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/addresses",
    "method": "createAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create a contact address",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Main office"
      },
      {
        "name": "address_line_1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "30 Commercial Road"
      },
      {
        "name": "address_line_2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Finance and Accounting"
      },
      {
        "name": "address_line_3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Lighthouse Promotions"
      },
      {
        "name": "address_line_4",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PO Box 215"
      },
      {
        "name": "postal_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "75012"
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Paris"
      },
      {
        "name": "country_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FR"
      },
      {
        "name": "is_invoicing_address",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_delivery_address",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "geocode",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/addresses/{id}",
    "method": "deleteAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete a contact address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Address deleted"
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/addresses/{id}",
    "method": "getAddressById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get a contact address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/addresses/{id}",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update a contact address",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Main office"
      },
      {
        "name": "address_line_1",
        "schema": "string",
        "description": "",
        "example": "30 Commercial Road"
      },
      {
        "name": "address_line_2",
        "schema": "string",
        "description": "",
        "example": "Finance and Accounting"
      },
      {
        "name": "address_line_3",
        "schema": "string",
        "description": "",
        "example": "Lighthouse Promotions"
      },
      {
        "name": "address_line_4",
        "schema": "string",
        "description": "",
        "example": "PO Box 215"
      },
      {
        "name": "postal_code",
        "schema": "string",
        "description": "",
        "example": "75012"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "Paris"
      },
      {
        "name": "country_code",
        "schema": "string",
        "description": "",
        "example": "FR"
      },
      {
        "name": "is_invoicing_address",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_delivery_address",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "geocode",
        "schema": "object",
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
    "url": "/contacts/{contactId}/custom-fields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Contact custom fields List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/contacts/{contactId}/custom-fields",
    "method": "updateCustomFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update contact custom fields",
    "parameters": [
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact's custom fields updated"
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/files",
    "method": "listDirectoriesAndFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List directories and files of a contact",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/files",
    "method": "attachFileToContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Attach file to a contact",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "File uploaded"
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/smart-tags",
    "method": "getSmartTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Contact smart tags List",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/smart-tags",
    "method": "linkSmartTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Link smart tags to contact",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/conformities",
    "method": "getInvoicingState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conformities",
    "typeScriptTag": "conformities",
    "description": "Retrieve invoicing conformity state",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Invoice conformity state informations"
      }
    ]
  },
  {
    "url": "/accounts/conformities",
    "method": "activateInvoiceConformity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conformities",
    "typeScriptTag": "conformities",
    "description": "Activate invoice conformity (https://api.sellsy.com/doc/v2/",
    "parameters": [
      {
        "name": "confirm_final_change",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Invoice conformity state informations"
      },
      {
        "statusCode": "403",
        "description": "Conformity has already been activated"
      }
    ]
  },
  {
    "url": "/document-layouts",
    "method": "getAllLayouts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document Layouts",
    "typeScriptTag": "documentLayouts",
    "description": "Get all document layouts",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
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
    "url": "/accounts/documents",
    "method": "getInvoicesAndCreditNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Get your invoices and credit notes",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "date"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
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
    "url": "/opportunities/{id}",
    "method": "removeOpportunity",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Delete an Opportunity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Opportunity deleted"
      }
    ]
  },
  {
    "url": "/opportunities/{id}",
    "method": "getOpportunity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Get Opportunity",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=assigned_staffs&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - assigned_staffs: `staffs.read`<br /> - contacts: `contacts.read`<br /> - estimates, invoices, orders, deliveries, proformas, creditnotes: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describe opportunity object"
      }
    ]
  },
  {
    "url": "/opportunities/{id}",
    "method": "updateInformation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Update Opportunity",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=assigned_staffs&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - assigned_staffs: `staffs.read`<br /> - contacts: `contacts.read`<br /> - estimates, invoices, orders, deliveries, proformas, creditnotes: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "New website"
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "won",
        "default": "open"
      },
      {
        "name": "pipeline",
        "schema": "integer",
        "description": "",
        "example": 9763
      },
      {
        "name": "step",
        "schema": "integer",
        "description": "",
        "example": 299
      },
      {
        "name": "amount",
        "schema": "string",
        "description": "",
        "example": "72000.99"
      },
      {
        "name": "probability",
        "schema": "integer",
        "description": "",
        "example": 75
      },
      {
        "name": "source",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "due_date",
        "schema": "string",
        "description": "",
        "example": "2020-02-01"
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "main_doc_id",
        "schema": "integer",
        "description": "",
        "example": 22
      },
      {
        "name": "assigned_staff_ids",
        "schema": "array",
        "description": "",
        "example": [
          133,
          299
        ]
      },
      {
        "name": "contact_ids",
        "schema": "array",
        "description": "",
        "example": [
          222,
          876
        ]
      },
      {
        "name": "related",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describe opportunity object"
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities/{id}/step-rank",
    "method": "updateRankStep",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Update opportunity's rank and/or step",
    "parameters": [
      {
        "name": "before_sibling",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 57
      },
      {
        "name": "step",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 299
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Opportunity's rank updated"
      }
    ]
  },
  {
    "url": "/opportunities",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Get Opportunities",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - assigned_staffs: `staffs.read`<br /> - contacts: `contacts.read`<br /> - estimates, invoices, orders, deliveries, proformas, creditnotes: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
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
    "url": "/opportunities",
    "method": "createNewOpportunity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Create an opportunity",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Example : `embed[]=assigned_staffs&embed[]=cf.1542&embed[]=acl` <br /> Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - assigned_staffs: `staffs.read`<br /> - contacts: `contacts.read`<br /> - estimates, invoices, orders, deliveries, proformas, creditnotes: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Describe opportunity object"
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities/{opportunityId}/files",
    "method": "listFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "List directories and files of an opportunity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities/{opportunityId}/files",
    "method": "attachFileToOpportunity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Attach file to an opportunity",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "File schema"
      }
    ]
  },
  {
    "url": "/opportunities/search",
    "method": "searchOpportunities",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Search Opportunities",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - assigned_staffs: `staffs.read`<br /> - contacts: `contacts.read`<br /> - estimates, invoices, orders, deliveries, proformas, creditnotes: `invoicing.read`<br /> - cf.{custom_field_id} : `custom-fields.read` <br /> - smart_tags: `smart-tags.read`<br /> Additionnally, the smart_tags embed is limited to the 20 first results sorted in alphabetical order. <br />\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/opportunities/favourite-filters",
    "method": "listFavouriteFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "List opportunities favourite filters",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/opportunities/sources",
    "method": "getSourcesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Get Opportunity Sources",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id",
        "default": "rank"
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
    "url": "/opportunities/sources/search",
    "method": "searchSources",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Search Opportunity Sources",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id",
        "default": "rank"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/opportunities/categories/{sourceCategoryId}/sources",
    "method": "listCategorySources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Get Opportunity Category Sources",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id",
        "default": "rank"
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
    "url": "/opportunities/pipelines",
    "method": "listPipelines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Get Opportunity Pipelines",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id",
        "default": "rank"
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
    "url": "/opportunities/pipelines/search",
    "method": "searchPipelines",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Search Opportunity Pipelines",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id",
        "default": "rank"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/opportunities/pipelines/{pipelineId}/steps",
    "method": "getPipelineSteps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Get Opportunity Pipeline Steps",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id",
        "default": "rank"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities_number: `opportunities.read`\n"
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
    "url": "/opportunities/pipelines/{pipelineId}/steps/search",
    "method": "searchPipelineSteps",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Search Opportunity Pipeline Steps",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id",
        "default": "rank"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities_number: `opportunities.read`\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/opportunities/steps/search",
    "method": "searchPipelineSteps",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Search All Opportunity Pipeline Steps",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id",
        "default": "rank"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - opportunities_number: `opportunities.read`\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/opportunities/categories",
    "method": "listCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Get Opportunities Categories List",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result"
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
    "url": "/opportunities/categories/{id}",
    "method": "getCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Get Opportunities Category",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Opportunities Category"
      }
    ]
  },
  {
    "url": "/opportunities/{id}/custom-fields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Opportunity custom fields List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/opportunities/{id}/custom-fields",
    "method": "updateCustomFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Update opportunity custom fields",
    "parameters": [
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Opportunity's custom fields updated"
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities/{id}/smart-tags",
    "method": "getSmartTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Opportunity smart-tags list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities/{id}/smart-tags",
    "method": "linkSmartTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Link smart tags to opportunity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks/{id}",
    "method": "removeTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Delete a task",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Task deleted"
      }
    ]
  },
  {
    "url": "/tasks/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get a task",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner, assigned_staffs: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
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
    "url": "/tasks/{id}",
    "method": "updateTaskById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Update a task",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner, assigned_staffs: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Meeting"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Monthly meeting with consulting team"
      },
      {
        "name": "is_private",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "due_date",
        "schema": "string",
        "description": "",
        "example": "2020-01-01T00:00:00+01:00"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "todo"
      },
      {
        "name": "assigned_staff_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "label_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "related",
        "schema": "array",
        "description": ""
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
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
    "url": "/tasks",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Tasks List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner, assigned_staffs: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/tasks",
    "method": "createTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Create a task",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner, assigned_staffs: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks/search",
    "method": "searchTasks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Search Tasks",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner, assigned_staffs: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/tasks/labels",
    "method": "getLabels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get tasks labels",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "rank"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/calendar-events/labels",
    "method": "getLabels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Get calendar events labels",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "rank"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/staffs/{id}",
    "method": "getStaff",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Staffs",
    "typeScriptTag": "staffs",
    "description": "Get Staff",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> If current user visibility on staffs is restricted, embed will not be available.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - licenses: `accounts.read`<br /> - profile: `staffs.read`<br /> - account: `staffs.read`<br /> - user: `staffs.read`<br /> - subscriptions: `accounts.read`<br /> - features: `accounts.read`\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Staff not found. Depending on your subscription plan"
      }
    ]
  },
  {
    "url": "/staffs/{id}",
    "method": "updateInformation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Staffs",
    "typeScriptTag": "staffs",
    "description": "Update Staff",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> If current user visibility on staffs is restricted, embed will not be available.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - licenses: `accounts.read`\n"
      },
      {
        "name": "lastname",
        "schema": "string",
        "description": "",
        "example": "Smith"
      },
      {
        "name": "firstname",
        "schema": "string",
        "description": "",
        "example": "John"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "john@example-company.com"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": "",
        "example": "+33100000000"
      },
      {
        "name": "mobile_number",
        "schema": "string",
        "description": "",
        "example": "+33600000000"
      },
      {
        "name": "fax_number",
        "schema": "string",
        "description": "",
        "example": "+33500000000"
      },
      {
        "name": "civility",
        "schema": "string",
        "description": "",
        "example": "mrs"
      },
      {
        "name": "position",
        "schema": "string",
        "description": "",
        "example": "Sales manager"
      },
      {
        "name": "profile",
        "schema": "integer",
        "description": "",
        "example": 3443
      },
      {
        "name": "team",
        "schema": "integer",
        "description": "",
        "example": -1
      },
      {
        "name": "job",
        "schema": "integer",
        "description": "",
        "example": -1
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "Europe/Paris"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "fr"
      },
      {
        "name": "licenses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "description": "",
        "example": true
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
    "url": "/staffs",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Staffs",
    "typeScriptTag": "staffs",
    "description": "Get Staffs",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> If current user visibility on staffs is restricted, embed will not be available.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - licenses: `accounts.read`\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Field on which to sort the data",
        "example": "id"
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
    "url": "/staffs",
    "method": "createStaff",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Staffs",
    "typeScriptTag": "staffs",
    "description": "Create a staff",
    "parameters": [
      {
        "name": "lastname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Smith"
      },
      {
        "name": "firstname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "John"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "john@example-company.com"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+33100000000"
      },
      {
        "name": "mobile_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+33600000000"
      },
      {
        "name": "fax_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+33500000000"
      },
      {
        "name": "civility",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "mrs"
      },
      {
        "name": "position",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Sales manager"
      },
      {
        "name": "profile",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 3443
      },
      {
        "name": "team",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": -1
      },
      {
        "name": "job",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": -1
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Europe/Paris"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "fr"
      },
      {
        "name": "first_connection_onboarding",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "licenses",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/staffs/search",
    "method": "searchList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Staffs",
    "typeScriptTag": "staffs",
    "description": "Search Staffs",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> If current user visibility on staffs is restricted, embed will not be available.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - licenses: `accounts.read`\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Field on which to sort the data",
        "example": "id"
      },
      {
        "name": "filters",
        "schema": "object",
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
    "url": "/teams",
    "method": "listTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Staffs",
    "typeScriptTag": "staffs",
    "description": "Team List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
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
    "url": "/profiles",
    "method": "getProfilesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Staffs",
    "typeScriptTag": "staffs",
    "description": "Profiles list",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
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
    "url": "/files/{id}",
    "method": "removeFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Delete file",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "File deleted"
      }
    ]
  },
  {
    "url": "/files/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get file",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "File schema"
      }
    ]
  },
  {
    "url": "/files/{id}",
    "method": "moveFileToDirectory",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Move a file to a new directory",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "opportunity"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "File moved"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      }
    ]
  },
  {
    "url": "/search",
    "method": "searchObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Listings",
    "typeScriptTag": "listings",
    "description": "Search",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": true,
        "description": "The search field",
        "example": "John"
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Filter search by object type or subtype.\n- `ex with types: type[]=contact&type[]=company`\n- `ex with subtypes: type[]=company.client&type[]=item.product`\n- `ex with both: type[]=company&type[]=item.product`\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit. On a default search (without the `type` parameter), the limit parameter is not used because the limit is automatically calculated in relation to the relevance of the search results.",
        "default": 25
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
    "url": "/calendar-events",
    "method": "getEventsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Calendar events List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related, participants: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/calendar-events",
    "method": "createEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Create a calendar event",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related, participants: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Meeting"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Monthly meeting with consulting team"
      },
      {
        "name": "datetime_start",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-01-01T00:00:00+01:00"
      },
      {
        "name": "datetime_end",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-01-01T00:00:00+01:00"
      },
      {
        "name": "is_private",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "all_day",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "label_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "provider_calendar",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "myemail@gmail.com"
      },
      {
        "name": "participants",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "related",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/calendar-events/{id}",
    "method": "deleteEvent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Delete calendar event",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Calendar event deleted"
      }
    ]
  },
  {
    "url": "/calendar-events/{id}",
    "method": "getEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Get calendar event",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related, participants: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
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
    "url": "/calendar-events/{id}",
    "method": "updateEvent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Update calendar event",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Meeting"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Monthly meeting with consulting team"
      },
      {
        "name": "datetime_start",
        "schema": "string",
        "description": "",
        "example": "2020-01-01T00:00:00+01:00"
      },
      {
        "name": "datetime_end",
        "schema": "string",
        "description": "",
        "example": "2020-01-01T00:00:00+01:00"
      },
      {
        "name": "is_private",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "all_day",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "label_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "provider_calendar",
        "schema": "string",
        "description": "",
        "example": "myemail@gmail.com"
      },
      {
        "name": "participants",
        "schema": "array",
        "description": ""
      },
      {
        "name": "related",
        "schema": "array",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
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
    "url": "/calendar-events/search",
    "method": "searchEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Calendar",
    "typeScriptTag": "calendar",
    "description": "Search calendar event",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related, participants: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
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
    "url": "/activities/search",
    "method": "performSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Search in activity",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "due_date"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - author: `staffs.read`<br /> - object_related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
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
    "url": "/timeline/{type}/{id}/search",
    "method": "searchTimelineActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Timeline search",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "due_date"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - author: `staffs.read`<br /> - object_related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "filters",
        "schema": "object",
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
    "url": "/phone-calls/{id}",
    "method": "deletePhoneCall",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PhoneCalls",
    "typeScriptTag": "phoneCalls",
    "description": "Delete a phoneCall",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "PhoneCall deleted"
      }
    ]
  },
  {
    "url": "/phone-calls/{id}",
    "method": "getPhoneCall",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PhoneCalls",
    "typeScriptTag": "phoneCalls",
    "description": "Get a phoneCall",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/phone-calls/{id}",
    "method": "updatePhoneCall",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PhoneCalls",
    "typeScriptTag": "phoneCalls",
    "description": "Update a phoneCall",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "topic",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "result",
        "schema": "string",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "description": ""
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": "",
        "example": 12345
      },
      {
        "name": "date",
        "schema": "string",
        "description": "",
        "example": "2020-01-01T00:00:00+01:00"
      },
      {
        "name": "related",
        "schema": "array",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
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
    "url": "/phone-calls",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PhoneCalls",
    "typeScriptTag": "phoneCalls",
    "description": "PhoneCalls List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
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
    "url": "/phone-calls",
    "method": "createPhoneCall",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PhoneCalls",
    "typeScriptTag": "phoneCalls",
    "description": "Create a phone call",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/phone-calls/search",
    "method": "searchList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PhoneCalls",
    "typeScriptTag": "phoneCalls",
    "description": "Search phoneCalls",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result.<br /><br /> Each embed object may require different oauth2 scopes than the main endpoint:<br /> - company: `companies.read`<br /> - individual: `individuals.read`<br /> - owner: `staffs.read`<br /> - contact: `contacts.read`<br /> - related: by object type. Check the entire documentation to verify the usual scopes requested for the types returned\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/emails/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Get Email",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "206",
        "description": ""
      }
    ]
  },
  {
    "url": "/emails/threads/{id}",
    "method": "getThreadEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Get Emails Thread",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/email/authenticate",
    "method": "getDnsData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Get email's domain DNS data",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/email/domain/validate",
    "method": "validateDns",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Validate email's DNS",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "description": "",
        "example": "domain.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get Webhooks",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/webhooks",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create Webhook",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/search",
    "method": "searchWebhooksList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Search Webhooks",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/webhooks/{id}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete Webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Webhook deleted"
      }
    ]
  },
  {
    "url": "/webhooks/{id}",
    "method": "getWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get Webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/{id}",
    "method": "updateInformation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update Webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/events",
    "method": "listEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List Webhook Events",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List available webhook events"
      }
    ]
  },
  {
    "url": "/units",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Units",
    "typeScriptTag": "units",
    "description": "Get Units",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/currencies",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currencies",
    "typeScriptTag": "currencies",
    "description": "Get currencies",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/countries",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Countries",
    "typeScriptTag": "countries",
    "description": "Get countries list",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "description": "translation of the country name",
        "default": "fr"
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
    "url": "/settings/subscription",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Get my Sellsy subscription informations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/items",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Items List",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order field",
        "example": "id"
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
    "url": "/items",
    "method": "createItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Create an item",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "T-shirt 90% coton"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "lorem ipsum"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ref0123"
      },
      {
        "name": "reference_price",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "19.99"
      },
      {
        "name": "purchase_amount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "8.25"
      },
      {
        "name": "is_reference_price_taxes_free",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "tax_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 354
      },
      {
        "name": "unit_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 952
      },
      {
        "name": "category_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 123
      },
      {
        "name": "standard_quantity",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "3"
      },
      {
        "name": "is_name_included_in_description",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "accounting_code_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 321
      },
      {
        "name": "accounting_purchase_code_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 123
      },
      {
        "name": "accounting_analytic_code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "divers"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/items/search",
    "method": "searchItems",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Search items",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order field",
        "example": "id"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/items/favourite-filters",
    "method": "listFavouriteFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "List items favourite filters",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/items/{id}",
    "method": "removeItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Delete item",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Item deleted"
      }
    ]
  },
  {
    "url": "/items/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Get an item",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/items/{id}",
    "method": "updateItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Update an item",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "T-shirt 90% coton"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "lorem ipsum"
      },
      {
        "name": "reference",
        "schema": "string",
        "description": "",
        "example": "ref0123"
      },
      {
        "name": "reference_price",
        "schema": "string",
        "description": "",
        "example": "19.99"
      },
      {
        "name": "purchase_amount",
        "schema": "string",
        "description": "",
        "example": "8.25"
      },
      {
        "name": "is_reference_price_taxes_free",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "tax_id",
        "schema": "integer",
        "description": "",
        "example": 354
      },
      {
        "name": "unit_id",
        "schema": "integer",
        "description": "",
        "example": 952
      },
      {
        "name": "category_id",
        "schema": "integer",
        "description": "",
        "example": 123
      },
      {
        "name": "standard_quantity",
        "schema": "string",
        "description": "",
        "example": 3
      },
      {
        "name": "is_name_included_in_description",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "accounting_code_id",
        "schema": "integer",
        "description": "",
        "example": 321
      },
      {
        "name": "accounting_purchase_code_id",
        "schema": "integer",
        "description": "",
        "example": 123
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
    "url": "/items/{id}/prices",
    "method": "getPricesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Get item prices",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
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
    "url": "/items/{id}/prices",
    "method": "updatePricesList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Update item prices",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
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
    "url": "/items/{id}/declinations",
    "method": "getDeclinationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Declinations List",
    "parameters": [
      {
        "name": "filters",
        "schema": "object",
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
    "url": "/staffs/{id}/licenses",
    "method": "removeLicenses",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Staffs",
    "typeScriptTag": "staffs",
    "description": "Delete licenses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "licenses deleted"
      }
    ]
  },
  {
    "url": "/staffs/{id}/licenses",
    "method": "updateLicenses",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Staffs",
    "typeScriptTag": "staffs",
    "description": "Put staff licenses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/quotas",
    "method": "getCorpQuotas",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quotas",
    "typeScriptTag": "quotas",
    "description": "Get Quotas",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/batch",
    "method": "requestCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Batch request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "207",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications",
    "method": "getUserNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Get User Notifications",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/search",
    "method": "searchUserNotifications",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Search User Notifications",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/notifications/{id}",
    "method": "deleteNotification",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Delete notification",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "notification deleted"
      }
    ]
  },
  {
    "url": "/notifications/{id}/mark-as-read",
    "method": "markAsRead",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Mark notification as read",
    "parameters": [
      {
        "name": "read",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "notification read status updated"
      }
    ]
  },
  {
    "url": "/notifications/mark-all-as-read",
    "method": "markAllAsRead",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Mark all unread notifications as read",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "notifications read status updated"
      }
    ]
  },
  {
    "url": "/notifications/settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Get Notifications settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/settings",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Update Notifications settings",
    "parameters": [
      {
        "name": "subscriptions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "do_not_disturb",
        "schema": "object",
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
    "url": "/invoices/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Get invoice",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{id}",
    "method": "updateInvoiceById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Update invoice",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Invoices List",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order field",
        "example": "id"
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
    "url": "/invoices",
    "method": "createNewInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Create invoice",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/search",
    "method": "searchInvoices",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Search invoices",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order field",
        "example": "id"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/invoices/favourite-filters",
    "method": "listFavouriteFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "List invoices favourite filters",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/invoices/compute",
    "method": "computeInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Compute an invoice",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{id}/smart-tags",
    "method": "getSmartTagsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Invoice smart-tags list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{id}/smart-tags",
    "method": "linkSmartTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Link smart tags to invoice",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{id}/validate",
    "method": "validateInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Validate Invoice",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "description": "",
        "example": "2022-01-01"
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
    "url": "/invoices/{id}/credit-notes",
    "method": "getCreditNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Get credit notes linked to invoice",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/invoices/{invoiceId}/credit-notes/{creditNoteId}",
    "method": "unlinkCreditNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Unlink a credit note from an invoice",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Document unlinked"
      }
    ]
  },
  {
    "url": "/invoices/{invoiceId}/credit-notes/{creditNoteId}",
    "method": "linkCreditNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Link a credit note to an invoice",
    "parameters": [
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "12.66"
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
    "url": "/invoices/{id}/payments",
    "method": "getPaymentsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Invoice payments list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{documentId}/payments/{paymentId}",
    "method": "unlinkPayment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Unlink payment from invoice",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Payment unlinked"
      }
    ]
  },
  {
    "url": "/invoices/{documentId}/payments/{paymentId}",
    "method": "linkPaymentToInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Link payment to invoice",
    "parameters": [
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 123.45
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{documentId}/files",
    "method": "listFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "List directories and files of an invoice",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{documentId}/files",
    "method": "attachFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Attach file to an invoice",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "File schema"
      }
    ]
  },
  {
    "url": "/invoices/{id}/custom-fields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Invoice custom fields List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/invoices/{id}/custom-fields",
    "method": "updateCustomFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Update Invoice custom fields",
    "parameters": [
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Invoice's custom fields updated"
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{invoiceId}/primes/{primeId}",
    "method": "unlinkPrime",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Unlink a prime from an invoice",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Prime unlinked"
      },
      {
        "statusCode": "403",
        "description": "Either primes on documents are not activated on your account or you don't have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "Requested prime was not applied on the document"
      }
    ]
  },
  {
    "url": "/invoices/{invoiceId}/primes/{primeId}",
    "method": "linkPrimeToInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Link prime to invoice",
    "parameters": [
      {
        "name": "quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12
      },
      {
        "name": "amount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12.34"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Prime linked"
      },
      {
        "statusCode": "403",
        "description": "Either primes on documents are not activated on your account or you don't have the required privileges"
      }
    ]
  },
  {
    "url": "/invoices/{invoiceId}/discount-incl-taxes/{discountId}",
    "method": "unlinkDiscountIncludingTaxes",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Unlink a discount including taxes from an invoice",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Discount unlinked"
      },
      {
        "statusCode": "403",
        "description": "Either discounts on documents are not activated on your account or you don't have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "Requested discount was not applied on the document"
      }
    ]
  },
  {
    "url": "/invoices/{invoiceId}/discount-incl-taxes/{discountId}",
    "method": "linkDiscountIncludingTaxes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Link discount including taxes to invoice",
    "parameters": [
      {
        "name": "quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12
      },
      {
        "name": "amount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12.34"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Discount linked"
      },
      {
        "statusCode": "403",
        "description": "Either discounts on documents are not activated on your account or you don't have the required privileges"
      }
    ]
  },
  {
    "url": "/credit-notes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Get credit note",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-notes/{id}",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Update credit note",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-notes",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Credit notes List",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order field",
        "example": "id"
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
    "url": "/credit-notes",
    "method": "createCreditNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Create credit note",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-notes/search",
    "method": "searchCreditNotes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Search credit notes",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Additional object included in the result"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order field",
        "example": "id"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/credit-notes/favourite-filters",
    "method": "listFavouriteFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "List credit-notes favourite filters",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/credit-notes/compute",
    "method": "computeCreditNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Compute a credit note",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-notes/{id}/smart-tags",
    "method": "getSmartTagsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Credit note smart-tags list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-notes/{id}/smart-tags",
    "method": "linkSmartTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Link smart tags to credit note",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-notes/{id}/validate",
    "method": "validateCreditNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Validate credit note",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "description": "",
        "example": "2022-01-01"
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
    "url": "/credit-notes/{id}/custom-fields",
    "method": "listCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Credit note custom fields List",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/credit-notes/{id}/custom-fields",
    "method": "updateCustomFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Update credit note custom fields",
    "parameters": [
      {
        "name": "verify",
        "schema": "boolean",
        "description": "Flag to trigger validation only (set to true to validate payload without persisting data)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Credit note's custom fields updated"
      },
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-notes/{id}/invoices",
    "method": "getLinkedInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Get invoices linked to credit note",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/credit-notes/{creditNoteId}/invoices/{invoiceId}",
    "method": "unlinkInvoice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Unlink an invoice from a credit note",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Document unlinked"
      }
    ]
  },
  {
    "url": "/credit-notes/{creditNoteId}/invoices/{invoiceId}",
    "method": "linkInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Link an invoice to a credit note",
    "parameters": [
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "12.66"
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
    "url": "/credit-notes/{id}/payments",
    "method": "getPaymentsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Credit note payments list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-notes/{documentId}/payments/{paymentId}",
    "method": "unlinkPayment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Unlink payment from credit note",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Payment unlinked"
      }
    ]
  },
  {
    "url": "/credit-notes/{documentId}/payments/{paymentId}",
    "method": "linkPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Link payment to credit note",
    "parameters": [
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 123.45
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-notes/{documentId}/files",
    "method": "getDirectoryFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "List directories and files of a credit note",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/credit-notes/{documentId}/files",
    "method": "attachFileToCreditNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Attach file to an credit note",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "File schema"
      }
    ]
  },
  {
    "url": "/credit-notes/{creditNoteId}/primes/{primeId}",
    "method": "unlinkPrimeFromNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Unlink a prime from a credit note",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Prime unlinked"
      },
      {
        "statusCode": "403",
        "description": "Either primes on documents are not activated on your account or you don't have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "Requested prime was not applied on the document"
      }
    ]
  },
  {
    "url": "/credit-notes/{creditNoteId}/primes/{primeId}",
    "method": "linkPrimeToCreditNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Link prime to credit note",
    "parameters": [
      {
        "name": "quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12
      },
      {
        "name": "amount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12.34"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Prime linked"
      },
      {
        "statusCode": "403",
        "description": "Either primes on documents are not activated on your account or you don't have the required privileges"
      }
    ]
  },
  {
    "url": "/credit-notes/{creditNoteId}/discount-incl-taxes/{discountId}",
    "method": "unlinkDiscountInclTaxes",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Unlink a discount including taxes from a credit note",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Discount unlinked"
      },
      {
        "statusCode": "403",
        "description": "Either discounts on documents are not activated on your account or you don't have the required privileges"
      },
      {
        "statusCode": "404",
        "description": "Requested discount was not applied on the document"
      }
    ]
  },
  {
    "url": "/credit-notes/{creditNoteId}/discount-incl-taxes/{discountId}",
    "method": "linkDiscountToCreditNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Notes",
    "typeScriptTag": "creditNotes",
    "description": "Link discount including taxes to credit note",
    "parameters": [
      {
        "name": "quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12
      },
      {
        "name": "amount",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12.34"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Discount linked"
      },
      {
        "statusCode": "403",
        "description": "Either discounts on documents are not activated on your account or you don't have the required privileges"
      }
    ]
  },
  {
    "url": "/payments/{id}",
    "method": "deletePayment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Delete payment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Payment deleted"
      }
    ]
  },
  {
    "url": "/payments/{id}",
    "method": "getPaymentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get a payment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get payments",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Optional objects added through the embed parameter"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "paid_date"
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
    "url": "/payments/search",
    "method": "searchPayments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Search payments",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Optional objects added through the embed parameter"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "paid_date"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/settings/email",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Get email settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/settings/email",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Update email settings",
    "parameters": [
      {
        "name": "signature",
        "schema": "undefined",
        "required": true,
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
    "url": "/settings/email/tags",
    "method": "getAvailableTagsForSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Get available tags for email signature settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of available email tags to insert in email signature content"
      }
    ]
  },
  {
    "url": "/fiscal-years",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fiscal Year",
    "typeScriptTag": "fiscalYear",
    "description": "Get fiscal years",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/languages",
    "method": "getAccountLanguages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Language",
    "typeScriptTag": "language",
    "description": "Get the account languages",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/directories",
    "method": "createDirectory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Create directory",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "Directory schema"
      },
      {
        "statusCode": "404",
        "description": "Parent not found"
      },
      {
        "statusCode": "409",
        "description": "Directory already exists"
      }
    ]
  },
  {
    "url": "/directories/{id}",
    "method": "deleteDirectoryAndItems",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Delete the directory and all items attached",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Directory deleted"
      },
      {
        "statusCode": "403",
        "description": "Cannot delete this directory"
      }
    ]
  },
  {
    "url": "/directories/{id}",
    "method": "getDirectory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get directory",
    "parameters": [
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Directory schema"
      }
    ]
  },
  {
    "url": "/directories/{id}",
    "method": "updateDirectory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Update directory",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Directory schema"
      },
      {
        "statusCode": "403",
        "description": "Cannot modify this directory"
      },
      {
        "statusCode": "409",
        "description": "Directory already exists"
      }
    ]
  },
  {
    "url": "/directories/{id}/files",
    "method": "listDirectoryContents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "List directories and files in a directory",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/directories/{id}/files",
    "method": "attachToDirectory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Attach file to a directory",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "File uploaded"
      }
    ]
  },
  {
    "url": "/subscriptions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Fetch list of subscriptions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions",
    "method": "createNewSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Create a subscription",
    "parameters": [
      {
        "name": "model",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "related",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "sending",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "preferences_source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PREFERENCES_SOURCE"
      },
      {
        "name": "conditions",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "payment_installments",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "billing_address",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 69
      },
      {
        "name": "shipping_address",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 67
      },
      {
        "name": "order_reference",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "reference"
      },
      {
        "name": "has_updated_catalog_prices",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "has_catalog_promotions",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "has_display_of_next_deadline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "has_service_dates",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "service_dates",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "has_impact_on_stock",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "warehouse_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_settings",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/search",
    "method": "searchSubscriptions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Search subscriptions",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/subscriptions/{id}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Delete a subscription",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Subscription deleted"
      }
    ]
  },
  {
    "url": "/subscriptions/{id}",
    "method": "getSubscriptionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Get subscription",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/{id}/payment-installments",
    "method": "addPaymentInstallment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Add payment installment for a subscription",
    "parameters": [
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Payment installment added for subscription"
      },
      {
        "statusCode": "422",
        "description": "It is not allowed to add payment installment if the next calculated date for the 1st payment installment is not in the future. The subscription is considered completed."
      }
    ]
  },
  {
    "url": "/subscriptions/payment-installments",
    "method": "getPaymentInstallments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Get all payment installments of subscriptions",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
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
    "url": "/subscriptions/payment-installments/search",
    "method": "searchPaymentInstallments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Search payment installments of subscriptions",
    "parameters": [
      {
        "name": "order",
        "schema": "string",
        "description": "The order field",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/documents/models",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document Models",
    "typeScriptTag": "documentModels",
    "description": "List document models",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/documents/models",
    "method": "createModel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document Models",
    "typeScriptTag": "documentModels",
    "description": "Create a document model",
    "parameters": [
      {
        "name": "number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "model#1"
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2018-02-21T12:00:00Z"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Subject"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "EUR"
      },
      {
        "name": "discount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 145
      },
      {
        "name": "rows",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "rate_category_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 777
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/documents/models/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document Models",
    "typeScriptTag": "documentModels",
    "description": "Get document model",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/documents/models/{id}",
    "method": "updateModel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Document Models",
    "typeScriptTag": "documentModels",
    "description": "Update document model",
    "parameters": [
      {
        "name": "number",
        "schema": "string",
        "description": "",
        "example": "model#1"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": "",
        "example": "Subject"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "EUR"
      },
      {
        "name": "discount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "description": "",
        "example": 145
      },
      {
        "name": "rows",
        "schema": "array",
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
    "url": "/documents/models/search",
    "method": "searchModels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document Models",
    "typeScriptTag": "documentModels",
    "description": "Search document models",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "description": "The order direction",
        "default": "asc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The pagination limit",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "undefined",
        "description": "The pagination offset"
      },
      {
        "name": "field",
        "schema": "array",
        "description": "Filters the fields returned in the response <br /><br /> Example:<br /> - `field[]=id`: Return the `id` field<br /> - `field[]=address.id`: Return the `id` field of the `address` object<br /> - `field[]=addresses[].id`: Return the `id` field of the `address` objects<br /> <br> On endpoints that implement the `embed` query parameter, if you specified embeds in your call, you will need to request the `_embed` field as well.<br> Example:<br> - `field[]=_embed`: Return all fields from all requested embeds<br> - `field[]=_embed.address`: Return all fields from the `address` embed<br> - `field[]=_embed.company.name`: Return the `name` field from the `company` embed<br>\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order field",
        "example": "id"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/documents/models/{id}/convert",
    "method": "convertDocumentModel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document Models",
    "typeScriptTag": "documentModels",
    "description": "Convert a document model into a document",
    "parameters": [
      {
        "name": "doctype",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "invoice"
      },
      {
        "name": "related",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "refresh_rows_content",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
    "url": "/documents/models/tags",
    "method": "getAvailableTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document Models",
    "typeScriptTag": "documentModels",
    "description": "Get available tags for document models",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of available tags to insert in document models content"
      }
    ]
  },
  {
    "url": "/primes",
    "method": "getPrimesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Discount Including Taxes",
    "typeScriptTag": "discountIncludingTaxes",
    "description": "Get list of primes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/discount-incl-taxes",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Discount Including Taxes",
    "typeScriptTag": "discountIncludingTaxes",
    "description": "Get list of discounts including taxes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Either discounts on documents are not activated on your account or you don't have the required privileges"
      }
    ]
  },
  {
    "url": "/discount-incl-taxes",
    "method": "createDiscount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Discount Including Taxes",
    "typeScriptTag": "discountIncludingTaxes",
    "description": "Create a discount including taxes",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "For purchases made during the last five days of October"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Halloween five last day"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Halloween promotion"
      },
      {
        "name": "unit_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 31
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 31
      },
      {
        "name": "accounting_code_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 31
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Discount including taxes"
      },
      {
        "statusCode": "403",
        "description": "Either discounts on documents are not activated on your account or you don't have the required privileges"
      }
    ]
  },
  {
    "url": "/discount-incl-taxes/{id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Discount Including Taxes",
    "typeScriptTag": "discountIncludingTaxes",
    "description": "Delete a discount including taxes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Discount deleted"
      },
      {
        "statusCode": "403",
        "description": "Either discounts on documents are not activated on your account or you don't have the required privileges"
      }
    ]
  },
  {
    "url": "/discount-incl-taxes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Discount Including Taxes",
    "typeScriptTag": "discountIncludingTaxes",
    "description": "Get a discount including taxes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Discount including taxes"
      },
      {
        "statusCode": "403",
        "description": "Either discounts on documents are not activated on your account or you don't have the required privileges"
      }
    ]
  },
  {
    "url": "/discount-incl-taxes/{id}",
    "method": "updateWithId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Discount Including Taxes",
    "typeScriptTag": "discountIncludingTaxes",
    "description": "Update a discount including taxes",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "For purchases made during the last five days of October"
      },
      {
        "name": "reference",
        "schema": "string",
        "description": "",
        "example": "Halloween five last day"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Halloween promotion"
      },
      {
        "name": "unit_id",
        "schema": "integer",
        "description": "",
        "example": 31
      },
      {
        "name": "amount",
        "schema": "string",
        "description": "",
        "example": 31
      },
      {
        "name": "accounting_code_id",
        "schema": "integer",
        "description": "",
        "example": 31
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Discount including taxes"
      },
      {
        "statusCode": "403",
        "description": "Either discounts on documents are not activated on your account or you don't have the required privileges"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Sellsy API"
      apiBaseUrl="https://api.sellsy.com/v2"
      apiVersion="2.128.0"
      endpoints={225}
      sdkMethods={463}
      schemas={424}
      parameters={1038}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sellsy/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sellsy/openapi.yaml"
      developerDocumentation="api.sellsy.com/doc/v2/"
    />
  );
}
  