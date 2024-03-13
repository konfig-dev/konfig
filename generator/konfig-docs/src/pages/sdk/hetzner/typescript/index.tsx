import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function HetznerTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="hetzner-typescript-sdk"
      metaDescription="Hetzner provides reliable and efficient cloud hosting and data center services. With state-of-the-art infrastructure and a focus on security and performance, Hetzner caters to a wide range of businesses looking for scalable and dependable hosting solutions. From dedicated servers to cloud storage and virtual private servers, Hetzner offers a comprehensive suite of services to meet the diverse needs of its clients."
      company="Hetzner"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hetzner/logo.png"
      clientNameCamelCase="hetzner"
      homepage="hetzner.com"
      lastUpdated={new Date("2024-03-13T02:02:48.819Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hetzner/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hetzner/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["cloud","security","hosting","data_center","dedicated_servers","storage","virtual_private_servers"]}
      methods={[
  {
    "url": "/actions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Actions",
    "typeScriptTag": "actions",
    "description": "Get all Actions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "Filter the actions by ID. Can be used multiple times. The response will only contain\nactions matching the specified IDs.\n",
        "example": 42
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/actions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Actions",
    "typeScriptTag": "actions",
    "description": "Get an Action",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/certificates",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Get all Certificates",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort resources by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n"
      },
      {
        "name": "labelSelector",
        "schema": "string",
        "required": false,
        "description": "Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"[Label Selector](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Can be used multiple times. The response will only contain Certificates matching the type."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/certificates",
    "method": "createNewCertificate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Create a Certificate",
    "parameters": [
      {
        "name": "certificate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "-----BEGIN CERTIFICATE-----\n..."
      },
      {
        "name": "domain_names",
        "schema": "array",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "labels",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my website cert"
      },
      {
        "name": "private_key",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "-----BEGIN PRIVATE KEY-----\n..."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "uploaded",
        "default": "uploaded"
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
    "url": "/certificates/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificate Actions",
    "typeScriptTag": "certificateActions",
    "description": "Get all Actions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "Filter the actions by ID. Can be used multiple times. The response will only contain\nactions matching the specified IDs.\n",
        "example": 42
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/certificates/actions/{id}",
    "method": "getAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificate Actions",
    "typeScriptTag": "certificateActions",
    "description": "Get an Action",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/certificates/{id}",
    "method": "deleteCertificate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Delete a Certificate",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Certificate deleted"
      }
    ]
  },
  {
    "url": "/certificates/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Get a Certificate",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/certificates/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Update a Certificate",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      },
      {
        "name": "labels",
        "schema": "object",
        "description": "",
        "example": {
          "labelkey": "value"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "my website cert"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/certificates/{id}/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificate Actions",
    "typeScriptTag": "certificateActions",
    "description": "Get all Actions for a Certificate",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/certificates/{id}/actions/retry",
    "method": "retryIssuanceOrRenewal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Certificate Actions",
    "typeScriptTag": "certificateActions",
    "description": "Retry Issuance or Renewal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Certificate",
        "example": 0
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
    "url": "/certificates/{id}/actions/{action_id}",
    "method": "getActionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificate Actions",
    "typeScriptTag": "certificateActions",
    "description": "Get an Action for a Certificate",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Certificate",
        "example": 0
      },
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action",
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
    "url": "/datacenters",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datacenters",
    "typeScriptTag": "datacenters",
    "description": "Get all Datacenters",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Can be used to filter Datacenters by their name. The response will only contain the Datacenter matching the specified name. When the name does not match the Datacenter name format, an `invalid_input` error is returned."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Can be used multiple times."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/datacenters/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datacenters",
    "typeScriptTag": "datacenters",
    "description": "Get a Datacenter",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of Datacenter",
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
    "url": "/firewalls",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Get all Firewalls",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort resources by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n"
      },
      {
        "name": "labelSelector",
        "schema": "string",
        "required": false,
        "description": "Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"[Label Selector](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/firewalls",
    "method": "createFirewall",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Create a Firewall",
    "parameters": [
      {
        "name": "apply_to",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "labels",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Corporate Intranet Protection"
      },
      {
        "name": "rules",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "direction": "in",
            "port": "80",
            "protocol": "tcp",
            "source_ips": [
              "28.239.13.1/32",
              "28.239.14.0/24",
              "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"
            ]
          }
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
    "url": "/firewalls/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Firewall Actions",
    "typeScriptTag": "firewallActions",
    "description": "Get all Actions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "Filter the actions by ID. Can be used multiple times. The response will only contain\nactions matching the specified IDs.\n",
        "example": 42
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/firewalls/actions/{id}",
    "method": "getActionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Firewall Actions",
    "typeScriptTag": "firewallActions",
    "description": "Get an Action",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/firewalls/{id}",
    "method": "deleteFirewallById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Delete a Firewall",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Firewall deleted"
      }
    ]
  },
  {
    "url": "/firewalls/{id}",
    "method": "getFirewallById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Get a Firewall",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/firewalls/{id}",
    "method": "updateFirewallById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Firewalls",
    "typeScriptTag": "firewalls",
    "description": "Update a Firewall",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      },
      {
        "name": "labels",
        "schema": "object",
        "description": "",
        "example": {
          "labelkey": "value"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "new-name"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/firewalls/{id}/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Firewall Actions",
    "typeScriptTag": "firewallActions",
    "description": "Get all Actions for a Firewall",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/firewalls/{id}/actions/apply_to_resources",
    "method": "applyToResources",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Firewall Actions",
    "typeScriptTag": "firewallActions",
    "description": "Apply to Resources",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Firewall",
        "example": 0
      },
      {
        "name": "apply_to",
        "schema": "array",
        "required": true,
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
    "url": "/firewalls/{id}/actions/remove_from_resources",
    "method": "removeFromResources",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Firewall Actions",
    "typeScriptTag": "firewallActions",
    "description": "Remove from Resources",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Firewall",
        "example": 0
      },
      {
        "name": "remove_from",
        "schema": "array",
        "required": true,
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
    "url": "/firewalls/{id}/actions/set_rules",
    "method": "setRules",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Firewall Actions",
    "typeScriptTag": "firewallActions",
    "description": "Set Rules",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Firewall",
        "example": 0
      },
      {
        "name": "rules",
        "schema": "array",
        "required": true,
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
    "url": "/firewalls/{id}/actions/{action_id}",
    "method": "getActionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Firewall Actions",
    "typeScriptTag": "firewallActions",
    "description": "Get an Action for a Firewall",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Firewall",
        "example": 0
      },
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action",
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
    "url": "/floating_ips",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Floating IPs",
    "typeScriptTag": "floatingIPs",
    "description": "Get all Floating IPs",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n"
      },
      {
        "name": "labelSelector",
        "schema": "string",
        "required": false,
        "description": "Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"[Label Selector](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/floating_ips",
    "method": "createNewIp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Floating IPs",
    "typeScriptTag": "floatingIPs",
    "description": "Create a Floating IP",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Web Frontend"
      },
      {
        "name": "home_location",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "fsn1"
      },
      {
        "name": "labels",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "labelkey": "value"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Web Frontend"
      },
      {
        "name": "server",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 42
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
        "description": ""
      }
    ]
  },
  {
    "url": "/floating_ips/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Floating IP Actions",
    "typeScriptTag": "floatingIpActions",
    "description": "Get all Actions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "Filter the actions by ID. Can be used multiple times. The response will only contain\nactions matching the specified IDs.\n",
        "example": 42
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/floating_ips/actions/{id}",
    "method": "getActionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Floating IP Actions",
    "typeScriptTag": "floatingIpActions",
    "description": "Get an Action",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/floating_ips/{id}",
    "method": "deleteIp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Floating IPs",
    "typeScriptTag": "floatingIPs",
    "description": "Delete a Floating IP",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Floating IP",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Floating IP deleted"
      }
    ]
  },
  {
    "url": "/floating_ips/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Floating IPs",
    "typeScriptTag": "floatingIPs",
    "description": "Get a Floating IP",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Floating IP",
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
    "url": "/floating_ips/{id}",
    "method": "updateDescriptionLabels",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Floating IPs",
    "typeScriptTag": "floatingIPs",
    "description": "Update a Floating IP",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Floating IP",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Web Frontend"
      },
      {
        "name": "labels",
        "schema": "object",
        "description": "",
        "example": {
          "labelkey": "value"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Web Frontend"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/floating_ips/{id}/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Floating IP Actions",
    "typeScriptTag": "floatingIpActions",
    "description": "Get all Actions for a Floating IP",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Floating IP",
        "example": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/floating_ips/{id}/actions/assign",
    "method": "assignToServer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Floating IP Actions",
    "typeScriptTag": "floatingIpActions",
    "description": "Assign a Floating IP to a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Floating IP",
        "example": 0
      },
      {
        "name": "server",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 42
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
    "url": "/floating_ips/{id}/actions/change_dns_ptr",
    "method": "changeDnsPtr",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Floating IP Actions",
    "typeScriptTag": "floatingIpActions",
    "description": "Change reverse DNS entry for a Floating IP",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Floating IP",
        "example": 0
      },
      {
        "name": "dns_ptr",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "server02.example.com"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1.2.3.4"
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
    "url": "/floating_ips/{id}/actions/change_protection",
    "method": "changeProtection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Floating IP Actions",
    "typeScriptTag": "floatingIpActions",
    "description": "Change Floating IP Protection",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Floating IP",
        "example": 0
      },
      {
        "name": "delete",
        "schema": "boolean",
        "description": "",
        "example": true
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
    "url": "/floating_ips/{id}/actions/unassign",
    "method": "unassignIp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Floating IP Actions",
    "typeScriptTag": "floatingIpActions",
    "description": "Unassign a Floating IP",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Floating IP",
        "example": 0
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
    "url": "/floating_ips/{id}/actions/{action_id}",
    "method": "getActionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Floating IP Actions",
    "typeScriptTag": "floatingIpActions",
    "description": "Get an Action for a Floating IP",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Floating IP",
        "example": 0
      },
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action",
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
    "url": "/images",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Get all Images",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort resources by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Can be used multiple times."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Can be used multiple times. The response will only contain Images matching the status."
      },
      {
        "name": "boundTo",
        "schema": "string",
        "required": false,
        "description": "Can be used multiple times. Server ID linked to the Image. Only available for Images of type `backup`"
      },
      {
        "name": "includeDeprecated",
        "schema": "boolean",
        "required": false,
        "description": "Can be used multiple times."
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n"
      },
      {
        "name": "labelSelector",
        "schema": "string",
        "required": false,
        "description": "Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"[Label Selector](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "architecture",
        "schema": "string",
        "required": false,
        "description": "Return only Images with the given architecture."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/images/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Image Actions",
    "typeScriptTag": "imageActions",
    "description": "Get all Actions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "Filter the actions by ID. Can be used multiple times. The response will only contain\nactions matching the specified IDs.\n",
        "example": 42
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/images/actions/{id}",
    "method": "getActionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Image Actions",
    "typeScriptTag": "imageActions",
    "description": "Get an Action",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/images/{id}",
    "method": "deleteImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Delete an Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Image",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Image deleted"
      }
    ]
  },
  {
    "url": "/images/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Get an Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Image",
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
    "url": "/images/{id}",
    "method": "updateImageById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Update an Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Image",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "My new Image description"
      },
      {
        "name": "labels",
        "schema": "object",
        "description": "",
        "example": {
          "labelkey": "value"
        }
      },
      {
        "name": "type",
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
    "url": "/images/{id}/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Image Actions",
    "typeScriptTag": "imageActions",
    "description": "Get all Actions for an Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Image",
        "example": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/images/{id}/actions/change_protection",
    "method": "changeProtection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Image Actions",
    "typeScriptTag": "imageActions",
    "description": "Change Image Protection",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Image",
        "example": 0
      },
      {
        "name": "delete",
        "schema": "boolean",
        "description": "",
        "example": true
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
    "url": "/images/{id}/actions/{action_id}",
    "method": "getActionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Image Actions",
    "typeScriptTag": "imageActions",
    "description": "Get an Action for an Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Image",
        "example": 0
      },
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action",
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
    "url": "/isos",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ISOs",
    "typeScriptTag": "isOs",
    "description": "Get all ISOs",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Can be used to filter ISOs by their name. The response will only contain the ISO matching the specified name."
      },
      {
        "name": "architecture",
        "schema": "string",
        "required": false,
        "description": "Return only ISOs with the given architecture."
      },
      {
        "name": "includeArchitectureWildcard",
        "schema": "boolean",
        "required": false,
        "description": "Include Images with wildcard architecture (architecture is null). Works only if architecture filter is specified."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/isos/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ISOs",
    "typeScriptTag": "isOs",
    "description": "Get an ISO",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the ISO",
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
    "url": "/load_balancer_types",
    "method": "getAllTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load Balancer Types",
    "typeScriptTag": "loadBalancerTypes",
    "description": "Get all Load Balancer Types",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Can be used to filter Load Balancer types by their name. The response will only contain the Load Balancer type matching the specified name."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/load_balancer_types/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load Balancer Types",
    "typeScriptTag": "loadBalancerTypes",
    "description": "Get a Load Balancer Type",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of Load Balancer type",
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
    "url": "/load_balancers",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Get all Load Balancers",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort resources by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n"
      },
      {
        "name": "labelSelector",
        "schema": "string",
        "required": false,
        "description": "Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"[Label Selector](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/load_balancers",
    "method": "createLoadBalancer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Create a Load Balancer",
    "parameters": [
      {
        "name": "algorithm",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {
          "type": "round_robin"
        }
      },
      {
        "name": "labels",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "load_balancer_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "lb11"
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Web Frontend"
      },
      {
        "name": "network",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 123
      },
      {
        "name": "network_zone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "eu-central"
      },
      {
        "name": "public_interface",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "services",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "targets",
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
    "url": "/load_balancers/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Get all Actions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "Filter the actions by ID. Can be used multiple times. The response will only contain\nactions matching the specified IDs.\n",
        "example": 42
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/load_balancers/actions/{id}",
    "method": "getSpecificAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Get an Action",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/load_balancers/{id}",
    "method": "deleteLoadBalancer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Delete a Load Balancer",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Load Balancer deleted"
      }
    ]
  },
  {
    "url": "/load_balancers/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Get a Load Balancer",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
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
    "url": "/load_balancers/{id}",
    "method": "updateBalancer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Update a Load Balancer",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "labels",
        "schema": "object",
        "description": "",
        "example": {
          "labelkey": "value"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "new-name"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/load_balancers/{id}/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Get all Actions for a Load Balancer",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/load_balancers/{id}/actions/add_service",
    "method": "addService",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Add Service",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "destination_port",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 80
      },
      {
        "name": "health_check",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "http",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "listen_port",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 443
      },
      {
        "name": "protocol",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https"
      },
      {
        "name": "proxyprotocol",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": false
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
    "url": "/load_balancers/{id}/actions/add_target",
    "method": "addTarget",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Add Target",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "ip",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "label_selector",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "server",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "use_private_ip",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
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
    "url": "/load_balancers/{id}/actions/attach_to_network",
    "method": "attachToNetwork",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Attach a Load Balancer to a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "ip",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.0.1.1"
      },
      {
        "name": "network",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4711
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
    "url": "/load_balancers/{id}/actions/change_algorithm",
    "method": "changeAlgorithm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Change Algorithm",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
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
        "description": ""
      }
    ]
  },
  {
    "url": "/load_balancers/{id}/actions/change_dns_ptr",
    "method": "changeDnsPtr",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Change reverse DNS entry for this Load Balancer",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "dns_ptr",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "lb1.example.com"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1.2.3.4"
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
    "url": "/load_balancers/{id}/actions/change_protection",
    "method": "changeProtection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Change Load Balancer Protection",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "delete",
        "schema": "boolean",
        "description": "",
        "example": true
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
    "url": "/load_balancers/{id}/actions/change_type",
    "method": "changeType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Change the Type of a Load Balancer",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "load_balancer_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "lb21"
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
    "url": "/load_balancers/{id}/actions/delete_service",
    "method": "deleteService",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Delete Service",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "listen_port",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 443
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
    "url": "/load_balancers/{id}/actions/detach_from_network",
    "method": "detachFromNetwork",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Detach a Load Balancer from a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "network",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4711
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
    "url": "/load_balancers/{id}/actions/disable_public_interface",
    "method": "disablePublicInterface",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Disable the public interface of a Load Balancer",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
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
    "url": "/load_balancers/{id}/actions/enable_public_interface",
    "method": "enablePublicInterface",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Enable the public interface of a Load Balancer",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
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
    "url": "/load_balancers/{id}/actions/remove_target",
    "method": "removeTarget",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Remove Target",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "ip",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "label_selector",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "server",
        "schema": "object",
        "required": false,
        "description": ""
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
        "description": ""
      }
    ]
  },
  {
    "url": "/load_balancers/{id}/actions/update_service",
    "method": "updateService",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Update Service",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "destination_port",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 80
      },
      {
        "name": "health_check",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "http",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "listen_port",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 443
      },
      {
        "name": "protocol",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https"
      },
      {
        "name": "proxyprotocol",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
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
    "url": "/load_balancers/{id}/actions/{action_id}",
    "method": "getSpecificAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load Balancer Actions",
    "typeScriptTag": "loadBalancerActions",
    "description": "Get an Action for a Load Balancer",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action",
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
    "url": "/load_balancers/{id}/metrics",
    "method": "getMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Get Metrics for a LoadBalancer",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Load Balancer",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of metrics to get",
        "example": "TYPE"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Start of period to get Metrics for (in ISO-8601 format)",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "End of period to get Metrics for (in ISO-8601 format)",
        "example": "END"
      },
      {
        "name": "step",
        "schema": "string",
        "required": false,
        "description": "Resolution of results in seconds"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/locations",
    "method": "getAllLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get all Locations",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Can be used to filter Locations by their name. The response will only contain the Location matching the specified name."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Can be used multiple times."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/locations/{id}",
    "method": "getLocationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get a Location",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of Location",
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
    "url": "/networks",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Networks",
    "typeScriptTag": "networks",
    "description": "Get all Networks",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n"
      },
      {
        "name": "labelSelector",
        "schema": "string",
        "required": false,
        "description": "Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"[Label Selector](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/networks",
    "method": "createNetwork",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Networks",
    "typeScriptTag": "networks",
    "description": "Create a Network",
    "parameters": [
      {
        "name": "expose_routes_to_vswitch",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "ip_range",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10.0.0.0/16"
      },
      {
        "name": "labels",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "mynet"
      },
      {
        "name": "routes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "subnets",
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
    "url": "/networks/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Network Actions",
    "typeScriptTag": "networkActions",
    "description": "Get all Actions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "Filter the actions by ID. Can be used multiple times. The response will only contain\nactions matching the specified IDs.\n",
        "example": 42
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/networks/actions/{id}",
    "method": "getAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Network Actions",
    "typeScriptTag": "networkActions",
    "description": "Get an Action",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/networks/{id}",
    "method": "deleteNetwork",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Networks",
    "typeScriptTag": "networks",
    "description": "Delete a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the network",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Network deleted"
      }
    ]
  },
  {
    "url": "/networks/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Networks",
    "typeScriptTag": "networks",
    "description": "Get a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the network",
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
    "url": "/networks/{id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Networks",
    "typeScriptTag": "networks",
    "description": "Update a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the network",
        "example": 0
      },
      {
        "name": "expose_routes_to_vswitch",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "labels",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "new-name"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/networks/{id}/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Network Actions",
    "typeScriptTag": "networkActions",
    "description": "Get all Actions for a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Network",
        "example": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/networks/{id}/actions/add_route",
    "method": "addRoute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Network Actions",
    "typeScriptTag": "networkActions",
    "description": "Add a route to a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Network",
        "example": 0
      },
      {
        "name": "destination",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10.100.1.0/24"
      },
      {
        "name": "gateway",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10.0.1.1"
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
    "url": "/networks/{id}/actions/add_subnet",
    "method": "addSubnet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Network Actions",
    "typeScriptTag": "networkActions",
    "description": "Add a subnet to a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Network",
        "example": 0
      },
      {
        "name": "ip_range",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.0.1.0/24"
      },
      {
        "name": "network_zone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "eu-central"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "vswitch_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1000
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
    "url": "/networks/{id}/actions/change_ip_range",
    "method": "changeIpRange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Network Actions",
    "typeScriptTag": "networkActions",
    "description": "Change IP range of a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Network",
        "example": 0
      },
      {
        "name": "ip_range",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10.0.0.0/12"
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
    "url": "/networks/{id}/actions/change_protection",
    "method": "changeProtection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Network Actions",
    "typeScriptTag": "networkActions",
    "description": "Change Network Protection",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Network",
        "example": 0
      },
      {
        "name": "delete",
        "schema": "boolean",
        "description": "",
        "example": true
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
    "url": "/networks/{id}/actions/delete_route",
    "method": "deleteRoute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Network Actions",
    "typeScriptTag": "networkActions",
    "description": "Delete a route from a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Network",
        "example": 0
      },
      {
        "name": "destination",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10.100.1.0/24"
      },
      {
        "name": "gateway",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10.0.1.1"
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
    "url": "/networks/{id}/actions/delete_subnet",
    "method": "deleteSubnet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Network Actions",
    "typeScriptTag": "networkActions",
    "description": "Delete a subnet from a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Network",
        "example": 0
      },
      {
        "name": "ip_range",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10.0.1.0/24"
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
    "url": "/networks/{id}/actions/{action_id}",
    "method": "getAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Network Actions",
    "typeScriptTag": "networkActions",
    "description": "Get an Action for a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Network",
        "example": 0
      },
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action",
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
    "url": "/placement_groups",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement Groups",
    "typeScriptTag": "placementGroups",
    "description": "Get all PlacementGroups",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort resources by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n"
      },
      {
        "name": "labelSelector",
        "schema": "string",
        "required": false,
        "description": "Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"[Label Selector](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Can be used multiple times. The response will only contain PlacementGroups matching the type."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/placement_groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Placement Groups",
    "typeScriptTag": "placementGroups",
    "description": "Create a PlacementGroup",
    "parameters": [
      {
        "name": "labels",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my Placement Group"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "spread"
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
    "url": "/placement_groups/{id}",
    "method": "deleteGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Placement Groups",
    "typeScriptTag": "placementGroups",
    "description": "Delete a PlacementGroup",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "PlacementGroup deleted"
      }
    ]
  },
  {
    "url": "/placement_groups/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement Groups",
    "typeScriptTag": "placementGroups",
    "description": "Get a PlacementGroup",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/placement_groups/{id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Placement Groups",
    "typeScriptTag": "placementGroups",
    "description": "Update a PlacementGroup",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      },
      {
        "name": "labels",
        "schema": "object",
        "description": "",
        "example": {
          "labelkey": "value"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "my Placement Group"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/pricing",
    "method": "getAllPrices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pricing",
    "typeScriptTag": "pricing",
    "description": "Get all prices",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/primary_ips",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Primary IPs",
    "typeScriptTag": "primaryIPs",
    "description": "Get all Primary IPs",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n"
      },
      {
        "name": "labelSelector",
        "schema": "string",
        "required": false,
        "description": "Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"[Label Selector](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": false,
        "description": "Can be used to filter resources by their ip. The response will only contain the resources matching the specified ip.",
        "example": "127.0.0.1"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
        "default": 25
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/primary_ips",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Primary IPs",
    "typeScriptTag": "primaryIPs",
    "description": "Create a Primary IP",
    "parameters": [
      {
        "name": "assignee_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 17
      },
      {
        "name": "assignee_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "server"
      },
      {
        "name": "auto_delete",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "datacenter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "fsn1-dc8"
      },
      {
        "name": "labels",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "labelkey": "value"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-ip"
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
        "description": ""
      }
    ]
  },
  {
    "url": "/primary_ips/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Primary IP Actions",
    "typeScriptTag": "primaryIpActions",
    "description": "Get all Actions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "Filter the actions by ID. Can be used multiple times. The response will only contain\nactions matching the specified IDs.\n",
        "example": 42
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/primary_ips/actions/{id}",
    "method": "getActionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Primary IP Actions",
    "typeScriptTag": "primaryIpActions",
    "description": "Get an Action",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/primary_ips/{id}",
    "method": "deletePrimaryIp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Primary IPs",
    "typeScriptTag": "primaryIPs",
    "description": "Delete a Primary IP",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Primary IP deleted"
      }
    ]
  },
  {
    "url": "/primary_ips/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Primary IPs",
    "typeScriptTag": "primaryIPs",
    "description": "Get a Primary IP",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/primary_ips/{id}",
    "method": "updateIpLabels",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Primary IPs",
    "typeScriptTag": "primaryIPs",
    "description": "Update a Primary IP",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      },
      {
        "name": "auto_delete",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "labels",
        "schema": "object",
        "description": "",
        "example": {
          "labelkey": "value"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "my-ip"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/primary_ips/{id}/actions/assign",
    "method": "assignPrimaryIpToResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Primary IP Actions",
    "typeScriptTag": "primaryIpActions",
    "description": "Assign a Primary IP to a resource",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Primary IP",
        "example": 0
      },
      {
        "name": "assignee_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4711
      },
      {
        "name": "assignee_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "server"
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
    "url": "/primary_ips/{id}/actions/change_dns_ptr",
    "method": "changeDnsPtr",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Primary IP Actions",
    "typeScriptTag": "primaryIpActions",
    "description": "Change reverse DNS entry for a Primary IP",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Primary IP",
        "example": 0
      },
      {
        "name": "dns_ptr",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "server02.example.com"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1.2.3.4"
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
    "url": "/primary_ips/{id}/actions/change_protection",
    "method": "changeProtectionPrimaryIp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Primary IP Actions",
    "typeScriptTag": "primaryIpActions",
    "description": "Change Primary IP Protection",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Primary IP",
        "example": 0
      },
      {
        "name": "delete",
        "schema": "boolean",
        "description": "",
        "example": true
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
    "url": "/primary_ips/{id}/actions/unassign",
    "method": "unassignPrimaryIp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Primary IP Actions",
    "typeScriptTag": "primaryIpActions",
    "description": "Unassign a Primary IP from a resource",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Primary IP",
        "example": 0
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
    "url": "/server_types",
    "method": "listAllServerTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Server Types",
    "typeScriptTag": "serverTypes",
    "description": "Get all Server Types",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Can be used to filter Server types by their name. The response will only contain the Server type matching the specified name."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/server_types/{id}",
    "method": "getServerType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Server Types",
    "typeScriptTag": "serverTypes",
    "description": "Get a Server Type",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of Server Type",
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
    "url": "/servers",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Servers",
    "typeScriptTag": "servers",
    "description": "Get all Servers",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n"
      },
      {
        "name": "labelSelector",
        "schema": "string",
        "required": false,
        "description": "Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"[Label Selector](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort resources by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Can be used multiple times. The response will only contain Server matching the status"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/servers",
    "method": "createServerAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Servers",
    "typeScriptTag": "servers",
    "description": "Create a Server",
    "parameters": [
      {
        "name": "automount",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "datacenter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "nbg1-dc3"
      },
      {
        "name": "firewalls",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "firewall": 38
          }
        ]
      },
      {
        "name": "image",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ubuntu-20.04"
      },
      {
        "name": "labels",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "nbg1"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-server"
      },
      {
        "name": "networks",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          456
        ]
      },
      {
        "name": "placement_group",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "public_net",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "server_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cx11"
      },
      {
        "name": "ssh_keys",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "my-ssh-key"
        ]
      },
      {
        "name": "start_after_create",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "user_data",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "#cloud-config\nruncmd:\n- [touch, /root/cloud-init-worked]\n"
      },
      {
        "name": "volumes",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          123
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
    "url": "/servers/actions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Get all Actions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "Filter the actions by ID. Can be used multiple times. The response will only contain\nactions matching the specified IDs.\n",
        "example": 42
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/servers/actions/{id}",
    "method": "getActionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Get an Action",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/servers/{id}",
    "method": "deleteServer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Servers",
    "typeScriptTag": "servers",
    "description": "Delete a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
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
    "url": "/servers/{id}",
    "method": "getServer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Servers",
    "typeScriptTag": "servers",
    "description": "Get a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
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
    "url": "/servers/{id}",
    "method": "updateServer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Servers",
    "typeScriptTag": "servers",
    "description": "Update a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "labels",
        "schema": "object",
        "description": "",
        "example": {
          "labelkey": "value"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "my-server"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/servers/{id}/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Get all Actions for a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Resource.",
        "example": 42
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/servers/{id}/actions/add_to_placement_group",
    "method": "addToPlacementGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Add a Server to a Placement Group",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "placement_group",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1
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
    "url": "/servers/{id}/actions/attach_iso",
    "method": "attachIsoToServer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Attach an ISO to a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "iso",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FreeBSD-11.0-RELEASE-amd64-dvd1"
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
    "url": "/servers/{id}/actions/attach_to_network",
    "method": "attachToNetwork",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Attach a Server to a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "alias_ips",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "10.0.1.2"
        ]
      },
      {
        "name": "ip",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10.0.1.1"
      },
      {
        "name": "network",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4711
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
    "url": "/servers/{id}/actions/change_alias_ips",
    "method": "changeAliasIps",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Change alias IPs of a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "alias_ips",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "10.0.1.2"
        ]
      },
      {
        "name": "network",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4711
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
    "url": "/servers/{id}/actions/change_dns_ptr",
    "method": "changeDnsPtr",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Change reverse DNS entry for this Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "dns_ptr",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "server01.example.com"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1.2.3.4"
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
    "url": "/servers/{id}/actions/change_protection",
    "method": "changeProtection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Change Server Protection",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "delete",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "rebuild",
        "schema": "boolean",
        "description": "",
        "example": true
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
    "url": "/servers/{id}/actions/change_type",
    "method": "changeServerType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Change the Type of a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "server_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "cx11"
      },
      {
        "name": "upgrade_disk",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
    "url": "/servers/{id}/actions/create_image",
    "method": "createImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Create Image from a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "my image"
      },
      {
        "name": "labels",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "snapshot",
        "default": "snapshot"
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
    "url": "/servers/{id}/actions/detach_from_network",
    "method": "detachFromNetwork",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Detach a Server from a Network",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "network",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4711
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
    "url": "/servers/{id}/actions/detach_iso",
    "method": "detachIsoFromServer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Detach an ISO from a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
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
    "url": "/servers/{id}/actions/disable_backup",
    "method": "disableBackup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Disable Backups for a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
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
    "url": "/servers/{id}/actions/disable_rescue",
    "method": "disableRescueMode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Disable Rescue Mode for a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
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
    "url": "/servers/{id}/actions/enable_backup",
    "method": "enableBackup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Enable and Configure Backups for a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
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
    "url": "/servers/{id}/actions/enable_rescue",
    "method": "enableRescueMode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Enable Rescue Mode for a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "ssh_keys",
        "schema": "array",
        "description": "",
        "example": [
          2323
        ]
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "linux64"
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
    "url": "/servers/{id}/actions/poweroff",
    "method": "powerOffServer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Power off a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
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
    "url": "/servers/{id}/actions/poweron",
    "method": "powerOnServer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Power on a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
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
    "url": "/servers/{id}/actions/reboot",
    "method": "softRebootServer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Soft-reboot a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
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
    "url": "/servers/{id}/actions/rebuild",
    "method": "rebuildServerFromImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Rebuild a Server from an Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "image",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ubuntu-20.04"
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
    "url": "/servers/{id}/actions/remove_from_placement_group",
    "method": "removeFromPlacementGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Remove from Placement Group",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
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
    "url": "/servers/{id}/actions/request_console",
    "method": "requestConsole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Request Console for a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
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
    "url": "/servers/{id}/actions/reset",
    "method": "resetServer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Reset a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
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
    "url": "/servers/{id}/actions/reset_password",
    "method": "resetServerPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Reset root Password of a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
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
    "url": "/servers/{id}/actions/shutdown",
    "method": "gracefulShutdown",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Shutdown a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
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
    "url": "/servers/{id}/actions/{action_id}",
    "method": "getActionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Server Actions",
    "typeScriptTag": "serverActions",
    "description": "Get an Action for a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action",
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
    "url": "/servers/{id}/metrics",
    "method": "getMetricsForServer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Servers",
    "typeScriptTag": "servers",
    "description": "Get Metrics for a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Server",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of metrics to get",
        "example": "TYPE"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Start of period to get Metrics for (in ISO-8601 format)",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "End of period to get Metrics for (in ISO-8601 format)",
        "example": "END"
      },
      {
        "name": "step",
        "schema": "string",
        "required": false,
        "description": "Resolution of results in seconds"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ssh_keys",
    "method": "getAllSshKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SSH Keys",
    "typeScriptTag": "sshKeys",
    "description": "Get all SSH keys",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Can be used multiple times."
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n"
      },
      {
        "name": "fingerprint",
        "schema": "string",
        "required": false,
        "description": "Can be used to filter SSH keys by their fingerprint. The response will only contain the SSH key matching the specified fingerprint."
      },
      {
        "name": "labelSelector",
        "schema": "string",
        "required": false,
        "description": "Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"[Label Selector](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/ssh_keys",
    "method": "createKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SSH Keys",
    "typeScriptTag": "sshKeys",
    "description": "Create an SSH key",
    "parameters": [
      {
        "name": "labels",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My ssh key"
      },
      {
        "name": "public_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ssh-rsa AAAjjk76kgf...Xt"
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
    "url": "/ssh_keys/{id}",
    "method": "deleteKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SSH Keys",
    "typeScriptTag": "sshKeys",
    "description": "Delete an SSH key",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the SSH key",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "SSH key deleted"
      }
    ]
  },
  {
    "url": "/ssh_keys/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SSH Keys",
    "typeScriptTag": "sshKeys",
    "description": "Get a SSH key",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the SSH key",
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
    "url": "/ssh_keys/{id}",
    "method": "updateKey",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "SSH Keys",
    "typeScriptTag": "sshKeys",
    "description": "Update an SSH key",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the SSH key",
        "example": 0
      },
      {
        "name": "labels",
        "schema": "object",
        "description": "",
        "example": {
          "labelkey": "value"
        }
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "My ssh key"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/volumes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Volumes",
    "typeScriptTag": "volumes",
    "description": "Get all Volumes",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Can be used multiple times. The response will only contain Volumes matching the status."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort resources by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter resources by their name. The response will only contain the resources\nmatching the specified name.\n"
      },
      {
        "name": "labelSelector",
        "schema": "string",
        "required": false,
        "description": "Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"[Label Selector](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/volumes",
    "method": "createVolume",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Volumes",
    "typeScriptTag": "volumes",
    "description": "Create a Volume",
    "parameters": [
      {
        "name": "automount",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "xfs"
      },
      {
        "name": "labels",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "labelkey": "value"
        }
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "nbg1"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "databases-storage"
      },
      {
        "name": "server",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 42
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
    "url": "/volumes/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Volume Actions",
    "typeScriptTag": "volumeActions",
    "description": "Get all Actions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "Filter the actions by ID. Can be used multiple times. The response will only contain\nactions matching the specified IDs.\n",
        "example": 42
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/volumes/actions/{id}",
    "method": "getActionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Volume Actions",
    "typeScriptTag": "volumeActions",
    "description": "Get an Action",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action.",
        "example": 42
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/volumes/{id}",
    "method": "deleteVolume",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Volumes",
    "typeScriptTag": "volumes",
    "description": "Delete a Volume",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Volume",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Volume deleted"
      }
    ]
  },
  {
    "url": "/volumes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Volumes",
    "typeScriptTag": "volumes",
    "description": "Get a Volume",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Volume",
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
    "url": "/volumes/{id}",
    "method": "updateVolumeProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Volumes",
    "typeScriptTag": "volumes",
    "description": "Update a Volume",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Volume to update",
        "example": 0
      },
      {
        "name": "labels",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "database-storage"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/volumes/{id}/actions",
    "method": "getAllActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Volume Actions",
    "typeScriptTag": "volumeActions",
    "description": "Get all Actions for a Volume",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Volume",
        "example": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"[Sorting](https://docs.hetzner.cloud)\".\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to return. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 2,
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of entries returned per page. For more information, see \"[Pagination](https://docs.hetzner.cloud)\".",
        "example": 25,
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
    "url": "/volumes/{id}/actions/attach",
    "method": "attachVolumeToServer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Volume Actions",
    "typeScriptTag": "volumeActions",
    "description": "Attach Volume to a Server",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Volume",
        "example": 0
      },
      {
        "name": "automount",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "server",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 43
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
    "url": "/volumes/{id}/actions/change_protection",
    "method": "changeProtectionVolume",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Volume Actions",
    "typeScriptTag": "volumeActions",
    "description": "Change Volume Protection",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Volume",
        "example": 0
      },
      {
        "name": "delete",
        "schema": "boolean",
        "description": "",
        "example": true
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
    "url": "/volumes/{id}/actions/detach",
    "method": "detachVolumeFromServer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Volume Actions",
    "typeScriptTag": "volumeActions",
    "description": "Detach Volume",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Volume",
        "example": 0
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
    "url": "/volumes/{id}/actions/resize",
    "method": "changeSize",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Volume Actions",
    "typeScriptTag": "volumeActions",
    "description": "Resize Volume",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Volume",
        "example": 0
      },
      {
        "name": "size",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 50
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
    "url": "/volumes/{id}/actions/{action_id}",
    "method": "getAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Volume Actions",
    "typeScriptTag": "volumeActions",
    "description": "Get an Action for a Volume",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the Volume",
        "example": 0
      },
      {
        "name": "actionId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Action",
        "example": 0
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
      apiTitle="Hetzner Cloud API"
      apiBaseUrl="https://api.hetzner.cloud/v1"
      apiVersion="1.0.0"
      endpoints={130}
      sdkMethods={162}
      schemas={232}
      parameters={478}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hetzner/openapi.yaml"
    />
  );
}
  