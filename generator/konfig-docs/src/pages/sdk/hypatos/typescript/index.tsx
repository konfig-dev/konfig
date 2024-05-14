import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function HypatosTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="hypatos-typescript-sdk"
      metaDescription={`Balancing humans and machines to accelerate business.

Hypatos adds value to critical business operations using third wave AI and advanced automation technologies for document processing. By replacing routine and complex tasks with intelligent solutions, we are unlocking human potential and reshaping the workplace. As AI agents manage administrative tasks efficiently, accurately and cost effectively, people focus on strategic decisions and designing innovative solutions to bring business to the next level.

Data Protection Policy:
https://www.hypatos.ai/privacy-policy`}
      company="Hypatos"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hypatos/logo.png"
      companyKebabCase="hypatos"
      clientNameCamelCase="hypatos"
      homepage="hypatos.ai"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hypatos/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hypatos/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["machine_learning","ai","document_processing"]}
      methods={[
  {
    "url": "/auth/token",
    "method": "requestAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authorization",
    "typeScriptTag": "authorization",
    "description": "Request an access token",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANT_TYPE"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/files",
    "method": "uploadFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Upload a file",
    "parameters": [
      {
        "name": "xHyFilename",
        "schema": "string",
        "description": "Optional name of the file to be stored along with the content. If not provided, a filename will be generated"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/files/{id}",
    "method": "downloadById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Download a file by id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "File id to download",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/documents",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Retrieve a list of documents",
    "parameters": [
      {
        "name": "projectId",
        "schema": "array",
        "required": false,
        "description": "Project ids to to find items by. If ommitted, items from all existing projects are returned."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "A zero-based offset of the first item in the data collection to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit the amount of items returned in the response. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 20
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The field to sort reponse items by.",
        "default": "-createdAt"
      },
      {
        "name": "state",
        "schema": "array",
        "required": false,
        "description": "Used to retrieve documents that are in specific states only. Multiple states can be used for this filtering. By default, documents in all states are returned."
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": false,
        "description": "File identifier to retrieve documents that were created from that file"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/documents/process-file",
    "method": "processFileIntoDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Request processing of a file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5349b4ddd2781d08c09890f4"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "00000020f51bb4362eee2a4d"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "doc-0001"
      },
      {
        "name": "externalData",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/documents/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Retrieve a document by id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the document to get.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/documents/{id}/transfer",
    "method": "updateTransferInformation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Provide information about a transfer of a document to the target system",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of of the document to update.",
        "example": "ID"
      },
      {
        "name": "successful",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Upload failed due to ERP being down"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Document transfer infor accepted"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/documents/{id}/external-data",
    "method": "updateExternalData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Provide external data for a document with given id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the document to update.",
        "example": "ID"
      },
      {
        "name": "key1",
        "schema": "string",
        "description": "",
        "example": "value1"
      },
      {
        "name": "key2",
        "schema": "string",
        "description": "",
        "example": "value2"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "External data provided for the document accepted."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/documents/{id}/external-id",
    "method": "provideExternalId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Provide an external identifier for a document with given id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the document to update.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "External ID provided for the document accepted."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/documents/{id}/title",
    "method": "provideTitle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Provide a title for a document with given id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the document to update.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Document title provided for the document accepted."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/documents/{id}/states",
    "method": "getDocumentStates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Retrieve a document states",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the document to get states of.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/invoices",
    "method": "insertInvoiceIncludingInvoiceLines",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Insert invoice including invoice lines",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUPPLIER_INVOICE-3-1"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "63cac12c37bb02accb396cae"
      },
      {
        "name": "documents",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "supplierInvoiceNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10000001"
      },
      {
        "name": "invoiceNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12345"
      },
      {
        "name": "externalCompanyId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "DE01"
      },
      {
        "name": "externalSupplierId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "0000100000"
      },
      {
        "name": "externalBankAccountId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12341234"
      },
      {
        "name": "fiscalYearLabel",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2023"
      },
      {
        "name": "issuedDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2000-12-31"
      },
      {
        "name": "receivedDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2000-12-31"
      },
      {
        "name": "postingDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2000-12-31"
      },
      {
        "name": "isCanceled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "relatedInvoice",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SUPPLIER_INVOICE-3-2"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "EUR"
      },
      {
        "name": "totalNetAmount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 81
      },
      {
        "name": "totalFreightCharges",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 9
      },
      {
        "name": "totalOtherCharges",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 10
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 19
      },
      {
        "name": "totalGrossAmount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 119
      },
      {
        "name": "paymentTerms",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "externalApproverId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "UserID#1234"
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "headerText",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "doc header text"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "FI"
      },
      {
        "name": "invoiceLines",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "withholdingTax",
        "schema": "array",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/invoices/{externalId}",
    "method": "markInvoiceDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Mark invoice as deleted",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "Previously sent `externalId`",
        "example": "EXTERNALID"
      },
      {
        "name": "lineNumber",
        "schema": "string",
        "required": false,
        "description": "Line number of one of the line numbers inside the Invoice.\nOptional, omitting means the whole Invoice is deleted.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully marked as deleted"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/companies",
    "method": "addCompanyData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Insert company",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DE01"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Acmne Corp."
      },
      {
        "name": "street",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Hauptstr. 1"
      },
      {
        "name": "addressAdditional",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Eingang B"
      },
      {
        "name": "postcode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10001"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Berlin"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Berlin"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "DE"
      },
      {
        "name": "vatIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "id": "DE123456789X",
            "countryCode": "DE"
          }
        ]
      },
      {
        "name": "taxIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "id": "123-456-789X",
            "type": "TIN"
          }
        ]
      },
      {
        "name": "customFields",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/companies/{externalId}",
    "method": "markCompanyDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Mark company as deleted",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "Previously sent `externalId`",
        "example": "EXTERNALID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully marked as deleted"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/suppliers",
    "method": "insertSupplierIncludingSubsidiaries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Insert supplier including related subsidiaries",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0000100000"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Acmne Corp."
      },
      {
        "name": "street",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Hauptstr. 1"
      },
      {
        "name": "addressAdditional",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Eingang B"
      },
      {
        "name": "postcode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10001"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Berlin"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Berlin"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "DE"
      },
      {
        "name": "vatIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "id": "DE123456789X",
            "countryCode": "DE"
          }
        ]
      },
      {
        "name": "taxIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "id": "123-456-789X",
            "type": "TIN"
          }
        ]
      },
      {
        "name": "blockedForPosting",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "blockedForPayment",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "defaultGlAccountCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "0000100GL1"
      },
      {
        "name": "supplierSubsidiaries",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "supplierBankAccounts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/suppliers/{externalId}",
    "method": "markSupplierDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Mark supplier as deleted",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "Previously sent `externalId`",
        "example": "EXTERNALID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully marked as deleted"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/purchase-orders",
    "method": "insertPurchaseOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Insert purchase order including purchase order lines",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "4500016221"
      },
      {
        "name": "createdDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2000-12-31"
      },
      {
        "name": "fiscalYearLabel",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2023"
      },
      {
        "name": "language",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "externalCompanyId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "DE01"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Service"
      },
      {
        "name": "externalSupplierId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "0000100000"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "OPEN"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "EUR"
      },
      {
        "name": "totalNetAmount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 81
      },
      {
        "name": "totalFreightCharges",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 9
      },
      {
        "name": "totalOtherCharges",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 10
      },
      {
        "name": "totalTaxAmount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 19
      },
      {
        "name": "totalGrossAmount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 119
      },
      {
        "name": "paymentTerms",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "purchaseOrderLines",
        "schema": "array",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/purchase-orders/{externalId}",
    "method": "markPurchaseOrderDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Mark purchase Order as deleted",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "Previously sent `externalId`",
        "example": "EXTERNALID"
      },
      {
        "name": "lineNumber",
        "schema": "string",
        "required": false,
        "description": "Line number of one of the line numbers inside the PO.\nOptional, omitting means the whole PO is deleted.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully marked as deleted"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/gl-accounts",
    "method": "insertGlAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Insert general ledger account",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0000100GL1"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GL1"
      },
      {
        "name": "companyAssignment",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "DE01",
          "US01"
        ]
      },
      {
        "name": "type",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "label",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "text": "Entertainment Expenses",
            "language": "en"
          }
        ]
      },
      {
        "name": "shortLabel",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "text": "Entertainment Exp.",
            "language": "en"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/gl-accounts/{externalId}",
    "method": "markGlAccountDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Mark general ledger account as deleted",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "Previously sent `externalId`",
        "example": "EXTERNALID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully marked as deleted"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/cost-centers",
    "method": "insertCostCenter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Insert cost center",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0000100CO1"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CO1"
      },
      {
        "name": "companyAssignment",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "DE01",
          "US01"
        ]
      },
      {
        "name": "type",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "label",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "text": "Sales Engineers",
            "language": "en"
          }
        ]
      },
      {
        "name": "shortLabel",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "text": "Sales Eng.",
            "language": "en"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/cost-centers/{externalId}",
    "method": "markCostCenterDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Mark cost Center as deleted",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "Previously sent `externalId`",
        "example": "EXTERNALID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully marked as deleted"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/approvers",
    "method": "insertApproverRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Insert approver",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UserID#1234"
      },
      {
        "name": "companyAssignment",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "DE01",
          "US01"
        ]
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Koala"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Hinze"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "accountant@sap.com"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 491001234567891
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/approvers/{externalId}",
    "method": "markApproverDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Mark approver as deleted",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "Previously sent `externalId`",
        "example": "EXTERNALID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully marked as deleted"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/customers",
    "method": "insertCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Insert customer",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0000100000"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Acmne Corp."
      },
      {
        "name": "street",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Hauptstr. 1"
      },
      {
        "name": "addressAdditional",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Eingang B"
      },
      {
        "name": "postcode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10001"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Berlin"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "DE"
      },
      {
        "name": "vatIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "id": "DE123456789X",
            "countryCode": "DE"
          }
        ]
      },
      {
        "name": "taxIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "id": "123-456-789X",
            "type": "TIN"
          }
        ]
      },
      {
        "name": "blockedForPosting",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "blockedForPayment",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "customerSubsidiaries",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customerBankAccounts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/enrichment/customers/{externalId}",
    "method": "markCustomerAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Enrichment",
    "typeScriptTag": "enrichment",
    "description": "Mark customer as deleted",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "Previously sent `externalId`",
        "example": "EXTERNALID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully marked as deleted"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Retrieve a company by id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the company to retrieve",
        "example": "63e6663823b4c1f5287398bb"
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
    "url": "/companies",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Retrieve a list of companies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects",
    "method": "listForGivenSearchCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Retrieve a projects list for given search criteria",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "A zero-based offset of the first item in the data collection to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit the amount of items returned in the response. If the value exceeds the maximum, then the maximum value will be used.",
        "default": 20
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The field to sort reponse items by.",
        "default": "-createdAt"
      },
      {
        "name": "search",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects",
    "method": "createProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create a project",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Project"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My project description note"
      },
      {
        "name": "ocr",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "extractionModelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "63e6663823b4c1f5287398bb"
      },
      {
        "name": "completion",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "manual",
        "default": "manual"
      },
      {
        "name": "duplicates",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "allow",
        "default": "fail"
      },
      {
        "name": "members",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "schema",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Project response"
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
      }
    ]
  },
  {
    "url": "/projects/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Retrieve a project by id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Project id",
        "example": "63e6663823b4c1f5287398bb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Project response"
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
      }
    ]
  },
  {
    "url": "/projects/{id}/schema",
    "method": "getSchemaByProjectId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Retrieve a schema by project id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Project id",
        "example": "63e6663823b4c1f5287398bb"
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
      }
    ]
  },
  {
    "url": "/emails/{id}/content",
    "method": "getMergedContentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Retrieve an email merged content for given document ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6295dcd39db1ab740c3e296c"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Hypatos REST API"
      apiBaseUrl="https://api.cloud.hypatos.ai/v2"
      apiVersion="2.15.0"
      endpoints={33}
      sdkMethods={34}
      schemas={70}
      parameters={139}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hypatos/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hypatos/openapi.yaml"
      developerDocumentation="hypatos.redoc.ly/"
    />
  );
}
  