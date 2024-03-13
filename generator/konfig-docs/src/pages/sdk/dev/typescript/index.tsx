import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function DevTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="dev-typescript-sdk"
      metaDescription="DEV is a community of software developers where they can share knowledge, collaborate, and learn from each other. It's a platform for writing, reading, and discussing code and software development topics. DEV also provides resources, tools, and opportunities for developers to grow their skills and network with industry professionals."
      company="DEV"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dev/logo.png"
      clientNameCamelCase="dev"
      homepage="dev.to"
      lastUpdated={new Date("2024-03-13T02:25:22.175Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dev/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dev/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["developer_tools","automation","collaboration","media","community_engagement","discussion","knowledge_sharing","platform","writing","reading","code","software_development","resources","skills","network","blogging","industry_professionals"]}
      methods={[
  {
    "url": "/api/articles",
    "method": "listPublishedArticles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "articles",
    "typeScriptTag": "articles",
    "description": "Published articles",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 30
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "Using this parameter will retrieve articles that contain the requested tag. Articles\nwill be ordered by descending popularity.This parameter can be used in conjuction with `top`.",
        "example": "discuss"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": false,
        "description": "Using this parameter will retrieve articles with any of the comma-separated tags.\nArticles will be ordered by descending popularity.",
        "example": "javascript, css"
      },
      {
        "name": "tagsExclude",
        "schema": "string",
        "required": false,
        "description": "Using this parameter will retrieve articles that do _not_ contain _any_\nof comma-separated tags. Articles will be ordered by descending popularity.",
        "example": "node, java"
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": "Using this parameter will retrieve articles belonging\n            to a User or Organization ordered by descending publication date.\n            If `state=all` the number of items returned will be `1000` instead of the default `30`.\n            This parameter can be used in conjuction with `state`.",
        "example": "ben"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "Using this parameter will allow the client to check which articles are fresh or rising.\n            If `state=fresh` the server will return fresh articles.\n            If `state=rising` the server will return rising articles.\n            This param can be used in conjuction with `username`, only if set to `all`.",
        "example": "fresh"
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Using this parameter will allow the client to return the most popular articles\nin the last `N` days.\n`top` indicates the number of days since publication of the articles returned.\nThis param can be used in conjuction with `tag`.",
        "example": 2
      },
      {
        "name": "collectionId",
        "schema": "integer",
        "required": false,
        "description": "Adding this will allow the client to return the list of articles\nbelonging to the requested collection, ordered by ascending publication date.",
        "example": 99
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/articles",
    "method": "createNewArticle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "articles",
    "typeScriptTag": "articles",
    "description": "Publish article",
    "parameters": [
      {
        "name": "article",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/articles/latest",
    "method": "listLatestPublished",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "articles",
    "typeScriptTag": "articles",
    "description": "Published articles sorted by published date",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
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
    "url": "/api/articles/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "articles",
    "typeScriptTag": "articles",
    "description": "Published article by id",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/articles/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "articles",
    "typeScriptTag": "articles",
    "description": "Update an article by id",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to unpublish.",
        "example": 123
      },
      {
        "name": "article",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/articles/{username}/{slug}",
    "method": "getByPath",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "articles",
    "typeScriptTag": "articles",
    "description": "Published article by path",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SLUG"
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
    "url": "/api/articles/me",
    "method": "getPublishedList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "articles",
    "typeScriptTag": "articles",
    "description": "User's articles",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 30
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
    "url": "/api/articles/me/published",
    "method": "getPublishedList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "articles",
    "typeScriptTag": "articles",
    "description": "User's published articles",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 30
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
    "url": "/api/articles/me/unpublished",
    "method": "getUnpublishedList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "articles",
    "typeScriptTag": "articles",
    "description": "User's unpublished articles",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 30
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
    "url": "/api/articles/me/all",
    "method": "getAllUserArticles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "articles",
    "typeScriptTag": "articles",
    "description": "User's all articles",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 30
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
    "url": "/api/articles/{id}/unpublish",
    "method": "unpublishById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "articles",
    "typeScriptTag": "articles",
    "description": "Unpublish an article",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the article to unpublish.",
        "example": 1
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": "Content for the note that's created along with unpublishing",
        "example": "Admin requested unpublishing all articles via API"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Article successfully unpublished"
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
    "url": "/api/segments",
    "method": "listAudienceSegments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "segments",
    "typeScriptTag": "segments",
    "description": "Manually managed audience segments",
    "parameters": [
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 30
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
    "url": "/api/segments",
    "method": "createManuallyManagedSegment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "segments",
    "typeScriptTag": "segments",
    "description": "Create a manually managed audience segment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/segments/{id}",
    "method": "deleteManuallyManagedSegment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "segments",
    "typeScriptTag": "segments",
    "description": "Delete a manually managed audience segment",
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
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/segments/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "segments",
    "typeScriptTag": "segments",
    "description": "A manually managed audience segment",
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
    "url": "/api/segments/{id}/users",
    "method": "getUserListInSegment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "segments",
    "typeScriptTag": "segments",
    "description": "Users in a manually managed audience segment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 30
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
    "url": "/api/segments/{id}/add_users",
    "method": "addUsersToSegment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "segments",
    "typeScriptTag": "segments",
    "description": "Add users to a manually managed audience segment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/segments/{id}/remove_users",
    "method": "removeUsersFromSegment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "segments",
    "typeScriptTag": "segments",
    "description": "Remove users from a manually managed audience segment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/billboards",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "billboards",
    "typeScriptTag": "billboards",
    "description": "Billboards",
    "parameters": [],
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
    "url": "/api/billboards",
    "method": "createNewBillboard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "billboards",
    "typeScriptTag": "billboards",
    "description": "Create a billboard",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/billboards/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "billboards",
    "typeScriptTag": "billboards",
    "description": "A billboard (by id)",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the billboard.",
        "example": 123
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
    "url": "/api/billboards/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "billboards",
    "typeScriptTag": "billboards",
    "description": "Update a billboard by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the billboard.",
        "example": 123
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
    "url": "/api/billboards/{id}/unpublish",
    "method": "unpublishBillboard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "billboards",
    "typeScriptTag": "billboards",
    "description": "Unpublish a billboard",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the billboard to unpublish.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content"
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
    "url": "/api/comments",
    "method": "getAllThreaded",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comments",
    "typeScriptTag": "comments",
    "description": "Comments",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 30
      },
      {
        "name": "aId",
        "schema": "string",
        "required": false,
        "description": "Article identifier.",
        "example": "321"
      },
      {
        "name": "pId",
        "schema": "string",
        "required": false,
        "description": "Podcast Episode identifier.",
        "example": "321"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page",
        "example": "321"
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
    "url": "/api/comments/{id}",
    "method": "getThreadedComment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comments",
    "typeScriptTag": "comments",
    "description": "Comment by id",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Comment identifier.",
        "example": 321
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
    "url": "/api/follows/tags",
    "method": "getTagList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "followed_tags",
    "typeScriptTag": "followedTags",
    "description": "Followed Tags",
    "parameters": [],
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
    "url": "/api/followers/users",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "followers",
    "typeScriptTag": "followers",
    "description": "Followers",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 30
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Default is 'created_at'. Specifies the sort order for the created_at param of the follow\n                                relationship. To sort by newest followers first (descending order) specify\n                                ?sort=-created_at.",
        "example": "created_at"
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
    "url": "/api/organizations/{username}",
    "method": "getByUsername",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "An organization (by username)",
    "parameters": [
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
    "url": "/api/organizations/{organization_id_or_username}/users",
    "method": "listUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Organization's users",
    "parameters": [
      {
        "name": "organizationIdOrUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID_OR_USERNAME"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 30
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
    "url": "/api/organizations/{organization_id_or_username}/articles",
    "method": "listArticles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Organization's Articles",
    "parameters": [
      {
        "name": "organizationIdOrUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID_OR_USERNAME"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 30
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
    "url": "/api/organizations",
    "method": "listOfDev",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Organizations",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
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
    "url": "/api/organizations",
    "method": "createNewOrganization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Create an Organization",
    "parameters": [
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type_of",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "twitter_username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "github_username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "joined_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tech_stack",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tag_line",
        "schema": "string",
        "description": ""
      },
      {
        "name": "story",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/organizations/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Delete an Organization by id",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization.",
        "example": 1
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
    "url": "/api/organizations/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "An organization (by id)",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/organizations/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Update an organization by id",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization to update.",
        "example": 123
      },
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type_of",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "twitter_username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "github_username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "joined_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tech_stack",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tag_line",
        "schema": "string",
        "description": ""
      },
      {
        "name": "story",
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
        "statusCode": "401",
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
    "url": "/api/pages",
    "method": "listAllDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pages",
    "typeScriptTag": "pages",
    "description": "show details for all pages",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/pages",
    "method": "createNewPage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "pages",
    "typeScriptTag": "pages",
    "description": "pages",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "slug",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body_markdown",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body_json",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_top_level_path",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "template",
        "schema": "string",
        "description": "",
        "default": "contained"
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/pages/{id}",
    "method": "removePageById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "pages",
    "typeScriptTag": "pages",
    "description": "remove a page",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the page.",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a page object"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/pages/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pages",
    "typeScriptTag": "pages",
    "description": "show details for a page",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the page.",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a page object"
      }
    ]
  },
  {
    "url": "/api/pages/{id}",
    "method": "updatePageDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "pages",
    "typeScriptTag": "pages",
    "description": "update details for a page",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the page.",
        "example": 1
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SLUG"
      },
      {
        "name": "body_markdown",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body_json",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_top_level_path",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "social_image",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "template",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATE",
        "default": "contained"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a page object"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/podcast_episodes",
    "method": "listByDescendingPublicationDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "podcast_episodes",
    "typeScriptTag": "podcastEpisodes",
    "description": "Podcast Episodes",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 30
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": "Using this parameter will retrieve episodes belonging to a specific podcast.",
        "example": "codenewbie"
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
    "url": "/api/profile_images/{username}",
    "method": "getByUsername",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile images",
    "typeScriptTag": "profileImages",
    "description": "A Users or organizations profile image",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The parameter is the username of the user or the username of the organization.",
        "example": "janedoe"
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
    "url": "/api/reactions/toggle",
    "method": "toggleUserReaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reactions",
    "typeScriptTag": "reactions",
    "description": "toggle reaction",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
      },
      {
        "name": "reactableId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "reactableType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REACTABLE_TYPE"
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
    "url": "/api/reactions",
    "method": "createReaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reactions",
    "typeScriptTag": "reactions",
    "description": "create reaction",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
      },
      {
        "name": "reactableId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "reactableType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REACTABLE_TYPE"
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
    "url": "/api/readinglist",
    "method": "getUserReadinglist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "readinglist",
    "typeScriptTag": "readinglist",
    "description": "Readinglist",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 30
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
    "url": "/api/tags",
    "method": "listByPopularity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Tags",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
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
    "url": "/api/users/{id}/suspend",
    "method": "suspendUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Suspend a User",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to suspend.",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User successfully unpublished"
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
    "url": "/api/users/{id}/limited",
    "method": "removeLimits",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Remove limited for a User",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to un-limit.",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User successfully un-limited"
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
    "url": "/api/users/{id}/limited",
    "method": "addLimitedRole",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Add limited role for a User",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to limit.",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User successfully limited"
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
    "url": "/api/users/{id}/spam",
    "method": "removeSpamRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Remove spam role from a User",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to remove the spam role from.",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully removed the spam role from a user"
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
    "url": "/api/users/{id}/spam",
    "method": "assignSpamRole",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Add spam role for a User",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to assign the spam role.",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Spam role assigned to the user successfully"
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
    "url": "/api/users/{id}/trusted",
    "method": "removeTrustedRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Remove trusted role from a User",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to remove the trusted role from.",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully removed the trusted role from a user"
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
    "url": "/api/users/{id}/trusted",
    "method": "addTrustedRole",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Add trusted role for a User",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to assign the trusted role.",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Trusted role assigned to the user successfully"
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
    "url": "/api/users/me",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "The authenticated user",
    "parameters": [],
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
    "url": "/api/users/{id}",
    "method": "getByIdOrUsername",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "A User",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
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
    "url": "/api/users/{id}/unpublish",
    "method": "unpublishUserArticlesAndComments",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Unpublish a User's Articles and Comments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to unpublish.",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User's articles and comments successfully unpublished"
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
    "url": "/api/admin/users",
    "method": "inviteUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Invite a User",
    "parameters": [
      {
        "name": "email",
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
        "description": "Successful"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/videos",
    "method": "listByPopularity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Articles with a video",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination page",
        "default": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.",
        "default": 24
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
      apiTitle="Forem API V1"
      apiBaseUrl="https://dev.to/api"
      apiVersion="1.0.0"
      endpoints={43}
      sdkMethods={58}
      schemas={147}
      parameters={129}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dev/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dev/openapi.yaml"
      developerDocumentation="developers.forem.com/"
    />
  );
}
  