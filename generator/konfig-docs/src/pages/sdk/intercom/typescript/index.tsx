import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function IntercomTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="intercom-typescript-sdk"
      metaDescription={`Intercom is the only complete Customer Service solution that provides a seamless customer experience across automation and human support, delivering increased customer satisfaction while reducing costs. We're building a future where most customer conversations are successfully resolved without needing human support, freeing up the team to work on higher value customer conversations.

More than 25,000 global organizations, including Atlassian, Amazon and Lyft Business, rely on Intercom to deliver unparalleled user experiences at any scale. Intercom's platform is used to send over 500 million messages per month and enables interactions with over 600 million monthly active end users.

Founded in 2011 and backed by leading venture capitalists, including Kleiner Perkins, Bessemer Venture Partners and Social Capital, Intercom is on a mission to make internet business personal.`}
      company="Intercom"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intercom/logo.png"
      companyKebabCase="intercom"
      clientNameCamelCase="intercom"
      homepage="intercom.com"
      lastUpdated={new Date("2024-03-27T21:57:00.629Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intercom/favicon.png"
      contactUrl="https://developers.intercom.com"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intercom/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["communication","customer_service","help_desk","customer_communication"]}
      methods={[
  {
    "url": "/me",
    "method": "getAdminDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Admins",
    "typeScriptTag": "admins",
    "description": "Identify an admin",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Admins are the teammate accounts that have access to a workspace"
      }
    ]
  },
  {
    "url": "/admins/{id}/away",
    "method": "setAdminAway",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Admins",
    "typeScriptTag": "admins",
    "description": "Set an admin to away",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of a given admin",
        "example": 0
      },
      {
        "name": "away_mode_enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "away_mode_reassign",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": false,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Admins are teammate accounts that have access to a workspace."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/admins/activity_logs",
    "method": "listActivityLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Admins",
    "typeScriptTag": "admins",
    "description": "List all activity logs",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "createdAtAfter",
        "schema": "string",
        "required": true,
        "description": "The start date that you request data for. It must be formatted as a UNIX timestamp.",
        "example": "1677253093"
      },
      {
        "name": "createdAtBefore",
        "schema": "string",
        "required": false,
        "description": "The end date that you request data for. It must be formatted as a UNIX timestamp.",
        "example": "1677861493"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of activity logs."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/admins",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Admins",
    "typeScriptTag": "admins",
    "description": "List all admins",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of admins associated with a given workspace."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/admins/{id}",
    "method": "getAdminById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Admins",
    "typeScriptTag": "admins",
    "description": "Retrieve an admin",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of a given admin",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Admins are teammate accounts that have access to a workspace."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/articles",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Articles",
    "typeScriptTag": "articles",
    "description": "List all articles",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This will return a list of articles for the App."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/articles",
    "method": "createNewArticle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Articles",
    "typeScriptTag": "articles",
    "description": "Create an article",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Thanks for everything"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Description of the Article"
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "<p>This is the body in html</p>"
      },
      {
        "name": "author_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1295
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "draft"
      },
      {
        "name": "parent_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 18
      },
      {
        "name": "parent_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "collection"
      },
      {
        "name": "translated_content",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The data returned about your articles when you list them."
      },
      {
        "statusCode": "400",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/articles/{id}",
    "method": "deleteArticleById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Articles",
    "typeScriptTag": "articles",
    "description": "Delete an article",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for the article which is given by Intercom.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response returned when an object is deleted"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/articles/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Articles",
    "typeScriptTag": "articles",
    "description": "Retrieve an article",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for the article which is given by Intercom.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The data returned about your articles when you list them."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/articles/{id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Articles",
    "typeScriptTag": "articles",
    "description": "Update an article",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for the article which is given by Intercom.",
        "example": 123
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Thanks for everything"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Description of the Article"
      },
      {
        "name": "body",
        "schema": "string",
        "description": "",
        "example": "<p>This is the body in html</p>"
      },
      {
        "name": "author_id",
        "schema": "integer",
        "description": "",
        "example": 1295
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "draft"
      },
      {
        "name": "parent_id",
        "schema": "string",
        "description": "",
        "example": "18"
      },
      {
        "name": "parent_type",
        "schema": "string",
        "description": "",
        "example": "collection"
      },
      {
        "name": "translated_content",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The data returned about your articles when you list them."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/help_center/collections",
    "method": "listAllCollections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Help Center",
    "typeScriptTag": "helpCenter",
    "description": "List all collections",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This will return a list of Collections for the App."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/help_center/collections",
    "method": "createCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Help Center",
    "typeScriptTag": "helpCenter",
    "description": "Create a collection",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "English description"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "collection 51"
      },
      {
        "name": "translated_content",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "help_center_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Collections are top level containers for Articles within the Help Center."
      },
      {
        "statusCode": "400",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/help_center/collections/{id}",
    "method": "deleteCollection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Help Center",
    "typeScriptTag": "helpCenter",
    "description": "Delete a collection",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for the collection which is given by Intercom.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response returned when an object is deleted"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/help_center/collections/{id}",
    "method": "getCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Help Center",
    "typeScriptTag": "helpCenter",
    "description": "Retrieve a collection",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for the collection which is given by Intercom.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Collections are top level containers for Articles within the Help Center."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/help_center/collections/{id}",
    "method": "updateCollectionById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Help Center",
    "typeScriptTag": "helpCenter",
    "description": "Update a collection",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for the collection which is given by Intercom.",
        "example": 123
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "English description"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "collection 51"
      },
      {
        "name": "translated_content",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Collections are top level containers for Articles within the Help Center."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/help_center/help_centers/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Help Center",
    "typeScriptTag": "helpCenter",
    "description": "Retrieve a Help Center",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for the collection which is given by Intercom.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Help Centers contain collections"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/help_center/help_centers",
    "method": "listAllHelpCenters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Help Center",
    "typeScriptTag": "helpCenter",
    "description": "List all Help Centers",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of Help Centers belonging to the App"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/help_center/sections",
    "method": "listAllSections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Help Center",
    "typeScriptTag": "helpCenter",
    "description": "List all sections",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This will return a list of Sections for the App."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/help_center/sections",
    "method": "createSection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Help Center",
    "typeScriptTag": "helpCenter",
    "description": "Create a section",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Section 51"
      },
      {
        "name": "parent_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 18
      },
      {
        "name": "translated_content",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sections are subdivisions of a collection, with a collection potentially having multiple sections."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/help_center/sections/{id}",
    "method": "deleteSection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Help Center",
    "typeScriptTag": "helpCenter",
    "description": "Delete a section",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for the section which is given by Intercom.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response returned when an object is deleted"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/help_center/sections/{id}",
    "method": "getSectionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Help Center",
    "typeScriptTag": "helpCenter",
    "description": "Retrieve a section",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for the section which is given by Intercom.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sections are subdivisions of a collection, with a collection potentially having multiple sections."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/help_center/sections/{id}",
    "method": "updateSectionById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Help Center",
    "typeScriptTag": "helpCenter",
    "description": "Update a section",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for the section which is given by Intercom.",
        "example": 123
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Section 51"
      },
      {
        "name": "parent_id",
        "schema": "integer",
        "description": "",
        "example": 18
      },
      {
        "name": "translated_content",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sections are subdivisions of a collection, with a collection potentially having multiple sections."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/companies",
    "method": "getAllCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Retrieve companies",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "The `name` of the company to filter by.",
        "example": "my company"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": "The `company_id` of the company to filter by.",
        "example": "12345"
      },
      {
        "name": "tagId",
        "schema": "string",
        "required": false,
        "description": "The `tag_id` of the company to filter by.",
        "example": "678910"
      },
      {
        "name": "segmentId",
        "schema": "string",
        "required": false,
        "description": "The `segment_id` of the company to filter by.",
        "example": "98765"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to fetch. Defaults to first page",
        "example": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "How many results to display per page. Defaults to 15",
        "example": 15
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This will return a list of companies for the App."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/companies",
    "method": "createOrUpdateCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Create or Update a company",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Intercom"
      },
      {
        "name": "company_id",
        "schema": "string",
        "description": "",
        "example": "625e90fc55ab113b6d92175f"
      },
      {
        "name": "plan",
        "schema": "string",
        "description": "",
        "example": "Enterprise"
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "",
        "example": 100
      },
      {
        "name": "website",
        "schema": "string",
        "description": "",
        "example": "https://www.example.com"
      },
      {
        "name": "industry",
        "schema": "string",
        "description": "",
        "example": "Manufacturing"
      },
      {
        "name": "custom_attributes",
        "schema": "object",
        "description": "",
        "example": {
          "paid_subscriber": true,
          "monthly_spend": 155.5,
          "team_mates": 9
        }
      },
      {
        "name": "remote_created_at",
        "schema": "integer",
        "description": "",
        "example": 1394531169
      },
      {
        "name": "monthly_spend",
        "schema": "integer",
        "description": "",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Companies allow you to represent organizations using your product. Each company will have its own description and be associated with contacts. You can fetch, create, update and list companies."
      },
      {
        "statusCode": "400",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/companies/{id}",
    "method": "deleteCompanyById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Delete a company",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the company which is given by Intercom",
        "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response returned when an object is deleted"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/companies/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Retrieve a company by ID",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the company which is given by Intercom",
        "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Companies allow you to represent organizations using your product. Each company will have its own description and be associated with contacts. You can fetch, create, update and list companies."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/companies/{id}",
    "method": "updateCompanyById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Update a company",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the company which is given by Intercom",
        "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Companies allow you to represent organizations using your product. Each company will have its own description and be associated with contacts. You can fetch, create, update and list companies."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/companies/{id}/contacts",
    "method": "listAttachedContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "List attached contacts",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the company which is given by Intercom",
        "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of Contact Objects"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/companies/{id}/segments",
    "method": "listAttachedSegments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "List attached segments for companies",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the company which is given by Intercom",
        "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of Segment Objects"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/companies/list",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "List all companies",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "what page of results to fetch. Defaults to first page",
        "example": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "how many results per page. Defaults to 15",
        "example": 15
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "`asc` or `desc`. Return the companies in ascending or descending order. Defaults to desc",
        "example": "desc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This will return a list of companies for the App."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/companies/scroll",
    "method": "scrollAllCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Scroll over all companies",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "scrollParam",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Companies allow you to represent organizations using your product. Each company will have its own description and be associated with contacts. You can fetch, create, update and list companies."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{id}/companies",
    "method": "listAttachedCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List attached companies for contact",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the contact which is given by Intercom",
        "example": "63a07ddf05a32042dffac965"
      },
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of Company Objects"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{id}/companies",
    "method": "attachContactTo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Attach a Contact to a Company",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the contact which is given by Intercom",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "58a430d35458202d41b1e65b"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Companies allow you to represent organizations using your product. Each company will have its own description and be associated with contacts. You can fetch, create, update and list companies."
      },
      {
        "statusCode": "400",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}/companies/{id}",
    "method": "detachContactFromCompany",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Detach a contact from a company",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the contact which is given by Intercom",
        "example": "58a430d35458202d41b1e65b"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the company which is given by Intercom",
        "example": "58a430d35458202d41b1e65b"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Companies allow you to represent organizations using your product. Each company will have its own description and be associated with contacts. You can fetch, create, update and list companies."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{id}/notes",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "List all notes",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of a contact.",
        "example": 0
      },
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of notes associated with a contact."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{id}/notes",
    "method": "addNoteToContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Create a note",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of a given contact.",
        "example": 123
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "New note"
      },
      {
        "name": "contact_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123"
      },
      {
        "name": "admin_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Notes allow you to annotate and comment on your contacts."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}/segments",
    "method": "getSegmentsForContact",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List attached segments for contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the contact which is given by Intercom",
        "example": "63a07ddf05a32042dffac965"
      },
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of segments objects attached to a specific contact."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}/subscriptions",
    "method": "listContactSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List subscriptions for a contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the contact which is given by Intercom",
        "example": "63a07ddf05a32042dffac965"
      },
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of subscription type objects."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}/subscriptions",
    "method": "addSubscriptionToContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription Types",
    "typeScriptTag": "subscriptionTypes",
    "description": "Add subscription to a contact",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the contact which is given by Intercom",
        "example": "63a07ddf05a32042dffac965"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "37846"
      },
      {
        "name": "consent_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "opt_in"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A subscription type lets customers easily opt out of non-essential communications without missing what's important to them."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}/subscriptions/{id}",
    "method": "removeFromContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscription Types",
    "typeScriptTag": "subscriptionTypes",
    "description": "Remove subscription from a contact",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the contact which is given by Intercom",
        "example": "63a07ddf05a32042dffac965"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the subscription type which is given by Intercom",
        "example": "37846"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A subscription type lets customers easily opt out of non-essential communications without missing what's important to them."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}/tags",
    "method": "getContactTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List tags attached to a contact",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the contact which is given by Intercom",
        "example": "63a07ddf05a32042dffac965"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of tags objects in the workspace."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}/tags",
    "method": "addTagToContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Add tag to a contact",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the contact which is given by Intercom",
        "example": "63a07ddf05a32042dffac965"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "7522907"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A tag allows you to label your contacts, companies, and conversations and list them using that tag."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}/tags/{id}",
    "method": "removeFromContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Remove tag from a contact",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the contact which is given by Intercom",
        "example": "63a07ddf05a32042dffac965"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the tag which is given by Intercom",
        "example": "7522907"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A tag allows you to label your contacts, companies, and conversations and list them using that tag."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{id}",
    "method": "deleteContactById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete a contact",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "deleted contact object"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get a contact",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id",
        "example": "63a07ddf05a32042dffac965"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact are the objects that represent your leads and users in Intercom."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{id}",
    "method": "updateContact",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update a contact",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id",
        "example": "63a07ddf05a32042dffac965"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact are the objects that represent your leads and users in Intercom."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/merge",
    "method": "mergeLeadUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Merge a lead and a user",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "",
        "example": "5d70dd30de4efd54f42fd526"
      },
      {
        "name": "into",
        "schema": "string",
        "description": "",
        "example": "5ba682d23d7cf92bef87bfd4"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact are the objects that represent your leads and users in Intercom."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
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
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "pagination",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contacts are your users in Intercom."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts",
    "method": "listAllContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List all contacts",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contacts are your users in Intercom."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts",
    "method": "createNewContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create contact",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact are the objects that represent your leads and users in Intercom."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/contacts/{id}/archive",
    "method": "archiveContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Archive contact",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id",
        "example": "63a07ddf05a32042dffac965"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "archived contact object"
      }
    ]
  },
  {
    "url": "/contacts/{id}/unarchive",
    "method": "unarchiveContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Unarchive contact",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id",
        "example": "63a07ddf05a32042dffac965"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "unarchived contact object"
      }
    ]
  },
  {
    "url": "/conversations/{conversation_id}/tags",
    "method": "addTagToConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Add tag to a conversation",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "conversation_id",
        "example": "64619700005694"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "7522907"
      },
      {
        "name": "admin_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "780"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A tag allows you to label your contacts, companies, and conversations and list them using that tag."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/conversations/{conversation_id}/tags/{id}",
    "method": "removeFromConversation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Remove tag from a conversation",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "conversation_id",
        "example": "64619700005694"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id",
        "example": "7522907"
      },
      {
        "name": "admin_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A tag allows you to label your contacts, companies, and conversations and list them using that tag."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/conversations",
    "method": "listAllConversations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List all conversations",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "How many results per page",
        "default": 20
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "required": false,
        "description": "String used to get the next page of conversations."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Paginated Response"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "403",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/conversations",
    "method": "createInAppMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Creates a conversation",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "from",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Hello"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Message are how you reach out to contacts in Intercom. They are created when an admin sends an outbound message to a contact."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "403",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/conversations/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Retrieve a conversation",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The id of the conversation to target",
        "example": 123
      },
      {
        "name": "displayAs",
        "schema": "string",
        "required": false,
        "description": "Set to plaintext to retrieve conversation messages in plain text.",
        "example": "plaintext"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "403",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/conversations/{id}",
    "method": "updateConversation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Update a conversation",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The id of the conversation to target",
        "example": 123
      },
      {
        "name": "displayAs",
        "schema": "string",
        "required": false,
        "description": "Set to plaintext to retrieve conversation messages in plain text.",
        "example": "plaintext"
      },
      {
        "name": "read",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "custom_attributes",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "403",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/conversations/search",
    "method": "searchConversations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Search conversations",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "pagination",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact."
      }
    ]
  },
  {
    "url": "/conversations/{id}/reply",
    "method": "replyMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Reply to a conversation",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Intercom provisioned identifier for the conversation or the string \"last\" to reply to the last part of the conversation",
        "example": "123 or \"last\""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "403",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/conversations/{id}/parts",
    "method": "manageConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Manage a conversation",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier for the conversation as given by Intercom.",
        "example": "123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "403",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/conversations/{id}/run_assignment_rules",
    "method": "runAssignmentRules",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Run Assignment Rules on a conversation",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier for the conversation as given by Intercom.",
        "example": "123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "403",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/conversations/{id}/customers",
    "method": "attachContactToConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Attach a contact to a conversation",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier for the conversation as given by Intercom.",
        "example": "123"
      },
      {
        "name": "admin_id",
        "schema": "string",
        "description": "",
        "example": "12345"
      },
      {
        "name": "customer",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "403",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/conversations/{conversation_id}/customers/{contact_id}",
    "method": "detachContactFromGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Detach a contact from a group conversation",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The identifier for the conversation as given by Intercom.",
        "example": "123"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The identifier for the contact as given by Intercom.",
        "example": "123"
      },
      {
        "name": "admin_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5017690"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "403",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "422",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/conversations/redact",
    "method": "redactConversationPart",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Redact a conversation part",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/data_attributes",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Attributes",
    "typeScriptTag": "dataAttributes",
    "description": "List all data attributes",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "model",
        "schema": "string",
        "required": false,
        "description": "Specify the data attribute model to return.",
        "example": "company"
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "required": false,
        "description": "Include archived attributes in the list. By default we return only non archived data attributes.",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of all data attributes belonging to a workspace for contacts, companies or conversations."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/data_attributes",
    "method": "createDataAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Attributes",
    "typeScriptTag": "dataAttributes",
    "description": "Create a data attribute",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My Data Attribute Description"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Data Attribute"
      },
      {
        "name": "model",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "contact"
      },
      {
        "name": "data_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "string"
      },
      {
        "name": "options",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "option1",
          "option2"
        ]
      },
      {
        "name": "messenger_writable",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Data Attributes are metadata used to describe your contact, company and conversation models. These include standard and custom attributes. By using the data attributes endpoint, you can get the global list of attributes for your workspace, as well as create and archive custom attributes."
      },
      {
        "statusCode": "400",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/data_attributes/{id}",
    "method": "updateAttributeById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Data Attributes",
    "typeScriptTag": "dataAttributes",
    "description": "Update a data attribute",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The data attribute id",
        "example": 1
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "My Data Attribute Description"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "options",
        "schema": "array",
        "description": "",
        "example": [
          "option1",
          "option2"
        ]
      },
      {
        "name": "messenger_writable",
        "schema": "boolean",
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Data Attributes are metadata used to describe your contact, company and conversation models. These include standard and custom attributes. By using the data attributes endpoint, you can get the global list of attributes for your workspace, as well as create and archive custom attributes."
      },
      {
        "statusCode": "400",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "422",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/events",
    "method": "listUserEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Events",
    "typeScriptTag": "dataEvents",
    "description": "List all data events",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "filter",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The value must be user",
        "example": "TYPE"
      },
      {
        "name": "summary",
        "schema": "boolean",
        "required": false,
        "description": "summary flag"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This will return a summary of data events for the App."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/events",
    "method": "submitEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Events",
    "typeScriptTag": "dataEvents",
    "description": "Submit a data event",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "event_name",
        "schema": "string",
        "description": "",
        "example": "invited-friend"
      },
      {
        "name": "created_at",
        "schema": "integer",
        "description": "",
        "example": 1671028894
      },
      {
        "name": "user_id",
        "schema": "string",
        "description": "",
        "example": "314159"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "8a88a590-e1c3-41e2-a502-e0649dbf721c"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "frodo.baggins@example.com"
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "",
        "example": {
          "invite_code": "ADDAFRIEND"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "successful"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/events/summaries",
    "method": "createEventSummaries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Events",
    "typeScriptTag": "dataEvents",
    "description": "Create event summaries",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "user_id",
        "schema": "string",
        "description": "",
        "example": "314159"
      },
      {
        "name": "event_summaries",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "successful"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/export/content/data",
    "method": "createContentExport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Export",
    "typeScriptTag": "dataExport",
    "description": "Create content data export",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "created_at_after",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1527811200
      },
      {
        "name": "created_at_before",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1527811200
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The data export api is used to view all message sent & viewed in a given timeframe."
      }
    ]
  },
  {
    "url": "/export/content/data/{job_identifier}",
    "method": "statusByJobIdentifier",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Export",
    "typeScriptTag": "dataExport",
    "description": "Show content data export",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "jobIdentifier",
        "schema": "string",
        "required": true,
        "description": "job_identifier",
        "example": "JOB_IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The data export api is used to view all message sent & viewed in a given timeframe."
      }
    ]
  },
  {
    "url": "/export/cancel/{job_identifier}",
    "method": "cancelJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Export",
    "typeScriptTag": "dataExport",
    "description": "Cancel content data export",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "jobIdentifier",
        "schema": "string",
        "required": true,
        "description": "job_identifier",
        "example": "JOB_IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The data export api is used to view all message sent & viewed in a given timeframe."
      }
    ]
  },
  {
    "url": "/download/content/data/{job_identifier}",
    "method": "downloadDataExport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Export",
    "typeScriptTag": "dataExport",
    "description": "Download content data export",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "jobIdentifier",
        "schema": "string",
        "required": true,
        "description": "job_identifier",
        "example": "JOB_IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "successful"
      }
    ]
  },
  {
    "url": "/messages",
    "method": "createMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Create a message",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "message_type",
        "schema": "string",
        "description": "",
        "example": "in_app"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": "",
        "example": "Thanks for everything"
      },
      {
        "name": "body",
        "schema": "string",
        "description": "",
        "example": "Hello there"
      },
      {
        "name": "template",
        "schema": "string",
        "description": "",
        "example": "plain"
      },
      {
        "name": "from",
        "schema": "object",
        "description": ""
      },
      {
        "name": "to",
        "schema": "object",
        "description": ""
      },
      {
        "name": "create_conversation_without_contact_reply",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Message are how you reach out to contacts in Intercom. They are created when an admin sends an outbound message to a contact."
      },
      {
        "statusCode": "400",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "403",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "422",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/news/news_items",
    "method": "listAllNewsItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "News",
    "typeScriptTag": "news",
    "description": "List all news items",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Paginated Response"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/news/news_items",
    "method": "createNewsItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "News",
    "typeScriptTag": "news",
    "description": "Create a news item",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Halloween is here!"
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "<p>New costumes in store for this spooky season</p>"
      },
      {
        "name": "sender_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "live"
      },
      {
        "name": "deliver_silently",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "labels",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "Product",
          "Update",
          "New"
        ]
      },
      {
        "name": "reactions",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "😆",
          "😅"
        ]
      },
      {
        "name": "newsfeed_assignments",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A News Item is a content type in Intercom enabling you to announce product updates, company news, promotions, events and more with your customers."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/news/news_items/{id}",
    "method": "deleteItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "News",
    "typeScriptTag": "news",
    "description": "Delete a news item",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for the news item which is given by Intercom.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response returned when an object is deleted"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/news/news_items/{id}",
    "method": "getItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "News",
    "typeScriptTag": "news",
    "description": "Retrieve a news item",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for the news item which is given by Intercom.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A News Item is a content type in Intercom enabling you to announce product updates, company news, promotions, events and more with your customers."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/news/news_items/{id}",
    "method": "updateNewsItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "News",
    "typeScriptTag": "news",
    "description": "Update a news item",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for the news item which is given by Intercom.",
        "example": 123
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Halloween is here!"
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "<p>New costumes in store for this spooky season</p>"
      },
      {
        "name": "sender_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "live"
      },
      {
        "name": "deliver_silently",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "labels",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "Product",
          "Update",
          "New"
        ]
      },
      {
        "name": "reactions",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "😆",
          "😅"
        ]
      },
      {
        "name": "newsfeed_assignments",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A News Item is a content type in Intercom enabling you to announce product updates, company news, promotions, events and more with your customers."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/news/newsfeeds/{id}/items",
    "method": "listLiveItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "News",
    "typeScriptTag": "news",
    "description": "List all live newsfeed items",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the news feed item which is given by Intercom.",
        "example": "123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Paginated Response"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/news/newsfeeds",
    "method": "listAllNewsfeeds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "News",
    "typeScriptTag": "news",
    "description": "List all newsfeeds",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Paginated Response"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/news/newsfeeds/{id}",
    "method": "getNewsfeed",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "News",
    "typeScriptTag": "news",
    "description": "Retrieve a newsfeed",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the news feed item which is given by Intercom.",
        "example": "123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A newsfeed is a collection of news items, targeted to a specific audience.\n\nNewsfeeds currently cannot be edited through the API, please refer to [this article](https://www.intercom.com/help/en/articles/6362267-getting-started-with-news) to set up your newsfeeds in Intercom.\n"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/notes/{id}",
    "method": "getNoteDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Retrieve a note",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of a given note",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Notes allow you to annotate and comment on your contacts."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/segments",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "List all segments",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "includeCount",
        "schema": "boolean",
        "required": false,
        "description": "It includes the count of contacts that belong to each segment.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This will return a list of Segment Objects. The result may also have a pages object if the response is paginated."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/segments/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Retrieve a segment",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identified of a given segment.",
        "example": "123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A segment is a group of your contacts defined by the rules that you set."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/subscription_types",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription Types",
    "typeScriptTag": "subscriptionTypes",
    "description": "List subscription types",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of subscription type objects."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/phone_call_redirects",
    "method": "deflectPhoneCalls",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Switch",
    "typeScriptTag": "switch",
    "description": "Create a phone Switch",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "+1 1234567890"
      },
      {
        "name": "custom_attributes",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Phone Switch Response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags",
    "method": "getAllTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List all tags",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of tags objects in the workspace."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/tags",
    "method": "createOrUpdateTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create or update a tag, Tag or untag companies, Tag contacts",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A tag allows you to label your contacts, companies, and conversations and list them using that tag."
      },
      {
        "statusCode": "400",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/tags/{id}",
    "method": "deleteTagById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Delete tag",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of a given tag",
        "example": "123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful"
      },
      {
        "statusCode": "400",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/tags/{id}",
    "method": "findSpecificTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Find a specific tag",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of a given tag",
        "example": "123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A tag allows you to label your contacts, companies, and conversations and list them using that tag."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/teams",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "List all teams",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This will return a list of team objects for the App."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/teams/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Retrieve a team",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of a given team.",
        "example": "123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Teams are groups of admins in Intercom."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/ticket_types/{ticket_type_id}/attributes",
    "method": "createNewAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ticket Type Attributes",
    "typeScriptTag": "ticketTypeAttributes",
    "description": "Create a new attribute for a ticket type",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "ticketTypeId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the ticket type which is given by Intercom.",
        "example": "TICKET_TYPE_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Priority level of the bug"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Bug Priority"
      },
      {
        "name": "data_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "string"
      },
      {
        "name": "required_to_create",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "required_to_create_for_contacts",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "visible_on_create",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "visible_to_contacts",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "multiline",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "list_items",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Low Priority,Medium Priority,High Priority"
      },
      {
        "name": "allow_multiple_values",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Ticket type attribute, used to define each data field to be captured in a ticket."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/ticket_types/{ticket_type_id}/attributes/{id}",
    "method": "updateExistingAttribute",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ticket Type Attributes",
    "typeScriptTag": "ticketTypeAttributes",
    "description": "Update an existing attribute for a ticket type",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "ticketTypeId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the ticket type which is given by Intercom.",
        "example": "TICKET_TYPE_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the ticket type attribute which is given by Intercom.",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Priority level of the bug"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Bug Priority"
      },
      {
        "name": "required_to_create",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "required_to_create_for_contacts",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "visible_on_create",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "visible_to_contacts",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "multiline",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "list_items",
        "schema": "string",
        "description": "",
        "example": "Low Priority,Medium Priority,High Priority"
      },
      {
        "name": "allow_multiple_values",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Ticket type attribute, used to define each data field to be captured in a ticket."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/ticket_types",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Types",
    "typeScriptTag": "ticketTypes",
    "description": "List all ticket types",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of ticket types associated with a given workspace."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/ticket_types",
    "method": "createNewType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ticket Types",
    "typeScriptTag": "ticketTypes",
    "description": "Create a ticket type",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Used for tracking bugs"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Bug"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "🐞",
        "default": "🎟️"
      },
      {
        "name": "is_internal",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A ticket type, used to define the data fields to be captured in a ticket."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/ticket_types/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ticket Types",
    "typeScriptTag": "ticketTypes",
    "description": "Retrieve a ticket type",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the ticket type which is given by Intercom.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A ticket type, used to define the data fields to be captured in a ticket."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/ticket_types/{id}",
    "method": "updateTicketTypeById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ticket Types",
    "typeScriptTag": "ticketTypes",
    "description": "Update a ticket type",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the ticket type which is given by Intercom.",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "A bug has been occured"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Bug"
      },
      {
        "name": "icon",
        "schema": "string",
        "description": "",
        "example": "🐞",
        "default": "🎟️"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "is_internal",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A ticket type, used to define the data fields to be captured in a ticket."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/tickets/{id}/reply",
    "method": "replyNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Reply to a ticket",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "<p>Okay!</p>"
      },
      {
        "name": "message_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "note",
        "default": "note"
      },
      {
        "name": "admin_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Ticket Part representing a note in the ticket"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/tickets",
    "method": "createNewTicket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Create a ticket",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "ticket_type_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234"
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "id": "1234"
          }
        ]
      },
      {
        "name": "ticket_attributes",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "name": "example",
          "question": "Can I have some help?"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tickets are how you track requests from your users."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/tickets/{id}",
    "method": "getTicketDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Retrieve a ticket",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the ticket which is given by Intercom.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tickets are how you track requests from your users."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/tickets/{id}",
    "method": "updateTicketById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Update a ticket",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the ticket which is given by Intercom",
        "example": "ID"
      },
      {
        "name": "ticket_attributes",
        "schema": "object",
        "description": "",
        "example": {
          "title": "example",
          "description": "having a problem"
        }
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "submitted"
      },
      {
        "name": "is_shared",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "assignment",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tickets are how you track requests from your users."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/visitors",
    "method": "getWithUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Visitors",
    "typeScriptTag": "visitors",
    "description": "Retrieve a visitor with User ID",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user_id of the Visitor you want to retrieve.",
        "example": "USER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Visitors are useful for representing anonymous people that have not yet been identified. They usually represent website visitors. Visitors are not visible in Intercom platform. The Visitors resource provides methods to fetch, update, convert and delete."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/visitors",
    "method": "updateExistingVisitor",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Visitors",
    "typeScriptTag": "visitors",
    "description": "Update a visitor",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "8a88a590-e"
      },
      {
        "name": "user_id",
        "schema": "string",
        "description": "",
        "example": "123"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Christian Bale"
      },
      {
        "name": "custom_attributes",
        "schema": "object",
        "description": "",
        "example": {
          "paid_subscriber": true,
          "monthly_spend": 155.5,
          "team_mates": 9
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Visitors are useful for representing anonymous people that have not yet been identified. They usually represent website visitors. Visitors are not visible in Intercom platform. The Visitors resource provides methods to fetch, update, convert and delete."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/visitors/{id}",
    "method": "deleteVisitorById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Visitors",
    "typeScriptTag": "visitors",
    "description": "Delete a visitor",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id provided by Intercom.",
        "example": "5e1c4c1c-7b1e-4b5d-8c1c-5e1c4c1c7b1e"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response returned when an object is deleted"
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/visitors/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Visitors",
    "typeScriptTag": "visitors",
    "description": "Retrieve a visitor with ID",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id provided by Intercom.",
        "example": "5e1c4c1c-7b1e-4b5d-8c1c-5e1c4c1c7b1e"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Visitors are useful for representing anonymous people that have not yet been identified. They usually represent website visitors. Visitors are not visible in Intercom platform. The Visitors resource provides methods to fetch, update, convert and delete."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      },
      {
        "statusCode": "404",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  },
  {
    "url": "/visitors/convert",
    "method": "convertVisitorToContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Visitors",
    "typeScriptTag": "visitors",
    "description": "Convert a visitor",
    "parameters": [
      {
        "name": "intercomVersion",
        "schema": "string",
        "description": "",
        "example": "2.9",
        "default": "2.9"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "user"
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "visitor",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact are the objects that represent your leads and users in Intercom."
      },
      {
        "statusCode": "401",
        "description": "The API will return an Error List for a failed request, which will contain one or more Error objects."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Intercom API"
      apiBaseUrl="https://api.intercom.io"
      apiVersion="2.9"
      endpoints={77}
      sdkMethods={110}
      schemas={174}
      parameters={359}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intercom/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/intercom/openapi.yaml"
      developerDocumentation="developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/"
    />
  );
}
  