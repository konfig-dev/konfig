import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BitbucketTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="bitbucket-typescript-sdk"
      metaDescription={`Bitbucket offers Git and Mercurial based source code management and collaboration solutions in the cloud.`}
      company="Bitbucket"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bitbucket/logo.png"
      companyKebabCase="bitbucket"
      clientNameCamelCase="bitbucket"
      homepage="bitbucket.org/product"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bitbucket/favicon.png"
      contactUrl="https://support.atlassian.com/bitbucket-cloud/"
      contactEmail="support@bitbucket.org"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bitbucket/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["version_control"]}
      methods={[
  {
    "url": "/addon",
    "method": "deleteUserApp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Addon",
    "typeScriptTag": "addon",
    "description": "Delete an app",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request has succeeded. The application has been deleted for the user."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/addon",
    "method": "updateAppInstallation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Addon",
    "typeScriptTag": "addon",
    "description": "Update an installed app",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request has succeeded. The installation has been updated to the new descriptor."
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/addon/linkers",
    "method": "listLinkers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addon",
    "typeScriptTag": "addon",
    "description": "List linkers for an app",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/addon/linkers/{linker_key}",
    "method": "getLinker",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addon",
    "typeScriptTag": "addon",
    "description": "Get a linker for an app",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/addon/linkers/{linker_key}/values",
    "method": "deleteLinkerValues",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Addon",
    "typeScriptTag": "addon",
    "description": "Delete all linker values",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully deleted the linker values."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/addon/linkers/{linker_key}/values",
    "method": "listLinkerValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addon",
    "typeScriptTag": "addon",
    "description": "List linker values for a linker",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/addon/linkers/{linker_key}/values",
    "method": "createLinkerValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Addon",
    "typeScriptTag": "addon",
    "description": "Create a linker value",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "Successfully created the linker value."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "409",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/addon/linkers/{linker_key}/values",
    "method": "updateLinkerValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Addon",
    "typeScriptTag": "addon",
    "description": "Update a linker value",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully updated the linker values."
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/addon/linkers/{linker_key}/values/{value_id}",
    "method": "deleteLinkerValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Addon",
    "typeScriptTag": "addon",
    "description": "Delete a linker value",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully deleted the linker value."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/addon/linkers/{linker_key}/values/{value_id}",
    "method": "getLinkerValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addon",
    "typeScriptTag": "addon",
    "description": "Get a linker value",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/hook_events",
    "method": "getResourceEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get a webhook resource",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The mapping of resource/subject types pointing to their individual event types."
      }
    ]
  },
  {
    "url": "/hook_events/{subject_type}",
    "method": "listSubscribableTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List subscribable webhook types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of webhook types available to subscribe on."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/pullrequests/{selected_user}",
    "method": "listForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "List pull requests for a user",
    "parameters": [
      {
        "name": "state",
        "schema": "string",
        "description": "Only return pull requests that are in this state. This parameter can be repeated."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of pullrequests."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories",
    "method": "listPublicRepositories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "List public repositories",
    "parameters": [
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "Filter the results to include only repositories created on or\nafter this [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)\n timestamp. Example: `YYYY-MM-DDTHH:mm:ss.sssZ`"
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": "Filters the result based on the authenticated user's role on each repository.\n\n* **member**: returns repositories to which the user has explicit read access\n* **contributor**: returns repositories to which the user has explicit write access\n* **admin**: returns repositories to which the user has explicit administrator access\n* **owner**: returns all repositories owned by the current user\n"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Query string to narrow down the response as per [filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\n`role` parameter must also be specified.\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Field by which the results should be sorted as per [filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of repositories."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}",
    "method": "listInWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "List repositories in a workspace",
    "parameters": [
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": "\nFilters the result based on the authenticated user's role on each repository.\n\n* **member**: returns repositories to which the user has explicit read access\n* **contributor**: returns repositories to which the user has explicit write access\n* **admin**: returns repositories to which the user has explicit administrator access\n* **owner**: returns all repositories owned by the current user\n"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "\nQuery string to narrow down the response as per [filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "\nField by which the results should be sorted as per [filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\n        "
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of repositories."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "410",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}",
    "method": "deleteRepository",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Delete a repository",
    "parameters": [
      {
        "name": "redirectTo",
        "schema": "string",
        "required": false,
        "description": "If a repository has been moved to a new location, use this parameter to\nshow users a friendly message in the Bitbucket UI that the repository\nhas moved to a new location. However, a GET to this endpoint will still\nreturn a 404.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Indicates successful deletion."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}",
    "method": "getRepositoryDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Get a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}",
    "method": "createRepo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Create a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Update a repository",
    "parameters": [],
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
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/branch-restrictions",
    "method": "listBranchRestrictions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branch restrictions",
    "typeScriptTag": "branchRestrictions",
    "description": "List branch restrictions",
    "parameters": [
      {
        "name": "kind",
        "schema": "string",
        "required": false,
        "description": "Branch restrictions of this type"
      },
      {
        "name": "pattern",
        "schema": "string",
        "required": false,
        "description": "Branch restrictions applied to branches of this pattern"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of branch restriction rules."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/branch-restrictions",
    "method": "createRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Branch restrictions",
    "typeScriptTag": "branchRestrictions",
    "description": "Create a branch restriction rule",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}",
    "method": "deleteRule",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Branch restrictions",
    "typeScriptTag": "branchRestrictions",
    "description": "Delete a branch restriction rule",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}",
    "method": "getRule",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branch restrictions",
    "typeScriptTag": "branchRestrictions",
    "description": "Get a branch restriction rule",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}",
    "method": "updateRule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Branch restrictions",
    "typeScriptTag": "branchRestrictions",
    "description": "Update a branch restriction rule",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/branching-model",
    "method": "getBranchingModel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branching model",
    "typeScriptTag": "branchingModel",
    "description": "Get the branching model for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/branching-model/settings",
    "method": "getRepositoryBranchingSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branching model",
    "typeScriptTag": "branchingModel",
    "description": "Get the branching model config for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/branching-model/settings",
    "method": "updateConfig",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Branching model",
    "typeScriptTag": "branchingModel",
    "description": "Update the branching model config for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}",
    "method": "getCommitDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "Get a commit",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve",
    "method": "unapproveCommit",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "Unapprove a commit",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response indicating the authenticated user's approval has been withdrawn."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve",
    "method": "approveCommit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "Approve a commit",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments",
    "method": "listComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "List a commit's comments",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Query string to narrow down the response as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Field by which the results should be sorted as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of commit comments."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments",
    "method": "createComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "Create comment for a commit",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "The newly created comment."
      },
      {
        "statusCode": "400",
        "description": "If the comment was detected as spam, or if the parent comment is not attached to the same node as the new comment"
      },
      {
        "statusCode": "404",
        "description": "If a parent ID was passed in that cannot be found"
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "Delete a commit comment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Indicates the comment was deleted by this action or a previous delete."
      },
      {
        "statusCode": "404",
        "description": "If the comment doesn't exist"
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}",
    "method": "getCommitComment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "Get a commit comment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "Update a commit comment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "The newly updated comment."
      },
      {
        "statusCode": "400",
        "description": "If the comment update was detected as spam"
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}",
    "method": "deleteCommitApplicationProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Delete a commit application property",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The repository container; either the workspace slug or the UUID in curly braces.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "commit",
        "schema": "string",
        "required": true,
        "description": "The commit.",
        "example": "COMMIT"
      },
      {
        "name": "appKey",
        "schema": "string",
        "required": true,
        "description": "The key of the Connect app.",
        "example": "APP_KEY"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "The name of the property.",
        "example": "PROPERTY_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}",
    "method": "getValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Get a commit application property",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The repository container; either the workspace slug or the UUID in curly braces.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "commit",
        "schema": "string",
        "required": true,
        "description": "The commit.",
        "example": "COMMIT"
      },
      {
        "name": "appKey",
        "schema": "string",
        "required": true,
        "description": "The key of the Connect app.",
        "example": "APP_KEY"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "The name of the property.",
        "example": "PROPERTY_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An application property. It is a caller defined JSON object that Bitbucket will store and return. \nThe `_attributes` field at its top level can be used to control who is allowed to read and update the property. \nThe keys of the JSON object must match an allowed pattern. For details, \nsee [Application properties](https://dac-static.atlassian.com).\n"
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}",
    "method": "updateCommitApplicationProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Update a commit application property",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The repository container; either the workspace slug or the UUID in curly braces.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "commit",
        "schema": "string",
        "required": true,
        "description": "The commit.",
        "example": "COMMIT"
      },
      {
        "name": "appKey",
        "schema": "string",
        "required": true,
        "description": "The key of the Connect app.",
        "example": "APP_KEY"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "The name of the property.",
        "example": "PROPERTY_NAME"
      },
      {
        "name": "_attributes",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests",
    "method": "listContainingCommit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "List pull requests that contain a commit",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository; either the UUID in curly braces, or the slug",
        "example": "REPO_SLUG"
      },
      {
        "name": "commit",
        "schema": "string",
        "required": true,
        "description": "The SHA1 of the commit",
        "example": "COMMIT"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which page to retrieve",
        "default": 1
      },
      {
        "name": "pagelen",
        "schema": "integer",
        "required": false,
        "description": "How many pull requests to retrieve per page",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of pullrequests."
      },
      {
        "statusCode": "202",
        "description": "A paginated list of pullrequests."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports",
    "method": "listLinkedReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "List reports",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "commit",
        "schema": "string",
        "required": true,
        "description": "The commit for which to retrieve reports.",
        "example": "COMMIT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of reports."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}",
    "method": "deleteReport",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Delete a report",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "commit",
        "schema": "string",
        "required": true,
        "description": "The commit the report belongs to.",
        "example": "COMMIT"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Either the uuid or external-id of the report.",
        "example": "REPORTID"
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
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}",
    "method": "getSingleReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get a report",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "commit",
        "schema": "string",
        "required": true,
        "description": "The commit the report belongs to.",
        "example": "COMMIT"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Either the uuid or external-id of the report.",
        "example": "REPORTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}",
    "method": "commitReportCreateOrUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Create or update a report",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "commit",
        "schema": "string",
        "required": true,
        "description": "The commit the report belongs to.",
        "example": "COMMIT"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Either the uuid or external-id of the report.",
        "example": "REPORTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations",
    "method": "listAnnotations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "List annotations",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "commit",
        "schema": "string",
        "required": true,
        "description": "The commit for which to retrieve reports.",
        "example": "COMMIT"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Uuid or external-if of the report for which to get annotations for.",
        "example": "REPORTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of annotations."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations",
    "method": "bulkCreateOrUpdateAnnotations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Bulk create or update annotations",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "commit",
        "schema": "string",
        "required": true,
        "description": "The commit for which to retrieve reports.",
        "example": "COMMIT"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Uuid or external-if of the report for which to get annotations for.",
        "example": "REPORTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}",
    "method": "deleteAnnotation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Delete an annotation",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "commit",
        "schema": "string",
        "required": true,
        "description": "The commit the annotation belongs to.",
        "example": "COMMIT"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Either the uuid or external-id of the annotation.",
        "example": "REPORTID"
      },
      {
        "name": "annotationId",
        "schema": "string",
        "required": true,
        "description": "Either the uuid or external-id of the annotation.",
        "example": "ANNOTATIONID"
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
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}",
    "method": "getAnnotation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get an annotation",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "commit",
        "schema": "string",
        "required": true,
        "description": "The commit the report belongs to.",
        "example": "COMMIT"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Either the uuid or external-id of the report.",
        "example": "REPORTID"
      },
      {
        "name": "annotationId",
        "schema": "string",
        "required": true,
        "description": "Either the uuid or external-id of the annotation.",
        "example": "ANNOTATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}",
    "method": "commitAnnotations",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Create or update an annotation",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "commit",
        "schema": "string",
        "required": true,
        "description": "The commit the report belongs to.",
        "example": "COMMIT"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Either the uuid or external-id of the report.",
        "example": "REPORTID"
      },
      {
        "name": "annotationId",
        "schema": "string",
        "required": true,
        "description": "Either the uuid or external-id of the annotation.",
        "example": "ANNOTATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses",
    "method": "listForCommit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commit statuses",
    "typeScriptTag": "commitStatuses",
    "description": "List commit statuses for a commit",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Query string to narrow down the response as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Field by which the results should be sorted as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\nDefaults to `created_on`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of commit status objects."
      },
      {
        "statusCode": "401",
        "description": "If the repository is private and the request was not authenticated."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build",
    "method": "createBuildStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Commit statuses",
    "typeScriptTag": "commitStatuses",
    "description": "Create a build status for a commit",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "If the repository is private and the request was not authenticated."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}",
    "method": "getBuildStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commit statuses",
    "typeScriptTag": "commitStatuses",
    "description": "Get a build status for a commit",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "If the repository is private and the request was not authenticated."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}",
    "method": "updateBuildStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Commit statuses",
    "typeScriptTag": "commitStatuses",
    "description": "Update a build status for a commit",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "If the repository is private and the request was not authenticated."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commits",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "List commits",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of commits."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commits",
    "method": "listWithIncludeExclude",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "List commits with include/exclude",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of commits."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commits/{revision}",
    "method": "listForRevision",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "List commits for revision",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of commits."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/commits/{revision}",
    "method": "listForRevision",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "List commits for revision using include/exclude",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of commits."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/components",
    "method": "listComponents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "List components",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of issue tracker components."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/components/{component_id}",
    "method": "getComponent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Get a component for issues",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/default-reviewers",
    "method": "listDefaultReviewers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "List default reviewers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of accounts."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}",
    "method": "removeDefaultReviewer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Remove a user from the default reviewers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The specified user successfully removed from the default reviewers"
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}",
    "method": "getDefaultReviewer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Get a default reviewer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}",
    "method": "addUserToDefaultReviewers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Add a user to the default reviewers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/deploy-keys",
    "method": "listRepositoryDeployKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "List repository deploy keys",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of deploy keys."
      },
      {
        "statusCode": "403",
        "description": "If the specified user or repository is not accessible to the current user"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/deploy-keys",
    "method": "addRepositoryDeployKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "Add a repository deploy key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid deploy key inputs"
      },
      {
        "statusCode": "403",
        "description": "If the specified user or repository is not accessible to the current user"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}",
    "method": "repositoryKeyDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "Delete a repository deploy key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The key has been deleted"
      },
      {
        "statusCode": "403",
        "description": "If the current user does not have permission to delete a key for the specified user"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}",
    "method": "getDeployKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "Get a repository deploy key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If the specified user or repository is not accessible to the current user"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}",
    "method": "updateRepositoryDeployKey",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "Update a repository deploy key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "If the current user does not have permission to add a key for the specified user"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/deployments",
    "method": "listDeployments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "List deployments",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of deployments"
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}",
    "method": "getSingleDeployment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "Get a deployment",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "deploymentUuid",
        "schema": "string",
        "required": true,
        "description": "The deployment UUID.",
        "example": "DEPLOYMENT_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables",
    "method": "listEnvironmentVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "List variables for an environment",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "environmentUuid",
        "schema": "string",
        "required": true,
        "description": "The environment.",
        "example": "ENVIRONMENT_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of deployment variables."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables",
    "method": "createDeploymentEnvironmentVariable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Create a variable for an environment",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "environmentUuid",
        "schema": "string",
        "required": true,
        "description": "The environment.",
        "example": "ENVIRONMENT_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "409",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}",
    "method": "deleteVariableForEnvironment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Delete a variable for an environment",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "environmentUuid",
        "schema": "string",
        "required": true,
        "description": "The environment.",
        "example": "ENVIRONMENT_UUID"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable to delete.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The variable was deleted."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}",
    "method": "updateEnvironmentVariable",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Update a variable for an environment",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "environmentUuid",
        "schema": "string",
        "required": true,
        "description": "The environment.",
        "example": "ENVIRONMENT_UUID"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable to update.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/diff/{spec}",
    "method": "compareTwoCommitsDiff",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "Compare two commits",
    "parameters": [
      {
        "name": "context",
        "schema": "integer",
        "required": false,
        "description": "Generate diffs with <n> lines of context instead of the usual three."
      },
      {
        "name": "path",
        "schema": "string",
        "required": false,
        "description": "Limit the diff to a particular file (this parameter\ncan be repeated for multiple paths)."
      },
      {
        "name": "ignoreWhitespace",
        "schema": "boolean",
        "required": false,
        "description": "Generate diffs that ignore whitespace."
      },
      {
        "name": "binary",
        "schema": "boolean",
        "required": false,
        "description": "Generate diffs that include binary files, true if omitted."
      },
      {
        "name": "renames",
        "schema": "boolean",
        "required": false,
        "description": "Whether to perform rename detection, true if omitted."
      },
      {
        "name": "merge",
        "schema": "boolean",
        "required": false,
        "description": "This parameter is deprecated. The 'topic' parameter should be used\ninstead. The 'merge' and 'topic' parameters cannot be both used at\nthe same time.\n\nIf true, the source commit is merged into the\ndestination commit, and then a diff from the\ndestination to the merge result is returned. If false,\na simple 'two dot' diff between the source and\ndestination is returned. True if omitted."
      },
      {
        "name": "topic",
        "schema": "boolean",
        "required": false,
        "description": "If true, returns 2-way 'three-dot' diff.\nThis is a diff between the source commit and the merge base\nof the source commit and the destination commit.\nIf false, a simple 'two dot' diff between the source and\ndestination is returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The raw diff"
      },
      {
        "statusCode": "555",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/diffstat/{spec}",
    "method": "compareDiffStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "Compare two commit diff stats",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of diffstats."
      },
      {
        "statusCode": "555",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/downloads",
    "method": "listArtifacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Downloads",
    "typeScriptTag": "downloads",
    "description": "List download artifacts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns a paginated list of the downloads associated with the repository."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/downloads",
    "method": "uploadArtifact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Downloads",
    "typeScriptTag": "downloads",
    "description": "Upload a download artifact",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "The artifact was uploaded sucessfully."
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "406",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/downloads/{filename}",
    "method": "deleteArtifact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Downloads",
    "typeScriptTag": "downloads",
    "description": "Delete a download artifact",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The specified download artifact was deleted."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/downloads/{filename}",
    "method": "artifactLinkGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Downloads",
    "typeScriptTag": "downloads",
    "description": "Get a download artifact link",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "302",
        "description": "Redirects to the url of the specified download artifact."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/effective-branching-model",
    "method": "getEffectiveBranchingModel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branching model",
    "typeScriptTag": "branchingModel",
    "description": "Get the effective, or currently applied, branching model for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/effective-default-reviewers",
    "method": "listEffectiveDefaultReviewers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "List effective default reviewers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of default reviewers with reviewer type."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/environments",
    "method": "listEnvironments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "List environments",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of environments"
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/environments",
    "method": "createEnvironment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "Create an environment",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "409",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}",
    "method": "deleteEnvironment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "Delete an environment",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "environmentUuid",
        "schema": "string",
        "required": true,
        "description": "The environment UUID.",
        "example": "ENVIRONMENT_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The environment was deleted."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}",
    "method": "getEnvironment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "Get an environment",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "environmentUuid",
        "schema": "string",
        "required": true,
        "description": "The environment UUID.",
        "example": "ENVIRONMENT_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes",
    "method": "updateEnvironment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "Update an environment",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "environmentUuid",
        "schema": "string",
        "required": true,
        "description": "The environment UUID.",
        "example": "ENVIRONMENT_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "The environment update request was accepted."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}",
    "method": "filehistoryListCommits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "List commits that modified a file",
    "parameters": [
      {
        "name": "renames",
        "schema": "string",
        "required": false,
        "description": "\nWhen `true`, Bitbucket will follow the history of the file across\nrenames (this is the default behavior). This can be turned off by\nspecifying `false`."
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "\nQuery string to narrow down the response as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "\nName of a response property sort the result by as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of commit_file objects."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/forks",
    "method": "listForks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "List repository forks",
    "parameters": [
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": "Filters the result based on the authenticated user's role on each repository.\n\n* **member**: returns repositories to which the user has explicit read access\n* **contributor**: returns repositories to which the user has explicit write access\n* **admin**: returns repositories to which the user has explicit administrator access\n* **owner**: returns all repositories owned by the current user\n"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Query string to narrow down the response as per [filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Field by which the results should be sorted as per [filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of repositories."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/forks",
    "method": "forkRepository",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Fork a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/hooks",
    "method": "listWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "List webhooks for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of webhook subscriptions"
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/hooks",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Create a webhook for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/hooks/{uid}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Delete a webhook for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "When the webhook was deleted successfully"
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/hooks/{uid}",
    "method": "getWebhookByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Get a webhook for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/hooks/{uid}",
    "method": "updateWebhookSubscription",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Update a webhook for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues",
    "method": "listIssuesInWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "List issues",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of issues."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues",
    "method": "createNewIssue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Create an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/export",
    "method": "initiateJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Export issues",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "project_key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "project_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "send_email",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "include_attachments",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "The export job has been accepted"
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/export/{repo_name}-issues-{task_id}.zip",
    "method": "checkExportStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Check issue export status",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "The status of an import or export job"
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/import",
    "method": "checkImportStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Check issue import status",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The status of an import or export job"
      },
      {
        "statusCode": "202",
        "description": "The status of an import or export job"
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/import",
    "method": "importIssuesFromZip",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Import issues",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "The status of an import or export job"
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "409",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}",
    "method": "deleteIssue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Delete an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}",
    "method": "getIssueById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Get an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "410",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}",
    "method": "updateIssue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Update an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments",
    "method": "listAttachmentsForIssue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "List attachments for an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of issue attachments."
      },
      {
        "statusCode": "401",
        "description": "If the issue tracker is private and the request was not authenticated."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments",
    "method": "uploadAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Upload an attachment to an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "An empty response document."
      },
      {
        "statusCode": "400",
        "description": "If no files were uploaded, or if the wrong `Content-Type` was used."
      },
      {
        "statusCode": "401",
        "description": "If the issue tracker is private and the request was not authenticated."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}",
    "method": "deleteAttachment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Delete an attachment for an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Indicates that the deletion was successful"
      },
      {
        "statusCode": "401",
        "description": "If the issue tracker is private and the request was not authenticated."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}",
    "method": "getAttachmentContents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Get attachment for an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "302",
        "description": "A redirect to the file's contents"
      },
      {
        "statusCode": "401",
        "description": "If the issue tracker is private and the request was not authenticated."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes",
    "method": "listIssueChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "List changes on an issue",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "\nQuery string to narrow down the response. See\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication for details."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "\nName of a response property to sort results. See\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication\nfor details.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of issue changes."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes",
    "method": "modifyIssueState",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Modify the state of an issue",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "links",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_on",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "issue",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "changes",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "message",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An issue change."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes/{change_id}",
    "method": "getIssueChange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Get issue change object",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An issue change."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments",
    "method": "listCommentsOnIssue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "List comments on an issue",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "\nQuery string to narrow down the response as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of issue comments."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments",
    "method": "createCommentOnIssue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Create a comment on an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "The newly created comment."
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Delete a comment on an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Indicates successful deletion."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}",
    "method": "getComment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Get a comment on an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}",
    "method": "updateIssueCommentContent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Update a comment on an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote",
    "method": "removeVote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Remove vote for an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote",
    "method": "checkUserVoted",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Check if current user voted for an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote",
    "method": "voteForIssue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Vote for an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch",
    "method": "stopWatchingIssue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Stop watching an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch",
    "method": "checkIfWatchingIssue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Check if current user is watching a issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch",
    "method": "watchIssue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Watch an issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/merge-base/{revspec}",
    "method": "getMergeBase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "Get the common ancestor between two commits",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/milestones",
    "method": "listMilestones",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "List milestones",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of issue tracker milestones."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/milestones/{milestone_id}",
    "method": "getMilestone",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Get a milestone",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/override-settings",
    "method": "inheritanceStateGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Retrieve the inheritance state for repository settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A json object representing the repository's inheritance state values"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/override-settings",
    "method": "setInheritanceState",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Set the inheritance state for repository settings\n                ",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The repository setting inheritance state was set and no content returned"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/patch/{spec}",
    "method": "getPatchForCommits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Commits",
    "typeScriptTag": "commits",
    "description": "Get a patch for two commits",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The raw patches"
      },
      {
        "statusCode": "555",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/permissions-config/groups",
    "method": "listGroupPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "List explicit group permissions for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of repository group permissions."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}",
    "method": "deleteGroupPermission",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Delete an explicit group permission for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Group permission deleted"
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}",
    "method": "getGroupPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Get an explicit group permission for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A group's permission for a given repository."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}",
    "method": "updateGroupPermission",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Update an explicit group permission for a repository",
    "parameters": [
      {
        "name": "permission",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERMISSION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A group's permission for a given repository."
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "402",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/permissions-config/users",
    "method": "listUserPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "List explicit user permissions for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of repository user permissions."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}",
    "method": "deleteUserPermission",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Delete an explicit user permission for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The repository user permission was deleted and no content returned."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}",
    "method": "explicitUserPermission",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Get an explicit user permission for a repository",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A user's direct permission for a given repository."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}",
    "method": "updateUserPermission",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "Update an explicit user permission for a repository",
    "parameters": [
      {
        "name": "permission",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERMISSION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A user's direct permission for a given repository."
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "402",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "List pipelines",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of pipelines"
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines",
    "method": "createPipeline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Run a pipeline",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines-config/caches",
    "method": "deleteCacheVersionByName",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Delete caches",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The account.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The cache name.",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The caches were deleted."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines-config/caches",
    "method": "getCaches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "List caches",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The account.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of pipeline caches"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}",
    "method": "deleteCacheById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Delete a cache",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The account.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "cacheUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the cache to delete.",
        "example": "CACHE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The cache was deleted."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri",
    "method": "getCacheContentUri",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get cache content URI",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The account.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "cacheUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the cache.",
        "example": "CACHE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A representation of the location of pipeline cache content."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}",
    "method": "getSpecifiedPipeline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get a pipeline",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "pipelineUuid",
        "schema": "string",
        "required": true,
        "description": "The pipeline UUID.",
        "example": "PIPELINE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps",
    "method": "getPipelineSteps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "List steps for a pipeline",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "pipelineUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the pipeline.",
        "example": "PIPELINE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of pipeline steps."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}",
    "method": "getStep",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get a step of a pipeline",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "pipelineUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the pipeline.",
        "example": "PIPELINE_UUID"
      },
      {
        "name": "stepUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the step.",
        "example": "STEP_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log",
    "method": "getStepLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get log file for a step",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "pipelineUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the pipeline.",
        "example": "PIPELINE_UUID"
      },
      {
        "name": "stepUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the step.",
        "example": "STEP_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The raw log file for this pipeline step."
      },
      {
        "statusCode": "304",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "416",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}",
    "method": "getStepLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get the logs for the build container or a service container for a given step of a pipeline.",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "pipelineUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the pipeline.",
        "example": "PIPELINE_UUID"
      },
      {
        "name": "stepUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the step.",
        "example": "STEP_UUID"
      },
      {
        "name": "logUuid",
        "schema": "string",
        "required": true,
        "description": "For the main build container specify the step UUID; for a service container specify the service container UUID",
        "example": "LOG_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The raw log file for the build container or service container."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports",
    "method": "getTestReportsForStep",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get a summary of test reports for a given step of a pipeline.",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "pipelineUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the pipeline.",
        "example": "PIPELINE_UUID"
      },
      {
        "name": "stepUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the step.",
        "example": "STEP_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A summary of test reports for this pipeline step."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases",
    "method": "getTestCasesForStep",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get test cases for a given step of a pipeline.",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "pipelineUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the pipeline.",
        "example": "PIPELINE_UUID"
      },
      {
        "name": "stepUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the step.",
        "example": "STEP_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Test cases for this pipeline step."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons",
    "method": "getTestCaseReasons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get test case reasons (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication for a given test case in a step of a pipeline.",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "pipelineUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the pipeline.",
        "example": "PIPELINE_UUID"
      },
      {
        "name": "stepUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the step.",
        "example": "STEP_UUID"
      },
      {
        "name": "testCaseUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the test case.",
        "example": "TEST_CASE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Test case reasons (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline",
    "method": "stopPipeline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Stop a pipeline",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "pipelineUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the pipeline.",
        "example": "PIPELINE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The pipeline has been signaled to stop."
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get configuration",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The account.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Update configuration",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/build_number",
    "method": "updateNextBuildNumber",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Update the next build number",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules",
    "method": "listSchedules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "List schedules",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of schedules"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules",
    "method": "createSchedule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Create a schedule",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}",
    "method": "deleteSchedule",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Delete a schedule",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "scheduleUuid",
        "schema": "string",
        "required": true,
        "description": "The uuid of the schedule.",
        "example": "SCHEDULE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The schedule was deleted."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}",
    "method": "getConfigSchedule",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get a schedule",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "scheduleUuid",
        "schema": "string",
        "required": true,
        "description": "The uuid of the schedule.",
        "example": "SCHEDULE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}",
    "method": "updateSchedule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Update a schedule",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "scheduleUuid",
        "schema": "string",
        "required": true,
        "description": "The uuid of the schedule.",
        "example": "SCHEDULE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions",
    "method": "listScheduleExecutions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "List executions of a schedule",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "scheduleUuid",
        "schema": "string",
        "required": true,
        "description": "The uuid of the schedule.",
        "example": "SCHEDULE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of the executions of a schedule."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair",
    "method": "deleteSshKeyPair",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Delete SSH key pair",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The SSH key pair was deleted."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair",
    "method": "getKeyPair",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get SSH key pair",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair",
    "method": "updateSshKeyPair",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Update SSH key pair",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts",
    "method": "listKnownHosts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "List known hosts",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of known hosts."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts",
    "method": "createKnownHost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Create a known host",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "409",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}",
    "method": "deleteKnownHost",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Delete a known host",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "knownHostUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the known host to delete.",
        "example": "KNOWN_HOST_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The known host was deleted."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}",
    "method": "getKnownHost",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get a known host",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "knownHostUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the known host to retrieve.",
        "example": "KNOWN_HOST_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}",
    "method": "updateKnownHost",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Update a known host",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "knownHostUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the known host to update.",
        "example": "KNOWN_HOST_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/variables",
    "method": "listRepositoryVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "List variables for a repository",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of variables."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/variables",
    "method": "createVariable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Create a variable for a repository",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "409",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}",
    "method": "deleteVariable",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Delete a variable for a repository",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable to delete.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The variable was deleted."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}",
    "method": "getRepositoryVariable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get a variable for a repository",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable to retrieve.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}",
    "method": "updateVariableForRepository",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Update a variable for a repository",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable to update.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}",
    "method": "deleteRepositoryApplicationProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Delete a repository application property",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The repository container; either the workspace slug or the UUID in curly braces.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "appKey",
        "schema": "string",
        "required": true,
        "description": "The key of the Connect app.",
        "example": "APP_KEY"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "The name of the property.",
        "example": "PROPERTY_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}",
    "method": "getApplicationValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Get a repository application property",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The repository container; either the workspace slug or the UUID in curly braces.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "appKey",
        "schema": "string",
        "required": true,
        "description": "The key of the Connect app.",
        "example": "APP_KEY"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "The name of the property.",
        "example": "PROPERTY_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An application property. It is a caller defined JSON object that Bitbucket will store and return. \nThe `_attributes` field at its top level can be used to control who is allowed to read and update the property. \nThe keys of the JSON object must match an allowed pattern. For details, \nsee [Application properties](https://dac-static.atlassian.com).\n"
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}",
    "method": "updateApplicationProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Update a repository application property",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The repository container; either the workspace slug or the UUID in curly braces.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "appKey",
        "schema": "string",
        "required": true,
        "description": "The key of the Connect app.",
        "example": "APP_KEY"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "The name of the property.",
        "example": "PROPERTY_NAME"
      },
      {
        "name": "_attributes",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "List pull requests",
    "parameters": [
      {
        "name": "state",
        "schema": "string",
        "description": "Only return pull requests that are in this state. This parameter can be repeated."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of pullrequests."
      },
      {
        "statusCode": "401",
        "description": "If the repository is private and the request was not authenticated."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Create a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/activity",
    "method": "listActivityLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "List a pull request activity log",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The pull request activity log"
      },
      {
        "statusCode": "401",
        "description": "If the repository is private and the request was not authenticated."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}",
    "method": "getPullRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Get a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "If the repository is private and the request was not authenticated."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}",
    "method": "updatePullRequest",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Update a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity",
    "method": "listActivityLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "List a pull request activity log",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The pull request activity log"
      },
      {
        "statusCode": "401",
        "description": "If the repository is private and the request was not authenticated."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve",
    "method": "unapprovePullRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Unapprove a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response indicating the authenticated user's approval has been withdrawn."
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve",
    "method": "approveRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Approve a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments",
    "method": "listComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "List comments on a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of pullrequest comments."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments",
    "method": "createComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Create a comment on a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Delete a comment on a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful deletion."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}",
    "method": "getComment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Get a comment on a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Update a comment on a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve",
    "method": "reopenCommentThread",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Reopen a comment thread",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The comment is reopened."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve",
    "method": "resolveCommentThread",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Resolve a comment thread",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The resolution object for a Comment."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "409",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits",
    "method": "listCommits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "List commits on a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of commits made on the given pull request, in chronological order. This list will be empty if the source branch no longer exists."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline",
    "method": "declinePullRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Decline a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "555",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff",
    "method": "listDiff",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "List changes in a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": "Redirects to the [repository diff](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication with the\nrevspec that corresponds to the pull request.\n"
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat",
    "method": "getDiffstat",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Get the diff stat for a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": "Redirects to the [repository diffstat](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication with\nthe revspec that corresponds to pull request.\n"
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge",
    "method": "mergePullRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Merge a pull request",
    "parameters": [
      {
        "name": "async",
        "schema": "boolean",
        "required": false,
        "description": "Default value is false.\n\n\nWhen set to true, runs merge asynchronously and\nimmediately returns a 202 with polling link to\nthe task-status API in the Location header.\n\n\nWhen set to false, runs merge and waits for it to\ncomplete, returning 200 when it succeeds. If the\nduration of the merge exceeds a timeout threshold,\nthe API returns a 202 with polling link to the\ntask-status API in the Location header."
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "close_source_branch",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "merge_strategy",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "merge_commit"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "In the Location header, the URL to poll for the pull request merge status"
      },
      {
        "statusCode": "555",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}",
    "method": "mergeTaskStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Get the merge task status for a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns a task status if the merge is either pending or successful, and if it is successful, a pull request"
      },
      {
        "statusCode": "400",
        "description": "If the provided task ID does not relate to this pull request, or if something went wrong during the merge operation"
      },
      {
        "statusCode": "403",
        "description": "The user making the request does not have permission to the repo and is different from the user who queued the task"
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch",
    "method": "getPatch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Get the patch for a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": "Redirects to the [repository patch](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication with\nthe revspec that corresponds to pull request.\n"
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes",
    "method": "removeChangeRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Remove change request for a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response indicating the authenticated user's request for change has been withdrawn."
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes",
    "method": "requestChanges",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Request changes for a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses",
    "method": "listCommitStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "List commit statuses for a pull request",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Query string to narrow down the response as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Field by which the results should be sorted as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\nDefaults to `created_on`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of commit status objects."
      },
      {
        "statusCode": "401",
        "description": "If the repository is private and the request was not authenticated."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks",
    "method": "listTasksOnPullRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "List tasks on a pull request",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "\nQuery string to narrow down the response. See\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication for details."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "\nField by which the results should be sorted as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\nDefaults to `created_on`.\n"
      },
      {
        "name": "pagelen",
        "schema": "integer",
        "required": false,
        "description": "\nCurrent number of objects on the existing page.\nThe default value is 10 with 100 being the maximum allowed value.\nIndividual APIs may enforce different values.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of tasks."
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks",
    "method": "createTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Create a task on a pull request",
    "parameters": [
      {
        "name": "content",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "comment",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "pending",
        "schema": "boolean",
        "required": false,
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
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}",
    "method": "deleteTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Delete a task on a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful deletion."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}",
    "method": "getTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Get a task on a pull request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pullrequests",
    "typeScriptTag": "pullrequests",
    "description": "Update a task on a pull request",
    "parameters": [
      {
        "name": "content",
        "schema": "object",
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
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
    "method": "deletePullRequestApplicationProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Delete a pull request application property",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The repository container; either the workspace slug or the UUID in curly braces.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "pullrequestId",
        "schema": "string",
        "required": true,
        "description": "The pull request ID.",
        "example": "PULLREQUEST_ID"
      },
      {
        "name": "appKey",
        "schema": "string",
        "required": true,
        "description": "The key of the Connect app.",
        "example": "APP_KEY"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "The name of the property.",
        "example": "PROPERTY_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
    "method": "getPullRequestApplicationProperty",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Get a pull request application property",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The repository container; either the workspace slug or the UUID in curly braces.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "pullrequestId",
        "schema": "string",
        "required": true,
        "description": "The pull request ID.",
        "example": "PULLREQUEST_ID"
      },
      {
        "name": "appKey",
        "schema": "string",
        "required": true,
        "description": "The key of the Connect app.",
        "example": "APP_KEY"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "The name of the property.",
        "example": "PROPERTY_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An application property. It is a caller defined JSON object that Bitbucket will store and return. \nThe `_attributes` field at its top level can be used to control who is allowed to read and update the property. \nThe keys of the JSON object must match an allowed pattern. For details, \nsee [Application properties](https://dac-static.atlassian.com).\n"
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
    "method": "updatePullRequestApplicationProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Update a pull request application property",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The repository container; either the workspace slug or the UUID in curly braces.",
        "example": "WORKSPACE"
      },
      {
        "name": "repoSlug",
        "schema": "string",
        "required": true,
        "description": "The repository.",
        "example": "REPO_SLUG"
      },
      {
        "name": "pullrequestId",
        "schema": "string",
        "required": true,
        "description": "The pull request ID.",
        "example": "PULLREQUEST_ID"
      },
      {
        "name": "appKey",
        "schema": "string",
        "required": true,
        "description": "The key of the Connect app.",
        "example": "APP_KEY"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "The name of the property.",
        "example": "PROPERTY_NAME"
      },
      {
        "name": "_attributes",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/refs",
    "method": "listBranchesAndTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refs",
    "typeScriptTag": "refs",
    "description": "List branches and tags",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "\nQuery string to narrow down the response as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "\nField by which the results should be sorted as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication. The `name`\nfield is handled specially for refs in that, if specified as the sort field, it\nuses a natural sort order instead of the default lexicographical sort order. For example,\nit will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2']."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of refs."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/refs/branches",
    "method": "listOpenBranches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refs",
    "typeScriptTag": "refs",
    "description": "List open branches",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "\nQuery string to narrow down the response as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "\nField by which the results should be sorted as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication. The `name`\nfield is handled specially for branches in that, if specified as the sort field, it\nuses a natural sort order instead of the default lexicographical sort order. For example,\nit will return ['branch1', 'branch2', 'branch10'] instead of ['branch1', 'branch10', 'branch2']."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of branches."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/refs/branches",
    "method": "createBranch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Refs",
    "typeScriptTag": "refs",
    "description": "Create a branch",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/refs/branches/{name}",
    "method": "deleteBranch",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Refs",
    "typeScriptTag": "refs",
    "description": "Delete a branch",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Indicates that the specified branch was successfully deleted."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/refs/branches/{name}",
    "method": "getBranch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refs",
    "typeScriptTag": "refs",
    "description": "Get a branch",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/refs/tags",
    "method": "listTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refs",
    "typeScriptTag": "refs",
    "description": "List tags",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "\nQuery string to narrow down the response as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "\nField by which the results should be sorted as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication. The `name`\nfield is handled specially for tags in that, if specified as the sort field, it\nuses a natural sort order instead of the default lexicographical sort order. For example,\nit will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2']."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of tags."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/refs/tags",
    "method": "createTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Refs",
    "typeScriptTag": "refs",
    "description": "Create a tag",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/refs/tags/{name}",
    "method": "deleteTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Refs",
    "typeScriptTag": "refs",
    "description": "Delete a tag",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Indicates the specified tag was successfully deleted."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/refs/tags/{name}",
    "method": "tagsByNameGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refs",
    "typeScriptTag": "refs",
    "description": "Get a tag",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/src",
    "method": "getRootDirectory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Get the root directory of the main branch",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Instead of returning the file's contents, return the (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication meta data for it."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of commit_file and/or commit_directory objects."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/src",
    "method": "createCommitByUploadingFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Create a commit by uploading a file",
    "parameters": [
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": "The commit message. When omitted, Bitbucket uses a canned string."
      },
      {
        "name": "author",
        "schema": "string",
        "required": false,
        "description": "\nThe raw string to be used as the new commit's author.\nThis string follows the format\n`Erik van Zijst <evzijst@atlassian.com>`.\n\nWhen omitted, Bitbucket uses the authenticated user's\nfull/display name and primary email address. Commits cannot\nbe created anonymously."
      },
      {
        "name": "parents",
        "schema": "string",
        "required": false,
        "description": "\nA comma-separated list of SHA1s of the commits that should\nbe the parents of the newly created commit.\n\nWhen omitted, the new commit will inherit from and become\na child of the main branch's tip/HEAD commit.\n\nWhen more than one SHA1 is provided, the first SHA1\nidentifies the commit from which the content will be\ninherited.\"."
      },
      {
        "name": "files",
        "schema": "string",
        "required": false,
        "description": "\nOptional field that declares the files that the request is\nmanipulating. When adding a new file to a repo, or when\noverwriting an existing file, the client can just upload\nthe full contents of the file in a normal form field and\nthe use of this `files` meta data field is redundant.\nHowever, when the `files` field contains a file path that\ndoes not have a corresponding, identically-named form\nfield, then Bitbucket interprets that as the client wanting\nto replace the named file with the null set and the file is\ndeleted instead.\n\nPaths in the repo that are referenced in neither files nor\nan individual file field, remain unchanged and carry over\nfrom the parent to the new commit.\n\nThis API does not support renaming as an explicit feature.\nTo rename a file, simply delete it and recreate it under\nthe new name in the same commit.\n"
      },
      {
        "name": "branch",
        "schema": "string",
        "required": false,
        "description": "\nThe name of the branch that the new commit should be\ncreated on. When omitted, the commit will be created on top\nof the main branch and will become the main branch's new\nhead.\n\nWhen a branch name is provided that already exists in the\nrepo, then the commit will be created on top of that\nbranch. In this case, *if* a parent SHA1 was also provided,\nthen it is asserted that the parent is the branch's\ntip/HEAD at the time the request is made. When this is not\nthe case, a 409 is returned.\n\nWhen a new branch name is specified (that does not already\nexist in the repo), and no parent SHA1s are provided, then\nthe new commit will inherit from the current main branch's\ntip/HEAD commit, but not advance the main branch. The new\ncommit will be the new branch. When the request *also*\nspecifies a parent SHA1, then the new commit and branch\nare created directly on top of the parent commit,\nregardless of the state of the main branch.\n\nWhen a branch name is not specified, but a parent SHA1 is\nprovided, then Bitbucket asserts that it represents the\nmain branch's current HEAD/tip, or a 409 is returned.\n\nWhen a branch name is not specified and the repo is empty,\nthe new commit will become the repo's root commit and will\nbe on the main branch.\n\nWhen a branch name is specified and the repo is empty, the\nnew commit will become the repo's root commit and also\ndefine the repo's main branch going forward.\n\nThis API cannot be used to create additional root commits\nin non-empty repos.\n\nThe branch field cannot be repeated.\n\nAs a side effect, this API can be used to create a new\nbranch without modifying any files, by specifying a new\nbranch name in this field, together with `parents`, but\nomitting the `files` fields, while not sending any files.\nThis will create a new commit and branch with the same\ncontents as the first parent. The diff of this commit\nagainst its first parent will be empty.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "\n"
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/src/{commit}/{path}",
    "method": "getRepositorySrcContent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Get file or directory contents",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "If 'meta' is provided, returns the (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication meta data for the contents of the file.  If 'rendered' is provided, returns the contents of a non-binary file in HTML-formatted rendered markup. The 'rendered' option only supports these filetypes: `.md`, `.markdown`, `.mkd`, `.mkdn`, `.mdown`, `.text`, `.rst`, and `.textile`. Since Git does not generally track what text encoding scheme is used, this endpoint attempts to detect the most appropriate character encoding. While usually correct, determining the character encoding can be ambiguous which in exceptional cases can lead to misinterpretation of the characters. As such, the raw element in the response object should not be treated as equivalent to the file's actual contents."
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Optional filter expression as per [filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Optional sorting parameter as per [filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication."
      },
      {
        "name": "maxDepth",
        "schema": "integer",
        "required": false,
        "description": "If provided, returns the contents of the repository and its subdirectories recursively until the specified max_depth of nested directories. When omitted, this defaults to 1."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of commit_file and/or commit_directory objects."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "555",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/versions",
    "method": "listDefinedVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "List defined versions for issues",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of issue tracker versions."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/versions/{version_id}",
    "method": "getDefinedVersionForIssues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issue tracker",
    "typeScriptTag": "issueTracker",
    "description": "Get a defined version for issues",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/repositories/{workspace}/{repo_slug}/watchers",
    "method": "listWatchers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "List repositories watchers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of accounts."
      }
    ]
  },
  {
    "url": "/snippets",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "List snippets",
    "parameters": [
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": "Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of snippets."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets",
    "method": "createSnippet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Create a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}",
    "method": "listInWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "List snippets in a workspace",
    "parameters": [
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": "Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of snippets."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}",
    "method": "createForWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Create a snippet for a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}",
    "method": "deleteSnippet",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Delete a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "If the snippet was deleted successfully."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}",
    "method": "getSingleSnippet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Get a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "410",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}",
    "method": "updateSnippet",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Update a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/comments",
    "method": "listComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "List comments on a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of snippet comments."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/comments",
    "method": "createComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Create a comment on a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/comments/{comment_id}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Delete a comment on a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Indicates the comment was deleted successfully."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/comments/{comment_id}",
    "method": "getComment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Get a comment on a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/comments/{comment_id}",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Update a comment on a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/commits",
    "method": "listChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "List snippet changes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of snippet commits."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/commits/{revision}",
    "method": "getPreviousSnippetChange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Get a previous snippet change",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/files/{path}",
    "method": "getSnippetFileAtHead",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Get a snippet's raw file at HEAD",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "302",
        "description": "A redirect to the most recent revision of the specified file."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/watch",
    "method": "stopWatchingSnippet",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Stop watching a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Indicates the user stopped watching the snippet successfully."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/watch",
    "method": "checkUserWatchingSnippet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Check if the current user is watching a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "If the authenticated user is watching the snippet."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/watch",
    "method": "watchSnippet",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Watch a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Indicates the authenticated user is now watching the snippet."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/watchers",
    "method": "listWatchers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "List users watching a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of accounts."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/{node_id}",
    "method": "deletePreviousRevision",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Delete a previous revision of a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "If the snippet was deleted successfully."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "405",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/{node_id}",
    "method": "getPreviousRevision",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Get a previous revision of a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/{node_id}",
    "method": "updatePreviousRevision",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Update a previous revision of a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "405",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/{node_id}/files/{path}",
    "method": "getRawFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Get a snippet's raw file",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns the contents of the specified file."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/{revision}/diff",
    "method": "getSnippetDiff",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Get snippet changes between versions",
    "parameters": [
      {
        "name": "path",
        "schema": "string",
        "description": "When used, only one the diff of the specified file will be returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The raw diff contents."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/snippets/{workspace}/{encoded_id}/{revision}/patch",
    "method": "getSnippetPatch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Get snippet patch between versions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The raw patch contents."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/teams/{username}/pipelines_config/variables",
    "method": "listVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "List variables for an account",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The account.",
        "example": "USERNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of variables."
      }
    ]
  },
  {
    "url": "/teams/{username}/pipelines_config/variables",
    "method": "createUserVariable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Create a variable for a user",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The account.",
        "example": "USERNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "409",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/teams/{username}/pipelines_config/variables/{variable_uuid}",
    "method": "deleteTeamVariable",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Delete a variable for a team",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The account.",
        "example": "USERNAME"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable to delete.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The variable was deleted"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/teams/{username}/pipelines_config/variables/{variable_uuid}",
    "method": "getTeamVariable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get a variable for a team",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The account.",
        "example": "USERNAME"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable to retrieve.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/teams/{username}/pipelines_config/variables/{variable_uuid}",
    "method": "updateTeamVariable",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Update a variable for a team",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The account.",
        "example": "USERNAME"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/teams/{username}/search/code",
    "method": "teamCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search for code in a team's repositories",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The account to search in; either the username or the UUID in curly braces",
        "example": "USERNAME"
      },
      {
        "name": "searchQuery",
        "schema": "string",
        "required": true,
        "description": "The search query",
        "example": "SEARCH_QUERY"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which page of the search results to retrieve",
        "default": 1
      },
      {
        "name": "pagelen",
        "schema": "integer",
        "required": false,
        "description": "How many search results to retrieve per page",
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
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "429",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/user",
    "method": "getCurrentUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/user/emails",
    "method": "listEmailAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List email addresses for current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/user/emails/{email}",
    "method": "getEmailDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get an email address for current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/user/permissions/repositories",
    "method": "listUserPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repositories",
    "typeScriptTag": "repositories",
    "description": "List repository permissions for a user",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "\nQuery string to narrow down the response as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "\nName of a response property sort the result by as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of repository permissions."
      }
    ]
  },
  {
    "url": "/user/permissions/workspaces",
    "method": "listForCurrentUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List workspaces for the current user",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "\nQuery string to narrow down the response. See\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication for details."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "\nName of a response property to sort results. See\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication\nfor details.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of workspace memberships."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/users/{selected_user}",
    "method": "getUserDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/users/{selected_user}/pipelines_config/variables",
    "method": "listUserVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "List variables for a user",
    "parameters": [
      {
        "name": "selectedUser",
        "schema": "string",
        "required": true,
        "description": "Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.",
        "example": "SELECTED_USER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of variables."
      }
    ]
  },
  {
    "url": "/users/{selected_user}/pipelines_config/variables",
    "method": "createUserVariable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Create a variable for a user",
    "parameters": [
      {
        "name": "selectedUser",
        "schema": "string",
        "required": true,
        "description": "Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.",
        "example": "SELECTED_USER"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "409",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/users/{selected_user}/pipelines_config/variables/{variable_uuid}",
    "method": "deleteUserVariable",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Delete a variable for a user",
    "parameters": [
      {
        "name": "selectedUser",
        "schema": "string",
        "required": true,
        "description": "Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.",
        "example": "SELECTED_USER"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable to delete.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The variable was deleted"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/users/{selected_user}/pipelines_config/variables/{variable_uuid}",
    "method": "getUserVariable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get a variable for a user",
    "parameters": [
      {
        "name": "selectedUser",
        "schema": "string",
        "required": true,
        "description": "Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.",
        "example": "SELECTED_USER"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable to retrieve.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/users/{selected_user}/pipelines_config/variables/{variable_uuid}",
    "method": "updateUserVariable",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Update a variable for a user",
    "parameters": [
      {
        "name": "selectedUser",
        "schema": "string",
        "required": true,
        "description": "Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.",
        "example": "SELECTED_USER"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/users/{selected_user}/properties/{app_key}/{property_name}",
    "method": "deleteUserAppPropertyValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Delete a user application property",
    "parameters": [
      {
        "name": "selectedUser",
        "schema": "string",
        "required": true,
        "description": "Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.",
        "example": "SELECTED_USER"
      },
      {
        "name": "appKey",
        "schema": "string",
        "required": true,
        "description": "The key of the Connect app.",
        "example": "APP_KEY"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "The name of the property.",
        "example": "PROPERTY_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response."
      }
    ]
  },
  {
    "url": "/users/{selected_user}/properties/{app_key}/{property_name}",
    "method": "getUserAppPropertyValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Get a user application property",
    "parameters": [
      {
        "name": "selectedUser",
        "schema": "string",
        "required": true,
        "description": "Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.",
        "example": "SELECTED_USER"
      },
      {
        "name": "appKey",
        "schema": "string",
        "required": true,
        "description": "The key of the Connect app.",
        "example": "APP_KEY"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "The name of the property.",
        "example": "PROPERTY_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An application property. It is a caller defined JSON object that Bitbucket will store and return. \nThe `_attributes` field at its top level can be used to control who is allowed to read and update the property. \nThe keys of the JSON object must match an allowed pattern. For details, \nsee [Application properties](https://dac-static.atlassian.com).\n"
      }
    ]
  },
  {
    "url": "/users/{selected_user}/properties/{app_key}/{property_name}",
    "method": "updateUserAppPropertyValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Update a user application property",
    "parameters": [
      {
        "name": "selectedUser",
        "schema": "string",
        "required": true,
        "description": "Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.",
        "example": "SELECTED_USER"
      },
      {
        "name": "appKey",
        "schema": "string",
        "required": true,
        "description": "The key of the Connect app.",
        "example": "APP_KEY"
      },
      {
        "name": "propertyName",
        "schema": "string",
        "required": true,
        "description": "The name of the property.",
        "example": "PROPERTY_NAME"
      },
      {
        "name": "_attributes",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response."
      }
    ]
  },
  {
    "url": "/users/{selected_user}/search/code",
    "method": "userRepositoryCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search for code in a user's repositories",
    "parameters": [
      {
        "name": "selectedUser",
        "schema": "string",
        "required": true,
        "description": "Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.",
        "example": "SELECTED_USER"
      },
      {
        "name": "searchQuery",
        "schema": "string",
        "required": true,
        "description": "The search query",
        "example": "SEARCH_QUERY"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which page of the search results to retrieve",
        "default": 1
      },
      {
        "name": "pagelen",
        "schema": "integer",
        "required": false,
        "description": "How many search results to retrieve per page",
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
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "429",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/users/{selected_user}/ssh-keys",
    "method": "listSshKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ssh",
    "typeScriptTag": "ssh",
    "description": "List SSH keys",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of SSH keys."
      },
      {
        "statusCode": "403",
        "description": "If the specified user's keys are not accessible to the current user"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/users/{selected_user}/ssh-keys",
    "method": "keyAddition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ssh",
    "typeScriptTag": "ssh",
    "description": "Add a new SSH key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "If the current user does not have permission to add a key for the specified user"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/users/{selected_user}/ssh-keys/{key_id}",
    "method": "deleteKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Ssh",
    "typeScriptTag": "ssh",
    "description": "Delete a SSH key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The key has been deleted"
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "If the current user does not have permission to add a key for the specified user"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/users/{selected_user}/ssh-keys/{key_id}",
    "method": "getKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ssh",
    "typeScriptTag": "ssh",
    "description": "Get a SSH key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If the specified user or key is not accessible to the current user"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/users/{selected_user}/ssh-keys/{key_id}",
    "method": "updateSshKeyComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ssh",
    "typeScriptTag": "ssh",
    "description": "Update a SSH key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "If the current user does not have permission to add a key for the specified user"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces",
    "method": "listForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List workspaces for user",
    "parameters": [
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": "\n            Filters the workspaces based on the authenticated user's role on each workspace.\n\n            * **member**: returns a list of all the workspaces which the caller is a member of\n                at least one workspace group or repository\n            * **collaborator**: returns a list of workspaces which the caller has write access\n                to at least one repository in the workspace\n            * **owner**: returns a list of workspaces which the caller has administrator access\n            "
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "\nQuery string to narrow down the response. See\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication for details."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "\nName of a response property to sort results. See\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication\nfor details.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of workspaces."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}",
    "method": "getWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Get a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/hooks",
    "method": "listWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List webhooks for a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of webhook subscriptions"
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/hooks",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Create a webhook for a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/hooks/{uid}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Delete a webhook for a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "When the webhook was deleted successfully"
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/hooks/{uid}",
    "method": "getWorkspaceWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Get a webhook for a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/hooks/{uid}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Update a webhook for a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/members",
    "method": "listMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List users in a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of workspace memberships."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/members/{member}",
    "method": "getUserMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Get user membership for a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/permissions",
    "method": "listPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List user permissions in a workspace",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "\nQuery string to narrow down the response as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of workspace memberships."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/permissions/repositories",
    "method": "listRepositoryPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List all repository permissions for a workspace",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "\nQuery string to narrow down the response as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "\nName of a response property sort the result by as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of repository permissions."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/permissions/repositories/{repo_slug}",
    "method": "listRepositoryPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List a repository permissions for a workspace",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "\nQuery string to narrow down the response as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "\nName of a response property sort the result by as per\n[filtering and sorting](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of repository permissions."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration",
    "method": "getOpenIdConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get OpenID configuration for OIDC in Pipelines",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The OpenID configuration"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/pipelines-config/identity/oidc/keys.json",
    "method": "getOidcKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get keys for OIDC in Pipelines",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The keys in JSON web key format"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/pipelines-config/variables",
    "method": "listWorkspaceVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "List variables for a workspace",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of variables."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/pipelines-config/variables",
    "method": "createWorkspaceVariable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Create a variable for a workspace",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "409",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}",
    "method": "deleteWorkspaceVariable",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Delete a variable for a workspace",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable to delete.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The variable was deleted"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}",
    "method": "getVariableForWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get variable for a workspace",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable to retrieve.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}",
    "method": "updateVariableWorkspace",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Update variable for a workspace",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "This can either be the workspace ID (https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.",
        "example": "WORKSPACE"
      },
      {
        "name": "variableUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the variable.",
        "example": "VARIABLE_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects",
    "method": "listProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List projects in a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of projects"
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects",
    "method": "createProjectInWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create a project in a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}",
    "method": "deleteWorkspaceProject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Delete a project for a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful deletion."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}",
    "method": "getByWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get a project for a workspace",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}",
    "method": "updateProjectInWorkspace",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update a project for a workspace",
    "parameters": [],
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
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/branching-model",
    "method": "getBranchingModel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branching model",
    "typeScriptTag": "branchingModel",
    "description": "Get the branching model for a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/branching-model/settings",
    "method": "getConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Branching model",
    "typeScriptTag": "branchingModel",
    "description": "Get the branching model config for a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/branching-model/settings",
    "method": "updateProjectBranchingModelSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Branching model",
    "typeScriptTag": "branchingModel",
    "description": "Update the branching model config for a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/default-reviewers",
    "method": "listDefaultReviewers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "List the default reviewers in a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of default reviewers with reviewer type."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}",
    "method": "removeDefaultReviewer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Remove the specific user from the project's default reviewers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The specified user was removed from the list of project default reviewers"
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}",
    "method": "getReviewer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get a default reviewer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}",
    "method": "addDefaultReviewer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Add the specific user as a default reviewer for the project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/deploy-keys",
    "method": "listProjectDeployKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "List project deploy keys",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of project deploy keys."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/deploy-keys",
    "method": "createProjectDeployKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "Create a project deploy key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}",
    "method": "deleteDeployKeyFromProject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "Delete a deploy key from a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The project deploy key has been deleted"
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}",
    "method": "getDeployKeyById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployments",
    "typeScriptTag": "deployments",
    "description": "Get a project deploy key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups",
    "method": "listGroupPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "List explicit group permissions for a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of project group permissions."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}",
    "method": "deleteExplicitGroupPermission",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Delete an explicit group permission for a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The project group permission was deleted and no content returned."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}",
    "method": "getGroupPermission",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get an explicit group permission for a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A group's permission for a given project."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}",
    "method": "updateGroupPermission",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update an explicit group permission for a project",
    "parameters": [
      {
        "name": "permission",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERMISSION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A group's permission for a given project."
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "402",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/permissions-config/users",
    "method": "listUserPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "List explicit user permissions for a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paginated list of project user permissions."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}",
    "method": "deleteExplicitUserPermission",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Delete an explicit user permission for a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The project user permission was deleted and no content returned."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}",
    "method": "getUserPermission",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get an explicit user permission for a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A user's direct permission for a given project."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}",
    "method": "updateUserPermission",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update an explicit user permission for a project",
    "parameters": [
      {
        "name": "permission",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERMISSION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A user's direct permission for a given project."
      },
      {
        "statusCode": "400",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "401",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "402",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "403",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace}/search/code",
    "method": "workspaceCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search for code in a workspace",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The workspace to search in; either the slug or the UUID in curly braces",
        "example": "WORKSPACE"
      },
      {
        "name": "searchQuery",
        "schema": "string",
        "required": true,
        "description": "The search query",
        "example": "SEARCH_QUERY"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Which page of the search results to retrieve",
        "default": 1
      },
      {
        "name": "pagelen",
        "schema": "integer",
        "required": false,
        "description": "How many search results to retrieve per page",
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
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "404",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      },
      {
        "statusCode": "429",
        "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Bitbucket API"
      apiBaseUrl="https://api.bitbucket.org/2.0"
      apiVersion="2.0"
      endpoints={184}
      sdkMethods={452}
      schemas={215}
      parameters={367}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bitbucket/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bitbucket/openapi.yaml"
      developerDocumentation="developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication"
    />
  );
}
  