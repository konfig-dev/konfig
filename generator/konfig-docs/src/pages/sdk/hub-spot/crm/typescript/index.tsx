import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function HubSpotCrmTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="hub-spot-crm-typescript-sdk"
      metaDescription={`HubSpot is a Massachusetts-based CRM platform that provides solutions such as marketing automation, meeting scheduling and data quality automation for businesses.`}
      company="HubSpot"
      doesNotHaveApiDescription={true}
      serviceName="CRM"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hubspot/crm/logo.png"
      companyKebabCase="hub-spot"
      clientNameCamelCase="hubSpotCrm"
      homepage="hubspot.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hubspot/crm/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hubspot/crm/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["crm"]}
      methods={[
  {
    "url": "/crm/v3/objects/products/batch/read",
    "method": "readByProperties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Read a batch of products by internal ID, or unique property values",
    "parameters": [
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/products/{productId}",
    "method": "archiveProduct",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Archive",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/products/{productId}",
    "method": "readProductById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Read",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCTID"
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
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
    "url": "/crm/v3/objects/products/{productId}",
    "method": "updateProduct",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Update",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCTID"
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "A new product description",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_cost_of_goods_sold": "700.00",
          "property_date": "1572480000000",
          "property_radio": "option_1",
          "property_number": "17",
          "property_string": "value",
          "property_checkbox": "false",
          "property_dropdown": "choice_b",
          "property_multiple_checkboxes": "chocolate;strawberry",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly",
          "hs_recurring_billing_period": "P24M"
        }
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
    "url": "/crm/v3/objects/products/merge",
    "method": "mergeProductsSameType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Public_Object",
    "typeScriptTag": "publicObject",
    "description": "Merge two products with same type",
    "parameters": [
      {
        "name": "objectIdToMerge",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTIDTOMERGE"
      },
      {
        "name": "primaryObjectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIMARYOBJECTID"
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
    "url": "/crm/v3/objects/products/batch/archive",
    "method": "archiveProductsByIds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Archive a batch of products by ID",
    "parameters": [
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/products/batch/create",
    "method": "createProductsBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Create a batch of products",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/products/batch/update",
    "method": "updateProductsBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Update a batch of products",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/products/gdpr-delete",
    "method": "deleteContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GDPR",
    "typeScriptTag": "gdpr",
    "description": "GDPR DELETE",
    "parameters": [
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/products",
    "method": "listProductsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results to display per page.",
        "default": 10
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results."
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
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
    "url": "/crm/v3/objects/products",
    "method": "createProductObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Create",
    "parameters": [
      {
        "name": "associations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "Onboarding service for data product",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_sku": "191902",
          "hs_cost_of_goods_sold": "600.00",
          "hs_recurring_billing_period": "P24M",
          "city": "Cambridge",
          "phone": "(https://developers.hubspot.com/docs/api/overview 929-0687",
          "state": "Massachusetts",
          "domain": "biglytics.net",
          "industry": "Technology",
          "amount": "1500.00",
          "dealname": "Custom data integrations",
          "pipeline": "default",
          "closedate": "2019-12-07T16:50:06.678Z",
          "dealstage": "presentationscheduled",
          "hubspot_owner_id": "910901",
          "email": "bcooper@biglytics.net",
          "company": "Biglytics",
          "website": "biglytics.net",
          "lastname": "Cooper",
          "firstname": "Bryan",
          "subject": "troubleshoot report",
          "hs_pipeline": "support_pipeline",
          "hs_pipeline_stage": "open",
          "hs_ticket_priority": "HIGH",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/products/search",
    "method": "productsByCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AFTER"
      },
      {
        "name": "sorts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "filterGroups",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}/audit",
    "method": "getStageAudit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipeline Stage Audits",
    "typeScriptTag": "pipelineStageAudits",
    "description": "Return an audit of all changes to the pipeline stage",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "stageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STAGEID"
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
    "url": "/crm/v3/pipelines/{objectType}/{pipelineId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Delete a pipeline",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIPELINEID"
      },
      {
        "name": "validateReferencesBeforeDelete",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "validateDealStageUsagesBeforeDelete",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/pipelines/{objectType}/{pipelineId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Return a pipeline by ID",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIPELINEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A pipeline definition."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/pipelines/{objectType}/{pipelineId}",
    "method": "updatePipelineById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Update a pipeline",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIPELINEID"
      },
      {
        "name": "validateReferencesBeforeDelete",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "validateDealStageUsagesBeforeDelete",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "displayOrder",
        "schema": "integer",
        "description": "",
        "example": 0
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "My updated pipeline"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A pipeline definition."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/pipelines/{objectType}/{pipelineId}",
    "method": "replacePipelineObject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Replace a pipeline",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIPELINEID"
      },
      {
        "name": "validateReferencesBeforeDelete",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "validateDealStageUsagesBeforeDelete",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "displayOrder",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "stages",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "label": "In Progress",
            "metadata": {
              "ticketState": "OPEN"
            },
            "displayOrder": 0
          },
          {
            "label": "Done",
            "metadata": {
              "ticketState": "CLOSED"
            },
            "displayOrder": 1
          }
        ]
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My replaced pipeline"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A pipeline definition."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/pipelines/{objectType}/{pipelineId}/audit",
    "method": "getByPipelineId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipeline Audits",
    "typeScriptTag": "pipelineAudits",
    "description": "Return an audit of all changes to the pipeline",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIPELINEID"
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
    "url": "/crm/v3/pipelines/{objectType}/{pipelineId}/stages",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipeline Stages",
    "typeScriptTag": "pipelineStages",
    "description": "Return all stages of a pipeline",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIPELINEID"
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
    "url": "/crm/v3/pipelines/{objectType}/{pipelineId}/stages",
    "method": "createStageObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipeline Stages",
    "typeScriptTag": "pipelineStages",
    "description": "Create a pipeline stage",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIPELINEID"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "ticketState": "CLOSED"
        }
      },
      {
        "name": "displayOrder",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Done"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A pipeline stage definition."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/pipelines/{objectType}",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Retrieve all pipelines",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
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
    "url": "/crm/v3/pipelines/{objectType}",
    "method": "createNewPipelineObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Create a pipeline",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "displayOrder",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "stages",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "label": "In Progress",
            "metadata": {
              "ticketState": "OPEN"
            },
            "displayOrder": 0
          },
          {
            "label": "Done",
            "metadata": {
              "ticketState": "CLOSED"
            },
            "displayOrder": 1
          }
        ]
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My replaced pipeline"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A pipeline definition."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}",
    "method": "deleteStage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipeline Stages",
    "typeScriptTag": "pipelineStages",
    "description": "Delete a pipeline stage",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIPELINEID"
      },
      {
        "name": "stageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipeline Stages",
    "typeScriptTag": "pipelineStages",
    "description": "Return a pipeline stage by ID",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIPELINEID"
      },
      {
        "name": "stageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A pipeline stage definition."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}",
    "method": "updateStageById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Pipeline Stages",
    "typeScriptTag": "pipelineStages",
    "description": "Update a pipeline stage",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIPELINEID"
      },
      {
        "name": "stageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STAGEID"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "ticketState": "CLOSED"
        }
      },
      {
        "name": "displayOrder",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "label",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Done"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A pipeline stage definition."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/pipelines/{objectType}/{pipelineId}/stages/{stageId}",
    "method": "replaceStageObject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipeline Stages",
    "typeScriptTag": "pipelineStages",
    "description": "Replace a pipeline stage",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIPELINEID"
      },
      {
        "name": "stageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STAGEID"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "ticketState": "CLOSED"
        }
      },
      {
        "name": "displayOrder",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Done"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A pipeline stage definition."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/companies/batch/read",
    "method": "readCompaniesByProperties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Read a batch of companies by internal ID, or unique property values",
    "parameters": [
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/companies/{companyId}",
    "method": "archiveCompany",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Archive",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/companies/{companyId}",
    "method": "readCompanyObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Read",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
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
    "url": "/crm/v3/objects/companies/{companyId}",
    "method": "updateCompanyObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Update",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "A new product description",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_cost_of_goods_sold": "700.00",
          "property_date": "1572480000000",
          "property_radio": "option_1",
          "property_number": "17",
          "property_string": "value",
          "property_checkbox": "false",
          "property_dropdown": "choice_b",
          "property_multiple_checkboxes": "chocolate;strawberry",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly",
          "hs_recurring_billing_period": "P24M"
        }
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
    "url": "/crm/v3/objects/companies/merge",
    "method": "mergeCompaniesSameType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Public_Object",
    "typeScriptTag": "publicObject",
    "description": "Merge two companies with same type",
    "parameters": [
      {
        "name": "objectIdToMerge",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTIDTOMERGE"
      },
      {
        "name": "primaryObjectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIMARYOBJECTID"
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
    "url": "/crm/v3/objects/companies/batch/archive",
    "method": "archiveCompaniesByIdBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Archive a batch of companies by ID",
    "parameters": [
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/companies/batch/create",
    "method": "createCompaniesBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Create a batch of companies",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/companies/batch/update",
    "method": "updateCompaniesBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Update a batch of companies",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/companies/gdpr-delete",
    "method": "permanentlyDeleteContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GDPR",
    "typeScriptTag": "gdpr",
    "description": "GDPR DELETE",
    "parameters": [
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/companies",
    "method": "listCompaniesPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results to display per page.",
        "default": 10
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results."
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
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
    "url": "/crm/v3/objects/companies",
    "method": "createCompanyObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Create",
    "parameters": [
      {
        "name": "associations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "Onboarding service for data product",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_sku": "191902",
          "hs_cost_of_goods_sold": "600.00",
          "hs_recurring_billing_period": "P24M",
          "city": "Cambridge",
          "phone": "(https://developers.hubspot.com/docs/api/overview 929-0687",
          "state": "Massachusetts",
          "domain": "biglytics.net",
          "industry": "Technology",
          "amount": "1500.00",
          "dealname": "Custom data integrations",
          "pipeline": "default",
          "closedate": "2019-12-07T16:50:06.678Z",
          "dealstage": "presentationscheduled",
          "hubspot_owner_id": "910901",
          "email": "bcooper@biglytics.net",
          "company": "Biglytics",
          "website": "biglytics.net",
          "lastname": "Cooper",
          "firstname": "Bryan",
          "subject": "troubleshoot report",
          "hs_pipeline": "support_pipeline",
          "hs_pipeline_stage": "open",
          "hs_ticket_priority": "HIGH",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/companies/search",
    "method": "companyObjects",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AFTER"
      },
      {
        "name": "sorts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "filterGroups",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/extensions/calling/{appId}/settings",
    "method": "deleteCallingExtension",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Delete calling settings",
    "parameters": [
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the target app.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/extensions/calling/{appId}/settings",
    "method": "getCallingConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get calling settings",
    "parameters": [
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the target app.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Current settings state"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/extensions/calling/{appId}/settings",
    "method": "updateCallingExtension",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update settings",
    "parameters": [
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the target app.",
        "example": 0
      },
      {
        "name": "supportsCustomObjects",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isReady",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "width",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "height",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Current settings state"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/extensions/calling/{appId}/settings",
    "method": "configureCallingExtension",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Configure a calling extension",
    "parameters": [
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the target app.",
        "example": 0
      },
      {
        "name": "supportsCustomObjects",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "isReady",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HubPhone"
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 200
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://www.example.com/hubspot/iframe"
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 350
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Current settings state"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/extensions/calling/{appId}/settings/recording",
    "method": "getByAppId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recording_Settings",
    "typeScriptTag": "recordingSettings",
    "description": "",
    "parameters": [
      {
        "name": "appId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/extensions/calling/{appId}/settings/recording",
    "method": "updateCallingSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Recording_Settings",
    "typeScriptTag": "recordingSettings",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "urlToRetrieveAuthedRecording",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/extensions/calling/{appId}/settings/recording",
    "method": "setCallRecording",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recording_Settings",
    "typeScriptTag": "recordingSettings",
    "description": "",
    "parameters": [
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "urlToRetrieveAuthedRecording",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URLTORETRIEVEAUTHEDRECORDING"
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
    "url": "/crm/v3/objects/quotes/batch/read",
    "method": "readQuotesByPropertyValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Read a batch of quotes by internal ID, or unique property values",
    "parameters": [
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/quotes/{quoteId}",
    "method": "archiveQuoteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Archive",
    "parameters": [
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUOTEID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/quotes/{quoteId}",
    "method": "readQuoteById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Read",
    "parameters": [
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUOTEID"
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
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
    "url": "/crm/v3/objects/quotes/{quoteId}",
    "method": "updateQuoteObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Update",
    "parameters": [
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUOTEID"
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "A new product description",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_cost_of_goods_sold": "700.00",
          "property_date": "1572480000000",
          "property_radio": "option_1",
          "property_number": "17",
          "property_string": "value",
          "property_checkbox": "false",
          "property_dropdown": "choice_b",
          "property_multiple_checkboxes": "chocolate;strawberry",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly",
          "hs_recurring_billing_period": "P24M"
        }
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
    "url": "/crm/v3/objects/quotes/merge",
    "method": "mergeTwoQuotesSameType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Public_Object",
    "typeScriptTag": "publicObject",
    "description": "Merge two quotes with same type",
    "parameters": [
      {
        "name": "objectIdToMerge",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTIDTOMERGE"
      },
      {
        "name": "primaryObjectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIMARYOBJECTID"
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
    "url": "/crm/v3/objects/quotes/batch/archive",
    "method": "archiveQuotesByIdBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Archive a batch of quotes by ID",
    "parameters": [
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/quotes/batch/create",
    "method": "createQuotesBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Create a batch of quotes",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/quotes/batch/update",
    "method": "updateQuotesBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Update a batch of quotes",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/quotes/gdpr-delete",
    "method": "permanentlyDeleteContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GDPR",
    "typeScriptTag": "gdpr",
    "description": "GDPR DELETE",
    "parameters": [
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/quotes",
    "method": "listQuotesPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results to display per page.",
        "default": 10
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results."
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
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
    "url": "/crm/v3/objects/quotes",
    "method": "createQuoteObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Create",
    "parameters": [
      {
        "name": "associations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "Onboarding service for data product",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_sku": "191902",
          "hs_cost_of_goods_sold": "600.00",
          "hs_recurring_billing_period": "P24M",
          "city": "Cambridge",
          "phone": "(https://developers.hubspot.com/docs/api/overview 929-0687",
          "state": "Massachusetts",
          "domain": "biglytics.net",
          "industry": "Technology",
          "amount": "1500.00",
          "dealname": "Custom data integrations",
          "pipeline": "default",
          "closedate": "2019-12-07T16:50:06.678Z",
          "dealstage": "presentationscheduled",
          "hubspot_owner_id": "910901",
          "email": "bcooper@biglytics.net",
          "company": "Biglytics",
          "website": "biglytics.net",
          "lastname": "Cooper",
          "firstname": "Bryan",
          "subject": "troubleshoot report",
          "hs_pipeline": "support_pipeline",
          "hs_pipeline_stage": "open",
          "hs_ticket_priority": "HIGH",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/quotes/search",
    "method": "quotesByCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AFTER"
      },
      {
        "name": "sorts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "filterGroups",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/deals/batch/read",
    "method": "readDealsByInternalIdOrPropertyValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Read a batch of deals by internal ID, or unique property values",
    "parameters": [
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/deals/{dealId}",
    "method": "archiveDealObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Archive",
    "parameters": [
      {
        "name": "dealId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEALID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/deals/{dealId}",
    "method": "readDealById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Read",
    "parameters": [
      {
        "name": "dealId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEALID"
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
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
    "url": "/crm/v3/objects/deals/{dealId}",
    "method": "updateDealObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Update",
    "parameters": [
      {
        "name": "dealId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEALID"
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "A new product description",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_cost_of_goods_sold": "700.00",
          "property_date": "1572480000000",
          "property_radio": "option_1",
          "property_number": "17",
          "property_string": "value",
          "property_checkbox": "false",
          "property_dropdown": "choice_b",
          "property_multiple_checkboxes": "chocolate;strawberry",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly",
          "hs_recurring_billing_period": "P24M"
        }
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
    "url": "/crm/v3/objects/deals/merge",
    "method": "mergeDealsSameType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Public_Object",
    "typeScriptTag": "publicObject",
    "description": "Merge two deals with same type",
    "parameters": [
      {
        "name": "objectIdToMerge",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTIDTOMERGE"
      },
      {
        "name": "primaryObjectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIMARYOBJECTID"
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
    "url": "/crm/v3/objects/deals/batch/archive",
    "method": "archiveDealsByIds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Archive a batch of deals by ID",
    "parameters": [
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/deals/batch/create",
    "method": "createDealsObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Create a batch of deals",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/deals/batch/update",
    "method": "updateDealsObjects",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Update a batch of deals",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/deals/gdpr-delete",
    "method": "permanentlyDeleteDeal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GDPR",
    "typeScriptTag": "gdpr",
    "description": "GDPR DELETE",
    "parameters": [
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/deals",
    "method": "getDealsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results to display per page.",
        "default": 10
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results."
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
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
    "url": "/crm/v3/objects/deals",
    "method": "createDealObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Create",
    "parameters": [
      {
        "name": "associations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "Onboarding service for data product",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_sku": "191902",
          "hs_cost_of_goods_sold": "600.00",
          "hs_recurring_billing_period": "P24M",
          "city": "Cambridge",
          "phone": "(https://developers.hubspot.com/docs/api/overview 929-0687",
          "state": "Massachusetts",
          "domain": "biglytics.net",
          "industry": "Technology",
          "amount": "1500.00",
          "dealname": "Custom data integrations",
          "pipeline": "default",
          "closedate": "2019-12-07T16:50:06.678Z",
          "dealstage": "presentationscheduled",
          "hubspot_owner_id": "910901",
          "email": "bcooper@biglytics.net",
          "company": "Biglytics",
          "website": "biglytics.net",
          "lastname": "Cooper",
          "firstname": "Bryan",
          "subject": "troubleshoot report",
          "hs_pipeline": "support_pipeline",
          "hs_pipeline_stage": "open",
          "hs_ticket_priority": "HIGH",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/deals/search",
    "method": "dealsByCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AFTER"
      },
      {
        "name": "sorts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "filterGroups",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/imports/{importId}/cancel",
    "method": "cancelImport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Cancel an active import",
    "parameters": [
      {
        "name": "importId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/imports/{importId}",
    "method": "getImportRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Get the information on any import",
    "parameters": [
      {
        "name": "importId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A current summary of the import, whether complete or not."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/imports/{importId}/errors",
    "method": "getErrorDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public_Imports",
    "typeScriptTag": "publicImports",
    "description": "",
    "parameters": [
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results to display per page."
      },
      {
        "name": "importId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/schemas/{objectType}",
    "method": "deleteSchema",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Delete a schema",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "Fully qualified name or object type ID of your schema.",
        "example": "OBJECTTYPE"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/schemas/{objectType}",
    "method": "getExistingSchema",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Get an existing schema",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "Fully qualified name or object type ID of your schema.",
        "example": "OBJECTTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Defines an object schema, including its properties and associations."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/schemas/{objectType}",
    "method": "updateSchemaObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Update a schema",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "Fully qualified name or object type ID of your schema.",
        "example": "OBJECTTYPE"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "secondaryDisplayProperties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "requiredProperties",
        "schema": "array",
        "description": "",
        "example": [
          "my_object_property"
        ]
      },
      {
        "name": "searchableProperties",
        "schema": "array",
        "description": "",
        "example": [
          "my_object_property"
        ]
      },
      {
        "name": "primaryDisplayProperty",
        "schema": "string",
        "description": "",
        "example": "my_object_property"
      },
      {
        "name": "restorable",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "object",
        "description": "",
        "example": {
          "singular": "My object",
          "plural": "My objects"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Defines an object type."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/schemas/{objectType}/associations",
    "method": "createAssociation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Create an association",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "Fully qualified name or object type ID of your schema.",
        "example": "OBJECTTYPE"
      },
      {
        "name": "fromObjectTypeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2-123456"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "my_object_to_contact"
      },
      {
        "name": "toObjectTypeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "contact"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Defines an association between two object types."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/schemas/{objectType}/purge",
    "method": "purgeObjectSchema",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Public_Object_Schemas",
    "typeScriptTag": "publicObjectSchemas",
    "description": "",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/schemas/{objectType}/associations/{associationIdentifier}",
    "method": "removeAssociation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Remove an association",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "Fully qualified name or object type ID of your schema.",
        "example": "OBJECTTYPE"
      },
      {
        "name": "associationIdentifier",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the association to remove.",
        "example": "ASSOCIATIONIDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/schemas",
    "method": "getAllSchemas",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Get all schemas",
    "parameters": [
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
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
    "url": "/crm/v3/schemas",
    "method": "defineObjectSchema",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Create a new schema",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondaryDisplayProperties",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "requiredProperties",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "my_object_property"
        ]
      },
      {
        "name": "searchableProperties",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryDisplayProperty",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "my_object_property"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my_object"
      },
      {
        "name": "associatedObjects",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "CONTACT"
        ]
      },
      {
        "name": "properties",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "name": "my_object_property",
            "label": "My object property",
            "isPrimaryDisplayLabel": true
          }
        ]
      },
      {
        "name": "labels",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "singular": "My object",
          "plural": "My objects"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Defines an object schema, including its properties and associations."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/properties/{objectType}/batch/archive",
    "method": "archiveProperties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Archive a batch of properties",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/properties/{objectType}/groups/{groupName}",
    "method": "archivePropertyGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Archive a property group",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "groupName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/properties/{objectType}/groups/{groupName}",
    "method": "readPropertyGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Read a property group",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "groupName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An ID for a group of properties"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/properties/{objectType}/groups/{groupName}",
    "method": "updatePropertyGroup",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Update a property group",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "groupName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPNAME"
      },
      {
        "name": "displayOrder",
        "schema": "integer",
        "description": "",
        "example": -1
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "My Property Group"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An ID for a group of properties"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/properties/{objectType}/{propertyName}",
    "method": "archiveProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Archive a property",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROPERTYNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/properties/{objectType}/{propertyName}",
    "method": "readProperty",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Read a property",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROPERTYNAME"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "properties",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Defines a property"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/properties/{objectType}/{propertyName}",
    "method": "updatePropertyById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Update a property",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROPERTYNAME"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groupName",
        "schema": "string",
        "description": "",
        "example": "contactinformation"
      },
      {
        "name": "hidden",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "options",
        "schema": "array",
        "description": "",
        "example": [
          {
            "description": "Choice number one",
            "label": "Option A",
            "value": "A",
            "hidden": false,
            "displayOrder": 1
          },
          {
            "description": "Choice number two",
            "label": "Option B",
            "value": "B",
            "hidden": false,
            "displayOrder": 2
          }
        ]
      },
      {
        "name": "displayOrder",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "calculationFormula",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "My Contact Property"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "enumeration"
      },
      {
        "name": "fieldType",
        "schema": "string",
        "description": "",
        "example": "select"
      },
      {
        "name": "formField",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Defines a property"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/properties/{objectType}/batch/read",
    "method": "readProperties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Read a batch of properties",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/properties/{objectType}/batch/create",
    "method": "propertiesCreateBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Create a batch of properties",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/properties/{objectType}",
    "method": "getAllProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Read all properties",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "properties",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/properties/{objectType}",
    "method": "createProperty",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Create a property",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hidden",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "displayOrder",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Contact Property"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "enumeration"
      },
      {
        "name": "formField",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "groupName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "contactinformation"
      },
      {
        "name": "referencedObjectType",
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
        "name": "options",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "description": "Choice number one",
            "label": "Option A",
            "value": "A",
            "hidden": false,
            "displayOrder": 1
          },
          {
            "description": "Choice number two",
            "label": "Option B",
            "value": "B",
            "hidden": false,
            "displayOrder": 2
          }
        ]
      },
      {
        "name": "calculationFormula",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hasUniqueValue",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "fieldType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "select"
      },
      {
        "name": "externalOptions",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Defines a property"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/properties/{objectType}/groups",
    "method": "readAllProperty",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Read all property groups",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
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
    "url": "/crm/v3/properties/{objectType}/groups",
    "method": "createCopy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Create a property group",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "mypropertygroup"
      },
      {
        "name": "displayOrder",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": -1
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Property Group"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An ID for a group of properties"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/owners/{ownerId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Owners",
    "typeScriptTag": "owners",
    "description": "Read an owner by given `id` or `userId`",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "id"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
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
    "url": "/crm/v3/timeline/events/batch/create",
    "method": "createMultipleBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Creates multiple events",
    "parameters": [
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "email": "art3mis-pup@petspot.com",
            "tokens": {
              "petAge": 3,
              "petName": "Art3mis",
              "petColor": "black"
            },
            "extraData": {
              "questions": [
                {
                  "answer": "Bark!",
                  "question": "Who's a good girl?"
                },
                {
                  "answer": "Woof!",
                  "question": "Do you wanna go on a walk?"
                }
              ]
            },
            "timelineIFrame": {
              "url": "https://my.petspot.com/pets/Art3mis",
              "width": 600,
              "height": 400,
              "linkLabel": "View Art3mis",
              "headerLabel": "Art3mis dog"
            },
            "eventTemplateId": "1001298"
          },
          {
            "email": "pocket-tiger@petspot.com",
            "tokens": {
              "petAge": 3,
              "petName": "Pocket",
              "petColor": "yellow"
            },
            "extraData": {
              "questions": [
                {
                  "answer": "Purr...",
                  "question": "Who's a good kitty?"
                },
                {
                  "answer": "Meow!",
                  "question": "Will you stop playing with that?"
                }
              ]
            },
            "timelineIFrame": {
              "url": "https://my.petspot.com/pets/Pocket",
              "width": 600,
              "height": 400,
              "linkLabel": "View Pocket",
              "headerLabel": "Pocket Tiger"
            },
            "eventTemplateId": "1001298"
          }
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": "The state of the batch event request."
      },
      {
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}",
    "method": "deleteEventTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Deletes an event template for the app",
    "parameters": [
      {
        "name": "eventTemplateId",
        "schema": "string",
        "required": true,
        "description": "The event template ID.",
        "example": "EVENTTEMPLATEID"
      },
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the target app.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}",
    "method": "getSpecificEventTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Gets a specific event template for your app",
    "parameters": [
      {
        "name": "eventTemplateId",
        "schema": "string",
        "required": true,
        "description": "The event template ID.",
        "example": "EVENTTEMPLATEID"
      },
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the target app.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The current state of the template definition."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}",
    "method": "updateEventTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Update an existing event template",
    "parameters": [
      {
        "name": "eventTemplateId",
        "schema": "string",
        "required": true,
        "description": "The event template ID.",
        "example": "EVENTTEMPLATEID"
      },
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the target app.",
        "example": 0
      },
      {
        "name": "detailTemplate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Registration occurred at {{#formatDate timestamp}}{{/formatDate}}\n\n#### Questions\n{{#each extraData.questions}}\n  **{{question}}**: {{answer}}\n{{/each}}\n\nEDIT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PetSpot Registration"
      },
      {
        "name": "tokens",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "name": "petName",
            "type": "string",
            "label": "Pet Name",
            "objectPropertyName": "firstname"
          },
          {
            "name": "petAge",
            "type": "number",
            "label": "Pet Age"
          },
          {
            "name": "petColor",
            "type": "enumeration",
            "label": "Pet Color",
            "options": [
              {
                "label": "White",
                "value": "white"
              },
              {
                "label": "Black",
                "value": "black"
              },
              {
                "label": "Brown",
                "value": "brown"
              },
              {
                "label": "Yellow",
                "value": "yellow"
              },
              {
                "label": "Other",
                "value": "other"
              }
            ]
          }
        ]
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1001298"
      },
      {
        "name": "headerTemplate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Registered for [{{petName}}](https://my.petspot.com/pets/{{petName}})"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The current state of the template definition."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/timeline/events",
    "method": "createSingleEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Create a single event",
    "parameters": [
      {
        "name": "eventTemplateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1001298"
      },
      {
        "name": "extraData",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "questions": [
            {
              "answer": "Bark!",
              "question": "Who's a good girl?"
            },
            {
              "answer": "Woof!",
              "question": "Do you wanna go on a walk?"
            }
          ]
        }
      },
      {
        "name": "timelineIFrame",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "linkLabel": "View Art3mis",
          "headerLabel": "Art3mis dog",
          "url": "https://my.petspot.com/pets/Art3mis",
          "width": 600,
          "height": 400
        }
      },
      {
        "name": "domain",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tokens",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "petAge": 3,
          "petName": "Art3mis",
          "petColor": "black"
        }
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "utk",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "art3mis-pup@petspot.com"
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timestamp",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The current state of the timeline event."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}/tokens",
    "method": "addToEventTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tokens",
    "typeScriptTag": "tokens",
    "description": "Adds a token to an existing event template",
    "parameters": [
      {
        "name": "eventTemplateId",
        "schema": "string",
        "required": true,
        "description": "The event template ID.",
        "example": "EVENTTEMPLATEID"
      },
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the target app.",
        "example": 0
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "label": "Dog",
            "value": "dog"
          },
          {
            "label": "Cat",
            "value": "cat"
          }
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "petType"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Pet Type"
      },
      {
        "name": "objectPropertyName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "customPropertyPetType"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "enumeration"
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "State of the token definition."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}/tokens/{tokenName}",
    "method": "removeFromTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tokens",
    "typeScriptTag": "tokens",
    "description": "Removes a token from the event template",
    "parameters": [
      {
        "name": "eventTemplateId",
        "schema": "string",
        "required": true,
        "description": "The event template ID.",
        "example": "EVENTTEMPLATEID"
      },
      {
        "name": "tokenName",
        "schema": "string",
        "required": true,
        "description": "The token name.",
        "example": "TOKENNAME"
      },
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the target app.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}/tokens/{tokenName}",
    "method": "updateExistingTokenOnEventTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tokens",
    "typeScriptTag": "tokens",
    "description": "Updates an existing token on an event template",
    "parameters": [
      {
        "name": "eventTemplateId",
        "schema": "string",
        "required": true,
        "description": "The event template ID.",
        "example": "EVENTTEMPLATEID"
      },
      {
        "name": "tokenName",
        "schema": "string",
        "required": true,
        "description": "The token name.",
        "example": "TOKENNAME"
      },
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the target app.",
        "example": 0
      },
      {
        "name": "options",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "label": "Dog",
            "value": "dog"
          },
          {
            "label": "Cat",
            "value": "cat"
          },
          {
            "label": "Bird",
            "value": "bird"
          }
        ]
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "petType edit"
      },
      {
        "name": "objectPropertyName",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "State of the token definition."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/timeline/events/{eventTemplateId}/{eventId}/detail",
    "method": "renderDetailTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Gets the detailTemplate as rendered",
    "parameters": [
      {
        "name": "eventTemplateId",
        "schema": "string",
        "required": true,
        "description": "The event template ID.",
        "example": "EVENTTEMPLATEID"
      },
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "The event ID.",
        "example": "EVENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The details Markdown rendered as HTML."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/timeline/events/{eventTemplateId}/{eventId}",
    "method": "getEventById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Gets the event",
    "parameters": [
      {
        "name": "eventTemplateId",
        "schema": "string",
        "required": true,
        "description": "The event template ID.",
        "example": "EVENTTEMPLATEID"
      },
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "The event ID.",
        "example": "EVENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The current state of the timeline event."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/timeline/{appId}/event-templates",
    "method": "listEventTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "List all event templates for your app",
    "parameters": [
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the target app.",
        "example": 0
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
    "url": "/crm/v3/timeline/{appId}/event-templates",
    "method": "createEventTemplateForApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Create an event template for your app",
    "parameters": [
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the target app.",
        "example": 0
      },
      {
        "name": "detailTemplate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Registration occurred at {{#formatDate timestamp}}{{/formatDate}}\n\n#### Questions\n{{#each extraData.questions}}\n  **{{question}}**: {{answer}}\n{{/each}}"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PetSpot Registration"
      },
      {
        "name": "tokens",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "name": "petName",
            "type": "string",
            "label": "Pet Name"
          },
          {
            "name": "petAge",
            "type": "number",
            "label": "Pet Age"
          },
          {
            "name": "petColor",
            "type": "enumeration",
            "label": "Pet Color",
            "options": [
              {
                "label": "White",
                "value": "white"
              },
              {
                "label": "Black",
                "value": "black"
              },
              {
                "label": "Brown",
                "value": "brown"
              },
              {
                "label": "Other",
                "value": "other"
              }
            ]
          }
        ]
      },
      {
        "name": "headerTemplate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Registered for [{{petName}}](https://my.petspot.com/pets/{{petName}})"
      },
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "contacts"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The current state of the template definition."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/timeline/events/{eventTemplateId}/{eventId}/render",
    "method": "renderingHtml",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Renders the header or detail as HTML",
    "parameters": [
      {
        "name": "eventTemplateId",
        "schema": "string",
        "required": true,
        "description": "The event template ID.",
        "example": "EVENTTEMPLATEID"
      },
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "The event ID.",
        "example": "EVENTID"
      },
      {
        "name": "detail",
        "schema": "boolean",
        "required": false,
        "description": "Set to 'true', we want to render the `detailTemplate` instead of the `headerTemplate`."
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
    "url": "/crm/v3/objects/contacts/batch/read",
    "method": "readContactsByProperties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Read a batch of contacts by internal ID, or unique property values",
    "parameters": [
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/contacts/{contactId}",
    "method": "archiveContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Archive",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTACTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/contacts/{contactId}",
    "method": "readContactById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Read",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTACTID"
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
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
    "url": "/crm/v3/objects/contacts/{contactId}",
    "method": "updateContactObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Update",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTACTID"
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "A new product description",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_cost_of_goods_sold": "700.00",
          "property_date": "1572480000000",
          "property_radio": "option_1",
          "property_number": "17",
          "property_string": "value",
          "property_checkbox": "false",
          "property_dropdown": "choice_b",
          "property_multiple_checkboxes": "chocolate;strawberry",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly",
          "hs_recurring_billing_period": "P24M"
        }
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
    "url": "/crm/v3/objects/contacts/merge",
    "method": "mergeContactsSameType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Public_Object",
    "typeScriptTag": "publicObject",
    "description": "Merge two contacts with same type",
    "parameters": [
      {
        "name": "objectIdToMerge",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTIDTOMERGE"
      },
      {
        "name": "primaryObjectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIMARYOBJECTID"
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
    "url": "/crm/v3/objects/contacts/batch/archive",
    "method": "archiveContactsByIdBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Archive a batch of contacts by ID",
    "parameters": [
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/contacts/batch/create",
    "method": "createContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Create a batch of contacts",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/contacts/batch/update",
    "method": "updateContactsBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Update a batch of contacts",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/contacts/gdpr-delete",
    "method": "permanentlyDeleteContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GDPR",
    "typeScriptTag": "gdpr",
    "description": "GDPR DELETE",
    "parameters": [
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/contacts",
    "method": "listContactsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results to display per page.",
        "default": 10
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results."
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
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
    "url": "/crm/v3/objects/contacts",
    "method": "createContactObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Create",
    "parameters": [
      {
        "name": "associations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "Onboarding service for data product",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_sku": "191902",
          "hs_cost_of_goods_sold": "600.00",
          "hs_recurring_billing_period": "P24M",
          "city": "Cambridge",
          "phone": "(https://developers.hubspot.com/docs/api/overview 929-0687",
          "state": "Massachusetts",
          "domain": "biglytics.net",
          "industry": "Technology",
          "amount": "1500.00",
          "dealname": "Custom data integrations",
          "pipeline": "default",
          "closedate": "2019-12-07T16:50:06.678Z",
          "dealstage": "presentationscheduled",
          "hubspot_owner_id": "910901",
          "email": "bcooper@biglytics.net",
          "company": "Biglytics",
          "website": "biglytics.net",
          "lastname": "Cooper",
          "firstname": "Bryan",
          "subject": "troubleshoot report",
          "hs_pipeline": "support_pipeline",
          "hs_pipeline_stage": "open",
          "hs_ticket_priority": "HIGH",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/contacts/search",
    "method": "contactsByCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AFTER"
      },
      {
        "name": "sorts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "filterGroups",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/feedback_submissions/batch/read",
    "method": "readFeedbackSubmissions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Read a batch of feedback submissions by internal ID, or unique property values",
    "parameters": [
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/feedback_submissions/{feedbackSubmissionId}",
    "method": "archiveFeedbackSubmission",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Archive",
    "parameters": [
      {
        "name": "feedbackSubmissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FEEDBACKSUBMISSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/feedback_submissions/{feedbackSubmissionId}",
    "method": "readFeedbackSubmission",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Read",
    "parameters": [
      {
        "name": "feedbackSubmissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FEEDBACKSUBMISSIONID"
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
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
    "url": "/crm/v3/objects/feedback_submissions/{feedbackSubmissionId}",
    "method": "updateFeedbackSubmission",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Update",
    "parameters": [
      {
        "name": "feedbackSubmissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FEEDBACKSUBMISSIONID"
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "A new product description",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_cost_of_goods_sold": "700.00",
          "property_date": "1572480000000",
          "property_radio": "option_1",
          "property_number": "17",
          "property_string": "value",
          "property_checkbox": "false",
          "property_dropdown": "choice_b",
          "property_multiple_checkboxes": "chocolate;strawberry",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly",
          "hs_recurring_billing_period": "P24M"
        }
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
    "url": "/crm/v3/objects/feedback_submissions/merge",
    "method": "mergeFeedbackSubmissions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Public_Object",
    "typeScriptTag": "publicObject",
    "description": "Merge two feedback submissions with same type",
    "parameters": [
      {
        "name": "objectIdToMerge",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTIDTOMERGE"
      },
      {
        "name": "primaryObjectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIMARYOBJECTID"
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
    "url": "/crm/v3/objects/feedback_submissions/batch/archive",
    "method": "archiveFeedbackSubmissionsById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Archive a batch of feedback submissions by ID",
    "parameters": [
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/feedback_submissions/batch/create",
    "method": "createFeedbackSubmissions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Create a batch of feedback submissions",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/feedback_submissions/batch/update",
    "method": "updateFeedbackSubmissions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Update a batch of feedback submissions",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/feedback_submissions/gdpr-delete",
    "method": "permanentlyDeleteContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GDPR",
    "typeScriptTag": "gdpr",
    "description": "GDPR DELETE",
    "parameters": [
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/feedback_submissions",
    "method": "listFeedbackSubmissionsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results to display per page.",
        "default": 10
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results."
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
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
    "url": "/crm/v3/objects/feedback_submissions",
    "method": "createFeedbackSubmission",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Create",
    "parameters": [
      {
        "name": "associations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "Onboarding service for data product",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_sku": "191902",
          "hs_cost_of_goods_sold": "600.00",
          "hs_recurring_billing_period": "P24M",
          "city": "Cambridge",
          "phone": "(https://developers.hubspot.com/docs/api/overview 929-0687",
          "state": "Massachusetts",
          "domain": "biglytics.net",
          "industry": "Technology",
          "amount": "1500.00",
          "dealname": "Custom data integrations",
          "pipeline": "default",
          "closedate": "2019-12-07T16:50:06.678Z",
          "dealstage": "presentationscheduled",
          "hubspot_owner_id": "910901",
          "email": "bcooper@biglytics.net",
          "company": "Biglytics",
          "website": "biglytics.net",
          "lastname": "Cooper",
          "firstname": "Bryan",
          "subject": "troubleshoot report",
          "hs_pipeline": "support_pipeline",
          "hs_pipeline_stage": "open",
          "hs_ticket_priority": "HIGH",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/feedback_submissions/search",
    "method": "feedbackSubmissions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AFTER"
      },
      {
        "name": "sorts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "filterGroups",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/{objectType}/batch/read",
    "method": "readObjectsByInternalIdOrPropertyValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Read a batch of objects by internal ID, or unique property values",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/{objectType}/{objectId}",
    "method": "archiveObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Archive",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/{objectType}/{objectId}",
    "method": "readObjectById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Read",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
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
    "url": "/crm/v3/objects/{objectType}/{objectId}",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Update",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "A new product description",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_cost_of_goods_sold": "700.00",
          "property_date": "1572480000000",
          "property_radio": "option_1",
          "property_number": "17",
          "property_string": "value",
          "property_checkbox": "false",
          "property_dropdown": "choice_b",
          "property_multiple_checkboxes": "chocolate;strawberry",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly",
          "hs_recurring_billing_period": "P24M"
        }
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
    "url": "/crm/v3/objects/{objectType}/merge",
    "method": "mergeObjectsWithType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Public_Object",
    "typeScriptTag": "publicObject",
    "description": "Merge two objects with same type",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "objectIdToMerge",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTIDTOMERGE"
      },
      {
        "name": "primaryObjectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIMARYOBJECTID"
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
    "url": "/crm/v3/objects/{objectType}/batch/archive",
    "method": "archiveObjectsById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Archive a batch of objects by ID",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/{objectType}/batch/create",
    "method": "createObjects",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Create a batch of objects",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/{objectType}/batch/update",
    "method": "updateObjectsByInternalIdOrPropertyValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Update a batch of objects by internal ID, or unique property values",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/{objectType}/gdpr-delete",
    "method": "permanentlyDeleteContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GDPR",
    "typeScriptTag": "gdpr",
    "description": "GDPR DELETE",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/{objectType}",
    "method": "listObjectsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "List",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results to display per page.",
        "default": 10
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results."
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
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
    "url": "/crm/v3/objects/{objectType}",
    "method": "createCrmObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Create",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "associations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "Onboarding service for data product",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_sku": "191902",
          "hs_cost_of_goods_sold": "600.00",
          "hs_recurring_billing_period": "P24M",
          "city": "Cambridge",
          "phone": "(https://developers.hubspot.com/docs/api/overview 929-0687",
          "state": "Massachusetts",
          "domain": "biglytics.net",
          "industry": "Technology",
          "amount": "1500.00",
          "dealname": "Custom data integrations",
          "pipeline": "default",
          "closedate": "2019-12-07T16:50:06.678Z",
          "dealstage": "presentationscheduled",
          "hubspot_owner_id": "910901",
          "email": "bcooper@biglytics.net",
          "company": "Biglytics",
          "website": "biglytics.net",
          "lastname": "Cooper",
          "firstname": "Bryan",
          "subject": "troubleshoot report",
          "hs_pipeline": "support_pipeline",
          "hs_pipeline_stage": "open",
          "hs_ticket_priority": "HIGH",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/{objectType}/search",
    "method": "objectsByCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "",
    "parameters": [
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AFTER"
      },
      {
        "name": "sorts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "filterGroups",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/extensions/videoconferencing/settings/{appId}",
    "method": "deleteVideoConferencingAppSettings",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Delete settings",
    "parameters": [
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/extensions/videoconferencing/settings/{appId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get settings",
    "parameters": [
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The URLs of the various actions provided by the video conferencing application. All URLs must use the `https` protocol."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/extensions/videoconferencing/settings/{appId}",
    "method": "updateVideoConferencingAppSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update settings",
    "parameters": [
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.",
        "example": 0
      },
      {
        "name": "userVerifyUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://example.com/user-verify"
      },
      {
        "name": "fetchAccountsUri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createMeetingUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com/create-meeting"
      },
      {
        "name": "updateMeetingUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://example.com/update-meeting"
      },
      {
        "name": "deleteMeetingUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://example.com/delete-meeting"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The URLs of the various actions provided by the video conferencing application. All URLs must use the `https` protocol."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/tickets/batch/read",
    "method": "readTicketsByProperties",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Read a batch of tickets by internal ID, or unique property values",
    "parameters": [
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/tickets/{ticketId}",
    "method": "archiveTicket",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Archive",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TICKETID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/tickets/{ticketId}",
    "method": "readTicketById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Read",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TICKETID"
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
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
    "url": "/crm/v3/objects/tickets/{ticketId}",
    "method": "updateTicketObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Update",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TICKETID"
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "A new product description",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_cost_of_goods_sold": "700.00",
          "property_date": "1572480000000",
          "property_radio": "option_1",
          "property_number": "17",
          "property_string": "value",
          "property_checkbox": "false",
          "property_dropdown": "choice_b",
          "property_multiple_checkboxes": "chocolate;strawberry",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly",
          "hs_recurring_billing_period": "P24M"
        }
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
    "url": "/crm/v3/objects/tickets/merge",
    "method": "mergeTicketsSameType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Public_Object",
    "typeScriptTag": "publicObject",
    "description": "Merge two tickets with same type",
    "parameters": [
      {
        "name": "objectIdToMerge",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTIDTOMERGE"
      },
      {
        "name": "primaryObjectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIMARYOBJECTID"
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
    "url": "/crm/v3/objects/tickets/batch/archive",
    "method": "archiveTicketsById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Archive a batch of tickets by ID",
    "parameters": [
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/tickets/batch/create",
    "method": "ticketCreationBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Create a batch of tickets",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/tickets/batch/update",
    "method": "updateTicketsBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Update a batch of tickets",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/tickets/gdpr-delete",
    "method": "permanentlyDeleteContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GDPR",
    "typeScriptTag": "gdpr",
    "description": "GDPR DELETE",
    "parameters": [
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/tickets",
    "method": "listTicketsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results to display per page.",
        "default": 10
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results."
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
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
    "url": "/crm/v3/objects/tickets",
    "method": "createTicketObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Create",
    "parameters": [
      {
        "name": "associations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "Onboarding service for data product",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_sku": "191902",
          "hs_cost_of_goods_sold": "600.00",
          "hs_recurring_billing_period": "P24M",
          "city": "Cambridge",
          "phone": "(https://developers.hubspot.com/docs/api/overview 929-0687",
          "state": "Massachusetts",
          "domain": "biglytics.net",
          "industry": "Technology",
          "amount": "1500.00",
          "dealname": "Custom data integrations",
          "pipeline": "default",
          "closedate": "2019-12-07T16:50:06.678Z",
          "dealstage": "presentationscheduled",
          "hubspot_owner_id": "910901",
          "email": "bcooper@biglytics.net",
          "company": "Biglytics",
          "website": "biglytics.net",
          "lastname": "Cooper",
          "firstname": "Bryan",
          "subject": "troubleshoot report",
          "hs_pipeline": "support_pipeline",
          "hs_pipeline_stage": "open",
          "hs_ticket_priority": "HIGH",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/tickets/search",
    "method": "ticketsByCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AFTER"
      },
      {
        "name": "sorts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "filterGroups",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/line_items/batch/read",
    "method": "readLineItems",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Read a batch of line items by internal ID, or unique property values",
    "parameters": [
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/line_items/{lineItemId}",
    "method": "archiveLineItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Archive",
    "parameters": [
      {
        "name": "lineItemId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LINEITEMID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/line_items/{lineItemId}",
    "method": "readLineItemById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Read",
    "parameters": [
      {
        "name": "lineItemId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LINEITEMID"
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
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
    "url": "/crm/v3/objects/line_items/{lineItemId}",
    "method": "updateLineItemObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Update",
    "parameters": [
      {
        "name": "lineItemId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LINEITEMID"
      },
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": "The name of a property whose values are unique for this object type"
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "A new product description",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_cost_of_goods_sold": "700.00",
          "property_date": "1572480000000",
          "property_radio": "option_1",
          "property_number": "17",
          "property_string": "value",
          "property_checkbox": "false",
          "property_dropdown": "choice_b",
          "property_multiple_checkboxes": "chocolate;strawberry",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly",
          "hs_recurring_billing_period": "P24M"
        }
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
    "url": "/crm/v3/objects/line_items/merge",
    "method": "mergeLineItemsSameType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Public_Object",
    "typeScriptTag": "publicObject",
    "description": "Merge two line items with same type",
    "parameters": [
      {
        "name": "objectIdToMerge",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTIDTOMERGE"
      },
      {
        "name": "primaryObjectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIMARYOBJECTID"
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
    "url": "/crm/v3/objects/line_items/batch/archive",
    "method": "archiveLineItemsByIds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Archive a batch of line items by ID",
    "parameters": [
      {
        "name": "inputs",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/line_items/batch/create",
    "method": "lineItemsCreateBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Create a batch of line items",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/line_items/batch/update",
    "method": "updateLineItems",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Update a batch of line items",
    "parameters": [
      {
        "name": "inputs",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/line_items/gdpr-delete",
    "method": "deleteContactContent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GDPR",
    "typeScriptTag": "gdpr",
    "description": "GDPR DELETE",
    "parameters": [
      {
        "name": "idProperty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/line_items",
    "method": "listLineItemsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results to display per page.",
        "default": 10
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results."
      },
      {
        "name": "properties",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored."
      },
      {
        "name": "propertiesWithHistory",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(https://developers.hubspot.com/docs/api/overview, they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request."
      },
      {
        "name": "associations",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
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
    "url": "/crm/v3/objects/line_items",
    "method": "createLineItemObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Basic",
    "typeScriptTag": "basic",
    "description": "Create",
    "parameters": [
      {
        "name": "associations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "description": "Onboarding service for data product",
          "name": "1 year implementation consultation",
          "price": "6000.00",
          "hs_sku": "191902",
          "hs_cost_of_goods_sold": "600.00",
          "hs_recurring_billing_period": "P24M",
          "city": "Cambridge",
          "phone": "(https://developers.hubspot.com/docs/api/overview 929-0687",
          "state": "Massachusetts",
          "domain": "biglytics.net",
          "industry": "Technology",
          "amount": "1500.00",
          "dealname": "Custom data integrations",
          "pipeline": "default",
          "closedate": "2019-12-07T16:50:06.678Z",
          "dealstage": "presentationscheduled",
          "hubspot_owner_id": "910901",
          "email": "bcooper@biglytics.net",
          "company": "Biglytics",
          "website": "biglytics.net",
          "lastname": "Cooper",
          "firstname": "Bryan",
          "subject": "troubleshoot report",
          "hs_pipeline": "support_pipeline",
          "hs_pipeline_stage": "open",
          "hs_ticket_priority": "HIGH",
          "quantity": "2",
          "hs_product_id": "191902",
          "recurringbillingfrequency": "monthly"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/objects/line_items/search",
    "method": "lineItemsByCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "after",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AFTER"
      },
      {
        "name": "sorts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "filterGroups",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/imports",
    "method": "getActiveImportsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Get active imports",
    "parameters": [
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results."
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results to display per page."
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
    "url": "/crm/v3/imports",
    "method": "startImport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Core",
    "typeScriptTag": "core",
    "description": "Start a new import",
    "parameters": [
      {
        "name": "files",
        "schema": "string",
        "description": ""
      },
      {
        "name": "importRequest",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A current summary of the import, whether complete or not."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/v3/owners",
    "method": "getPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Owners",
    "typeScriptTag": "owners",
    "description": "Get a page of owners",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Filter by email address (https://developers.hubspot.com/docs/api/overview"
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results to display per page.",
        "default": 100
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return only results that have been archived.",
        "default": false
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
      apiTitle="Line Items"
      apiBaseUrl="https://api.hubapi.com"
      apiVersion="v3"
      endpoints={116}
      sdkMethods={172}
      schemas={104}
      parameters={570}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hubspot/crm/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hubspot/crm/openapi.yaml"
      developerDocumentation="developers.hubspot.com/docs/api/overview"
    />
  );
}
  