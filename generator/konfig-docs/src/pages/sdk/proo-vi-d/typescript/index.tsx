import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ProoViDTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="proovid-typescript-sdk"
      metaDescription={`PROOViD is a regulatory technology (RegTech) company based in Nicosia, Cyprus consisting of a multi-disciplinary team of Compliance / AML Experts, who over the years have built a consolidated system comprising a fully Integrated one-stop shop offering for KYC and Risk Management.`}
      company="PROOViD"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proovid/logo.png"
      companyKebabCase="proo-vi-d"
      clientNameCamelCase="prooViD"
      homepage="www.proovid.com/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proovid/favicon.png"
      contactUrl="http://www.proovid.com"
      contactEmail="info@proovid.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proovid/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["regtech","risk_management","kyc","aml"]}
      methods={[
  {
    "url": "/api/Address/AddressVerification/{id}",
    "method": "verifyById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Address",
    "typeScriptTag": "address",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
      }
    ]
  },
  {
    "url": "/api/Address/AddressVerification/{id}",
    "method": "verifyById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Address",
    "typeScriptTag": "address",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
      }
    ]
  },
  {
    "url": "/api/Address/AddressVerification/{id}/certificate.pdf",
    "method": "verifyCertificatePdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Address",
    "typeScriptTag": "address",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/Address/VerificationByLevel",
    "method": "verifyByLevel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Address",
    "typeScriptTag": "address",
    "description": "",
    "parameters": [
      {
        "name": "referenceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "naturalPersonId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "naturalPersonIndexId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "surname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobilePhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "verificationLevel",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "document",
        "schema": "string",
        "description": ""
      },
      {
        "name": "street",
        "schema": "string",
        "description": ""
      },
      {
        "name": "streetNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "district",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "region",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zipCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullAddress",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skipDocumentComparison",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "validityPeriod",
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
    "url": "/api/Address/NaturalPersonELV",
    "method": "createNaturalPersonElv",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Address",
    "typeScriptTag": "address",
    "description": "",
    "parameters": [
      {
        "name": "naturalPersonIndexId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "street",
        "schema": "string",
        "description": ""
      },
      {
        "name": "streetNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zipCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "district",
        "schema": "string",
        "description": ""
      },
      {
        "name": "region",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullAddress",
        "schema": "string",
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
    "url": "/api/Address/LinkResponse",
    "method": "linkResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Address",
    "typeScriptTag": "address",
    "description": "",
    "parameters": [
      {
        "name": "link",
        "schema": "string",
        "description": ""
      },
      {
        "name": "coords",
        "schema": "array",
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
    "url": "/api/Document/DocumentVerification/{id}",
    "method": "verifyDeletion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
      }
    ]
  },
  {
    "url": "/api/Document/DocumentVerification/{id}",
    "method": "verifyStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
      }
    ]
  },
  {
    "url": "/api/Document/DocumentVerification/{id}/certificate.pdf",
    "method": "getCertificate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/Document/VerifyDocument",
    "method": "verifyStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Document",
    "typeScriptTag": "document",
    "description": "",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "document",
        "schema": "string",
        "description": ""
      },
      {
        "name": "additionalDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "face",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "naturalPersonId",
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
    "url": "/api/Health/Status",
    "method": "statusCheck",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
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
    "url": "/api/Health/Version",
    "method": "getVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
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
    "url": "/api/NaturalPerson",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "info",
        "schema": "object",
        "description": ""
      },
      {
        "name": "clientReferenceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documents",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/NaturalPerson/verify",
    "method": "verifyDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "info",
        "schema": "object",
        "description": ""
      },
      {
        "name": "clientReferenceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documents",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/NaturalPerson/verifyentity",
    "method": "verifyEntity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "info",
        "schema": "object",
        "description": ""
      },
      {
        "name": "clientReferenceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documents",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/NaturalPerson/{naturalPersonId}/updateDocuments",
    "method": "updateDocuments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "naturalPersonId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "idDocument",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addressDocument",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/api/NaturalPerson/{naturalPersonId}/updateDocuments/verify",
    "method": "verifyDocuments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "naturalPersonId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "idDocument",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addressDocument",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/api/NaturalPerson/{naturalPersonId}/verify",
    "method": "verifyDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "naturalPersonId",
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
        "statusCode": "401",
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
    "url": "/api/NaturalPerson/{naturalPersonId}/get",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "naturalPersonId",
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
        "statusCode": "401",
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
    "url": "/api/NaturalPerson/{naturalPersonId}/updateInfo",
    "method": "updateInformation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "naturalPersonId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "clientReferenceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "legalName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "countryBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countryResidence",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countryMainBusiness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailTwo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobilePhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobilePhoneTwo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "automaticallyUpdateNPRisk",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "riskLevel",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "riskLevelJustification",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isFlagged",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "economicProfile",
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
    "url": "/api/NaturalPerson/verificationRecord/{verificationId}",
    "method": "getVerificationRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "verificationId",
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
        "statusCode": "401",
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
    "url": "/api/NaturalPerson/{naturalPersonId}/certificate",
    "method": "getCertificate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "naturalPersonId",
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
        "statusCode": "401",
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
    "url": "/api/NaturalPerson/{naturalPersonId}/delete",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "naturalPersonId",
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
        "statusCode": "401",
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
    "url": "/api/NaturalPerson/{naturalPersonId}/verifications",
    "method": "getVerifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "naturalPersonId",
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
        "statusCode": "401",
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
    "url": "/api/NaturalPerson/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
      }
    ]
  },
  {
    "url": "/api/NaturalPerson/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
      }
    ]
  },
  {
    "url": "/api/NaturalPerson/{reference}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NaturalPerson",
    "typeScriptTag": "naturalPerson",
    "description": "",
    "parameters": [
      {
        "name": "reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFERENCE"
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
    "url": "/api/Screening/NaturalPerson",
    "method": "submitNaturalPersonScreening",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Screening",
    "typeScriptTag": "screening",
    "description": "",
    "parameters": [
      {
        "name": "naturalPersonId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dob",
        "schema": "string",
        "description": ""
      },
      {
        "name": "partialMatch",
        "schema": "string",
        "description": ""
      },
      {
        "name": "document",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentType",
        "schema": "string",
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
    "url": "/api/Screening/NaturalPerson/{id}",
    "method": "removeNaturalPerson",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Screening",
    "typeScriptTag": "screening",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
      }
    ]
  },
  {
    "url": "/api/Screening/NaturalPerson/{id}",
    "method": "getNaturalPersonById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Screening",
    "typeScriptTag": "screening",
    "description": "",
    "parameters": [
      {
        "name": "id",
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
      }
    ]
  },
  {
    "url": "/api/Screening/AmlReport/{reference}",
    "method": "getAmlReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Screening",
    "typeScriptTag": "screening",
    "description": "",
    "parameters": [
      {
        "name": "reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFERENCE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Proovid Electronic Verification"
      apiBaseUrl="https://proovidapi.azurewebsites.net/"
      apiVersion="v1"
      endpoints={29}
      sdkMethods={33}
      schemas={93}
      parameters={109}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proovid/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/proovid/openapi.yaml"
      developerDocumentation="proovidapi.azurewebsites.net/index.html"
    />
  );
}
  