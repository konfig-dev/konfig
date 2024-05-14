import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ZendeskTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="zendesk-typescript-sdk"
      metaDescription={`Zendesk started the customer experience revolution in 2007 by enabling any business around the world to take their customer service online. Today, Zendesk is the champion of great service everywhere for everyone, and powers billions of conversations, connecting more than 100,000 brands with hundreds of millions of customers over telephony, chat, email, messaging, social channels, communities, review sites and help centers. Zendesk products are built with love to be loved. The company was conceived in Copenhagen, Denmark, built and grown in California, taken public in New York City, and today employs more than 4,000 people across the world.`}
      company="Zendesk"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zendesk/logo.png"
      companyKebabCase="zendesk"
      clientNameCamelCase="zendesk"
      homepage="zendesk.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zendesk/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zendesk/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["customer_service","help_desks","customer_support"]}
      methods={[
  {
    "url": "/api/lotus/assignables/autocomplete.json",
    "method": "listMatching",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AssigneeFieldAssignableGroups",
    "typeScriptTag": "assigneeFieldAssignableGroups",
    "description": "List assignable groups and agents based on query matched against name",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Query string used to search assignable groups & agents in the AssigneeField",
        "example": "Johnny Agent"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/lotus/assignables/groups.json",
    "method": "listGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AssigneeFieldAssignableAgents",
    "typeScriptTag": "assigneeFieldAssignableAgents",
    "description": "List assignable groups on the AssigneeField",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/lotus/assignables/groups/{group_id}/agents.json",
    "method": "listFromGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AssigneeFieldAssignableAgents",
    "typeScriptTag": "assigneeFieldAssignableAgents",
    "description": "List assignable agents from a group on the AssigneeField",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the group",
        "example": 122
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/{target_type}/{target_id}/relationship_fields/{field_id}/{source_type}",
    "method": "getSourcesByTarget",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lookup Relationships",
    "typeScriptTag": "lookupRelationships",
    "description": "Get sources by target",
    "parameters": [
      {
        "name": "targetType",
        "schema": "string",
        "required": true,
        "description": "The type of object the relationship field is targeting.\nThe options are \"zen:user\", \"zen:ticket\", \"zen:organization\", and \"zen:custom_object:CUSTOM_OBJECT_KEY\"\n",
        "example": "zen:custom_object:apartment"
      },
      {
        "name": "targetId",
        "schema": "integer",
        "required": true,
        "description": "The id of the object the relationship field is targeting\n",
        "example": 1234
      },
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "The id of the lookup relationship field\n",
        "example": 1234
      },
      {
        "name": "sourceType",
        "schema": "string",
        "required": true,
        "description": "The type of object the relationship field belongs to (example. ticket field belongs to a ticket object).\nThe options are \"zen:user\", \"zen:ticket\", \"zen:organization\", and \"zen:custom_object:CUSTOM_OBJECT_KEY\"\n",
        "example": "zen:custom_object:apartment"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/account/settings",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Settings",
    "typeScriptTag": "accountSettings",
    "description": "Show Settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/account/settings",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account Settings",
    "typeScriptTag": "accountSettings",
    "description": "Update Account Settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/accounts",
    "method": "createTrialAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Create Trial Account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/accounts/available",
    "method": "checkSubdomainAvailability",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Verify Subdomain Availability",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "Specify the name of the subdomain you want to verify. The name can't contain underscores, hyphens, or spaces.\n",
        "example": "z3ndesk"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/activities",
    "method": "listActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activity Stream",
    "typeScriptTag": "activityStream",
    "description": "List Activities",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/activities/{activity_id}",
    "method": "showSpecificActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activity Stream",
    "typeScriptTag": "activityStream",
    "description": "Show Activity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/activities/count",
    "method": "getAgentActivitiesCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activity Stream",
    "typeScriptTag": "activityStream",
    "description": "Count Activities",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/any_channel/channelback/report_error",
    "method": "reportError",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Channel Framework",
    "typeScriptTag": "channelFramework",
    "description": "Report Channelback Error to Zendesk",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/any_channel/push",
    "method": "pushContentSupport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Channel Framework",
    "typeScriptTag": "channelFramework",
    "description": "Push Content to Support",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/any_channel/validate_token",
    "method": "validateToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Channel Framework",
    "typeScriptTag": "channelFramework",
    "description": "Validate Token",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/attachments/{attachment_id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Show Attachment",
    "parameters": [
      {
        "name": "attachmentId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the attachment",
        "example": 498483
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/attachments/{attachment_id}",
    "method": "updateMalwareAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Update Attachment for Malware",
    "parameters": [
      {
        "name": "attachmentId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the attachment",
        "example": 498483
      },
      {
        "name": "attachment",
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
    "url": "/api/v2/audit_logs",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit Logs",
    "typeScriptTag": "auditLogs",
    "description": "List Audit Logs",
    "parameters": [
      {
        "name": "filter[sourceType]",
        "schema": "string",
        "description": "Filter audit logs by the source type. For example, user or rule"
      },
      {
        "name": "filter[sourceId]",
        "schema": "integer",
        "description": "Filter audit logs by the source id. Requires `filter[source_type]` to also be set"
      },
      {
        "name": "filter[actorId]",
        "schema": "integer",
        "description": "Filter audit logs by the actor id"
      },
      {
        "name": "filter[ipAddress]",
        "schema": "string",
        "description": "Filter audit logs by the ip address"
      },
      {
        "name": "filter[createdAt]",
        "schema": "string",
        "description": "Filter audit logs by the time of creation. When used, you must specify `filter[created_at]` twice in your request, first with the start time and again with an end time"
      },
      {
        "name": "filter[action]",
        "schema": "string",
        "description": "Filter audit logs by the action"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Offset pagination only. Sort audit logs. Default is `sort_by=created_at`"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Offset pagination only. Sort audit logs. Default is `sort_order=desc`"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Cursor pagination only. Sort audit logs. Default is `sort=-created_at`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/audit_logs/{audit_log_id}",
    "method": "showLogById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit Logs",
    "typeScriptTag": "auditLogs",
    "description": "Show Audit Log",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/audit_logs/export",
    "method": "exportLogs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Audit Logs",
    "typeScriptTag": "auditLogs",
    "description": "Export Audit Logs",
    "parameters": [
      {
        "name": "filter[sourceType]",
        "schema": "string",
        "description": "Filter audit logs by the source type. For example, user or rule"
      },
      {
        "name": "filter[sourceId]",
        "schema": "integer",
        "description": "Filter audit logs by the source id. Requires `filter[source_type]` to also be set."
      },
      {
        "name": "filter[actorId]",
        "schema": "integer",
        "description": "Filter audit logs by the actor id"
      },
      {
        "name": "filter[ipAddress]",
        "schema": "string",
        "description": "Filter audit logs by the ip address"
      },
      {
        "name": "filter[createdAt]",
        "schema": "string",
        "description": "Filter audit logs by the time of creation. When used, you must specify `filter[created_at]` twice in your request, first with the start time and again with an end time"
      },
      {
        "name": "filter[action]",
        "schema": "string",
        "description": "Filter audit logs by the action"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/autocomplete/tags",
    "method": "searchTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Search Tags",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/automations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Automations",
    "typeScriptTag": "automations",
    "description": "List Automations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/automations",
    "method": "createNewAutomation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Automations",
    "typeScriptTag": "automations",
    "description": "Create Automation",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/automations/{automation_id}",
    "method": "deleteAutomation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Automations",
    "typeScriptTag": "automations",
    "description": "Delete Automation",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/automations/{automation_id}",
    "method": "show",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Automations",
    "typeScriptTag": "automations",
    "description": "Show Automation",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/automations/{automation_id}",
    "method": "updateAutomation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Automations",
    "typeScriptTag": "automations",
    "description": "Update Automation",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/automations/active",
    "method": "listActive",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Automations",
    "typeScriptTag": "automations",
    "description": "List Active Automations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/automations/destroy_many",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Automations",
    "typeScriptTag": "automations",
    "description": "Bulk Delete Automations",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "description": "The IDs of the automations to delete"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/automations/search",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Automations",
    "typeScriptTag": "automations",
    "description": "Search Automations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/automations/update_many",
    "method": "updateMany",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Automations",
    "typeScriptTag": "automations",
    "description": "Update Many Automations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/bookmarks",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bookmarks",
    "typeScriptTag": "bookmarks",
    "description": "List Bookmarks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/bookmarks",
    "method": "createNewBookmark",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bookmarks",
    "typeScriptTag": "bookmarks",
    "description": "Create Bookmark",
    "parameters": [
      {
        "name": "bookmark",
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
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/bookmarks/{bookmark_id}",
    "method": "deleteBookmarkById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bookmarks",
    "typeScriptTag": "bookmarks",
    "description": "Delete Bookmark",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/api/v2/brands",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brands",
    "typeScriptTag": "brands",
    "description": "List Brands",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/brands",
    "method": "createNewBrand",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brands",
    "typeScriptTag": "brands",
    "description": "Create Brand",
    "parameters": [
      {
        "name": "brand",
        "schema": "object",
        "description": "",
        "example": {
          "active": true,
          "brand_url": "https://brand1.com",
          "created_at": "2012-04-02T22:55:29Z",
          "default": true,
          "has_help_center": true,
          "help_center_state": "enabled",
          "host_mapping": "brand1.com",
          "id": 47,
          "logo": {
            "content_type": "image/png",
            "content_url": "https://company.zendesk.com/logos/brand1_logo.png",
            "file_name": "brand1_logo.png",
            "id": 928374,
            "size": 166144,
            "thumbnails": [
              {
                "content_type": "image/png",
                "content_url": "https://company.zendesk.com/photos/brand1_logo_thumb.png",
                "file_name": "brand1_logo_thumb.png",
                "id": 928375,
                "mapped_content_url": "https://company.com/photos/brand1_logo_thumb.png",
                "size": 58298,
                "url": "https://company.zendesk.com/api/v2/attachments/928375.json"
              },
              {
                "content_type": "image/png",
                "content_url": "https://company.zendesk.com/photos/brand1_logo_small.png",
                "file_name": "brand1_logo_small.png",
                "id": 928376,
                "mapped_content_url": "https://company.com/photos/brand1_logo_small.png",
                "size": 58298,
                "url": "https://company.zendesk.com/api/v2/attachments/928376.json"
              }
            ],
            "url": "https://company.zendesk.com/api/v2/attachments/928374.json"
          },
          "name": "Brand 1",
          "signature_template": "{{agent.signature}}",
          "subdomain": "brand1",
          "ticket_form_ids": [
            47,
            33,
            22
          ],
          "updated_at": "2012-04-02T22:55:29Z",
          "url": "https://company.zendesk.com/api/v2/brands/47.json"
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
    "url": "/api/v2/brands/{brand_id}",
    "method": "deleteBrand",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Brands",
    "typeScriptTag": "brands",
    "description": "Delete a Brand",
    "parameters": [
      {
        "name": "brandId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the brand",
        "example": 360002783572
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/brands/{brand_id}",
    "method": "showBrand",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brands",
    "typeScriptTag": "brands",
    "description": "Show a Brand",
    "parameters": [
      {
        "name": "brandId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the brand",
        "example": 360002783572
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/brands/{brand_id}",
    "method": "updateBrand",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Brands",
    "typeScriptTag": "brands",
    "description": "Update a Brand",
    "parameters": [
      {
        "name": "brandId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the brand",
        "example": 360002783572
      },
      {
        "name": "brand",
        "schema": "object",
        "description": "",
        "example": {
          "active": true,
          "brand_url": "https://brand1.com",
          "created_at": "2012-04-02T22:55:29Z",
          "default": true,
          "has_help_center": true,
          "help_center_state": "enabled",
          "host_mapping": "brand1.com",
          "id": 47,
          "logo": {
            "content_type": "image/png",
            "content_url": "https://company.zendesk.com/logos/brand1_logo.png",
            "file_name": "brand1_logo.png",
            "id": 928374,
            "size": 166144,
            "thumbnails": [
              {
                "content_type": "image/png",
                "content_url": "https://company.zendesk.com/photos/brand1_logo_thumb.png",
                "file_name": "brand1_logo_thumb.png",
                "id": 928375,
                "mapped_content_url": "https://company.com/photos/brand1_logo_thumb.png",
                "size": 58298,
                "url": "https://company.zendesk.com/api/v2/attachments/928375.json"
              },
              {
                "content_type": "image/png",
                "content_url": "https://company.zendesk.com/photos/brand1_logo_small.png",
                "file_name": "brand1_logo_small.png",
                "id": 928376,
                "mapped_content_url": "https://company.com/photos/brand1_logo_small.png",
                "size": 58298,
                "url": "https://company.zendesk.com/api/v2/attachments/928376.json"
              }
            ],
            "url": "https://company.zendesk.com/api/v2/attachments/928374.json"
          },
          "name": "Brand 1",
          "signature_template": "{{agent.signature}}",
          "subdomain": "brand1",
          "ticket_form_ids": [
            47,
            33,
            22
          ],
          "updated_at": "2012-04-02T22:55:29Z",
          "url": "https://company.zendesk.com/api/v2/brands/47.json"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/brands/{brand_id}/check_host_mapping",
    "method": "checkHostMappingValidity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brands",
    "typeScriptTag": "brands",
    "description": "Check Host Mapping Validity for an Existing Brand",
    "parameters": [
      {
        "name": "brandId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the brand",
        "example": 360002783572
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/brands/check_host_mapping",
    "method": "checkHostMappingValidity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brands",
    "typeScriptTag": "brands",
    "description": "Check Host Mapping Validity",
    "parameters": [
      {
        "name": "hostMapping",
        "schema": "string",
        "required": true,
        "description": "The hostmapping to a brand, if any (only admins view this key)",
        "example": "brand1.com"
      },
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "Subdomain for a given Zendesk account address",
        "example": "Brand1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/channels/twitter/monitored_twitter_handles",
    "method": "listMonitoredHandles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "X Channel",
    "typeScriptTag": "xChannel",
    "description": "List Monitored X Handles",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/channels/twitter/monitored_twitter_handles/{monitored_twitter_handle_id}",
    "method": "showMonitoredHandle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "X Channel",
    "typeScriptTag": "xChannel",
    "description": "Show Monitored X Handle",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/channels/twitter/tickets",
    "method": "tweetToTicket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "X Channel",
    "typeScriptTag": "xChannel",
    "description": "Create Ticket from Tweet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/channels/twitter/tickets/{comment_id}/statuses",
    "method": "listTicketStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "X Channel",
    "typeScriptTag": "xChannel",
    "description": "List Ticket statuses",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Optional comment ids to retrieve tweet information for only particular comments",
        "example": "1,3,5"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/channels/voice/agents/{agent_id}/tickets/{ticket_id}/display",
    "method": "openAgentTicketDisplay",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Basics",
    "typeScriptTag": "basics",
    "description": "Open Ticket in Agent's Browser",
    "parameters": [
      {
        "name": "agentId",
        "schema": "integer",
        "required": true,
        "description": "ID of an agent",
        "example": 0
      },
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "empty"
      },
      {
        "statusCode": "404",
        "description": "Invalid attribute"
      }
    ]
  },
  {
    "url": "/api/v2/channels/voice/agents/{agent_id}/users/{user_id}/display",
    "method": "openUserProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Basics",
    "typeScriptTag": "basics",
    "description": "Open a User's Profile in an Agent's Browser",
    "parameters": [
      {
        "name": "agentId",
        "schema": "integer",
        "required": true,
        "description": "ID of an agent",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "The id of the user",
        "example": 35436
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "empty"
      },
      {
        "statusCode": "404",
        "description": "Invalid attribute"
      }
    ]
  },
  {
    "url": "/api/v2/channels/voice/tickets",
    "method": "createVoiceTicket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Basics",
    "typeScriptTag": "basics",
    "description": "Create Ticket or Voicemail Ticket",
    "parameters": [
      {
        "name": "agentId",
        "schema": "integer",
        "required": true,
        "description": "ID of an agent",
        "example": 0
      },
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      },
      {
        "name": "display_to_agent",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ticket",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Invalid attribute"
      }
    ]
  },
  {
    "url": "/api/v2/chat_file_redactions/{ticket_id}",
    "method": "redactAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ticket Comments",
    "typeScriptTag": "ticketComments",
    "description": "Redact Chat Comment Attachment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/chat_redactions/{ticket_id}",
    "method": "redactChatComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ticket Comments",
    "typeScriptTag": "ticketComments",
    "description": "Redact Chat Comment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/comment_redactions/{ticket_comment_id}",
    "method": "redactCommentInWorkspace",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ticket Comments",
    "typeScriptTag": "ticketComments",
    "description": "Redact Ticket Comment In Agent Workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects",
    "method": "listUndeleted",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Objects",
    "typeScriptTag": "customObjects",
    "description": "List Custom Objects",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects",
    "method": "createCustomObjectRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Objects",
    "typeScriptTag": "customObjects",
    "description": "Create Custom Object",
    "parameters": [
      {
        "name": "custom_object",
        "schema": "object",
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
    "url": "/api/v2/custom_objects/{custom_object_key}",
    "method": "deleteObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Objects",
    "typeScriptTag": "customObjects",
    "description": "Delete Custom Object",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content response"
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}",
    "method": "getByKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Objects",
    "typeScriptTag": "customObjects",
    "description": "Show Custom Object",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}",
    "method": "updateObjectProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Custom Objects",
    "typeScriptTag": "customObjects",
    "description": "Update Custom Object",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}/fields",
    "method": "listUndeleted",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Object Fields",
    "typeScriptTag": "customObjectFields",
    "description": "List Custom Object Fields",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "includeStandardFields",
        "schema": "boolean",
        "description": "Include standard fields if true. Exclude them if false",
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
    "url": "/api/v2/custom_objects/{custom_object_key}/fields",
    "method": "createField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Object Fields",
    "typeScriptTag": "customObjectFields",
    "description": "Create Custom Object Field",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "custom_object_field",
        "schema": "object",
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
    "url": "/api/v2/custom_objects/{custom_object_key}/fields/{custom_object_field_key_or_id}",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Object Fields",
    "typeScriptTag": "customObjectFields",
    "description": "Delete Custom Object Field",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "customObjectFieldKeyOrId",
        "schema": "string",
        "required": true,
        "description": "The key or id of a custom object field",
        "example": "make"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content response"
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}/fields/{custom_object_field_key_or_id}",
    "method": "getFieldInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Object Fields",
    "typeScriptTag": "customObjectFields",
    "description": "Show Custom Object Field",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "customObjectFieldKeyOrId",
        "schema": "string",
        "required": true,
        "description": "The key or id of a custom object field",
        "example": "make"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}/fields/{custom_object_field_key_or_id}",
    "method": "updateField",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Custom Object Fields",
    "typeScriptTag": "customObjectFields",
    "description": "Update Custom Object Field",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "customObjectFieldKeyOrId",
        "schema": "string",
        "required": true,
        "description": "The key or id of a custom object field",
        "example": "make"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}/fields/reorder",
    "method": "reorderFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Object Fields",
    "typeScriptTag": "customObjectFields",
    "description": "Reorder Custom Fields of an Object",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}/jobs",
    "method": "createBulkJobs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Object Records",
    "typeScriptTag": "customObjectRecords",
    "description": "Custom Object Record Bulk Jobs",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "job",
        "schema": "object",
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
    "url": "/api/v2/custom_objects/{custom_object_key}/limits/field_limit",
    "method": "getFieldLimit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Object Fields",
    "typeScriptTag": "customObjectFields",
    "description": "Custom Object Fields Limit",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}/records",
    "method": "deleteByExternalId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Object Records",
    "typeScriptTag": "customObjectRecords",
    "description": "Delete Custom Object Record by External Id",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "The external id of a custom object record",
        "example": "X90001"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content response"
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}/records",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Object Records",
    "typeScriptTag": "customObjectRecords",
    "description": "List Custom Object Records",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "filter[ids]",
        "schema": "string",
        "description": "Optional comma-separated list of ids to filter records by. If one or more ids are specified, only matching records are returned. The ids must be unique and are case sensitive."
      },
      {
        "name": "filter[externalIds]",
        "schema": "string",
        "description": "Optional comma-separated list of external ids to filter records by. If one or more ids are specified, only matching records are returned. The ids must be unique and are case sensitive."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "One of `id`, `updated_at`, `-id`, or `-updated_at`. The `-` denotes the sort will be descending.\n"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "description": "A [pagination cursor](https://developer.zendesk.com) that tells the endpoint which page to start on. It should be a `meta.before_cursor` value from a previous request. Note: `page[before]` and `page[after]` can't be used together in the same request.\n"
      },
      {
        "name": "page[after]",
        "schema": "string",
        "description": "A [pagination cursor](https://developer.zendesk.com) that tells the endpoint which page to start on. It should be a `meta.after_cursor` value from a previous request. Note: `page[before]` and `page[after]` can't be used together in the same request.\n"
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "Specifies how many records should be returned in the response. You can specify up to 100 records per page.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}/records",
    "method": "setByExternalId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Custom Object Records",
    "typeScriptTag": "customObjectRecords",
    "description": "Set Custom Object Record by External Id",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "The external id of a custom object record",
        "example": "X90001"
      },
      {
        "name": "custom_object_record",
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
    "url": "/api/v2/custom_objects/{custom_object_key}/records",
    "method": "createNewRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Object Records",
    "typeScriptTag": "customObjectRecords",
    "description": "Create Custom Object Record",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "custom_object_record",
        "schema": "object",
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
    "url": "/api/v2/custom_objects/{custom_object_key}/records/{custom_object_record_id}",
    "method": "deleteRecordById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Object Records",
    "typeScriptTag": "customObjectRecords",
    "description": "Delete Custom Object Record",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "customObjectRecordId",
        "schema": "string",
        "required": true,
        "description": "The id of a custom object record",
        "example": "01GCSJW391QVSC80GYDH7E93Q6"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content response"
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}/records/{custom_object_record_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Object Records",
    "typeScriptTag": "customObjectRecords",
    "description": "Show Custom Object Record",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "customObjectRecordId",
        "schema": "string",
        "required": true,
        "description": "The id of a custom object record",
        "example": "01GCSJW391QVSC80GYDH7E93Q6"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}/records/{custom_object_record_id}",
    "method": "updateFields",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Custom Object Records",
    "typeScriptTag": "customObjectRecords",
    "description": "Update Custom Object Record",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "customObjectRecordId",
        "schema": "string",
        "required": true,
        "description": "The id of a custom object record",
        "example": "01GCSJW391QVSC80GYDH7E93Q6"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}/records/autocomplete",
    "method": "autocompleteSearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Object Records",
    "typeScriptTag": "customObjectRecords",
    "description": "Autocomplete Custom Object Record Search",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Part of a name of the record you are searching for"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "description": "A [pagination cursor](https://developer.zendesk.com) that tells the endpoint which page to start on. It should be a `meta.before_cursor` value from a previous request. Note: `page[before]` and `page[after]` can't be used together in the same request.\n"
      },
      {
        "name": "page[after]",
        "schema": "string",
        "description": "A [pagination cursor](https://developer.zendesk.com) that tells the endpoint which page to start on. It should be a `meta.after_cursor` value from a previous request. Note: `page[before]` and `page[after]` can't be used together in the same request.\n"
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of records to return in the response. You can specify up to 100 records per page.\n"
      },
      {
        "name": "fieldId",
        "schema": "string",
        "description": "The id of the lookup field. If the field has a relationship filter, the filter is applied to the results. Must be used with `source` param.\n"
      },
      {
        "name": "source",
        "schema": "string",
        "description": "One of \"zen:user\", \"zen:ticket\", \"zen:organization\", or \"zen:custom_object:CUSTOM_OBJECT_KEY\". Represents the object `field_id` belongs to. Must be used with field_id param.\n"
      },
      {
        "name": "requesterId",
        "schema": "integer",
        "description": "The id of the requester. For use with dynamic filters.\n",
        "example": 264817272
      },
      {
        "name": "assigneeId",
        "schema": "integer",
        "description": "The id of the selected assignee. For use with dynamic filters.\n",
        "example": 7334148660734
      },
      {
        "name": "organizationId",
        "schema": "integer",
        "description": "The id of the organization the requester belongs to. For use with dynamic filters.\n",
        "example": 5633330889598
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}/records/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Object Records",
    "typeScriptTag": "customObjectRecords",
    "description": "Count Custom Object Records",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/{custom_object_key}/records/search",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Object Records",
    "typeScriptTag": "customObjectRecords",
    "description": "Search Custom Object Records",
    "parameters": [
      {
        "name": "customObjectKey",
        "schema": "string",
        "required": true,
        "description": "The key of a custom object",
        "example": "car"
      },
      {
        "name": "query",
        "schema": "string",
        "description": "The query parameter is used to search text-based fields for records that match specific query terms.\nThe query can be multiple words or numbers. Every record that matches the beginning of any word or number in the query string is returned.<br/><br/>\n\nFor example, you might want to search for records related to Tesla vehicles: `query=Tesla`. In this example the API would return every record for the given custom object where any of the text fields contain the word 'Tesla'.<br/><br/>\n\nIf needed, you could include multiple words or numbers in your search. For example: `query=Tesla Honda 2020`. This would be URL encoded as `query=Tesla%20Honda%202020`. In this example, the API would return every record for the custom object for which any of the text fields contained 'Tesla', 'Honda', or '2020'.\n",
        "example": "jdoe"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "One of `name`, `created_at`, `updated_at`, `-name`, `-created_at`, or `-updated_at`. The `-` denotes the sort will be descending. Defaults to sorting by relevance.\n"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "description": "A [pagination cursor](https://developer.zendesk.com) that tells the endpoint which page to start on. It should be a `meta.before_cursor` value from a previous request. Note: `page[before]` and `page[after]` can't be used together in the same request.\n"
      },
      {
        "name": "page[after]",
        "schema": "string",
        "description": "A [pagination cursor](https://developer.zendesk.com) that tells the endpoint which page to start on. It should be a `meta.after_cursor` value from a previous request. Note: `page[before]` and `page[after]` can't be used together in the same request.\n"
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "Specifies how many records should be returned in the response. You can specify up to 100 records per page.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/limits/object_limit",
    "method": "getLimit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Objects",
    "typeScriptTag": "customObjects",
    "description": "Custom Objects Limit",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_objects/limits/record_limit",
    "method": "getLimit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Object Records",
    "typeScriptTag": "customObjectRecords",
    "description": "Custom Object Records Limit",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_roles",
    "method": "listRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Roles",
    "typeScriptTag": "customRoles",
    "description": "List Custom Roles",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_roles",
    "method": "createRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Roles",
    "typeScriptTag": "customRoles",
    "description": "Create Custom Role",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_roles/{custom_role_id}",
    "method": "deleteRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Roles",
    "typeScriptTag": "customRoles",
    "description": "Delete Custom Role",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Contetnt response"
      }
    ]
  },
  {
    "url": "/api/v2/custom_roles/{custom_role_id}",
    "method": "showRole",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Roles",
    "typeScriptTag": "customRoles",
    "description": "Show Custom Role",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_roles/{custom_role_id}",
    "method": "updateRole",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Roles",
    "typeScriptTag": "customRoles",
    "description": "Update Custom Role",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_status/default",
    "method": "bulkUpdateDefault",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Ticket Statuses",
    "typeScriptTag": "customTicketStatuses",
    "description": "Bulk Update Default Custom Ticket Status",
    "parameters": [
      {
        "name": "ids",
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
    "url": "/api/v2/custom_statuses",
    "method": "listUndeleted",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Ticket Statuses",
    "typeScriptTag": "customTicketStatuses",
    "description": "List Custom Ticket Statuses",
    "parameters": [
      {
        "name": "statusCategories",
        "schema": "string",
        "description": "Filter the list of custom ticket statuses by a comma-separated list of status categories"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "If true, show only active custom ticket statuses. If false, show only inactive custom ticket statuses. If the filter is not used, show all custom ticket statuses"
      },
      {
        "name": "default",
        "schema": "boolean",
        "description": "If true, show only default custom ticket statuses. If false, show only non-default custom ticket statuses. If the filter is not used, show all custom ticket statuses"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_statuses",
    "method": "createNewStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Ticket Statuses",
    "typeScriptTag": "customTicketStatuses",
    "description": "Create Custom Ticket Status",
    "parameters": [
      {
        "name": "custom_status",
        "schema": "object",
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
    "url": "/api/v2/custom_statuses/{custom_status_id}",
    "method": "getObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Ticket Statuses",
    "typeScriptTag": "customTicketStatuses",
    "description": "Show Custom Ticket Status",
    "parameters": [
      {
        "name": "customStatusId",
        "schema": "integer",
        "required": true,
        "description": "The id of the custom status",
        "example": 1234567
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/custom_statuses/{custom_status_id}",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Ticket Statuses",
    "typeScriptTag": "customTicketStatuses",
    "description": "Update Custom Ticket Status",
    "parameters": [
      {
        "name": "customStatusId",
        "schema": "integer",
        "required": true,
        "description": "The id of the custom status",
        "example": 1234567
      },
      {
        "name": "custom_status",
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
    "url": "/api/v2/deleted_tickets",
    "method": "listDeleted",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "List Deleted Tickets",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Sort by"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Sort order. Defaults to \"asc\""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/deleted_tickets/{ticket_id}",
    "method": "deletePermanently",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Delete Ticket Permanently",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/deleted_tickets/{ticket_id}/restore",
    "method": "restoreTicket",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Restore a Previously Deleted Ticket",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/deleted_tickets/destroy_many",
    "method": "deleteMany",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Delete Multiple Tickets Permanently",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Comma-separated list of ticket ids",
        "example": "35436,35437"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/deleted_tickets/restore_many",
    "method": "restoreBulkTickets",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Restore Previously Deleted Tickets in Bulk",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Comma-separated list of ticket ids",
        "example": "35436,35437"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/deleted_users",
    "method": "listDeleted",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List Deleted Users",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/deleted_users/{deleted_user_id}",
    "method": "permanentlyDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Permanently Delete User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/deleted_users/{deleted_user_id}",
    "method": "getDeletedUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Show Deleted User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/deleted_users/count",
    "method": "countDeleted",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Count Deleted Users",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/dynamic_content/items",
    "method": "listItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic Content",
    "typeScriptTag": "dynamicContent",
    "description": "List Items",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/dynamic_content/items",
    "method": "createItemWithVariants",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dynamic Content",
    "typeScriptTag": "dynamicContent",
    "description": "Create Item",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/dynamic_content/items/{dynamic_content_item_id}",
    "method": "deleteItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Dynamic Content",
    "typeScriptTag": "dynamicContent",
    "description": "Delete Item",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/dynamic_content/items/{dynamic_content_item_id}",
    "method": "showItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic Content",
    "typeScriptTag": "dynamicContent",
    "description": "Show Item",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/dynamic_content/items/{dynamic_content_item_id}",
    "method": "updateItemName",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Dynamic Content",
    "typeScriptTag": "dynamicContent",
    "description": "Update Item",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic Content Item Variants",
    "typeScriptTag": "dynamicContentItemVariants",
    "description": "List Variants",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants",
    "method": "createNewVariant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dynamic Content Item Variants",
    "typeScriptTag": "dynamicContentItemVariants",
    "description": "Create Variant",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/{dynammic_content_variant_id}",
    "method": "deleteVariant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Dynamic Content Item Variants",
    "typeScriptTag": "dynamicContentItemVariants",
    "description": "Delete Variant",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/{dynammic_content_variant_id}",
    "method": "show",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic Content Item Variants",
    "typeScriptTag": "dynamicContentItemVariants",
    "description": "Show Variant",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/{dynammic_content_variant_id}",
    "method": "updateVariant",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Dynamic Content Item Variants",
    "typeScriptTag": "dynamicContentItemVariants",
    "description": "Update Variant",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/create_many",
    "method": "createMany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dynamic Content Item Variants",
    "typeScriptTag": "dynamicContentItemVariants",
    "description": "Create Many Variants",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/dynamic_content/items/{dynamic_content_item_id}/variants/update_many",
    "method": "updateMany",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Dynamic Content Item Variants",
    "typeScriptTag": "dynamicContentItemVariants",
    "description": "Update Many Variants",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/dynamic_content/items/show_many",
    "method": "showManyItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic Content",
    "typeScriptTag": "dynamicContent",
    "description": "Show Many Items",
    "parameters": [
      {
        "name": "identifiers",
        "schema": "string",
        "description": "Identifiers for the dynamic contents",
        "example": "item1,item2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/group_memberships",
    "method": "listMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group Memberships",
    "typeScriptTag": "groupMemberships",
    "description": "List Memberships",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the group",
        "example": 122
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "The id of the user",
        "example": 35436
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/group_memberships",
    "method": "assignAgentToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group Memberships",
    "typeScriptTag": "groupMemberships",
    "description": "Create Membership",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/group_memberships/{group_membership_id}",
    "method": "removeUserFromGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group Memberships",
    "typeScriptTag": "groupMemberships",
    "description": "Delete Membership",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content response"
      }
    ]
  },
  {
    "url": "/api/v2/group_memberships/{group_membership_id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group Memberships",
    "typeScriptTag": "groupMemberships",
    "description": "Show Membership",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/group_memberships/assignable",
    "method": "listAssignableMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group Memberships",
    "typeScriptTag": "groupMemberships",
    "description": "List Assignable Memberships",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/group_memberships/create_many",
    "method": "bulkAssignAgentsToGroups",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group Memberships",
    "typeScriptTag": "groupMemberships",
    "description": "Bulk Create Memberships",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/group_memberships/destroy_many",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group Memberships",
    "typeScriptTag": "groupMemberships",
    "description": "Bulk Delete Memberships",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Id of the group memberships to delete. Comma separated",
        "example": "1,2,3"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/group_slas/policies",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group SLA Policies",
    "typeScriptTag": "groupSlaPolicies",
    "description": "List Group SLA Policies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/group_slas/policies",
    "method": "createNewPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group SLA Policies",
    "typeScriptTag": "groupSlaPolicies",
    "description": "Create Group SLA Policy",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/group_slas/policies/{group_sla_policy_id}",
    "method": "deletePolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group SLA Policies",
    "typeScriptTag": "groupSlaPolicies",
    "description": "Delete Group SLA Policy",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/group_slas/policies/{group_sla_policy_id}",
    "method": "showPolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group SLA Policies",
    "typeScriptTag": "groupSlaPolicies",
    "description": "Show Group SLA Policy",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/group_slas/policies/{group_sla_policy_id}",
    "method": "updatePolicy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group SLA Policies",
    "typeScriptTag": "groupSlaPolicies",
    "description": "Update Group SLA Policy",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/group_slas/policies/definitions",
    "method": "getSupportedFilterDefinitionItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group SLA Policies",
    "typeScriptTag": "groupSlaPolicies",
    "description": "Retrieve Supported Filter Definition Items",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/group_slas/policies/reorder",
    "method": "reorder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group SLA Policies",
    "typeScriptTag": "groupSlaPolicies",
    "description": "Reorder Group SLA Policies",
    "parameters": [
      {
        "name": "groupSlaPolicyIds",
        "schema": "array",
        "description": "The ids of the Group SLA policies to reorder"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/groups",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "List Groups",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "The id of the user",
        "example": 35436
      },
      {
        "name": "excludeDeleted",
        "schema": "boolean",
        "description": "Whether to exclude deleted entities",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Create Group",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/groups/{group_id}",
    "method": "deleteGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Delete Group",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content response"
      }
    ]
  },
  {
    "url": "/api/v2/groups/{group_id}",
    "method": "showGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Show Group",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/groups/{group_id}",
    "method": "updateGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Update Group",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/groups/assignable",
    "method": "listAssignableGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "List Assignable Groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/groups/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Count Groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/imports/tickets",
    "method": "executeTicketImport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ticket Import",
    "typeScriptTag": "ticketImport",
    "description": "Ticket Import",
    "parameters": [
      {
        "name": "archiveImmediately",
        "schema": "boolean",
        "description": "If `true`, any ticket created with a `closed` status bypasses the normal ticket lifecycle and will be created directly in your ticket archive"
      },
      {
        "name": "ticket",
        "schema": "object",
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
    "url": "/api/v2/imports/tickets/create_many",
    "method": "bulkCreateMany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ticket Import",
    "typeScriptTag": "ticketImport",
    "description": "Ticket Bulk Import",
    "parameters": [
      {
        "name": "archiveImmediately",
        "schema": "boolean",
        "description": "If `true`, any ticket created with a `closed` status bypasses the normal ticket lifecycle and will be created directly in your ticket archive"
      },
      {
        "name": "tickets",
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
    "url": "/api/v2/incremental/{incremental_resource}/sample",
    "method": "sampleGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incremental Export",
    "typeScriptTag": "incrementalExport",
    "description": "Incremental Sample Export",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "See [Tickets](https://developer.zendesk.com) for a detailed example.\n"
      }
    ]
  },
  {
    "url": "/api/v2/incremental/organizations",
    "method": "organizationsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incremental Export",
    "typeScriptTag": "incrementalExport",
    "description": "Incremental Organization Export",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/incremental/routing/attribute_values",
    "method": "getAttributeValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incremental Skill Based Routing",
    "typeScriptTag": "incrementalSkillBasedRouting",
    "description": "Incremental Attributes Values Export",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/incremental/routing/attributes",
    "method": "exportChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incremental Skill Based Routing",
    "typeScriptTag": "incrementalSkillBasedRouting",
    "description": "Incremental Attributes Export",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/incremental/routing/instance_values",
    "method": "routingInstanceValuesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incremental Skill Based Routing",
    "typeScriptTag": "incrementalSkillBasedRouting",
    "description": "Incremental Instance Values Export",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/incremental/ticket_events",
    "method": "ticketEventsGetStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incremental Export",
    "typeScriptTag": "incrementalExport",
    "description": "Incremental Ticket Event Export",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/incremental/ticket_metric_events",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Metric Events",
    "typeScriptTag": "ticketMetricEvents",
    "description": "List Ticket Metric Events",
    "parameters": [
      {
        "name": "startTime",
        "schema": "integer",
        "required": true,
        "description": "The Unix UTC epoch time of the oldest event you're interested in. Example: 1332034771.",
        "example": 1332034771
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/incremental/tickets",
    "method": "timeBasedTickets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incremental Export",
    "typeScriptTag": "incrementalExport",
    "description": "Incremental Ticket Export, Time Based",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "See [Tickets](https://developer.zendesk.com) for a detailed example.\n"
      }
    ]
  },
  {
    "url": "/api/v2/incremental/tickets/cursor",
    "method": "ticketsChangedSinceStart",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incremental Export",
    "typeScriptTag": "incrementalExport",
    "description": "Incremental Ticket Export, Cursor Based",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "See [Tickets](https://developer.zendesk.com) for a detailed example.\n"
      }
    ]
  },
  {
    "url": "/api/v2/incremental/users",
    "method": "userExportTimeBased",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incremental Export",
    "typeScriptTag": "incrementalExport",
    "description": "Incremental User Export, Time Based",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/incremental/users/cursor",
    "method": "userCursorGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incremental Export",
    "typeScriptTag": "incrementalExport",
    "description": "Incremental User Export, Cursor Based",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/job_statuses",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Statuses",
    "typeScriptTag": "jobStatuses",
    "description": "List Job Statuses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/job_statuses/{job_status_id}",
    "method": "showStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Statuses",
    "typeScriptTag": "jobStatuses",
    "description": "Show Job Status",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/job_statuses/show_many",
    "method": "getMany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Statuses",
    "typeScriptTag": "jobStatuses",
    "description": "Show Many Job Statuses",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Comma-separated list of job status ids.",
        "example": "8b726e606741012ffc2d782bcb7848fe,e7665094164c498781ebe4c8db6d2af5"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/locales",
    "method": "listAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locales",
    "typeScriptTag": "locales",
    "description": "List Locales",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/locales/{locale_id}",
    "method": "showLocale",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locales",
    "typeScriptTag": "locales",
    "description": "Show Locale",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/locales/agent",
    "method": "listForAgent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locales",
    "typeScriptTag": "locales",
    "description": "List Locales for Agent",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/locales/current",
    "method": "getCurrentLocale",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locales",
    "typeScriptTag": "locales",
    "description": "Show Current Locale",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/locales/detect_best_locale",
    "method": "detectBestLocale",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locales",
    "typeScriptTag": "locales",
    "description": "Detect Best Language for User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/locales/public",
    "method": "listPublicAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locales",
    "typeScriptTag": "locales",
    "description": "List Available Public Locales",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "List Macros",
    "parameters": [
      {
        "name": "include",
        "schema": "string",
        "description": "A sideload to include in the response. See [Sideloads](https://developer.zendesk.com)",
        "example": "usage_7d"
      },
      {
        "name": "access",
        "schema": "string",
        "description": "Filter macros by access. Possible values are \"personal\", \"agents\", \"shared\", or \"account\". The \"agents\" value returns all personal macros for the account's agents and is only available to admins.",
        "example": "personal"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "Filter by active macros if true or inactive macros if false",
        "example": true
      },
      {
        "name": "category",
        "schema": "integer",
        "description": "Filter macros by category",
        "example": 25
      },
      {
        "name": "groupId",
        "schema": "integer",
        "description": "Filter macros by group",
        "example": 25
      },
      {
        "name": "onlyViewable",
        "schema": "boolean",
        "description": "If true, returns only macros that can be applied to tickets. If false, returns all macros the current user can manage. Default is false",
        "example": false
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Possible values are alphabetical, \"created_at\", \"updated_at\", \"usage_1h\", \"usage_24h\", \"usage_7d\", or \"usage_30d\". Defaults to alphabetical",
        "example": "alphabetical"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "One of \"asc\" or \"desc\". Defaults to \"asc\" for alphabetical and position sort, \"desc\" for all others",
        "example": "asc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros",
    "method": "createNewMacro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Create Macro",
    "parameters": [
      {
        "name": "macro",
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
    "url": "/api/v2/macros/{macro_id}",
    "method": "deleteMacroById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Delete Macro",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v2/macros/{macro_id}",
    "method": "showMacro",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Show Macro",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros/{macro_id}",
    "method": "updateMacroAgent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Update Macro",
    "parameters": [
      {
        "name": "macro",
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
    "url": "/api/v2/macros/{macro_id}/apply",
    "method": "showChangesToTicket",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Show Changes to Ticket",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros/{macro_id}/attachments",
    "method": "listAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "List Macro Attachments",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros/{macro_id}/attachments",
    "method": "createAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Create Macro Attachment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros/actions",
    "method": "listSupportedActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "List Supported Actions for Macros",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros/active",
    "method": "listActive",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "List Active Macros",
    "parameters": [
      {
        "name": "include",
        "schema": "string",
        "description": "A sideload to include in the response. See [Sideloads](https://developer.zendesk.com)",
        "example": "usage_7d"
      },
      {
        "name": "access",
        "schema": "string",
        "description": "Filter macros by access. Possible values are \"personal\", \"agents\", \"shared\", or \"account\". The \"agents\" value returns all personal macros for the account's agents and is only available to admins.",
        "example": "personal"
      },
      {
        "name": "category",
        "schema": "integer",
        "description": "Filter macros by category",
        "example": 25
      },
      {
        "name": "groupId",
        "schema": "integer",
        "description": "Filter macros by group",
        "example": 25
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Possible values are alphabetical, \"created_at\", \"updated_at\", \"usage_1h\", \"usage_24h\", \"usage_7d\", or \"usage_30d\". Defaults to alphabetical",
        "example": "alphabetical"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "One of \"asc\" or \"desc\". Defaults to \"asc\" for alphabetical and position sort, \"desc\" for all others",
        "example": "asc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros/attachments",
    "method": "createUnassociatedAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Create Unassociated Macro Attachment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros/attachments/{attachment_id}",
    "method": "showAttachmentProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Show Macro Attachment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros/categories",
    "method": "listCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "List Macro Categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros/definitions",
    "method": "listActionDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "List Macro Action Definitions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros/destroy_many",
    "method": "deleteMany",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Bulk Delete Macros",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": "The IDs of the macros to delete",
        "example": [
          1,
          2,
          3
        ]
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
    "url": "/api/v2/macros/new",
    "method": "showReplica",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Show Macro Replica",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros/search",
    "method": "searchAgents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Search Macros",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/macros/update_many",
    "method": "updateMany",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Update Many Macros",
    "parameters": [
      {
        "name": "macros",
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
    "url": "/api/v2/object_layouts/{object_type}/essentials_card",
    "method": "deleteObjectEssentials",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Essentials Card",
    "typeScriptTag": "essentialsCard",
    "description": "Delete Essentials Card",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success response"
      }
    ]
  },
  {
    "url": "/api/v2/object_layouts/{object_type}/essentials_card",
    "method": "getForObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Essentials Card",
    "typeScriptTag": "essentialsCard",
    "description": "Show Essentials Card",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/object_layouts/{object_type}/essentials_card",
    "method": "updateObjectCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Essentials Card",
    "typeScriptTag": "essentialsCard",
    "description": "Update Essentials Card",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/object_layouts/essentials_cards",
    "method": "listCards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Essentials Card",
    "typeScriptTag": "essentialsCard",
    "description": "List of Essentials Cards",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organization_fields",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization Fields",
    "typeScriptTag": "organizationFields",
    "description": "List Organization Fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organization_fields",
    "method": "createField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization Fields",
    "typeScriptTag": "organizationFields",
    "description": "Create Organization Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organization_fields/{organization_field_id}",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organization Fields",
    "typeScriptTag": "organizationFields",
    "description": "Delete Organization Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/organization_fields/{organization_field_id}",
    "method": "showField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization Fields",
    "typeScriptTag": "organizationFields",
    "description": "Show Organization Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organization_fields/{organization_field_id}",
    "method": "updateDropdown",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organization Fields",
    "typeScriptTag": "organizationFields",
    "description": "Update Organization Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organization_fields/reorder",
    "method": "reorderField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organization Fields",
    "typeScriptTag": "organizationFields",
    "description": "Reorder Organization Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/organization_memberships",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "List Memberships",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organization_memberships",
    "method": "assignUserToOrganization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "Create Membership",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organization_memberships/{organization_membership_id}",
    "method": "removeMemberAndUnassignTickets",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "Delete Membership",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/organization_memberships/{organization_membership_id}",
    "method": "showMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "Show Membership",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organization_memberships/create_many",
    "method": "createMany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "Create Many Memberships",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organization_memberships/destroy_many",
    "method": "bulkDeleteMany",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "Bulk Delete Memberships",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "description": "The IDs of the organization memberships to delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organization_subscriptions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization Subscriptions",
    "typeScriptTag": "organizationSubscriptions",
    "description": "List Organization Subscriptions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organization_subscriptions",
    "method": "createNewSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization Subscriptions",
    "typeScriptTag": "organizationSubscriptions",
    "description": "Create Organization Subscription",
    "parameters": [
      {
        "name": "organization_subscription",
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
    "url": "/api/v2/organization_subscriptions/{organization_subscription_id}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organization Subscriptions",
    "typeScriptTag": "organizationSubscriptions",
    "description": "Delete Organization Subscription",
    "parameters": [
      {
        "name": "organizationSubscriptionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization subscription",
        "example": 35436
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/api/v2/organization_subscriptions/{organization_subscription_id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization Subscriptions",
    "typeScriptTag": "organizationSubscriptions",
    "description": "Show Organization Subscription",
    "parameters": [
      {
        "name": "organizationSubscriptionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization subscription",
        "example": 35436
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organizations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "List Organizations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organizations",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Create Organization",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organizations/{organization_id}",
    "method": "deleteOrganization",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Delete Organization",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content Response"
      }
    ]
  },
  {
    "url": "/api/v2/organizations/{organization_id}",
    "method": "showInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Show Organization",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organizations/{organization_id}",
    "method": "updateNotes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Update Organization",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organizations/{organization_id}/related",
    "method": "showRelatedInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Show Organization's Related Information",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organizations/autocomplete",
    "method": "autocomplete",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Autocomplete Organizations",
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
    "url": "/api/v2/organizations/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Count Organizations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organizations/create_many",
    "method": "createMany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Create Many Organizations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organizations/create_or_update",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Create Or Update Organization",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organizations/destroy_many",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Bulk Delete Organizations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organizations/search",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Search Organizations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organizations/show_many",
    "method": "listMany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Show Many Organizations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/organizations/update_many",
    "method": "updateManyBulk",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Update Many Organizations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/problems",
    "method": "listProblems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "List Ticket Problems",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/problems/autocomplete",
    "method": "autocompleteProblems",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Autocomplete Problems",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "description": "The text to search for"
      },
      {
        "name": "text",
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
    "url": "/api/v2/push_notification_devices/destroy_many",
    "method": "bulkUnregister",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Push Notification Devices",
    "typeScriptTag": "pushNotificationDevices",
    "description": "Bulk Unregister Push Notification Devices",
    "parameters": [
      {
        "name": "push_notification_devices",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "empty"
      }
    ]
  },
  {
    "url": "/api/v2/queues",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Omnichannel Routing Queues",
    "typeScriptTag": "omnichannelRoutingQueues",
    "description": "List queues",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/queues",
    "method": "createNewQueue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Omnichannel Routing Queues",
    "typeScriptTag": "omnichannelRoutingQueues",
    "description": "Create queue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/queues/{queue_id}",
    "method": "deleteQueue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Omnichannel Routing Queues",
    "typeScriptTag": "omnichannelRoutingQueues",
    "description": "Delete queue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content response"
      }
    ]
  },
  {
    "url": "/api/v2/queues/{queue_id}",
    "method": "showQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Omnichannel Routing Queues",
    "typeScriptTag": "omnichannelRoutingQueues",
    "description": "Show Queue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/queues/{queue_id}",
    "method": "updateQueue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Omnichannel Routing Queues",
    "typeScriptTag": "omnichannelRoutingQueues",
    "description": "Update queue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/queues/definitions",
    "method": "listDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Omnichannel Routing Queues",
    "typeScriptTag": "omnichannelRoutingQueues",
    "description": "List queue definitions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/recipient_addresses",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Support Addresses",
    "typeScriptTag": "supportAddresses",
    "description": "List Support Addresses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/recipient_addresses",
    "method": "createSupportAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Support Addresses",
    "typeScriptTag": "supportAddresses",
    "description": "Create Support Address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/recipient_addresses/{support_address_id}",
    "method": "deleteSupportAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Support Addresses",
    "typeScriptTag": "supportAddresses",
    "description": "Delete Support Address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/recipient_addresses/{support_address_id}",
    "method": "showSupportAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Support Addresses",
    "typeScriptTag": "supportAddresses",
    "description": "Show Support Address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/recipient_addresses/{support_address_id}",
    "method": "updateExistingAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Support Addresses",
    "typeScriptTag": "supportAddresses",
    "description": "Update Support Address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/recipient_addresses/{support_address_id}/verify",
    "method": "verifyForwarding",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Support Addresses",
    "typeScriptTag": "supportAddresses",
    "description": "Verify Support Address Forwarding",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/relationships/definitions/{target_type}",
    "method": "filterDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lookup Relationships",
    "typeScriptTag": "lookupRelationships",
    "description": "Filter Definitions",
    "parameters": [
      {
        "name": "targetType",
        "schema": "string",
        "required": true,
        "description": "The target type for which you would like to see filter definitions.\nThe options are \"zen:user\", \"zen:ticket\", \"zen:organization\", and \"zen:custom_object:CUSTOM_OBJECT_KEY\"\n",
        "example": "zen:custom_object:apartment"
      },
      {
        "name": "sourceType",
        "schema": "string",
        "description": "The source type for which you would like to see filter definitions.\nThe options are \"zen:user\", \"zen:ticket\", and \"zen:organization\"\n",
        "example": "zen:user"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/requests",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requests",
    "typeScriptTag": "requests",
    "description": "List Requests",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Possible values are \"updated_at\", \"created_at\""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "One of \"asc\", \"desc\". Defaults to \"asc\""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/requests",
    "method": "createNewRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Requests",
    "typeScriptTag": "requests",
    "description": "Create Request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/requests/{request_id}",
    "method": "showRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requests",
    "typeScriptTag": "requests",
    "description": "Show Request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/requests/{request_id}",
    "method": "updateWithComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Requests",
    "typeScriptTag": "requests",
    "description": "Update Request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/requests/{request_id}/comments",
    "method": "listComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requests",
    "typeScriptTag": "requests",
    "description": "Listing Comments",
    "parameters": [
      {
        "name": "since",
        "schema": "string",
        "description": "Filters the comments from the given datetime"
      },
      {
        "name": "role",
        "schema": "string",
        "description": "One of \"agent\", \"end_user\". If not specified it does not filter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/requests/{request_id}/comments/{ticket_comment_id}",
    "method": "getComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requests",
    "typeScriptTag": "requests",
    "description": "Getting Comments",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/requests/search",
    "method": "searchResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requests",
    "typeScriptTag": "requests",
    "description": "Search Requests",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": "The syntax and matching logic for the string is detailed in the [Zendesk Support search reference](https://support.zendesk.com/hc/en-us/articles/203663226). See also [Query basics](https://developer.zendesk.com/api-reference/ in the Tickets API doc."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/resource_collections",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resource Collections",
    "typeScriptTag": "resourceCollections",
    "description": "List Resource Collections",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/resource_collections",
    "method": "createNewCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Resource Collections",
    "typeScriptTag": "resourceCollections",
    "description": "Create Resource Collection",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/resource_collections/{resource_collection_id}",
    "method": "deleteCollection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Resource Collections",
    "typeScriptTag": "resourceCollections",
    "description": "Delete Resource Collection",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/resource_collections/{resource_collection_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resource Collections",
    "typeScriptTag": "resourceCollections",
    "description": "Show Resource Collection",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/resource_collections/{resource_collection_id}",
    "method": "updateResourceCollection",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Resource Collections",
    "typeScriptTag": "resourceCollections",
    "description": "Update Resource Collection",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/agents/{user_id}/instance_values",
    "method": "listAgentAttributeValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "List Agent Attribute Values",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/agents/{user_id}/instance_values",
    "method": "setAgentAttributeValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "Set Agent Attribute Values",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/attributes",
    "method": "listAccountAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "List Account Attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/attributes",
    "method": "createAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "Create Attribute",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/attributes/{attribute_id}",
    "method": "deleteAttribute",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "Delete Attribute",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/routing/attributes/{attribute_id}",
    "method": "showAttribute",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "Show Attribute",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/attributes/{attribute_id}",
    "method": "updateAttribute",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "Update Attribute",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/attributes/{attribute_id}/values",
    "method": "listAttributeValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "List Attribute Values for an Attribute",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/attributes/{attribute_id}/values",
    "method": "createAttributeValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "Create Attribute Value",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id}",
    "method": "deleteAttributeValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "Delete Attribute Value",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id}",
    "method": "showAttributeValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "Show Attribute Value",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/attributes/{attribute_id}/values/{attribute_value_id}",
    "method": "updateAttributeValue",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "Update Attribute Value",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/attributes/definitions",
    "method": "listAttributeDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "List Routing Attribute Definitions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/requirements/fulfilled",
    "method": "listFulfilledTickets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "List Tickets Fulfilled by a User",
    "parameters": [
      {
        "name": "ticketIds",
        "schema": "integer",
        "required": true,
        "description": "The IDs of the relevant tickets to check for matching attributes",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/tickets/{ticket_id}/instance_values",
    "method": "listTicketAttributeValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "List Ticket Attribute Values",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/routing/tickets/{ticket_id}/instance_values",
    "method": "setTicketAttributeValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Skill Based Routing",
    "typeScriptTag": "skillBasedRouting",
    "description": "Set Ticket Attribute Values",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/satisfaction_ratings",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Satisfaction Ratings",
    "typeScriptTag": "satisfactionRatings",
    "description": "List Satisfaction Ratings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/satisfaction_ratings/{satisfaction_rating_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Satisfaction Ratings",
    "typeScriptTag": "satisfactionRatings",
    "description": "Show Satisfaction Rating",
    "parameters": [
      {
        "name": "satisfactionRatingId",
        "schema": "integer",
        "required": true,
        "description": "The id of the satisfaction rating to retrieve",
        "example": 35436
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/satisfaction_ratings/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Satisfaction Ratings",
    "typeScriptTag": "satisfactionRatings",
    "description": "Count Satisfaction Ratings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/satisfaction_reasons",
    "method": "listReasons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Satisfaction Reasons",
    "typeScriptTag": "satisfactionReasons",
    "description": "List Reasons for Satisfaction Rating",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/satisfaction_reasons/{satisfaction_reason_id}",
    "method": "showReasonById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Satisfaction Reasons",
    "typeScriptTag": "satisfactionReasons",
    "description": "Show Reason for Satisfaction Rating",
    "parameters": [
      {
        "name": "satisfactionReasonId",
        "schema": "integer",
        "required": true,
        "description": "The id of the satisfaction rating reason",
        "example": 35121
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/search",
    "method": "results",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "List Search Results",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "The search query. See [Query basics](https://developer.zendesk.com) above. For details on the query syntax, see the [Zendesk Support search reference](https://support.zendesk.com/hc/en-us/articles/203663226)",
        "example": "https://subdomain.zendesk.com/api/v2/search.json?query=type:ticket status:closed&sort_by=status&sort_order=desc"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "One of `updated_at`, `created_at`, `priority`, `status`, or `ticket_type`. Defaults to sorting by relevance"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "One of `asc` or `desc`.  Defaults to `desc`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/search/count",
    "method": "resultsCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Show Results Count",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "The search query",
        "example": "https://subdomain.zendesk.com/api/v2/search.json?query=type:ticket status:closed"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/search/export",
    "method": "exportResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Export Search Results",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "The search query. See [Query basics](https://developer.zendesk.com) above. For details on the query syntax, see the [Zendesk Support search reference](https://support.zendesk.com/hc/en-us/articles/203663226)",
        "example": "https://subdomain.zendesk.com/api/v2/search.json?query=type:ticket status:closed&sort_by=status&sort_order=desc"
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "description": "The number of results shown in a page."
      },
      {
        "name": "filter[type]",
        "schema": "string",
        "description": "The object type returned by the export query. Can be `ticket`, `organization`, `user`, or `group`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/sessions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "List Sessions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/sharing_agreements",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sharing Agreements",
    "typeScriptTag": "sharingAgreements",
    "description": "List Sharing Agreements",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/sharing_agreements",
    "method": "createNewAgreement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sharing Agreements",
    "typeScriptTag": "sharingAgreements",
    "description": "Create Sharing Agreement",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/sharing_agreements/{sharing_agreement_id}",
    "method": "deleteAgreement",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sharing Agreements",
    "typeScriptTag": "sharingAgreements",
    "description": "Delete a Sharing Agreement",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/sharing_agreements/{sharing_agreement_id}",
    "method": "show",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sharing Agreements",
    "typeScriptTag": "sharingAgreements",
    "description": "Show a Sharing Agreement",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/sharing_agreements/{sharing_agreement_id}",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sharing Agreements",
    "typeScriptTag": "sharingAgreements",
    "description": "Update a Sharing Agreement",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/skips",
    "method": "recordNewSkip",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ticket Skips",
    "typeScriptTag": "ticketSkips",
    "description": "Record a New Skip for the Current User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/slas/policies",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SLA Policies",
    "typeScriptTag": "slaPolicies",
    "description": "List SLA Policies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/slas/policies",
    "method": "createNewPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SLA Policies",
    "typeScriptTag": "slaPolicies",
    "description": "Create SLA Policy",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/slas/policies/{sla_policy_id}",
    "method": "deletePolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SLA Policies",
    "typeScriptTag": "slaPolicies",
    "description": "Delete SLA Policy",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/slas/policies/{sla_policy_id}",
    "method": "showPolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SLA Policies",
    "typeScriptTag": "slaPolicies",
    "description": "Show SLA Policy",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/slas/policies/{sla_policy_id}",
    "method": "updatePolicy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "SLA Policies",
    "typeScriptTag": "slaPolicies",
    "description": "Update SLA Policy",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/slas/policies/definitions",
    "method": "getSupportedFilterDefinitionItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SLA Policies",
    "typeScriptTag": "slaPolicies",
    "description": "Retrieve Supported Filter Definition Items",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/slas/policies/reorder",
    "method": "reorderSlaPolicies",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "SLA Policies",
    "typeScriptTag": "slaPolicies",
    "description": "Reorder SLA Policies",
    "parameters": [
      {
        "name": "slaPolicyIds",
        "schema": "array",
        "description": "The IDs of the SLA Policies to reorder"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/suspended_tickets",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Suspended Tickets",
    "typeScriptTag": "suspendedTickets",
    "description": "List Suspended Tickets",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/suspended_tickets/{id}",
    "method": "deleteTicket",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Suspended Tickets",
    "typeScriptTag": "suspendedTickets",
    "description": "Delete Suspended Ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "id of the suspended ticket",
        "example": 35436
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/suspended_tickets/{id}",
    "method": "showTicket",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Suspended Tickets",
    "typeScriptTag": "suspendedTickets",
    "description": "Show Suspended Ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "id of the suspended ticket",
        "example": 35436
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/suspended_tickets/{id}/recover",
    "method": "recoverTicket",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Suspended Tickets",
    "typeScriptTag": "suspendedTickets",
    "description": "Recover Suspended Ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "id of the suspended ticket",
        "example": 35436
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
      }
    ]
  },
  {
    "url": "/api/v2/suspended_tickets/attachments",
    "method": "copyAttachments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Suspended Tickets",
    "typeScriptTag": "suspendedTickets",
    "description": "Suspended Ticket Attachments",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/suspended_tickets/destroy_many",
    "method": "deleteMany",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Suspended Tickets",
    "typeScriptTag": "suspendedTickets",
    "description": "Delete Multiple Suspended Tickets",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/suspended_tickets/export",
    "method": "exportList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Suspended Tickets",
    "typeScriptTag": "suspendedTickets",
    "description": "Export Suspended Tickets",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/suspended_tickets/recover_many",
    "method": "recoverMany",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Suspended Tickets",
    "typeScriptTag": "suspendedTickets",
    "description": "Recover Multiple Suspended Tickets",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tags",
    "method": "listPopular",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List Tags",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tags/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Count Tags",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/target_failures",
    "method": "listRecent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Target Failures",
    "typeScriptTag": "targetFailures",
    "description": "List Target Failures",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/target_failures/{target_failure_id}",
    "method": "showFailure",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Target Failures",
    "typeScriptTag": "targetFailures",
    "description": "Show Target Failure",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/targets",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Targets",
    "typeScriptTag": "targets",
    "description": "List Targets",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/targets",
    "method": "createNewTarget",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Targets",
    "typeScriptTag": "targets",
    "description": "Create Target",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/targets/{target_id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Targets",
    "typeScriptTag": "targets",
    "description": "Delete Target",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/targets/{target_id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Targets",
    "typeScriptTag": "targets",
    "description": "Show Target",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/targets/{target_id}",
    "method": "updateTarget",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Targets",
    "typeScriptTag": "targets",
    "description": "Update Target",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_audits",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Audits",
    "typeScriptTag": "ticketAudits",
    "description": "List All Ticket Audits",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of results returned"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_fields",
    "method": "listFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Fields",
    "typeScriptTag": "ticketFields",
    "description": "List Ticket Fields",
    "parameters": [
      {
        "name": "locale",
        "schema": "string",
        "description": "Forces the `title_in_portal` property to return a dynamic content variant for the specified locale.\n Only accepts [active locale ids](https://developer.zendesk.com/api-reference/.\nExample: `locale=\"de\"`.\n"
      },
      {
        "name": "creator",
        "schema": "boolean",
        "description": "Displays the `creator_user_id` and `creator_app_name` properties. If the ticket field is created\n by an app, `creator_app_name` is the name of the app and `creator_user_id` is `-1`. If the ticket field\n is not created by an app, `creator_app_name` is null\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_fields",
    "method": "createField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ticket Fields",
    "typeScriptTag": "ticketFields",
    "description": "Create Ticket Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_fields/{ticket_field_id}",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Ticket Fields",
    "typeScriptTag": "ticketFields",
    "description": "Delete Ticket Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/ticket_fields/{ticket_field_id}",
    "method": "showField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Fields",
    "typeScriptTag": "ticketFields",
    "description": "Show Ticket Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_fields/{ticket_field_id}",
    "method": "updateFieldOptions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ticket Fields",
    "typeScriptTag": "ticketFields",
    "description": "Update Ticket Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_fields/{ticket_field_id}/options",
    "method": "listOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Fields",
    "typeScriptTag": "ticketFields",
    "description": "List Ticket Field Options",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_fields/{ticket_field_id}/options",
    "method": "createOrUpdateOption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ticket Fields",
    "typeScriptTag": "ticketFields",
    "description": "Create or Update Ticket Field Option",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_fields/{ticket_field_id}/options/{ticket_field_option_id}",
    "method": "deleteOption",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Ticket Fields",
    "typeScriptTag": "ticketFields",
    "description": "Delete Ticket Field Option",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/ticket_fields/{ticket_field_id}/options/{ticket_field_option_id}",
    "method": "showOptionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Fields",
    "typeScriptTag": "ticketFields",
    "description": "Show Ticket Field Option",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_fields/count",
    "method": "count",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Fields",
    "typeScriptTag": "ticketFields",
    "description": "Count Ticket Fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_forms",
    "method": "listAllForms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Forms",
    "typeScriptTag": "ticketForms",
    "description": "List Ticket Forms",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "description": "true returns active ticket forms; false returns inactive ticket forms. If not present, returns both"
      },
      {
        "name": "endUserVisible",
        "schema": "boolean",
        "description": "true returns ticket forms where `end_user_visible`; false returns ticket forms that are not end-user visible. If not present, returns both"
      },
      {
        "name": "fallbackToDefault",
        "schema": "boolean",
        "description": "true returns the default ticket form when the criteria defined by the parameters results in a set without active and end-user visible ticket forms"
      },
      {
        "name": "associatedToBrand",
        "schema": "boolean",
        "description": "true returns the ticket forms of the brand specified by the url's subdomain"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_forms",
    "method": "createNewForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ticket Forms",
    "typeScriptTag": "ticketForms",
    "description": "Create Ticket Form",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_forms/{ticket_form_id}",
    "method": "deleteForm",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Ticket Forms",
    "typeScriptTag": "ticketForms",
    "description": "Delete Ticket Form",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/ticket_forms/{ticket_form_id}",
    "method": "showForm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Forms",
    "typeScriptTag": "ticketForms",
    "description": "Show Ticket Form",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_forms/{ticket_form_id}",
    "method": "updateForm",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ticket Forms",
    "typeScriptTag": "ticketForms",
    "description": "Update Ticket Form",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_forms/{ticket_form_id}/clone",
    "method": "cloneExistingForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ticket Forms",
    "typeScriptTag": "ticketForms",
    "description": "Clone an Already Existing Ticket Form",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_forms/reorder",
    "method": "reorderForms",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ticket Forms",
    "typeScriptTag": "ticketForms",
    "description": "Reorder Ticket Forms",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_forms/show_many",
    "method": "getMany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Forms",
    "typeScriptTag": "ticketForms",
    "description": "Show Many Ticket Forms",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "IDs of the ticket forms to be shown",
        "example": "1,2,3"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "true returns active ticket forms; false returns inactive ticket forms. If not present, returns both"
      },
      {
        "name": "endUserVisible",
        "schema": "boolean",
        "description": "true returns ticket forms where `end_user_visible`; false returns ticket forms that are not end-user visible. If not present, returns both"
      },
      {
        "name": "fallbackToDefault",
        "schema": "boolean",
        "description": "true returns the default ticket form when the criteria defined by the parameters results in a set without active and end-user visible ticket forms"
      },
      {
        "name": "associatedToBrand",
        "schema": "boolean",
        "description": "true returns the ticket forms of the brand specified by the url's subdomain"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_metrics",
    "method": "listMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Metrics",
    "typeScriptTag": "ticketMetrics",
    "description": "List Ticket Metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/ticket_metrics/{ticket_metric_id}",
    "method": "showSpecificMetric",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Metrics",
    "typeScriptTag": "ticketMetrics",
    "description": "Show Ticket Metrics",
    "parameters": [
      {
        "name": "ticketMetricId",
        "schema": "string",
        "required": true,
        "description": "The id of the ticket metric to retrieve",
        "example": "10001"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "List Tickets",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "description": "Lists tickets by external id. External ids don't have to be unique for each ticket. As a result, the request may return multiple tickets with the same external id."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets",
    "method": "createNewTicket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Create Ticket",
    "parameters": [
      {
        "name": "ticket",
        "schema": "object",
        "description": "",
        "example": {
          "comment": {
            "body": "The smoke is very colorful."
          },
          "priority": "urgent",
          "subject": "My printer is on fire!"
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
    "url": "/api/v2/tickets/{ticket_id}",
    "method": "deleteTicket",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Delete Ticket",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}",
    "method": "showTicketDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Show Ticket",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}",
    "method": "updateTicket",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Update Ticket",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      },
      {
        "name": "ticket",
        "schema": "object",
        "description": "",
        "example": {
          "comment": {
            "body": "The smoke is very colorful."
          },
          "priority": "urgent",
          "subject": "My printer is on fire!"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/audits",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Audits",
    "typeScriptTag": "ticketAudits",
    "description": "List Audits for a Ticket",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/audits/{ticket_audit_id}",
    "method": "show",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Audits",
    "typeScriptTag": "ticketAudits",
    "description": "Show Audit",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/audits/{ticket_audit_id}/make_private",
    "method": "convertToPrivate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ticket Audits",
    "typeScriptTag": "ticketAudits",
    "description": "Change a Comment From Public To Private",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/audits/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Audits",
    "typeScriptTag": "ticketAudits",
    "description": "Count Audits for a Ticket",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/collaborators",
    "method": "listCollaborators",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "List Collaborators for a Ticket",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/comments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Comments",
    "typeScriptTag": "ticketComments",
    "description": "List Comments",
    "parameters": [
      {
        "name": "includeInlineImages",
        "schema": "boolean",
        "description": "Default is false. When true, inline images are also listed as attachments in the response"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Accepts \"users\". Use this parameter to list email CCs by side-loading users. Example: `?include=users`. **Note**: If the comment source is email, a deleted user will be represented as the CCd email address. If the comment source is anything else, a deleted user will be represented as the user name."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/comments/{comment_id}/attachments/{attachment_id}/redact",
    "method": "redactCommentAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Redact Comment Attachment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/comments/{ticket_comment_id}/make_private",
    "method": "makePrivate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ticket Comments",
    "typeScriptTag": "ticketComments",
    "description": "Make Comment Private",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/comments/{ticket_comment_id}/redact",
    "method": "redactString",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ticket Comments",
    "typeScriptTag": "ticketComments",
    "description": "Redact String in Comment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/comments/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Comments",
    "typeScriptTag": "ticketComments",
    "description": "Count Ticket Comments",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/email_ccs",
    "method": "getEmailCCs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "List Email CCs for a Ticket",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/followers",
    "method": "listFollowers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "List Followers for a Ticket",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/incidents",
    "method": "listIncidents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "List Ticket Incidents",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/macros/{macro_id}/apply",
    "method": "showTicketAfterChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Macros",
    "typeScriptTag": "macros",
    "description": "Show Ticket After Changes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/mark_as_spam",
    "method": "markAsSpamAndSuspendRequester",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Mark Ticket as Spam and Suspend Requester",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/merge",
    "method": "mergeIntoTarget",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Merge Tickets into Target Ticket",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      },
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "source_comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source_comment_is_public",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "target_comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "target_comment_is_public",
        "schema": "boolean",
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
    "url": "/api/v2/tickets/{ticket_id}/related",
    "method": "getRelatedInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Ticket Related Information",
    "parameters": [
      {
        "name": "ticketId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the ticket",
        "example": 123456
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/satisfaction_rating",
    "method": "createNewRating",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Satisfaction Ratings",
    "typeScriptTag": "satisfactionRatings",
    "description": "Create a Satisfaction Rating",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/tags",
    "method": "removeFromTicket",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Remove Tags",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/tags",
    "method": "listResourceTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List Resource Tags",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/tags",
    "method": "setTicketTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Set Tags",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/{ticket_id}/tags",
    "method": "addMultiple",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Add Tags",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/count",
    "method": "countTickets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Count Tickets",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/create_many",
    "method": "createMany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Create Many Tickets",
    "parameters": [
      {
        "name": "tickets",
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
    "url": "/api/v2/tickets/destroy_many",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Bulk Delete Tickets",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Comma-separated list of ticket ids",
        "example": "35436,35437"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/mark_many_as_spam",
    "method": "markManyAsSpam",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Bulk Mark Tickets as Spam",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Comma-separated list of ticket ids",
        "example": "35436,35437"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/show_many",
    "method": "showMany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Show Multiple Tickets",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Comma-separated list of ticket ids",
        "example": "35436,35437"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tickets/update_many",
    "method": "updateMany",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Update Many Tickets",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Comma-separated list of ticket ids",
        "example": "35436,35437"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/trigger_categories",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trigger Categories",
    "typeScriptTag": "triggerCategories",
    "description": "List Trigger Categories",
    "parameters": [
      {
        "name": "page",
        "schema": "object",
        "description": "Pagination parameters",
        "example": {
          "after": "eyJvIjoiLXNjb3JlLGlkIiwidiI6ImFRSUFBQUFBQUFBQWFRMHBJUUVBQUFBQSJ9",
          "before": "eyJvIjoiLXNjb3JlLGlkIiwidiI6ImFRSUFBQUFBQUFBQWFRMHBJUUVBQUFBQSJ9",
          "size": 50
        }
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort parameters"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Allowed sideloads"
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/trigger_categories",
    "method": "createCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trigger Categories",
    "typeScriptTag": "triggerCategories",
    "description": "Create Trigger Category",
    "parameters": [
      {
        "name": "trigger_category",
        "schema": "undefined",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/trigger_categories/{trigger_category_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Trigger Categories",
    "typeScriptTag": "triggerCategories",
    "description": "Delete Trigger Category",
    "parameters": [
      {
        "name": "triggerCategoryId",
        "schema": "string",
        "required": true,
        "description": "The id of the trigger category to delete",
        "example": "10001"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/trigger_categories/{trigger_category_id}",
    "method": "showById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trigger Categories",
    "typeScriptTag": "triggerCategories",
    "description": "Show Trigger Category",
    "parameters": [
      {
        "name": "triggerCategoryId",
        "schema": "string",
        "required": true,
        "description": "The id of the trigger category to retrieve",
        "example": "10001"
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
    "url": "/api/v2/trigger_categories/{trigger_category_id}",
    "method": "updateCategoryById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Trigger Categories",
    "typeScriptTag": "triggerCategories",
    "description": "Update Trigger Category",
    "parameters": [
      {
        "name": "triggerCategoryId",
        "schema": "string",
        "required": true,
        "description": "The id of the trigger category to update",
        "example": "10001"
      },
      {
        "name": "trigger_category",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/trigger_categories/jobs",
    "method": "createBatchJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trigger Categories",
    "typeScriptTag": "triggerCategories",
    "description": "Create Batch Job for Trigger Categories",
    "parameters": [
      {
        "name": "job",
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
      }
    ]
  },
  {
    "url": "/api/v2/triggers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Triggers",
    "typeScriptTag": "triggers",
    "description": "List Triggers",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "description": "Filter by active triggers if true or inactive triggers if false",
        "example": true
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Cursor-based pagination only. Possible values are \"alphabetical\", \"created_at\", \"updated_at\", or \"position\".",
        "example": "position"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Offset pagination only. Possible values are \"alphabetical\", \"created_at\", \"updated_at\", \"usage_1h\", \"usage_24h\", or \"usage_7d\". Defaults to \"position\"",
        "example": "position"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "One of \"asc\" or \"desc\". Defaults to \"asc\" for alphabetical and position sort, \"desc\" for all others",
        "example": "desc"
      },
      {
        "name": "categoryId",
        "schema": "string",
        "description": "Filter triggers by category ID",
        "example": "10026"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/triggers",
    "method": "createNewTrigger",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Triggers",
    "typeScriptTag": "triggers",
    "description": "Create Trigger",
    "parameters": [
      {
        "name": "trigger",
        "schema": "undefined",
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
    "url": "/api/v2/triggers/{trigger_id}",
    "method": "deleteTrigger",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Triggers",
    "typeScriptTag": "triggers",
    "description": "Delete Trigger",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/triggers/{trigger_id}",
    "method": "showTrigger",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Triggers",
    "typeScriptTag": "triggers",
    "description": "Show Trigger",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/triggers/{trigger_id}",
    "method": "updateTrigger",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Triggers",
    "typeScriptTag": "triggers",
    "description": "Update Trigger",
    "parameters": [
      {
        "name": "trigger",
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
    "url": "/api/v2/triggers/{trigger_id}/revisions",
    "method": "listRevisions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Triggers",
    "typeScriptTag": "triggers",
    "description": "List Trigger Revisions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/triggers/{trigger_id}/revisions/{trigger_revision_id}",
    "method": "showRevision",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Triggers",
    "typeScriptTag": "triggers",
    "description": "Show Trigger Revision",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/triggers/active",
    "method": "listActiveTriggers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Triggers",
    "typeScriptTag": "triggers",
    "description": "List Active Triggers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/triggers/definitions",
    "method": "listDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Triggers",
    "typeScriptTag": "triggers",
    "description": "List Trigger Action and Condition Definitions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/triggers/destroy_many",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Triggers",
    "typeScriptTag": "triggers",
    "description": "Bulk Delete Triggers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content response"
      }
    ]
  },
  {
    "url": "/api/v2/triggers/reorder",
    "method": "reorderFiringOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Triggers",
    "typeScriptTag": "triggers",
    "description": "Reorder Triggers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/triggers/search",
    "method": "searchGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Triggers",
    "typeScriptTag": "triggers",
    "description": "Search Triggers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/triggers/update_many",
    "method": "updateManyPositionStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Triggers",
    "typeScriptTag": "triggers",
    "description": "Update Many Triggers",
    "parameters": [
      {
        "name": "triggers",
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
    "url": "/api/v2/uploads",
    "method": "uploadFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Upload Files",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/uploads/{token}",
    "method": "deleteUpload",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Delete Upload",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "The token of the uploaded attachment",
        "example": "6bk3gql82em5nmf"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/user_fields",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Fields",
    "typeScriptTag": "userFields",
    "description": "List User Fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user_fields",
    "method": "createField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Fields",
    "typeScriptTag": "userFields",
    "description": "Create User Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user_fields/{user_field_id}",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User Fields",
    "typeScriptTag": "userFields",
    "description": "Delete User Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/user_fields/{user_field_id}",
    "method": "showField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Fields",
    "typeScriptTag": "userFields",
    "description": "Show User Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user_fields/{user_field_id}",
    "method": "updateCustomFieldOptions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User Fields",
    "typeScriptTag": "userFields",
    "description": "Update User Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user_fields/{user_field_id}/options",
    "method": "listOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Fields",
    "typeScriptTag": "userFields",
    "description": "List User Field Options",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user_fields/{user_field_id}/options",
    "method": "createOrUpdateOption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Fields",
    "typeScriptTag": "userFields",
    "description": "Create or Update a User Field Option",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user_fields/{user_field_id}/options/{user_field_option_id}",
    "method": "deleteOptionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User Fields",
    "typeScriptTag": "userFields",
    "description": "Delete User Field Option",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/user_fields/{user_field_id}/options/{user_field_option_id}",
    "method": "showOptionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Fields",
    "typeScriptTag": "userFields",
    "description": "Show a User Field Option",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user_fields/reorder",
    "method": "reorderField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User Fields",
    "typeScriptTag": "userFields",
    "description": "Reorder User Field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/users",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List Users",
    "parameters": [
      {
        "name": "role",
        "schema": "string",
        "description": "Filters the results by role. Possible values are \"end-user\", \"agent\", or \"admin\"\n",
        "example": "agent"
      },
      {
        "name": "role[]",
        "schema": "string",
        "description": "Filters the results by more than one role using the format `role[]={role}&role[]={role}`\n",
        "example": "agent"
      },
      {
        "name": "permissionSet",
        "schema": "integer",
        "description": "For custom roles which is available on the Enterprise plan and above. You can only filter by one role ID per request",
        "example": 123
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "List users by external id. External id has to be unique for each user under the same account.",
        "example": "abc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create User",
    "parameters": [
      {
        "name": "user",
        "schema": "undefined",
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
    "url": "/api/v2/users/{user_id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}",
    "method": "showUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Show User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}",
    "method": "updateUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update User",
    "parameters": [
      {
        "name": "user",
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
    "url": "/api/v2/users/{user_id}/compliance_deletion_statuses",
    "method": "showComplianceDeletionStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Show Compliance Deletion Statuses",
    "parameters": [
      {
        "name": "application",
        "schema": "string",
        "description": "Area of compliance",
        "example": "chat"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/group_memberships/{group_membership_id}/make_default",
    "method": "setAsDefault",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group Memberships",
    "typeScriptTag": "groupMemberships",
    "description": "Set Membership as Default",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/identities",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Identities",
    "typeScriptTag": "userIdentities",
    "description": "List Identities",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/identities",
    "method": "addIdentityToUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Identities",
    "typeScriptTag": "userIdentities",
    "description": "Create Identity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/identities/{user_identity_id}",
    "method": "deleteIdentity",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User Identities",
    "typeScriptTag": "userIdentities",
    "description": "Delete Identity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/identities/{user_identity_id}",
    "method": "showIdentity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Identities",
    "typeScriptTag": "userIdentities",
    "description": "Show Identity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/identities/{user_identity_id}",
    "method": "updateIdentity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User Identities",
    "typeScriptTag": "userIdentities",
    "description": "Update Identity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/identities/{user_identity_id}/make_primary",
    "method": "makePrimary",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User Identities",
    "typeScriptTag": "userIdentities",
    "description": "Make Identity Primary",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/identities/{user_identity_id}/request_verification",
    "method": "requestVerificationEmail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User Identities",
    "typeScriptTag": "userIdentities",
    "description": "Request User Verification",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/identities/{user_identity_id}/verify",
    "method": "verifyIdentity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User Identities",
    "typeScriptTag": "userIdentities",
    "description": "Verify Identity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/merge",
    "method": "mergeEndUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Merge End Users",
    "parameters": [
      {
        "name": "user",
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
    "url": "/api/v2/users/{user_id}/organization_memberships/{organization_membership_id}/make_default",
    "method": "setDefaultMembership",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "Set Membership as Default",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/organizations/{organization_id}",
    "method": "removeUserFromOrganization",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "Unassign Organization",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/organizations/{organization_id}/make_default",
    "method": "setAsDefault",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organization Memberships",
    "typeScriptTag": "organizationMemberships",
    "description": "Set Organization as Default",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/password",
    "method": "setNewPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Passwords",
    "typeScriptTag": "userPasswords",
    "description": "Set a User's Password",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/password",
    "method": "changePassword",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User Passwords",
    "typeScriptTag": "userPasswords",
    "description": "Change Your Password",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/password/requirements",
    "method": "listRequirements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Passwords",
    "typeScriptTag": "userPasswords",
    "description": "List password requirements",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/related",
    "method": "showRelatedInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Show User Related Information",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/sessions",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Bulk Delete Sessions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/sessions/{session_id}",
    "method": "deleteSession",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Delete Session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/sessions/{session_id}",
    "method": "showSession",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Show Session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{user_id}/skips",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Skips",
    "typeScriptTag": "ticketSkips",
    "description": "List Ticket Skips",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/autocomplete",
    "method": "autocompleteList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Autocomplete Users",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The name to search for the user.\n",
        "example": "gil"
      },
      {
        "name": "fieldId",
        "schema": "string",
        "description": "The id of a lookup relationship field.  The type of field is determined\nby the `source` param\n"
      },
      {
        "name": "source",
        "schema": "string",
        "description": "If a `field_id` is provided, this specifies the type of the field.\nFor example, if the field is on a \"zen:user\", it references a field on a user\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/count",
    "method": "countUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Count Users",
    "parameters": [
      {
        "name": "role",
        "schema": "string",
        "description": "Filters the results by role. Possible values are \"end-user\", \"agent\", or \"admin\"\n",
        "example": "agent"
      },
      {
        "name": "role[]",
        "schema": "string",
        "description": "Filters the results by more than one role using the format `role[]={role}&role[]={role}`\n",
        "example": "agent"
      },
      {
        "name": "permissionSet",
        "schema": "integer",
        "description": "For custom roles which is available on the Enterprise plan and above. You can only filter by one role ID per request",
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
    "url": "/api/v2/users/create_many",
    "method": "createManyUsers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create Many Users",
    "parameters": [
      {
        "name": "users",
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
    "url": "/api/v2/users/create_or_update",
    "method": "createOrUpdateUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create Or Update User",
    "parameters": [
      {
        "name": "user",
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
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/create_or_update_many",
    "method": "createOrUpdateMany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create Or Update Many Users",
    "parameters": [
      {
        "name": "users",
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
    "url": "/api/v2/users/destroy_many",
    "method": "bulkDeleteMany",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Bulk Delete Users",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Id of the users to delete. Comma separated",
        "example": "1,2,3"
      },
      {
        "name": "externalIds",
        "schema": "string",
        "description": "External Id of the users to delete. Comma separated",
        "example": "abc,def,ghi"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/logout_many",
    "method": "logoutManyUsers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Logout many users",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Accepts a comma-separated list of up to 100 user ids.\n",
        "example": "1,2"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/users/me",
    "method": "showSelfInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Show Self",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/me/logout",
    "method": "deleteAuthenticatedSession",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Delete the Authenticated Session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v2/users/me/session",
    "method": "showAuthenticatedSession",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Show the Currently Authenticated Session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/me/session/renew",
    "method": "renewSession",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Renew the current session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/request_create",
    "method": "requestCreateReminder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Request User Create",
    "parameters": [
      {
        "name": "user",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/users/search",
    "method": "searchResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Search Users",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": "The `query` parameter supports the Zendesk search syntax for more advanced\nuser searches. It can specify a partial or full value of any\nuser property, including name, email address, notes, or phone. Example:\n`query=\"jdoe\"`.\nSee the [Search API](https://developer.zendesk.com).\n",
        "example": "jdoe"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "The `external_id` parameter does not support the search syntax. It only accepts ids.\n",
        "example": "abc124"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/show_many",
    "method": "getMany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Show Many Users",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Accepts a comma-separated list of up to 100 user ids.\n",
        "example": "1,2"
      },
      {
        "name": "externalIds",
        "schema": "string",
        "description": "Accepts a comma-separated list of up to 100 external ids.\n",
        "example": "abc,def"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/update_many",
    "method": "updateMany",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update Many Users",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Id of the users to update. Comma separated",
        "example": "1,2,3"
      },
      {
        "name": "externalIds",
        "schema": "string",
        "description": "External Id of the users to update. Comma separated",
        "example": "abc,def,ghi"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views",
    "method": "listAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "List Views",
    "parameters": [
      {
        "name": "access",
        "schema": "string",
        "description": "Only views with given access. May be \"personal\", \"shared\", or \"account\""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "Only active views if true, inactive views if false"
      },
      {
        "name": "groupId",
        "schema": "integer",
        "description": "Only views belonging to given group"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Possible values are \"alphabetical\", \"created_at\", or \"updated_at\". Defaults to \"position\""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "One of \"asc\" or \"desc\". Defaults to \"asc\" for alphabetical and position sort, \"desc\" for all others"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views",
    "method": "createNewView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Create View",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/{view_id}",
    "method": "deleteView",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Delete View",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/views/{view_id}",
    "method": "showView",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Show View",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/{view_id}",
    "method": "updateView",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Update View",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/{view_id}/count",
    "method": "countTickets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Count Tickets in View",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/{view_id}/execute",
    "method": "executeView",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Execute View",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "string",
        "description": "The ticket field used for sorting. This will either be a title or a custom field id."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "The direction the tickets are sorted. May be one of 'asc' or 'desc'"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/{view_id}/export",
    "method": "exportCsv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Export View",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/{view_id}/tickets",
    "method": "listTicketsFromView",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "List Tickets From a View",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Sort or group the tickets by a column in the [View columns](https://developer.zendesk.com) table. The `subject` and `submitter` columns are not supported"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "One of \"asc\" or \"desc\". Defaults to \"asc\" for alphabetical and position sort, \"desc\" for all others"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/active",
    "method": "listActiveViews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "List Active Views",
    "parameters": [
      {
        "name": "access",
        "schema": "string",
        "description": "Only views with given access. May be \"personal\", \"shared\", or \"account\""
      },
      {
        "name": "groupId",
        "schema": "integer",
        "description": "Only views belonging to given group"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Possible values are \"alphabetical\", \"created_at\", or \"updated_at\". Defaults to \"position\""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "One of \"asc\" or \"desc\". Defaults to \"asc\" for alphabetical and position sort, \"desc\" for all others"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/compact",
    "method": "listCompactViews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "List Views - Compact",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Count Views",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/count_many",
    "method": "getTicketCountForManyViews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Count Tickets in Views",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "List of view's ids separated by commas.",
        "example": "1,2,3"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/destroy_many",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Bulk Delete Views",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "The IDs of the views to delete",
        "example": "1,2,3"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content response"
      }
    ]
  },
  {
    "url": "/api/v2/views/preview",
    "method": "previewCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Preview Views",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/preview/count",
    "method": "getTicketCount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Preview Ticket Count",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/search",
    "method": "searchResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Search Views",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "Query string used to find all views with matching title",
        "example": "sales&group_id=25789188"
      },
      {
        "name": "access",
        "schema": "string",
        "description": "Filter views by access. May be \"personal\", \"shared\", or \"account\""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "Filter by active views if true or inactive views if false"
      },
      {
        "name": "groupId",
        "schema": "integer",
        "description": "Filter views by group"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Possible values are \"alphabetical\", \"created_at\", \"updated_at\", and \"position\". If unspecified, the views are sorted by relevance"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "One of \"asc\" or \"desc\". Defaults to \"asc\" for alphabetical and position sort, \"desc\" for all others"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "A sideload to include in the response. See [Sideloads](https://developer.zendesk.com)",
        "example": "permissions"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/show_many",
    "method": "listByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "List Views By ID",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "List of view's ids separated by commas.",
        "example": "1,2,3"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "Only active views if true, inactive views if false"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/views/update_many",
    "method": "updateMany",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Update Many Views",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/workspaces",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List Workspaces",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/workspaces",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Create Workspace",
    "parameters": [
      {
        "name": "workspace",
        "schema": "object",
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
    "url": "/api/v2/workspaces/{workspace_id}",
    "method": "deleteWorkspace",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Delete Workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/v2/workspaces/{workspace_id}",
    "method": "getWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Show Workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/workspaces/{workspace_id}",
    "method": "updateWorkspace",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Update Workspace",
    "parameters": [
      {
        "name": "workspace",
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
    "url": "/api/v2/workspaces/destroy_many",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Bulk Delete Workspaces",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": "The ids of the workspaces to delete",
        "example": [
          1,
          2,
          3
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  },
  {
    "url": "/api/v2/workspaces/reorder",
    "method": "reorderWorkspaces",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Reorder Workspaces",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty response"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Support API"
      apiBaseUrl="https://{subdomain}.{domain}.com"
      apiVersion="2.0.0"
      endpoints={316}
      sdkMethods={561}
      schemas={451}
      parameters={285}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zendesk/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zendesk/openapi.yaml"
      developerDocumentation="developer.zendesk.com/api-reference/"
    />
  );
}
  