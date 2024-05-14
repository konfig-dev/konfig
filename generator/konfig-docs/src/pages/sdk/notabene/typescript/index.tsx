import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function NotabeneTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="notabene-typescript-sdk"
      metaDescription={`Notabene's SafeTransact is an easy-to-use platform that empowers customers to identify and stop high-risk crypto activity before it occurs.`}
      company="Notabene"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notabene/logo.png"
      companyKebabCase="notabene"
      clientNameCamelCase="notabene"
      homepage="notabene.id/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notabene/favicon.png"
      contactUrl="https://doc.notabene.id"
      contactEmail="tech@notabene.id"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notabene/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["fintech","crypto","financial_services","crypto_platform"]}
      methods={[
  {
    "url": "/address/upload/{vaspDID}",
    "method": "requestUploadUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Address Book",
    "typeScriptTag": "addressBook",
    "description": "Get upload URL",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
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
    "url": "/address/registerCustomer",
    "method": "registerCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Address Book",
    "typeScriptTag": "addressBook",
    "description": "Register address",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "asset",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS"
      },
      {
        "name": "customerRef",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMERREF"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Addess Owner is already registered?"
      }
    ]
  },
  {
    "url": "/v1/addresses/address-ownerships/{address}",
    "method": "getOwnershipInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Address Book",
    "typeScriptTag": "addressBook",
    "description": "Get address ownership information",
    "parameters": [
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0x489c818ca8b9251b393131b08a736a67ccb19298"
      },
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
      },
      {
        "name": "asset",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ETH"
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
      }
    ]
  },
  {
    "url": "/v1/addresses",
    "method": "removeAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Address Book",
    "typeScriptTag": "addressBook",
    "description": "Delete addresses",
    "parameters": [
      {
        "name": "addresses",
        "schema": "string",
        "required": true,
        "description": "Comma-separated list of addresses to delete",
        "example": "0x123,0x456"
      },
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
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
    "url": "/v1/addresses",
    "method": "getRegisteredAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Address Book",
    "typeScriptTag": "addressBook",
    "description": "Get addresses registered",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
      },
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE"
      },
      {
        "name": "sourceType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/auth/customerToken",
    "method": "getCustomerAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Get customer access token",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "customerRef",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMERREF"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API Token"
      }
    ]
  },
  {
    "url": "/auth/userinfo/update",
    "method": "updateUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Update user",
    "parameters": [
      {
        "name": "did",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "fields",
        "schema": "array",
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
    "url": "/auth/credentials/{vaspDID}",
    "method": "deleteAuth0ApiCredentials",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Credentials",
    "typeScriptTag": "credentials",
    "description": "Delete API credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "clientid",
        "schema": "string",
        "description": "auth0 clientId"
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
    "url": "/auth/credentials/{vaspDID}",
    "method": "getAuth0Credentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credentials",
    "typeScriptTag": "credentials",
    "description": "Get API credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/auth/credentials/{vaspDID}",
    "method": "createNewApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credentials",
    "typeScriptTag": "credentials",
    "description": "Create new API credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "delegateToGateway",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "limited",
        "schema": "boolean",
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
    "url": "/auth/vaspUsers/{vaspDID}",
    "method": "listVaspUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VASPAdmin",
    "typeScriptTag": "vaspAdmin",
    "description": "List VASP users",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of users"
      }
    ]
  },
  {
    "url": "/auth/addusertovasp",
    "method": "addUserToVasp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "VASPAdmin",
    "typeScriptTag": "vaspAdmin",
    "description": "Add user to VASP",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "vasp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "callbackExtra",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User added and email sent to user"
      }
    ]
  },
  {
    "url": "/auth/removeuserfromvasp",
    "method": "removeUserFromVasp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "VASPAdmin",
    "typeScriptTag": "vaspAdmin",
    "description": "Remove user from VASP",
    "parameters": [
      {
        "name": "userDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "vasp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User removed from VASP"
      }
    ]
  },
  {
    "url": "/auth/customer",
    "method": "createNewCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Create customer",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "customerRef",
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
    "url": "/auth/customer/{vaspDID}/{customerDID}",
    "method": "getByDids",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Get customer",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
      },
      {
        "name": "customerDid",
        "schema": "string",
        "required": true,
        "description": "Customer DID",
        "example": "did:methd:identifier"
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
    "url": "/integrations/{vaspDID}/address-query-webhook",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Address webhook",
    "typeScriptTag": "addressWebhook",
    "description": "Delete a Webhook for querying addresses",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
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
    "url": "/integrations/{vaspDID}/address-query-webhook",
    "method": "registerQuery",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Address webhook",
    "typeScriptTag": "addressWebhook",
    "description": "Register a Webhook for querying addresses",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "params",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARAMS"
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
    "url": "/integrations/config/txnotification",
    "method": "createCallbackUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction webhook",
    "typeScriptTag": "transactionWebhook",
    "description": "Create a notification webhook",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALLBACKURL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Config saved"
      }
    ]
  },
  {
    "url": "/integrations/txnotification/{vaspDID}",
    "method": "getNotificationWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction webhook",
    "typeScriptTag": "transactionWebhook",
    "description": "Get a notification webhook",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/providers/{vaspDID}",
    "method": "getConfigured",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get Third Party Providers",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/chainalysis/addressinfo",
    "method": "getAddressInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Chainalysis",
    "typeScriptTag": "chainalysis",
    "description": "Chainalysis address info",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/chainalysis/credentials",
    "method": "deleteCredentials",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Chainalysis",
    "typeScriptTag": "chainalysis",
    "description": "Delete Chainalysis credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/chainalysis/credentials",
    "method": "checkCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Chainalysis",
    "typeScriptTag": "chainalysis",
    "description": "Check Chainalysis credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/chainalysis/credentials",
    "method": "setCredentials",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Chainalysis",
    "typeScriptTag": "chainalysis",
    "description": "Set Chainalysis credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/chainalysis2/addressinfo",
    "method": "getAddressInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Chainalysis2",
    "typeScriptTag": "chainalysis2",
    "description": "Chainalysis v2 address info",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/chainalysis2/credentials",
    "method": "deleteCredentials",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Chainalysis",
    "typeScriptTag": "chainalysis",
    "description": "Delete Chainalysis credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/chainalysis2/credentials",
    "method": "checkCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Chainalysis",
    "typeScriptTag": "chainalysis",
    "description": "Check Chainalysis credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/chainalysis2/credentials",
    "method": "setCredentials",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Chainalysis",
    "typeScriptTag": "chainalysis",
    "description": "Set Chainalysis credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/lexisnexis/sanctions",
    "method": "performSanctionsCheck",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LexisNexis",
    "typeScriptTag": "lexisNexis",
    "description": "LexisNexis sanctions check",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/lexisnexis/credentials",
    "method": "deleteCredentials",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LexisNexis",
    "typeScriptTag": "lexisNexis",
    "description": "Delete LexisNexis credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/lexisnexis/credentials",
    "method": "checkCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LexisNexis",
    "typeScriptTag": "lexisNexis",
    "description": "Check LexisNexis credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/lexisnexis/credentials",
    "method": "setCredentials",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "LexisNexis",
    "typeScriptTag": "lexisNexis",
    "description": "Set LexisNexis credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/trm/addressinfo",
    "method": "getAddressInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TRM",
    "typeScriptTag": "trm",
    "description": "TRM address info",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/trm/credentials",
    "method": "deleteCredentials",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TRM",
    "typeScriptTag": "trm",
    "description": "Delete TRM credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/trm/credentials",
    "method": "checkCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TRM",
    "typeScriptTag": "trm",
    "description": "Check TRM credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/trm/credentials",
    "method": "setCredentials",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TRM",
    "typeScriptTag": "trm",
    "description": "Set TRM credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/trmsanctions/sanctions",
    "method": "sanctionsCheck",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TRMSanctions",
    "typeScriptTag": "trmSanctions",
    "description": "TRMSanctions sanctions check",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/trmsanctions/credentials",
    "method": "deleteCredentials",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TRMSanctions",
    "typeScriptTag": "trmSanctions",
    "description": "Delete TRMSanctions credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/trmsanctions/credentials",
    "method": "checkCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TRMSanctions",
    "typeScriptTag": "trmSanctions",
    "description": "Check TRMSanctions credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/trmsanctions/credentials",
    "method": "setCredentials",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TRMSanctions",
    "typeScriptTag": "trmSanctions",
    "description": "Set TRMSanctions credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/coinfirm/addressinfo",
    "method": "getAddressInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Coinfirm",
    "typeScriptTag": "coinfirm",
    "description": "Coinfirm address info",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/coinfirm/credentials",
    "method": "deleteCredentials",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Coinfirm",
    "typeScriptTag": "coinfirm",
    "description": "Delete Coinfirm credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/coinfirm/credentials",
    "method": "checkCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coinfirm",
    "typeScriptTag": "coinfirm",
    "description": "Check Coinfirm credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/coinfirm/credentials",
    "method": "setCredentials",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Coinfirm",
    "typeScriptTag": "coinfirm",
    "description": "Set Coinfirm credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/bitgo/addressinfo",
    "method": "getAddressInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bitgo",
    "typeScriptTag": "bitgo",
    "description": "Bitgo address info",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/bitgo/credentials",
    "method": "deleteCredentials",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bitgo",
    "typeScriptTag": "bitgo",
    "description": "Delete Bitgo credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/bitgo/credentials",
    "method": "checkCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bitgo",
    "typeScriptTag": "bitgo",
    "description": "Check Bitgo credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/bitgo/credentials",
    "method": "setCredentials",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Bitgo",
    "typeScriptTag": "bitgo",
    "description": "Set Bitgo credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/complyadvantage/sanctions",
    "method": "sanctionsCheck",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ComplyAdvantage",
    "typeScriptTag": "complyAdvantage",
    "description": "ComplyAdvantage sanctions check",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/complyadvantage/credentials",
    "method": "deleteCredentials",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ComplyAdvantage",
    "typeScriptTag": "complyAdvantage",
    "description": "Delete ComplyAdvantage credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/complyadvantage/credentials",
    "method": "checkCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ComplyAdvantage",
    "typeScriptTag": "complyAdvantage",
    "description": "Check ComplyAdvantage credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/complyadvantage/credentials",
    "method": "setCredentials",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ComplyAdvantage",
    "typeScriptTag": "complyAdvantage",
    "description": "Set ComplyAdvantage credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/refinitiv/sanctions",
    "method": "sanctionsCheck",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Refinitiv",
    "typeScriptTag": "refinitiv",
    "description": "Refinitiv sanctions check",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/refinitiv/credentials",
    "method": "deleteCredentials",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Refinitiv",
    "typeScriptTag": "refinitiv",
    "description": "Delete Refinitiv credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/refinitiv/credentials",
    "method": "checkCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refinitiv",
    "typeScriptTag": "refinitiv",
    "description": "Check Refinitiv credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/refinitiv/credentials",
    "method": "setCredentials",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Refinitiv",
    "typeScriptTag": "refinitiv",
    "description": "Set Refinitiv credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/merklescience/addressinfo",
    "method": "getAddressInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "MerkleScience",
    "typeScriptTag": "merkleScience",
    "description": "MerkleScience address info",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/merklescience/credentials",
    "method": "deleteCredentials",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "MerkleScience",
    "typeScriptTag": "merkleScience",
    "description": "Delete MerkleScience credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/merklescience/credentials",
    "method": "checkCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "MerkleScience",
    "typeScriptTag": "merkleScience",
    "description": "Check MerkleScience credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/merklescience/credentials",
    "method": "setCredentials",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "MerkleScience",
    "typeScriptTag": "merkleScience",
    "description": "Set MerkleScience credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/elliptic/addressinfo",
    "method": "getAddressInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Elliptic",
    "typeScriptTag": "elliptic",
    "description": "Elliptic address info",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/integrations/elliptic/credentials",
    "method": "deleteCredentials",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Elliptic",
    "typeScriptTag": "elliptic",
    "description": "Delete Elliptic credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/elliptic/credentials",
    "method": "checkCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Elliptic",
    "typeScriptTag": "elliptic",
    "description": "Check Elliptic credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/integrations/elliptic/credentials",
    "method": "setCredentials",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Elliptic",
    "typeScriptTag": "elliptic",
    "description": "Set Elliptic credentials",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "data",
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
    "url": "/protocol-agents",
    "method": "unregisterVasp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProtocolAgents",
    "typeScriptTag": "protocolAgents",
    "description": "Unregister a Protocol Agent for a given VASP",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/protocol-agents",
    "method": "getConfiguredProtocolAgents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProtocolAgents",
    "typeScriptTag": "protocolAgents",
    "description": "Get the configured Protocol Agents for a given VASP",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
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
    "url": "/protocol-agents",
    "method": "registerForVasp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProtocolAgents",
    "typeScriptTag": "protocolAgents",
    "description": "Register a Protocol Agent for a given VASP",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/protocol-agents-message-handler",
    "method": "handleAgentMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProtocolAgents",
    "typeScriptTag": "protocolAgents",
    "description": "Handle a Protocol Agent Message",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      },
      {
        "name": "payload",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Message received"
      }
    ]
  },
  {
    "url": "/protocol-gateways/callbacks/address-confirmation/{transactionId}",
    "method": "addressConfirmationResolution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Protocol Gateways",
    "typeScriptTag": "protocolGateways",
    "description": "Address confirmation resolution",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "Transaction ID",
        "example": "TRANSACTIONID"
      },
      {
        "name": "requester_vasp_did",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Address confirmation resolution processed"
      }
    ]
  },
  {
    "url": "/protocol-gateways/callbacks/receive-transfer/{transactionId}",
    "method": "receiveTransferCallback",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Protocol Gateways",
    "typeScriptTag": "protocolGateways",
    "description": "Receive Transfer resolution",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "Transaction ID",
        "example": "TRANSACTIONID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Receive transfer resolution processed"
      }
    ]
  },
  {
    "url": "/webhook",
    "method": "unregisterVasp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Unregister the multi-message Webhook for a given VASP.",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Config saved"
      }
    ]
  },
  {
    "url": "/webhook",
    "method": "getRegistrationUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get the registered multi-message Webhook URL for a given VASP.",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "The VASP DID",
        "example": "did:methd:identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Config saved"
      },
      {
        "statusCode": "404",
        "description": "No webhook registered"
      }
    ]
  },
  {
    "url": "/webhook",
    "method": "registerMultiMessageUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Register the multi-message Webhook URL for a given VASP.",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
        "statusCode": "200",
        "description": "Config saved"
      }
    ]
  },
  {
    "url": "/tf/vasps/create",
    "method": "initiateVaspCreation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TrustFramework",
    "typeScriptTag": "trustFramework",
    "description": "Create VASP",
    "parameters": [
      {
        "name": "challengeToken",
        "schema": "string",
        "required": true,
        "description": "ChallengeToken",
        "example": "CHALLENGETOKEN"
      },
      {
        "name": "vaspFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "userFields",
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
    "url": "/tf/simple/vasps/{vaspDID}",
    "method": "getVaspInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TrustFramework",
    "typeScriptTag": "trustFramework",
    "description": "Get VASP",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "csv of fields to return"
      },
      {
        "name": "reviewedByVaspDid",
        "schema": "string",
        "description": "include reviewed vasps for specified did",
        "example": "did:methd:identifier"
      },
      {
        "name": "showJurisdictionStatus",
        "schema": "boolean",
        "description": "include jurisdiction status information"
      },
      {
        "name": "includeSubsidiaries",
        "schema": "boolean",
        "description": "include subsidiaries of particular vasp"
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
    "url": "/tf/simple/vasps",
    "method": "listVasps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TrustFramework",
    "typeScriptTag": "trustFramework",
    "description": "List VASPs",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "string to query"
      },
      {
        "name": "emailDomain",
        "schema": "string",
        "description": "filter on email domain"
      },
      {
        "name": "chainalysisName",
        "schema": "string",
        "description": "filter on chainalysis name"
      },
      {
        "name": "hasAdmin",
        "schema": "boolean",
        "description": "filter on hasAdmin true or false"
      },
      {
        "name": "badge",
        "schema": "string",
        "description": "filter by badge"
      },
      {
        "name": "jurisdictions",
        "schema": "string",
        "description": "filter by jurisdictions"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "csv of fields to return"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "records per page"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "field to order by"
      },
      {
        "name": "all",
        "schema": "boolean",
        "description": "return all records"
      },
      {
        "name": "listingType",
        "schema": "string",
        "description": "Choose the way gateway VASPs and non-gateway VASPs are returned. By default, exclude_subsidiaries."
      },
      {
        "name": "includeUncheckedVasPs",
        "schema": "boolean",
        "description": "include vasps that have not been internally checked",
        "default": false
      },
      {
        "name": "includeActiveSendersOnly",
        "schema": "boolean",
        "description": "include only those vasps that are sending transactions",
        "default": false
      },
      {
        "name": "includeActiveReceiversOnly",
        "schema": "boolean",
        "description": "include only those vasps that are receiving transactions",
        "default": false
      },
      {
        "name": "regulatoryStatus",
        "schema": "string",
        "description": "include only those vasps matching the specified regulatory status",
        "default": false
      },
      {
        "name": "asset",
        "schema": "string",
        "description": "asset symbol, provide when filtering by wallet"
      },
      {
        "name": "reviewedByVaspDid",
        "schema": "string",
        "description": "include reviewed vasps for specified did",
        "example": "did:methd:identifier"
      },
      {
        "name": "showJurisdictionStatus",
        "schema": "boolean",
        "description": "include jurisdiction status information"
      },
      {
        "name": "reviewValue",
        "schema": "string",
        "description": "include reviewed vasps containing specified value"
      },
      {
        "name": "filterByJurisdictionStatus",
        "schema": "string",
        "description": "filter by specified jurisdiction status"
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
    "url": "/tf/vasps/{vaspDID}/VASPTravelRuleProtocols",
    "method": "getTravelRuleProtocols",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TrustFramework",
    "typeScriptTag": "trustFramework",
    "description": "Get VASP Travel Rule protocols",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
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
    "url": "/tf/vasps/update",
    "method": "updateVasp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TrustFramework",
    "typeScriptTag": "trustFramework",
    "description": "Update VASP",
    "parameters": [
      {
        "name": "did",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "fields",
        "schema": "array",
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
    "url": "/tf/vasps/delete/{vaspDID}",
    "method": "deleteVasp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TrustFramework",
    "typeScriptTag": "trustFramework",
    "description": "Delete VASP",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
      },
      {
        "name": "redirectDid",
        "schema": "string",
        "description": "VASP DID to redirect transactions to",
        "example": "did:methd:identifier"
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
    "url": "/tf/vasps/{vaspDID}/review",
    "method": "markVaspReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TrustFramework",
    "typeScriptTag": "trustFramework",
    "description": "Review VASP",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "The VASP who is adding to their review list",
        "example": "did:methd:identifier"
      },
      {
        "name": "reviewedVaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "reviewValue",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REVIEWVALUE"
      },
      {
        "name": "note",
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
      }
    ]
  },
  {
    "url": "/tf/vasps/userVASPList",
    "method": "getUserVaspList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trust Framework",
    "typeScriptTag": "trustFramework",
    "description": "Get VASPs associated with user",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "description": "csv of fields to return"
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
      }
    ]
  },
  {
    "url": "/tf/vasps/did",
    "method": "createVaspDid",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TrustFramework",
    "typeScriptTag": "trustFramework",
    "description": "Create a VASP did",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tf/vasps/top-counterparties",
    "method": "getTopCounterpartyData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TrustFramework",
    "typeScriptTag": "trustFramework",
    "description": "Get top counterparty data",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/tf/vasps/{vaspDID}/settings",
    "method": "updateVaspSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update a VASP's settings",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
      },
      {
        "name": "autoconfirm",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "statusToProcessBlockchain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vaspDiscoverability",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "autoredirect",
        "schema": "boolean",
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
    "url": "/tf/vasps/{vaspDID}/getSettings",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get a VASP's settings",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
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
    "url": "/tf/vasps/upload/{vaspDID}",
    "method": "getUploadUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Get upload URL",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
      },
      {
        "name": "documentType",
        "schema": "string",
        "description": "documentType"
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
    "url": "/tf/vasps/download/{vaspDID}",
    "method": "getLocation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Get document",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
      },
      {
        "name": "s3Url",
        "schema": "string",
        "description": "S3 URL where the document is located"
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
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/tf/vasps/document/delete/{vaspDID}",
    "method": "deleteDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Delete document",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "VASP DID",
        "example": "did:methd:identifier"
      },
      {
        "name": "s3Url",
        "schema": "string",
        "description": "S3 URL where the document is located"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Document deleted"
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
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/tf/vasps/{vaspDID}/documents/requests",
    "method": "listRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Get document requests",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "undefined",
        "required": true,
        "description": "DID of the VASP who's doc is being requested"
      },
      {
        "name": "requestingVasPdid",
        "schema": "string",
        "required": false,
        "description": "(https://doc.notabene.id/ DID of the VASP who is requesting the document",
        "example": "did:methd:identifier"
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
      }
    ]
  },
  {
    "url": "/tf/vasps/{vaspDID}/documents/requests",
    "method": "requestAccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Request, Accept, Reject or Revoke Document Access",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "vaspDID of document owner",
        "example": "did:methd:identifier"
      },
      {
        "name": "requestingVasPdid",
        "schema": "string",
        "required": true,
        "description": "vaspDID of party subject to document access",
        "example": "did:methd:identifier"
      },
      {
        "name": "documentType",
        "schema": "string",
        "required": true,
        "description": "type of the document",
        "example": "DOCUMENTTYPE"
      },
      {
        "name": "accessAction",
        "schema": "string",
        "required": true,
        "description": "access action",
        "example": "ACCESSACTION"
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": false,
        "description": "metadata (eg. reason for decline/revoke)"
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
      }
    ]
  },
  {
    "url": "/tf/vasps/{vaspDID}/documents/ddq",
    "method": "getDdqDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Get DDQ document of vaspDID",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "DID of the VASP who's doc is being requested",
        "example": "did:methd:identifier"
      },
      {
        "name": "requestingVasPdid",
        "schema": "string",
        "required": false,
        "description": "DID of the VASP who is requesting the document",
        "example": "did:methd:identifier"
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
    "url": "/tx/info",
    "method": "getTransferDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get transfer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123e4567-e89b-12d3-a456-426614174000"
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
    "url": "/tx/query",
    "method": "searchTransfer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Search transfer",
    "parameters": [
      {
        "name": "txHash",
        "schema": "string",
        "required": false,
        "description": "Transaction txHash"
      },
      {
        "name": "destination",
        "schema": "string",
        "required": false,
        "description": "Destination Address"
      },
      {
        "name": "vout",
        "schema": "string",
        "required": false,
        "description": "Bitcoin vout"
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
    "url": "/tx/listBeneficiaryOriginator",
    "method": "listBeneficiaryOriginator",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List the transactions of a VASP. The transactions are grouped by beneficiary and originator.",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "vaspDID to get list for",
        "example": "did:methd:identifier"
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
    "url": "/tx/list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List transactions",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "vaspDID to get list for",
        "example": "did:methd:identifier"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number the user wants to retrieve, default value is 0",
        "example": 0
      },
      {
        "name": "resultsPerPage",
        "schema": "integer",
        "description": "Number of records to show per page, default value is 100",
        "example": 100
      },
      {
        "name": "txGroup",
        "schema": "string",
        "description": "",
        "example": "INBOX"
      },
      {
        "name": "transactionAsset",
        "schema": "string",
        "description": "",
        "example": "ETH"
      },
      {
        "name": "transactionType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transactionRef",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "array",
        "description": "Filter your transactions by status"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "Search term for transactions"
      },
      {
        "name": "txDirection",
        "schema": "string",
        "description": ""
      },
      {
        "name": "decrypt",
        "schema": "boolean",
        "description": "Decrypt PII data",
        "default": false
      },
      {
        "name": "csv",
        "schema": "boolean",
        "description": "Get data in CSV format"
      },
      {
        "name": "includeActions",
        "schema": "boolean",
        "description": "Include action data with the transactions"
      },
      {
        "name": "jurisdictions",
        "schema": "array",
        "description": "Filter your transactions by jurisdictions"
      },
      {
        "name": "vasps",
        "schema": "array",
        "description": "Filter your transactions by vasps"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "Filter your transactions created after the specified date (https://doc.notabene.id/",
        "example": "2023-07-20"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "Filter your transactions created before the specified date (https://doc.notabene.id/",
        "example": "2023-07-20"
      },
      {
        "name": "wallet",
        "schema": "string",
        "description": "Filter your transactions by wallet address"
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
    "url": "/tx/validate",
    "method": "validateTransferFields",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Validate transfer",
    "parameters": [
      {
        "name": "transactionAsset",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ETH"
      },
      {
        "name": "destination",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESTINATION"
      },
      {
        "name": "transactionAmount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTIONAMOUNT"
      },
      {
        "name": "originatorVASPdid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "originatorEqualsBeneficiary",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "beneficiaryVASPdid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryVASPname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiaryName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiaryAccountNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiaryAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiaryProof",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "travelRuleBehavior",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "network",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/tx/validate/full",
    "method": "fullyValidateTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Fully Validate transfer",
    "parameters": [
      {
        "name": "transactionAsset",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ETH"
      },
      {
        "name": "transactionAmount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTIONAMOUNT"
      },
      {
        "name": "originatorDid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryDid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "originatorVASPdid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryVASPdid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryVASPname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transactionBlockchainInfo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "originator",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiary",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "encrypted",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "protocol",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "TRLight"
      },
      {
        "name": "notificationEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skipBeneficiaryDataValidation",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "travelRuleBehavior",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "originatorProof",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiaryProof",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "pii",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "network",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "validatePartyFields",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "onBehalfOfMyself",
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
      }
    ]
  },
  {
    "url": "/tx/create",
    "method": "createTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Create transfer",
    "parameters": [
      {
        "name": "transactionRef",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transactionAsset",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "transactionAmount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTIONAMOUNT"
      },
      {
        "name": "transactionAssetDecimals",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 18
      },
      {
        "name": "customAssetPrice",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "originatorDid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryDid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryRef",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "originatorRef",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "originatorVASPdid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryVASPdid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryVASPname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "transactionBlockchainInfo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "originator",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiary",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "encrypted",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "protocol",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "TRLight"
      },
      {
        "name": "notificationEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "skipBeneficiaryDataValidation",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "travelRuleBehavior",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "originatorProof",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiaryProof",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "pii",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "network",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "onBehalfOfMyself",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "blockchainTransactionDate",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/tx/approve",
    "method": "approveTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Approve transfer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123e4567-e89b-12d3-a456-426614174000"
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
      }
    ]
  },
  {
    "url": "/tx/cancel",
    "method": "cancelTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Cancel transfer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123e4567-e89b-12d3-a456-426614174000"
      },
      {
        "name": "vasp_did",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "reason",
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
    "url": "/tx/update",
    "method": "updateTransferDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Update transfer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123e4567-e89b-12d3-a456-426614174000"
      },
      {
        "name": "notificationEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "txHash",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "destination",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "origin",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiaryDid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryVASPdid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "originatorVASPdid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryVASPname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiary",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiaryProof",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "originatorDid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryRef",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "originatorRef",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "originator",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "originatorProof",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "protocol",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "TRLight"
      },
      {
        "name": "isNonCustodial",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "pii",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "onBehalfOfMyself",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "blockchainTransactionDate",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/tx/confirm",
    "method": "confirmTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Confirm transfer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "123e4567-e89b-12d3-a456-426614174000"
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
    "url": "/tx/notify",
    "method": "notifyTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Notify transfer",
    "parameters": [
      {
        "name": "txHash",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TXHASH"
      },
      {
        "name": "transactionAmount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTIONAMOUNT"
      },
      {
        "name": "transactionAsset",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "transactionAssetDecimals",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 18
      },
      {
        "name": "beneficiaryVASPdid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BENEFICIARYVASPDID"
      },
      {
        "name": "destination",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESTINATION"
      },
      {
        "name": "origin",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customerRef",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "network",
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
    "url": "/tx/reject",
    "method": "transferReject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Reject transfer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123e4567-e89b-12d3-a456-426614174000"
      },
      {
        "name": "reason",
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
    "url": "/tx/notReady",
    "method": "markNotReady",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Mark a transfer as not ready",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123e4567-e89b-12d3-a456-426614174000"
      },
      {
        "name": "reason",
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
    "url": "/tx/accept",
    "method": "acceptTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Accept transfer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123e4567-e89b-12d3-a456-426614174000"
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
    "url": "/tx/decline",
    "method": "declineTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Decline transfer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123e4567-e89b-12d3-a456-426614174000"
      },
      {
        "name": "reason",
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
    "url": "/tx/redirect",
    "method": "redirectTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Redirect transfer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123e4567-e89b-12d3-a456-426614174000"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
      }
    ]
  },
  {
    "url": "/tx/bulk",
    "method": "bulkEditTransfers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Bulk edit transfers",
    "parameters": [
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "originatorVASPdid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryVASPdid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "originAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "destinationAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiaryVASPdidTo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "did:methd:identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/tx/receive",
    "method": "receiveTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Receive transfer",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTIONID"
      },
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS"
      },
      {
        "name": "asset",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "originatorVASPdid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryVASPdid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/tx/updateTR",
    "method": "updatePendingData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Update pending TR data",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTIONID"
      },
      {
        "name": "destinationAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESTINATIONADDRESS"
      },
      {
        "name": "assetType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSETTYPE"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMOUNT"
      },
      {
        "name": "pii",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "originatorVASPdid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "beneficiaryVASPdid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
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
    "url": "/rules/get",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "List rules",
    "parameters": [
      {
        "name": "vaspDid",
        "schema": "string",
        "required": true,
        "description": "vaspDID to get list of transfer rules",
        "example": "did:methd:identifier"
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
    "url": "/rules/set/direction",
    "method": "setDirection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "Set rules",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "did:methd:identifier"
      },
      {
        "name": "ruleSet",
        "schema": "object",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      }
    ]
  },
  {
    "url": "/rules/delete",
    "method": "deleteByIds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "Deletes rules from the provided ids",
    "parameters": [
      {
        "name": "vaspDID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VASPDID"
      },
      {
        "name": "ids",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/jurisdictions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jurisdictions",
    "typeScriptTag": "jurisdictions",
    "description": "List all Jurisdictions",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "description": "Country code in ISO 3166-1 alpha-2 format"
      },
      {
        "name": "fallbackToFatf",
        "schema": "boolean",
        "description": "If this is set to true, it will return FATF rules if no countryCode is found"
      },
      {
        "name": "division",
        "schema": "string",
        "description": "Division in ISO 3166-1 alpha-2 format"
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
      apiTitle="Notabene"
      apiBaseUrl="https://api.notabene.id"
      apiVersion="1.0.0"
      endpoints={84}
      sdkMethods={115}
      schemas={332}
      parameters={344}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notabene/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/notabene/openapi.yaml"
      developerDocumentation="doc.notabene.id/"
    />
  );
}
  