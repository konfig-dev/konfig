import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function KenjoTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="kenjo-typescript-sdk"
      metaDescription={`Kenjo is the all in one HR software for managing the workforce of companies in the industrial, service and commercial sectors, among others.

On a single platform, companies can optimise the most important operations and processes in people management: attendance, shift planning and recruitment, among others, while remaining compliant.

All of this with the aim of making HR a key part of the success of companies and the development of their workforce.`}
      company="Kenjo"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kenjo/logo.png"
      companyKebabCase="kenjo"
      clientNameCamelCase="kenjo"
      homepage="kenjo.io"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kenjo/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kenjo/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","people_management_software","culture","people_management","workforce_management","deskless","operations","onboarding","offboarding","org_chart","payroll","time_off","attendance"]}
      methods={[
  {
    "url": "/auth/login",
    "method": "createBearerToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Create a bearer token to allow connecting the API.",
    "parameters": [
      {
        "name": "apiKey",
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
      }
    ]
  },
  {
    "url": "/auth/logout",
    "method": "invalidateToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Invalidates a Bearer token.",
    "parameters": [],
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
      }
    ]
  },
  {
    "url": "/attendances/{attendanceId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Attendance",
    "typeScriptTag": "attendance",
    "description": "This endpoint delete the attendance entry specified by **attendanceId**.",
    "parameters": [
      {
        "name": "attendanceId",
        "schema": "string",
        "required": true,
        "description": "The Kenjo _id of the attendance entry to remove.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
      }
    ]
  },
  {
    "url": "/attendances/{attendanceId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attendance",
    "typeScriptTag": "attendance",
    "description": "This endpoint returns one attendance entry specified by  **attendanceId**.",
    "parameters": [
      {
        "name": "attendanceId",
        "schema": "string",
        "required": true,
        "description": "The _id of the attendance entry to request.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
    "url": "/attendances/{attendanceId}",
    "method": "updateEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Attendance",
    "typeScriptTag": "attendance",
    "description": "This endpoint updates the attendance entry specified by **attendanceId**. Only the fields submitted in the body will be updated.",
    "parameters": [
      {
        "name": "attendanceId",
        "schema": "string",
        "required": true,
        "description": "The _id of the attendance entry to update.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "startTime",
        "schema": "string",
        "description": "",
        "example": "10:00:00"
      },
      {
        "name": "endTime",
        "schema": "string",
        "description": "",
        "example": "10:00:00"
      },
      {
        "name": "breaks",
        "schema": "array",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": "",
        "example": "Morning working attendance tracking."
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
    "url": "/attendances",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attendance",
    "typeScriptTag": "attendance",
    "description": "This endpoint returns an array of objects with all the existing attendance entries within Kenjo for a maximum of 31 days, defined by the required params **from** and **to**. Every object contains an attendance entry.",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "A date in format YYYY-MM-DD to indicate the starting point.",
        "example": "2021-02-01"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "A date in format YYYY-MM-DD to indicate the ending point.",
        "example": "2021-02-04"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
    "url": "/attendances",
    "method": "createEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attendance",
    "typeScriptTag": "attendance",
    "description": "This endpoint creates an attendance entry for a one employee, so an user *identifier* is required to build this relationship. The following *identifiers* are the valid ones: **userId**, **email** or **externalId**. Also one **startTime** and one **date** are required.<br>The new entry will have an unique identifier **_id**. This value is returned in the body response.<br><br> A day accepts many attendance entries per employee but they cannot be overlapped. It means that if, for example, *there is an entry the 2021-06-10 between 09:00 and 10:00 for the user E-111, then the creation of an new entry for E-111 in the 2021-06-10 whose startDate or endDate is between 09:00 and 10:00 will become a BAD REQUEST*.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "50a2db290da29e126a18789a"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "john@acme.io"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00001"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2021-07-01"
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10:00:00"
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "13:00:00"
      },
      {
        "name": "breaks",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Morning working attendance tracking."
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
      }
    ]
  },
  {
    "url": "/attendances/track-time",
    "method": "createTrackTime",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attendance",
    "typeScriptTag": "attendance",
    "description": "This endpoint tracks time only providing the following information: **employee identifier** and a **date time**. The following identifiers are the valid ones: **userId**, **email** or **externalId**, only one of them is required. This action abstracts and simplifies the entries tracking, ensuring internally the order and transforming each track action to a Kenjo user attendance format.<br><br>Example: Three calls for the employee E-111 to the */track-time* endpoint contains the following data:<br>T1: 2021-01-01T08:00:00<br>T2: 2021-01-01T09:00:00<br>T3: 2021-01-01T10:00:00<br>The three calls order is T1, T2, T3.<br><br>Then in Kenjo there will be 2 attendance pairs:<br>1: 08:00 / 09:00<br>2: 10:00 / --:--<br>The second pair is open, with no **endTime** info, until a new one comes. <br><br>If there is a new track: 2021-01-01T12:00:00, then the result will be:<br>1: 08:00 / 09:00<br>2: 10:00 / 12:00<br>If the track is 2021-01-01T07:00:00 instead, then the previous tracks are reordered to be consistent with concept of attendance pairs:<br>1: 07:00 / 08:00<br>2: 09:00 / 10:00",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "50a2db290da29e126a18789a"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "john@acme.io"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "00001"
      },
      {
        "name": "dateTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2021-07-01T09:00:00"
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
      }
    ]
  },
  {
    "url": "/attendances/categories",
    "method": "getCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attendance",
    "typeScriptTag": "attendance",
    "description": "This endpoint returns an array of objects. Every object contains an attendance category.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
    "url": "/attendances/expected-time",
    "method": "getExpectedTimeByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attendance",
    "typeScriptTag": "attendance",
    "description": "This endpoint returns a paginated list of expected time by user for a given date range.",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "A date in format YYYY-MM-DD to indicate the starting point.",
        "example": "2020-01-01"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "A date in format YYYY-MM-DD to indicate the ending point.",
        "example": "2020-01-10"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "companyId",
        "schema": "string",
        "description": "Optional filter. The company id of the Kenjo employee.",
        "example": "80a2db290da29e126a18789a"
      },
      {
        "name": "officeId",
        "schema": "string",
        "description": "Optional filter. The office id of the Kenjo employee.",
        "example": "80a2db290da29e126a18789d"
      },
      {
        "name": "departmentId",
        "schema": "string",
        "description": "Optional filter. The department id of the Kenjo employee.",
        "example": "80a2db290da29e126a18789c"
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "Optional filter. The id of the Kenjo employee. It accepts 2 formats:<br><br> 1. An unique string with the Kenjo employee id. <br>Example: *userId=80a2db290da29e126a18789c* <br><br> 2. A string with more than one Kenjo employee ids separated by commas (until 15 ids as maximum). <br>Example: *userId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*",
        "example": "80a2db290da29e126a18789c"
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Optional filter for pagination proposals. Determines the number of pages to skip when pagination is being used. If this value is not provided, by default the offset will be 1.",
        "example": 1
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Optional filter for pagination proposals. The maximum number of rows to retrieve which determines the size of the page. If this value is not provided then the limit will be 50 users. The maximum value of the limit is 100 users per page. Only are valid the following limit values: 25, 50 and 100.",
        "example": 25
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
    "url": "/companies",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Returns a list of the existing companies in Kenjo.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "The name of the company.",
        "example": "ACME Ltd"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "The city of the company.",
        "example": "Madrid"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "The country code of the company in ISO 3166-1 alpha-2.",
        "example": "ES"
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
    "url": "/offices",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Offices",
    "typeScriptTag": "offices",
    "description": "Returns a list of the existing offices in Kenjo.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "The name of the office.",
        "example": "Berlin office"
      },
      {
        "name": "companyId",
        "schema": "string",
        "description": "The Kenjo id of the company.",
        "example": "40a2db290da29e126a187895"
      },
      {
        "name": "calendarId",
        "schema": "string",
        "description": "The Kenjo id of the calendar.",
        "example": "40a2db290da29e126a187895"
      },
      {
        "name": "street",
        "schema": "string",
        "description": "The street of the office.",
        "example": "Urbanstrasse, 71"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": "The postal code of the office.",
        "example": "34213"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "The city of the office.",
        "example": "Berlin"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "The country of the office in ISO code.",
        "example": "DE"
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
    "url": "/offices",
    "method": "createNewOffice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Offices",
    "typeScriptTag": "offices",
    "description": "Creates a new office.<br><br>The required fields are *name*, *companyId*, *calendarId*.<br>Optional fields are *street*, *postalCode*, *city* and *country*. <br> The *country* field has to be a valid ISO country code.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Spain office"
      },
      {
        "name": "companyId",
        "schema": "string",
        "description": "",
        "example": "60dadb6362702d057f8fb486"
      },
      {
        "name": "calendarId",
        "schema": "string",
        "description": "",
        "example": "60f808f727ad58fe791bae91"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "ES"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": "",
        "example": "28030"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "ES"
      },
      {
        "name": "street",
        "schema": "string",
        "description": "",
        "example": "Paseo Castellana, 13"
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
      }
    ]
  },
  {
    "url": "/offices/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Offices",
    "typeScriptTag": "offices",
    "description": "Removes the office referenced by *id*.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The _id of the office entry to request.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
      }
    ]
  },
  {
    "url": "/offices/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Offices",
    "typeScriptTag": "offices",
    "description": "Returns the office referenced by *id*.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The _id of the office entry to request.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
    "url": "/offices/{id}",
    "method": "updateOfficeAttributes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Offices",
    "typeScriptTag": "offices",
    "description": "Updates an office referenced by *id*. Only the attributes submitted are modified.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The _id of the office entry to request.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Madrid office"
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
    "url": "/departments",
    "method": "listDepartments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Returns a list of the existing departments in Kenjo.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "The department name.",
        "example": "Happiness dept."
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
    "url": "/departments",
    "method": "createNewDepartment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Creates a new department.<br>The *name* is the only required field.<br>",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Sales"
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
      }
    ]
  },
  {
    "url": "/departments/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Removes the department referenced by *id*.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The _id of the department entry to request.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
      }
    ]
  },
  {
    "url": "/departments/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Returns the department referenced by *id*.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The _id of the department entry to request.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
    "url": "/departments/{id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Updates a deparment referenced by *id*. Only the attributes submitted are modified.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The _id of the deparment entry to request.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Sales"
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
    "url": "/teams",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Returns a list of the existing teams in Kenjo.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "The team name.",
        "example": "Developers"
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
    "url": "/teams",
    "method": "createTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Creates a new team.<br>The *name* is the only required field.<br>",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Tech devOps"
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
      }
    ]
  },
  {
    "url": "/teams/{id}",
    "method": "removeTeam",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Removes the team referenced by *id*.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The _id of the team entry to request.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
      }
    ]
  },
  {
    "url": "/teams/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Returns the team referenced by *id*.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The _id of the team entry to request.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
    "url": "/teams/{id}",
    "method": "updateTeamAttributes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Updates a team referenced by *id*. Only the attributes submitted are modified.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The _id of the team entry to request. Required field.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Sales"
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
    "url": "/areas",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Areas",
    "typeScriptTag": "areas",
    "description": "Returns a list of the existing areas in Kenjo.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
    "url": "/areas",
    "method": "createNewArea",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Areas",
    "typeScriptTag": "areas",
    "description": "Creates a new area.<br>The *name* is the only required field.<br>",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Recruiting feature"
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
      }
    ]
  },
  {
    "url": "/areas/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Areas",
    "typeScriptTag": "areas",
    "description": "Removes the area referenced by *id*.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The _id of the area entry to request.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
      }
    ]
  },
  {
    "url": "/areas/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Areas",
    "typeScriptTag": "areas",
    "description": "Returns the area referenced by *id*.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The _id of the area entry to request.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
    "url": "/areas/{id}",
    "method": "updateAreaById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Areas",
    "typeScriptTag": "areas",
    "description": "Updates a area referenced by *id*. Only the attributes submitted are modified.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The _id of the area entry to request.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Sales"
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
    "url": "/calendars",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Calendars",
    "typeScriptTag": "calendars",
    "description": "Returns a list of the existing calendars in Kenjo.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "The calendar name.",
        "example": "Madrid Calendar"
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
    "url": "/calendars/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Calendars",
    "typeScriptTag": "calendars",
    "description": "Returns the calendar referenced by *id*.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The _id of the calendar entry to request.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
    "url": "/user-accounts",
    "method": "listEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User accounts",
    "typeScriptTag": "userAccounts",
    "description": "This endpoint returns an array of objects with the existing employees in Kenjo. Every object contains the basic employee information from **account**, **personal** and **work** sections per each existing employee.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
    "url": "/employees",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint returns the list of employee accounts existing in Kenjo. It is similar to the */employees/accounts* endpoint.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
    "url": "/employees",
    "method": "createInactiveEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint creates a deactivated employee in Kenjo, the 'isActive' field set to false. To activate an employee use the put /activate method. This method will send an activation message to the employee email to complete the activation through the onboarding wizard.\n<br><br>The field *email* is required and must be unique. Also *firstName*, *lastName* and *companyId* are required fields. If the work schedule is not provided then all the days of the week except Saturdays and Sundays are set to true. If the *language* is not specified, the assigned company language will be set by default.\n<br><br>**Custom fields** information can be provided in this operation for the **personal**, **work**, **address**, **financial** and **home** sections. The *API name* of the custom field is required and the data format has to match with the type defined for the custom field in Kenjo.\nAPI names start with 'c_' and the rest is composed by the trimmed name (spaces are removed).\n<br><br>\nExample:\n<br>\n*The custom field 'Activity type' belongs to the section 'work'*:\n  ```\n...\n{\n  ...\n    \"work\": {\n      \"c_Activitytype\": \"1\",\n      ...\n    },\n  ...\n}\n```\n*'Activity type' is a field type 'List' (Strings list) with the possible values: \"1\", \"2\" and \"3\". It means that if a different value or type is provided then the request will return an error.*\n<br><br>If the operation get success then an inactive employee is created and the response will include the provided information and the Kenjo id for the new employee.\n",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "account",
        "schema": "object",
        "description": ""
      },
      {
        "name": "personal",
        "schema": "object",
        "description": ""
      },
      {
        "name": "work",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workSchedule",
        "schema": "object",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "financial",
        "schema": "object",
        "description": ""
      },
      {
        "name": "home",
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
    "url": "/employees/{employeeId}",
    "method": "getEmployeeInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint returns information about the **account**, **personal**, **work**, **work schedule**, **address**, **financial** and **home** sections for a given employee id. The *employeeId* param represents a Kenjo employee id.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The _id of the employee to request.",
        "example": "50a2db290da29e126a187843"
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
    "url": "/employees/accounts",
    "method": "getAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint returns a list with the **account** sections of the existing employees. The account section contains information such as *email*, *external Id*, *language* and *activation status*.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "The Kenjo email of the employee.",
        "example": "john.doe@acme.com"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "The employee language.",
        "example": "es"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "The external id of the employee.",
        "example": "USER-123456"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "description": "The employee activation status.",
        "example": true
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
    "url": "/employees/personals",
    "method": "listPersonals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint returns a list with the **personal** sections of the existing employees.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "The name of the Kenjo employee. This field is required.",
        "example": "John"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "The surname of the Kenjo employee. This field is required.",
        "example": "Doe"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": "The composition of firstName and lastName of the Kenjo employee.",
        "example": "John Doe"
      },
      {
        "name": "gender",
        "schema": "string",
        "description": "The employee gender. Only is valid one of the following values 'Male' (https://www.kenjo.io/legal/api, 'Female' (https://www.kenjo.io/legal/api or 'Other' (https://www.kenjo.io/legal/api.",
        "example": "es"
      },
      {
        "name": "birthdate",
        "schema": "string",
        "description": "The employee birth date. Format YYYY-MM-DDThh:00:00.000Z.",
        "example": "1980-01-28T00:00:00.000Z"
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
    "url": "/employees/works",
    "method": "listWorks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint returns a list with the **work** sections of the existing employees.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "companyId",
        "schema": "string",
        "description": "The company id of the Kenjo employee.",
        "example": "80a2db290da29e126a18789a"
      },
      {
        "name": "officeId",
        "schema": "string",
        "description": "The office id of the Kenjo employee.",
        "example": "80a2db290da29e126a18789d"
      },
      {
        "name": "departmentId",
        "schema": "string",
        "description": "The department id of the Kenjo employee.",
        "example": "80a2db290da29e126a18789c"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "The starting date of the Kenjo employee in format YYYY-MM-DDThh:mm:ss.",
        "example": "2022-06-01T00:00:00.000Z"
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": "The job title of the employee.",
        "example": "Actor"
      },
      {
        "name": "workPhone",
        "schema": "string",
        "description": "The work phone of the employee.",
        "example": "34 666 70 90 32"
      },
      {
        "name": "workMobile",
        "schema": "string",
        "description": "The work mobile of the employee.",
        "example": "34 680 70 90 32"
      },
      {
        "name": "isAssistant",
        "schema": "boolean",
        "description": "Allow to indicate if the employee has or not the assistant role.",
        "example": true
      },
      {
        "name": "probationPeriodEnd",
        "schema": "string",
        "description": "The probation period of the employee. Format YYYY-MM-DDThh:mm:ss.000Z.",
        "example": "2022-06-01T00:00:00.000Z"
      },
      {
        "name": "reportsToId",
        "schema": "string",
        "description": "The Kenjo employee id of the user to whom the employee reports. The employee id to assign can be an active or inactive user. Trying to assign the own employee id or the id of someone who is already reporting will arise an error.",
        "example": "80a2db290da29e126a187891"
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
    "url": "/employees/work-schedules",
    "method": "getWorkSchedules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint returns a list with the **work schedule** sections of the existing employees.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "trackAttendance",
        "schema": "boolean",
        "description": "The activation status of attendance tracking for the employee.",
        "example": false
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
    "url": "/employees/addresses",
    "method": "listAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint returns a list with the **address** sections of the existing employees.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "street",
        "schema": "string",
        "description": "The name of the street.",
        "example": " Calle Enrique San Francisco 13"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": "The postal code.",
        "example": "28080"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "The city.",
        "example": "Madrid"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "The country code in ISO 3166-1 alpha-2.",
        "example": "ES"
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
    "url": "/employees/financials",
    "method": "listFinancials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint returns a list with the **financial** sections of the existing employees.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "accountHolderName",
        "schema": "string",
        "description": "The accounts holder's name.",
        "example": "Michael Corleone"
      },
      {
        "name": "bankName",
        "schema": "string",
        "description": "The bank name.",
        "example": "Bank of Sicily"
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "description": "The account number.",
        "example": "0093 344 2132221 3304 00"
      },
      {
        "name": "iban",
        "schema": "string",
        "description": "The IBAN.",
        "example": "DE32120222391919191911"
      },
      {
        "name": "swiftCode",
        "schema": "string",
        "description": "The SWIFT code.",
        "example": "12321234"
      },
      {
        "name": "nationalId",
        "schema": "string",
        "description": "The national id document",
        "example": "04123547X"
      },
      {
        "name": "passport",
        "schema": "string",
        "description": "The passport number.",
        "example": "FA1234098"
      },
      {
        "name": "nationalInsuranceNumber",
        "schema": "string",
        "description": "The national insurance number.",
        "example": "23123312321"
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": "The tax number.",
        "example": "323451R"
      },
      {
        "name": "taxIdentificationNumber",
        "schema": "string",
        "description": "The tax identification number.",
        "example": "T4312345"
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
    "url": "/employees/homes",
    "method": "listHomes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint returns a list with the **home** sections of the existing employees.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "maritalStatus",
        "schema": "string",
        "description": "The marital status. Only is valid one of the following values \"Divorced\", \"Domestic Partnership\", \"Married\", \"Separated\", \"Single\", \"Widowed\".",
        "example": "Widowed"
      },
      {
        "name": "spouseFirstName",
        "schema": "string",
        "description": "The first name of the employee's spouse.",
        "example": "Catherine"
      },
      {
        "name": "spouseLastName",
        "schema": "string",
        "description": "The last name of the employee's spouse.",
        "example": "Tramell"
      },
      {
        "name": "spouseBirthdate",
        "schema": "string",
        "description": "The birth date of the employee's spouse. Format YYYY-MM-DDThh:mm:ss.000Z.",
        "example": "2060-01-26T00:00:00.000Z"
      },
      {
        "name": "spouseGender",
        "schema": "string",
        "description": "The employee's spouse gender. Only is valid one of the following values 'Male' (https://www.kenjo.io/legal/api, 'Female' (https://www.kenjo.io/legal/api or 'Other' (https://www.kenjo.io/legal/api.",
        "example": "Female"
      },
      {
        "name": "personalEmail",
        "schema": "string",
        "description": "The employee personal email.",
        "example": "john.doe@acme.com"
      },
      {
        "name": "personalPhone",
        "schema": "string",
        "description": "The employee personal phone.",
        "example": "4567092323"
      },
      {
        "name": "personalMobile",
        "schema": "string",
        "description": "The employee personal mobile.",
        "example": "3567092310"
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
    "url": "/employees/{employeeId}/accounts",
    "method": "updateEmployeeAccounts",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint updates the employee **account** section for a given employee id. The operation only updates the fields provided in the body.",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The _id of the employee to update.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "john@acme.io"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "",
        "example": "E-000001"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "en"
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
    "url": "/employees/{employeeId}/personals",
    "method": "updatePersonals",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint updates the employee **personal** section for a given employee id. The operation only updates the fields provided in the body.\n<br><br>**Custom fields** information can be provided in this operation. The *API name* of the custom field is required and the data format has to match with the type defined for the custom field in Kenjo.\nAPI names start with 'c_' and the rest is composed by the trimmed name (spaces are removed).\n<br><br>\nExample:\n<br>\n*The custom field 'category' belongs to the 'personal' section*:\n  ```\n  {\n    ...,\n    \"lastName\": \"Nadie\",\n    \"c_category\": \"Good\",\n    ...\n  }\n```\n*'category' is a field type 'List' (Strings list) with the possible values: \"Good\" and \"Bad\". It means that if a different value or type is provided then the request will return an error.*\n",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The _id of the employee to update.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "Juanito"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "Nadie"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": "",
        "example": "Juanito Nadie"
      },
      {
        "name": "gender",
        "schema": "string",
        "description": "",
        "example": "Male"
      },
      {
        "name": "birthdate",
        "schema": "string",
        "description": "",
        "example": "1980-01-28T00:00:00.000Z"
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
    "url": "/employees/{employeeId}/works",
    "method": "updateWorks",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint updates the employee **work** section for a given employee id. The operation only updates the fields provided in the body.\n<br><br>**Custom fields** information can be provided in this operation. The *API name* of the custom field is required and the data format has to match with the type defined for the custom field in Kenjo.\nAPI names start with 'c_' and the rest is composed by the trimmed name (spaces are removed).\n<br><br>\nExample:\n<br>\n*The custom field 'activity type' belongs to the 'personal' section*:\n  ```\n  {\n    ...,\n    \"companyId\": \"61d874aef37c05cfba4f1b38\",\n    \"c_activityType\": \"1\",\n    ...\n  }\n```\n*'activity Type' is a field type 'List' (Strings list) with the possible values: \"1\" and \"2\". It means that if a different value or type is provided then the request will return an error.*\n",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The _id of the employee to update.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "companyId",
        "schema": "string",
        "description": "",
        "example": "50a2db290da29e126a187894"
      },
      {
        "name": "officeId",
        "schema": "string",
        "description": "",
        "example": "50a2db290da29e126a187895"
      },
      {
        "name": "departmentId",
        "schema": "string",
        "description": "",
        "example": "50a2db290da29e126a187896"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2021-07-01T00:00:00.000Z"
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": "",
        "example": "Actor"
      },
      {
        "name": "workPhone",
        "schema": "string",
        "description": "",
        "example": "+34 666 70 90 32"
      },
      {
        "name": "workMobile",
        "schema": "string",
        "description": "",
        "example": "+34 680 70 90 32"
      },
      {
        "name": "isAssistant",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "probationPeriodEnd",
        "schema": "string",
        "description": "",
        "example": "2022-06-01T00:00:00.000Z"
      },
      {
        "name": "reportsToId",
        "schema": "string",
        "description": "",
        "example": "50a2db290da29e126a1878523"
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
    "url": "/employees/{employeeId}/work-schedules",
    "method": "updateWorkSchedule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint updates the employee **work schedule** section for a given employee id. The operation only updates the fields provided in the body.",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The _id of the employee to update.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "mondayWorkingDay",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "tuesdayWorkingDay",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "wednesdayWorkingDay",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "thursdayWorkingDay",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "fridayWorkingDay",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "saturdayWorkingDay",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "sundayWorkingDay",
        "schema": "boolean",
        "description": "",
        "example": false
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
    "url": "/employees/{employeeId}/addresses",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint updates the employee **address** section for a given employee id. The operation only updates the fields provided in the body.\n<br><br>**Custom fields** information can be provided in this operation. The *API name* of the custom field is required and the data format has to match with the type defined for the custom field in Kenjo.\nAPI names start with 'c_' and the rest is composed by the trimmed name (spaces are removed).\n<br><br>\nExample:\n<br>\n*The custom field 'province' belongs to the 'address' section*:\n  ```\n  {\n    ...,\n    \"country\": \"ES\",\n    \"c_province\": \"MD\",\n    ...\n  }\n```\n*'province' is a field type 'String'. It means that if a different type of data (number or boolean) is provided then the request will return an error.*\n",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The _id of the employee to update.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "street",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
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
      }
    ]
  },
  {
    "url": "/employees/{employeeId}/financials",
    "method": "updateFinancials",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint updates the employee **financial** section for a given employee id. The operation only updates the fields provided in the body.\n<br><br>**Custom fields** information can be provided in this operation. The *API name* of the custom field is required and the data format has to match with the type defined for the custom field in Kenjo.\nAPI names start with 'c_' and the rest is composed by the trimmed name (spaces are removed).\n<br><br>\nExample:\n<br>\n*The custom field 'special tax' belongs to the 'financial' section*:\n  ```\n  {\n    ...,\n    \"iban\": \"ES2345123456789077\",\n    \"c_specialtax\": 1500,\n    ...\n  }\n```\n*'special tax' is a field type 'Number'. It means that if a different type of data (string or boolean) is provided then the request will return an error.*\n",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The _id of the employee to update.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "accountHolderName",
        "schema": "string",
        "description": "",
        "example": "Michael Corleone"
      },
      {
        "name": "bankName",
        "schema": "string",
        "description": "",
        "example": "Bank of Sicily"
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "description": "",
        "example": "0093 344 2132221 3304 00"
      },
      {
        "name": "iban",
        "schema": "string",
        "description": "",
        "example": "DE32120222391919191911"
      },
      {
        "name": "swiftCode",
        "schema": "string",
        "description": "",
        "example": "12321234"
      },
      {
        "name": "nationalId",
        "schema": "string",
        "description": "",
        "example": "04123547X"
      },
      {
        "name": "passport",
        "schema": "string",
        "description": "",
        "example": "FA1234098"
      },
      {
        "name": "nationalInsuranceNumber",
        "schema": "string",
        "description": "",
        "example": "23123312321"
      },
      {
        "name": "taxCode",
        "schema": "string",
        "description": "",
        "example": "323451R"
      },
      {
        "name": "taxIdentificationNumber",
        "schema": "string",
        "description": "",
        "example": "T4312345"
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
    "url": "/employees/{employeeId}/homes",
    "method": "updateHome",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint updates the employee **home** section for a given employee id. The operation only updates the fields provided in the body.\n<br><br>**Custom fields** information can be provided in this operation. The *API name* of the custom field is required and the data format has to match with the type defined for the custom field in Kenjo.\nAPI names start with 'c_' and the rest is composed by the trimmed name (spaces are removed).\n<br><br>\nExample:\n<br>\n*The custom field 'pet name' belongs to the 'home' section*:\n  ```\n  {\n    ...,\n    \"maritalStatus\": \"Divorced\",\n    \"c_petname\": \"Boliche\",\n    ...\n  }\n```\n*'pet name' is a field type 'String'. It means that if a different type of data (number or boolean) is provided then the request will return an error.*\n",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The _id of the employee to update.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "maritalStatus",
        "schema": "string",
        "description": "",
        "example": "Widowed"
      },
      {
        "name": "spouseFirstName",
        "schema": "string",
        "description": "",
        "example": "Catherine"
      },
      {
        "name": "spouseLastName",
        "schema": "string",
        "description": "",
        "example": "Tramell"
      },
      {
        "name": "spouseBirthdate",
        "schema": "string",
        "description": "",
        "example": "2060-01-26T00:00:00.000Z"
      },
      {
        "name": "spouseGender",
        "schema": "string",
        "description": "",
        "example": "Female"
      },
      {
        "name": "personalEmail",
        "schema": "string",
        "description": "",
        "example": "john@acme.io"
      },
      {
        "name": "personalPhone",
        "schema": "string",
        "description": "",
        "example": "4567092323"
      },
      {
        "name": "personalMobile",
        "schema": "string",
        "description": "",
        "example": "3567092310"
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
    "url": "/employees/{employeeId}/activate",
    "method": "activateEmployee",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint activates a Kenjo employee given by the employeeId. It sends an email to the recipient of the employee email to start the onboarding process. Once the password is filled, the employee changes to 'active' ('isActive' = TRUE). While the employee is not active it is possible to send activation emails.",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The _id of the employee to send the activation email.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
    "url": "/employees/{employeeId}/deactivate",
    "method": "deactivateEmployeeById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "This endpoint deactivates a Kenjo employee given by the employeeId. It sets the isActive field to FALSE and invalidate the access Kenjo for the employee. While the employee is not active it is possible to send activation emails.",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The _id of the employee to update.",
        "example": "60a2db290da29e126a18789a"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
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
    "url": "/custom-fields",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom fields",
    "typeScriptTag": "customFields",
    "description": "Returns a list of the existing custom fields in Kenjo.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "section",
        "schema": "string",
        "description": "The name of custom field section.",
        "example": "personal"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "The name of the custom field label.",
        "example": "Blood type"
      },
      {
        "name": "apiName",
        "schema": "string",
        "description": "The api name is a required identifier to perform POST and PUT operations with employees.",
        "example": "c_Bloodtype"
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
    "url": "/time-off/requests",
    "method": "getRequestsByDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time off",
    "typeScriptTag": "timeOff",
    "description": "This endpoint returns a paginated list of time off requests for a given date range.The maximum number of time off requests to retrieve once is 92 days, so the URL params *from* and *to* are mandatory. The URL params help to return more accurate results.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "A date in format YYYY-MM-DD to indicate the starting point. It needs to be equals or less than the *to* param.",
        "example": "2020-01-01"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "A date in format YYYY-MM-DD to indicate the ending point. It needs to be equals or greater than the *from* param.",
        "example": "2020-01-10"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "This field allows to return only the time off requests for a given *_userId*.",
        "example": "60a2db290da29e126a18789b"
      },
      {
        "name": "timeOffTypeId",
        "schema": "string",
        "required": false,
        "description": "This field allows to filter by time-off type Id.",
        "example": "90a2db290da29e126a187891"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "This field allows to filter by the time-off request status.",
        "example": "Approved"
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Optional filter for pagination proposals. Determines the number of pages to skip when pagination is being used. If this value is not provided, by default the offset will be 1.",
        "example": 1
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Optional filter for pagination proposals. The maximum number of rows to retrieve which determines the size of the page. If this value is not provided then the limit will be 50 users. The maximum value of the limit is 100 users per page. Only are valid the following limit values: 25, 50 and 100.",
        "example": 25
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
    "url": "/compensation/contracts",
    "method": "getContracts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compensation",
    "typeScriptTag": "compensation",
    "description": "This endpoint returns a paginated list of employment contracts. The URL params help to return more accurate results.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "contractTypeId",
        "schema": "string",
        "required": false,
        "description": "Optional filter. This field allows you to retrieve contracts based on their *contractTypeId*. It can accept two formats:<br><br> 1. A single *contractTypeId* as a unique string. <br>Example: *contractTypeId=80a2db290da29e126a18789c* <br><br> 2. Multiple *contractTypeId* values separated by commas (up to a maximum of 15 values). <br>Example: *contractTypeId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.",
        "example": "60a2db290da29e126a18789e"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "Optional filter. This field allows you to retrieve contracts based on their *_userId*. It can accept two formats:<br><br> 1. A single *_userId* as a unique string. <br>Example: *_userId=80a2db290da29e126a18789c* <br><br> 2. Multiple *_userId* values separated by commas (up to a maximum of 15 values). <br>Example: *_userId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.",
        "example": "60a2db290da29e126a18789b"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": "Optional filter. This field allows you to retrieve contracts based on their *_companyId*. It can accept two formats:<br><br> 1. A single *_companyId* as a unique string. <br>Example: *_companyId=80a2db290da29e126a18789c* <br><br> 2. Multiple *_companyId* values separated by commas (up to a maximum of 15 values). <br>Example: *_companyId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.",
        "example": "90a2db290da29e126a187891"
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Optional filter for pagination proposals. Determines the number of pages to skip when pagination is being used. If this value is not provided, by default the offset will be 1.",
        "example": 1
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Optional filter for pagination proposals. The maximum number of rows to retrieve which determines the size of the page. If this value is not provided then the limit will be 50 users. The maximum value of the limit is 100 users per page. Only are valid the following limit values: 25, 50 and 100.",
        "example": 25
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
    "url": "/compensation/contract-types",
    "method": "listContractTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compensation",
    "typeScriptTag": "compensation",
    "description": "This endpoint returns a paginated list of contract types. The URL params help to return more accurate results.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "required": false,
        "description": "This field allows to return only the active contract types.",
        "example": true
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
    "url": "/compensation/salaries",
    "method": "getSalariesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compensation",
    "typeScriptTag": "compensation",
    "description": "This endpoint returns a paginated list of employment salaries. The URL params help to return more accurate results.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "Optional filter. This field allows you to retrieve contracts based on their *_userId*. It can accept two formats:<br><br> 1. A single *_userId* as a unique string. <br>Example: *_userId=80a2db290da29e126a18789c* <br><br> 2. Multiple *_userId* values separated by commas (up to a maximum of 15 values). <br>Example: *_userId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.",
        "example": "60a2db290da29e126a18789b"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": "Optional filter. This field allows you to retrieve contracts based on their *_companyId*. It can accept two formats:<br><br> 1. A single *_companyId* as a unique string. <br>Example: *_companyId=80a2db290da29e126a18789c* <br><br> 2. Multiple *_companyId* values separated by commas (up to a maximum of 15 values). <br>Example: *_companyId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.",
        "example": "90a2db290da29e126a187891"
      },
      {
        "name": "paymentPeriod",
        "schema": "string",
        "required": false,
        "description": "Optional filter. This field allows you to retrieve contracts based on their *paymentPeriod*. Accepted values: 'Annual', 'Monthly' and 'Hourly'. It can accept two formats:<br><br> 1. A single *paymentPeriod* as a unique string. <br>Example: *paymentPeriod=Annual* <br><br> 2. Multiple *paymentPeriod* values separated by commas (up to a maximum of 15 values). <br>Example: *paymentPeriod=Annual,Monthly*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.",
        "example": "Annual"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "Optional filter. This field allows you to retrieve contracts based on their *currency* (ISO 4217). It can accept two formats:<br><br> 1. A single *currency* as a unique string. <br>Example: *currency=EUR* <br><br> 2. Multiple *currency* values separated by commas (up to a maximum of 15 values). <br>Example: *currency=EUR,USD*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.",
        "example": "EUR"
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Optional filter for pagination proposals. Determines the number of pages to skip when pagination is being used. If this value is not provided, by default the offset will be 1.",
        "example": 1
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Optional filter for pagination proposals. The maximum number of rows to retrieve which determines the size of the page. If this value is not provided then the limit will be 50 users. The maximum value of the limit is 100 users per page. Only are valid the following limit values: 25, 50 and 100.",
        "example": 25
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
    "url": "/compensation/additional-payments",
    "method": "listAdditionalPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compensation",
    "typeScriptTag": "compensation",
    "description": "This endpoint returns a paginated list of additional payments. The URL params help to return more accurate results.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "Optional filter. This field allows you to retrieve contracts based on their *_userId*. It can accept two formats:<br><br> 1. A single *_userId* as a unique string. <br>Example: *_userId=80a2db290da29e126a18789c* <br><br> 2. Multiple *_userId* values separated by commas (up to a maximum of 15 values). <br>Example: *_userId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.",
        "example": "60a2db290da29e126a18789b"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": "Optional filter. This field allows you to retrieve contracts based on their *_companyId*. It can accept two formats:<br><br> 1. A single *_companyId* as a unique string. <br>Example: *_companyId=80a2db290da29e126a18789c* <br><br> 2. Multiple *_companyId* values separated by commas (up to a maximum of 15 values). <br>Example: *_companyId=80a2db290da29e126a18789c,80a2db290da29e126a18789b,80a2db290da29e126a187891*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.",
        "example": "90a2db290da29e126a187891"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "Optional filter. This field allows you to retrieve contracts based on their *currency* (ISO 4217). It can accept two formats:<br><br> 1. A single *currency* as a unique string. <br>Example: *currency=EUR* <br><br> 2. Multiple *currency* values separated by commas (up to a maximum of 15 values). <br>Example: *currency=EUR,USD*. These options provide flexibility in filtering contracts by their type, making it easier to retrieve the specific data you need.",
        "example": "EUR"
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Optional filter for pagination proposals. Determines the number of pages to skip when pagination is being used. If this value is not provided, by default the offset will be 1.",
        "example": 1
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Optional filter for pagination proposals. The maximum number of rows to retrieve which determines the size of the page. If this value is not provided then the limit will be 50 users. The maximum value of the limit is 100 users per page. Only are valid the following limit values: 25, 50 and 100.",
        "example": 25
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
    "url": "/compensation/additional-payment-types",
    "method": "listAdditionalPaymentTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compensation",
    "typeScriptTag": "compensation",
    "description": "This endpoint returns a paginated list of additional payment types. The URL params help to return more accurate results.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "A valid bearer token.",
        "example": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5qby5pbyIsInN1YiI6IjYwZjBhOTE2MjE0OTg3MjU2YmU5YzhmZiIsImF1ZCI6Imh0dHBzOi8vYXBpLmtlbmpvLmlvIiwiaWF0IjoxNjI2Mzg1MTE1LCJuYmYiOjE2MjYzODUxMTUsImV4cCI6MTYyNjU1NzkxNSwiYWNjZXNzVHlwZSI6IkFwaUFjY2VzcyIsInNfb3JnSWQiOiI2MGYwNGVhN2RmN2JhMjFlY2U0YmYzYzIifQ.cxG_7dIS-VbmDXdJuLkekoyuyCIzQG2fMcgc0nkfbWE8cihhcb5FnALbQkjU9b5-qVcEoMHZlSuUA-jMEBMMVQ"
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Optional filter for pagination proposals. Determines the number of pages to skip when pagination is being used. If this value is not provided, by default the offset will be 1.",
        "example": 1
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Optional filter for pagination proposals. The maximum number of rows to retrieve which determines the size of the page. If this value is not provided then the limit will be 50 users. The maximum value of the limit is 100 users per page. Only are valid the following limit values: 25, 50 and 100.",
        "example": 25
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
  }
]
    }
      language="TypeScript"
      apiTitle="Kenjo API"
      apiBaseUrl="https://sandbox-api.kenjo.io/api/v1"
      apiVersion="1.0.0"
      endpoints={46}
      sdkMethods={62}
      schemas={78}
      parameters={274}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kenjo/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/kenjo/openapi.yaml"
      developerDocumentation="www.kenjo.io/legal/api"
    />
  );
}
  