import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function GorgiasTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="gorgias-typescript-sdk"
      metaDescription={`Gorgias is a one-of-a-kind customer service platform specifically designed for ecommerce businesses to deliver effortless customer service at every stage of growth. With cutting-edge automation and AI capabilities, Gorgias revolutionizes how online stores interact with their customers by providing efficient and personalized support across email, voice, SMS, live chat, and social media channels.

Founded in 2015, Gorgias began as a two-person team and has grown to more than 250 employees and nine offices in San Francisco, New York, Charlotte, Toronto, Belgrade, Buenos Aires, Paris, Lisbon, and Sydney. As a certified B Corporation, Gorgias is proud to be a leader in sustainable and equitable workplace practices.

Today, Gorgias serves 13,000+ merchants in the ecommerce space, including Steve Madden, Glossier, BrüMate, and TUSHY.`}
      company="Gorgias"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gorgias/logo.png"
      companyKebabCase="gorgias"
      clientNameCamelCase="gorgias"
      homepage="gorgias.com"
      lastUpdated={new Date("2024-03-27T21:44:11.801Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gorgias/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gorgias/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["communication","customer_operations","support"]}
      methods={[
  {
    "url": "/api/account",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Retrieve your account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An account represents a Gorgias helpdesk. It contains metadata and account-wide settings."
      }
    ]
  },
  {
    "url": "/api/customers",
    "method": "deleteCustomer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Delete customers",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/customers",
    "method": "listOrderedCustomers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "List customers",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "ID of the customer you're looking for.",
        "example": 3924
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all customers. If omitted, the first customers of the list will be returned.",
        "example": "cHJldl9fNl9fMjAyMS0wMy0wMyAwNjowMDowMA=="
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Primary email address of the customer you're looking for.",
        "example": "john@example.com"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "ID of the customer in a foreign system (https://developers.gorgias.com/ you're looking for.",
        "example": "customer-84203241"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "The customer's preferred language (https://developers.gorgias.com/ to filter with.",
        "example": "fr"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of customers to return.",
        "default": 30
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Full name of the customer you're looking for.",
        "example": "John Smith"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Attribute used to order customers.",
        "default": "created_datetime:desc"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page to fetch.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 7,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects to fetch per page. Default: 30.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 15,
        "default": 30
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": "The customer's preferred timezone (https://developers.gorgias.com/.",
        "example": "UTC"
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": false,
        "description": "ID of a view to filter customers by.",
        "example": 4
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
    "url": "/api/customers",
    "method": "createNewCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Create a customer",
    "parameters": [
      {
        "name": "channels",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "john@example.com"
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "customer-84203241"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "fr"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "John Smith"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "UTC",
        "default": "UTC"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A customer represents a customer of your company."
      }
    ]
  },
  {
    "url": "/api/customers/merge",
    "method": "mergeCustomersInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Merge two customers",
    "parameters": [
      {
        "name": "sourceId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer to merge (https://developers.gorgias.com/.",
        "example": 4
      },
      {
        "name": "targetId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the targeted customer (https://developers.gorgias.com/.",
        "example": 4
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": "",
        "example": 2030949
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "john@example.com"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "John Smith"
      },
      {
        "name": "firstname",
        "schema": "string",
        "description": "",
        "example": "John"
      },
      {
        "name": "lastname",
        "schema": "string",
        "description": "",
        "example": "Smith"
      },
      {
        "name": "channels",
        "schema": "array",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "fr"
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "Europe/Paris",
        "default": "UTC"
      },
      {
        "name": "created_datetime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_datetime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "meta",
        "schema": "undefined",
        "description": "",
        "example": {}
      },
      {
        "name": "data",
        "schema": "undefined",
        "description": "",
        "example": {}
      },
      {
        "name": "customer",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "integrations",
        "schema": "object",
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/customers/{customer_id}/data",
    "method": "setData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Set customer data",
    "parameters": [
      {
        "name": "customerId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer to update.",
        "example": 0
      },
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-05-13T12:34:21.918927"
      },
      {
        "name": "data",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": {
          "key": "value"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "An empty response."
      }
    ]
  },
  {
    "url": "/api/custom-fields",
    "method": "listMatchingParameters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List custom fields",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "Type of entity on which to use this custom field.",
        "example": "Ticket"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search for custom fields' names matching the given text query (https://developers.gorgias.com/.",
        "example": "My awesome field"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "A filter parameter used to return archived or non-archived only results.",
        "example": true
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Attribute used to priority the errors.",
        "example": "priority:desc",
        "default": "priority:desc"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all items. If omitted, the first items of the list will be returned.",
        "example": "cHJldl9fNl9fMjAyMS0wMy0wMyAwNjowMDowMA=="
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of items to return.",
        "default": 30
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
    "url": "/api/custom-fields",
    "method": "createField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Create a custom field",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "An amazing field description."
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 123
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "custom-field-84203241"
      },
      {
        "name": "object_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Ticket"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Test field"
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "managed_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "contact_reason"
      },
      {
        "name": "definition",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": {
          "input_settings": {
            "placeholder": "Enter this here...",
            "min": "120.5",
            "max": "130",
            "input_type": "input_number"
          },
          "data_type": "number"
        }
      },
      {
        "name": "created_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-01-02T03:04:05.123456"
      },
      {
        "name": "updated_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-02T03:04:05.123456"
      },
      {
        "name": "deactivated_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-01-02T03:04:05.123456"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A custom field represents a field for which you can add value on various entities."
      }
    ]
  },
  {
    "url": "/api/custom-fields",
    "method": "bulkUpdateList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Bulk update a list of custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/events",
    "method": "listPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "List events",
    "parameters": [
      {
        "name": "createdDatetime",
        "schema": "object",
        "required": false,
        "description": "Comparators used to filter events on their creation date."
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all events. If omitted, the first events of the list will be returned.",
        "example": "cHJldl9fNl9fMjAyMS0wMy0wMyAwNjowMDowMA=="
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of events to return.",
        "default": 30
      },
      {
        "name": "objectId",
        "schema": "integer",
        "required": false,
        "description": "ID of the object associated with the events to return."
      },
      {
        "name": "objectType",
        "schema": "string",
        "required": false,
        "description": "Type of the object associated with the events to return."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Attribute used to order events.<br>Value of <span style=\"color:red\">`created_datetime` has been deprecated</span>, use `created_datetime:asc` or `created_datetime:desc` instead.",
        "default": "created_datetime:desc"
      },
      {
        "name": "orderDir",
        "schema": "string",
        "required": false,
        "description": "Direction used to order events.\"\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __order_by__ instead.\n        ",
        "default": "desc"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page to fetch.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 7,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects to fetch per page. Default: 30.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 15,
        "default": 30
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "Types of the events to return."
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": "IDs of the users who triggered the events to return."
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
    "url": "/api/upload",
    "method": "uploadMultipleFiles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Upload files",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of file to upload. If not specified, the file will be uploaded as a private attachment.",
        "example": "attachment",
        "default": "attachment"
      },
      {
        "name": "file",
        "schema": "string",
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
    "url": "/api/attachment/download/{resource_name}",
    "method": "downloadAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Download Attachment",
    "parameters": [
      {
        "name": "resourceName",
        "schema": "string",
        "required": true,
        "description": "The resource identifier of the attachment you are trying to retrieve",
        "example": "Hna8kldnmlal/image-test-c9f158fc-062d-4b00-a826-e29b36852c9b.png"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "Redirect to a signed URL that allows timed access to the requested attachment."
      }
    ]
  },
  {
    "url": "/api/integrations",
    "method": "listMatchingParameters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "List integrations",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all integrations. If omitted, the first integrations of the list will be returned.",
        "example": "WyJuZXh0IiwgIjIwMjItMDEtMDFUMDE6MDA6MDAiLCAxMjNd"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of integrations to return.",
        "default": 30
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Attribute used to order integrations.",
        "default": "created_datetime:desc"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page to fetch.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 7,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects to fetch per page. Default: 1000.\"\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 15,
        "default": 1000
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Type of integration.",
        "example": "http"
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
    "url": "/api/integrations",
    "method": "createIntegration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Create an integration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deactivated_datetime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "http",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": 987,
          "url": "https://company.com/api/customers?email={{ticket.customer.email}}",
          "method": "GET",
          "headers": {
            "x-api-key": "abcdef12345"
          },
          "form": {
            "hello": "world",
            "ticket_id": "{{ticket.id}}"
          },
          "request_content_type": "application/json",
          "response_content_type": "application/json",
          "triggers": {
            "ticket_created": true,
            "ticket_updated": true,
            "ticket_message_created": true
          }
        }
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My HTTP integration"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "http"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Integrations connect Gorgias with external services (https://developers.gorgias.com/.\n\nThere are official Gorgias integrations that can be found in the Integrations page in the helpdesk and there are custom HTTP integrations.\n\nMost integrations use HTTP APIs."
      }
    ]
  },
  {
    "url": "/api/jobs",
    "method": "listPaginatedJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "List jobs",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all jobs. If omitted, the first jobs of the list will be returned.",
        "example": "WyJuZXh0IiwgIjIwMjEtMDEtMDFUMDE6MDA6MDAiLCA1MV0="
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of jobs to return.",
        "default": 30
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Attribute used to order jobs.",
        "default": "created_datetime:desc"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page to fetch.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 7,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects to fetch per page. Default: 30.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 15,
        "default": 30
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter jobs by status.",
        "example": "cancel_requested",
        "default": null
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Filter jobs by job type.",
        "example": "applyMacro",
        "default": null
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
    "url": "/api/jobs",
    "method": "createJobAndScheduleExecution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Create a job",
    "parameters": [
      {
        "name": "meta",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "description": "This job closes all tickets created in 2018"
        }
      },
      {
        "name": "params",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "ticket_ids": [
            1,
            2,
            3
          ],
          "updates": {
            "status": "open"
          }
        }
      },
      {
        "name": "scheduled_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-11-23T16:30:00.966927"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "updateTicket"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A job is an object used to perform long-running tasks. For example, closing 10k tickets, exporting 500k tickets, and more. \n\nJobs are processed asynchronously, meaning that once a job is created, it will run in background on Gorgias's servers. According to the type and size of the task, a job can take a few minutes or several hours to be executed. You can use our API to check the status of the job.\n\nJobs can be canceled at any time but be aware that if a job already started, changes done by this one won't be reverted. For example, if you created a job to close 10k tickets and you cancel it at some point, the already closed tickets won't be reopened."
      }
    ]
  },
  {
    "url": "/api/macros",
    "method": "listAllMacros",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "List macros",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "languages",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fallbackOrderBy",
        "schema": "string",
        "required": false,
        "description": "In the case macros cannot be ordered by relevance, this ordering will be used as a fallback instead of returning a temporary error.",
        "example": "usage",
        "default": null
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all tags. If omitted, the first tags of the list will be returned.",
        "example": "cHJldl9fNl9fMjAyMS0wMy0wMyAwNjowMDowMA=="
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of tags to return.",
        "default": 30
      },
      {
        "name": "messageId",
        "schema": "integer",
        "required": false,
        "description": "Order macros by the most relevant ones to reply to the given message. When specified, `order_by` must be set to `relevance` and `ticket_id` is required.",
        "example": 35893,
        "default": null
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Order macros by the given attribute. If `relevance` is specified, `ticket_id` parameter is required and macros will be ordered by the most relevant macros to reply to the given ticket. In this case, `order_dir` parameter will be ignored.<br>Values <span style=\"color:red\">`name`, `created_datetime`, `update_datetime`, `usage`, `relevance` have been deprecated</span>. Use values with `:asc` or `:desc` instead.",
        "example": "usage",
        "default": "usage"
      },
      {
        "name": "orderDir",
        "schema": "string",
        "required": false,
        "description": "Order macros with the given order direction.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __order_by__ instead.\n        ",
        "example": "desc",
        "default": "desc"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page to fetch.\"\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 7,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of macros to fetch per page. Default: 30.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 15,
        "default": 30
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Filter macros containing the given search query.",
        "example": "order",
        "default": null
      },
      {
        "name": "ticketId",
        "schema": "integer",
        "required": false,
        "description": "Order macros by the most relevant ones to reply to the given ticket. When specified, `order_by` must be set to `relevance`.",
        "example": 1482,
        "default": null
      },
      {
        "name": "numberPredictions",
        "schema": "integer",
        "required": false,
        "description": "Number of relevant macros to return on top of the list.",
        "example": 3,
        "default": 0
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
    "url": "/api/macros",
    "method": "createMacro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Create a macro",
    "parameters": [
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CUS-324512"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Order status inquiry"
      },
      {
        "name": "intent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "discount/request"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "en"
      },
      {
        "name": "actions",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "title": "Add tags",
            "arguments": {
              "tags": "question, order-status"
            },
            "name": "addTags",
            "type": "user"
          },
          {
            "title": "Add tags",
            "arguments": {
              "body_html": "<div>Hi {{ticket.customer.firstname}},</div><br><div>Your order has been delivered.</div>",
              "body_text": "Hi {{ticket.customer.firstname}},\n\nYour order has been delivered."
            },
            "name": "setResponseText",
            "type": "user"
          }
        ],
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A macro (https://developers.gorgias.com/ is a list of [actions](https://developers.gorgias.com/) that can be applied to tickets to modify them, and/or reply to them.Macros can be applied manually by agents or automatically by rules.\nFor example, a single macro can add a tag to the ticket, assign an agent to it and send a pre-defined response."
      }
    ]
  },
  {
    "url": "/api/rules",
    "method": "listPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "List rules",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all rules. If omitted, the first rules of the list will be returned.",
        "example": "cHJldl9fNl9fMjAyMS0wMy0wMyAwNjowMDowMA=="
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of rules to return.",
        "default": 100
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Attribute used to order rules.",
        "default": "created_datetime:desc"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page to fetch.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 7,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects to fetch per page. Default: 30.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 15,
        "default": 30
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
    "url": "/api/rules",
    "method": "createRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "Create a rule",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Automatically close all tickets from Amazon because there is nothing to do for them. We still want to keep them to be able to search."
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "\nif (https://developers.gorgias.com/ && eq(https://developers.gorgias.com/) {\n    if (https://developers.gorgias.com/ || containsAny(https://developers.gorgias.com/) {\n        Action(https://developers.gorgias.com/;\n        Action(https://developers.gorgias.com/\n    }\n}\n"
      },
      {
        "name": "code_ast",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "loc": {
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 1
            }
          },
          "type": "Program",
          "body": [
            {
              "loc": {
                "start": {
                  "line": 2,
                  "column": 0
                },
                "end": {
                  "line": 10,
                  "column": 1
                }
              },
              "type": "IfStatement",
              "test": {
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 4
                  },
                  "end": {
                    "line": 2,
                    "column": 61
                  }
                },
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 4
                    },
                    "end": {
                      "line": 2,
                      "column": 32
                    }
                  },
                  "type": "CallExpression",
                  "callee": {
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 4
                      },
                      "end": {
                        "line": 2,
                        "column": 6
                      }
                    },
                    "type": "Identifier",
                    "name": "eq"
                  },
                  "arguments": [
                    {
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 7
                        },
                        "end": {
                          "line": 2,
                          "column": 24
                        }
                      },
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 7
                          },
                          "end": {
                            "line": 2,
                            "column": 13
                          }
                        },
                        "type": "Identifier",
                        "name": "ticket"
                      },
                      "property": {
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 14
                          },
                          "end": {
                            "line": 2,
                            "column": 24
                          }
                        },
                        "type": "Identifier",
                        "name": "from_agent"
                      }
                    },
                    {
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 26
                        },
                        "end": {
                          "line": 2,
                          "column": 31
                        }
                      },
                      "type": "Literal",
                      "value": false,
                      "raw": "false"
                    }
                  ]
                },
                "right": {
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 36
                    },
                    "end": {
                      "line": 2,
                      "column": 61
                    }
                  },
                  "type": "CallExpression",
                  "callee": {
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 36
                      },
                      "end": {
                        "line": 2,
                        "column": 38
                      }
                    },
                    "type": "Identifier",
                    "name": "eq"
                  },
                  "arguments": [
                    {
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 39
                        },
                        "end": {
                          "line": 2,
                          "column": 52
                        }
                      },
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 39
                          },
                          "end": {
                            "line": 2,
                            "column": 45
                          }
                        },
                        "type": "Identifier",
                        "name": "ticket"
                      },
                      "property": {
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 46
                          },
                          "end": {
                            "line": 2,
                            "column": 52
                          }
                        },
                        "type": "Identifier",
                        "name": "status"
                      }
                    },
                    {
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 54
                        },
                        "end": {
                          "line": 2,
                          "column": 60
                        }
                      },
                      "type": "Literal",
                      "value": "open",
                      "raw": "'open'"
                    }
                  ]
                }
              },
              "consequent": {
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 63
                  },
                  "end": {
                    "line": 10,
                    "column": 1
                  }
                },
                "type": "BlockStatement",
                "body": [
                  {
                    "loc": {
                      "start": {
                        "line": 3,
                        "column": 4
                      },
                      "end": {
                        "line": 9,
                        "column": 5
                      }
                    },
                    "type": "IfStatement",
                    "test": {
                      "loc": {
                        "start": {
                          "line": 3,
                          "column": 8
                        },
                        "end": {
                          "line": 6,
                          "column": 10
                        }
                      },
                      "type": "LogicalExpression",
                      "operator": "||",
                      "left": {
                        "loc": {
                          "start": {
                            "line": 3,
                            "column": 8
                          },
                          "end": {
                            "line": 3,
                            "column": 61
                          }
                        },
                        "type": "CallExpression",
                        "callee": {
                          "loc": {
                            "start": {
                              "line": 3,
                              "column": 8
                            },
                            "end": {
                              "line": 3,
                              "column": 19
                            }
                          },
                          "type": "Identifier",
                          "name": "containsAny"
                        },
                        "arguments": [
                          {
                            "loc": {
                              "start": {
                                "line": 3,
                                "column": 20
                              },
                              "end": {
                                "line": 3,
                                "column": 40
                              }
                            },
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "loc": {
                                "start": {
                                  "line": 3,
                                  "column": 20
                                },
                                "end": {
                                  "line": 3,
                                  "column": 35
                                }
                              },
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "loc": {
                                  "start": {
                                    "line": 3,
                                    "column": 20
                                  },
                                  "end": {
                                    "line": 3,
                                    "column": 27
                                  }
                                },
                                "type": "Identifier",
                                "name": "message"
                              },
                              "property": {
                                "loc": {
                                  "start": {
                                    "line": 3,
                                    "column": 28
                                  },
                                  "end": {
                                    "line": 3,
                                    "column": 35
                                  }
                                },
                                "type": "Identifier",
                                "name": "intents"
                              }
                            },
                            "property": {
                              "loc": {
                                "start": {
                                  "line": 3,
                                  "column": 36
                                },
                                "end": {
                                  "line": 3,
                                  "column": 40
                                }
                              },
                              "type": "Identifier",
                              "name": "name"
                            }
                          },
                          {
                            "loc": {
                              "start": {
                                "line": 3,
                                "column": 42
                              },
                              "end": {
                                "line": 3,
                                "column": 60
                              }
                            },
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "loc": {
                                  "start": {
                                    "line": 3,
                                    "column": 43
                                  },
                                  "end": {
                                    "line": 3,
                                    "column": 59
                                  }
                                },
                                "type": "Literal",
                                "value": "other/no_reply",
                                "raw": "'other/no_reply'"
                              }
                            ]
                          }
                        ]
                      },
                      "right": {
                        "loc": {
                          "start": {
                            "line": 3,
                            "column": 65
                          },
                          "end": {
                            "line": 6,
                            "column": 10
                          }
                        },
                        "type": "CallExpression",
                        "callee": {
                          "loc": {
                            "start": {
                              "line": 3,
                              "column": 65
                            },
                            "end": {
                              "line": 3,
                              "column": 76
                            }
                          },
                          "type": "Identifier",
                          "name": "containsAny"
                        },
                        "arguments": [
                          {
                            "loc": {
                              "start": {
                                "line": 3,
                                "column": 77
                              },
                              "end": {
                                "line": 3,
                                "column": 98
                              }
                            },
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "loc": {
                                "start": {
                                  "line": 3,
                                  "column": 77
                                },
                                "end": {
                                  "line": 3,
                                  "column": 92
                                }
                              },
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "loc": {
                                  "start": {
                                    "line": 3,
                                    "column": 77
                                  },
                                  "end": {
                                    "line": 3,
                                    "column": 83
                                  }
                                },
                                "type": "Identifier",
                                "name": "ticket"
                              },
                              "property": {
                                "loc": {
                                  "start": {
                                    "line": 3,
                                    "column": 84
                                  },
                                  "end": {
                                    "line": 3,
                                    "column": 92
                                  }
                                },
                                "type": "Identifier",
                                "name": "customer"
                              }
                            },
                            "property": {
                              "loc": {
                                "start": {
                                  "line": 3,
                                  "column": 93
                                },
                                "end": {
                                  "line": 3,
                                  "column": 98
                                }
                              },
                              "type": "Identifier",
                              "name": "email"
                            }
                          },
                          {
                            "loc": {
                              "start": {
                                "line": 3,
                                "column": 100
                              },
                              "end": {
                                "line": 6,
                                "column": 9
                              }
                            },
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "loc": {
                                  "start": {
                                    "line": 4,
                                    "column": 12
                                  },
                                  "end": {
                                    "line": 4,
                                    "column": 22
                                  }
                                },
                                "type": "Literal",
                                "value": "noreply@",
                                "raw": "'noreply@'"
                              },
                              {
                                "loc": {
                                  "start": {
                                    "line": 5,
                                    "column": 12
                                  },
                                  "end": {
                                    "line": 5,
                                    "column": 22
                                  }
                                },
                                "type": "Literal",
                                "value": "@noreply",
                                "raw": "'@noreply'"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "consequent": {
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 12
                        },
                        "end": {
                          "line": 9,
                          "column": 5
                        }
                      },
                      "type": "BlockStatement",
                      "body": [
                        {
                          "loc": {
                            "start": {
                              "line": 7,
                              "column": 8
                            },
                            "end": {
                              "line": 7,
                              "column": 50
                            }
                          },
                          "type": "ExpressionStatement",
                          "expression": {
                            "loc": {
                              "start": {
                                "line": 7,
                                "column": 8
                              },
                              "end": {
                                "line": 7,
                                "column": 49
                              }
                            },
                            "type": "CallExpression",
                            "callee": {
                              "loc": {
                                "start": {
                                  "line": 7,
                                  "column": 8
                                },
                                "end": {
                                  "line": 7,
                                  "column": 14
                                }
                              },
                              "type": "Identifier",
                              "name": "Action"
                            },
                            "arguments": [
                              {
                                "loc": {
                                  "start": {
                                    "line": 7,
                                    "column": 15
                                  },
                                  "end": {
                                    "line": 7,
                                    "column": 24
                                  }
                                },
                                "type": "Literal",
                                "value": "addTags",
                                "raw": "'addTags'"
                              },
                              {
                                "loc": {
                                  "start": {
                                    "line": 7,
                                    "column": 26
                                  },
                                  "end": {
                                    "line": 7,
                                    "column": 48
                                  }
                                },
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "loc": {
                                      "start": {
                                        "line": 7,
                                        "column": 28
                                      },
                                      "end": {
                                        "line": 7,
                                        "column": 46
                                      }
                                    },
                                    "type": "Property",
                                    "key": {
                                      "loc": {
                                        "start": {
                                          "line": 7,
                                          "column": 28
                                        },
                                        "end": {
                                          "line": 7,
                                          "column": 32
                                        }
                                      },
                                      "type": "Identifier",
                                      "name": "tags"
                                    },
                                    "computed": false,
                                    "value": {
                                      "loc": {
                                        "start": {
                                          "line": 7,
                                          "column": 34
                                        },
                                        "end": {
                                          "line": 7,
                                          "column": 46
                                        }
                                      },
                                      "type": "Literal",
                                      "value": "auto-close",
                                      "raw": "'auto-close'"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "loc": {
                            "start": {
                              "line": 8,
                              "column": 8
                            },
                            "end": {
                              "line": 8,
                              "column": 49
                            }
                          },
                          "type": "ExpressionStatement",
                          "expression": {
                            "loc": {
                              "start": {
                                "line": 8,
                                "column": 8
                              },
                              "end": {
                                "line": 8,
                                "column": 49
                              }
                            },
                            "type": "CallExpression",
                            "callee": {
                              "loc": {
                                "start": {
                                  "line": 8,
                                  "column": 8
                                },
                                "end": {
                                  "line": 8,
                                  "column": 14
                                }
                              },
                              "type": "Identifier",
                              "name": "Action"
                            },
                            "arguments": [
                              {
                                "loc": {
                                  "start": {
                                    "line": 8,
                                    "column": 15
                                  },
                                  "end": {
                                    "line": 8,
                                    "column": 26
                                  }
                                },
                                "type": "Literal",
                                "value": "setStatus",
                                "raw": "'setStatus'"
                              },
                              {
                                "loc": {
                                  "start": {
                                    "line": 8,
                                    "column": 28
                                  },
                                  "end": {
                                    "line": 8,
                                    "column": 48
                                  }
                                },
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "loc": {
                                      "start": {
                                        "line": 8,
                                        "column": 30
                                      },
                                      "end": {
                                        "line": 8,
                                        "column": 46
                                      }
                                    },
                                    "type": "Property",
                                    "key": {
                                      "loc": {
                                        "start": {
                                          "line": 8,
                                          "column": 30
                                        },
                                        "end": {
                                          "line": 8,
                                          "column": 36
                                        }
                                      },
                                      "type": "Identifier",
                                      "name": "status"
                                    },
                                    "computed": false,
                                    "value": {
                                      "loc": {
                                        "start": {
                                          "line": 8,
                                          "column": 38
                                        },
                                        "end": {
                                          "line": 8,
                                          "column": 46
                                        }
                                      },
                                      "type": "Literal",
                                      "value": "closed",
                                      "raw": "'closed'"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "alternate": null
            }
          ],
          "sourceType": "script"
        }
      },
      {
        "name": "deactivated_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-11-28T15:59:41.966927"
      },
      {
        "name": "event_types",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ticket-created,ticket-updated"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Auto-close all tickets from Amazon"
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 100
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Rules allow you to automatically perform actions on tickets when specific events occur. Rules are executed in the order of their `priority` field, with the rules having the higher priority being executed first.\n\nFor example, you can use rules to automatically tag your tickets, assign agents, apply macros, send messages and more."
      }
    ]
  },
  {
    "url": "/api/rules/priorities",
    "method": "updatePriorities",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "Update rules' priorities",
    "parameters": [
      {
        "name": "priorities",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/satisfaction-surveys",
    "method": "listSurveysPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Satisfaction Surveys",
    "typeScriptTag": "satisfactionSurveys",
    "description": "List surveys",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all satisfaction surveys. If omitted, the first satisfaction survey of the list will be returned.",
        "example": "WyJuZXh0IiwgIjIwMjItMDEtMDFUMDE6MDA6MDAiLCAxMjNd"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of satisfaction surveys to return.",
        "default": 30
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Attribute used to order satisfaction surveys.",
        "default": "created_datetime:desc"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page to fetch.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 7,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects to fetch per page. Default: 30.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 15,
        "default": 30
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
    "url": "/api/satisfaction-surveys",
    "method": "createSurvey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Satisfaction Surveys",
    "typeScriptTag": "satisfactionSurveys",
    "description": "Create a survey",
    "parameters": [
      {
        "name": "body_text",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Such speed, much pertinent."
      },
      {
        "name": "created_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-11-16T15:59:41.966927"
      },
      {
        "name": "customer_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 120
      },
      {
        "name": "meta",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "externalData": {
            "id": 1234
          }
        }
      },
      {
        "name": "score",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "scored_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-11-25T15:59:41.966927"
      },
      {
        "name": "sent_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-11-23T15:59:41.966927"
      },
      {
        "name": "should_send_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-11-23T15:59:41.966927"
      },
      {
        "name": "ticket_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Satisfaction surveys are one of the best ways to determine how well your team is supporting your customers. Find out more about how to use them here: https://docs.gorgias.com/survey/customer-satisfaction-survey\n\nCurrently there can be only one satisfaction survey per ticket."
      }
    ]
  },
  {
    "url": "/api/search",
    "method": "resourcesPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search for resources",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "agent"
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "user@example.com",
        "default": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 10,
        "default": 10
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
    "url": "/api/users",
    "method": "listPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List users",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all items. If omitted, the first items of the list will be returned.",
        "example": "cHJldl9fNl9fMjAyMS0wMy0wMyAwNjowMDowMA=="
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Email of the user you're looking for",
        "example": "steve@example.com"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "ID of the user in a foreign system (https://developers.gorgias.com/ you're looking for",
        "example": "user-hf329f"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of items to return.",
        "default": 30
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Attribute used to order users.",
        "default": "name:asc"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page to fetch.\n    <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n    ",
        "example": 3,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to fetch per page.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "default": 30
      },
      {
        "name": "relationships",
        "schema": "array",
        "required": false,
        "description": "Attribute used to fetch relationships of the User."
      },
      {
        "name": "roles",
        "schema": "array",
        "required": false,
        "description": "A list of roles to filter users."
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
    "url": "/api/users",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create a user",
    "parameters": [
      {
        "name": "bio",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Full stack developer at Gorgias"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "FR"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "steve@company.com"
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "user-84203241"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "meta",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "avatar_url": "https://avatars.example.com/steve-profile.jpeg",
          "position": "engineer"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Steve Frazelli"
      },
      {
        "name": "role",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "name": "admin"
        }
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Users represent people working for your company. They can be support agents, support specialists, support managers, directors, etc... Users are distinguished by their role."
      }
    ]
  },
  {
    "url": "/api/teams",
    "method": "listMatchingParameters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "List teams",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all teams. If omitted, the first team of the list will be returned.",
        "example": "WyJuZXh0IiwgIjIwMjItMDEtMDFUMDE6MDA6MDAiLCAxMjNd"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of teams to return.",
        "default": 30
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Attribute used to order teams.",
        "default": "created_datetime:desc"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page to fetch.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 7,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects to fetch per page. Default: 30.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 15,
        "default": 30
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
    "url": "/api/teams",
    "method": "createTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Create a team",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Warehouse team"
      },
      {
        "name": "decoration",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "members",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A `Team` represents a group of [users](https://developers.gorgias.com/). Teams are used with the \"auto-assign tickets\" feature: you can assign a ticket to a team (https://developers.gorgias.com/, then it will be automatically assigned to someone who is available in the given team."
      }
    ]
  },
  {
    "url": "/api/tags",
    "method": "deactivateAll",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Delete tags",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          123,
          456,
          789
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/tags",
    "method": "listMatchingParameters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List tags",
    "parameters": [
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Order tags by the given attribute.<br>Values <span style=\"color:red\">`name`, `created_datetime`, `name`, `usage` have been deprecated</span>. Use values with `:asc` or `:desc` instead.",
        "example": "created_datetime",
        "default": "created_datetime:desc"
      },
      {
        "name": "orderDir",
        "schema": "string",
        "required": false,
        "description": "Order tags with the given order direction.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __order_by__ instead.\n        ",
        "example": "desc",
        "default": "desc"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page to fetch.\n    <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n    ",
        "example": 3,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to fetch per page.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "default": 30
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search for tags' names matching the given text query (https://developers.gorgias.com/."
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all items. If omitted, the first items of the list will be returned.",
        "example": "cHJldl9fNl9fMjAyMS0wMy0wMyAwNjowMDowMA=="
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of items to return.",
        "default": 30
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
    "url": "/api/tags",
    "method": "createTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create a tag",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mark a ticket as urgent"
      },
      {
        "name": "decoration",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "urgent"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A tag is used to group tickets sharing one or several characteristics to easily retrieve them.Tags are used in [views](https://developers.gorgias.com/), [rules](https://developers.gorgias.com/) and in [statistics](https://developers.gorgias.com/) to filter out specific tickets.\nFor example, you can have an [view](https://developers.gorgias.com/) named `urgent` that displays all tickets that have an `urgent` tag and that should be handled before any other tickets."
      }
    ]
  },
  {
    "url": "/api/tags/{destination_tag_id}/merge",
    "method": "mergeTagsIntoDestination",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Merge tags",
    "parameters": [
      {
        "name": "destinationTagId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the tag that will serve as base for the merge.",
        "example": 0
      },
      {
        "name": "source_tags_ids",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          123,
          456,
          789
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A tag is used to group tickets sharing one or several characteristics to easily retrieve them.Tags are used in [views](https://developers.gorgias.com/), [rules](https://developers.gorgias.com/) and in [statistics](https://developers.gorgias.com/) to filter out specific tickets.\nFor example, you can have an [view](https://developers.gorgias.com/) named `urgent` that displays all tickets that have an `urgent` tag and that should be handled before any other tickets."
      }
    ]
  },
  {
    "url": "/api/tickets",
    "method": "listPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "List tickets",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all tickets. If omitted, the first tickets of the list will be returned.",
        "example": "cHJldl9fNl9fMjAyMS0wMy0wMyAwNjowMDowMA=="
      },
      {
        "name": "customerId",
        "schema": "integer",
        "required": false,
        "description": "The ID of a [customer](https://developers.gorgias.com/) used to select their tickets.",
        "example": 4
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "ID of the ticket in a foreign system you're looking for.",
        "example": "ticket-ge432d"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of tickets to return.",
        "default": 30
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Attribute used to order tickets.",
        "default": "created_datetime:desc"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page to fetch.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 7,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects to fetch per page. Default: 30.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 15,
        "default": 30
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": false,
        "description": "The ID of a [view](https://developers.gorgias.com/) used to select tickets matching the filters of this one.",
        "example": 21
      },
      {
        "name": "ruleId",
        "schema": "integer",
        "required": false,
        "description": "The ID of a [rule](https://developers.gorgias.com/) used to select tickets matching the filters of this one.",
        "example": 21
      },
      {
        "name": "ticketIds",
        "schema": "array",
        "required": false,
        "description": "The IDs of tickets to select.",
        "example": [
          1,
          3,
          2
        ],
        "default": []
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
    "url": "/api/tickets",
    "method": "createNewTicket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Create a ticket",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "name": "urgent"
          }
        ]
      },
      {
        "name": "assignee_team",
        "schema": "object",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "assignee_user",
        "schema": "object",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "channel",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "email"
      },
      {
        "name": "closed_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "created_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-07-05T14:42:00.384938"
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": 3924,
          "email": "john@example.com"
        }
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "RETURN#4213"
      },
      {
        "name": "from_agent",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "fr"
      },
      {
        "name": "last_message_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-02-01T19:12:32.432197"
      },
      {
        "name": "last_received_message_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-27T10:42:21.468912"
      },
      {
        "name": "messages",
        "schema": "array",
        "required": true,
        "description": "",
        "example": {
          "macros": [
            {
              "id": 5132
            }
          ],
          "id": 924712,
          "external_id": "MSG-78545",
          "message_id": "<123345676453.2445.234@web>",
          "public": true,
          "channel": "email",
          "via": "api",
          "source": {
            "type": "email",
            "from": {
              "id": 7,
              "name": "Sender Doe",
              "address": "sender@gorgias.io"
            },
            "to": [
              {
                "id": 8,
                "name": "Receiver Doe",
                "address": "receiver@gorgias.io"
              }
            ]
          },
          "subject": "Re:Refund request",
          "body_text": "Hello,\n\n        I can't place an order on your site, it says: I don't have enough credit.\n        How can I add some credits?\n\n        Cheers,\n        John Doe\n        ",
          "body_html": "Hello,<br><br>\n\n        I can't place an order on your site, it says: I don't have enough credit.<br>\n        How can I add some credits?<br><br>\n\n        Cheers,<br>\n        John Doe\n        ",
          "stripped_text": null,
          "stripped_html": null,
          "stripped_signature": null,
          "headers": {},
          "attachments": [],
          "meta": {},
          "created_datetime": "2020-01-27T10:42:21.468912",
          "opened_datetime": "2019-07-05T15:22:46.472436",
          "failed_datetime": null,
          "deleted_datetime": null,
          "actions": [],
          "uri": "/api/tickets/12/messages/924712/",
          "integration_id": 28643,
          "rule_id": 89465,
          "ticket_id": 12,
          "from_agent": true,
          "sender": {
            "id": 7
          },
          "receiver": {
            "id": 8
          },
          "last_sending_error": null,
          "replied_by": null,
          "replied_to": null
        }
      },
      {
        "name": "meta",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {}
      },
      {
        "name": "opened_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-07-05T15:22:46.472436"
      },
      {
        "name": "snooze_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "spam",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "open",
        "default": "open"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Can I get a refund?"
      },
      {
        "name": "trashed_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "updated_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-27T10:42:21.932637"
      },
      {
        "name": "via",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "email"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A ticket is a conversation between your support agents and one of your customers.\nIt contains a list of [messages](https://developers.gorgias.com/), can be associated with [tags](https://developers.gorgias.com/), assigned to a [user](https://developers.gorgias.com/) and/or a team, and also collect customer's feedback with a [satisfaction survey](https://developers.gorgias.com/)."
      }
    ]
  },
  {
    "url": "/api/tickets/{ticket_id}/messages",
    "method": "listOrdered",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Messages",
    "typeScriptTag": "ticketMessages",
    "description": "List messages of a ticket",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket to get the messages from.",
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
    "url": "/api/tickets/{ticket_id}/messages",
    "method": "createNewMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ticket Messages",
    "typeScriptTag": "ticketMessages",
    "description": "Create a message",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket to create a message in.",
        "example": 0
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": "Policy applied on external actions associated with the message if they failed.\nThree actions are possible:\n  - force: bypass the failed action and try to execute the remaining one and to send the message\n  - retry: retry the failed action\n  - cancel: delete the TicketMessage",
        "example": "force"
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": "",
        "example": []
      },
      {
        "name": "body_html",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Hello,<br><br>\n\n        I can't place an order on your site, it says: I don't have enough credit.<br>\n        How can I add some credits?<br><br>\n\n        Cheers,<br>\n        John Doe\n        "
      },
      {
        "name": "body_text",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Hello,\n\n        I can't place an order on your site, it says: I don't have enough credit.\n        How can I add some credits?\n\n        Cheers,\n        John Doe\n        "
      },
      {
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "email"
      },
      {
        "name": "created_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-27T10:42:21.468912"
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MSG-78545"
      },
      {
        "name": "failed_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "from_agent",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "message_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "<123345676453.2445.234@web>"
      },
      {
        "name": "receiver",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": 8
        }
      },
      {
        "name": "sender",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": 93
        }
      },
      {
        "name": "sent_datetime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "type": "email",
          "from": {
            "id": 7,
            "name": "Sender Doe",
            "address": "sender@gorgias.io"
          },
          "to": [
            {
              "id": 8,
              "name": "Receiver Doe",
              "address": "receiver@gorgias.io"
            }
          ]
        }
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Re:Refund request"
      },
      {
        "name": "via",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "api"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A ticket-message represents a message (https://developers.gorgias.com/ under a normalized format.\nThere are 3 types of messages:\n  - Outgoing messages: messages sent by your company (https://developers.gorgias.com/ to your customers.\n  - Incoming messages: messages sent by your [customers](https://developers.gorgias.com/) to your company.\n  - Internal notes: internal messages sent between support agents (https://developers.gorgias.com/). Internal notes are not sent/shared with your customers.\n\nA ticket-message is associated with only one ticket."
      }
    ]
  },
  {
    "url": "/api/tickets/{ticket_id}/tags",
    "method": "removeTags",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Remove ticket tags",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket.",
        "example": 0
      },
      {
        "name": "names",
        "schema": "array",
        "description": "",
        "example": [
          "refund",
          "billing"
        ]
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "",
        "example": [
          12,
          34
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/tickets/{ticket_id}/tags",
    "method": "listTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "List ticket tags",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket.",
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
    "url": "/api/tickets/{ticket_id}/tags",
    "method": "addTagsToTicket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Add ticket tags",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket.",
        "example": 0
      },
      {
        "name": "names",
        "schema": "array",
        "description": "",
        "example": [
          "refund",
          "billing"
        ]
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "",
        "example": [
          12,
          34
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/tickets/{ticket_id}/tags",
    "method": "setTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Set ticket tags",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket.",
        "example": 0
      },
      {
        "name": "names",
        "schema": "array",
        "description": "",
        "example": [
          "refund",
          "billing"
        ]
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "",
        "example": [
          12,
          34
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/tickets/{ticket_id}/custom-fields",
    "method": "listCustomFieldValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "List ticket field values",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket.",
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
    "url": "/api/tickets/{ticket_id}/custom-fields",
    "method": "updateCustomFieldsValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Update ticket fields values",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket.",
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
    "url": "/api/messages",
    "method": "listMatching",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Messages",
    "typeScriptTag": "ticketMessages",
    "description": "List messages",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all messages. If omitted, the first messages of the list will be returned.",
        "example": "cHJldl9fNl9fMjAyMS0wMy0wMyAwNjowMDowMA=="
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of messages to return.",
        "default": 30
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Attribute used to order messages.",
        "default": "created_datetime:desc"
      },
      {
        "name": "ticketId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the ticket the messages are associated with.",
        "example": 1,
        "default": null
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
    "url": "/api/stats/{name}",
    "method": "getStatistic",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Statistics",
    "typeScriptTag": "statistics",
    "description": "Retrieve a statistic",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The name of the statistic to retrieve.",
        "example": "overview"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "tags": [
            321,
            654,
            987
          ],
          "period": {
            "start_datetime": "2020-06-10T00:00:00-05:00",
            "end_datetime": "2020-06-16T23:59:59-05:00"
          },
          "agents": [
            12345,
            67890
          ],
          "channels": [
            "chat",
            "email"
          ],
          "campaigns": [
            "123",
            "234"
          ],
          "integrations": [
            555,
            777
          ],
          "score": [
            3,
            4
          ]
        }
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
    "url": "/api/stats/{name}/download",
    "method": "downloadStatisticData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Statistics",
    "typeScriptTag": "statistics",
    "description": "Download a statistic",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The name of the statistic to retrieve.",
        "example": "overview"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "tags": [
            321,
            654,
            987
          ],
          "period": {
            "start_datetime": "2020-06-10T00:00:00-05:00",
            "end_datetime": "2020-06-16T23:59:59-05:00"
          },
          "agents": [
            12345,
            67890
          ],
          "channels": [
            "chat",
            "email"
          ],
          "campaigns": [
            "123",
            "234"
          ],
          "integrations": [
            555,
            777
          ],
          "score": [
            3,
            4
          ]
        }
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
    "url": "/api/views",
    "method": "listOrderedViews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "List views",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all views. If omitted, the first views of the list will be returned.",
        "example": "WyJuZXh0IiwgIjIwMjItMDEtMDFUMDE6MDA6MDAiLCAxMjNd"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of views to return.",
        "default": 30
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Attribute used to order views.",
        "default": "created_datetime:desc"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page to fetch.\n        <span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.\n        ",
        "example": 7,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of objects to fetch per page. Default: 520.\n<span style=\"color:red\">This parameter has been deprecated.</span> Use __cursor__ and __limit__ instead.",
        "example": 15,
        "default": 520
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
    "url": "/api/views",
    "method": "createNewView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Create a view",
    "parameters": [
      {
        "name": "deactivated_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-30T11:04:34.345123"
      },
      {
        "name": "decoration",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "emoji": "🙏"
        }
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "id",
          "details",
          "tags"
        ],
        "default": []
      },
      {
        "name": "filters",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "eq(https://developers.gorgias.com/ && eq(https://developers.gorgias.com/"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My view",
        "default": ""
      },
      {
        "name": "order_by",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "updated_datetime",
        "default": "updated_datetime"
      },
      {
        "name": "order_dir",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "desc",
        "default": "desc"
      },
      {
        "name": "shared_with_teams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "shared_with_users",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-tickets"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ticket-list",
        "default": "ticket-list"
      },
      {
        "name": "visibility",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "public"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A view allows you to filter and sort the tickets of your account according to one or more criteria. For example, you can have a view that displays tickets having the tag `urgent`, or a view that display closed tickets, etc...\n Views are not like inboxes because a ticket can be present in 1 or more views if this one matches criterias of these views."
      }
    ]
  },
  {
    "url": "/api/views/{view_id}/items",
    "method": "listViewItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "List view's items",
    "parameters": [
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the view to list items from.",
        "example": 0
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all the view's items. If omitted, the first items of the list will be returned. ",
        "example": "MTU5MzE2NDMwMDAwMDAwMC1mYWxzZQ=="
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "- `prev` returns items before the cursor.\n- `next` returns items after the cursor.\n",
        "example": "next"
      },
      {
        "name": "ignoredItem",
        "schema": "integer",
        "required": false,
        "description": "ID of an item to ignore in the list of returned items.",
        "example": 4742
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of items to return.",
        "example": 50,
        "default": 30
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
    "url": "/api/views/{view_id}/items",
    "method": "searchViewItems",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Search for view's items",
    "parameters": [
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "This parameter should be set to 0.",
        "example": 0
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all the view's items. If omitted, the first items of the list will be returned. ",
        "example": "MTU5MzE2NDMwMDAwMDAwMC1mYWxzZQ=="
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "- `prev` returns items before the cursor.\n- `next` returns items after the cursor.\n",
        "example": "next"
      },
      {
        "name": "ignoredItem",
        "schema": "integer",
        "required": false,
        "description": "ID of an item to ignore in the list of returned items.",
        "example": 4742
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of items to return.",
        "example": 50,
        "default": 30
      },
      {
        "name": "view",
        "schema": "object",
        "description": "",
        "example": {
          "id": 123,
          "type": "ticket-list",
          "slug": "my-tickets",
          "name": "My view",
          "decoration": {
            "emoji": "🙏"
          },
          "filters": "eq(https://developers.gorgias.com/ && eq(https://developers.gorgias.com/",
          "search": "where is my order?",
          "fields": [
            "id",
            "details",
            "tags"
          ],
          "order_by": "updated_datetime",
          "order_dir": "desc",
          "category": "user",
          "created_datetime": "2019-11-23T15:59:41.966927",
          "deactivated_datetime": "2020-01-30T11:04:34.345123"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/phone/voice-calls",
    "method": "listMatchingParameters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Voice Calls",
    "typeScriptTag": "voiceCalls",
    "description": "List voice calls",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all items. If omitted, the first items of the list will be returned.",
        "example": "cHJldl9fNl9fMjAyMS0wMy0wMyAwNjowMDowMA=="
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of items to return.",
        "default": 30
      },
      {
        "name": "ticketId",
        "schema": "integer",
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
    "url": "/api/phone/voice-call-recordings",
    "method": "listMatchingParameters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Voice Call Recordings",
    "typeScriptTag": "voiceCallRecordings",
    "description": "List voice call recordings",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all items. If omitted, the first items of the list will be returned.",
        "example": "cHJldl9fNl9fMjAyMS0wMy0wMyAwNjowMDowMA=="
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of items to return.",
        "default": 30
      },
      {
        "name": "callId",
        "schema": "integer",
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
    "url": "/api/phone/voice-call-events",
    "method": "listMatchingParameters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Voice Call Events",
    "typeScriptTag": "voiceCallEvents",
    "description": "List voice call events",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all items. If omitted, the first items of the list will be returned.",
        "example": "cHJldl9fNl9fMjAyMS0wMy0wMyAwNjowMDowMA=="
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of items to return.",
        "default": 30
      },
      {
        "name": "callId",
        "schema": "integer",
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
    "url": "/api/widgets",
    "method": "listOrdered",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Widgets",
    "typeScriptTag": "widgets",
    "description": "List widgets",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Value indicating your position in the list of all widgets. If omitted, the first widgets of the list will be returned.",
        "example": "WyJuZXh0IiwgMjksIDkyOV0="
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of widgets to return.",
        "default": 30
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Attribute used to order widgets.",
        "default": "created_datetime:desc"
      },
      {
        "name": "integrationId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the integration to filter the widgets list by.",
        "example": 213,
        "default": null
      },
      {
        "name": "appId",
        "schema": "string",
        "required": false,
        "description": "The ID of the 3rd party app to filter the widgets list by.",
        "example": "60b9f144096cf92533e0a14d",
        "default": null
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
    "url": "/api/widgets",
    "method": "createWidget",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Widgets",
    "typeScriptTag": "widgets",
    "description": "Create a widget",
    "parameters": [
      {
        "name": "context",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ticket",
        "default": "ticket"
      },
      {
        "name": "deactivated_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-12-03T13:00:00.123456"
      },
      {
        "name": "integration_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "app_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "60b9f144096cf92533e0a14d"
      },
      {
        "name": "order",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3,
        "default": 0
      },
      {
        "name": "template",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "type": "wrapper",
          "widgets": [
            {
              "title": "Account Info",
              "path": "account_info",
              "type": "card",
              "widgets": [
                {
                  "title": "Account ID",
                  "path": "account_id",
                  "type": "text"
                }
              ]
            }
          ]
        }
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "http"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A widget is a container that can be used to display customized data coming from integrations at the right-hand sidebar of the [ticket](https://developers.gorgias.com/) or user page.\nIt contains a list of fields and values that come from integrations."
      }
    ]
  },
  {
    "url": "/api/customers/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Delete a customer",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/customers/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Retrieve a customer",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer to retrieve.",
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
    "url": "/api/customers/{id}",
    "method": "updateCustomerById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update a customer",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer to update.",
        "example": 0
      },
      {
        "name": "channels",
        "schema": "array",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "john@example.com"
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": "",
        "example": "customer-84203241"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "fr"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "John Smith"
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "UTC",
        "default": "UTC"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A customer represents a customer of your company."
      }
    ]
  },
  {
    "url": "/api/custom-fields/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Retrieve a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the custom field to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A custom field represents a field for which you can add value on various entities."
      }
    ]
  },
  {
    "url": "/api/custom-fields/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Update a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the custom field to update.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "An amazing field description."
      },
      {
        "name": "id",
        "schema": "integer",
        "description": "",
        "example": 123
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": "",
        "example": "custom-field-84203241"
      },
      {
        "name": "object_type",
        "schema": "string",
        "description": "",
        "example": "Ticket"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Test field"
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "required",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "managed_type",
        "schema": "string",
        "description": "",
        "example": "contact_reason"
      },
      {
        "name": "definition",
        "schema": "undefined",
        "description": "",
        "example": {
          "input_settings": {
            "placeholder": "Enter this here...",
            "min": "120.5",
            "max": "130",
            "input_type": "input_number"
          },
          "data_type": "number"
        }
      },
      {
        "name": "created_datetime",
        "schema": "string",
        "description": "",
        "example": "2019-01-02T03:04:05.123456"
      },
      {
        "name": "updated_datetime",
        "schema": "string",
        "description": "",
        "example": "2020-01-02T03:04:05.123456"
      },
      {
        "name": "deactivated_datetime",
        "schema": "string",
        "description": "",
        "example": "2021-01-02T03:04:05.123456"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A custom field represents a field for which you can add value on various entities."
      }
    ]
  },
  {
    "url": "/api/events/{id}",
    "method": "getEventById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Retrieve an event",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the event to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Events are our way of letting you know when something interesting happens in your account. For example, when a ticket is created we create a `ticket-created` event; When a user is updated we create a `user-updated` event."
      }
    ]
  },
  {
    "url": "/api/integrations/{id}",
    "method": "deleteIntegration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Delete an integration",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the integration to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/integrations/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Retrieve an integration",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the integration to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Integrations connect Gorgias with external services (https://developers.gorgias.com/.\n\nThere are official Gorgias integrations that can be found in the Integrations page in the helpdesk and there are custom HTTP integrations.\n\nMost integrations use HTTP APIs."
      }
    ]
  },
  {
    "url": "/api/integrations/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Update an integration",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the integration to update.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deactivated_datetime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "http",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": 987,
          "url": "https://company.com/api/customers?email={{ticket.customer.email}}",
          "method": "GET",
          "headers": {
            "x-api-key": "abcdef12345"
          },
          "form": {
            "hello": "world",
            "ticket_id": "{{ticket.id}}"
          },
          "request_content_type": "application/json",
          "response_content_type": "application/json",
          "triggers": {
            "ticket_created": true,
            "ticket_updated": true,
            "ticket_message_created": true
          }
        }
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My HTTP integration"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Integrations connect Gorgias with external services (https://developers.gorgias.com/.\n\nThere are official Gorgias integrations that can be found in the Integrations page in the helpdesk and there are custom HTTP integrations.\n\nMost integrations use HTTP APIs."
      }
    ]
  },
  {
    "url": "/api/jobs/{id}",
    "method": "cancelJob",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Cancel a job",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the job to cancel.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/jobs/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Retrieve a job",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the job to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A job is an object used to perform long-running tasks. For example, closing 10k tickets, exporting 500k tickets, and more. \n\nJobs are processed asynchronously, meaning that once a job is created, it will run in background on Gorgias's servers. According to the type and size of the task, a job can take a few minutes or several hours to be executed. You can use our API to check the status of the job.\n\nJobs can be canceled at any time but be aware that if a job already started, changes done by this one won't be reverted. For example, if you created a job to close 10k tickets and you cancel it at some point, the already closed tickets won't be reopened."
      }
    ]
  },
  {
    "url": "/api/jobs/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Update a job",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the job to update.",
        "example": 0
      },
      {
        "name": "meta",
        "schema": "object",
        "description": "",
        "example": {
          "description": "This job closes all tickets created in 2018"
        }
      },
      {
        "name": "params",
        "schema": "object",
        "description": "",
        "example": {
          "ticket_ids": [
            1,
            2,
            3
          ],
          "updates": {
            "status": "open"
          }
        }
      },
      {
        "name": "scheduled_datetime",
        "schema": "string",
        "description": "",
        "example": "2019-11-23T16:30:00.966927"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "canceled"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A job is an object used to perform long-running tasks. For example, closing 10k tickets, exporting 500k tickets, and more. \n\nJobs are processed asynchronously, meaning that once a job is created, it will run in background on Gorgias's servers. According to the type and size of the task, a job can take a few minutes or several hours to be executed. You can use our API to check the status of the job.\n\nJobs can be canceled at any time but be aware that if a job already started, changes done by this one won't be reverted. For example, if you created a job to close 10k tickets and you cancel it at some point, the already closed tickets won't be reopened."
      }
    ]
  },
  {
    "url": "/api/macros/{id}",
    "method": "deleteMacroById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Delete a macro",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the macro to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/macros/{id}",
    "method": "getMacroById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Retrieve a macro",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the macro to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A macro (https://developers.gorgias.com/ is a list of [actions](https://developers.gorgias.com/) that can be applied to tickets to modify them, and/or reply to them.Macros can be applied manually by agents or automatically by rules.\nFor example, a single macro can add a tag to the ticket, assign an agent to it and send a pre-defined response."
      }
    ]
  },
  {
    "url": "/api/macros/{id}",
    "method": "updateMacroById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Update a macro",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the macro to update.",
        "example": 0
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": "",
        "example": "CUS-324512"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Order status inquiry"
      },
      {
        "name": "intent",
        "schema": "string",
        "description": "",
        "example": "discount/request"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "en"
      },
      {
        "name": "actions",
        "schema": "array",
        "description": "",
        "example": [
          {
            "title": "Add tags",
            "arguments": {
              "tags": "question, order-status"
            },
            "name": "addTags",
            "type": "user"
          },
          {
            "title": "Add tags",
            "arguments": {
              "body_html": "<div>Hi {{ticket.customer.firstname}},</div><br><div>Your order has been delivered.</div>",
              "body_text": "Hi {{ticket.customer.firstname}},\n\nYour order has been delivered."
            },
            "name": "setResponseText",
            "type": "user"
          }
        ],
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A macro (https://developers.gorgias.com/ is a list of [actions](https://developers.gorgias.com/) that can be applied to tickets to modify them, and/or reply to them.Macros can be applied manually by agents or automatically by rules.\nFor example, a single macro can add a tag to the ticket, assign an agent to it and send a pre-defined response."
      }
    ]
  },
  {
    "url": "/api/rules/{id}",
    "method": "deleteRuleById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "Delete a rule",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the rule to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/rules/{id}",
    "method": "getRuleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "Retrieve a rule",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the rule to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Rules allow you to automatically perform actions on tickets when specific events occur. Rules are executed in the order of their `priority` field, with the rules having the higher priority being executed first.\n\nFor example, you can use rules to automatically tag your tickets, assign agents, apply macros, send messages and more."
      }
    ]
  },
  {
    "url": "/api/rules/{id}",
    "method": "updateRuleById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "Update a rule",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the rule to update.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Automatically close all tickets from Amazon because there is nothing to do for them. We still want to keep them to be able to search."
      },
      {
        "name": "code",
        "schema": "string",
        "description": "",
        "example": "\nif (https://developers.gorgias.com/ && eq(https://developers.gorgias.com/) {\n    if (https://developers.gorgias.com/ || containsAny(https://developers.gorgias.com/) {\n        Action(https://developers.gorgias.com/;\n        Action(https://developers.gorgias.com/\n    }\n}\n"
      },
      {
        "name": "code_ast",
        "schema": "object",
        "description": "",
        "example": {
          "loc": {
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 1
            }
          },
          "type": "Program",
          "body": [
            {
              "loc": {
                "start": {
                  "line": 2,
                  "column": 0
                },
                "end": {
                  "line": 10,
                  "column": 1
                }
              },
              "type": "IfStatement",
              "test": {
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 4
                  },
                  "end": {
                    "line": 2,
                    "column": 61
                  }
                },
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 4
                    },
                    "end": {
                      "line": 2,
                      "column": 32
                    }
                  },
                  "type": "CallExpression",
                  "callee": {
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 4
                      },
                      "end": {
                        "line": 2,
                        "column": 6
                      }
                    },
                    "type": "Identifier",
                    "name": "eq"
                  },
                  "arguments": [
                    {
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 7
                        },
                        "end": {
                          "line": 2,
                          "column": 24
                        }
                      },
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 7
                          },
                          "end": {
                            "line": 2,
                            "column": 13
                          }
                        },
                        "type": "Identifier",
                        "name": "ticket"
                      },
                      "property": {
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 14
                          },
                          "end": {
                            "line": 2,
                            "column": 24
                          }
                        },
                        "type": "Identifier",
                        "name": "from_agent"
                      }
                    },
                    {
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 26
                        },
                        "end": {
                          "line": 2,
                          "column": 31
                        }
                      },
                      "type": "Literal",
                      "value": false,
                      "raw": "false"
                    }
                  ]
                },
                "right": {
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 36
                    },
                    "end": {
                      "line": 2,
                      "column": 61
                    }
                  },
                  "type": "CallExpression",
                  "callee": {
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 36
                      },
                      "end": {
                        "line": 2,
                        "column": 38
                      }
                    },
                    "type": "Identifier",
                    "name": "eq"
                  },
                  "arguments": [
                    {
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 39
                        },
                        "end": {
                          "line": 2,
                          "column": 52
                        }
                      },
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 39
                          },
                          "end": {
                            "line": 2,
                            "column": 45
                          }
                        },
                        "type": "Identifier",
                        "name": "ticket"
                      },
                      "property": {
                        "loc": {
                          "start": {
                            "line": 2,
                            "column": 46
                          },
                          "end": {
                            "line": 2,
                            "column": 52
                          }
                        },
                        "type": "Identifier",
                        "name": "status"
                      }
                    },
                    {
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 54
                        },
                        "end": {
                          "line": 2,
                          "column": 60
                        }
                      },
                      "type": "Literal",
                      "value": "open",
                      "raw": "'open'"
                    }
                  ]
                }
              },
              "consequent": {
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 63
                  },
                  "end": {
                    "line": 10,
                    "column": 1
                  }
                },
                "type": "BlockStatement",
                "body": [
                  {
                    "loc": {
                      "start": {
                        "line": 3,
                        "column": 4
                      },
                      "end": {
                        "line": 9,
                        "column": 5
                      }
                    },
                    "type": "IfStatement",
                    "test": {
                      "loc": {
                        "start": {
                          "line": 3,
                          "column": 8
                        },
                        "end": {
                          "line": 6,
                          "column": 10
                        }
                      },
                      "type": "LogicalExpression",
                      "operator": "||",
                      "left": {
                        "loc": {
                          "start": {
                            "line": 3,
                            "column": 8
                          },
                          "end": {
                            "line": 3,
                            "column": 61
                          }
                        },
                        "type": "CallExpression",
                        "callee": {
                          "loc": {
                            "start": {
                              "line": 3,
                              "column": 8
                            },
                            "end": {
                              "line": 3,
                              "column": 19
                            }
                          },
                          "type": "Identifier",
                          "name": "containsAny"
                        },
                        "arguments": [
                          {
                            "loc": {
                              "start": {
                                "line": 3,
                                "column": 20
                              },
                              "end": {
                                "line": 3,
                                "column": 40
                              }
                            },
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "loc": {
                                "start": {
                                  "line": 3,
                                  "column": 20
                                },
                                "end": {
                                  "line": 3,
                                  "column": 35
                                }
                              },
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "loc": {
                                  "start": {
                                    "line": 3,
                                    "column": 20
                                  },
                                  "end": {
                                    "line": 3,
                                    "column": 27
                                  }
                                },
                                "type": "Identifier",
                                "name": "message"
                              },
                              "property": {
                                "loc": {
                                  "start": {
                                    "line": 3,
                                    "column": 28
                                  },
                                  "end": {
                                    "line": 3,
                                    "column": 35
                                  }
                                },
                                "type": "Identifier",
                                "name": "intents"
                              }
                            },
                            "property": {
                              "loc": {
                                "start": {
                                  "line": 3,
                                  "column": 36
                                },
                                "end": {
                                  "line": 3,
                                  "column": 40
                                }
                              },
                              "type": "Identifier",
                              "name": "name"
                            }
                          },
                          {
                            "loc": {
                              "start": {
                                "line": 3,
                                "column": 42
                              },
                              "end": {
                                "line": 3,
                                "column": 60
                              }
                            },
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "loc": {
                                  "start": {
                                    "line": 3,
                                    "column": 43
                                  },
                                  "end": {
                                    "line": 3,
                                    "column": 59
                                  }
                                },
                                "type": "Literal",
                                "value": "other/no_reply",
                                "raw": "'other/no_reply'"
                              }
                            ]
                          }
                        ]
                      },
                      "right": {
                        "loc": {
                          "start": {
                            "line": 3,
                            "column": 65
                          },
                          "end": {
                            "line": 6,
                            "column": 10
                          }
                        },
                        "type": "CallExpression",
                        "callee": {
                          "loc": {
                            "start": {
                              "line": 3,
                              "column": 65
                            },
                            "end": {
                              "line": 3,
                              "column": 76
                            }
                          },
                          "type": "Identifier",
                          "name": "containsAny"
                        },
                        "arguments": [
                          {
                            "loc": {
                              "start": {
                                "line": 3,
                                "column": 77
                              },
                              "end": {
                                "line": 3,
                                "column": 98
                              }
                            },
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "loc": {
                                "start": {
                                  "line": 3,
                                  "column": 77
                                },
                                "end": {
                                  "line": 3,
                                  "column": 92
                                }
                              },
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "loc": {
                                  "start": {
                                    "line": 3,
                                    "column": 77
                                  },
                                  "end": {
                                    "line": 3,
                                    "column": 83
                                  }
                                },
                                "type": "Identifier",
                                "name": "ticket"
                              },
                              "property": {
                                "loc": {
                                  "start": {
                                    "line": 3,
                                    "column": 84
                                  },
                                  "end": {
                                    "line": 3,
                                    "column": 92
                                  }
                                },
                                "type": "Identifier",
                                "name": "customer"
                              }
                            },
                            "property": {
                              "loc": {
                                "start": {
                                  "line": 3,
                                  "column": 93
                                },
                                "end": {
                                  "line": 3,
                                  "column": 98
                                }
                              },
                              "type": "Identifier",
                              "name": "email"
                            }
                          },
                          {
                            "loc": {
                              "start": {
                                "line": 3,
                                "column": 100
                              },
                              "end": {
                                "line": 6,
                                "column": 9
                              }
                            },
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "loc": {
                                  "start": {
                                    "line": 4,
                                    "column": 12
                                  },
                                  "end": {
                                    "line": 4,
                                    "column": 22
                                  }
                                },
                                "type": "Literal",
                                "value": "noreply@",
                                "raw": "'noreply@'"
                              },
                              {
                                "loc": {
                                  "start": {
                                    "line": 5,
                                    "column": 12
                                  },
                                  "end": {
                                    "line": 5,
                                    "column": 22
                                  }
                                },
                                "type": "Literal",
                                "value": "@noreply",
                                "raw": "'@noreply'"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "consequent": {
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 12
                        },
                        "end": {
                          "line": 9,
                          "column": 5
                        }
                      },
                      "type": "BlockStatement",
                      "body": [
                        {
                          "loc": {
                            "start": {
                              "line": 7,
                              "column": 8
                            },
                            "end": {
                              "line": 7,
                              "column": 50
                            }
                          },
                          "type": "ExpressionStatement",
                          "expression": {
                            "loc": {
                              "start": {
                                "line": 7,
                                "column": 8
                              },
                              "end": {
                                "line": 7,
                                "column": 49
                              }
                            },
                            "type": "CallExpression",
                            "callee": {
                              "loc": {
                                "start": {
                                  "line": 7,
                                  "column": 8
                                },
                                "end": {
                                  "line": 7,
                                  "column": 14
                                }
                              },
                              "type": "Identifier",
                              "name": "Action"
                            },
                            "arguments": [
                              {
                                "loc": {
                                  "start": {
                                    "line": 7,
                                    "column": 15
                                  },
                                  "end": {
                                    "line": 7,
                                    "column": 24
                                  }
                                },
                                "type": "Literal",
                                "value": "addTags",
                                "raw": "'addTags'"
                              },
                              {
                                "loc": {
                                  "start": {
                                    "line": 7,
                                    "column": 26
                                  },
                                  "end": {
                                    "line": 7,
                                    "column": 48
                                  }
                                },
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "loc": {
                                      "start": {
                                        "line": 7,
                                        "column": 28
                                      },
                                      "end": {
                                        "line": 7,
                                        "column": 46
                                      }
                                    },
                                    "type": "Property",
                                    "key": {
                                      "loc": {
                                        "start": {
                                          "line": 7,
                                          "column": 28
                                        },
                                        "end": {
                                          "line": 7,
                                          "column": 32
                                        }
                                      },
                                      "type": "Identifier",
                                      "name": "tags"
                                    },
                                    "computed": false,
                                    "value": {
                                      "loc": {
                                        "start": {
                                          "line": 7,
                                          "column": 34
                                        },
                                        "end": {
                                          "line": 7,
                                          "column": 46
                                        }
                                      },
                                      "type": "Literal",
                                      "value": "auto-close",
                                      "raw": "'auto-close'"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "loc": {
                            "start": {
                              "line": 8,
                              "column": 8
                            },
                            "end": {
                              "line": 8,
                              "column": 49
                            }
                          },
                          "type": "ExpressionStatement",
                          "expression": {
                            "loc": {
                              "start": {
                                "line": 8,
                                "column": 8
                              },
                              "end": {
                                "line": 8,
                                "column": 49
                              }
                            },
                            "type": "CallExpression",
                            "callee": {
                              "loc": {
                                "start": {
                                  "line": 8,
                                  "column": 8
                                },
                                "end": {
                                  "line": 8,
                                  "column": 14
                                }
                              },
                              "type": "Identifier",
                              "name": "Action"
                            },
                            "arguments": [
                              {
                                "loc": {
                                  "start": {
                                    "line": 8,
                                    "column": 15
                                  },
                                  "end": {
                                    "line": 8,
                                    "column": 26
                                  }
                                },
                                "type": "Literal",
                                "value": "setStatus",
                                "raw": "'setStatus'"
                              },
                              {
                                "loc": {
                                  "start": {
                                    "line": 8,
                                    "column": 28
                                  },
                                  "end": {
                                    "line": 8,
                                    "column": 48
                                  }
                                },
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "loc": {
                                      "start": {
                                        "line": 8,
                                        "column": 30
                                      },
                                      "end": {
                                        "line": 8,
                                        "column": 46
                                      }
                                    },
                                    "type": "Property",
                                    "key": {
                                      "loc": {
                                        "start": {
                                          "line": 8,
                                          "column": 30
                                        },
                                        "end": {
                                          "line": 8,
                                          "column": 36
                                        }
                                      },
                                      "type": "Identifier",
                                      "name": "status"
                                    },
                                    "computed": false,
                                    "value": {
                                      "loc": {
                                        "start": {
                                          "line": 8,
                                          "column": 38
                                        },
                                        "end": {
                                          "line": 8,
                                          "column": 46
                                        }
                                      },
                                      "type": "Literal",
                                      "value": "closed",
                                      "raw": "'closed'"
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "alternate": null
            }
          ],
          "sourceType": "script"
        }
      },
      {
        "name": "deactivated_datetime",
        "schema": "string",
        "description": "",
        "example": "2019-11-28T15:59:41.966927"
      },
      {
        "name": "event_types",
        "schema": "string",
        "description": "",
        "example": "ticket-created,ticket-updated"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Auto-close all tickets from Amazon"
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": "",
        "example": 100
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Rules allow you to automatically perform actions on tickets when specific events occur. Rules are executed in the order of their `priority` field, with the rules having the higher priority being executed first.\n\nFor example, you can use rules to automatically tag your tickets, assign agents, apply macros, send messages and more."
      }
    ]
  },
  {
    "url": "/api/satisfaction-surveys/{id}",
    "method": "getSurvey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Satisfaction Surveys",
    "typeScriptTag": "satisfactionSurveys",
    "description": "Retrieve a survey",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the survey to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Satisfaction surveys are one of the best ways to determine how well your team is supporting your customers. Find out more about how to use them here: https://docs.gorgias.com/survey/customer-satisfaction-survey\n\nCurrently there can be only one satisfaction survey per ticket."
      }
    ]
  },
  {
    "url": "/api/satisfaction-surveys/{id}",
    "method": "updateSurvey",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Satisfaction Surveys",
    "typeScriptTag": "satisfactionSurveys",
    "description": "Update a survey",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the survey to update.",
        "example": 0
      },
      {
        "name": "body_text",
        "schema": "string",
        "description": "",
        "example": "Such speed, much pertinent."
      },
      {
        "name": "created_datetime",
        "schema": "string",
        "description": "",
        "example": "2019-11-16T15:59:41.966927"
      },
      {
        "name": "customer_id",
        "schema": "integer",
        "description": "",
        "example": 120
      },
      {
        "name": "meta",
        "schema": "object",
        "description": "",
        "example": {
          "externalData": {
            "id": 1234
          }
        }
      },
      {
        "name": "score",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "scored_datetime",
        "schema": "string",
        "description": "",
        "example": "2019-11-25T15:59:41.966927"
      },
      {
        "name": "sent_datetime",
        "schema": "string",
        "description": "",
        "example": "2019-11-23T15:59:41.966927"
      },
      {
        "name": "should_send_datetime",
        "schema": "string",
        "description": "",
        "example": "2019-11-23T15:59:41.966927"
      },
      {
        "name": "ticket_id",
        "schema": "integer",
        "description": "",
        "example": 12
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Satisfaction surveys are one of the best ways to determine how well your team is supporting your customers. Find out more about how to use them here: https://docs.gorgias.com/survey/customer-satisfaction-survey\n\nCurrently there can be only one satisfaction survey per ticket."
      }
    ]
  },
  {
    "url": "/api/users/{id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/users/{id}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieve a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to retrieve. Use the ID `0` to fetch your user (https://developers.gorgias.com/.\n",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The requested user."
      }
    ]
  },
  {
    "url": "/api/users/{id}",
    "method": "updateUserById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to update. Use the ID `0` to update your user (https://developers.gorgias.com/.\n",
        "example": 0
      },
      {
        "name": "bio",
        "schema": "string",
        "description": "",
        "example": "Full stack developer at Gorgias"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "FR"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "steve@company.com"
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": "",
        "example": "user-84203241"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "fr"
      },
      {
        "name": "meta",
        "schema": "object",
        "description": "",
        "example": {
          "avatar_url": "https://avatars.example.com/steve-profile.jpeg",
          "position": "engineer"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Steve Frazelli"
      },
      {
        "name": "new_password",
        "schema": "string",
        "description": "",
        "example": "NewPassword6502!"
      },
      {
        "name": "old_password",
        "schema": "string",
        "description": "",
        "example": "OldPassword5031!"
      },
      {
        "name": "password_confirmation",
        "schema": "string",
        "description": "",
        "example": "OldPassword5031!"
      },
      {
        "name": "role",
        "schema": "object",
        "description": "",
        "example": {
          "name": "admin"
        }
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "US/Pacific"
      },
      {
        "name": "two_fa_code",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Users represent people working for your company. They can be support agents, support specialists, support managers, directors, etc... Users are distinguished by their role."
      }
    ]
  },
  {
    "url": "/api/teams/{id}",
    "method": "deleteTeamById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Delete a team",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the team to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/teams/{id}",
    "method": "getTeamById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Retrieve a team",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the team to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A `Team` represents a group of [users](https://developers.gorgias.com/). Teams are used with the \"auto-assign tickets\" feature: you can assign a ticket to a team (https://developers.gorgias.com/, then it will be automatically assigned to someone who is available in the given team."
      }
    ]
  },
  {
    "url": "/api/teams/{id}",
    "method": "updateTeamById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Update a team",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the team to update.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Warehouse team"
      },
      {
        "name": "decoration",
        "schema": "object",
        "description": ""
      },
      {
        "name": "members",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A `Team` represents a group of [users](https://developers.gorgias.com/). Teams are used with the \"auto-assign tickets\" feature: you can assign a ticket to a team (https://developers.gorgias.com/, then it will be automatically assigned to someone who is available in the given team."
      }
    ]
  },
  {
    "url": "/api/tags/{id}",
    "method": "deleteTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Delete a tag",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the tag to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/tags/{id}",
    "method": "getTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Retrieve a tag",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the tag to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A tag is used to group tickets sharing one or several characteristics to easily retrieve them.Tags are used in [views](https://developers.gorgias.com/), [rules](https://developers.gorgias.com/) and in [statistics](https://developers.gorgias.com/) to filter out specific tickets.\nFor example, you can have an [view](https://developers.gorgias.com/) named `urgent` that displays all tickets that have an `urgent` tag and that should be handled before any other tickets."
      }
    ]
  },
  {
    "url": "/api/tags/{id}",
    "method": "updateTagById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Update a tag",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the tag to update.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Mark a ticket as urgent"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "urgent"
      },
      {
        "name": "decoration",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A tag is used to group tickets sharing one or several characteristics to easily retrieve them.Tags are used in [views](https://developers.gorgias.com/), [rules](https://developers.gorgias.com/) and in [statistics](https://developers.gorgias.com/) to filter out specific tickets.\nFor example, you can have an [view](https://developers.gorgias.com/) named `urgent` that displays all tickets that have an `urgent` tag and that should be handled before any other tickets."
      }
    ]
  },
  {
    "url": "/api/tickets/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Delete a ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/tickets/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Retrieve a ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket to retrieve.",
        "example": 0
      },
      {
        "name": "relationships",
        "schema": "array",
        "required": false,
        "description": "Names of relations that should be included in returned data.",
        "example": [
          "custom_fields"
        ],
        "default": []
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
    "url": "/api/tickets/{id}",
    "method": "updateTicketById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Update a ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket to update.",
        "example": 0
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          {
            "name": "urgent"
          }
        ]
      },
      {
        "name": "assignee_team",
        "schema": "object",
        "description": "",
        "example": null
      },
      {
        "name": "assignee_user",
        "schema": "object",
        "description": "",
        "example": null
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "",
        "example": "email"
      },
      {
        "name": "closed_datetime",
        "schema": "string",
        "description": "",
        "example": null
      },
      {
        "name": "customer",
        "schema": "object",
        "description": "",
        "example": {
          "id": 3924,
          "email": "john@example.com"
        }
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": "",
        "example": "RETURN#4213"
      },
      {
        "name": "from_agent",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_unread",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "fr"
      },
      {
        "name": "last_message_datetime",
        "schema": "string",
        "description": "",
        "example": "2020-02-01T19:12:32.432197"
      },
      {
        "name": "last_received_message_datetime",
        "schema": "string",
        "description": "",
        "example": "2020-01-27T10:42:21.468912"
      },
      {
        "name": "meta",
        "schema": "object",
        "description": "",
        "example": {}
      },
      {
        "name": "opened_datetime",
        "schema": "string",
        "description": "",
        "example": "2019-07-05T15:22:46.472436"
      },
      {
        "name": "snooze_datetime",
        "schema": "string",
        "description": "",
        "example": null
      },
      {
        "name": "spam",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "open",
        "default": "open"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": "",
        "example": "Can I get a refund?"
      },
      {
        "name": "trashed_datetime",
        "schema": "string",
        "description": "",
        "example": null
      },
      {
        "name": "updated_datetime",
        "schema": "string",
        "description": "",
        "example": "2020-01-27T10:42:21.932637"
      },
      {
        "name": "via",
        "schema": "string",
        "description": "",
        "example": "email"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A ticket is a conversation between your support agents and one of your customers.\nIt contains a list of [messages](https://developers.gorgias.com/), can be associated with [tags](https://developers.gorgias.com/), assigned to a [user](https://developers.gorgias.com/) and/or a team, and also collect customer's feedback with a [satisfaction survey](https://developers.gorgias.com/)."
      }
    ]
  },
  {
    "url": "/api/tickets/{ticket_id}/messages/{id}",
    "method": "deleteMessageById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Ticket Messages",
    "typeScriptTag": "ticketMessages",
    "description": "Delete a message",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket associated with the message.",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the message to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/tickets/{ticket_id}/messages/{id}",
    "method": "getMessage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Messages",
    "typeScriptTag": "ticketMessages",
    "description": "Retrieve a message",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket associated with the message.",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the message to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A ticket-message represents a message (https://developers.gorgias.com/ under a normalized format.\nThere are 3 types of messages:\n  - Outgoing messages: messages sent by your company (https://developers.gorgias.com/ to your customers.\n  - Incoming messages: messages sent by your [customers](https://developers.gorgias.com/) to your company.\n  - Internal notes: internal messages sent between support agents (https://developers.gorgias.com/). Internal notes are not sent/shared with your customers.\n\nA ticket-message is associated with only one ticket."
      }
    ]
  },
  {
    "url": "/api/tickets/{ticket_id}/messages/{id}",
    "method": "updateMessage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ticket Messages",
    "typeScriptTag": "ticketMessages",
    "description": "Update a message",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket associated with the message.",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the message to update.",
        "example": 0
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": "Policy applied on external actions associated with the message if they failed.\nThree actions are possible:\n  - force: bypass the failed action and try to execute the remaining one and to send the message\n  - retry: retry the failed action\n  - cancel: delete the TicketMessage",
        "example": "force"
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": "",
        "example": []
      },
      {
        "name": "body_html",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Hello,<br><br>\n\n        I can't place an order on your site, it says: I don't have enough credit.<br>\n        How can I add some credits?<br><br>\n\n        Cheers,<br>\n        John Doe\n        "
      },
      {
        "name": "body_text",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Hello,\n\n        I can't place an order on your site, it says: I don't have enough credit.\n        How can I add some credits?\n\n        Cheers,\n        John Doe\n        "
      },
      {
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "email"
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MSG-78545"
      },
      {
        "name": "failed_datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "from_agent",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "message_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "<123345676453.2445.234@web>"
      },
      {
        "name": "receiver",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": 8
        }
      },
      {
        "name": "sender",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "id": 93
        }
      },
      {
        "name": "sent_datetime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "type": "email",
          "from": {
            "id": 7,
            "name": "Sender Doe",
            "address": "sender@gorgias.io"
          },
          "to": [
            {
              "id": 8,
              "name": "Receiver Doe",
              "address": "receiver@gorgias.io"
            }
          ]
        }
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Re:Refund request"
      },
      {
        "name": "via",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "api"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A ticket-message represents a message (https://developers.gorgias.com/ under a normalized format.\nThere are 3 types of messages:\n  - Outgoing messages: messages sent by your company (https://developers.gorgias.com/ to your customers.\n  - Incoming messages: messages sent by your [customers](https://developers.gorgias.com/) to your company.\n  - Internal notes: internal messages sent between support agents (https://developers.gorgias.com/). Internal notes are not sent/shared with your customers.\n\nA ticket-message is associated with only one ticket."
      }
    ]
  },
  {
    "url": "/api/tickets/{ticket_id}/custom-fields/{id}",
    "method": "deleteFieldValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Delete ticket field value",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket.",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the custom field.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/tickets/{ticket_id}/custom-fields/{id}",
    "method": "updateCustomFieldValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Update ticket field value",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket.",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the custom field.",
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
    "url": "/api/views/{id}",
    "method": "deleteView",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Delete a view",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the view to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/views/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Retrieve a view",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the view to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A view allows you to filter and sort the tickets of your account according to one or more criteria. For example, you can have a view that displays tickets having the tag `urgent`, or a view that display closed tickets, etc...\n Views are not like inboxes because a ticket can be present in 1 or more views if this one matches criterias of these views."
      }
    ]
  },
  {
    "url": "/api/views/{id}",
    "method": "updateViewById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Update a view",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the view to update.",
        "example": 0
      },
      {
        "name": "deactivated_datetime",
        "schema": "string",
        "description": "",
        "example": "2020-01-30T11:04:34.345123"
      },
      {
        "name": "decoration",
        "schema": "object",
        "description": "",
        "example": {
          "emoji": "🙏"
        }
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "",
        "example": [
          "id",
          "details",
          "tags"
        ],
        "default": []
      },
      {
        "name": "filters",
        "schema": "string",
        "description": "",
        "example": "eq(https://developers.gorgias.com/ && eq(https://developers.gorgias.com/"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "My view",
        "default": ""
      },
      {
        "name": "order_by",
        "schema": "string",
        "description": "",
        "example": "updated_datetime",
        "default": "updated_datetime"
      },
      {
        "name": "order_dir",
        "schema": "string",
        "description": "",
        "example": "desc",
        "default": "desc"
      },
      {
        "name": "shared_with_teams",
        "schema": "array",
        "description": ""
      },
      {
        "name": "shared_with_users",
        "schema": "array",
        "description": ""
      },
      {
        "name": "slug",
        "schema": "string",
        "description": "",
        "example": "my-tickets"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "ticket-list",
        "default": "ticket-list"
      },
      {
        "name": "visibility",
        "schema": "string",
        "description": "",
        "default": "public"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A view allows you to filter and sort the tickets of your account according to one or more criteria. For example, you can have a view that displays tickets having the tag `urgent`, or a view that display closed tickets, etc...\n Views are not like inboxes because a ticket can be present in 1 or more views if this one matches criterias of these views."
      }
    ]
  },
  {
    "url": "/api/phone/voice-calls/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Voice Calls",
    "typeScriptTag": "voiceCalls",
    "description": "Retrieve a voice call",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the voice call to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A voice call represents a phone call received from a customer (https://developers.gorgias.com/ or addressed to a customer (https://developers.gorgias.com/."
      }
    ]
  },
  {
    "url": "/api/phone/voice-call-recordings/{id}",
    "method": "deleteRecording",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Voice Call Recordings",
    "typeScriptTag": "voiceCallRecordings",
    "description": "Delete a voice call recording",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the voice call recording to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content if everything went well."
      }
    ]
  },
  {
    "url": "/api/phone/voice-call-recordings/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Voice Call Recordings",
    "typeScriptTag": "voiceCallRecordings",
    "description": "Retrieve a voice call recording",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the voice call recording to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A voicemail left after a missed voice call, or a voice call recording."
      }
    ]
  },
  {
    "url": "/api/phone/voice-call-events/{id}",
    "method": "getEventById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Voice Call Events",
    "typeScriptTag": "voiceCallEvents",
    "description": "Retrieve a voice call event",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the voice event to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An event related to a voice call."
      }
    ]
  },
  {
    "url": "/api/widgets/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Widgets",
    "typeScriptTag": "widgets",
    "description": "Delete a widget",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the widget to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      }
    ]
  },
  {
    "url": "/api/widgets/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Widgets",
    "typeScriptTag": "widgets",
    "description": "Retrieve a widget",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the widget to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A widget is a container that can be used to display customized data coming from integrations at the right-hand sidebar of the [ticket](https://developers.gorgias.com/) or user page.\nIt contains a list of fields and values that come from integrations."
      }
    ]
  },
  {
    "url": "/api/widgets/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Widgets",
    "typeScriptTag": "widgets",
    "description": "Update a widget",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the widget to update.",
        "example": 0
      },
      {
        "name": "context",
        "schema": "string",
        "description": "",
        "example": "ticket",
        "default": "ticket"
      },
      {
        "name": "deactivated_datetime",
        "schema": "string",
        "description": "",
        "example": "2020-12-03T13:00:00.123456"
      },
      {
        "name": "integration_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "app_id",
        "schema": "string",
        "description": "",
        "example": "60b9f144096cf92533e0a14d"
      },
      {
        "name": "order",
        "schema": "integer",
        "description": "",
        "example": 3,
        "default": 0
      },
      {
        "name": "template",
        "schema": "object",
        "description": "",
        "example": {
          "type": "wrapper",
          "widgets": [
            {
              "title": "Account Info",
              "path": "account_info",
              "type": "card",
              "widgets": [
                {
                  "title": "Account ID",
                  "path": "account_id",
                  "type": "text"
                }
              ]
            }
          ]
        }
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "http"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A widget is a container that can be used to display customized data coming from integrations at the right-hand sidebar of the [ticket](https://developers.gorgias.com/) or user page.\nIt contains a list of fields and values that come from integrations."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Gorgias REST API"
      apiBaseUrl="https://{domain}.gorgias.com"
      apiVersion="1.0.0"
      endpoints={57}
      sdkMethods={101}
      schemas={107}
      parameters={477}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gorgias/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gorgias/openapi.yaml"
      developerDocumentation="developers.gorgias.com/"
    />
  );
}
  