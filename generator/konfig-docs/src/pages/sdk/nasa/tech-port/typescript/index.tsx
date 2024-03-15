import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function NasaTechPortTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="nasa-tech-port-typescript-sdk"
      metaDescription={`NASA, the National Aeronautics and Space Administration, is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and aerospace research. NASA conducts space exploration missions, scientific research, and technology development to expand our understanding of the universe.`}
      company="NASA"
      serviceName="TechPort"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nasa/techport/logo.png"
      companyKebabCase="nasa"
      clientNameCamelCase="nasaTechPort"
      homepage="techport.nasa.gov/home"
      lastUpdated={new Date("2024-03-15T00:48:29.728Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nasa/techport/favicon.png"
      contactUrl="https://techport.nasa.gov"
      contactEmail="hq-techport@mail.nasa.gov"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nasa/techport/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["space","government","aeronautics","science"]}
      methods={[
  {
    "url": "/api",
    "method": "getSpecification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resource",
    "typeScriptTag": "resource",
    "description": "Returns the swagger specification for the API.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response"
      },
      {
        "statusCode": "default",
        "description": "Object not found."
      }
    ]
  },
  {
    "url": "/api/projects",
    "method": "listAvailableIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Returns a list of available technology project IDs.",
    "parameters": [
      {
        "name": "updatedSince",
        "schema": "string",
        "required": true,
        "description": "ISO 8601 full-date in the format YYYY-MM-DD. Filters the list of available ID values by their lastUpdated parameter.",
        "example": "UPDATEDSINCE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Object not found."
      }
    ]
  },
  {
    "url": "/api/projects/search",
    "method": "findMatchingProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Returns a list of projects matching the search term.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": false,
        "description": "The specific ID of the project requested."
      },
      {
        "name": "searchQuery",
        "schema": "string",
        "required": false,
        "description": "The term on which to search. Will check all project fields for the this term."
      },
      {
        "name": "missionDirectorate",
        "schema": "string",
        "required": false,
        "description": "The mission directorate acronym of the projects. Used to filter."
      },
      {
        "name": "program",
        "schema": "string",
        "required": false,
        "description": "The program acronym of the projects. Used to filter."
      },
      {
        "name": "titleSearch",
        "schema": "string",
        "required": false,
        "description": "The term on which to search. Will check only project titles for the this term."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of projects that match the criteria."
      },
      {
        "statusCode": "default",
        "description": "Object not found."
      }
    ]
  },
  {
    "url": "/api/projects/{projectId}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Returns information about a specific technology project.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "ID of project to fetch",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Top-level TechPort object representing a NASA technology project and its associated data."
      },
      {
        "statusCode": "default",
        "description": "Object not found."
      }
    ]
  },
  {
    "url": "/api/organizations",
    "method": "getListByName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Returns a list of organizations that match a given name.",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Organization Name to filter on."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Object not found."
      }
    ]
  },
  {
    "url": "/api/organizations/types",
    "method": "listTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Returns a list of available organization types, including set-aside and MSI types.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Object not found."
      }
    ]
  },
  {
    "url": "/api/organizations/{organizationId}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization",
    "typeScriptTag": "organization",
    "description": "Get an organization and its information.",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "integer",
        "required": true,
        "description": "Organization Id.",
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
        "description": "Error."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="TechPort"
      apiBaseUrl="https://techport.nasa.gov"
      apiVersion="3.13.2"
      endpoints={7}
      sdkMethods={7}
      schemas={27}
      parameters={9}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nasa/techport/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nasa/techport/openapi.yaml"
      
    />
  );
}
  