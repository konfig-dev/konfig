import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";

import { Sdk } from "@site/src/components/Sdk";

export default function ZoomMeetingTypeScriptSdk() {
  return (
    <Sdk
      sdkName="zoom-meeting-typescript-sdk"
      metaDescription="Zoom is a video conferencing platform that allows users to connect remotely for virtual meetings, webinars, online events, and collaborative work sessions. With features like screen sharing, virtual backgrounds, and chat functionality, Zoom is a popular tool for individuals and businesses to communicate and collaborate in real-time."
      company="Zoom"
      serviceName="Meeting"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zoom/meeting/logo.png"
      clientNameCamelCase="zoomMeeting"
      homepage="zoom.us/"
      lastUpdated={new Date("2024-03-13T01:35:30.474Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zoom/meeting/favicon.png"
      contactUrl="https://developer.zoom.us/"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zoom/meeting/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      
      categories={["productivity","collaboration","video","conferencing","webinar","communications"]}
      methods={[
  {
    "url": "/archive_files",
    "method": "meetingFilesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Archiving",
    "typeScriptTag": "archiving",
    "description": "List archived files",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The query start date, in `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `to` query parameter value cannot exceed seven days.",
        "example": "2021-03-11T05:41:36Z"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The query end date, in `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `from` query parameter value cannot exceed seven days.",
        "example": "2021-03-18T05:41:36Z"
      },
      {
        "name": "queryDateType",
        "schema": "string",
        "required": false,
        "description": "The type of query date.\n* `meeting_start_time` \n* `archive_complete_time` \n\n This value defaults to `meeting_start_time`.",
        "example": "meeting_start_time",
        "default": "meeting_start_time"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": "The group ID. To get a group ID, use the [List groups](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/groups) API.",
        "example": "pvFIYKSDTum9iCDOOtQL4w"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request  \n\n **Error Code:** `2001` <br>\n Account does not exist: {accountId} <br>\n"
      }
    ]
  },
  {
    "url": "/archive_files/statistics",
    "method": "getStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Archiving",
    "typeScriptTag": "archiving",
    "description": "Get archived file statistics",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The query start date, `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `to` query parameter value cannot exceed seven days.",
        "example": "2021-03-11T05:41:36Z"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The query end date, in `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `from` query parameter value cannot exceed seven days.",
        "example": "2021-03-18T05:41:36Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `2001` <br>\nAccount does not exist: {accountId}\n\n"
      }
    ]
  },
  {
    "url": "/archive_files/{fileId}",
    "method": "updateAutoDeleteStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Archiving",
    "typeScriptTag": "archiving",
    "description": "Update an archived file's auto-delete status",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_delete",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n "
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n "
      }
    ]
  },
  {
    "url": "/past_meetings/{meetingUUID}/archive_files",
    "method": "meetingFilesDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Archiving",
    "typeScriptTag": "archiving",
    "description": "Delete a meeting's archived files",
    "parameters": [
      {
        "name": "meetingUuid",
        "schema": "string",
        "required": true,
        "description": "The meeting's universally unique identifier (UUID). Each meeting instance generates a UUID. For example, after a meeting ends, a new UUID is generated for the next meeting instance.\n\nIf the meeting UUID begins with a `/` character or contains a `//` character, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID when using the meeting UUID for other API calls.",
        "example": "4444AAAiAAAAAiAiAiiAii=="
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `200`   \n \n Meeting archived files returned."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `200` <br>\nOnly available for Paid account.\n\n**Error Code:** `200` <br>\nNot available for this account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `3001` <br>\nMeeting does not exist: {0}\n\n"
      }
    ]
  },
  {
    "url": "/past_meetings/{meetingUUID}/archive_files",
    "method": "meetingFilesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Archiving",
    "typeScriptTag": "archiving",
    "description": "Get a meeting's archived files",
    "parameters": [
      {
        "name": "meetingUuid",
        "schema": "string",
        "required": true,
        "description": "The meeting's universally unique identifier (UUID). Each meeting instance generates a UUID. After a meeting ends, a new UUID is generated for the next meeting instance.\n\nIf the meeting UUID begins with a `/` character or contains a `//` character, you **must** [double encode](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID when using the meeting UUID for other API calls.",
        "example": "4444AAAiAAAAAiAiAiiAii=="
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found  \n\n **Error Code:** `3001` <br>\n Meeting {meetingUUId} does not exist. <br> <br>\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings",
    "method": "deleteMeetingRecordings",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Delete meeting recordings",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. ",
        "example": "atsXxhSEQWit9t+U02HXNQ=="
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": "The recording delete actions:  \n `trash` - Move recording to trash.  \n `delete` - Delete recording permanently.",
        "example": "trash",
        "default": "trash"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "**HTTP Status Code:** `200`   \n \nRecordings deleted. \n\n**Error Code:** `200`   \n \nYou do not have the right permission."
      },
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \nMeeting recording deleted."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}. <br/>\n\n**Error Code:** `3332` <br>\nThis recording was selected for a simulive webinar. You cannot delete or trash it.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser {userId} does not exist or does not belong to this account.<br>\n\n**Error Code:** `3301` <br>\nThere is no recording for this meeting.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings",
    "method": "getMeetingRecordings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Get meeting recordings",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get a meeting's cloud recordings, provide the meeting ID or UUID. If providing the meeting ID instead of UUID, the response will be for the latest meeting instance. \n\nTo get a webinar's cloud recordings, provide the webinar's ID or UUID. If providing the webinar ID instead of UUID, the response will be for the latest webinar instance. \n\nIf a UUID starts with `/` or contains `//` (example: `/ajXp112QmuoKj4854875==`), **[double encode](https://developers.zoom.us) the UUID** before making an API request. ",
        "example": "atsXxhSEQWit9t+U02HXNQ=="
      },
      {
        "name": "includeFields",
        "schema": "string",
        "required": false,
        "description": "The `download_access_token` value for downloading the meeting's recordings.",
        "example": "a2f19f96-9294-4f51-8134-6f0eea108eb2"
      },
      {
        "name": "ttl",
        "schema": "integer",
        "required": false,
        "description": "The `download_access_token` Time to Live (TTL) value. This parameter is only valid if the `include_fields` query parameter contains the `download_access_token` value.",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This field returns a list of recording files for each participant. The API only returns this response when the **Record a separate audio file of each participant** setting is enabled."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request  \n\n **Error Code:** `1010` <br>\n User not found on this account: {accountId}. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found  \n\n **Error Code:** `1001` <br>\n User \"{userId}\" does not exist or does not belong to this account. <br>\n**Error Code:** `3301` <br>\n There is no recording for this meeting. <br>\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/analytics_details",
    "method": "details",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Get Meeting Recording's Analytics Details",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. ",
        "example": "atsXxhSEQWit9t+U02HXNQ=="
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The start date for the monthly range to query. The maximum range can be a month. If you do not provide this value, this defaults to the current date.",
        "example": "2020-06-30"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The end date for the monthly range to query. The maximum range can be a month.",
        "example": "2020-07-30"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of analytics details: \n* `by_view` &mdash; by_view. \n* `by_download` &mdash; by_download.",
        "example": "by_view"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser not found on this account: {accountId}\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser \"{userId}\" does not exist or does not belong to this account.\n\n**Error Code:** `3301` <br>\nThere is no recording for this meeting.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/analytics_summary",
    "method": "summary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Get Meeting Recording's Analytics Summary",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. ",
        "example": "atsXxhSEQWit9t+U02HXNQ=="
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The start date for the monthly range to query. The maximum range can be a month. If you do not provide this value, this defaults to the current date.",
        "example": "2020-06-30"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The end date for the monthly range to query. The maximum range can be a month.",
        "example": "2020-07-30"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser not found on this account: {accountId}\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser \"{userId}\" does not exist or does not belong to this account.\n\n**Error Code:** `3301` <br>\nThere is no recording for this meeting.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/registrants",
    "method": "listRegistrants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "List recording registrants",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Query by the registrant's status: \n* `pending` &mdash; The registration is pending. \n* `approved` &mdash; The registrant is approved. \n* `denied` &mdash; The registration is denied.",
        "example": "pending",
        "default": "approved"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "**Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.",
        "example": 1,
        "default": 1
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting cloud recording registrant."
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/registrants",
    "method": "createRegistrant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Create a recording registrant",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1800 Amphibious Blvd."
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mountain View"
      },
      {
        "name": "comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Looking forward to the discussion."
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "US"
      },
      {
        "name": "custom_questions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "jchill@example.com"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jill"
      },
      {
        "name": "industry",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Food"
      },
      {
        "name": "job_title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Chef"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Chill"
      },
      {
        "name": "no_of_employees",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1-20"
      },
      {
        "name": "org",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Cooking Org"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "5550100"
      },
      {
        "name": "purchasing_time_frame",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1-3 months"
      },
      {
        "name": "role_in_purchase_process",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Influencer"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CA"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "approved"
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "94045"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/registrants/questions",
    "method": "listRegistrationQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Get registration questions",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. ",
        "example": "atsXxhSEQWit9t+U02HXNQ=="
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Recording Registrant Questions"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/registrants/questions",
    "method": "updateRegistrationQuestions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Update registration questions",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. ",
        "example": "atsXxhSEQWit9t+U02HXNQ=="
      },
      {
        "name": "custom_questions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `200`  \n \nRecording Registrant Questions Updated"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/registrants/status",
    "method": "updateRegistrantStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Update registrant's status",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "approve"
      },
      {
        "name": "registrants",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nRegistrant status updated."
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Get meeting recording settings",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "The meeting ID enables you to get cloud recording of a:\n- Meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\n- Webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **double encode** the UUID before making an API request. ",
        "example": "atsXxhSEQWit9t+U02HXNQ=="
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n "
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/settings",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Update meeting recording settings",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **double encode** the UUID before making an API request. ",
        "example": "atsXxhSEQWit9t+U02HXNQ=="
      },
      {
        "name": "approval_type",
        "schema": "integer",
        "description": "",
        "example": 0
      },
      {
        "name": "authentication_domains",
        "schema": "string",
        "description": "",
        "example": "test.com"
      },
      {
        "name": "authentication_option",
        "schema": "string",
        "description": "",
        "example": "auth_option"
      },
      {
        "name": "on_demand",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "975238724"
      },
      {
        "name": "recording_authentication",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "send_email_to_host",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "share_recording",
        "schema": "string",
        "description": "",
        "example": "publicly"
      },
      {
        "name": "show_social_share_buttons",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "topic",
        "schema": "string",
        "description": "",
        "example": "My Personal Meeting Room"
      },
      {
        "name": "viewer_download",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`    Meeting recording setting's updated."
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n "
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/{recordingId}",
    "method": "deleteRecording",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Delete a meeting recording file",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. ",
        "example": "atsXxhSEQWit9t+U02HXNQ=="
      },
      {
        "name": "recordingId",
        "schema": "string",
        "required": true,
        "description": "The recording ID.",
        "example": "a2f19f96-9294-4f51-8134-6f0eea108eb2"
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": "The recording delete actions:  \n `trash` - Move recording to trash.  \n `delete` - Delete recording permanently.",
        "example": "trash",
        "default": "trash"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "**HTTP Status Code:** `200`   \n \nRecording deleted. \n\n**Error Code:** `200`  \n \nYou do not have the right permissions."
      },
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \nMeeting recording file deleted."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}.<br>\n\n**Error Code:** `3303` <br>\nYou can not delete an uncompleted meeting. <br/>\n\n**Error Code:** `3332` <br>\nThis recording was selected for a simulive webinar. You cannot delete or trash it. <br>\n\n**Error Code:** `3332` <br>\nUnable to delete this file because this recording is being used for Zoom IQ for Sales.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser {userId} does not exist or does not belong to this account.<br>\n\n**Error Code:** `3301` <br>\nThere is no recording for this meeting.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/recordings/{recordingId}/status",
    "method": "recoverStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Recover a single recording",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance. \n\nTo get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance. \n\nIf a UUID starts with &quot;/&quot; or contains &quot;//&quot; (example: &quot;/ajXp112QmuoKj4854875==&quot;), you must **[double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)** the UUID before making an API request. ",
        "example": "atsXxhSEQWit9t+U02HXNQ=="
      },
      {
        "name": "recordingId",
        "schema": "string",
        "required": true,
        "description": "The recording ID.",
        "example": "a2f19f96-9294-4f51-8134-6f0eea108eb2"
      },
      {
        "name": "action",
        "schema": "string",
        "description": "",
        "example": "recover"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n  Meeting recording recovered.\n\n"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}.\n\n**Error Code:** `3309` <br>\nNot enough cloud storage available. Either purchase additional storage or delete cloud recordings to free up storage.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser {userId} does not exist or does not belong to this account.<br>\n\n**Error Code:** `3301` <br>\nThere is no recording for this meeting.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingUUID}/recordings/status",
    "method": "recoverRecordingStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "Recover meeting recordings",
    "parameters": [
      {
        "name": "meetingUuid",
        "schema": "string",
        "required": true,
        "description": "The meeting's universally unique identifier (UUID). Each meeting instance generates a UUID. For example, after a meeting ends, a new UUID is generated for the next meeting instance.\n\nIf the meeting UUID begins with a `/` character or contains a `//` character, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID when using the meeting UUID for other API calls.",
        "example": "4444AAAiAAAAAiAiAiiAii=="
      },
      {
        "name": "action",
        "schema": "string",
        "description": "",
        "example": "recover"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "**HTTP Status Code:** `200`   \n \nRecordings recovered. \n\n**Error Code:** `200`  \n \nYou do not have the right permissions."
      },
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \nDeleted recordings of the meeting recovered."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}.\n\n**Error Code:** `3309` <br>\nNot enough cloud storage available. Either purchase additional storage or delete cloud recordings to free up storage.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser does not exist: {userId}.<br>\n\n**Error Code:** `3301` <br>\nThere is no recording for this meeting.\n\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/recordings",
    "method": "listRecordings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cloud Recording",
    "typeScriptTag": "cloudRecording",
    "description": "List all recordings",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user's ID or email address. For user-level apps, pass the `me` value.",
        "example": "USERID"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The next page token paginates through a large set of results. A next page token returns whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      },
      {
        "name": "mc",
        "schema": "string",
        "required": false,
        "description": "The query metadata of the recording if using an on-premise meeting connector for the meeting.",
        "example": "false",
        "default": "false"
      },
      {
        "name": "trash",
        "schema": "boolean",
        "required": false,
        "description": "The query trash.\n* `true` - List recordings from trash.  \n* `false` - Do not list recordings from the trash.  \n\nThe default value is `false`. If you set it to `true`, you can use the `trash_type` property to indicate the type of Cloud recording that you need to retrieve. ",
        "example": false,
        "default": false
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The start date in 'yyyy-mm-dd' UTC format for the date range where you would like to retrieve recordings. The maximum range can be a month. If no value is provided for this field, the default will be current date. \n\nFor example, if you make the API request on June 30, 2020, without providing the `from` and `to` parameters, by default the value of 'from' field will be `2020-06-30` and the value of the 'to' field will be `2020-07-01`. \n\n**Note**: The `trash` files cannot be filtered by date range and thus, the `from` and `to` fields should not be used for trash files.",
        "example": "2020-06-30"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The end date in 'yyyy-mm-dd' 'yyyy-mm-dd' UTC format. ",
        "example": "2020-06-30"
      },
      {
        "name": "trashType",
        "schema": "string",
        "required": false,
        "description": "The type of cloud recording to retrieve from the trash. \n \n *   `meeting_recordings`: List all meeting recordings from the trash.  \n *  `recording_file`: List all individual recording files from the trash. ",
        "example": "meeting_recordings",
        "default": "meeting_recordings"
      },
      {
        "name": "meetingId",
        "schema": "integer",
        "required": false,
        "description": "The meeting ID.",
        "example": 6840331990
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The pagination object."
      },
      {
        "statusCode": "401",
        "description": "**HTTP Status Code:** `401` <br>\n Unauthorized  \n\n **Error Code:** `124` <br>\n Requires an access token. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found  \n\n **Error Code:** `1001` <br>\n User {userId} does not exist, or does not belong to this account. <br>\n**Error Code:** `3301` <br>\n There is no recording for this session. <br>\n"
      }
    ]
  },
  {
    "url": "/devices",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "List devices",
    "parameters": [
      {
        "name": "searchText",
        "schema": "string",
        "required": false,
        "description": "Filter devices by name or serial number.",
        "example": "poly"
      },
      {
        "name": "platformOs",
        "schema": "string",
        "required": false,
        "description": "Filter devices by platform operating system.",
        "example": "win"
      },
      {
        "name": "isEnrolledInZdm",
        "schema": "boolean",
        "required": false,
        "description": "Filter devices by enrollment of ZDM (Zoom Device Management).",
        "example": true,
        "default": true
      },
      {
        "name": "deviceType",
        "schema": "integer",
        "required": false,
        "description": "Filter devices by device type.  \n  Device Type:  \n `-1` - All Zoom Room device(0,1,2,3,4,6).  \n `0` - Zoom Rooms Computer.  \n `1` - Zoom Rooms Controller.  \n `2` - Zoom Rooms Scheduling Display.  \n `3` - Zoom Rooms Control System.  \n `4` -  Zoom Rooms Whiteboard.  \n `5` - Zoom Phone Appliance.  \n `6` - Zoom Rooms Computer (with Controller).",
        "example": 0,
        "default": -1
      },
      {
        "name": "deviceVendor",
        "schema": "string",
        "required": false,
        "description": "Filter devices by vendor.",
        "example": "poly"
      },
      {
        "name": "deviceModel",
        "schema": "string",
        "required": false,
        "description": "Filter devices by model.",
        "example": "ep5"
      },
      {
        "name": "deviceStatus",
        "schema": "integer",
        "required": false,
        "description": "Filter devices by status.   \n  Device Status:  \n `0` - offline.  \n `1` - online.  \n `-1` - unlink",
        "example": 0,
        "default": -1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `30055008` <br>\nno permission.\n\n"
      }
    ]
  },
  {
    "url": "/devices",
    "method": "createNewDevice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "Add new device",
    "parameters": [
      {
        "name": "device_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My device"
      },
      {
        "name": "mac_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "01-23-45-67-89-AB"
      },
      {
        "name": "serial_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6NRN2A0"
      },
      {
        "name": "vendor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Poly"
      },
      {
        "name": "model",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "StudioX30"
      },
      {
        "name": "room_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "72afdc13-a289-40c3-b358-50c8b8de"
      },
      {
        "name": "user_email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "test-user@ya.us"
      },
      {
        "name": "device_type",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "personal rooms"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "**HTTP Status:** `202` **Accepted**\nRequest processed successfully."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `30055001` <br>\nzoom room does not exist. \n\n**Error Code:** `30055002` <br>\nrequired param can not be empty or null.\n\n**Error Code:** `30055003` <br>\ndevice type does not support.\n\n**Error Code:** `30055004` <br>\nmodel or vendor not exist.\n\n**Error Code:** `30055005` <br>\ntag length can not be more than 64.\n\n**Error Code:** `30055006` <br>\ndevice has already exist.\n\n**Error Code:** `30055007` <br>\ninvalid mac address.\n\n**Error Code:** `30055008` <br>\nno permission.\n\n**Error Code:** `30055009` <br>\nemail does not have plan.\n\n"
      }
    ]
  },
  {
    "url": "/devices/{deviceId}",
    "method": "removeDeviceZmd",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "Delete device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the device.",
        "example": "F1C6E9DF-429E-4FA1-85DA-AC95464F3D18"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204` **No Content** Device deleted successfully."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `30055008` <br>\n no permission. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `30055012` <br>\n no found unified deviceId. <br>\n"
      }
    ]
  },
  {
    "url": "/devices/{deviceId}",
    "method": "getDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "Get device detail",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "The device's unique identifier.",
        "example": "F1C6E9DF-429E-4FA1-85DA-AC95464F3D18"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the device."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `30055008` <br>\n No permission. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `30055012` <br>\n No found unified deviceId. <br>\n"
      }
    ]
  },
  {
    "url": "/devices/{deviceId}",
    "method": "updateDeviceName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "Change device ",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the device.",
        "example": "F1C6E9DF-429E-4FA1-85DA-AC95464F3D18"
      },
      {
        "name": "device_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My device"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "personal rooms"
      },
      {
        "name": "room_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "72afdc13-a289-40c3-b358-50c8b8de"
      },
      {
        "name": "device_type",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204` **No Content** \n \nRequest processed successfully."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `30055001` <br>\n zoom room does not exist. . <br>\n**Error Code:** `30055002` <br>\n required param can not be empty or null. <br>\n**Error Code:** `30055003` <br>\n device type does not support. <br>\n**Error Code:** `30055011` <br>\n device is not enrolled. <br>\n**Error Code:** `30055013` <br>\n device not support this app. <br>\n**Error Code:** `30055014` <br>\n room not support this app. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `30055012` <br>\n Device does not exist: {deviceId}. <br>\n"
      }
    ]
  },
  {
    "url": "/devices/{deviceId}/assignment",
    "method": "changeDeviceAssociation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "Change device association",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the device.",
        "example": "F1C6E9DF-429E-4FA1-85DA-AC95464F3D18"
      },
      {
        "name": "room_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "qMOLddnySIGGVycz8aX_JQ"
      },
      {
        "name": "app_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ZR",
        "default": "ZR"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204` **No Content**  \n \nRequest processed successfully."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `8500` <br>\nDevice not enrolled in Zoom Device Management.\n\n**Error Code:** `8501` <br>\nDevice does not support this app.\n\n**Error Code:** `8502` <br>\nRoom does not support this app.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1012` <br>\nRoom does not exist: {roomId}.\n\n**Error Code:** `8503` <br>\nDevice does not exist: {deviceId}.\n\n"
      }
    ]
  },
  {
    "url": "/h323/devices",
    "method": "listDevices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "H323 Devices",
    "typeScriptTag": "h323Devices",
    "description": "List H.323/SIP devices",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "**Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.",
        "example": 1,
        "default": 1
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of H.323/SIP Devices."
      }
    ]
  },
  {
    "url": "/h323/devices",
    "method": "createDevice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "H323 Devices",
    "typeScriptTag": "h323Devices",
    "description": "Create a H.323/SIP device",
    "parameters": [
      {
        "name": "encryption",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "auto"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "127.0.0.1"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "api_test_20190508"
      },
      {
        "name": "protocol",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "H.323"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The H.323/SIP device object."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `200` <br>\nNo permission.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `2020` <br>\nH.323 device's display name:{displayName} is already in use.\n\n"
      }
    ]
  },
  {
    "url": "/h323/devices/{deviceId}",
    "method": "deleteDevice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "H323 Devices",
    "typeScriptTag": "h323Devices",
    "description": "Delete a H.323/SIP device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "The device ID.",
        "example": "abceHewahkrehwiK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "You do not have the permission to delete this device."
      },
      {
        "statusCode": "204",
        "description": "H.323/SIP device deleted."
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/h323/devices/{deviceId}",
    "method": "updateDeviceInfo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "H323 Devices",
    "typeScriptTag": "h323Devices",
    "description": "Update a H.323/SIP device",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "The device ID.",
        "example": "abceHewahkrehwiK"
      },
      {
        "name": "encryption",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "auto"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "127.0.0.1"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "api_test_20190508"
      },
      {
        "name": "protocol",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "H.323"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nH.323/SIP device updated."
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `2020` <br>\nH.323 device's display name:{displayName} is already in use.\n\n"
      }
    ]
  },
  {
    "url": "/live_meetings/{meetingId}/chat/messages/{messageId}",
    "method": "deleteMeetingChatMessage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Delete a live meeting message",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, store it as a long-format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "The live meeting chat message's unique identifier (UUID), in base64-encoded format.",
        "example": "MS17MDQ5NjE4QjYtRjk4Ny00REEwLUFBQUItMTg3QTY0RjU2MzhFfQ=="
      },
      {
        "name": "fileIds",
        "schema": "string",
        "required": false,
        "description": "The live webinar chat file's universally unique identifier (UUID), in base64-encoded format. Separate multiple values with commas.",
        "example": "MS17RDk0QTY3QUQtQkFGQy04QTJFLTI2RUEtNkYxQjRBRTU1MTk5fQ==,MS17NDQ0OEU5MjMtM0JFOS1CMDA1LTQ0NDAtQjdGOTU0Rjk5MTkyfQ=="
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \nMeeting chat message deleted."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `200` <br>\n * Only available for Paid accounts. \n* DLP is not enabled. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Meeting {meetingId} does not exist. <br>\n"
      }
    ]
  },
  {
    "url": "/live_meetings/{meetingId}/chat/messages/{messageId}",
    "method": "updateMessage",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update a live meeting message",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, store it as a long-format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "The live meeting chat message's unique identifier (UUID), in base64-encoded format.",
        "example": "MS17MDQ5NjE4QjYtRjk4Ny00REEwLUFBQUItMTg3QTY0RjU2MzhFfQ=="
      },
      {
        "name": "message_content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "This is a test message"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204` <br>\n Meeting chat message updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `300` <br>\n DLP is not enabled on this account <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Meeting {meetingId} does not exist. <br>\n"
      }
    ]
  },
  {
    "url": "/live_meetings/{meetingId}/events",
    "method": "controlInMeetingFeatures",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Use in-meeting controls",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "The live meeting's ID.",
        "example": "93398114182"
      },
      {
        "name": "method",
        "schema": "string",
        "description": "",
        "example": "recording.start"
      },
      {
        "name": "params",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "**HTTP Status:** `202` **Accepted**\nRequest processed successfully."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `300` <br>\n * Meeting id does not exist.<br>\n* Invalid meeting id.<br>\n* Meeting does not exist.<br>\n* No permission.<br>\n* This API is not available for this account, please contact Zoom support. <br>\n**Error Code:** `3309` <br>\n Not enough cloud storage available. Either purchase additional storage or delete cloud recordings to free up storage. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Meeting {meetingId} is not found or has expired. <br>\n"
      },
      {
        "statusCode": "429",
        "description": "**HTTP Status Code:** `429` <br>\n undefined \n\n "
      }
    ]
  },
  {
    "url": "/meetings/meeting_summaries",
    "method": "listMeetingSummaries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List meeting summaries of an account",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The next page token paginates through a large set of results. A next page token returns whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The start date in `yyyy-MM-dd'T'HH:mm:ss'Z'` UTC format used to retrieve the creation date range of the meeting summaries.",
        "example": "2023-10-19T07:00:00Z"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The end date in `yyyy-MM-dd'T'HH:mm:ss'Z'` UTC format used to retrieve the creation date range of the meeting summaries.",
        "example": "2023-10-20T07:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `3161` <br>\n Meeting hosting and scheduling capabilities are not allowed for your user account. <br>\n**Error Code:** `3000` <br>\n Meeting summary disabled. To enable this feature, enable the \"Meeting Summary with AI Companion\" setting in the Zoom web portal's \"Settings\" interface. <br>\n"
      },
      {
        "statusCode": "401",
        "description": "**HTTP Status Code:** `401` <br>\n Unauthorized \n\n **Error Code:** `1001` <br>\n User {userId} not exist or not belong to this account. <br>\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}",
    "method": "removeMeeting",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Delete a meeting",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID.",
        "example": "1648194360000"
      },
      {
        "name": "scheduleForReminder",
        "schema": "boolean",
        "required": false,
        "description": "`true`: Notify host and alternative host about the meeting cancellation via email.\n`false`: Do not send any email notification.",
        "example": true
      },
      {
        "name": "cancelMeetingReminder",
        "schema": "boolean",
        "required": false,
        "description": "`true`: Notify registrants about the meeting cancellation via email. \n\n`false`: Do not send any email notification to meeting registrants. \n\nThe default value of this field is `false`.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code**: `204`   \n \nMeeting deleted."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}.<br>\n\n**Error Code:** `3000` <br>\nCannot access meeting information.<br>Invalid occurrence_id.<br>\n\n**Error Code:** `3002` <br>\nSorry, you cannot delete this meeting since it is in progress.<br>\n\n**Error Code:** `3003` <br>\nYou are not the meeting host.<br>\n\n**Error Code:** `3007` <br>\nSorry, you cannot delete this meeting since it has ended.<br>\n\n**Error Code:** `3018` <br>\nNot allowed to delete PMI.<br>\n\n**Error Code:** `3037` <br>\nNot allowed to delete PAC.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser does not exist: {userId}.<br>\n\n**Error Code:** `3001` <br>\nMeeting with this {meetingId} is not found or has expired.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, store it as a long format integer and **not** an integer. Meeting IDs can be more than 10 digits.",
        "example": 85746065
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "Meeting occurrence ID. Provide this field to view meeting details of a particular occurrence of the [recurring meeting](https://support.zoom.us/hc/en-us/articles/214973206-Scheduling-Recurring-Meetings).",
        "example": "1648194360000"
      },
      {
        "name": "showPreviousOccurrences",
        "schema": "boolean",
        "required": false,
        "description": "Set this field's value to `true` to view meeting details of all previous occurrences of a [recurring meeting](https://support.zoom.us/hc/en-us/articles/214973206-Scheduling-Recurring-Meetings). ",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Meeting object."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User not found on this account: {accountId}.<br> <br>\n**Error Code:** `3000` <br>\n Cannot access webinar info. <br>\n**Error Code:** `3161` <br>\n Meeting hosting and scheduling capabilities are not allowed for your user account. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User not exist: {userId}.<br> <br>\n**Error Code:** `3001` <br>\n Meeting {meetingId} is not found or has expired. <br>\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update a meeting",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, store it as a long format integer and **not** an integer. Meeting IDs can be greater than 10 digits.",
        "example": 85746065
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "Meeting occurrence ID. Support change of agenda, `start_time`, duration, or settings {`host_video`, `participant_video`, `join_before_host`, `mute_upon_entry`, `waiting_room`, `watermark`, `auto_recording`}.",
        "example": "1648194360000"
      },
      {
        "name": "agenda",
        "schema": "string",
        "description": "",
        "example": "My Meeting"
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": "",
        "example": 60
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "123456"
      },
      {
        "name": "pre_schedule",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "schedule_for",
        "schema": "string",
        "description": "",
        "example": "jchill@example.com"
      },
      {
        "name": "recurrence",
        "schema": "object",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "string",
        "description": "",
        "example": "2022-03-25T07:29:29Z"
      },
      {
        "name": "template_id",
        "schema": "string",
        "description": "",
        "example": "5Cj3ceXoStO6TGOVvIOVPA=="
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "America/Los_Angeles"
      },
      {
        "name": "topic",
        "schema": "string",
        "description": "",
        "example": "My Meeting"
      },
      {
        "name": "tracking_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "description": "",
        "example": 2,
        "default": 2
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nMeeting updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User not found on this account: {accountId} <br>\n**Error Code:** `3000` <br>\n Cannot access meeting information. <br>\n**Error Code:** `3003` <br>\n You are not the meeting host. <br>\n**Error Code:** `3000` <br>\n * Instant meetings do not support the \"schedule_for\" parameter. You cannot schedule an instant meeting for another user. \n* Users in \"{0}\" have been blocked from joining meetings and webinars. To unblock them, go to the \"Settings\" page in the Zoom web portal and update the \"Block users in specific domains from joining meetings and webinars\" setting. \n* Prescheduling is only available for scheduled meetings (type 2) and recurring meetings with no fixed time (type 3). \n* You cannot schedule a meeting for \"{0}\". \n* You cannot update or delete meetings that have started using this method. \n* Unable to schedule for a user outside of your account for a meeting with continuous chat. <br>\n**Error Code:** `3161` <br>\n Meeting hosting and scheduling capabilities are not allowed for your user account. <br>\n**Error Code:** `300` <br>\n * The value that you entered for the schedule_for field is invalid. Enter a valid value and try again. <br> \n* Invalid enforce_login_domains, separate multiple domains by semicolon. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User does not exist: {userId}.<br> <br>\n**Error Code:** `3001` <br>\n A meeting with this {meetingId} is not found or has expired. <br>\n"
      },
      {
        "statusCode": "429",
        "description": "**HTTP Status Code:** `429` <br>\n Too Many Requests \n\n "
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/batch_polls",
    "method": "createBatchPolls",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Perform batch poll creation",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "93398114182"
      },
      {
        "name": "polls",
        "schema": "array",
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
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nInvalid Meeting ID.\n\n**Error Code:** `300` <br>\nMeeting id does not exist.\n\n**Error Code:** `3000` <br>\nCannot access meeting information.\n\n**Error Code:** `3001` <br>\nMeeting does not exist: {meetingId}.<br>\n\n**Error Code:** `4400` <br>\n* You can only add a maximum of 50 polls. \n* Meeting polls disabled. To enable this feature, enable the \"Meeting Polls/Quizzes\" setting in the Zoom web portal's \"Settings\" interface. \n* Advanced meeting polls disabled. To enable this feature, enable the \"Allow host to create advanced polls and quizzes\" setting in the Zoom web portal's \"Settings\" interface.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/batch_registrants",
    "method": "batchRegistrantsCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Perform batch registration",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the meeting (Meeting Number).",
        "example": "91498058927"
      },
      {
        "name": "auto_approve",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "registrants_confirmation_email",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "registrants",
        "schema": "array",
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
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `3038` <br>\nMeeting is over, you can not register now. If you have any questions, please contact the Meeting host.<br><br>\n\n**Error Code:** `303` <br>\nThis API can only be used for scheduled meeting(meeting type: 2). Batch registration is not supported for other meeting types.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `3001` <br>\nMeeting does not exist: {meetingId}.<br>\n\n**Error Code:** `3043` <br>\nMeeting has reached maximum attendee capacity.<br>\n\n**Error Code:** `404` <br>\nRegistration has not been enabled for this meeting: {meetingId}.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/invitation",
    "method": "getInvitationNote",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get meeting invitation",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Meeting invitation details."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `3161` <br>\n Meeting hosting and scheduling capabilities are not allowed for your user account. <br>\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/invite_links",
    "method": "createInviteLinks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Create meeting's invite links",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "attendees",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "integer",
        "description": "",
        "example": 1000,
        "default": 7200
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Invite links response."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\n* Meeting ID does not exist. \n* Invalid meeting ID.\n\n**Error Code:** `3000` <br>\nCannot access webinar information.\n\n**Error Code:** `3001` <br>\nMeeting does not exist: {meetingId}\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/jointoken/live_streaming",
    "method": "getJoinToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting's join token for live streaming",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting's join token."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nInvalid meeting ID.\n\n**Error Code:** `3000` <br>\nCannot access Webinar information.\n\n**Error Code:** `124` <br>\nThis API only supports OAuth2 authorization.\n\n**Error Code:** `3000` <br>\nNot allowed to start live streaming. To use this feature, enable the \"Allow livestreaming of meetings\" setting in the \"Settings\" page of the Zoom web portal.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `300` <br>\nMeeting ID does not exist.\n\n**Error Code:** `3001` <br>\nMeeting does not exist: {meetingId}\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/jointoken/local_archiving",
    "method": "getMeetingArchiveTokenForLocalArchiving",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting's archive token for local archiving",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting's local archive token."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nInvalid meeting ID.\n\n**Error Code:** `3000` <br>\nCannot access Webinar information.\n\n**Error Code:** `124` <br>\nThis API only supports OAuth2 authorization.\n\n**Error Code:** `3000` <br>\nNot allowed to start local archiving. To use this feature, enable the \"Archive meetings and webinars\" setting in the \"Settings\" page of the Zoom web portal.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `300` <br>\nMeeting ID does not exist.\n\n**Error Code:** `3001` <br>\nMeeting does not exist: {meetingId}\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/jointoken/local_recording",
    "method": "getJoinTokenLocalRecording",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting's join token for local recording",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting's local recorder join token."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nInvalid meeting ID.\n\n**Error Code:** `3000` <br>\nCannot access Webinar information.\n\n**Error Code:** `124` <br>\nThis API only supports OAuth2 authorization.\n\n**Error Code:** `3000` <br>\nNot allowed to start local recording. To use this feature, enable the \"Local Recording\" setting in the \"Settings\" page of the Zoom web portal.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `300` <br>\nMeeting ID does not exist.\n\n**Error Code:** `3001` <br>\nMeeting does not exist: {meetingId}\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/livestream",
    "method": "getLivestreamDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get livestream details",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the meeting.",
        "example": "93398114182"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nMissing meetingId<br>\nInvalid meetingId<br><br>\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser {userId} does not exist.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/livestream",
    "method": "updateLivestream",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update a livestream",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "page_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com/livestream/123"
      },
      {
        "name": "stream_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "contact-it@example.com"
      },
      {
        "name": "stream_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com/livestream"
      },
      {
        "name": "resolution",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "720p"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nMeeting livestream updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}.<br>\n\n**Error Code:** `3000` <br>\nCannot access webinar info.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser {userId} does not exist.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/livestream/status",
    "method": "livestreamStatusUpdate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update Live Stream Status",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "action",
        "schema": "string",
        "description": "",
        "example": "start"
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \nMeeting livestream updated.\n\n"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `3000` <br>\nCannot access webinar info.<br>\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser {userId} does not exist.<br>\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/meeting_summary",
    "method": "getMeetingSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting summary",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": false,
        "description": "The meeting's universally unique ID (UUID). When you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.",
        "example": "aDYlohsHRtCd4ii1uC2+hA=="
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/polls",
    "method": "listMeetingPolls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List meeting polls",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "anonymous",
        "schema": "boolean",
        "required": false,
        "description": "Whether to query for polls with the **Anonymous** option enabled: \n* `true` &mdash; Query for polls with the **Anonymous** option enabled. \n* `false` &mdash; Do not query for polls with the **Anonymous** option enabled.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Poll List"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `4400` <br>\nMeeting polls disabled. To enable this feature, enable the \"Meeting Polls/Quizzes\" setting in the Zoom web portal's \"Settings\" interface.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `404` <br>\nMeeting Poll not found\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/polls",
    "method": "createPoll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Create a meeting poll",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Learn something new"
      },
      {
        "name": "anonymous",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "poll_type",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Information about meeting and webinar polling."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `4400` <br>\n* Meeting polls disabled. To enable this feature, enable the \"Meeting Polls/Quizzes\" setting in the Zoom web portal's \"Settings\" interface. \n* Advanced meeting polls disabled. To enable this feature, enable the \"Allow host to create advanced polls and quizzes\" setting in the Zoom web portal's \"Settings\" interface.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `404` <br>\nMeeting not found\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/polls/{pollId}",
    "method": "pollDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Delete a meeting poll",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "pollId",
        "schema": "string",
        "required": true,
        "description": "The poll ID",
        "example": "QalIoKWLTJehBJ8e1xRrbQ"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \nMeeting Poll deleted"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `4400` <br>\nMeeting polls disabled. To enable this feature, enable the \"Meeting Polls/Quizzes\" setting in the Zoom web portal's \"Settings\" interface.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `404` <br>\nMeeting Poll not found\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/polls/{pollId}",
    "method": "getPoll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting poll",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "pollId",
        "schema": "string",
        "required": true,
        "description": "The poll ID",
        "example": "QalIoKWLTJehBJ8e1xRrbQ"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about meeting and webinar polling."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `4400` <br>\nMeeting polls disabled. To enable this feature, enable the \"Meeting Polls/Quizzes\" setting in the Zoom web portal's \"Settings\" interface.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `404` <br>\nMeeting Poll not found.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/polls/{pollId}",
    "method": "updateMeetingPoll",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update a meeting poll",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "pollId",
        "schema": "string",
        "required": true,
        "description": "The poll ID",
        "example": "QalIoKWLTJehBJ8e1xRrbQ"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Learn something new"
      },
      {
        "name": "anonymous",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "poll_type",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \nMeeting Poll Updated"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `4400` <br>\n* Meeting polls disabled. To enable this feature, enable the \"Meeting Polls/Quizzes\" setting in the Zoom web portal's \"Settings\" interface. \n* Advanced meeting polls disabled. To enable this feature, enable the \"Allow host to create advanced polls and quizzes\" setting in the Zoom web portal's \"Settings\" interface.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `404` <br>\nMeeting Poll not found\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/registrants",
    "method": "listRegistrants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List meeting registrants",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID.",
        "example": "1648194360000"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Query by the registrant's status. \n* `pending` - The registration is pending. \n* `approved` - The registrant is approved. \n* `denied` - The registration is denied.",
        "example": "pending",
        "default": "approved"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "**Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.",
        "example": 1,
        "default": 1
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of users."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account: {accountId}.<br> <br>\n**Error Code:** `3003` <br>\n You are not the meeting host.<br> <br>\n**Error Code:** `3000` <br>\n Cannot access meeting info. <br>\n**Error Code:** `3161` <br>\n Meeting hosting and scheduling capabilities are not allowed for your user account. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n Meeting host does not exist: {userId}. <br>\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/registrants",
    "method": "addRegistrant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Add a meeting registrant",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "occurrenceIds",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of meeting occurrence IDs. You can get this value with the [Get a meeting](https://developers.zoom.us) API.",
        "example": "1648194360000,1648367160000"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jill"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Chill"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "jchill@example.com"
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1800 Amphibious Blvd."
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mountain View"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CA"
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "94045"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "US"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "5550100"
      },
      {
        "name": "comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Looking forward to the discussion."
      },
      {
        "name": "custom_questions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "industry",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Food"
      },
      {
        "name": "job_title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Chef"
      },
      {
        "name": "no_of_employees",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1-20"
      },
      {
        "name": "org",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Cooking Org"
      },
      {
        "name": "purchasing_time_frame",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1-3 months"
      },
      {
        "name": "role_in_purchase_process",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Influencer"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "en-US"
      },
      {
        "name": "auto_approve",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}\n\n**Error Code:** `3003` <br>\nYou are not the meeting host.\n\n**Error Code:** `3043` <br>\nMeeting has reached maximum attendee capacity.\n\n**Error Code:** `3000` <br>\nCannot access meeting info.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nMeeting host does not exist: {userId}\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/registrants/questions",
    "method": "listRegistrationQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List registration questions ",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Meeting Registrant Questions"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/registrants/questions",
    "method": "updateRegistrationQuestions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update registration questions",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "custom_questions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nMeeting Registrant Questions Updated"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/registrants/status",
    "method": "updateRegistrantStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update registrant's status",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID.",
        "example": "1648194360000"
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "approve"
      },
      {
        "name": "registrants",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nRegistrant status updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}.<br>\n\n**Error Code:** `3000` <br>\nCannot access meeting information.<br>\n\n**Error Code:** `3003` <br>\nYou're not the meeting host.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser does not exist: {userId}.<br>\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/registrants/{registrantId}",
    "method": "deleteRegistrant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Delete a meeting registrant",
    "parameters": [
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting occurrence ID.",
        "example": "approved"
      },
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting ID.",
        "example": 91498058927
      },
      {
        "name": "registrantId",
        "schema": "string",
        "required": true,
        "description": "The meeting registrant ID.",
        "example": "9tboDiHUQAeOnbmudzWa5g"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP status code:** `204`   \n \nOK"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `200` <br>\nOnly available for paid users: {0}.<br>\n\n**Error Code:** `300` <br>\nThe value that you entered for the Registrant ID field is invalid. Enter a valid value and try again.<br>\n\n**Error Code:** `404` <br>\nRegistration has not been enabled for this meeting: {0}.<br>\n\n**Error Code:** `1001` <br>\nUser {userId} does not exist or does not belong to this account.<br>\n\n**Error Code:** `3000` <br>\nCannot access webinar info.\n\n**Error Code:** `3001` <br>\nMeeting does not exist: {0}.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/registrants/{registrantId}",
    "method": "getRegistrantDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting registrant",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "registrantId",
        "schema": "string",
        "required": true,
        "description": "The registrant ID.",
        "example": "9tboDiHUQAeOnbmudzWa5g"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": " Registrant."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account: \"{accountId}\"<br> <br>\n**Error Code:** `3003` <br>\n You are not the meeting host.<br> <br>\n**Error Code:** `3000` <br>\n >\nCannot access meeting info. <br>\n**Error Code:** `3161` <br>\n Meeting hosting and scheduling capabilities are not allowed for your user account. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n Meeting host does not exist: \"{userId}\" <br>\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/sip_dialing",
    "method": "getSipUriWithPasscode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting SIP URI with Passcode",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "passcode",
        "schema": "string",
        "description": "",
        "example": "xxxx"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting's encoded SIP URI."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nInvalid meeting ID.\n\n**Error Code:** `3000` <br>\nThe meeting's SIP URI does not exist: {meetingId}.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `300` <br>\nMeeting ID does not exist.\n\n**Error Code:** `3001` <br>\nMeeting does not exist: {meetingId}\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/status",
    "method": "updateMeetingStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update meeting status",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "action",
        "schema": "string",
        "description": "",
        "example": "recover"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nMeeting updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}.\n\n**Error Code:** `3000` <br>\nCannot access meeting info.\n\n**Error Code:** `3003` <br>\nYou're not the meeting host.\n\n**Error Code:** `3063` <br>\nCan not end on-premise user's meeting: {meetingId}.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nMeeting host does not exist: {userId}.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/survey",
    "method": "deleteMeetingSurvey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Delete a meeting survey",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \n Meeting survey deleted."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nInvalid meeting ID.\n\n**Error Code:** `3000` <br>\n* Cannot access Webinar information. <br>\n * Meeting survey disabled. To enable this feature, enable the \"Meeting Survey\" setting in the Zoom web portal's \"Settings\" interface.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `300` <br>\nMeeting ID does not exist.\n\n**Error Code:** `3001` <br>\nMeeting does not exist: {meetingId}.\n\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/survey",
    "method": "getMeetingSurvey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get a meeting survey",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, store it as a long-format integer and **not** a simple integer. Meeting IDs can be more than 10 digits.",
        "example": 85746065
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting survey."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `300` <br>\n Invalid meeting ID. <br>\n**Error Code:** `3000` <br>\n Cannot access Webinar information. <br>\n**Error Code:** `3000` <br>\n Meeting survey disabled. To enable this feature, enable the \"Meeting Survey\" setting in the Zoom web portal's \"Settings\" interface. <br>\n**Error Code:** `3161` <br>\n Meeting hosting and scheduling capabilities are not allowed for your user account. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `300` <br>\n Meeting ID does not exist. <br>\n**Error Code:** `3001` <br>\n Meeting does not exist: {meetingId}. <br>\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/survey",
    "method": "updateSurvey",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update a meeting survey",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, store it as a long-format integer and **not** a simple integer. Meeting IDs can be over 10 digits.",
        "example": 85746065
      },
      {
        "name": "custom_survey",
        "schema": "object",
        "description": ""
      },
      {
        "name": "show_in_the_browser",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "third_party_survey",
        "schema": "string",
        "description": "",
        "example": "https://example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \n Meeting survey updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `300` <br>\n Invalid meeting ID. <br>\n**Error Code:** `300` <br>\n Invalid third party survey: {third_party_survey}. <br>\n**Error Code:** `3161` <br>\n Meeting hosting and scheduling capabilities are not allowed for your user account. <br>\n**Error Code:** `3000` <br>\n Cannot access Webinar information. <br>\n**Error Code:** `3000` <br>\n Meeting survey disabled. To enable this feature, enable the \"Meeting Survey\" setting in the Zoom web portal's \"Settings\" interface. <br>\n**Error Code:** `3000` <br>\n Not allowed host to use a 3rd-party survey link. To use this feature, enable the \"Allow host to use a 3rd-party survey link\" setting in the \"Account Settings\" page of the Zoom web portal. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `300` <br>\n Meeting ID does not exist. <br>\n**Error Code:** `3001` <br>\n Meeting does not exist: {meetingId}. <br>\n"
      }
    ]
  },
  {
    "url": "/meetings/{meetingId}/token",
    "method": "getMeetingToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get meeting's token",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The meeting's ID. \n\n When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The meeting token type: \n* `closed_caption_token` &mdash; The third-party closed caption API token. \n\nThis defaults to `closed_caption_token`.",
        "example": "closed_caption_token",
        "default": "closed_caption_token"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the meeting token."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nInvalid meeting ID.\n\n**Error Code:** `3000` <br>\n* Cannot access Webinar information. <br>\n* Meeting survey disabled. To enable this feature, enable the \"Meeting Survey\" setting in the Zoom web portal's \"Settings\" interface.\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `300` <br>\nMeeting ID does not exist.\n\n**Error Code:** `3001` <br>\nMeeting does not exist: {meetingId}\n\n"
      }
    ]
  },
  {
    "url": "/past_meetings/{meetingId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get past meeting details",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "undefined",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID before making an API request."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\n* User does not exist: {userId} \n* User \"{userId}\" does not exist or does not belong to this account.\n\n**Error Code:** `300` <br>\nCannot access meeting information.\n\n**Error Code:** `200` <br>\nOnly available for paid account: {accountId}\n\n**Error Code:** `12702` <br>\nCan not access a meeting a year ago.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `3001` <br>\n* This meeting is not available or the meeting ID is invalid. \n* The meeting ID is invalid or the meeting has not ended.\n\n"
      }
    ]
  },
  {
    "url": "/past_meetings/{meetingId}/instances",
    "method": "listPastMeetingInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List past meeting instances",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "integer",
        "required": true,
        "description": "The past meeting's ID.",
        "example": 93398114182
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of Meetings"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/past_meetings/{meetingId}/participants",
    "method": "getPastMeetingParticipants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get past meeting participants",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.",
        "example": "MEETINGID"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pagination object."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request  \n\n **Error Code:** `1010` <br>\n User {userId} not exist or not belong to this account.<br><br> <br>\n**Error Code:** `300` <br>\n Cannot access meeting information.<br><br> <br>\n**Error Code:** `200` <br>\n Only available for paid account: {accountId} <br>\n**Error Code:** `12702` <br>\n Can not access a meeting a year ago. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found  \n\n **Error Code:** `1001` <br>\n User {userId} not exist or not belong to this account.<br>\nUser not exist: {userId}<br><br> <br>\n**Error Code:** `3001` <br>\n This meeting is not available or ID is not valid.<br>\nMeeting ID is invalid or not end. <br>\n"
      }
    ]
  },
  {
    "url": "/past_meetings/{meetingId}/polls",
    "method": "listPastMeetingPolls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List past meeting's poll results",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.",
        "example": "MEETINGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `12702` <br>\n Can not access a meeting a year ago. <br>\n"
      }
    ]
  },
  {
    "url": "/past_meetings/{meetingId}/qa",
    "method": "listPastMeetingQa",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List past meetings' Q&A",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.",
        "example": "MEETINGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "**HTTP Status Code:** `401` <br>\n Unauthorized \n\n **Error Code:** `1010` <br>\n User does not belong to this account:{accountId}. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Meeting ID is invalid or not end.<br>\nThis Meeting id does not belong to you:{meetingId}. <br>\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/meeting_templates",
    "method": "listMeetingTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List meeting templates",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user ID retrievable from the [List users](https://developers.zoom.us) API.",
        "example": "30R7kT7bTIKSNUFEuH_Qlg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `3161` <br>\n Meeting hosting and scheduling capabilities are not allowed for your user account. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User not exist: {userId}.<br>\nUser {userId} does not exist or does not belong to this account. <br>\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/meeting_templates",
    "method": "createTemplateFromMeeting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Create a meeting template from an existing meeting",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user ID retrievable from the [List users](https://developers.zoom.us) API.",
        "example": "30R7kT7bTIKSNUFEuH_Qlg"
      },
      {
        "name": "meeting_id",
        "schema": "integer",
        "description": "",
        "example": 96172769962
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "My Meeting Template"
      },
      {
        "name": "save_recurrence",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "overwrite",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\n* Meeting ID does not exist. \n* Invalid meeting ID. \n* You can only create up to 40 meeting templates.\n\n**Error Code:** `3000` <br>\n* Cannot access webinar information. \n* Meeting template name already exists: {templateName}.\n\n**Error Code:** `3001` <br>\nMeeting does not exist: {meetingId}\n\n**Error Code:** `3161` <br>\nMeeting hosting and scheduling capabilities are not allowed for your user account.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\n* User not exist: {userId}. \n* User {userId} does not exist or does not belong to this account.\n\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/meetings",
    "method": "listHostScheduled",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "List meetings",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user's user ID or email address. For user-level apps, pass the `me` value.",
        "example": "USERID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of meeting. \n* `scheduled` - All valid previous (unexpired) meetings, live meetings, and upcoming scheduled meetings. \n* `live` - All the ongoing meetings. \n* `upcoming` - All upcoming meetings, including live meetings. \n* `upcoming_meetings` - All upcoming meetings, including live meetings. \n* `previous_meetings` - All the previous meetings.",
        "example": "scheduled",
        "default": "scheduled"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "The page number of the current page in the returned records.",
        "example": 1
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The start date.",
        "example": "2023-01-01"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The end data.",
        "example": "2023-01-16"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pagination Object."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `3161` <br>\n Meeting hosting and scheduling capabilities are not allowed for your user account. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {userId} not exist or not belong to this account.<br> <br>\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/meetings",
    "method": "createMeeting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Create a meeting",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user's user ID or email address. For user-level apps, pass the `me` value.",
        "example": "USERID"
      },
      {
        "name": "agenda",
        "schema": "string",
        "description": "",
        "example": "My Meeting"
      },
      {
        "name": "default_password",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": "",
        "example": 60
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "123456"
      },
      {
        "name": "pre_schedule",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "recurrence",
        "schema": "object",
        "description": ""
      },
      {
        "name": "schedule_for",
        "schema": "string",
        "description": "",
        "example": "jchill@example.com"
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "string",
        "description": "",
        "example": "2022-03-25T07:32:55Z"
      },
      {
        "name": "template_id",
        "schema": "string",
        "description": "",
        "example": "Dv4YdINdTk+Z5RToadh5ug=="
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "America/Los_Angeles"
      },
      {
        "name": "topic",
        "schema": "string",
        "description": "",
        "example": "My Meeting"
      },
      {
        "name": "tracking_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "description": "",
        "example": 2,
        "default": 2
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Meeting object."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `3000` <br>\n * Instant meetings do not support the schedule_for parameter; you cannot schedule an instant meeting for another user.<br>\n* Users in '{0}' have been blocked from joining meetings and webinars. To unblock them, go to the Settings page in the Zoom web portal and update 'Block users in specific domains from joining meetings and webinars'.<br> \n* You cannot schedule a meeting for {0}. <br>\n**Error Code:** `3161` <br>\n Meeting hosting and scheduling capabilities are not allowed for your user account. <br>\n**Error Code:** `300` <br>\n * The value that you entered for the schedule_for field is invalid. Enter a valid value and try again. <br> \n* Invalid enforce_login_domains, separate multiple domains by semicolon. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {userId} not exist or not belong to this account. <br>\n"
      },
      {
        "statusCode": "429",
        "description": "**HTTP Status Code:** `429` <br>\n Too Many Requests \n\n "
      }
    ]
  },
  {
    "url": "/users/{userId}/pac",
    "method": "listAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PAC",
    "typeScriptTag": "pac",
    "description": "List a user's PAC accounts",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user's user ID or email address. For user-level apps, pass the `me` value.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `2024` <br>\n User does not have PAC enabled. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User does not exist: $userId <br>\n"
      }
    ]
  },
  {
    "url": "/report/activities",
    "method": "listSignInSignOutActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get sign In / sign out activity report",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Start date for which you would like to view the activity logs report. Using the `from` and `to` parameters, specify a monthly date range for the report as the API only provides one month worth of data in one request. The specified date range should fall within the last six months.",
        "example": "2019-09-01"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "End date up to which you would like to view the activity logs report.",
        "example": "2019-09-20"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records to be returned within a single API call",
        "example": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Next page token is used to paginate through large result sets",
        "example": "b43YBRLJFg3V4vsSpxvGdKIGtNbxn9h9If2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Report object"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `200` <br>\nNo permission.<br>\n\n"
      }
    ]
  },
  {
    "url": "/report/billing",
    "method": "getBillingDepartmentReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get billing reports",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `200` <br>\nNo permission.\n\n"
      }
    ]
  },
  {
    "url": "/report/billing/invoices",
    "method": "getBillingInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get billing invoice reports",
    "parameters": [
      {
        "name": "billingId",
        "schema": "string",
        "required": true,
        "description": "Unique Identifier of the Billing Report. Retrieve this ID from the response of **Get Billing Reports** API request. \n\n",
        "example": "indfhgfhfho"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `5010` <br>\nReport does not exist.\n\n"
      }
    ]
  },
  {
    "url": "/report/cloud_recording",
    "method": "getCloudRecordingUsageReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get cloud recording usage report",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once.",
        "example": "2022-01-01"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End date.",
        "example": "2022-01-28"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": "The group ID. To get a group ID, use the [**List groups**](https://developers.zoom.us) API. \n\n **Note:** The API response will only contain users who are members of the queried group ID.",
        "example": "TaVA8QKik_1233"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `200` <br>\nNo permission.<br>\n’\n\n"
      }
    ]
  },
  {
    "url": "/report/daily",
    "method": "getDailyUsageReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get daily usage report",
    "parameters": [
      {
        "name": "year",
        "schema": "integer",
        "required": false,
        "description": "Year for this report",
        "example": 2022
      },
      {
        "name": "month",
        "schema": "integer",
        "required": false,
        "description": "Month for this report",
        "example": 3
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": "The group ID. To get a group ID, use the [**List groups**](https://developers.zoom.us) API. \n\n **Note:** The API response will only contain users who are members of the queried group ID.",
        "example": "TaVA8QKik_1233"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nDaily report can only be provided for a month that falls within the recent 6 months.\n\n**Error Code:** `200` <br>\nNo permission.<br>\n’\n\n"
      }
    ]
  },
  {
    "url": "/report/meetings/{meetingId}",
    "method": "getMeetingDetailReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get meeting detail reports",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "undefined",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID before making an API request."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `12702` <br>\nCan not access meeting a year ago.<br>\n\n**Error Code:** `200` <br>\nNo permission.<br>\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `3001` <br>\nMeeting {meetingId} not found or has expired.<br>\n\n"
      }
    ]
  },
  {
    "url": "/report/meetings/{meetingId}/participants",
    "method": "getMeetingParticipantReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get meeting participant reports",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "string",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.",
        "example": "MEETINGID"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      },
      {
        "name": "includeFields",
        "schema": "string",
        "required": false,
        "description": "Provide `registrant_id` as the value for this field if you would like to see the registrant ID attribute in the response of this API call. A registrant ID is a unique identifier of a [meeting registrant](https://developers.zoom.us).",
        "example": "registrant_id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pagination object."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account:{accountId}.<br> <br>\n**Error Code:** `12702` <br>\n Can not access meeting a year ago.<br> <br>\n**Error Code:** `200` <br>\n No permission.<br> <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Meeting  {MeetingId} not found or has expired.<br> <br>\n"
      }
    ]
  },
  {
    "url": "/report/meetings/{meetingId}/polls",
    "method": "getMeetingPollReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get meeting poll reports",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "undefined",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID before making an API request."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `12702` <br>\nCan not access meeting a year ago.\n\n**Error Code:** `200` <br>\nNo permission.<br>\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `3001` <br>\nMeeting \"{meetingId}\" not found or has expired.\n\n"
      }
    ]
  },
  {
    "url": "/report/meetings/{meetingId}/qa",
    "method": "getMeetingQaReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get meeting Q&A report",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "undefined",
        "required": true,
        "description": "The meeting's ID or universally unique ID (UUID). \n* If you provide a meeting ID, the API will return a response for the latest meeting instance. \n* If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the meeting UUID before making an API request."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `200` <br>\nNo permission.<br>\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser does not exist: {userId}.<br>\n\n**Error Code:** `3001` <br>\nMeeting {meetingId} not found or has expired.<br>\n\n"
      }
    ]
  },
  {
    "url": "/report/operationlogs",
    "method": "getOperationLogsReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get operation logs report",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once.",
        "example": "2022-01-01"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End date.",
        "example": "2022-01-28"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      },
      {
        "name": "categoryType",
        "schema": "string",
        "required": false,
        "description": "**Optional**  \n \nFilter your response by a category type to see reports for a specific category.\nThe value for this field can be one of the following:  \n  `all`  \n `user`  \n `user_settings`  \n `account`  \n `billing`  \n `im`  \n `recording`  \n `phone_contacts`  \n `webinar`  \n `sub_account`  \n `role`  \n `zoom_rooms`",
        "example": "user"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pagination object."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `200` <br>\nNo permission.<br>\n\n"
      }
    ]
  },
  {
    "url": "/report/telephone",
    "method": "getTelephoneReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get telephone reports",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Audio types:  \n `1` - Toll-free Call-in &amp; Call-out.  \n `2` - Toll   \n \n`3` - SIP Connected Audio",
        "example": "33",
        "default": "1"
      },
      {
        "name": "queryDateType",
        "schema": "string",
        "required": false,
        "description": "The type of date to query. \n* `start_time` &mdash; Query by call start time. \n* `end_time` &mdash; Query by call end time. \n* `meeting_start_time` &mdash; Query by meeting start time. \n* `meeting_end_time` &mdash; Query by meeting end time. \n\nThis value defaults to `start_time`.",
        "example": "start_time",
        "default": "start_time"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once.",
        "example": "2022-01-01"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End date.",
        "example": "2022-01-28"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "The page number of the current page in the returned records. This field is **not** available if the `query_date_type` parameter is the `meeting_start_time` or `meeting_end_time` value. \n\nThis field is deprecated. Use the `next_page_token` query parameter for pagination.",
        "example": 1,
        "default": 1
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.",
        "example": "b43YBRLJFg3V4vsSpxvGdKIGtNbxn9h9If2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/report/upcoming_events",
    "method": "listUpcomingEventsReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get upcoming events report",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once.",
        "example": "2022-01-01"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End date.",
        "example": "2022-01-28"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of event to query. \n* `meeting` &mdash; A meeting event. \n* `webinar` &mdash; A webinar event. \n* `all` &mdash; Both meeting and webinar events.\n\nThis value defaults to `all`.",
        "example": "meeting",
        "default": "all"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": "The group ID. To get a group ID, use the [**List groups**](https://developers.zoom.us) API. \n\n **Note:** The API response will only contain meetings where the host is a member of the queried group ID.",
        "example": "TaVA8QKik_1233"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `200` <br>\nThis is only available for the paid account: {accountId} <br>\n\n**Error Code:** `300` <br>\nThe next page token is invalid or expired.\n\n**Error Code:** `200` <br>\nNo permission.<br>\n\n"
      }
    ]
  },
  {
    "url": "/report/users",
    "method": "getActiveInactiveHostReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get active/inactive host reports",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Active or inactive hosts.  \n `active` - Active hosts.   \n `inactive` - Inactive hosts.",
        "example": "active"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start date in 'yyyy-mm-dd' format. The date range defined by the `from` and `to` parameters should only be one month as the report includes only one month worth of data at once.",
        "example": "2022-01-01"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End date.",
        "example": "2022-01-28"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "The page number of the current page in the returned records.",
        "example": 1,
        "default": 1
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.",
        "example": "b43YBRLJFg3V4vsSpxvGdKIGtNbxn9h9If2"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": "The group ID. To get a group ID, use the [**List groups**](https://developers.zoom.us) API. \n\n **Note:** The API response will only contain users who are members of the queried group ID.",
        "example": "TaVA8QKik_1233"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `200` <br>\n No permission.<br>\n’ <br>\n"
      }
    ]
  },
  {
    "url": "/report/users/{userId}/meetings",
    "method": "getMeetingReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get meeting reports",
    "parameters": [
      {
        "name": "userId",
        "schema": "undefined",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value."
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once.",
        "example": "2022-01-01"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End date.",
        "example": "2022-01-28"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The meeting type to query for: \n* `past` &mdash; All past meetings. \n* `pastOne` &mdash; A single past user meeting. \n* `pastJoined` &mdash; All past meetings the account's users hosted or joined.",
        "example": "past",
        "default": "past"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pagination Object."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `200` <br>\nThis is only available for paid account:{accountId}.<br>\n\n**Error Code:** `300` <br>\nThe next page token is invalid or expired.\n\n**Error Code:** `200` <br>\nNo permission.<br>\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser {userId} not exist or not belong to this account.\n\n"
      }
    ]
  },
  {
    "url": "/report/webinars/{webinarId}",
    "method": "getWebinarDetailsReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get webinar detail reports",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API will return a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the webinar UUID before making an API request.",
        "example": "ABCDE12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account:{accountId}.<br>\n\n**Error Code:** `12702` <br>\nCan not access a webinar a year ago.<br>\n\n**Error Code:** `200` <br>\nNo permission.<br>\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `3001` <br>\nMeeting  {meetingId} not found or has expired.<br>\n\n"
      }
    ]
  },
  {
    "url": "/report/webinars/{webinarId}/participants",
    "method": "webinarParticipantsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get webinar participant reports",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API will return a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request.",
        "example": "ABCDE12345"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      },
      {
        "name": "includeFields",
        "schema": "string",
        "required": false,
        "description": "The additional query parameters to include. \n* `registrant_id` - Include the registrant's ID in the API response. The registrant ID is the webinar participant's unique ID.",
        "example": "registrant_id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pagination object."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account: {accountId} <br>\n**Error Code:** `12702` <br>\n Can not access a webinar a year ago.<br> <br>\n**Error Code:** `200` <br>\n No permission.<br> <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Webinar \"{webinarId}\" not found or has expired <br>\n"
      }
    ]
  },
  {
    "url": "/report/webinars/{webinarId}/polls",
    "method": "getWebinarPollReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get webinar poll reports",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API will return a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request.",
        "example": "ABCDE12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account:{accountId}.<br>\n\n**Error Code:** `12702` <br>\nCan not access a webinar a year ago.<br>\n\n**Error Code:** `200` <br>\nNo permission.<br>\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `3001` <br>\nWebinar  {webinarId} not found or has expired.<br>\n\n"
      }
    ]
  },
  {
    "url": "/report/webinars/{webinarId}/qa",
    "method": "getWebinarQaReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get webinar Q&A report",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API will return a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the webinar UUID before making an API request.",
        "example": "ABCDE12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `200` <br>\nNo permission.<br>\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser does not exist: {userId}.<br>\n\n**Error Code:** `3001` <br>\nWebinar  {webinarId} not found or has expired.<br>\n\n"
      }
    ]
  },
  {
    "url": "/sip_phones",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SIP Phone",
    "typeScriptTag": "sipPhone",
    "description": "List SIP phones",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "**Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.",
        "example": 1,
        "default": 1
      },
      {
        "name": "searchKey",
        "schema": "string",
        "required": false,
        "description": "User name or email address of a user. If this parameter is provided, only the SIP phone system integration enabled for that specific user will be returned. Otherwise, all SIP phones on an account will be returned.",
        "example": "jchill@example.com"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.",
        "example": "Tva2CuIdTgsv8wAnhyAdU3m06Y2HuLQtlh3"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n"
      }
    ]
  },
  {
    "url": "/sip_phones",
    "method": "enableUserSipPhone",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SIP Phone",
    "typeScriptTag": "sipPhone",
    "description": "Enable SIP phone",
    "parameters": [
      {
        "name": "authorization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "testname"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "example.com"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123456"
      },
      {
        "name": "proxy_server",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "192.0.2.2"
      },
      {
        "name": "proxy_server2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "192.0.2.4"
      },
      {
        "name": "proxy_server3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "192.0.2.6"
      },
      {
        "name": "register_server",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "192.0.2.1"
      },
      {
        "name": "register_server2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "192.0.2.3"
      },
      {
        "name": "register_server3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "192.0.2.5"
      },
      {
        "name": "registration_expire_time",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 60,
        "default": 60
      },
      {
        "name": "transport_protocol",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "UDP"
      },
      {
        "name": "transport_protocol2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "UDP"
      },
      {
        "name": "transport_protocol3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "UDP"
      },
      {
        "name": "user_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "jchill@example.com"
      },
      {
        "name": "user_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jill Chill"
      },
      {
        "name": "voice_mail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "4000"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `200` <br>\nPermission missing: Enable SIP Phone Integration by contacting a Zoom Admin first.<br>\n\n**Error Code:** `300` <br>\nSIP Phone with the same email already exists.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser {userId} not exist or not belong to this account.\n\n"
      }
    ]
  },
  {
    "url": "/sip_phones/{phoneId}",
    "method": "deletePhone",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SIP Phone",
    "typeScriptTag": "sipPhone",
    "description": "Delete SIP phone",
    "parameters": [
      {
        "name": "phoneId",
        "schema": "string",
        "required": true,
        "description": "The SIP phone ID. It can be retrieved from the List SIP Phones API.",
        "example": "123456"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "**Error Code:** `200`  \n Permission missing: Enable SIP Phone Integration by contacting a Zoom Admin first."
      },
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nSIP Phone deleted."
      }
    ]
  },
  {
    "url": "/sip_phones/{phoneId}",
    "method": "updateSpecificPhone",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "SIP Phone",
    "typeScriptTag": "sipPhone",
    "description": "Update SIP phone",
    "parameters": [
      {
        "name": "phoneId",
        "schema": "string",
        "required": true,
        "description": "The SIP phone ID. This can be retrieved from the List SIP Phones API.",
        "example": "123456"
      },
      {
        "name": "authorization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "testname"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "example.com"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123456"
      },
      {
        "name": "proxy_server",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "192.0.2.2"
      },
      {
        "name": "proxy_server2",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "192.0.2.4"
      },
      {
        "name": "proxy_server3",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "192.0.2.6"
      },
      {
        "name": "register_server",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "192.0.2.1"
      },
      {
        "name": "register_server2",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "192.0.2.3"
      },
      {
        "name": "register_server3",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "192.0.2.5"
      },
      {
        "name": "registration_expire_time",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 60,
        "default": 60
      },
      {
        "name": "transport_protocol",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "UDP"
      },
      {
        "name": "transport_protocol2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "UDP"
      },
      {
        "name": "transport_protocol3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "UDP"
      },
      {
        "name": "user_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jill Chill"
      },
      {
        "name": "voice_mail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "4000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "**Error Code:** `200`  \n \nPermission missing: Enable SIP Phone Integration by contacting a Zoom Admin first.\n"
      },
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nSIP Phone information updated successfully.\n"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n"
      }
    ]
  },
  {
    "url": "/tsp",
    "method": "getAccountInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Get account's TSP information",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tsp",
    "method": "updateAccountTspInformation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Update account's TSP information",
    "parameters": [
      {
        "name": "dial_in_number_unrestricted",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "enable",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "master_account_setting_extended",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "modify_credential_forbidden",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "tsp_bridge",
        "schema": "string",
        "description": "",
        "example": "US_TSP_TB"
      },
      {
        "name": "tsp_enabled",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "tsp_provider",
        "schema": "string",
        "description": "",
        "example": "someprovidername"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204` **No Content**  \n \nTSP Account updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nInvalid parameter: tsp_bridge.\n\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/tsp",
    "method": "listUserTspAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "List user's TSP accounts",
    "parameters": [
      {
        "name": "userId",
        "schema": "undefined",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `2024` <br>\nAccount has not enabled TSP.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser does not exist: $userId.<br>\n\n**Error Code:** `1120` <br>\nA valid invitation to join the Zoom account was not found for this user.<br>\nThis error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.\n\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/tsp",
    "method": "addUserTspAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Add a user's TSP account",
    "parameters": [
      {
        "name": "userId",
        "schema": "undefined",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value."
      },
      {
        "name": "conference_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0125"
      },
      {
        "name": "dial_in_numbers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "leader_pin",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "US_TSP_TB"
      },
      {
        "name": "tsp_bridge",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "US_TSP_TB"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "List of TSP accounts."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `2024` <br>\nAccount has not enabled TSP.<br>\n\n**Error Code:** `300` <br>\nMedia link is required for AT&T TSP accounts.<br>\n\n**Error Code:** `300` <br>\nYou can add a max of two tsp configs.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser does not exist: $userId.<br>\n\n**Error Code:** `1120` <br>\nA valid invitation to join the Zoom account was not found for this user.<br>\nThis error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.\n\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/tsp/settings",
    "method": "setGlobalDialInUrl",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Set global dial-in URL for a TSP user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The userId or email address of the user.",
        "example": "6dfgdfgdg444447b0egga"
      },
      {
        "name": "audio_url",
        "schema": "string",
        "description": "",
        "example": "https://example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**Status Code:** `204` **No Content**   \n \nURL set successfully."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `2000` <br>\nNot TSP special account.<br>\n\nThs error means that the account does not have special TSP privilege. Contact Zoom Developer Support for details.<br>\n\n**Error Code:** `2024` <br>\nAccount not enable TSP\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser {userId} not exist or not belong to this account.\n\n**Error Code:** `1120` <br>\nInvite not exist.\n\nThis error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.\n\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/tsp/{tspId}",
    "method": "deleteUserTspAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Delete a user's TSP account",
    "parameters": [
      {
        "name": "userId",
        "schema": "undefined",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value."
      },
      {
        "name": "tspId",
        "schema": "string",
        "required": true,
        "description": "TSP account ID.",
        "example": "1"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**Status Code:** `204` **No Content**  \n \nTSP account deleted."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `2024` <br>\nAccount not enable TSP.<br>\n\n**Error Code:** `300` <br>\nThe TSP id provided does not exist.<br>\n\n**Error Code:** `300` <br>\nTSP Config does not exist.<br>\n\n**Error Code:** `300` <br>\nAt least one tsp config must be available.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser does not exist: $userId.<br>\n\n**Error Code:** `1120` <br>\nA valid invitation to join the Zoom account was not found for this user.<br>\nThis error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.\n\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/tsp/{tspId}",
    "method": "getUserTspAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Get a user's TSP account",
    "parameters": [
      {
        "name": "userId",
        "schema": "undefined",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value."
      },
      {
        "name": "tspId",
        "schema": "string",
        "required": true,
        "description": "TSP account ID.",
        "example": "1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TSP account of the user."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nThe TSP id provided does not exist.<br>\n\n**Error Code:** `300` <br>\nTSP Config does not exist.<br>\n\n**Error Code:** `2024` <br>\nAccount has not enabled TSP.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser does not exist: $userId.<br>\n\n**Error Code:** `1120` <br>\nA valid invitation to join the Zoom account was not found for this user.<br>\nThis error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.\n\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/tsp/{tspId}",
    "method": "updateUserTspAccount",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Update a TSP account",
    "parameters": [
      {
        "name": "userId",
        "schema": "undefined",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value."
      },
      {
        "name": "tspId",
        "schema": "string",
        "required": true,
        "description": "TSP account ID.",
        "example": "1"
      },
      {
        "name": "conference_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0125"
      },
      {
        "name": "dial_in_numbers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "leader_pin",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "11189898"
      },
      {
        "name": "tsp_bridge",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "US_TSP_TB"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:**`204` **No Content**  \n \nTSP account updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `2024` <br>\nAccount has not enabled TSP.<br>\n\n**Error Code:** `300` <br>\nThe TSP id provided does not exist.<br>\n\n**Error Code:** `300` <br>\nTSP Config does not exist.<br>\n\n**Error Code:** `300` <br>\nAt least one tsp config must be available.<br>\n\n**Error Code:** `300` <br>\nMedia link is required for AT&T TSP accounts.\n\n**Error Code:** `300` <br>\nInvalid parameter: tsp_bridge.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser does not exist: $userId.<br>\n\n**Error Code:** `1120` <br>\nA valid invitation to join the Zoom account was not found for this user.<br>\nThis error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.\n\n"
      }
    ]
  },
  {
    "url": "/tracking_fields",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracking Field",
    "typeScriptTag": "trackingField",
    "description": "List tracking fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tracking Field List"
      }
    ]
  },
  {
    "url": "/tracking_fields",
    "method": "createField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tracking Field",
    "typeScriptTag": "trackingField",
    "description": "Create a tracking field",
    "parameters": [
      {
        "name": "field",
        "schema": "string",
        "description": "",
        "example": "field1"
      },
      {
        "name": "recommended_values",
        "schema": "array",
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "visible",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Tracking Field"
      }
    ]
  },
  {
    "url": "/tracking_fields/{fieldId}",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tracking Field",
    "typeScriptTag": "trackingField",
    "description": "Delete a tracking field",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The Tracking Field ID",
        "example": "a32CJji-weJ92"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nTracking Field deleted"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/tracking_fields/{fieldId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracking Field",
    "typeScriptTag": "trackingField",
    "description": "Get a tracking field",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The Tracking Field ID",
        "example": "a32CJji-weJ92"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tracking Field"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/tracking_fields/{fieldId}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tracking Field",
    "typeScriptTag": "trackingField",
    "description": "Update a tracking field",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "The Tracking Field ID",
        "example": "a32CJji-weJ92"
      },
      {
        "name": "field",
        "schema": "string",
        "description": "",
        "example": "field1"
      },
      {
        "name": "recommended_values",
        "schema": "array",
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "visible",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nTracking Field updated"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/live_webinars/{webinarId}/chat/messages/{messageId}",
    "method": "deleteMessageById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a live webinar message",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "The live webinar chat message's unique identifier (UUID), in base64-encoded format.",
        "example": "MS17MDQ5NjE4QjYtRjk4Ny00REEwLUFBQUItMTg3QTY0RjU2MzhFfQ=="
      },
      {
        "name": "fileIds",
        "schema": "string",
        "required": false,
        "description": "The live webinar chat file's universally unique identifier (UUID), in base64-encoded format. Separate multiple values with commas.",
        "example": "MS17RDk0QTY3QUQtQkFGQy04QTJFLTI2RUEtNkYxQjRBRTU1MTk5fQ==,MS17NDQ0OEU5MjMtM0JFOS1CMDA1LTQ0NDAtQjdGOTU0Rjk5MTkyfQ=="
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \nWebinar chat message deleted."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `200` <br>\n * Only available for paid accounts. * DLP is not enabled. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Webinar  {webinarId} does not exist. <br>\n"
      }
    ]
  },
  {
    "url": "/past_webinars/{webinarId}/absentees",
    "method": "listAbsentees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get webinar absentees",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API will return a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) the webinar UUID before making an API request.",
        "example": "ABCDE12345"
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID.",
        "example": "1648194360000"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of users."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `300` <br>\n The request could not be completed because you have provided an invalid occurrence ID: {occurrenceId}<br> <br>\n**Error Code:** `1010` <br>\n User does not belong to this account:{accountId}.<br> <br>\n**Error Code:** `3000` <br>\n This Webinar has not registration required: {webinarUUID} <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {userId} does not exist or does not belong to this account.<br> <br>\n**Error Code:** `3001` <br>\n Meeting ID is invalid or not end. <br>\n"
      }
    ]
  },
  {
    "url": "/past_webinars/{webinarId}/instances",
    "method": "listPastInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List past webinar instances",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of webinars."
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n "
      }
    ]
  },
  {
    "url": "/past_webinars/{webinarId}/participants",
    "method": "listParticipants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List webinar participants",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API returns a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) the webinar UUID before making an API request.",
        "example": "ABCDE12345"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `200` <br>\n No permission.<br>\nOnly available for paid account: {accountId}.<br><br> <br>\n**Error Code:** `300` <br>\n The next page token is invalid or expired. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Webinar does not exist. <br>\n"
      }
    ]
  },
  {
    "url": "/past_webinars/{webinarId}/polls",
    "method": "listPollResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List past webinar poll results",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API returns a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) the webinar UUID before making an API request.",
        "example": "ABCDE12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "**HTTP Status Code:** `401` <br>\n Unauthorized \n\n **Error Code:** `1010` <br>\n User does not belong to this account:{accountId}. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Webinar ID is invalid or not end.<br>\nThis webinar id does not belong to you:{webinarId}. <br>\n"
      }
    ]
  },
  {
    "url": "/past_webinars/{webinarId}/qa",
    "method": "listPastWebinarQa",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List Q&As of a past webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID). \n* If you provide a webinar ID, the API returns a response for the latest webinar instance. \n* If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** [double encode](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) the webinar UUID before making an API request.",
        "example": "ABCDE12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "**HTTP Status Code:** `401` <br>\n Unauthorized \n\n **Error Code:** `1010` <br>\n User does not belong to this account:{accountId}. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Webinar ID is invalid or not end.<br>\nThis webinar id does not belong to you:{webinarId}. <br>\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/webinar_templates",
    "method": "listWebinarTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List webinar templates",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user's ID. To get a user's ID, use the [**List users**](https://developers.zoom.us) API. For user-level apps, pass the `me` value instead of the user ID value.",
        "example": "abcD3ojfdbjfg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `200` <br>\n Cannot use webinar API, you need to subscribe webinar plan and then enable webinar for this user:{userId}.<br> <br>\n**Error Code:** `1001` <br>\n * User not exist: {userId}.\n* User {userId} does not exist or does not belong to this account. <br>\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/webinar_templates",
    "method": "createWebinarTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Create a webinar template",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user ID retrievable from the [List users](https://developers.zoom.us) API.",
        "example": "30R7kT7bTIKSNUFEuH_Qlg"
      },
      {
        "name": "webinar_id",
        "schema": "integer",
        "description": "",
        "example": 96172769962
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Weekly Meeting Template"
      },
      {
        "name": "save_recurrence",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "overwrite",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `200` <br>\nWebinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}.\n\n**Error Code:** `300` <br>\nYou can only create up to 40 webinar templates.\n\n**Error Code:** `3000` <br>\n* Cannot access meeting info. \n* Webinar template name already exists: {templateName}.\n\n**Error Code:** `3001` <br>\nWebinar does not exist: {webinarId}.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\n* User does not exist. \n* User {userId} does not exist or does not belong to this account.\n\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/webinars",
    "method": "listWebinars",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List webinars",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user's user ID or email address. For user-level apps, pass the `me` value.",
        "example": "USERID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of webinar. \n* `scheduled` - All valid previous (unexpired) webinars, live webinars, and upcoming scheduled webinars. \n* `upcoming` - All upcoming webinars, including live webinars.",
        "example": "scheduled",
        "default": "scheduled"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "**Deprecated** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.",
        "example": 1,
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of webinars."
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {userId} not exist or not belong to this account. <br>\n"
      }
    ]
  },
  {
    "url": "/users/{userId}/webinars",
    "method": "createWebinar",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Create a webinar",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user ID or email address of the user. For user-level apps, pass the `me` value.",
        "example": "USERID"
      },
      {
        "name": "agenda",
        "schema": "string",
        "description": "",
        "example": "My Webinar"
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": "",
        "example": 60
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "123456"
      },
      {
        "name": "recurrence",
        "schema": "object",
        "description": ""
      },
      {
        "name": "schedule_for",
        "schema": "string",
        "description": "",
        "example": "jchill@example.com"
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "string",
        "description": "",
        "example": "2022-03-26T06:44:14Z"
      },
      {
        "name": "template_id",
        "schema": "string",
        "description": "",
        "example": "5Cj3ceXoStO6TGOVvIOVPA=="
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "America/Los_Angeles"
      },
      {
        "name": "topic",
        "schema": "string",
        "description": "",
        "example": "My Webinar"
      },
      {
        "name": "tracking_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "description": "",
        "example": 5,
        "default": 5
      },
      {
        "name": "is_simulive",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "record_file_id",
        "schema": "string",
        "description": "",
        "example": "f09340e1-cdc3-4eae-9a74-98f9777ed908"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Webinar object."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request  \n\n **Error Code:** `200` <br>\n Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}. <br>\n**Error Code:** `300` <br>\n The value that you entered for the schedule_for field is invalid. Enter a valid value and try again. <br>\n**Error Code:** `300` <br>\n Can not schedule simulive webinar for others. <br>\n**Error Code:** `300` <br>\n Account hasn't enabled Simulive Webinar. <br>\n**Error Code:** `300` <br>\n Record file does not exist. <br>\n**Error Code:** `3000` <br>\n You cannot schedule a meeting for {userId}. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found  \n\n **Error Code:** `1001` <br>\n User does not exist: {userId}. <br>\n"
      },
      {
        "statusCode": "429",
        "description": "**HTTP Status Code:** `429` <br>\n Too Many Requests  \n\n **Error Code:** `429` <br>\n A maximum of ({rateLimitNumber}) webinars can be created and updated for a single user in one day. <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}",
    "method": "removeWebinar",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID.",
        "example": "1648194360000"
      },
      {
        "name": "cancelWebinarReminder",
        "schema": "boolean",
        "required": false,
        "description": "`true` - Notify panelists and registrants about the webinar cancellation via email. \n\n`false` - Do not send any email notification to webinar registrants and panelists. \n\nThe default value of this field is `false`.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204` <br>\n Webinar deleted."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account:{accountId}.<br> <br>\n**Error Code:** `3002` <br>\n Sorry, you cannot delete this webinar since it is in progress.<br> <br>\n**Error Code:** `3003` <br>\n You are not the webinar host.<br> <br>\n**Error Code:** `3007` <br>\n Sorry, you cannot delete this webinar since it has ended.<br> <br>\n**Error Code:** `3018` <br>\n Not allowed to delete PMI.<br> <br>\n**Error Code:** `3037` <br>\n Not allowed to delete PAC.<br> <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {userId} does not exist or does not belong to this account.<br> <br>\n**Error Code:** `3001` <br>\n Webinar {webinarId} not found or has expired.<br> <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's ID or universally unique ID (UUID).",
        "example": "95204914252"
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "Unique identifier for an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences. When you create a recurring Webinar using [**Create a webinar**](https://developers.zoom.us) API, you can retrieve the Occurrence ID from the response of the API call.",
        "example": "1648538280000"
      },
      {
        "name": "showPreviousOccurrences",
        "schema": "boolean",
        "required": false,
        "description": "Set the value of this field to `true` if you would like to view Webinar details of all previous occurrences of a recurring Webinar.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webinar object."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request  \n\n **Error Code:** `300` <br>\n Invalid webinar ID. <br>\n**Error Code:** `200` <br>\n Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user to perform this action. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found  \n\n **Error Code:** `3001` <br>\n Webinar does not exist: {webinarId}. <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}",
    "method": "updateScheduledWebinar",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update a webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "Webinar occurrence ID. Support change of agenda, start time, duration, and settings `host_video`, `panelist_video`, `hd_video, watermark`, `auto_recording`.",
        "example": "1648538280000"
      },
      {
        "name": "agenda",
        "schema": "string",
        "description": "",
        "example": "My Webinar"
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": "",
        "example": 60
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "123456"
      },
      {
        "name": "schedule_for",
        "schema": "string",
        "description": "",
        "example": "jchill@example.com"
      },
      {
        "name": "recurrence",
        "schema": "object",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "string",
        "description": "",
        "example": "2022-03-26T07:18:32Z"
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "America/Los_Angeles"
      },
      {
        "name": "topic",
        "schema": "string",
        "description": "",
        "example": "My webinar"
      },
      {
        "name": "tracking_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "description": "",
        "example": 5,
        "default": 5
      },
      {
        "name": "is_simulive",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "record_file_id",
        "schema": "string",
        "description": "",
        "example": "f09340e1-cdc3-4eae-9a74-98f9777ed908"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nWebinar updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account: {accountId} <br>\n**Error Code:** `3003` <br>\n * You are not the meeting host. \n* Users in \"{0}\" have been blocked from joining meetings and webinars. To unblock them, go to the \"Settings\" page in the Zoom web portal and update the \"Block users in specific domains from joining meetings and webinars\" setting. <br>\n**Error Code:** `3000` <br>\n You cannot update or delete simulive webinars that have started using this method. <br>\n**Error Code:** `300` <br>\n The value that you entered for the schedule_for field is invalid. Enter a valid value and try again. <br>\n**Error Code:** `200` <br>\n Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {userId} does not exist or does not belong to this account.<br> <br>\n**Error Code:** `3001` <br>\n Webinar {webinarId} not found or has expired.<br> <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/batch_registrants",
    "method": "createBatchRegistrants",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Perform batch registration",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's unique identifier.",
        "example": "97871060099"
      },
      {
        "name": "auto_approve",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "registrants",
        "schema": "array",
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
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `200` <br>\n Webinar plan is missing. You must subscribe to the Webinar plan and enable webinars for the \"{0}\" user to perform this action. <br>\n**Error Code:** `300` <br>\n This API can only be used for scheduled webinars (type 5). Batch registration is not supported for other webinar types. <br>\n**Error Code:** `3038` <br>\n The webinar is over. You cannot register now. If you have any questions, contact the Webinar host. <br>\n**Error Code:** `3000` <br>\n Registration not enabled for this webinar: {0} <br>\n**Error Code:** `3000` <br>\n You have reached the limit for the number of attendees you can add. Contact Zoom Support for more information. <br>\n**Error Code:** `3000` <br>\n The Zoom REST API does not support paid registration. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Webinar does not exist: {0}.<br><br> <br>\n**Error Code:** `3043` <br>\n Webinar has reached maximum attendee capacity.<br><br> <br>\n**Error Code:** `404` <br>\n Registration has not been enabled for this meeting: {meetingId}. <br>\n"
      },
      {
        "statusCode": "429",
        "description": "**HTTP Status Code:** `429` <br>\n Too Many Requests \n\n "
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/branding",
    "method": "getSessionBranding",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get webinar's session branding",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the webinar's sessions branding."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}\n\n**Error Code:** `3000` <br>\nYou cannot enable session branding for this webinar.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser \"{userId}\" does not exist or does not belong to this account.\n\n**Error Code:** `3001` <br>\nWebinar \"{webinarId}\" not found or has expired.\n\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/branding/name_tags",
    "method": "deleteBrandingNameTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar's branding name tag",
    "parameters": [
      {
        "name": "nameTagIds",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of the name tag IDs to delete.",
        "example": "zazQjwDuQkS3Q2EprNd7jQ,AsfE0cx2TFSfqqKbE0BUZg"
      },
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \n* No content. \n* Name tag(s) deleted."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nInvalid parameter: name_tag_ids\n\n**Error Code:** `3000` <br>\nThis webinar does not have session branding enabled.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/branding/name_tags",
    "method": "createBrandingNameTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Create a webinar's branding name tag",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "name"
      },
      {
        "name": "text_color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0e72ed"
      },
      {
        "name": "accent_color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0e72ed"
      },
      {
        "name": "background_color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0e72ed"
      },
      {
        "name": "is_default",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "set_default_for_all_panelists",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `3000` <br>\nThis webinar does not have session branding enabled.<br>\nYou have reached the limit for the number of name tags you can add for this webinar. The limit is 20.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/branding/name_tags/{nameTagId}",
    "method": "updateBrandingNameTag",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update a webinar's branding name tag",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "nameTagId",
        "schema": "string",
        "required": true,
        "description": "The name tag's ID.",
        "example": "J0sFXN2PSOCGrqTqLRwgAQ"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "name"
      },
      {
        "name": "text_color",
        "schema": "string",
        "description": "",
        "example": "0e72ed"
      },
      {
        "name": "accent_color",
        "schema": "string",
        "description": "",
        "example": "0e72ed"
      },
      {
        "name": "background_color",
        "schema": "string",
        "description": "",
        "example": "0e72ed"
      },
      {
        "name": "is_default",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "set_default_for_all_panelists",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \n* No content. \n* Name tag updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `3000` <br>\nThis webinar does not have session branding enabled.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/branding/virtual_backgrounds",
    "method": "deleteBrandingVirtualBackground",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar's branding Virtual Backgrounds",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of the Virtual Background file IDs to delete.",
        "example": "zazQjwDuQkS3Q2EprNd7jQ,AsfE0cx2TFSfqqKbE0BUZg"
      },
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \n* No content. \n* Virtual Background file(s) deleted."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}\n\n**Error Code:** `300` <br>\nInvalid parameter: ids\n\n**Error Code:** `3000` <br>\nThis webinar does not have session branding enabled.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser \"{userId}\" does not exist or does not belong to this account.\n\n**Error Code:** `3001` <br>\nWebinar \"{webinarId}\" not found or has expired.\n\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/branding/virtual_backgrounds",
    "method": "setDefaultBrandingVirtualBackground",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Set webinar's default branding Virtual Background",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "The Virtual Background file ID to update.",
        "example": "zazQjwDuQkS3Q2EprNd7jQ"
      },
      {
        "name": "setDefaultForAllPanelists",
        "schema": "boolean",
        "required": false,
        "description": "Whether to set the Virtual Background file as the new default for all panelists. This includes panelists not currently assigned a default Virtual Background.",
        "example": true
      },
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \n* No content. \n* Virtual Background updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}\n\n**Error Code:** `300` <br>\nInvalid parameter: {id}\n\n**Error Code:** `3000` <br>\nThis webinar does not have session branding enabled.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser \"{userId}\" does not exist or does not belong to this account.\n\n**Error Code:** `3001` <br>\nWebinar \"{webinarId}\" not found or has expired.\n\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/branding/virtual_backgrounds",
    "method": "uploadBrandingVirtualBackground",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Upload a webinar's branding Virtual Background",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WVVoU01HTklUVFpNZVRsc1pVZEdkR05IZUd4TWJVNTJZbEU5UFE9PQ=="
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "set_default_for_all_panelists",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `3000` <br>\nThis webinar does not have session branding enabled.\n\n**Error Code:** `120` <br>\n* No file uploaded. Verify that a file has been uploaded. \n* File size cannot exceed 15M. \n* A maximum of 10 files are allowed for a webinar. \n* Only JPG/JPEG, GIF, or PNG image files can be uploaded.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser \"{userId}\" does not exist or does not belong to this account.\n\n**Error Code:** `3001` <br>\nWebinar \"{webinarId}\" not found or has expired.\n\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/branding/wallpaper",
    "method": "deleteBrandingWallpaper",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar's branding wallpaper",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \n* No content. \n* Webinar wallpaper deleted."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `1010` <br>\nUser does not belong to this account: {accountId}\n\n**Error Code:** `300` <br>\nInvalid parameter: {id}\n\n**Error Code:** `3000` <br>\nThis webinar does not have session branding enabled.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser \"{userId}\" does not exist or does not belong to this account.\n\n**Error Code:** `3001` <br>\nWebinar \"{webinarId}\" not found or has expired.\n\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/branding/wallpaper",
    "method": "uploadBrandingWallpaper",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Upload a webinar's branding wallpaper",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `3000` <br>\nThis webinar does not have session branding enabled.\n\n**Error Code:** `120` <br>\n* No file uploaded. Verify that a file has been uploaded. \n* File size cannot exceed 15M. \n* A maximum of 10 files are allowed for a webinar. \n* Only JPG/JPEG, GIF, or PNG image files can be uploaded.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `1001` <br>\nUser \"{userId}\" does not exist or does not belong to this account.\n\n**Error Code:** `3001` <br>\nWebinar \"{webinarId}\" not found or has expired.\n\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/invite_links",
    "method": "createInviteLinks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Create webinar's invite links",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "attendees",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ttl",
        "schema": "integer",
        "description": "",
        "example": 1000,
        "default": 7200
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Invite links response."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `300` <br>\n * Webinar Id does not exist.<br>\n* Invalid Webinar Id.<br> <br>\n**Error Code:** `3001` <br>\n Webinar does not exist: {webinarId}.<br> <br>\n**Error Code:** `1001` <br>\n User does not exist: {userId}.<br> <br>\n**Error Code:** `200` <br>\n Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}. <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/jointoken/live_streaming",
    "method": "joinTokenLiveStreaming",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar's join token for live streaming",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the webinar's join token."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nInvalid webinar ID.\n\n**Error Code:** `124` <br>\nThis API only supports OAuth2 authorization.\n\n**Error Code:** `3000` <br>\nNot allowed to start live streaming. To use this feature, enable the \"Allow livestreaming of webinars\" setting in the \"Settings\" page of the Zoom web portal.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `300` <br>\nWebinar ID does not exist.\n\n**Error Code:** `3001` <br>\nWebinar does not exist: {webinarId}\n\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/jointoken/local_archiving",
    "method": "getMeetingArchiveTokenForLocalArchiving",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar's archive token for local archiving",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the webinar's local archive token."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nInvalid webinar ID.\n\n**Error Code:** `124` <br>\nThis API only supports OAuth2 authorization.\n\n**Error Code:** `3000` <br>\nNot allowed to start local archiving. To use this feature, enable the \"Archive meetings and webinars\" setting in the \"Settings\" page of the Zoom web portal.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `300` <br>\nWebinar ID does not exist.\n\n**Error Code:** `3001` <br>\nWebinar does not exist: {webinarId}\n\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/jointoken/local_recording",
    "method": "getJoinTokenLocalRecording",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar's join token for local recording",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the webinar's local recorder join token."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nInvalid webinar ID.\n\n**Error Code:** `124` <br>\nThis API only supports OAuth2 authorization.\n\n**Error Code:** `3000` <br>\nNot allowed to start local recording. To use this feature, enable the \"Local Recording\" setting in the \"Settings\" page of the Zoom web portal.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `300` <br>\nWebinar ID does not exist.\n\n**Error Code:** `3001` <br>\nWebinar does not exist: {webinarId}\n\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/livestream",
    "method": "getLiveStreamDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get live stream details",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The webinar's unique ID.",
        "example": "95204914252"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `300` <br>\n * Webinar ID does not exist.<br>* Invalid Webinar ID.<br> <br>\n**Error Code:** `3001` <br>\n Webinar {webinarId} does not exist.<br> <br>\n**Error Code:** `1001` <br>\n User {userId} does not exist.<br> <br>\n**Error Code:** `200` <br>\n * Webinar plan is missing. Subscribe to the webinar plan and enable webinars for user  {userId} in order to perform this action.<br>* The current user has not enabled the custom live streaming feature of the webinar. <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/livestream",
    "method": "updateLiveStream",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update a live stream",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "page_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com/livestream/123"
      },
      {
        "name": "stream_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "contact-it@example.com"
      },
      {
        "name": "stream_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com/livestream"
      },
      {
        "name": "resolution",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "720p"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nMeeting live stream updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `300` <br>\n * Webinar Id does not exist.<br>\n* Invalid Webinar Id.<br> <br>\n**Error Code:** `3001` <br>\n Webinar does not exist: {webinarId}.<br> <br>\n**Error Code:** `1001` <br>\n User does not exist: {userId}.<br> <br>\n**Error Code:** `200` <br>\n * Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}.<br>\n* The current user has not enabled the custom live streaming feature of the webinar. <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/livestream/status",
    "method": "updateLiveStreamStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update live stream status",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "action",
        "schema": "string",
        "description": "",
        "example": "start"
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \nMeeting live stream updated.\n\n"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `300` <br>\n * Webinar Id does not exist.<br>\n* Invalid Webinar Id.<br> <br>\n**Error Code:** `3001` <br>\n Webinar does not exist: {webinarId}.<br> <br>\n**Error Code:** `1001` <br>\n User does not exist: {userId}.<br> <br>\n**Error Code:** `200` <br>\n * Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}.<br>\n* The current user has not enabled the custom live streaming feature of the webinar.<br>\n* Webinar {0} has not started. <br> <br>\n**Error Code:** `3000` <br>\n The current webinar is not configured with a custom streaming service. <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/panelists",
    "method": "removePanelists",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Remove webinar panelists",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nPanelists removed."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account:{accountId}.<br> <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {userId} does not exist or does not belong to this account.<br> <br>\n**Error Code:** `3001` <br>\n Webinar {webinarId} not found or has expired.<br> <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/panelists",
    "method": "listPanelists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List panelists",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webinar panelist."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account:{accountId}.<br> <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {userId} does not exist or does not belong to this account.<br> <br>\n**Error Code:** `3001` <br>\n Webinar {webinarId} not found or has expired.<br> <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/panelists",
    "method": "addPanelists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Add panelists",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "panelists",
        "schema": "array",
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
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account:{accountId}.<br> <br>\n**Error Code:** `3000` <br>\n You have reached the limit for the number of panelists you can add. Contact Zoom Support for more information.<br> <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {userId} does not exist or does not belong to this account.<br> <br>\n**Error Code:** `3001` <br>\n Webinar {webinarId} not found or has expired.<br> <br>\n"
      },
      {
        "statusCode": "429",
        "description": "**HTTP Status Code:** `429` <br>\n Too Many Requests \n\n "
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/panelists/{panelistId}",
    "method": "removePanelist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Remove a panelist",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "panelistId",
        "schema": "string",
        "required": true,
        "description": "The panelist's ID or email.",
        "example": "Tg2b6GhcQKKbV7nSCbDKug"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nPanelist removed."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User  {accountId} does not belong to this account. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {email} does not exist or does not belong to this account. <br>\n**Error Code:** `3001` <br>\n Webinar {webinarId} not found or has expired. <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/polls",
    "method": "listPolls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List a webinar's polls ",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "anonymous",
        "schema": "boolean",
        "required": false,
        "description": "Whether to query for polls with the **Anonymous** option enabled: \n* `true` &mdash; Query for polls with the **Anonymous** option enabled. \n* `false` &mdash; Do not query for polls with the **Anonymous** option enabled.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Poll List"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `4400` <br>\n Webinar polls disabled. To enable this feature, enable the \"Webinar Polls/Quizzes\" setting in the Zoom web portal's \"Settings\" interface. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n "
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/polls",
    "method": "createPoll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Create a webinar's poll",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Learn something new"
      },
      {
        "name": "anonymous",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "poll_type",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Information about meeting and webinar polling."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `4400` <br>\n * Webinar polls disabled. To enable this feature, enable the \"Webinar Polls/Quizzes\" setting in the Zoom web portal's \"Settings\" interface. \n* Advanced webinar polls disabled. To enable this feature, enable the \"Allow host to create advanced polls and quizzes\" setting in the Zoom web portal's \"Settings\" interface. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n "
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/polls/{pollId}",
    "method": "deletePoll",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar poll",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "pollId",
        "schema": "string",
        "required": true,
        "description": "The poll ID",
        "example": "QalIoKWLTJehBJ8e1xRrbQ"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nWebinar Poll deleted"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `4400` <br>\n Webinar polls disabled. To enable this feature, enable the \"Webinar Polls/Quizzes\" setting in the Zoom web portal's \"Settings\" interface. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Webinar {webinarId} not found or has expired.<br> <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/polls/{pollId}",
    "method": "getPollDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar poll",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "pollId",
        "schema": "string",
        "required": true,
        "description": "The poll ID",
        "example": "QalIoKWLTJehBJ8e1xRrbQ"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about meeting and webinar polling."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `4400` <br>\n Webinar polls disabled. To enable this feature, enable the \"Webinar Polls/Quizzes\" setting in the Zoom web portal's \"Settings\" interface. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Webinar {webinarId} not found or has expired.<br> <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/polls/{pollId}",
    "method": "updatePoll",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update a webinar poll",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "pollId",
        "schema": "string",
        "required": true,
        "description": "The poll ID",
        "example": "QalIoKWLTJehBJ8e1xRrbQ"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Learn something new"
      },
      {
        "name": "anonymous",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "poll_type",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`  \n \nWebinar Poll Updated"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `4400` <br>\n * Webinar polls disabled. To enable this feature, enable the \"Webinar Polls/Quizzes\" setting in the Zoom web portal's \"Settings\" interface. \n* Advanced webinar polls disabled. To enable this feature, enable the \"Allow host to create advanced polls and quizzes\" setting in the Zoom web portal's \"Settings\" interface. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `3001` <br>\n Webinar {webinarId} not found or has expired.<br> <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/registrants",
    "method": "listRegistrants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List webinar registrants",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID.",
        "example": "1648194360000"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Query by the registrant's status. \n* `pending` - The registration is pending. \n* `approved` - The registrant is approved. \n* `denied` - The registration is denied.",
        "example": "pending",
        "default": "approved"
      },
      {
        "name": "trackingSourceId",
        "schema": "string",
        "required": false,
        "description": "The tracking source ID for the registrants. Useful if you share the webinar registration page in multiple locations. See [Creating source tracking links for webinar registration](https://support.zoom.us/hc/en-us/articles/360000315683-Creating-source-tracking-links-for-webinar-registration) for details.",
        "example": "5516482804110"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of records returned within a single API call.",
        "example": 30,
        "default": 30
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": false,
        "description": "**Deprecated** This field will be deprecated. We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.",
        "example": 1,
        "default": 1
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.",
        "example": "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of users."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account:{accountId}.<br> <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {userId} does not exist or does not belong to this account.<br> <br>\n**Error Code:** `3001` <br>\n Webinar {webinarId} not found or has expired.<br> <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/registrants",
    "method": "addRegistrant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Add a webinar registrant",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "occurrenceIds",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of webinar occurrence IDs. Get this value with the [Get a webinar](https://developers.zoom.us) API. Make sure the `registration_type` is 3 if updating multiple occurrences with this API.",
        "example": "1648538280000"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Jill"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Chill"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "jchill@example.com"
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1800 Amphibious Blvd."
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mountain View"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CA"
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "94045"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "US"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "5550100"
      },
      {
        "name": "comments",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Looking forward to the discussion."
      },
      {
        "name": "custom_questions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "industry",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Food"
      },
      {
        "name": "job_title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Chef"
      },
      {
        "name": "no_of_employees",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1-20"
      },
      {
        "name": "org",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Cooking Org"
      },
      {
        "name": "purchasing_time_frame",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1-3 months"
      },
      {
        "name": "role_in_purchase_process",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Influencer"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "en-US"
      },
      {
        "name": "source_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "4816766181770"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account: {accountId} <br>\n**Error Code:** `3000` <br>\n This webinar does not have registration as required: {webinarId}. <br>\n**Error Code:** `3027` <br>\n Host cannot register. <br>\n**Error Code:** `3034` <br>\n If you have been invited, please input your work email address. <br>\n**Error Code:** `3038` <br>\n Webinar is over, you cannot register now. If you have any questions, contact the webinar host. <br>\n**Error Code:** `3000` <br>\n You have reached the limit for the number of attendees you can add. Contact Zoom Support for more information. <br>\n**Error Code:** `3000` <br>\n The Zoom REST API does not support paid registration. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User \"{userId}\" does not exist or does not belong to this account. <br>\n**Error Code:** `3001` <br>\n Webinar \"{webinarId}\" not found or has expired. <br>\n"
      },
      {
        "statusCode": "429",
        "description": "**HTTP Status Code:** `429` <br>\n Too Many Requests \n\n "
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/registrants/questions",
    "method": "listRegistrationQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "List registration questions",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webinar Registrant Questions"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n "
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/registrants/questions",
    "method": "updateRegistrationQuestions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update registration questions",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "custom_questions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "questions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   Webinar registrant questions updated."
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n "
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/registrants/status",
    "method": "updateRegistrantStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update registrant's status",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID.",
        "example": "1648194360000"
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "approve"
      },
      {
        "name": "registrants",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204` <br>\n Registrant status updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account: {accountId}. <br>\n**Error Code:** `3035` <br>\n Webinar has reached maximum attendee capacity. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {userId} does not exist or does not belong to this account. <br>\n**Error Code:** `3001` <br>\n Webinar {webinarId} not found or has expired. <br>\n"
      },
      {
        "statusCode": "429",
        "description": "**HTTP Status Code:** `429` <br>\n Too Many Requests \n\n "
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/registrants/{registrantId}",
    "method": "deleteRegistrant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar registrant",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar ID.",
        "example": 95204914252
      },
      {
        "name": "registrantId",
        "schema": "string",
        "required": true,
        "description": "The registrant ID.",
        "example": "9tboDiHUQAeOnbmudzWa5g"
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The webinar occurrence ID.",
        "example": "1648538280000"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP status code:** `204`   \n \nOK"
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `200` <br>\n Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {0}.<br> <br>\n**Error Code:** `300` <br>\n The value that you entered for the Registrant ID field is invalid. Enter a valid value and try again.<br> <br>\n**Error Code:** `404` <br>\n Registration has not been enabled for this webinar: {0}.<br> <br>\n**Error Code:** `3000` <br>\n Registrant {0} was not found.<br> <br>\n**Error Code:** `3001` <br>\n Webinar does not exist: {0}. <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/registrants/{registrantId}",
    "method": "registrantDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar registrant",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "registrantId",
        "schema": "string",
        "required": true,
        "description": "The registrant ID.",
        "example": "9tboDiHUQAeOnbmudzWa5g"
      },
      {
        "name": "occurrenceId",
        "schema": "string",
        "required": false,
        "description": "The meeting or webinar occurrence ID.",
        "example": "1648194360000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webinar registrant."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account:{accountId}.<br> <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {userId} does not exist or does not belong to this account.<br> <br>\n**Error Code:** `3001` <br>\n Webinar {webinarId} not found or has expired.<br> <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/sip_dialing",
    "method": "getSipUriWithPasscode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar SIP URI with Passcode",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID. \n\n When storing this value in your database, store it as a long format integer and **not** an integer. Webinar IDs can exceed 10 digits.",
        "example": 85746065
      },
      {
        "name": "passcode",
        "schema": "string",
        "description": "",
        "example": "xxxx"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Information about the webinar's encoded SIP URI."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `300` <br>\n Webinar Id does not exist. <br>\n**Error Code:** `300` <br>\n Invalid Webinar Id. <br>\n**Error Code:** `3000` <br>\n Cannot access meeting info. <br>\n**Error Code:** `3000` <br>\n The webinar's SIP URI does not exist: {webinarId}. <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/status",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update webinar status",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "action",
        "schema": "string",
        "description": "",
        "example": "end"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `1010` <br>\n User does not belong to this account:{accountId}.<br> <br>\n**Error Code:** `3003` <br>\n You are not the meeting host.<br> <br>\n**Error Code:** `3063` <br>\n Can not end on-premise user's meeting:{meetingId}.<br> <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `1001` <br>\n User {userId} does not exist or does not belong to this account.<br> <br>\n**Error Code:** `3001` <br>\n Webinar {webinarId} not found or has expired.<br> <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/survey",
    "method": "deleteSurvey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Delete a webinar survey",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \n Webinar survey deleted."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `300` <br>\n Invalid webinar ID. <br>\n**Error Code:** `3000` <br>\n Webinar survey disabled. To enable this feature, enable the \"Webinar Survey\" setting in the Zoom web portal's \"Settings\" interface. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `300` <br>\n Webinar ID does not exist. <br>\n**Error Code:** `3001` <br>\n Webinar does not exist: {webinarId}. <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/survey",
    "method": "getSurvey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get a webinar survey",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the webinar survey."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `300` <br>\n Invalid webinar ID. <br>\n**Error Code:** `3000` <br>\n Webinar survey disabled. To enable this feature, enable the \"Webinar Survey\" setting in the Zoom web portal's \"Settings\" interface. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `300` <br>\n Webinar ID does not exist. <br>\n**Error Code:** `3001` <br>\n Webinar does not exist: {webinarId}. <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/survey",
    "method": "updateSurvey",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Update a webinar survey",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "custom_survey",
        "schema": "object",
        "description": ""
      },
      {
        "name": "show_in_the_browser",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "show_in_the_follow_up_email",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "third_party_survey",
        "schema": "string",
        "description": "",
        "example": "https://example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "**HTTP Status Code:** `204`   \n \n Webinar survey updated."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request \n\n **Error Code:** `300` <br>\n Invalid webinar ID. <br>\n**Error Code:** `300` <br>\n Invalid third party survey: {third_party_survey}. <br>\n**Error Code:** `3000` <br>\n Webinar survey disabled. To use this feature, enable the \"Webinar Survey\" setting in the Zoom web portal's \"Settings\" interface. <br>\n**Error Code:** `3000` <br>\n The host isn't allowed to use a third party survey link. To use this feature, enable the \"Allow host to use a 3rd-party survey link\" setting in the \"Account Settings\" page of the Zoom web portal. <br>\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found \n\n **Error Code:** `300` <br>\n Webinar ID does not exist. <br>\n**Error Code:** `3001` <br>\n Webinar does not exist: {webinarId}. <br>\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/token",
    "method": "getWebinarToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get webinar's token",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The webinar token type: \n* `closed_caption_token` &mdash; The third-party closed caption API token. \n\nThis defaults to `closed_caption_token`.",
        "example": "closed_caption_token",
        "default": "closed_caption_token"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the webinar token."
      },
      {
        "statusCode": "400",
        "description": "**HTTP Status Code:** `400` <br>\n Bad Request\n\n**Error Code:** `300` <br>\nInvalid webinar ID.\n\n**Error Code:** `3000` <br>\nClosed captioning disabled. To enable this feature, enable the \"Closed captioning\" and \"Allow use of caption API Token to integrate with 3rd-party Closed Captioning services\" settings in the Zoom web portal's \"Settings\" interface.\n\n**Error Code:** `3000` <br>\nWebinar {webinarId} has not started.\n\n"
      },
      {
        "statusCode": "404",
        "description": "**HTTP Status Code:** `404` <br>\n Not Found\n\n**Error Code:** `300` <br>\nWebinar ID does not exist.\n\n**Error Code:** `3001` <br>\nWebinar does not exist: {webinarId}\n\n"
      }
    ]
  },
  {
    "url": "/webinars/{webinarId}/tracking_sources",
    "method": "listTrackingSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinars",
    "typeScriptTag": "webinars",
    "description": "Get webinar tracking sources",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "integer",
        "required": true,
        "description": "The webinar's ID.",
        "example": 99289110036
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
      apiTitle="Zoom Meeting API"
      apiBaseUrl="https://api.zoom.us/v2"
      apiVersion="2"
      endpoints={112}
      sdkMethods={164}
      schemas={165}
      parameters={606}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zoom/meeting/openapi.yaml"
    />
  );
}
  