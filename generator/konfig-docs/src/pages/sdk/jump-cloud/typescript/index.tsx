import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function JumpCloudTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="jump-cloud-typescript-sdk"
      metaDescription={`JumpCloud is reimagining the on-prem directory as a cloud-based platform that secures identities, manages devices, and provides safe access to all types of IT resources — on-prem, in the cloud, across Windows, Mac, or Linux.

Twitter: @jumpcloud`}
      company="JumpCloud"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jumpcloud/logo.png"
      companyKebabCase="jump-cloud"
      clientNameCamelCase="jumpCloud"
      homepage="jumpcloud.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jumpcloud/favicon.png"
      contactUrl="https://support.jumpcloud.com/support/s/"
      contactEmail="support@jumpcloud.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jumpcloud/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["identity_and_access_management","security","device_management","ldap_to_the_cloud","user_management"]}
      methods={[
  {
    "url": "/accessrequests",
    "method": "createAccessRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ingresso",
    "typeScriptTag": "ingresso",
    "description": "Create Access Request",
    "parameters": [
      {
        "name": "operationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "additionalAttributes",
        "schema": "object",
        "description": ""
      },
      {
        "name": "applicationIntId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiry",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organizationObjectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "remarks",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestorId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resourceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resourceType",
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
    "url": "/accessrequests/{accessId}",
    "method": "getAccessRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ingresso",
    "typeScriptTag": "ingresso",
    "description": "Get all Access Requests by Access Id",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCESSID"
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
    "url": "/accessrequests/{accessId}",
    "method": "updateAccessRequest",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ingresso",
    "typeScriptTag": "ingresso",
    "description": "Update access request by id",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCESSID"
      },
      {
        "name": "additionalAttributes",
        "schema": "object",
        "description": ""
      },
      {
        "name": "expiry",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organizationObjectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "remarks",
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
    "url": "/accessrequests/{accessId}/revoke",
    "method": "revokeAccessRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ingresso",
    "typeScriptTag": "ingresso",
    "description": "Revoke access request by id",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCESSID"
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
    "url": "/activedirectories",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Active Directory",
    "typeScriptTag": "activeDirectory",
    "description": "List Active Directories",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/activedirectories",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Active Directory",
    "typeScriptTag": "activeDirectory",
    "description": "Create a new Active Directory",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "primaryAgent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useCase",
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
    "url": "/activedirectories/{activedirectory_id}/agents",
    "method": "agentsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Active Directory",
    "typeScriptTag": "activeDirectory",
    "description": "List Active Directory Agents",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/activedirectories/{activedirectory_id}/agents",
    "method": "agentsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Active Directory",
    "typeScriptTag": "activeDirectory",
    "description": "Create a new Active Directory Agent",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "agentType",
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
    "url": "/activedirectories/{activedirectory_id}/agents/{agent_id}",
    "method": "agentsDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Active Directory",
    "typeScriptTag": "activeDirectory",
    "description": "Delete Active Directory Agent",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/activedirectories/{activedirectory_id}/agents/{agent_id}",
    "method": "agentsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Active Directory",
    "typeScriptTag": "activeDirectory",
    "description": "Get Active Directory Agent",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/activedirectories/{activedirectory_id}/associations",
    "method": "activeDirectoryAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of an Active Directory instance",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"active_directory\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/activedirectories/{activedirectory_id}/associations",
    "method": "activeDirectoryAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of an Active Directory instance",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/activedirectories/{activedirectory_id}/usergroups",
    "method": "activeDirectoryTraverseUserGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the User Groups bound to an Active Directory instance",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/activedirectories/{activedirectory_id}/users",
    "method": "activeDirectoryTraverseUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Users bound to an Active Directory instance",
    "parameters": [
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
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
    "url": "/activedirectories/{id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Active Directory",
    "typeScriptTag": "activeDirectory",
    "description": "Delete an Active Directory",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/activedirectories/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Active Directory",
    "typeScriptTag": "activeDirectory",
    "description": "Get an Active Directory",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/activedirectories/{id}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Active Directory",
    "typeScriptTag": "activeDirectory",
    "description": "Update Active Directory",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "primaryAgent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useCase",
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
    "url": "/administrators/{administrator_id}/organizationlinks/{id}",
    "method": "removeByAdministrator",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Administrators",
    "typeScriptTag": "administrators",
    "description": "Remove association between an Administrator and an Organization.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/administrators/{id}/organizationlinks",
    "method": "listByAdministrator",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Administrators",
    "typeScriptTag": "administrators",
    "description": "List the association links between an Administrator and Organizations.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
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
    "url": "/administrators/{id}/organizationlinks",
    "method": "createByAdministrator",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Administrators",
    "typeScriptTag": "administrators",
    "description": "Allow Adminstrator access to an Organization.",
    "parameters": [
      {
        "name": "organization",
        "schema": "string",
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
    "url": "/applemdms",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "List Apple MDMs",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/applemdms/{apple_mdm_id}/csr",
    "method": "csrget",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Get Apple MDM CSR Plist",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/depkey",
    "method": "depkeyget",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Get Apple MDM DEP Public Key",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/devices",
    "method": "deviceslist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "List AppleMDM Devices",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xTotalCount",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/devices/{device_id}",
    "method": "deletedevice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Remove an Apple MDM Device's Enrollment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/devices/{device_id}",
    "method": "getdevice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Details of an AppleMDM Device",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/devices/{device_id}/clearActivationLock",
    "method": "devicesClearActivationLock",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Clears the Activation Lock for a Device",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/devices/{device_id}/erase",
    "method": "deviceserase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Erase Device",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "pin",
        "schema": "string",
        "description": "",
        "example": "123456"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/devices/{device_id}/lock",
    "method": "deviceslock",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Lock Device",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "pin",
        "schema": "string",
        "description": "",
        "example": "123456"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/devices/{device_id}/osUpdateStatus",
    "method": "devicesOsUpdateStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Request the status of an OS update for a device",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/devices/{device_id}/refreshActivationLockInformation",
    "method": "devicesRefreshActivationLockInformation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Refresh activation lock information for a device",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/devices/{device_id}/restart",
    "method": "devicesrestart",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Restart Device",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "kextPaths",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/devices/{device_id}/scheduleOSUpdate",
    "method": "devicesScheduleOsUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Schedule an OS update for a device",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "install_action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTALL_ACTION"
      },
      {
        "name": "max_user_deferrals",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "product_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT_KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/devices/{device_id}/shutdown",
    "method": "devicesshutdown",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Shut Down Device",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/enrollmentprofiles",
    "method": "enrollmentprofileslist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "List Apple MDM Enrollment Profiles",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/enrollmentprofiles/{id}",
    "method": "enrollmentprofilesget",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Get an Apple MDM Enrollment Profile",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{apple_mdm_id}/refreshdepdevices",
    "method": "refreshdepdevices",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Refresh DEP Devices",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Delete an Apple MDM",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applemdms/{id}",
    "method": "put",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Apple MDM",
    "typeScriptTag": "appleMdm",
    "description": "Update an Apple MDM",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "ades",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowMobileUserEnrollment",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "appleCertCreatorAppleID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appleSignedCert",
        "schema": "string",
        "description": ""
      },
      {
        "name": "defaultIosUserEnrollmentDeviceGroupID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "defaultSystemGroupID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dep",
        "schema": "object",
        "description": ""
      },
      {
        "name": "encryptedDepServerToken",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/{application_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Get an Application",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/{application_id}/associations",
    "method": "applicationAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of an Application",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"application\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/{application_id}/associations",
    "method": "applicationAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of an Application",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/applications/{application_id}/import/jobs",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Create an import job",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "allowUserReactivation",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "operations",
        "schema": "array",
        "description": "",
        "default": [
          "users.create",
          "users.update"
        ]
      },
      {
        "name": "queryString",
        "schema": "string",
        "description": "",
        "default": ""
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
    "url": "/applications/{application_id}/import/users",
    "method": "users",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Get a list of users to import from an Application IdM service provider",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "Filter users by a search term",
        "default": ""
      },
      {
        "name": "query",
        "schema": "string",
        "description": "URL query to merge with the service provider request",
        "default": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort users by supported fields",
        "default": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "",
        "default": "asc"
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
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
    "url": "/applications/{application_id}/logo",
    "method": "deleteLogo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Delete application image",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NO_CONTENT"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/{application_id}/logo",
    "method": "postLogo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Save application logo",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "image",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NO_CONTENT"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/{application_id}/usergroups",
    "method": "applicationTraverseUserGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the User Groups bound to an Application",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/applications/{application_id}/users",
    "method": "applicationTraverseUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Users bound to an Application",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/authn/policies",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentication Policies",
    "typeScriptTag": "authenticationPolicies",
    "description": "List Authentication Policies",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "xTotalCount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/authn/policies",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication Policies",
    "typeScriptTag": "authenticationPolicies",
    "description": "Create an Authentication Policy",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "effect",
        "schema": "object",
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
        "name": "targets",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "user_portal"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "This represents an authentication policy.  See the details of each field for valid values and restrictions."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/authn/policies/{id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Authentication Policies",
    "typeScriptTag": "authenticationPolicies",
    "description": "Delete Authentication Policy",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This represents an authentication policy.  See the details of each field for valid values and restrictions."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/authn/policies/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentication Policies",
    "typeScriptTag": "authenticationPolicies",
    "description": "Get an authentication policy",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This represents an authentication policy.  See the details of each field for valid values and restrictions."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/authn/policies/{id}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Authentication Policies",
    "typeScriptTag": "authenticationPolicies",
    "description": "Patch Authentication Policy",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "effect",
        "schema": "object",
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
        "name": "targets",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "user_portal"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This represents an authentication policy.  See the details of each field for valid values and restrictions."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/bulk/user/expires",
    "method": "userExpires",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bulk Job Requests",
    "typeScriptTag": "bulkJobRequests",
    "description": "Bulk Expire Users",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
    "url": "/bulk/user/unlocks",
    "method": "userUnlocks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bulk Job Requests",
    "typeScriptTag": "bulkJobRequests",
    "description": "Bulk Unlock Users",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
    "url": "/bulk/users",
    "method": "usersUpdate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Bulk Job Requests",
    "typeScriptTag": "bulkJobRequests",
    "description": "Bulk Users Update",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
    "url": "/bulk/users",
    "method": "usersCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bulk Job Requests",
    "typeScriptTag": "bulkJobRequests",
    "description": "Bulk Users Create",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "creationSource",
        "schema": "string",
        "description": "Defines the creation-source header for gapps, o365 and workdays requests.\nIf the header isn't sent, the default value is `jumpcloud:bulk`, if you send the header with a malformed value you receive a 400 error.\n",
        "default": "jumpcloud:bulk"
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
    "url": "/bulk/users/{job_id}/results",
    "method": "usersCreateResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bulk Job Requests",
    "typeScriptTag": "bulkJobRequests",
    "description": "List Bulk Users Results",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/bulk/userstates",
    "method": "userStatesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bulk Job Requests",
    "typeScriptTag": "bulkJobRequests",
    "description": "List Scheduled Userstate Change Jobs",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "userid",
        "schema": "string",
        "description": "The systemuser id to filter by."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/bulk/userstates",
    "method": "userStatesCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bulk Job Requests",
    "typeScriptTag": "bulkJobRequests",
    "description": "Create Scheduled Userstate Job",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "activation_email_override",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "send_activation_emails",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "user_ids",
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
    "url": "/bulk/userstates/eventlist/next",
    "method": "userStatesGetNextScheduled",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bulk Job Requests",
    "typeScriptTag": "bulkJobRequests",
    "description": "Get the next scheduled state change for a list of users",
    "parameters": [
      {
        "name": "users",
        "schema": "array",
        "required": true,
        "description": "A list of system user IDs, limited to 100 items."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
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
    "url": "/bulk/userstates/{id}",
    "method": "userStatesDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bulk Job Requests",
    "typeScriptTag": "bulkJobRequests",
    "description": "Delete Scheduled Userstate Job",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/cases/metadata",
    "method": "casesMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get the metadata for cases",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response for retrieving the cases's metdata"
      }
    ]
  },
  {
    "url": "/commandqueue/{workflow_instance_id}",
    "method": "cancelQueuedCommandsByWorkflowInstanceId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Commands",
    "typeScriptTag": "commands",
    "description": "Cancel all queued commands for an organization by workflow instance Id",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/commands/{command_id}/associations",
    "method": "commandAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of a Command",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"command\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/commands/{command_id}/associations",
    "method": "commandAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of a Command",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/commands/{command_id}/systemgroups",
    "method": "commandTraverseSystemGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the System Groups bound to a Command",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/commands/{command_id}/systems",
    "method": "commandTraverseSystem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Systems bound to a Command",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/customemail/templates",
    "method": "getTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Emails",
    "typeScriptTag": "customEmails",
    "description": "List custom email templates",
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
    "url": "/customemails",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Emails",
    "typeScriptTag": "customEmails",
    "description": "Create custom email configuration",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "button",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "header",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nextStepContactInfo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Custom email content created by the admin user to personalize emails sent to their system users."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/customemails/{custom_email_type}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Emails",
    "typeScriptTag": "customEmails",
    "description": "Delete custom email configuration",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/customemails/{custom_email_type}",
    "method": "read",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Emails",
    "typeScriptTag": "customEmails",
    "description": "Get custom email configuration",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Custom email content created by the admin user to personalize emails sent to their system users."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/customemails/{custom_email_type}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Emails",
    "typeScriptTag": "customEmails",
    "description": "Update custom email configuration",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "button",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "header",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nextStepContactInfo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Custom email content created by the admin user to personalize emails sent to their system users."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/devices/settings/defaultpasswordsync",
    "method": "getDefaultPasswordSyncSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Systems Organization Settings",
    "typeScriptTag": "systemsOrganizationSettings",
    "description": "Get the Default Password Sync Setting",
    "parameters": [
      {
        "name": "organizationObjectId",
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
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/devices/settings/defaultpasswordsync",
    "method": "setDefaultPasswordSyncSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Systems Organization Settings",
    "typeScriptTag": "systemsOrganizationSettings",
    "description": "Set the Default Password Sync Setting",
    "parameters": [
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "organizationObjectId",
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
        "statusCode": "204",
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
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/devices/settings/signinwithjumpcloud",
    "method": "getSignInWithJumpCloudSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Systems Organization Settings",
    "typeScriptTag": "systemsOrganizationSettings",
    "description": "Get the Sign In with JumpCloud Settings",
    "parameters": [
      {
        "name": "organizationObjectId",
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
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/devices/settings/signinwithjumpcloud",
    "method": "setSignInWithJumpCloudSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Systems Organization Settings",
    "typeScriptTag": "systemsOrganizationSettings",
    "description": "Set the Sign In with JumpCloud Settings",
    "parameters": [
      {
        "name": "organizationObjectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "settings",
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
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/directories",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Directories",
    "typeScriptTag": "directories",
    "description": "List All Directories",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
    "url": "/duo/accounts",
    "method": "accountList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Duo",
    "typeScriptTag": "duo",
    "description": "List Duo Accounts",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/duo/accounts",
    "method": "accountPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Duo",
    "typeScriptTag": "duo",
    "description": "Create Duo Account",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/duo/accounts/{account_id}/applications",
    "method": "applicationList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Duo",
    "typeScriptTag": "duo",
    "description": "List Duo Applications",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/duo/accounts/{account_id}/applications",
    "method": "applicationPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Duo",
    "typeScriptTag": "duo",
    "description": "Create Duo Application",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "apiHost",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APIHOST"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "secretKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRETKEY"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/duo/accounts/{account_id}/applications/{application_id}",
    "method": "applicationDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Duo",
    "typeScriptTag": "duo",
    "description": "Delete a Duo Application",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/duo/accounts/{account_id}/applications/{application_id}",
    "method": "applicationGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Duo",
    "typeScriptTag": "duo",
    "description": "Get a Duo application",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/duo/accounts/{account_id}/applications/{application_id}",
    "method": "applicationUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Duo",
    "typeScriptTag": "duo",
    "description": "Update Duo Application",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "apiHost",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APIHOST"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "secretKey",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/duo/accounts/{id}",
    "method": "accountDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Duo",
    "typeScriptTag": "duo",
    "description": "Delete a Duo Account",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/duo/accounts/{id}",
    "method": "accountGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Duo",
    "typeScriptTag": "duo",
    "description": "Get a Duo Acount",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/featureTrials/{feature_code}",
    "method": "getFeatureTrials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FeatureTrials",
    "typeScriptTag": "featureTrials",
    "description": "Check current feature trial usage for a specific feature",
    "parameters": [
      {
        "name": "featureCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FEATURE_CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Feature usage data for a feature"
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
    "url": "/google-emm/devices/{deviceId}",
    "method": "getDevice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Get device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/google-emm/devices/{deviceId}/erase-device",
    "method": "eraseDevice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Erase the Android Device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/google-emm/devices/{deviceId}/lock",
    "method": "lockDevice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Lock device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/google-emm/devices/{deviceId}/policy_results",
    "method": "getDeviceAndroidPolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Get the policy JSON of a device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/google-emm/devices/{deviceId}/reboot",
    "method": "rebootDevice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Reboot device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/google-emm/devices/{deviceId}/resetpassword",
    "method": "resetPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Reset Password of a device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "flags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "newPassword",
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
    "url": "/google-emm/enrollment-tokens",
    "method": "createEnrollmentToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Create an enrollment token",
    "parameters": [
      {
        "name": "allowPersonalUsage",
        "schema": "string",
        "description": "",
        "default": "PERSONAL_USAGE_ALLOWED"
      },
      {
        "name": "createdWhere",
        "schema": "string",
        "description": "",
        "default": "API"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "duration",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enrollmentType",
        "schema": "string",
        "description": "",
        "default": "WORK_PROFILE"
      },
      {
        "name": "enterpriseObjectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "oneTimeOnly",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "provisioningExtras",
        "schema": "object",
        "description": ""
      },
      {
        "name": "userObjectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zeroTouch",
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
    "url": "/google-emm/enterprises",
    "method": "listEnterprises",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "List Google Enterprises",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "The number of records to return at once. Limited to 100.",
        "default": "100"
      },
      {
        "name": "skip",
        "schema": "string",
        "required": false,
        "description": "The offset into the records to return.",
        "default": "0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/google-emm/enterprises",
    "method": "createEnterprise",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Create a Google Enterprise",
    "parameters": [
      {
        "name": "enrollmentToken",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signupUrlName",
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
    "url": "/google-emm/enterprises/{enterpriseId}",
    "method": "deleteEnterprise",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Delete a Google Enterprise",
    "parameters": [
      {
        "name": "enterpriseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTERPRISEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/google-emm/enterprises/{enterpriseId}",
    "method": "patchEnterprise",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Update a Google Enterprise",
    "parameters": [
      {
        "name": "enterpriseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTERPRISEID"
      },
      {
        "name": "allowDeviceEnrollment",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "deviceGroupId",
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
    "url": "/google-emm/enterprises/{enterpriseId}/connection-status",
    "method": "getConnectionStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Test connection with Google",
    "parameters": [
      {
        "name": "enterpriseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTERPRISEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/google-emm/enterprises/{enterpriseId}/enrollment-tokens/{tokenId}",
    "method": "deleteEnrollmentToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Deletes an enrollment token for a given enterprise and token id",
    "parameters": [
      {
        "name": "enterpriseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTERPRISEID"
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKENID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/google-emm/enterprises/{enterpriseObjectId}/devices",
    "method": "listDevices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "List devices",
    "parameters": [
      {
        "name": "enterpriseObjectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTERPRISEOBJECTID"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "The number of records to return at once. Limited to 100.",
        "default": "100"
      },
      {
        "name": "skip",
        "schema": "string",
        "required": false,
        "description": "The offset into the records to return.",
        "default": "0"
      },
      {
        "name": "filter",
        "schema": "array",
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
    "url": "/google-emm/enterprises/{enterpriseObjectId}/enrollment-tokens",
    "method": "listEnrollmentTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "List enrollment tokens",
    "parameters": [
      {
        "name": "enterpriseObjectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTERPRISEOBJECTID"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "The number of records to return at once. Limited to 100.",
        "default": "100"
      },
      {
        "name": "skip",
        "schema": "string",
        "required": false,
        "description": "The offset into the records to return.",
        "default": "0"
      },
      {
        "name": "filter",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Use space separated sort parameters to sort the collection. Default sort is ascending. Prefix with - to sort descending."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/google-emm/enterprises/{enterpriseObjectId}/enrollment-tokens",
    "method": "createEnterprisesEnrollmentToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Create an enrollment token for a given enterprise",
    "parameters": [
      {
        "name": "enterpriseObjectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTERPRISEOBJECTID"
      },
      {
        "name": "allowPersonalUsage",
        "schema": "string",
        "description": "",
        "default": "PERSONAL_USAGE_ALLOWED"
      },
      {
        "name": "createdWhere",
        "schema": "string",
        "description": "",
        "default": "API"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "duration",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enrollmentType",
        "schema": "string",
        "description": "",
        "default": "WORK_PROFILE"
      },
      {
        "name": "oneTimeOnly",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "provisioningExtras",
        "schema": "object",
        "description": ""
      },
      {
        "name": "userObjectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zeroTouch",
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
    "url": "/google-emm/signup-urls",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Get a Signup URL to enroll Google enterprise",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/google-emm/web-tokens",
    "method": "createWebToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Google EMM",
    "typeScriptTag": "googleEmm",
    "description": "Get a web token to render Google Play iFrame",
    "parameters": [
      {
        "name": "enterpriseObjectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "iframeFeature",
        "schema": "string",
        "description": "",
        "default": "SOFTWARE_MANAGEMENT"
      },
      {
        "name": "parentFrameUrl",
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
    "url": "/groups",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "List All Groups",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "xUnfilteredTotalCount",
        "schema": "integer",
        "description": "If provided in the request with any non-empty value, this header will be returned on the response populated with the total count of objects without filters taken into account"
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
    "url": "/gsuites/{gsuite_id}/associations",
    "method": "gSuiteAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of a G Suite instance",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"g_suite\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/gsuites/{gsuite_id}/associations",
    "method": "gSuiteAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of a G Suite instance",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/gsuites/{gsuite_id}/domains",
    "method": "configuredDomainsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "G Suite",
    "typeScriptTag": "gSuite",
    "description": "List all domains configured for the Google Workspace integration instance",
    "parameters": [
      {
        "name": "gsuiteId",
        "schema": "string",
        "required": true,
        "description": "Id for the specific Google Workspace directory sync integration instance..",
        "example": "GSUITE_ID"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "The number of records to return at once. Limited to 100.",
        "default": "100"
      },
      {
        "name": "skip",
        "schema": "string",
        "required": false,
        "description": "The offset into the records to return.",
        "default": "0"
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/gsuites/{gsuite_id}/domains",
    "method": "addDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "G Suite",
    "typeScriptTag": "gSuite",
    "description": "Add a domain to a Google Workspace integration instance",
    "parameters": [
      {
        "name": "gsuiteId",
        "schema": "string",
        "required": true,
        "description": "Id for the specific Google Workspace directory sync integration instance.",
        "example": "GSUITE_ID"
      },
      {
        "name": "domain",
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
        "statusCode": "201",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/gsuites/{gsuite_id}/domains/{domainId}",
    "method": "deleteDomain",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "G Suite",
    "typeScriptTag": "gSuite",
    "description": "Delete a domain from a Google Workspace integration instance",
    "parameters": [
      {
        "name": "gsuiteId",
        "schema": "string",
        "required": true,
        "description": "Id for the specific Google Workspace directory sync integration instance.",
        "example": "GSUITE_ID"
      },
      {
        "name": "domainId",
        "schema": "string",
        "required": true,
        "description": "Id for the domain.",
        "example": "DOMAINID"
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/gsuites/{gsuite_id}/import/jumpcloudusers",
    "method": "listImportJumpcloudUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "G Suite",
    "typeScriptTag": "gSuite",
    "description": "Get a list of users in Jumpcloud format to import from a Google Workspace account.",
    "parameters": [
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "Google Directory API maximum number of results per page. See https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Google Directory API sort field parameter. See https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list."
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Google Directory API token used to access the next page of results. See https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list."
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Google Directory API search parameter. See https://developers.google.com/admin-sdk/directory/v1/guides/search-users."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Google Directory API sort direction parameter. See https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/gsuites/{gsuite_id}/import/users",
    "method": "listImportUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "G Suite",
    "typeScriptTag": "gSuite",
    "description": "Get a list of users to import from a G Suite instance",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "maxResults",
        "schema": "integer",
        "description": "Google Directory API maximum number of results per page. See https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Google Directory API sort field parameter. See https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list."
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "Google Directory API token used to access the next page of results. See https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list."
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Google Directory API search parameter. See https://developers.google.com/admin-sdk/directory/v1/guides/search-users."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Google Directory API sort direction parameter. See https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/gsuites/{gsuite_id}/translationrules",
    "method": "gSuiteList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "G Suite",
    "typeScriptTag": "gSuite",
    "description": "List all the G Suite Translation Rules",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
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
    "url": "/gsuites/{gsuite_id}/translationrules",
    "method": "gSuitePost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "G Suite",
    "typeScriptTag": "gSuite",
    "description": "Create a new G Suite Translation Rule",
    "parameters": [
      {
        "name": "builtIn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "",
        "default": "export"
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
    "url": "/gsuites/{gsuite_id}/translationrules/{id}",
    "method": "gSuiteDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "G Suite",
    "typeScriptTag": "gSuite",
    "description": "Deletes a G Suite translation rule",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/gsuites/{gsuite_id}/translationrules/{id}",
    "method": "gSuiteGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "G Suite",
    "typeScriptTag": "gSuite",
    "description": "Gets a specific G Suite translation rule",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/gsuites/{gsuite_id}/usergroups",
    "method": "gSuiteTraverseUserGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the User Groups bound to a G Suite instance",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/gsuites/{gsuite_id}/users",
    "method": "gSuiteTraverseUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Users bound to a G Suite instance",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/gsuites/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "G Suite",
    "typeScriptTag": "gSuite",
    "description": "Get G Suite",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/gsuites/{id}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "G Suite",
    "typeScriptTag": "gSuite",
    "description": "Update existing G Suite",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "defaultDomain",
        "schema": "object",
        "description": ""
      },
      {
        "name": "groupsEnabled",
        "schema": "boolean",
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
        "name": "userLockoutAction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userPasswordExpirationAction",
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
    "url": "/identity-provider/policies/{idp_routing_policy_id}/associations",
    "method": "idpRoutingPolicyAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of a Routing Policy",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"idp_routing_policy\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/identity-provider/policies/{idp_routing_policy_id}/associations",
    "method": "idpRoutingPolicyAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of a routing policy",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/identity-provider/policies/{idp_routing_policy_id}/associations/usergroups",
    "method": "idpRoutingPolicyTraverseUserGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the User Groups bound to a Routing Policy",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/identity-provider/policies/{idp_routing_policy_id}/associations/users",
    "method": "idpRoutingPolicyTraverseUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Users bound to a Routing Policy",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/integrations/autotask/{UUID}",
    "method": "deleteConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Delete Autotask Integration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/integrations/autotask/{UUID}",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Autotask Integration Configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Autotask integration configuration details"
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
    "url": "/integrations/autotask/{UUID}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Update Autotask Integration configuration",
    "parameters": [
      {
        "name": "secret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Autotask integration configuration details"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/integrations/autotask/{UUID}/companies",
    "method": "retrieveCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Autotask Companies",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response for retrieving Autotask companies"
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
    "url": "/integrations/autotask/{UUID}/companytypes",
    "method": "retrieveCompanyTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Autotask Company Types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response for retrieving Autotask company types"
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
    "url": "/integrations/autotask/{UUID}/contracts",
    "method": "retrieveContracts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Autotask Contracts",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
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
    "url": "/integrations/autotask/{UUID}/contracts/fields",
    "method": "retrieveContractsFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Autotask Contract Fields",
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
    "url": "/integrations/autotask/{UUID}/contracts/services",
    "method": "retrieveServices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Autotask Contract Services",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
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
    "url": "/integrations/autotask/{UUID}/mappings",
    "method": "retrieveMappings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Autotask mappings",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
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
    "url": "/integrations/autotask/{UUID}/mappings",
    "method": "patchMappings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Create, edit, and/or delete Autotask Mappings",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Autotask mapping GET response"
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
    "url": "/integrations/autotask/{UUID}/settings",
    "method": "retrieveSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Autotask Integration settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Autotask integration settings"
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
    "url": "/integrations/autotask/{UUID}/settings",
    "method": "patchSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Create, edit, and/or delete Autotask Integration settings",
    "parameters": [
      {
        "name": "automaticTicketing",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "companyTypeIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Autotask integration settings"
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
    "url": "/integrations/connectwise/{UUID}",
    "method": "deleteConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Delete ConnectWise Integration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/integrations/connectwise/{UUID}",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve ConnectWise Integration Configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "ConnectWise integration configuration details"
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
    "url": "/integrations/connectwise/{UUID}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Update ConnectWise Integration configuration",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privateKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "publicKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ConnectWise integration configuration details"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/integrations/connectwise/{UUID}/agreements",
    "method": "retrieveAgreements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve ConnectWise Agreements",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
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
    "url": "/integrations/connectwise/{UUID}/agreements/{agreement_ID}/additions",
    "method": "retrieveAdditions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve ConnectWise Additions",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
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
    "url": "/integrations/connectwise/{UUID}/companies",
    "method": "retrieveCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve ConnectWise Companies",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response for retrieving ConnectWise companies"
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
    "url": "/integrations/connectwise/{UUID}/companytypes",
    "method": "retrieveCompanyTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve ConnectWise Company Types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response for retrieving ConnectWise company types"
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
    "url": "/integrations/connectwise/{UUID}/mappings",
    "method": "retrieveMappings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve ConnectWise mappings",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
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
    "url": "/integrations/connectwise/{UUID}/mappings",
    "method": "patchMappings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Create, edit, and/or delete ConnectWise Mappings",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request object for creating ConnectWise mappings"
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
    "url": "/integrations/connectwise/{UUID}/settings",
    "method": "retrieveSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve ConnectWise Integration settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "ConnectWise integration settings"
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
    "url": "/integrations/connectwise/{UUID}/settings",
    "method": "patchSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Create, edit, and/or delete ConnectWise Integration settings",
    "parameters": [
      {
        "name": "automaticTicketing",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "companyTypeIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ConnectWise integration settings"
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
    "url": "/integrations/syncro/{UUID}",
    "method": "deleteConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Delete Syncro Integration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/integrations/syncro/{UUID}",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Syncro Integration Configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Syncro integration configuration details"
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
    "url": "/integrations/syncro/{UUID}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Update Syncro Integration configuration",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subdomain",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Syncro integration configuration details"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/integrations/syncro/{UUID}/billing_mapping_configuration_options",
    "method": "retrieveBillingMappingConfigurationOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Syncro billing mappings dependencies",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response for retrieving Syncro billing mapping configuration options"
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
    "url": "/integrations/syncro/{UUID}/companies",
    "method": "retrieveCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Syncro Companies",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response for retrieving Syncro companies"
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
    "url": "/integrations/syncro/{UUID}/mappings",
    "method": "retrieveMappings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Syncro mappings",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
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
    "url": "/integrations/syncro/{UUID}/mappings",
    "method": "patchMappings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Create, edit, and/or delete Syncro Mappings",
    "parameters": [
      {
        "name": "data",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request object for creating Syncro mappings"
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
    "url": "/integrations/syncro/{UUID}/settings",
    "method": "retrieveSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Syncro Integration settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Syncro integration settings"
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
    "url": "/integrations/syncro/{UUID}/settings",
    "method": "patchSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Create, edit, and/or delete Syncro Integration settings",
    "parameters": [
      {
        "name": "automaticTicketing",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Syncro integration settings"
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
    "url": "/integrations/{integration_type}/{UUID}/errors",
    "method": "retrieveSyncErrors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Recent Integration Sync Errors",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response for retrieving integrations sync errors"
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
    "url": "/iplists",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IP Lists",
    "typeScriptTag": "ipLists",
    "description": "List IP Lists",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "xTotalCount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/iplists",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IP Lists",
    "typeScriptTag": "ipLists",
    "description": "Create IP List",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ips",
        "schema": "array",
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
        "statusCode": "201",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/iplists/{id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IP Lists",
    "typeScriptTag": "ipLists",
    "description": "Delete an IP list",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/iplists/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IP Lists",
    "typeScriptTag": "ipLists",
    "description": "Get an IP list",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/iplists/{id}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "IP Lists",
    "typeScriptTag": "ipLists",
    "description": "Update an IP list",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ips",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/iplists/{id}",
    "method": "put",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "IP Lists",
    "typeScriptTag": "ipLists",
    "description": "Replace an IP list",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ips",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/ldapservers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LDAP Servers",
    "typeScriptTag": "ldapServers",
    "description": "List LDAP Servers",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ldapservers/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LDAP Servers",
    "typeScriptTag": "ldapServers",
    "description": "Get LDAP Server",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ldapservers/{id}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LDAP Servers",
    "typeScriptTag": "ldapServers",
    "description": "Update existing LDAP server",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userLockoutAction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userPasswordExpirationAction",
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
      }
    ]
  },
  {
    "url": "/ldapservers/{ldapserver_id}/associations",
    "method": "ldapServerAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of a LDAP Server",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"ldap_server\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ldapservers/{ldapserver_id}/associations",
    "method": "ldapServerAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of a LDAP Server",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/ldapservers/{ldapserver_id}/sambadomains",
    "method": "sambaDomainsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Samba Domains",
    "typeScriptTag": "sambaDomains",
    "description": "List Samba Domains",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
    "url": "/ldapservers/{ldapserver_id}/sambadomains",
    "method": "sambaDomainsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Samba Domains",
    "typeScriptTag": "sambaDomains",
    "description": "Create Samba Domain",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "name": "sid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SID"
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
    "url": "/ldapservers/{ldapserver_id}/sambadomains/{id}",
    "method": "sambaDomainsDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Samba Domains",
    "typeScriptTag": "sambaDomains",
    "description": "Delete Samba Domain",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
    "url": "/ldapservers/{ldapserver_id}/sambadomains/{id}",
    "method": "sambaDomainsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Samba Domains",
    "typeScriptTag": "sambaDomains",
    "description": "Get Samba Domain",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ldapservers/{ldapserver_id}/sambadomains/{id}",
    "method": "sambaDomainsPut",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Samba Domains",
    "typeScriptTag": "sambaDomains",
    "description": "Update Samba Domain",
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
        "name": "sid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ldapservers/{ldapserver_id}/usergroups",
    "method": "ldapServerTraverseUserGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the User Groups bound to a LDAP Server",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/ldapservers/{ldapserver_id}/users",
    "method": "ldapServerTraverseUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Users bound to a LDAP Server",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/logos/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Logos",
    "typeScriptTag": "logos",
    "description": "Get the logo associated with the specified id",
    "parameters": [],
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/microsoft-mdm/configuration-files",
    "method": "downloadConfigFiles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Microsoft MDM",
    "typeScriptTag": "microsoftMdm",
    "description": "This endpoint provides a zipped configuration file intended for use with Microsoft Configuration Designer to create a Provisioning Package (https://docs.jumpcloud.com/api/2.0/index.html for bulk MDM enrollment.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/office365s/{office365_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Office 365",
    "typeScriptTag": "office365",
    "description": "Get Office 365 instance",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/office365s/{office365_id}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Office 365",
    "typeScriptTag": "office365",
    "description": "Update existing Office 365 instance.",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "defaultDomain",
        "schema": "object",
        "description": ""
      },
      {
        "name": "groupsEnabled",
        "schema": "boolean",
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
        "name": "userLockoutAction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userPasswordExpirationAction",
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
    "url": "/office365s/{office365_id}/associations",
    "method": "office365AssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of an Office 365 instance",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"office_365\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/office365s/{office365_id}/associations",
    "method": "office365AssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of an Office 365 instance",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/office365s/{office365_id}/domains",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Office 365",
    "typeScriptTag": "office365",
    "description": "List all domains configured for an Office 365 instance",
    "parameters": [
      {
        "name": "office365Id",
        "schema": "string",
        "required": true,
        "description": "Id for the specific M365/Azure AD directory sync integration instance.",
        "example": "OFFICE365_ID"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "The number of records to return at once. Limited to 100.",
        "default": "100"
      },
      {
        "name": "skip",
        "schema": "string",
        "required": false,
        "description": "The offset into the records to return.",
        "default": "0"
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/office365s/{office365_id}/domains",
    "method": "insert",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Office 365",
    "typeScriptTag": "office365",
    "description": "Add a domain to an Office 365 instance",
    "parameters": [
      {
        "name": "office365Id",
        "schema": "string",
        "required": true,
        "description": "Id for the specific M365/Azure AD directory sync integration instance.",
        "example": "OFFICE365_ID"
      },
      {
        "name": "domain",
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
        "statusCode": "201",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/office365s/{office365_id}/domains/{domain_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Office 365",
    "typeScriptTag": "office365",
    "description": "Delete a domain from an Office 365 instance",
    "parameters": [
      {
        "name": "office365Id",
        "schema": "string",
        "required": true,
        "description": "Id for the specific M365/Azure AD directory sync integration instance.",
        "example": "OFFICE365_ID"
      },
      {
        "name": "domainId",
        "schema": "string",
        "required": true,
        "description": "ObjectID of the domain to be deleted.",
        "example": "DOMAIN_ID"
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/office365s/{office365_id}/import/users",
    "method": "listImportUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Office 365",
    "typeScriptTag": "office365",
    "description": "Get a list of users to import from an Office 365 instance",
    "parameters": [
      {
        "name": "consistencyLevel",
        "schema": "string",
        "description": "Defines the consistency header for O365 requests. See https://docs.microsoft.com/en-us/graph/api/user-list?view=graph-rest-1.0&tabs=http#request-headers"
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Office 365 API maximum number of results per page. See https://docs.microsoft.com/en-us/graph/paging."
      },
      {
        "name": "skipToken",
        "schema": "string",
        "description": "Office 365 API token used to access the next page of results. See https://docs.microsoft.com/en-us/graph/paging."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "Office 365 API filter parameter. See https://docs.microsoft.com/en-us/graph/api/user-list?view=graph-rest-1.0&tabs=http#optional-query-parameters."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Office 365 API search parameter. See https://docs.microsoft.com/en-us/graph/api/user-list?view=graph-rest-1.0&tabs=http#optional-query-parameters."
      },
      {
        "name": "orderby",
        "schema": "string",
        "description": "Office 365 API orderby parameter. See https://docs.microsoft.com/en-us/graph/api/user-list?view=graph-rest-1.0&tabs=http#optional-query-parameters."
      },
      {
        "name": "count",
        "schema": "boolean",
        "description": "Office 365 API count parameter. See https://docs.microsoft.com/en-us/graph/api/user-list?view=graph-rest-1.0&tabs=http#optional-query-parameters."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/office365s/{office365_id}/translationrules",
    "method": "office365List",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Office 365",
    "typeScriptTag": "office365",
    "description": "List all the Office 365 Translation Rules",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
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
    "url": "/office365s/{office365_id}/translationrules",
    "method": "office365Post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Office 365",
    "typeScriptTag": "office365",
    "description": "Create a new Office 365 Translation Rule",
    "parameters": [
      {
        "name": "builtIn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "",
        "default": "export"
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
      }
    ]
  },
  {
    "url": "/office365s/{office365_id}/translationrules/{id}",
    "method": "office365Delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Office 365",
    "typeScriptTag": "office365",
    "description": "Deletes a Office 365 translation rule",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/office365s/{office365_id}/translationrules/{id}",
    "method": "office365Get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Office 365",
    "typeScriptTag": "office365",
    "description": "Gets a specific Office 365 translation rule",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/office365s/{office365_id}/usergroups",
    "method": "office365TraverseUserGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the User Groups bound to an Office 365 instance",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/office365s/{office365_id}/users",
    "method": "office365TraverseUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Users bound to an Office 365 instance",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/organizations/cases",
    "method": "orgListCases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Get all cases (Support/Feature requests) for organization",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response for retrieving the cases (support/feature requests)"
      }
    ]
  },
  {
    "url": "/organizations/{id}/administratorlinks",
    "method": "listByOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Administrators",
    "typeScriptTag": "administrators",
    "description": "List the association links between an Organization and Administrators.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
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
    "url": "/passwordmanager/devices",
    "method": "listDevices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Password Manager",
    "typeScriptTag": "passwordManager",
    "description": "List Devices",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "filter",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/passwordmanager/devices/{UUID}",
    "method": "getDevice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Password Manager",
    "typeScriptTag": "passwordManager",
    "description": "Get Device",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
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
    "url": "/policies",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policies",
    "typeScriptTag": "policies",
    "description": "Lists all the Policies",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/policies",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Policies",
    "typeScriptTag": "policies",
    "description": "Create a new Policy",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "template",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "values",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An instance of a policy template."
      }
    ]
  },
  {
    "url": "/policies/{id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Policies",
    "typeScriptTag": "policies",
    "description": "Deletes a Policy",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/policies/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policies",
    "typeScriptTag": "policies",
    "description": "Gets a specific Policy.",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An instance of a policy template."
      }
    ]
  },
  {
    "url": "/policies/{id}",
    "method": "put",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Policies",
    "typeScriptTag": "policies",
    "description": "Update an existing Policy",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "values",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An instance of a policy template."
      }
    ]
  },
  {
    "url": "/policies/{policy_id}/associations",
    "method": "policyAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of a Policy",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"policy\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/policies/{policy_id}/associations",
    "method": "policyAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of a Policy",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/policies/{policy_id}/memberof",
    "method": "policyMemberOf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the parent Groups of a Policy",
    "parameters": [
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Current date header for the System Context API"
      },
      {
        "name": "authorization",
        "schema": "string",
        "description": "Authorization header for the System Context API"
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/policies/{policy_id}/policyresults",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policies",
    "typeScriptTag": "policies",
    "description": "Lists all the policy results of a policy.",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
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
    "url": "/policies/{policy_id}/policystatuses",
    "method": "policiesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policies",
    "typeScriptTag": "policies",
    "description": "Lists the latest policy results of a policy.",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/policies/{policy_id}/systemgroups",
    "method": "policyTraverseSystemGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the System Groups bound to a Policy",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/policies/{policy_id}/systems",
    "method": "policyTraverseSystem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Systems bound to a Policy",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/policygroups",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy Groups",
    "typeScriptTag": "policyGroups",
    "description": "List all Policy Groups",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
    "url": "/policygroups",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Policy Groups",
    "typeScriptTag": "policyGroups",
    "description": "Create a new Policy Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
    "url": "/policygroups/{group_id}/associations",
    "method": "policyGroupAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of a Policy Group.",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"policy_group\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/policygroups/{group_id}/associations",
    "method": "policyGroupAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of a Policy Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/policygroups/{group_id}/members",
    "method": "policyGroupMembersList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the members of a Policy Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/policygroups/{group_id}/members",
    "method": "policyGroupMembersPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the members of a Policy Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/policygroups/{group_id}/membership",
    "method": "policyGroupMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Policy Group's membership",
    "parameters": [
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/policygroups/{group_id}/systemgroups",
    "method": "policyGroupTraverseSystemGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the System Groups bound to Policy Groups",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/policygroups/{group_id}/systems",
    "method": "policyGroupTraverseSystem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Systems bound to a Policy Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/policygroups/{id}",
    "method": "deleteGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Policy Groups",
    "typeScriptTag": "policyGroups",
    "description": "Delete a Policy Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/policygroups/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policy Groups",
    "typeScriptTag": "policyGroups",
    "description": "View an individual Policy Group details",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/policygroups/{id}",
    "method": "updatePolicyGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Policy Groups",
    "typeScriptTag": "policyGroups",
    "description": "Update a Policy Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/policyresults",
    "method": "listAllPolicyResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policies",
    "typeScriptTag": "policies",
    "description": "Lists all of the policy results for an organization.",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
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
    "url": "/policyresults/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policies",
    "typeScriptTag": "policies",
    "description": "Get a specific Policy Result.",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/policytemplates",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policytemplates",
    "typeScriptTag": "policytemplates",
    "description": "Lists all of the Policy Templates",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/policytemplates/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Policytemplates",
    "typeScriptTag": "policytemplates",
    "description": "Get a specific Policy Template",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The shallow information about a Policy Template."
      }
    ]
  },
  {
    "url": "/providers/{provider_id}",
    "method": "getProvider",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Provider",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
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
    "url": "/providers/{provider_id}/administrators",
    "method": "listAdministrators",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "List Provider Administrators",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "sortIgnoreCase",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection, ignoring case.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
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
    "url": "/providers/{provider_id}/administrators",
    "method": "postAdmins",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Create a new Provider Administrator",
    "parameters": [
      {
        "name": "apiKeyAllowed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "bindNoOrgs",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "enableMultiFactor",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "firstname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "roleName",
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
    "url": "/providers/{provider_id}/administrators/{id}",
    "method": "removeAdministrator",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Delete Provider Administrator",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/providers/{provider_id}/billing/contract",
    "method": "getContract",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve contract for a Provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDER_ID"
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/providers/{provider_id}/billing/details",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve billing details for a Provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDER_ID"
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/providers/{provider_id}/cases",
    "method": "providerListCase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get all cases (Support/Feature requests) for provider",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response for retrieving the cases (support/feature requests)"
      }
    ]
  },
  {
    "url": "/providers/{provider_id}/configuredpolicytemplates",
    "method": "listConfiguredPolicyTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "List a provider's configured policy templates.",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
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
    "url": "/providers/{provider_id}/configuredpolicytemplates/{id}",
    "method": "getConfiguredPolicyTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve a configured policy template by id.",
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
    "url": "/providers/{provider_id}/integrations",
    "method": "retrieveIntegrations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Retrieve Integrations for Provider",
    "parameters": [
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response for retrieving integrations."
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
    "url": "/providers/{provider_id}/integrations/autotask",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Creates a new Autotask integration for the provider",
    "parameters": [
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/providers/{provider_id}/integrations/autotask/alerts/configuration",
    "method": "retrieveAllAlertConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get all Autotask ticketing alert configurations for a provider",
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
    "url": "/providers/{provider_id}/integrations/autotask/alerts/configuration/options",
    "method": "retrieveAllAlertConfigurationOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get all Autotask ticketing alert configuration options for a provider",
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
    "url": "/providers/{provider_id}/integrations/autotask/alerts/{alert_UUID}/configuration",
    "method": "updateAlertConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Update an Autotask ticketing alert's configuration",
    "parameters": [
      {
        "name": "destination",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESTINATION"
      },
      {
        "name": "dueDays",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "priority",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "queue",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "resource",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shouldCreateTickets",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "source",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An AutotaskTicketingAlertConfiguration object requires a queueId if the destination is queue. If the destination is resource, resource.id and resource.role.id are required."
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
    "url": "/providers/{provider_id}/integrations/connectwise",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Creates a new ConnectWise integration for the provider",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "privateKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIVATEKEY"
      },
      {
        "name": "publicKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PUBLICKEY"
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
        "statusCode": "201",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/providers/{provider_id}/integrations/connectwise/alerts/configuration",
    "method": "retrieveAllAlertConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get all ConnectWise ticketing alert configurations for a provider",
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
    "url": "/providers/{provider_id}/integrations/connectwise/alerts/configuration/options",
    "method": "retrieveAllAlertConfigurationOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get all ConnectWise ticketing alert configuration options for a provider",
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
    "url": "/providers/{provider_id}/integrations/connectwise/alerts/{alert_UUID}/configuration",
    "method": "updateAlertConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Update a ConnectWise ticketing alert's configuration",
    "parameters": [
      {
        "name": "dueDays",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shouldCreateTickets",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "source",
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
    "url": "/providers/{provider_id}/integrations/syncro",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Creates a new Syncro integration for the provider",
    "parameters": [
      {
        "name": "apiToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APITOKEN"
      },
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBDOMAIN"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/providers/{provider_id}/integrations/syncro/alerts/configuration",
    "method": "retrieveAllAlertConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get all Syncro ticketing alert configurations for a provider",
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
    "url": "/providers/{provider_id}/integrations/syncro/alerts/configuration/options",
    "method": "retrieveAllAlertConfigurationOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get all Syncro ticketing alert configuration options for a provider",
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
    "url": "/providers/{provider_id}/integrations/syncro/alerts/{alert_UUID}/configuration",
    "method": "updateAlertConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Update a Syncro ticketing alert's configuration",
    "parameters": [
      {
        "name": "dueDays",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "problemType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROBLEMTYPE"
      },
      {
        "name": "shouldCreateTickets",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A SyncroTicketingAlertConfiguration object"
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
    "url": "/providers/{provider_id}/integrations/ticketing/alerts",
    "method": "retrieveAlerts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get all ticketing alerts available for a provider's ticketing integration.",
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
    "url": "/providers/{provider_id}/invoices",
    "method": "retrieveInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "List a provider's invoices.",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response for retrieve provider invoices"
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
    "url": "/providers/{provider_id}/invoices/{ID}",
    "method": "retrieveInvoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Download a provider's invoice.",
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
    "url": "/providers/{provider_id}/organizations",
    "method": "listOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "List Provider Organizations",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "sortIgnoreCase",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection, ignoring case.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
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
    "url": "/providers/{provider_id}/organizations",
    "method": "createOrg",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Create Provider Organization",
    "parameters": [
      {
        "name": "maxSystemUsers",
        "schema": "integer",
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
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
    "url": "/providers/{provider_id}/organizations/{id}",
    "method": "updateOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Update Provider Organization",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxSystemUsers",
        "schema": "integer",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/providers/{provider_id}/policygrouptemplates",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "List a provider's policy group templates.",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
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
    "url": "/providers/{provider_id}/policygrouptemplates/{id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Deletes policy group template.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "NO_CONTENT"
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
    "url": "/providers/{provider_id}/policygrouptemplates/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Gets a provider's policy group template.",
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
    "url": "/providers/{provider_id}/policygrouptemplates/{id}/members",
    "method": "listMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Gets the list of members from a policy group template.",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
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
    "url": "/pushendpoints/verifications/{verificationId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Push Verification",
    "typeScriptTag": "pushVerification",
    "description": "Get Push Verification status",
    "parameters": [
      {
        "name": "verificationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERIFICATIONID"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/queuedcommand/workflows",
    "method": "getQueuedCommandsByWorkflow",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commands",
    "typeScriptTag": "commands",
    "description": "Fetch the queued Commands for an Organization",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "description": "The search string to query records",
        "default": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of queued commands"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/radiusservers/{radiusserver_id}/associations",
    "method": "radiusServerAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of a RADIUS  Server",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"radius_server\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/radiusservers/{radiusserver_id}/associations",
    "method": "radiusServerAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of a RADIUS Server",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/radiusservers/{radiusserver_id}/usergroups",
    "method": "radiusServerTraverseUserGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the User Groups bound to a RADIUS  Server",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/radiusservers/{radiusserver_id}/users",
    "method": "radiusServerTraverseUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Users bound to a RADIUS  Server",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/softwareapps",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Software Apps",
    "typeScriptTag": "softwareApps",
    "description": "Get all configured Software Applications.",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
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
    "url": "/softwareapps",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Software Apps",
    "typeScriptTag": "softwareApps",
    "description": "Create a Software Application that will be managed by JumpCloud.",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "array",
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
    "url": "/softwareapps/validate",
    "method": "validateApplicationInstallPackage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Software Apps",
    "typeScriptTag": "softwareApps",
    "description": "Validate Installation Packages",
    "parameters": [
      {
        "name": "url",
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
    "url": "/softwareapps/{id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Software Apps",
    "typeScriptTag": "softwareApps",
    "description": "Delete a configured Software Application",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/softwareapps/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Software Apps",
    "typeScriptTag": "softwareApps",
    "description": "Retrieve a configured Software Application.",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/softwareapps/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Software Apps",
    "typeScriptTag": "softwareApps",
    "description": "Update a Software Application Configuration.",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "settings",
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
    "url": "/softwareapps/{software_app_id}/associations",
    "method": "softwareappsAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of a Software Application",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"software_app\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/softwareapps/{software_app_id}/associations",
    "method": "softwareappsAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of a software application.",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/softwareapps/{software_app_id}/reclaim-licenses",
    "method": "reclaimLicenses",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Software Apps",
    "typeScriptTag": "softwareApps",
    "description": "Reclaim Licenses for a Software Application.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/softwareapps/{software_app_id}/retry-installation",
    "method": "retryInstallation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Software Apps",
    "typeScriptTag": "softwareApps",
    "description": "Retry Installation for a Software Application",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/softwareapps/{software_app_id}/statuses",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Software Apps",
    "typeScriptTag": "softwareApps",
    "description": "Get the status of the provided Software Application",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
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
    "url": "/softwareapps/{software_app_id}/systemgroups",
    "method": "softwareappsTraverseSystemGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the System Groups bound to a Software App.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/softwareapps/{software_app_id}/systems",
    "method": "softwareappsTraverseSystem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Systems bound to a Software App.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/subscriptions",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Lists all the Pricing & Packaging Subscriptions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systemgroups",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Groups",
    "typeScriptTag": "systemGroups",
    "description": "List all System Groups",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
    "url": "/systemgroups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "System Groups",
    "typeScriptTag": "systemGroups",
    "description": "Create a new System Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "object",
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
        "name": "memberQuery",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "memberQueryExemptions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "memberSuggestionsNotify",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "membershipMethod",
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
    "url": "/systemgroups/{group_id}/associations",
    "method": "systemGroupAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of a System Group",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"system_group\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systemgroups/{group_id}/associations",
    "method": "systemGroupAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of a System Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/systemgroups/{group_id}/commands",
    "method": "systemGroupTraverseCommand",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Commands bound to a System Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "details",
        "schema": "string",
        "description": "This will provide detail descriptive response for the request."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systemgroups/{group_id}/members",
    "method": "systemGroupMembersList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the members of a System Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systemgroups/{group_id}/members",
    "method": "systemGroupMembersPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the members of a System Group",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "description": "Current date header for the System Context API"
      },
      {
        "name": "authorization",
        "schema": "string",
        "description": "Authorization header for the System Context API"
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/systemgroups/{group_id}/membership",
    "method": "systemGroupMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the System Group's membership",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systemgroups/{group_id}/policies",
    "method": "systemGroupTraversePolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Policies bound to a System Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/systemgroups/{group_id}/policygroups",
    "method": "systemGroupTraversePolicyGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Policy Groups bound to a System Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/systemgroups/{group_id}/suggestions",
    "method": "listSuggestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Groups",
    "typeScriptTag": "systemGroups",
    "description": "List Suggestions for a System Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "ID of the group",
        "example": "GROUP_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systemgroups/{group_id}/suggestions",
    "method": "applySuggestions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "System Groups",
    "typeScriptTag": "systemGroups",
    "description": "Apply Suggestions for a System Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "ID of the group",
        "example": "GROUP_ID"
      },
      {
        "name": "object_ids",
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
    "url": "/systemgroups/{group_id}/usergroups",
    "method": "systemGroupTraverseUserGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the User Groups bound to a System Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/systemgroups/{group_id}/users",
    "method": "systemGroupTraverseUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Users bound to a System Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/systemgroups/{id}",
    "method": "deleteGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "System Groups",
    "typeScriptTag": "systemGroups",
    "description": "Delete a System Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/systemgroups/{id}",
    "method": "viewDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Groups",
    "typeScriptTag": "systemGroups",
    "description": "View an individual System Group details",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systemgroups/{id}",
    "method": "updateGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "System Groups",
    "typeScriptTag": "systemGroups",
    "description": "Update a System Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "object",
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
        "name": "memberQuery",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "memberQueryExemptions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "memberSuggestionsNotify",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "membershipMethod",
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
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/alf",
    "method": "listAlf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights ALF",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/alf_exceptions",
    "method": "listAlfExceptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights ALF Exceptions",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/alf_explicit_auths",
    "method": "listAlfExplicitAuths",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights ALF Explicit Authentications",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/appcompat_shims",
    "method": "listAppcompatShims",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Application Compatibility Shims",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/apps",
    "method": "listApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Apps",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/authorized_keys",
    "method": "listAuthorizedKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Authorized Keys",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/azure_instance_metadata",
    "method": "listAzureInstanceMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Azure Instance Metadata",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
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
    "url": "/systeminsights/azure_instance_tags",
    "method": "listAzureInstanceTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Azure Instance Tags",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
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
    "url": "/systeminsights/battery",
    "method": "listBatteryData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Battery",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/bitlocker_info",
    "method": "listBitlockerInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Bitlocker Info",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/browser_plugins",
    "method": "listBrowserPlugins",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Browser Plugins",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/certificates",
    "method": "listCertificates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Certificates",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\nNote: You can only filter by `system_id` and `common_name`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/chassis_info",
    "method": "getChassisInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Chassis Info",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
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
    "url": "/systeminsights/chrome_extensions",
    "method": "listChromeExtensions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Chrome Extensions",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/connectivity",
    "method": "listConnectivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Connectivity",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/crashes",
    "method": "listCrashes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Crashes",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/cups_destinations",
    "method": "listCupsDestinations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights CUPS Destinations",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/disk_encryption",
    "method": "listDiskEncryption",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Disk Encryption",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/disk_info",
    "method": "getDiskInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Disk Info",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/dns_resolvers",
    "method": "listDnsResolvers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights DNS Resolvers",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/etc_hosts",
    "method": "listEtcHosts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Etc Hosts",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/firefox_addons",
    "method": "listFirefoxAddons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Firefox Addons",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/groups",
    "method": "listGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Groups",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/ie_extensions",
    "method": "getIeExtensionsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights IE Extensions",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/interface_addresses",
    "method": "listInterfaceAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Interface Addresses",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/interface_details",
    "method": "listInterfaceDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Interface Details",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/kernel_info",
    "method": "getKernelInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Kernel Info",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/launchd",
    "method": "listLaunchd",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Launchd",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/linux_packages",
    "method": "listLinuxPackages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Linux Packages",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/logged_in_users",
    "method": "listLoggedInUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Logged-In Users",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/logical_drives",
    "method": "listLogicalDrives",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Logical Drives",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/managed_policies",
    "method": "listManagedPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Managed Policies",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/mounts",
    "method": "listMounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Mounts",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/os_version",
    "method": "getOsVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights OS Version",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/patches",
    "method": "listPatches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Patches",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/programs",
    "method": "listPrograms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Programs",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/python_packages",
    "method": "listPythonPackages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Python Packages",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/safari_extensions",
    "method": "listSafariExtensions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Safari Extensions",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/scheduled_tasks",
    "method": "listScheduledTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Scheduled Tasks",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/secureboot",
    "method": "listSecureBoot",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Secure Boot",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
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
    "url": "/systeminsights/services",
    "method": "listServices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Services",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/shadow",
    "method": "listShadowData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "LIst System Insights Shadow",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/shared_folders",
    "method": "listSharedFolders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Shared Folders",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/shared_resources",
    "method": "listSharedResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Shared Resources",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/sharing_preferences",
    "method": "listSharingPreferences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Sharing Preferences",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/sip_config",
    "method": "getSipConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights SIP Config",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/startup_items",
    "method": "listStartupItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Startup Items",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/system_controls",
    "method": "listSystemControls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights System Control",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\nNote: You can only filter by `system_id` and `name`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/system_info",
    "method": "getSystemInfoList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights System Info",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/tpm_info",
    "method": "getTpmInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights TPM Info",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
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
    "url": "/systeminsights/uptime",
    "method": "listUptime",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Uptime",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, gte, in. e.g:\nFilter for single value:\n`filter=field:gte:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/usb_devices",
    "method": "listUsbDevices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights USB Devices",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/user_groups",
    "method": "getUserGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights User Groups",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/user_ssh_keys",
    "method": "listUserSshKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights User SSH Keys",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/userassist",
    "method": "listUserAssist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights User Assist",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
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
    "url": "/systeminsights/users",
    "method": "listUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Users",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/wifi_networks",
    "method": "listWifiNetworks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights WiFi Networks",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/wifi_status",
    "method": "listWifiStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights WiFi Status",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systeminsights/windows_security_center",
    "method": "listWindowsSecurityCenter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Windows Security Center",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
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
    "url": "/systeminsights/windows_security_products",
    "method": "listWindowsSecurityProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Insights",
    "typeScriptTag": "systemInsights",
    "description": "List System Insights Windows Security Products",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending. e.g:\nSort by single field:\n`sort=field`\nSort descending by single field:\n`sort=-field`\nSort by multiple fields:\n`sort=field1,-field2,field3`\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "Supported operators are: eq, in. e.g:\nFilter for single value:\n`filter=field:eq:value`\nFilter for any value in a list: (note \"pipe\" character: `|` separating values)\n`filter=field:in:value1|value2|value3`\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systems/{systemObjectId}/aggregated-policy-stats",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Aggregated Policy Stats",
    "typeScriptTag": "aggregatedPolicyStats",
    "description": "Get the Aggregated Policy Stats for a System",
    "parameters": [
      {
        "name": "systemObjectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SYSTEMOBJECTID"
      },
      {
        "name": "organizationObjectId",
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
    "url": "/systems/{system_id}/associations",
    "method": "systemAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of a System",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"system\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Current date header for the System Context API"
      },
      {
        "name": "authorization",
        "schema": "string",
        "description": "Authorization header for the System Context API"
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systems/{system_id}/associations",
    "method": "systemAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage associations of a System",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "description": "Current date header for the System Context API"
      },
      {
        "name": "authorization",
        "schema": "string",
        "description": "Authorization header for the System Context API"
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/systems/{system_id}/commands",
    "method": "systemTraverseCommand",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Commands bound to a System",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "details",
        "schema": "string",
        "description": "This will provide detail descriptive response for the request."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systems/{system_id}/fdekey",
    "method": "getFdeKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Systems",
    "typeScriptTag": "systems",
    "description": "Get System FDE Key",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/systems/{system_id}/memberof",
    "method": "systemMemberOf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the parent Groups of a System",
    "parameters": [
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Current date header for the System Context API"
      },
      {
        "name": "authorization",
        "schema": "string",
        "description": "Authorization header for the System Context API"
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systems/{system_id}/policies",
    "method": "systemTraversePolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Policies bound to a System",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/systems/{system_id}/policygroups",
    "method": "systemTraversePolicyGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Policy Groups bound to a System",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Current date header for the System Context API"
      },
      {
        "name": "authorization",
        "schema": "string",
        "description": "Authorization header for the System Context API"
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/systems/{system_id}/policystatuses",
    "method": "systemsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the policy statuses for a system",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/systems/{system_id}/softwareappstatuses",
    "method": "listSoftwareAppsWithStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Systems",
    "typeScriptTag": "systems",
    "description": "List the associated Software Application Statuses of a System",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
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
    "url": "/systems/{system_id}/usergroups",
    "method": "systemTraverseUserGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the User Groups bound to a System",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Current date header for the System Context API"
      },
      {
        "name": "authorization",
        "schema": "string",
        "description": "Authorization header for the System Context API"
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/systems/{system_id}/users",
    "method": "systemTraverseUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Users bound to a System",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Current date header for the System Context API"
      },
      {
        "name": "authorization",
        "schema": "string",
        "description": "Authorization header for the System Context API"
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/usergroups",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "List all User Groups",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
    "url": "/usergroups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "Create a new User Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "object",
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
        "name": "memberQuery",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "memberQueryExemptions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "memberSuggestionsNotify",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "membershipMethod",
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
    "url": "/usergroups/{group_id}/activedirectories",
    "method": "userGroupTraverseActiveDirectory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Active Directories bound to a User Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/usergroups/{group_id}/applications",
    "method": "userGroupTraverseApplication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Applications bound to a User Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/usergroups/{group_id}/associations",
    "method": "userGroupAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of a User Group.",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"user_group\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/usergroups/{group_id}/associations",
    "method": "userGroupAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of a User Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/usergroups/{group_id}/directories",
    "method": "userGroupTraverseDirectory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Directories bound to a User Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/usergroups/{group_id}/gsuites",
    "method": "userGroupTraverseGSuite",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the G Suite instances bound to a User Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/usergroups/{group_id}/ldapservers",
    "method": "userGroupTraverseLdapServer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the LDAP Servers bound to a User Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/usergroups/{group_id}/members",
    "method": "userGroupMembersList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the members of a User Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/usergroups/{group_id}/members",
    "method": "userGroupMembersPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the members of a User Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/usergroups/{group_id}/membership",
    "method": "userGroupMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the User Group's membership",
    "parameters": [
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/usergroups/{group_id}/office365s",
    "method": "userGroupTraverseOffice365",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Office 365 instances bound to a User Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/usergroups/{group_id}/radiusservers",
    "method": "userGroupTraverseRadiusServer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the RADIUS Servers bound to a User Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/usergroups/{group_id}/suggestions",
    "method": "getSuggestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "List Suggestions for a User Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "ID of the group",
        "example": "GROUP_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/usergroups/{group_id}/suggestions",
    "method": "applySuggestions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "Apply Suggestions for a User Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "ID of the group",
        "example": "GROUP_ID"
      },
      {
        "name": "user_ids",
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
    "url": "/usergroups/{group_id}/systemgroups",
    "method": "userGroupTraverseSystemGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the System Groups bound to User Groups",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/usergroups/{group_id}/systems",
    "method": "userGroupTraverseSystem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Systems bound to a User Group",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/usergroups/{id}",
    "method": "deleteGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "Delete a User Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/usergroups/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "View an individual User Group details",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/usergroups/{id}",
    "method": "updateGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "Update a User Group",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "object",
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
        "name": "memberQuery",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "memberQueryExemptions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "memberSuggestionsNotify",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "membershipMethod",
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
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{userId}/pushendpoints/{pushEndpointId}/verify",
    "method": "start",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Push Verification",
    "typeScriptTag": "pushVerification",
    "description": "Send Push Verification message",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "pushEndpointId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PUSHENDPOINTID"
      },
      {
        "name": "message",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/activedirectories",
    "method": "userTraverseActiveDirectory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Active Directory instances bound to a User",
    "parameters": [
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
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
    "url": "/users/{user_id}/applications",
    "method": "userTraverseApplication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Applications bound to a User",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/users/{user_id}/associations",
    "method": "userAssociationsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the associations of a User",
    "parameters": [
      {
        "name": "targets",
        "schema": "array",
        "required": true,
        "description": "Targets which a \"user\" can be associated to."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/associations",
    "method": "userAssociationsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "Manage the associations of a User",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/users/{user_id}/directories",
    "method": "userTraverseDirectory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Directories bound to a User",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/users/{user_id}/gsuites",
    "method": "userTraverseGSuite",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the G Suite instances bound to a User",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/users/{user_id}/ldapservers",
    "method": "userTraverseLdapServer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the LDAP servers bound to a User",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/users/{user_id}/memberof",
    "method": "userMemberOf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the parent Groups of a User",
    "parameters": [
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/office365s",
    "method": "userTraverseOffice365",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Office 365 instances bound to a User",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/users/{user_id}/pushendpoints",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List Push Endpoints associated with a User",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/pushendpoints/{push_endpoint_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete a Push Endpoint associated with a User",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A push endpoint response from the auth service."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/pushendpoints/{push_endpoint_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a push endpoint associated with a User",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A push endpoint response from the auth service."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/pushendpoints/{push_endpoint_id}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update a push endpoint associated with a User",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A push endpoint response from the auth service."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/radiusservers",
    "method": "userTraverseRadiusServer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the RADIUS Servers bound to a User",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/users/{user_id}/systemgroups",
    "method": "userTraverseSystemGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the System Groups bound to a User",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/users/{user_id}/systems",
    "method": "userTraverseSystem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List the Systems bound to a User",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
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
    "url": "/workdays",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workday Import",
    "typeScriptTag": "workdayImport",
    "description": "List Workdays",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "The comma separated fields included in the returned records.\nIf omitted, the default list of fields will be returned.\n",
        "default": []
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "filter",
        "schema": "array",
        "description": "A filter to apply to the query.\n\n**Filter structure**: `<field>:<operator>:<value>`.\n\n**field** = Populate with a valid field from an endpoint response.\n\n**operator** =  Supported operators are: eq, ne, gt, ge, lt, le, between, search, in.\n_Note: v1 operators differ from v2 operators._\n\n**value** = Populate with the value you want to search for. Is case sensitive. Supports wild cards.\n\n**EX:** `GET /api/v2/groups?filter=name:eq:Test+Group`",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/workdays",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workday Import",
    "typeScriptTag": "workdayImport",
    "description": "Create new Workday",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "auth",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportUrl",
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
    "url": "/workdays/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workday Import",
    "typeScriptTag": "workdayImport",
    "description": "Get Workday",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/workdays/{id}",
    "method": "put",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workday Import",
    "typeScriptTag": "workdayImport",
    "description": "Update Workday",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportUrl",
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
    "url": "/workdays/{id}/import/{job_id}/results",
    "method": "importresults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workday Import",
    "typeScriptTag": "workdayImport",
    "description": "List Import Results",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/workdays/{workday_id}/auth",
    "method": "deauthorize",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workday Import",
    "typeScriptTag": "workdayImport",
    "description": "Deauthorize Workday",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/workdays/{workday_id}/auth",
    "method": "authorize",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workday Import",
    "typeScriptTag": "workdayImport",
    "description": "Authorize Workday",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
      },
      {
        "name": "auth",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/workdays/{workday_id}/import",
    "method": "import",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workday Import",
    "typeScriptTag": "workdayImport",
    "description": "Workday Import",
    "parameters": [
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
    "url": "/workdays/{workday_id}/workers",
    "method": "workers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workday Import",
    "typeScriptTag": "workdayImport",
    "description": "List Workday Workers",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of records to return at once. Limited to 100.",
        "default": 10
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "The offset into the records to return.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "The comma separated fields used to sort the collection.\nDefault sort is ascending, prefix with `-` to sort descending.\n",
        "default": []
      },
      {
        "name": "xOrgId",
        "schema": "string",
        "description": "Organization identifier that can be obtained from console settings."
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
      apiTitle="JumpCloud API"
      apiBaseUrl="https://console.jumpcloud.com/api/v2"
      apiVersion="2.0"
      endpoints={428}
      sdkMethods={1053}
      schemas={664}
      parameters={1367}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jumpcloud/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jumpcloud/openapi.yaml"
      developerDocumentation="docs.jumpcloud.com/api/2.0/index.html"
    />
  );
}
  