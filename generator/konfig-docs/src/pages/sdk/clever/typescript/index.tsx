import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";

import { Sdk } from "@site/src/components/Sdk";

export default function CleverTypeScriptSdk() {
  return (
    <Sdk
      sdkName="clever-typescript-sdk"
      metaDescription="We believe technology is a powerful lever to make education equitable for all and the fastest way to improve educational outcomes now. 

Clever is on a mission to unlock new ways to learn for all students. More than 75% of U.S. K-12 schools now use Clever to simplify access and improve engagement with digital learning. With our free platform for schools and a network of leading application providers, we're committed to advancing educational equity.  Clever has offices in San Francisco, CA and Durham, NC but you can visit us at clever.com anytime or follow us on Twitter @Clever.

Together, we're solving extremely challenging problems that the education system has been facing for decades. It's important that we also enjoy the journey. At Clever, we create a space for purposeful collaboration and plenty of fun. Our Culture Tenets encourage every person on our team to learn, grow, and create change at work.

We go to work every day striving to improve education for millions of kids. Join us!"
      company="Clever"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clever/logo.png"
      clientNameCamelCase="clever"
      homepage="clever.com"
      lastUpdated={new Date("2024-03-13T01:35:30.474Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clever/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clever/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      
      categories={["education","collaboration","developer_tools","learning_platform","educational_equity","educational_technology","education","k_12_education","application_platforms","enterprise_software","information_technology"]}
      methods={[
  {
    "url": "/courses",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Courses",
    "typeScriptTag": "courses",
    "description": "Returns a list of courses",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": ""
      },
      {
        "name": "count",
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
    "url": "/courses/{id}",
    "method": "getSpecificCourse",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Courses",
    "typeScriptTag": "courses",
    "description": "Returns a specific course",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/courses/{id}/district",
    "method": "getDistrict",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Courses",
    "typeScriptTag": "courses",
    "description": "Returns the district for a course",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/courses/{id}/resources",
    "method": "getResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Courses",
    "typeScriptTag": "courses",
    "description": "Returns the resources for a course",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/courses/{id}/schools",
    "method": "getSchools",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Courses",
    "typeScriptTag": "courses",
    "description": "Returns the schools for a course",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/courses/{id}/sections",
    "method": "getSections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Courses",
    "typeScriptTag": "courses",
    "description": "Returns the sections for a course",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/districts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Districts",
    "typeScriptTag": "districts",
    "description": "Returns a list of districts. In practice this will only return the one district associated with the bearer token",
    "parameters": [
      {
        "name": "count",
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
    "url": "/districts/{id}",
    "method": "getSpecificDistrict",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Districts",
    "typeScriptTag": "districts",
    "description": "Returns a specific district",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/resources",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resources",
    "typeScriptTag": "resources",
    "description": "Returns a list of resources",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
    "url": "/resources/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resources",
    "typeScriptTag": "resources",
    "description": "Returns a specific resource",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/resources/{id}/courses",
    "method": "getCourses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resources",
    "typeScriptTag": "resources",
    "description": "Returns the courses for a resource",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/resources/{id}/sections",
    "method": "listSections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resources",
    "typeScriptTag": "resources",
    "description": "Returns the sections for a resource",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/resources/{id}/users",
    "method": "getUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resources",
    "typeScriptTag": "resources",
    "description": "Returns the student and/or teacher users for a resource",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "role",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/schools",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schools",
    "typeScriptTag": "schools",
    "description": "Returns a list of schools",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": ""
      },
      {
        "name": "count",
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
    "url": "/schools/{id}",
    "method": "getSpecificSchool",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schools",
    "typeScriptTag": "schools",
    "description": "Returns a specific school",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/schools/{id}/courses",
    "method": "getCourses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schools",
    "typeScriptTag": "schools",
    "description": "Returns the courses for a school",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/schools/{id}/district",
    "method": "getDistrict",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schools",
    "typeScriptTag": "schools",
    "description": "Returns the district for a school",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/schools/{id}/sections",
    "method": "getSections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schools",
    "typeScriptTag": "schools",
    "description": "Returns the sections for a school",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/schools/{id}/terms",
    "method": "getTerms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schools",
    "typeScriptTag": "schools",
    "description": "Returns the terms for a school",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/schools/{id}/users",
    "method": "getUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schools",
    "typeScriptTag": "schools",
    "description": "Returns the staff, student, and/or teacher users for a school",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "role",
        "schema": "string",
        "description": ""
      },
      {
        "name": "primary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sections",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Returns a list of sections",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": ""
      },
      {
        "name": "count",
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
    "url": "/sections/{id}",
    "method": "getSpecificSection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Returns a specific section",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sections/{id}/course",
    "method": "getCourse",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Returns the course for a section",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sections/{id}/district",
    "method": "getDistrict",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Returns the district for a section",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sections/{id}/resources",
    "method": "getResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Returns the resources for a section",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sections/{id}/school",
    "method": "getSchool",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Returns the school for a section",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sections/{id}/term",
    "method": "getTerm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Returns the term for a section",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/sections/{id}/users",
    "method": "getUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Returns the student and/or teacher users for a section",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "role",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/terms",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Terms",
    "typeScriptTag": "terms",
    "description": "Returns a list of terms",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": ""
      },
      {
        "name": "count",
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
    "url": "/terms/{id}",
    "method": "getSpecificTerm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Terms",
    "typeScriptTag": "terms",
    "description": "Returns a specific term",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/terms/{id}/district",
    "method": "getDistrictById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Terms",
    "typeScriptTag": "terms",
    "description": "Returns the district for a term",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/terms/{id}/schools",
    "method": "getSchoolsForTerm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Terms",
    "typeScriptTag": "terms",
    "description": "Returns the schools for a term",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/terms/{id}/sections",
    "method": "getSections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Terms",
    "typeScriptTag": "terms",
    "description": "Returns the sections for a term",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns a list of contact, district admin, staff, student, and/or teacher users",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": ""
      },
      {
        "name": "count",
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
    "url": "/users/{id}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns a specific user",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/district",
    "method": "getDistrict",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns the district for a user",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/mycontacts",
    "method": "getMyContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns the contact users for a student user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/mystudents",
    "method": "getStudentUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns the student users for a teacher or contact user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/myteachers",
    "method": "getTeachersForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns the teacher users for a student user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/resources",
    "method": "getResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns the resources for a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/schools",
    "method": "getSchools",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns the schools for a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "primary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/sections",
    "method": "getSections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Returns the sections for a user",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endingBefore",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Data API"
      apiBaseUrl="https://api.clever.com/v3.1"
      apiVersion="3.1.0"
      endpoints={42}
      sdkMethods={42}
      schemas={40}
      parameters={125}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clever/openapi.yaml"
    />
  );
}
  