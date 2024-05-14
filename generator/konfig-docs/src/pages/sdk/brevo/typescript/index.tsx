import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BrevoTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="brevo-typescript-sdk"
      metaDescription={`Brevo, formerly known as Sendinblue, is the leading customer relationship management (CRM) suite designed to fully cultivate long-term customer relationships and to empower businesses to expand in a fast changing digital world. With Brevo, businesses have a unified view of the customer journey in one easy-to-use platform to grow meaningful relationships.

🙌Brevo Fun Facts 🙌
- Founded in 2012 by Armand Thiberge with a mission to help businesses of all sizes build stronger customer relationships and grow beyond their wildest dreams
- 500,000 customers across 180 countries
- Fully compliant with GDPR regulations
- Service and platform available in six languages
- Headquartered in Paris with eight other offices in Seattle, Toronto, Berlin, Vienna, Sofia, Noida, and Bengaluru
- 700+ talented employees representing over 67 nationalities
- Continuous efforts to reduce and monitor its carbon footprint
- Achieved centaur status—$100M in ARR—in 2022
- Award wins include Top 100 Software Company by The Software Report (TSR), Stevie Award: Relationship Management Solution, MarTech Breakthrough Award: Best Overall Marketing Automation Platform, G2: Leader Winter, Leader Enterprise Winter, Best Results Mid-Market, Best Software Awards: Top 50 Marketing Products, Best Software Awards: Top 100 Fastest Growing Products`}
      company="Brevo"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brevo/logo.png"
      companyKebabCase="brevo"
      clientNameCamelCase="brevo"
      homepage="brevo.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brevo/favicon.png"
      contactUrl="https://account.brevo.com/support"
      contactEmail="contact@brevo.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brevo/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["email","sms","chat"]}
      methods={[
  {
    "url": "/emailCampaigns",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email Campaigns",
    "typeScriptTag": "emailCampaigns",
    "description": "Return all your created email campaigns",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": "Filter on the type of the campaigns"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Filter on the status of the campaign"
      },
      {
        "name": "statistics",
        "schema": "string",
        "description": "Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response."
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used**. Starting (https://developers.brevo.com/ UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns.\n**Prefer to pass your timezone in date-time format for accurate result** ( only available if either 'status' not passed and if passed is set to 'sent' )\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used**. Ending (https://developers.brevo.com/ UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns.\n**Prefer to pass your timezone in date-time format for accurate result** ( only available if either 'status' not passed and if passed is set to 'sent' )\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document in the page",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
      },
      {
        "name": "excludeHtmlContent",
        "schema": "boolean",
        "description": "Use this flag to exclude htmlContent from the response body. If set to **true**, htmlContent field will be returned as empty string in the response body"
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
    "url": "/emailCampaigns",
    "method": "createCampaign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email Campaigns",
    "typeScriptTag": "emailCampaigns",
    "description": "Create an email campaign",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Newsletter"
      },
      {
        "name": "sender",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Newsletter - May 2017"
      },
      {
        "name": "htmlContent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>"
      },
      {
        "name": "htmlUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://html.domain.com"
      },
      {
        "name": "templateId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-06-01T10:30:00.000Z"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Discover the New Collection !"
      },
      {
        "name": "previewText",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Thanks for your order!"
      },
      {
        "name": "replyTo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "support@myshop.com"
      },
      {
        "name": "toField",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "{FNAME} {LNAME}"
      },
      {
        "name": "recipients",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "attachmentUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://attachment.domain.com"
      },
      {
        "name": "inlineImageActivation",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "mirrorActive",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "footer",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "[DEFAULT_FOOTER]"
      },
      {
        "name": "header",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "[DEFAULT_HEADER]"
      },
      {
        "name": "utmCampaign",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "NL_05_2017"
      },
      {
        "name": "params",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "FNAME": "Joe",
          "LNAME": "Doe"
        }
      },
      {
        "name": "sendAtBestTime",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "abTesting",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "subjectA",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Discover the New Collection!"
      },
      {
        "name": "subjectB",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Want to discover the New Collection?"
      },
      {
        "name": "splitRule",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 50
      },
      {
        "name": "winnerCriteria",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "open"
      },
      {
        "name": "winnerDelay",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 50
      },
      {
        "name": "ipWarmupEnable",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "initialQuota",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3000
      },
      {
        "name": "increaseRate",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 70
      },
      {
        "name": "unsubscriptionPageId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "62cbb7fabbe85021021aac52"
      },
      {
        "name": "updateFormId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "6313436b9ad40e23b371d095"
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
    "url": "/emailCampaigns/{campaignId}",
    "method": "removeCampaign",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Email Campaigns",
    "typeScriptTag": "emailCampaigns",
    "description": "Delete an email campaign",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "id of the campaign",
        "example": 0
      }
    ],
    "responses": [
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
    "url": "/emailCampaigns/{campaignId}",
    "method": "getReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email Campaigns",
    "typeScriptTag": "emailCampaigns",
    "description": "Get an email campaign report",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "Id of the campaign",
        "example": 0
      },
      {
        "name": "statistics",
        "schema": "string",
        "required": false,
        "description": "Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response."
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
    "url": "/emailCampaigns/{campaignId}",
    "method": "updateCampaign",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Email Campaigns",
    "typeScriptTag": "emailCampaigns",
    "description": "Update an email campaign",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "Id of the campaign",
        "example": 0
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "",
        "example": "Newsletter"
      },
      {
        "name": "sender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Newsletter - May 2017"
      },
      {
        "name": "htmlContent",
        "schema": "string",
        "description": "",
        "example": "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>"
      },
      {
        "name": "htmlUrl",
        "schema": "string",
        "description": "",
        "example": "https://html.domain.com"
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "description": "",
        "example": "2017-06-01T10:30:00.000Z"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": "",
        "example": "Discover the New Collection !"
      },
      {
        "name": "previewText",
        "schema": "string",
        "description": "",
        "example": "Thanks for your order!"
      },
      {
        "name": "replyTo",
        "schema": "string",
        "description": "",
        "example": "support@myshop.com"
      },
      {
        "name": "toField",
        "schema": "string",
        "description": "",
        "example": "{FNAME} {LNAME}"
      },
      {
        "name": "recipients",
        "schema": "object",
        "description": ""
      },
      {
        "name": "attachmentUrl",
        "schema": "string",
        "description": "",
        "example": "https://attachment.domain.com"
      },
      {
        "name": "inlineImageActivation",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "mirrorActive",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "recurring",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "footer",
        "schema": "string",
        "description": "",
        "example": "[DEFAULT_FOOTER]"
      },
      {
        "name": "header",
        "schema": "string",
        "description": "",
        "example": "[DEFAULT_HEADER]"
      },
      {
        "name": "utmCampaign",
        "schema": "string",
        "description": "",
        "example": "NL_05_2017"
      },
      {
        "name": "params",
        "schema": "object",
        "description": "",
        "example": {
          "FNAME": "Joe",
          "LNAME": "Doe"
        }
      },
      {
        "name": "sendAtBestTime",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "abTesting",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "subjectA",
        "schema": "string",
        "description": "",
        "example": "Discover the New Collection!"
      },
      {
        "name": "subjectB",
        "schema": "string",
        "description": "",
        "example": "Want to discover the New Collection?"
      },
      {
        "name": "splitRule",
        "schema": "integer",
        "description": "",
        "example": 50
      },
      {
        "name": "winnerCriteria",
        "schema": "string",
        "description": "",
        "example": "open"
      },
      {
        "name": "winnerDelay",
        "schema": "integer",
        "description": "",
        "example": 50
      },
      {
        "name": "ipWarmupEnable",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "initialQuota",
        "schema": "integer",
        "description": "",
        "example": 3000
      },
      {
        "name": "increaseRate",
        "schema": "integer",
        "description": "",
        "example": 70
      },
      {
        "name": "unsubscriptionPageId",
        "schema": "string",
        "description": "",
        "example": "62cbb7fabbe85021021aac52"
      },
      {
        "name": "updateFormId",
        "schema": "string",
        "description": "",
        "example": "6313436b9ad40e23b371d095"
      }
    ],
    "responses": [
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
    "url": "/emailCampaigns/{campaignId}/sendNow",
    "method": "sendImmediate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email Campaigns",
    "typeScriptTag": "emailCampaigns",
    "description": "Send an email campaign immediately, based on campaignId",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "Id of the campaign",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/emailCampaigns/{campaignId}/sendTest",
    "method": "sendTestToTestList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email Campaigns",
    "typeScriptTag": "emailCampaigns",
    "description": "Send an email campaign to your test list",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "Id of the campaign",
        "example": 0
      },
      {
        "name": "emailTo",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/emailCampaigns/{campaignId}/status",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Email Campaigns",
    "typeScriptTag": "emailCampaigns",
    "description": "Update an email campaign status",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "Id of the campaign",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/emailCampaigns/{campaignId}/sendReport",
    "method": "sendReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email Campaigns",
    "typeScriptTag": "emailCampaigns",
    "description": "Send the report of a campaign",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "Id of the campaign",
        "example": 0
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "en",
        "default": "fr"
      },
      {
        "name": "email",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/emailCampaigns/{campaignId}/abTestCampaignResult",
    "method": "getAbTestResult",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email Campaigns",
    "typeScriptTag": "emailCampaigns",
    "description": "Get an A/B test email campaign results",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "Id of the A/B test campaign",
        "example": 0
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
    "url": "/emailCampaigns/{campaignId}/sharedUrl",
    "method": "getSharedUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email Campaigns",
    "typeScriptTag": "emailCampaigns",
    "description": "Get a shared template url",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "Id of the campaign or template",
        "example": 0
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
      },
      {
        "statusCode": "405",
        "description": ""
      }
    ]
  },
  {
    "url": "/emailCampaigns/{campaignId}/exportRecipients",
    "method": "exportRecipientsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email Campaigns",
    "typeScriptTag": "emailCampaigns",
    "description": "Export the recipients of an email campaign",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "Id of the campaign",
        "example": 0
      },
      {
        "name": "notifyURL",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "http://requestb.in/173lyyx1"
      },
      {
        "name": "recipientsType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "openers"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
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
    "url": "/emailCampaigns/images",
    "method": "uploadImageToGallery",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email Campaigns",
    "typeScriptTag": "emailCampaigns",
    "description": "Upload an image to your account's image gallery",
    "parameters": [
      {
        "name": "imageUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://somedomain.com/image1.jpg"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "nature.jpg"
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
    "url": "/smtp/email",
    "method": "sendTransactionalEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Send a transactional email",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "to",
        "schema": "array",
        "description": ""
      },
      {
        "name": "bcc",
        "schema": "array",
        "description": ""
      },
      {
        "name": "cc",
        "schema": "array",
        "description": ""
      },
      {
        "name": "htmlContent",
        "schema": "string",
        "description": "",
        "example": "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>"
      },
      {
        "name": "textContent",
        "schema": "string",
        "description": "",
        "example": "Please confirm your email address by clicking on the link https://text.domain.com"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": "",
        "example": "Login Email confirmation"
      },
      {
        "name": "replyTo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "attachment",
        "schema": "array",
        "description": ""
      },
      {
        "name": "headers",
        "schema": "object",
        "description": "",
        "example": {
          "sender.ip": "1.2.3.4",
          "X-Mailin-custom": "some_custom_header",
          "idempotencyKey": "abc-123"
        }
      },
      {
        "name": "templateId",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "params",
        "schema": "object",
        "description": "",
        "example": {
          "FNAME": "Joe",
          "LNAME": "Doe"
        }
      },
      {
        "name": "messageVersions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "description": "",
        "example": "2022-04-05T12:30:00+02:00"
      },
      {
        "name": "batchId",
        "schema": "string",
        "description": "",
        "example": "5c6cfa04-eed9-42c2-8b5c-6d470d978e9d"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/smtp/emails",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Get the list of transactional emails on the basis of allowed filters",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": "**Mandatory if templateId and messageId are not passed in query filters.** Email address to which transactional email has been sent.\n"
      },
      {
        "name": "templateId",
        "schema": "integer",
        "description": "**Mandatory if email and messageId are not passed in query filters.** Id of the template that was used to compose transactional email.\n"
      },
      {
        "name": "messageId",
        "schema": "string",
        "description": "**Mandatory if templateId and email are not passed in query filters.** Message ID of the transactional email sent.\n"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used.** Starting date (https://developers.brevo.com/ from which you want to fetch the list. **Maximum time period that can be selected is one month**.\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used.** Ending date (https://developers.brevo.com/ till which you want to fetch the list. **Maximum time period that can be selected is one month.**\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents returned per page",
        "default": 500
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document in the page",
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
      }
    ]
  },
  {
    "url": "/smtp/emails/{uuid}",
    "method": "getContentByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Get the personalized content of a sent transactional email",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "Unique id of the transactional email that has been sent to a particular contact",
        "example": "UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/smtp/log/{identifier}",
    "method": "deleteLog",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Delete an SMTP transactional log",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "MessageId or Email of the transactional log(https://developers.brevo.com/ to delete",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
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
    "url": "/smtp/templates",
    "method": "listTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Get the list of email templates",
    "parameters": [
      {
        "name": "templateStatus",
        "schema": "boolean",
        "description": "Filter on the status of the template. Active = true, inactive = false"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents returned per page",
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document in the page",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/smtp/templates",
    "method": "createTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Create an email template",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "OrderConfirmation"
      },
      {
        "name": "sender",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Order Confirmation - EN"
      },
      {
        "name": "htmlContent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "The order n°xxxxx has been confirmed. Thanks for your purchase"
      },
      {
        "name": "htmlUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://html.domain.com"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Thanks for your purchase !"
      },
      {
        "name": "replyTo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "support@myshop.com"
      },
      {
        "name": "toField",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "{FNAME} {LNAME}"
      },
      {
        "name": "attachmentUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://attachment.domain.com"
      },
      {
        "name": "isActive",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/smtp/templates/{templateId}",
    "method": "deleteTemplateById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Delete an inactive email template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "id of the template",
        "example": 0
      }
    ],
    "responses": [
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
    "url": "/smtp/templates/{templateId}",
    "method": "getTemplateInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Returns the template information",
    "parameters": [
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "id of the template",
        "example": 0
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
    "url": "/smtp/templates/{templateId}",
    "method": "updateTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Update an email template",
    "parameters": [
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "id of the template",
        "example": 0
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "",
        "example": "OrderConfirmation"
      },
      {
        "name": "sender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "templateName",
        "schema": "string",
        "description": "",
        "example": "Order Confirmation - EN"
      },
      {
        "name": "htmlContent",
        "schema": "string",
        "description": "",
        "example": "The order n°xxxxx has been confirmed. Thanks for your purchase"
      },
      {
        "name": "htmlUrl",
        "schema": "string",
        "description": "",
        "example": "https://html.domain.com"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": "",
        "example": "Thanks for your purchase !"
      },
      {
        "name": "replyTo",
        "schema": "string",
        "description": "",
        "example": "support@myshop.com"
      },
      {
        "name": "toField",
        "schema": "string",
        "description": "",
        "example": "{FNAME} {LNAME}"
      },
      {
        "name": "attachmentUrl",
        "schema": "string",
        "description": "",
        "example": "https://attachment.domain.com"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
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
    "url": "/smtp/templates/{templateId}/sendTest",
    "method": "sendTestTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Send a template to your test list",
    "parameters": [
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "Id of the template",
        "example": 0
      },
      {
        "name": "emailTo",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/smtp/statistics/aggregatedReport",
    "method": "getAggregatedReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Get your transactional email activity aggregated over a period of time",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used.** Starting date of the report (https://developers.brevo.com/. Must be lower than equal to endDate\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used.** Ending date of the report (https://developers.brevo.com/. Must be greater than equal to startDate\n"
      },
      {
        "name": "days",
        "schema": "integer",
        "description": "Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_\n"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Tag of the emails"
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
    "url": "/smtp/statistics/reports",
    "method": "getActivityPerDay",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Get your transactional email activity aggregated per day",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents returned per page",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document on the page",
        "default": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used.** Starting date of the report (https://developers.brevo.com/\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used.** Ending date of the report (https://developers.brevo.com/\n"
      },
      {
        "name": "days",
        "schema": "integer",
        "description": "Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_\n"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Tag of the emails"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/smtp/statistics/events",
    "method": "getAllActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Get all your transactional email activity (unaggregated events)",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number limitation for the result returned",
        "default": 2500
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Beginning point in the list to retrieve from.",
        "default": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used.** Starting date of the report (https://developers.brevo.com/. Must be lower than equal to endDate\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used.** Ending date of the report (https://developers.brevo.com/. Must be greater than equal to startDate\n"
      },
      {
        "name": "days",
        "schema": "integer",
        "description": "Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_\n"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Filter the report for a specific email addresses"
      },
      {
        "name": "event",
        "schema": "string",
        "description": "Filter the report for a specific event type"
      },
      {
        "name": "tags",
        "schema": "string",
        "description": "Filter the report for tags (serialized and urlencoded array)"
      },
      {
        "name": "messageId",
        "schema": "string",
        "description": "Filter on a specific message id"
      },
      {
        "name": "templateId",
        "schema": "integer",
        "description": "Filter on a specific template id"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/smtp/blockedContacts/{email}",
    "method": "unblockContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Unblock or resubscribe a transactional contact",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "contact email (https://developers.brevo.com/ to unblock.",
        "example": "EMAIL"
      }
    ],
    "responses": [
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
    "url": "/smtp/blockedContacts",
    "method": "listBlockedContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Get the list of blocked or unsubscribed transactional contacts",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used.** Starting date (https://developers.brevo.com/ from which you want to fetch the blocked or unsubscribed contacts\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used.** Ending date (https://developers.brevo.com/ till which you want to fetch the blocked or unsubscribed contacts\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents returned per page",
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document on the page",
        "default": 0
      },
      {
        "name": "senders",
        "schema": "array",
        "description": "Comma separated list of emails of the senders from which contacts are blocked or unsubscribed"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/smtp/blockedDomains",
    "method": "getBlockedDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Get the list of blocked domains",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/smtp/blockedDomains",
    "method": "addBlockedDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Add a new domain to the list of blocked domains",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/smtp/blockedDomains/{domain}",
    "method": "unblockDomain",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Unblock an existing domain from the list of blocked domains",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "The name of the domain to be deleted",
        "example": "DOMAIN"
      }
    ],
    "responses": [
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
    "url": "/smtp/deleteHardbounces",
    "method": "removeHardbounces",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Delete hardbounces",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2016-12-31T00:00:00.000Z"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2017-01-31T00:00:00.000Z"
      },
      {
        "name": "contactEmail",
        "schema": "string",
        "description": "",
        "example": "alex76@example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/smtp/emailStatus/{identifier}",
    "method": "getEmailStatusById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Fetch scheduled emails by batchId or messageId",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "The `batchId` of scheduled emails batch (Should be a valid UUIDv4) or the `messageId` of scheduled email.",
        "example": "IDENTIFIER"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Mandatory if `endDate` is used. Starting date (https://developers.brevo.com/ from which you want to fetch the list. Can be maximum 30 days older tha current date.",
        "example": "2022-02-02"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Mandatory if `startDate` is used. Ending date (https://developers.brevo.com/ till which you want to fetch the list. Maximum time period that can be selected is one month.",
        "example": "2022-03-02"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed. Not valid when identifier is `messageId`.",
        "default": "desc"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter the records by `status` of the scheduled email batch or message. Not valid when identifier is `messageId`."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of documents returned per page. Not valid when identifier is `messageId`.",
        "example": 100,
        "default": 100
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the first document on the page.  Not valid when identifier is `messageId`.",
        "example": 0,
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/smtp/email/{identifier}",
    "method": "deleteScheduledEmails",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Transactional emails",
    "typeScriptTag": "transactionalEmails",
    "description": "Delete scheduled emails by batchId or messageId",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "The `batchId` of scheduled emails batch (Should be a valid UUIDv4) or the `messageId` of scheduled email.",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
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
    "url": "/contacts",
    "method": "getAllContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get all the contacts",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document of the page",
        "default": 0
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "description": "Filter (https://developers.brevo.com/ the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.**\n"
      },
      {
        "name": "createdSince",
        "schema": "string",
        "description": "Filter (https://developers.brevo.com/ the contacts created after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.**\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
      },
      {
        "name": "segmentId",
        "schema": "integer",
        "description": "Id of the segment. **Either listIds or segmentId can be passed.**"
      },
      {
        "name": "listIds",
        "schema": "array",
        "description": "Ids of the list. **Either listIds or segmentId can be passed.**"
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
    "url": "/contacts",
    "method": "createNewContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create a contact",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "elly@example.com"
      },
      {
        "name": "ext_id",
        "schema": "string",
        "description": "",
        "example": "externalId"
      },
      {
        "name": "attributes",
        "schema": "object",
        "description": "",
        "example": {
          "FNAME": "Elly",
          "LNAME": "Roger"
        }
      },
      {
        "name": "emailBlacklisted",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "smsBlacklisted",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "listIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "updateEnabled",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "smtpBlacklistSender",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/doubleOptinConfirmation",
    "method": "createDoubleOptInContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create Contact via DOI (https://developers.brevo.com/ Flow",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "elly@example.com"
      },
      {
        "name": "attributes",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "FNAME": "Elly",
          "LNAME": "Roger"
        }
      },
      {
        "name": "includeListIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "excludeListIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2
      },
      {
        "name": "redirectionUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "http://requestb.in/173lyyx1"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{identifier}",
    "method": "deleteContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete a contact",
    "parameters": [
      {
        "name": "identifier",
        "schema": "undefined",
        "required": true,
        "description": "Email (https://developers.brevo.com/ OR ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{identifier}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get a contact's details",
    "parameters": [
      {
        "name": "identifier",
        "schema": "undefined",
        "required": true,
        "description": "Email (https://developers.brevo.com/ OR ID of the contact OR its SMS attribute value"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used.** Starting date (https://developers.brevo.com/ of the statistic events specific to campaigns. Must be lower than equal to endDate\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used.** Ending date (https://developers.brevo.com/ of the statistic events specific to campaigns. Must be greater than equal to startDate.\n"
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
    "url": "/contacts/{identifier}",
    "method": "updateContactById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update a contact",
    "parameters": [
      {
        "name": "identifier",
        "schema": "undefined",
        "required": true,
        "description": "Email (https://developers.brevo.com/ OR ID of the contact"
      },
      {
        "name": "attributes",
        "schema": "object",
        "description": "",
        "example": {
          "EMAIL": "newemail@domain.com",
          "FNAME": "Ellie",
          "LNAME": "Roger"
        }
      },
      {
        "name": "ext_id",
        "schema": "string",
        "description": "",
        "example": "updateExternalId"
      },
      {
        "name": "emailBlacklisted",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "smsBlacklisted",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "listIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "unlinkListIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "smtpBlacklistSender",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/contacts/batch",
    "method": "updateMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update multiple contacts",
    "parameters": [
      {
        "name": "contacts",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{identifier}/campaignStats",
    "method": "getEmailCampaignStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get email campaigns' statistics for a contact",
    "parameters": [
      {
        "name": "identifier",
        "schema": "undefined",
        "required": true,
        "description": "Email (https://developers.brevo.com/ OR ID of the contact"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used.** Starting date (https://developers.brevo.com/ of the statistic events specific to campaigns. Must be lower than equal to endDate\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used.** Ending date (https://developers.brevo.com/ of the statistic events specific to campaigns. Must be greater than equal to startDate. Maximum difference between startDate and endDate should not be greater than 90 days\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Campaign Statistics for the contact"
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
    "url": "/contacts/attributes",
    "method": "listAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List all attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/attributes/{attributeCategory}/{attributeName}",
    "method": "removeAttribute",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete an attribute",
    "parameters": [
      {
        "name": "attributeCategory",
        "schema": "string",
        "required": true,
        "description": "Category of the attribute",
        "example": "ATTRIBUTECATEGORY"
      },
      {
        "name": "attributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the existing attribute",
        "example": "ATTRIBUTENAME"
      }
    ],
    "responses": [
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
    "url": "/contacts/attributes/{attributeCategory}/{attributeName}",
    "method": "createAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create contact attribute",
    "parameters": [
      {
        "name": "attributeCategory",
        "schema": "string",
        "required": true,
        "description": "Category of the attribute",
        "example": "ATTRIBUTECATEGORY"
      },
      {
        "name": "attributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the attribute",
        "example": "ATTRIBUTENAME"
      },
      {
        "name": "value",
        "schema": "string",
        "description": "",
        "example": "COUNT[BLACKLISTED,BLACKLISTED,<,NOW()]"
      },
      {
        "name": "isRecurring",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "enumeration",
        "schema": "array",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "text"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/attributes/{attributeCategory}/{attributeName}",
    "method": "updateAttribute",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update contact attribute",
    "parameters": [
      {
        "name": "attributeCategory",
        "schema": "string",
        "required": true,
        "description": "Category of the attribute",
        "example": "ATTRIBUTECATEGORY"
      },
      {
        "name": "attributeName",
        "schema": "string",
        "required": true,
        "description": "Name of the existing attribute",
        "example": "ATTRIBUTENAME"
      },
      {
        "name": "value",
        "schema": "string",
        "description": "",
        "example": "COUNT[BLACKLISTED,BLACKLISTED,<,NOW()]"
      },
      {
        "name": "enumeration",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/contacts/folders",
    "method": "getAllFolders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get all folders",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "Number of documents per page",
        "example": 0,
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": true,
        "description": "Index of the first document of the page",
        "example": 0,
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/contacts/folders",
    "method": "createFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create a folder",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Wordpress Contacts"
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
    "url": "/contacts/folders/{folderId}",
    "method": "deleteFolder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete a folder (and all its lists)",
    "parameters": [
      {
        "name": "folderId",
        "schema": "integer",
        "required": true,
        "description": "Id of the folder",
        "example": 0
      }
    ],
    "responses": [
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
    "url": "/contacts/folders/{folderId}",
    "method": "getFolderDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Returns a folder's details",
    "parameters": [
      {
        "name": "folderId",
        "schema": "integer",
        "required": true,
        "description": "id of the folder",
        "example": 0
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
    "url": "/contacts/folders/{folderId}",
    "method": "updateFolder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update a folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "integer",
        "required": true,
        "description": "Id of the folder",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Wordpress Contacts"
      }
    ],
    "responses": [
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
    "url": "/contacts/folders/{folderId}/lists",
    "method": "getFolderLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get lists in a folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "integer",
        "required": true,
        "description": "Id of the folder",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document of the page",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/contacts/lists",
    "method": "getAllLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get all the lists",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document of the page",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/contacts/lists",
    "method": "createList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create a list",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Magento Customer - ES"
      },
      {
        "name": "folderId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2
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
    "url": "/contacts/lists/{listId}",
    "method": "deleteList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete a list",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "Id of the list",
        "example": 0
      }
    ],
    "responses": [
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
    "url": "/contacts/lists/{listId}",
    "method": "getListDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get a list's details",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "Id of the list",
        "example": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used**. Ending (https://developers.brevo.com/ UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to aggregate the sent email campaigns for a specific list id.\n**Prefer to pass your timezone in date-time format for accurate result**\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used**. Ending (https://developers.brevo.com/ UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to aggregate the sent email campaigns for a specific list id.\n**Prefer to pass your timezone in date-time format for accurate result**\n"
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
    "url": "/contacts/lists/{listId}",
    "method": "updateList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update a list",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "Id of the list",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Magento Customer - ES"
      },
      {
        "name": "folderId",
        "schema": "integer",
        "description": "",
        "example": 2
      }
    ],
    "responses": [
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
    "url": "/contacts/segments",
    "method": "getAllSegments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get all the segments",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document of the page",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/contacts/lists/{listId}/contacts",
    "method": "getListContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get contacts in a list",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "Id of the list",
        "example": 0
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "description": "Filter (https://developers.brevo.com/ the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.**\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document of the page",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/contacts/lists/{listId}/contacts/add",
    "method": "addToList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Add existing contacts to a list",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "Id of the list",
        "example": 0
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/lists/{listId}/contacts/remove",
    "method": "removeContactFromList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete a contact from a list",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "Id of the list",
        "example": 0
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/export",
    "method": "exportProcessId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Export contacts",
    "parameters": [
      {
        "name": "exportAttributes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customContactFilter",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "notifyUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "http://requestb.in/173lyyx1"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/import",
    "method": "importContactsProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Import contacts",
    "parameters": [
      {
        "name": "fileUrl",
        "schema": "string",
        "description": "",
        "example": "https://importfile.domain.com"
      },
      {
        "name": "fileBody",
        "schema": "string",
        "description": "",
        "example": "NAME;SURNAME;EMAIL\nSmith;John;john.smith@example.com\nRoger;Ellie;ellie36@example.com"
      },
      {
        "name": "jsonBody",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notifyUrl",
        "schema": "string",
        "description": "",
        "example": "http://requestb.in/173lyyx1"
      },
      {
        "name": "newList",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailBlacklist",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "disableNotification",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "smsBlacklist",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "updateExistingContacts",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "emptyContactsAttributes",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/smsCampaigns",
    "method": "getAllInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SMS Campaigns",
    "typeScriptTag": "smsCampaigns",
    "description": "Returns the information for all your created SMS campaigns",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": "Status of campaign."
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used.** Starting (https://developers.brevo.com/ UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent sms campaigns. **Prefer to pass your timezone in date-time format for accurate result** ( only available if either 'status' not passed and if passed is set to 'sent' )\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used.** Ending (https://developers.brevo.com/ UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent sms campaigns. **Prefer to pass your timezone in date-time format for accurate result** ( only available if either 'status' not passed and if passed is set to 'sent' )\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number limitation for the result returned",
        "default": 500
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Beginning point in the list to retrieve from.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/smsCampaigns",
    "method": "createCampaign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SMS Campaigns",
    "typeScriptTag": "smsCampaigns",
    "description": "Creates an SMS campaign",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Spring Promo Code"
      },
      {
        "name": "sender",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MyShop"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Get a discount by visiting our NY store and saying : Happy Spring!"
      },
      {
        "name": "recipients",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-05-05T10:30:00.000Z"
      },
      {
        "name": "unicodeEnabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "organisationPrefix",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MyCompany"
      },
      {
        "name": "unsubscribeInstruction",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "send Stop if you want to unsubscribe."
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
    "url": "/smsCampaigns/{campaignId}",
    "method": "removeCampaignById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SMS Campaigns",
    "typeScriptTag": "smsCampaigns",
    "description": "Delete an SMS campaign",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "id of the SMS campaign",
        "example": 0
      }
    ],
    "responses": [
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
    "url": "/smsCampaigns/{campaignId}",
    "method": "getCampaignById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SMS Campaigns",
    "typeScriptTag": "smsCampaigns",
    "description": "Get an SMS campaign",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "id of the SMS campaign",
        "example": 0
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
    "url": "/smsCampaigns/{campaignId}",
    "method": "updateCampaignById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "SMS Campaigns",
    "typeScriptTag": "smsCampaigns",
    "description": "Update an SMS campaign",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "id of the SMS campaign",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Spring Promo Code"
      },
      {
        "name": "sender",
        "schema": "string",
        "description": "",
        "example": "MyShop"
      },
      {
        "name": "content",
        "schema": "string",
        "description": "",
        "example": "Get a discount by visiting our NY store and saying : Happy Spring!"
      },
      {
        "name": "recipients",
        "schema": "object",
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "description": "",
        "example": "2017-05-05T10:30:00.000Z"
      },
      {
        "name": "unicodeEnabled",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "organisationPrefix",
        "schema": "string",
        "description": "",
        "example": "MyCompany"
      },
      {
        "name": "unsubscribeInstruction",
        "schema": "string",
        "description": "",
        "example": "send Stop if you want to unsubscribe."
      }
    ],
    "responses": [
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
    "url": "/smsCampaigns/{campaignId}/sendNow",
    "method": "sendImmediately",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SMS Campaigns",
    "typeScriptTag": "smsCampaigns",
    "description": "Send your SMS campaign immediately",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "id of the campaign",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/smsCampaigns/{campaignId}/status",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "SMS Campaigns",
    "typeScriptTag": "smsCampaigns",
    "description": "Update a campaign's status",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "id of the campaign",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/smsCampaigns/{campaignId}/sendTest",
    "method": "sendTestSms",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SMS Campaigns",
    "typeScriptTag": "smsCampaigns",
    "description": "Send a test SMS campaign",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "Id of the SMS campaign",
        "example": 0
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": "",
        "example": "33689965433"
      }
    ],
    "responses": [
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
    "url": "/smsCampaigns/{campaignId}/exportRecipients",
    "method": "exportRecipientsProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SMS Campaigns",
    "typeScriptTag": "smsCampaigns",
    "description": "Export an SMS campaign's recipients",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "id of the campaign",
        "example": 0
      },
      {
        "name": "notifyURL",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "http://requestb.in/173lyyx1"
      },
      {
        "name": "recipientsType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "answered"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
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
    "url": "/smsCampaigns/{campaignId}/sendReport",
    "method": "sendCampaignReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SMS Campaigns",
    "typeScriptTag": "smsCampaigns",
    "description": "Send an SMS campaign's report",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "id of the campaign",
        "example": 0
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "en",
        "default": "fr"
      },
      {
        "name": "email",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/transactionalSMS/sms",
    "method": "sendSmsMessageToMobile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional SMS",
    "typeScriptTag": "transactionalSms",
    "description": "Send SMS message to a mobile number",
    "parameters": [
      {
        "name": "sender",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MyShop"
      },
      {
        "name": "recipient",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "33689965433"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Enter this code:CCJJG8 to validate your account"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "marketing",
        "default": "transactional"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "accountValidation"
      },
      {
        "name": "webUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "http://requestb.in/173lyyx1"
      },
      {
        "name": "unicodeEnabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "organisationPrefix",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "MyCompany"
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
        "statusCode": "402",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactionalSMS/statistics/aggregatedReport",
    "method": "getAggregatedReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional SMS",
    "typeScriptTag": "transactionalSms",
    "description": "Get your SMS activity aggregated over a period of time",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used.** Starting date (https://developers.brevo.com/ of the report\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used.** Ending date (https://developers.brevo.com/ of the report\n"
      },
      {
        "name": "days",
        "schema": "integer",
        "description": "Number of days in the past including today (positive integer). **Not compatible with startDate and endDate**\n"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter on a tag"
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
    "url": "/transactionalSMS/statistics/reports",
    "method": "getSmsActivityAggregatedPerDay",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional SMS",
    "typeScriptTag": "transactionalSms",
    "description": "Get your SMS activity aggregated per day",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used.** Starting date (https://developers.brevo.com/ of the report\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used.** Ending date (https://developers.brevo.com/ of the report\n"
      },
      {
        "name": "days",
        "schema": "integer",
        "description": "Number of days in the past including today (positive integer). **Not compatible with 'startDate' and 'endDate'**\n"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter on a tag"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/transactionalSMS/statistics/events",
    "method": "getAllEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional SMS",
    "typeScriptTag": "transactionalSms",
    "description": "Get all your SMS activity (unaggregated events)",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 50
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used.** Starting date (https://developers.brevo.com/ of the report\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used.** Ending date (https://developers.brevo.com/ of the report\n"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document of the page",
        "default": 0
      },
      {
        "name": "days",
        "schema": "integer",
        "description": "Number of days in the past including today (positive integer). **Not compatible with 'startDate' and 'endDate'**\n"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": "Filter the report for a specific phone number"
      },
      {
        "name": "event",
        "schema": "string",
        "description": "Filter the report for specific events"
      },
      {
        "name": "tags",
        "schema": "string",
        "description": "Filter the report for specific tags passed as a serialized urlencoded array"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/whatsappCampaigns/{campaignId}",
    "method": "deleteCampaign",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "WhatsApp Campaigns",
    "typeScriptTag": "whatsAppCampaigns",
    "description": "Delete a WhatsApp campaign",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "id of the campaign",
        "example": 0
      }
    ],
    "responses": [
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
    "url": "/whatsappCampaigns/{campaignId}",
    "method": "getCampaignById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WhatsApp Campaigns",
    "typeScriptTag": "whatsAppCampaigns",
    "description": "Get a WhatsApp campaign",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "Id of the campaign",
        "example": 0
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
    "url": "/whatsappCampaigns/{campaignId}",
    "method": "updateCampaignById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "WhatsApp Campaigns",
    "typeScriptTag": "whatsAppCampaigns",
    "description": "Update a WhatsApp campaign",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "id of the campaign",
        "example": 0
      },
      {
        "name": "campaignName",
        "schema": "string",
        "description": "",
        "example": "Test WhatsApp"
      },
      {
        "name": "campaignStatus",
        "schema": "string",
        "description": "",
        "example": "scheduled",
        "default": "scheduled"
      },
      {
        "name": "rescheduleFor",
        "schema": "string",
        "description": "",
        "example": "2017-06-01T10:30:00.000Z"
      },
      {
        "name": "recipients",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/whatsappCampaigns/template-list",
    "method": "getTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WhatsApp Campaigns",
    "typeScriptTag": "whatsAppCampaigns",
    "description": "Return all your created WhatsApp templates",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used**. Starting (https://developers.brevo.com/ UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the templates created.\n**Prefer to pass your timezone in date-time format for accurate result**\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used**. Ending (https://developers.brevo.com/ UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the templates created.\n**Prefer to pass your timezone in date-time format for accurate result**\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document in the page",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record modification. Default order is **descending** if `sort` is not passed",
        "default": "desc"
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "source of the template"
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
    "url": "/whatsappCampaigns",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WhatsApp Campaigns",
    "typeScriptTag": "whatsAppCampaigns",
    "description": "Return all your created WhatsApp campaigns",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used**. Starting (https://developers.brevo.com/ UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the WhatsApp campaigns created.\n**Prefer to pass your timezone in date-time format for accurate result**\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used**. Ending (https://developers.brevo.com/ UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the WhatsApp campaigns created.\n**Prefer to pass your timezone in date-time format for accurate result**\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document in the page",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record modification. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/whatsappCampaigns",
    "method": "createAndSend",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WhatsApp Campaigns",
    "typeScriptTag": "whatsAppCampaigns",
    "description": "Create and Send a WhatsApp campaign",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Test Campaign"
      },
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 19
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-06-01T10:30:00.000Z"
      },
      {
        "name": "recipients",
        "schema": "object",
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
      }
    ]
  },
  {
    "url": "/whatsappCampaigns/template",
    "method": "createTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WhatsApp Campaigns",
    "typeScriptTag": "whatsAppCampaigns",
    "description": "Create a WhatsApp template",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Test template"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "en"
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MARKETING"
      },
      {
        "name": "mediaUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://attachment.domain.com"
      },
      {
        "name": "bodyText",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "making it look like readable English"
      },
      {
        "name": "headerText",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Test WhatsApp campaign"
      },
      {
        "name": "source",
        "schema": "string",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/whatsappCampaigns/template/approval/{templateId}",
    "method": "sendTemplateForApproval",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WhatsApp Campaigns",
    "typeScriptTag": "whatsAppCampaigns",
    "description": "Send your WhatsApp template for approval",
    "parameters": [
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "id of the template",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/whatsappCampaigns/config",
    "method": "getAccountInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WhatsApp Campaigns",
    "typeScriptTag": "whatsAppCampaigns",
    "description": "Get your WhatsApp API account information",
    "parameters": [],
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
    "url": "/senders",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Senders",
    "typeScriptTag": "senders",
    "description": "Get the list of all your senders",
    "parameters": [
      {
        "name": "ip",
        "schema": "string",
        "description": "Filter your senders for a specific ip. **Available for dedicated IP usage only**\n"
      },
      {
        "name": "domain",
        "schema": "string",
        "description": "Filter your senders for a specific domain"
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
    "url": "/senders",
    "method": "createNewSender",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Senders",
    "typeScriptTag": "senders",
    "description": "Create a new sender",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Newsletter"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "newsletter@mycompany.com"
      },
      {
        "name": "ips",
        "schema": "array",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/senders/{senderId}",
    "method": "removeSender",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Senders",
    "typeScriptTag": "senders",
    "description": "Delete a sender",
    "parameters": [
      {
        "name": "senderId",
        "schema": "integer",
        "required": true,
        "description": "Id of the sender",
        "example": 0
      }
    ],
    "responses": [
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
    "url": "/senders/{senderId}",
    "method": "updateSenderById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Senders",
    "typeScriptTag": "senders",
    "description": "Update a sender",
    "parameters": [
      {
        "name": "senderId",
        "schema": "integer",
        "required": true,
        "description": "Id of the sender",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Newsletter"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "newsletter@mycompany.com"
      },
      {
        "name": "ips",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/senders/{senderId}/validate",
    "method": "validateSenderUsingOtp",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Senders",
    "typeScriptTag": "senders",
    "description": "Validate Sender using OTP",
    "parameters": [
      {
        "name": "senderId",
        "schema": "integer",
        "required": true,
        "description": "Id of the sender",
        "example": 0
      },
      {
        "name": "otp",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 123456
      }
    ],
    "responses": [
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
    "url": "/senders/{senderId}/ips",
    "method": "getAllDedicatedIps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Senders",
    "typeScriptTag": "senders",
    "description": "Get all the dedicated IPs for a sender",
    "parameters": [
      {
        "name": "senderId",
        "schema": "integer",
        "required": true,
        "description": "Id of the sender",
        "example": 0
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
    "url": "/senders/ips",
    "method": "getDedicatedIps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Senders",
    "typeScriptTag": "senders",
    "description": "Get all the dedicated IPs for your account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/senders/domains",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Get the list of all your domains",
    "parameters": [],
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
    "url": "/senders/domains",
    "method": "createNewDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Create a new domain",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "mycompany.com"
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
    "url": "/senders/domains/{domainName}",
    "method": "deleteDomain",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Delete a domain",
    "parameters": [
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "Domain name",
        "example": "DOMAINNAME"
      }
    ],
    "responses": [
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
    "url": "/senders/domains/{domainName}",
    "method": "validateConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Validate domain configuration",
    "parameters": [
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "Domain name",
        "example": "DOMAINNAME"
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
    "url": "/senders/domains/{domainName}/authenticate",
    "method": "authenticateDomain",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Domains",
    "typeScriptTag": "domains",
    "description": "Authenticate a domain",
    "parameters": [
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "Domain name",
        "example": "DOMAINNAME"
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
    "url": "/webhooks",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get all webhooks",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": "Filter on webhook type",
        "default": "transactional"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of webhook creation",
        "default": "desc"
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
    "url": "/webhooks",
    "method": "createHook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a webhook",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Webhook triggered on unsubscription"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "http://requestb.in/173lyyx1"
      },
      {
        "name": "events",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "marketing",
        "default": "transactional"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "example.com"
      },
      {
        "name": "batched",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "auth",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "type": "bearer",
          "token": "test-auth-token1234"
        }
      },
      {
        "name": "headers",
        "schema": "array",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/{webhookId}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "integer",
        "required": true,
        "description": "Id of the webhook",
        "example": 0
      }
    ],
    "responses": [
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
    "url": "/webhooks/{webhookId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get a webhook details",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "integer",
        "required": true,
        "description": "Id of the webhook",
        "example": 0
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
    "url": "/webhooks/{webhookId}",
    "method": "updateWebhookById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update a webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "integer",
        "required": true,
        "description": "Id of the webhook",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Webhook triggered on contact hardbounce"
      },
      {
        "name": "url",
        "schema": "string",
        "description": "",
        "example": "http://requestb.in/173lyyx1"
      },
      {
        "name": "events",
        "schema": "array",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": "",
        "example": "example.com"
      },
      {
        "name": "batched",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "auth",
        "schema": "object",
        "description": "",
        "example": {
          "type": "bearer",
          "token": "test-auth-token1234"
        }
      },
      {
        "name": "headers",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/webhooks/export",
    "method": "exportAllEvents",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Export all webhook events",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/reseller/children",
    "method": "listChildrenAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Get the list of all children accounts",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents for child accounts information per page",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document in the page",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/reseller/children",
    "method": "createChild",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Creates a reseller child",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "josh.cruise@example.com"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Josh"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Cruise"
      },
      {
        "name": "companyName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Your Company"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Pa55w0rd65"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "en"
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
      }
    ]
  },
  {
    "url": "/reseller/children/{childIdentifier}",
    "method": "deleteChildByIdentifier",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Delete a single reseller child based on the child identifier supplied",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or child id of reseller's child",
        "example": "CHILDIDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reseller/children/{childIdentifier}",
    "method": "getChildDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Get a child account's details",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or id of reseller's child",
        "example": "CHILDIDENTIFIER"
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reseller/children/{childIdentifier}",
    "method": "updateChildInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Update info of reseller's child based on the child identifier supplied",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or id of reseller's child",
        "example": "CHILDIDENTIFIER"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "josh.cruise@example.com"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "Josh"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "Cruise"
      },
      {
        "name": "companyName",
        "schema": "string",
        "description": "",
        "example": "Your Company"
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "Pa55w0rd65"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reseller/children/{childIdentifier}/accountStatus",
    "method": "updateChildAccountStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Update info of reseller's child account status based on the identifier supplied",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or id of reseller's child",
        "example": "CHILDIDENTIFIER"
      },
      {
        "name": "transactionalEmail",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "transactionalSms",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "marketingAutomation",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "smsCampaign",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reseller/children/{childIdentifier}/accountCreationStatus",
    "method": "getChildAccountCreationStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Get the status of a reseller's child account creation, whether it is successfully created (https://developers.brevo.com/ or not based on the childIdentifier supplied",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or id of reseller's child",
        "example": "CHILDIDENTIFIER"
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reseller/children/{childIdentifier}/ips/associate",
    "method": "associateDedicatedIpToChild",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Associate a dedicated IP to the child",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or id of reseller's child",
        "example": "CHILDIDENTIFIER"
      },
      {
        "name": "ip",
        "schema": "string",
        "description": "",
        "example": "123.65.8.22"
      }
    ],
    "responses": [
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
    "url": "/reseller/children/{childIdentifier}/ips/dissociate",
    "method": "dissociateIpToChild",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Dissociate a dedicated IP to the child",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or id of reseller's child",
        "example": "CHILDIDENTIFIER"
      },
      {
        "name": "ip",
        "schema": "string",
        "description": "",
        "example": "123.65.8.22"
      }
    ],
    "responses": [
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
    "url": "/reseller/children/{childIdentifier}/credits/add",
    "method": "addChildCredits",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Add Email and/or SMS credits to a specific child account",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or id of reseller's child",
        "example": "CHILDIDENTIFIER"
      },
      {
        "name": "sms",
        "schema": "integer",
        "description": "",
        "example": 450
      },
      {
        "name": "email",
        "schema": "integer",
        "description": "",
        "example": 1200
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reseller/children/{childIdentifier}/credits/remove",
    "method": "removeCreditsFromChild",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Remove Email and/or SMS credits from a specific child account",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or id of reseller's child",
        "example": "CHILDIDENTIFIER"
      },
      {
        "name": "sms",
        "schema": "integer",
        "description": "",
        "example": 300
      },
      {
        "name": "email",
        "schema": "integer",
        "description": "",
        "example": 500
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reseller/children/{childIdentifier}/domains",
    "method": "getChildDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Get all sender domains for a specific child account",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or id of reseller's child",
        "example": "CHILDIDENTIFIER"
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reseller/children/{childIdentifier}/domains",
    "method": "createChildDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Create a domain for a child account",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or id of reseller's child",
        "example": "CHILDIDENTIFIER"
      },
      {
        "name": "domain",
        "schema": "string",
        "description": "",
        "example": "mychilddomain.com"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reseller/children/{childIdentifier}/domains/{domainName}",
    "method": "deleteSenderDomainByChildIdentifierAndDomainName",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Delete the sender domain of the reseller child based on the childIdentifier and domainName passed",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or id of reseller's child",
        "example": "CHILDIDENTIFIER"
      },
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "Pass the existing domain that needs to be deleted",
        "example": "DOMAINNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reseller/children/{childIdentifier}/domains/{domainName}",
    "method": "updateSenderDomain",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Update the sender domain of reseller's child based on the childIdentifier and domainName passed",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or id of reseller's child",
        "example": "CHILDIDENTIFIER"
      },
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "Pass the existing domain that needs to be updated",
        "example": "DOMAINNAME"
      },
      {
        "name": "domain",
        "schema": "string",
        "description": "",
        "example": "myupdateddomain.com"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reseller/children/{childIdentifier}/auth",
    "method": "getSessionToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reseller",
    "typeScriptTag": "reseller",
    "description": "Get session token to access Brevo (https://developers.brevo.com/",
    "parameters": [
      {
        "name": "childIdentifier",
        "schema": "string",
        "required": true,
        "description": "Either auth key or id of reseller's child",
        "example": "CHILDIDENTIFIER"
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/account",
    "method": "informationDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Get your account information, plan and credits details",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/organization/activities",
    "method": "getUserActivityLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Get user activity logs",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Mandatory if endDate is used. Enter start date in UTC date (https://developers.brevo.com/ format to filter the activity in your account. Maximum time period that can be selected is one month. Additionally, you can retrieve activity logs from the past 12 months from the date of your search."
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Mandatory if startDate is used. Enter end date in UTC date (https://developers.brevo.com/ format to filter the activity in your account. Maximum time period that can be selected is one month."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of documents per page",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the first document in the page.",
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
      }
    ]
  },
  {
    "url": "/organization/invited/users",
    "method": "getAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get the list of all your users",
    "parameters": [],
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
    "url": "/organization/user/{email}/permissions",
    "method": "checkPermission",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Check user permission",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "Email of the invited user.",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Check user permission"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/organization/user/invitation/revoke/{email}",
    "method": "revokePermissionByEmail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Revoke user permission",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "Email of the invited user.",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/organization/user/invitation/{action}/{email}",
    "method": "resendInvitation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Resend / Cancel invitation",
    "parameters": [
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "action",
        "example": "ACTION"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "Email of the invited user.",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/organization/user/invitation/send",
    "method": "sendInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Send invitation to user",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "inviteuser@example.com"
      },
      {
        "name": "all_features_access",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "privileges",
        "schema": "array",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/organization/user/update/permissions",
    "method": "updatePermissions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Update permission for a user",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "inviteuser@example.com"
      },
      {
        "name": "all_features_access",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "privileges",
        "schema": "array",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/processes",
    "method": "getAllProcesses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Process",
    "typeScriptTag": "process",
    "description": "Return all the processes for your account",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number limitation for the result returned",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Beginning point in the list to retrieve from.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/processes/{processId}",
    "method": "getProcessInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Process",
    "typeScriptTag": "process",
    "description": "Return the informations for a process",
    "parameters": [
      {
        "name": "processId",
        "schema": "integer",
        "required": true,
        "description": "Id of the process",
        "example": 0
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
    "url": "/inbound/events",
    "method": "getAllEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inbound Parsing",
    "typeScriptTag": "inboundParsing",
    "description": "Get the list of all the events for the received emails.",
    "parameters": [
      {
        "name": "sender",
        "schema": "string",
        "required": false,
        "description": "Email address of the sender."
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Mandatory if endDate is used. Starting date (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.SSSZ) from which you want to fetch the list. Maximum time period that can be selected is one month."
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Mandatory if startDate is used. Ending date (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.SSSZ) till which you want to fetch the list. Maximum time period that can be selected is one month."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of documents returned per page",
        "default": 100
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the first document on the page",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation",
        "default": "desc"
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
    "url": "/inbound/events/{uuid}",
    "method": "getEmailEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inbound Parsing",
    "typeScriptTag": "inboundParsing",
    "description": "Fetch all events history for one particular received email.",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "UUID to fetch events specific to recieved email",
        "example": "UUID"
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
    "url": "/inbound/attachments/{downloadToken}",
    "method": "getAttachmentByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inbound Parsing",
    "typeScriptTag": "inboundParsing",
    "description": "Retrieve inbound attachment with download token.",
    "parameters": [
      {
        "name": "downloadToken",
        "schema": "string",
        "required": true,
        "description": "Token to fetch a particular attachment",
        "example": "DOWNLOADTOKEN"
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
    "url": "/corporate/subAccount",
    "method": "listSubAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Get the list of all the sub-accounts of the master account.",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "required": true,
        "description": "Index of the first sub-account in the page",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "Number of sub-accounts to be displayed on each page",
        "example": 0
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
    "url": "/corporate/subAccount",
    "method": "createSubAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Create a new sub-account under a master account.",
    "parameters": [
      {
        "name": "companyName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/corporate/subAccount/{id}",
    "method": "deleteSubAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Delete a sub-account",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the sub-account organization to be deleted",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned when sub-account is deleted succesfully"
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
    "url": "/corporate/subAccount/{id}",
    "method": "getSubAccountDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Get sub-account details",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the sub-account organization",
        "example": 0
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
    "url": "/corporate/subAccount/{id}/plan",
    "method": "updateSubAccountPlan",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Update sub-account plan",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the sub-account organization",
        "example": 0
      },
      {
        "name": "credits",
        "schema": "object",
        "description": ""
      },
      {
        "name": "features",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/corporate/ssoToken",
    "method": "generateSsoToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Generate SSO token to access admin account",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "vipin+ent-user@brevo.com"
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
    "url": "/corporate/subAccount/ssoToken",
    "method": "generateSsoToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Generate SSO token to access sub-account",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 3232323
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "vipin+subaccount@brevo.com"
      },
      {
        "name": "target",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "contacts"
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://app.brevo.com/senders/domain/list"
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
    "url": "/corporate/masterAccount",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Get the details of requested master account",
    "parameters": [],
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
    "url": "/corporate/subAccount/key",
    "method": "createSubAccountKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Create an API key for a sub-account",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 3232323
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Api Key"
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
    "url": "/corporate/subAccount/{id}/applications/toggle",
    "method": "enableDisable",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Enable/disable sub-account application(https://developers.brevo.com/",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the sub-account organization (https://developers.brevo.com/",
        "example": 0
      },
      {
        "name": "inbox",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "whatsapp",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "automation",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "email-campaigns",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "sms-campaigns",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "landing-pages",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "transactional-emails",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "transactional-sms",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "facebook-ads",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "web-push",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "meetings",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "conversations",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "crm",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/corporate/group",
    "method": "createGroupOfSubAccounts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Create a group of sub-accounts",
    "parameters": [
      {
        "name": "groupName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My group"
      },
      {
        "name": "subAccountIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          234322,
          325553,
          893432
        ]
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
    "url": "/corporate/group/{id}",
    "method": "deleteGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Delete a group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the group",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Group deleted"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/corporate/group/{id}",
    "method": "getGroupDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "GET a group details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the group of sub-organization",
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
    "url": "/corporate/group/{id}",
    "method": "updateGroupSubAccounts",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Update a group of sub-accounts",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the group",
        "example": "ID"
      },
      {
        "name": "groupName",
        "schema": "string",
        "description": "",
        "example": "My group"
      },
      {
        "name": "subAccountIds",
        "schema": "array",
        "description": "",
        "example": [
          234322,
          325553,
          893432
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/corporate/group/unlink/{groupId}/subAccounts",
    "method": "unlinkSubAccountFromGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Delete sub-account from group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Group id",
        "example": "GROUPID"
      },
      {
        "name": "subAccountIds",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          423432,
          234323,
          87678
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/corporate/user/invitation/send",
    "method": "sendInvitationToAdminUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Send invitation to an admin user",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "inviteuser@example.com"
      },
      {
        "name": "all_features_access",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "groupIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "2baxxxxxxxxxxxxxxxxxxxxxcaa",
          "65axxxxxxxxxxxxxxxxxxxxxc5a"
        ]
      },
      {
        "name": "privileges",
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
      }
    ]
  },
  {
    "url": "/corporate/user/invitation/{action}/{email}",
    "method": "resendCancelAdminUserInvitation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Resend / cancel admin user invitation",
    "parameters": [
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "Action to be performed (cancel / resend)",
        "example": "ACTION"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "Email address of the recipient",
        "example": "EMAIL"
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
    "url": "/corporate/user/revoke/{email}",
    "method": "revokeAdminUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Revoke an admin user",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "Email of the invited user",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User revoked"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/corporate/invited/users",
    "method": "listAdminUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Get the list of all admin users",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/corporate/user/{email}/permissions",
    "method": "checkAdminUserPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Check admin user permissions",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "Email of the invited user.",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Check admin user permissions"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/corporate/groups",
    "method": "listGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Master account",
    "typeScriptTag": "masterAccount",
    "description": "Get the list of groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get all Companies",
    "parameters": [
      {
        "name": "filters",
        "schema": "string",
        "description": "Filter by attrbutes. If you have filter for owner on your side please send it as {\"attributes.owner\":\"6299dcf3874a14eacbc65c46\"}"
      },
      {
        "name": "linkedContactsIds",
        "schema": "integer",
        "description": "Filter by linked contacts ids"
      },
      {
        "name": "linkedDealsIds",
        "schema": "string",
        "description": "Filter by linked Deals ids"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Index of the first document of the page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "The field used to sort field names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of companies"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies",
    "method": "createCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Create a company",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "company"
      },
      {
        "name": "attributes",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "domain": "https://example.com",
          "industry": "Fabric",
          "owner": "60e68d60582a3b006f524197"
        }
      },
      {
        "name": "countryCode",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 91
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Created company id"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{id}",
    "method": "deleteCompany",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Delete a company",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Company ID to delete",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "When company deleted"
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
    "url": "/companies/{id}",
    "method": "getCompanyById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get a company",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Get Company Details",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Company Details"
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
    "url": "/companies/{id}",
    "method": "updateCompany",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Update a company",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "company"
      },
      {
        "name": "attributes",
        "schema": "object",
        "description": "",
        "example": {
          "category": "label_2",
          "domain": "xyz",
          "date": "2022-05-04T00:00:00+05:30",
          "industry": "flipkart",
          "number_of_contacts": 1,
          "number_of_employees": 100,
          "owner": "5b1a17d914b73d35a76ca0c7",
          "phone_number": "81718441912",
          "revenue": 10000.34222
        }
      },
      {
        "name": "countryCode",
        "schema": "integer",
        "description": "",
        "example": 91
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Company Details"
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
    "url": "/companies/attributes",
    "method": "getAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get company attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of company attributes"
      }
    ]
  },
  {
    "url": "/companies/link-unlink/{id}",
    "method": "linkUnlinkWithContactDeal",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Link and Unlink company with contact and deal",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "linkContactIds",
        "schema": "array",
        "description": "",
        "example": [
          1,
          2,
          3
        ]
      },
      {
        "name": "unlinkContactIds",
        "schema": "array",
        "description": "",
        "example": [
          4,
          5,
          6
        ]
      },
      {
        "name": "linkDealsIds",
        "schema": "array",
        "description": "",
        "example": [
          "61a5ce58c5d4795761045990",
          "61a5ce58c5d4795761045991",
          "61a5ce58c5d4795761045992"
        ]
      },
      {
        "name": "unlinkDealsIds",
        "schema": "array",
        "description": "",
        "example": [
          "61a5ce58c5d4795761045994",
          "61a5ce58c5d479576104595",
          "61a5ce58c5d4795761045996"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully linked/unlinked contacts/deals with the company."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/pipeline/details",
    "method": "getPipelineStages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Get pipeline stages",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of stages"
      }
    ]
  },
  {
    "url": "/crm/pipeline/details/{pipelineID}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Get a pipeline",
    "parameters": [
      {
        "name": "pipelineId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIPELINEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of pipeline"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/pipeline/details/all",
    "method": "getAllPipelines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Get all pipelines",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of pipeline"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/attributes/deals",
    "method": "getAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Get deal attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of deal attributes"
      }
    ]
  },
  {
    "url": "/crm/deals",
    "method": "getAllDeals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Get all deals",
    "parameters": [
      {
        "name": "filters[attributesDealName]",
        "schema": "string",
        "description": "Filter by attributes. If you have a filter for the owner on your end, please send it as filters[attributes.deal_owner] and utilize the account email for the filtering."
      },
      {
        "name": "filters[linkedCompaniesIds]",
        "schema": "string",
        "description": "Filter by linked companies ids"
      },
      {
        "name": "filters[linkedContactsIds]",
        "schema": "string",
        "description": "Filter by linked companies ids"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document of the page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of Deals"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/deals",
    "method": "createNewDeal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Create a deal",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Deal: Connect with company"
      },
      {
        "name": "attributes",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "deal_owner": "6093d2425a9b436e9519d034",
          "amount": 12
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created deal id"
      },
      {
        "statusCode": "400",
        "description": "Returned when invalid data posted"
      }
    ]
  },
  {
    "url": "/crm/deals/{id}",
    "method": "deleteDeal",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Delete a deal",
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
        "statusCode": "204",
        "description": "Returned when item deleted"
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
    "url": "/crm/deals/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Get a deal",
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
        "description": "Deal Details"
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
    "url": "/crm/deals/{id}",
    "method": "updateDealById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Update a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Deal: Connect with client"
      },
      {
        "name": "attributes",
        "schema": "object",
        "description": "",
        "example": {
          "deal_owner": "6093d2425a9b436e9519d034",
          "amount": 12
        }
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Deal updated successfully"
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
    "url": "/crm/deals/link-unlink/{id}",
    "method": "linkUnlinkPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Link and Unlink a deal with contacts and companies",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "linkContactIds",
        "schema": "array",
        "description": "",
        "example": [
          1,
          2,
          3
        ]
      },
      {
        "name": "unlinkContactIds",
        "schema": "array",
        "description": "",
        "example": [
          4,
          5,
          6
        ]
      },
      {
        "name": "linkCompanyIds",
        "schema": "array",
        "description": "",
        "example": [
          "61a5ce58c5d4795761045990",
          "61a5ce58c5d4795761045991",
          "61a5ce58c5d4795761045992"
        ]
      },
      {
        "name": "unlinkCompanyIds",
        "schema": "array",
        "description": "",
        "example": [
          "61a5ce58c5d4795761045994",
          "61a5ce58c5d479576104595",
          "61a5ce58c5d4795761045996"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully linked/unlinked contacts/companies with the deal."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/tasktypes",
    "method": "getAllTaskTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get all task types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Task types details"
      }
    ]
  },
  {
    "url": "/crm/tasks",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get all tasks",
    "parameters": [
      {
        "name": "filter[type]",
        "schema": "string",
        "description": "Filter by task type (https://developers.brevo.com/"
      },
      {
        "name": "filter[status]",
        "schema": "string",
        "description": "Filter by task status"
      },
      {
        "name": "filter[date]",
        "schema": "string",
        "description": "Filter by date"
      },
      {
        "name": "filter[assignTo]",
        "schema": "string",
        "description": "Filter by the \"assignTo\" ID. You can utilize account emails for the \"assignTo\" attribute."
      },
      {
        "name": "filter[contacts]",
        "schema": "string",
        "description": "Filter by contact ids"
      },
      {
        "name": "filter[deals]",
        "schema": "string",
        "description": "Filter by deals ids"
      },
      {
        "name": "filter[companies]",
        "schema": "string",
        "description": "Filter by companies ids"
      },
      {
        "name": "dateFrom",
        "schema": "integer",
        "description": "dateFrom to date range filter type (timestamp in milliseconds)"
      },
      {
        "name": "dateTo",
        "schema": "integer",
        "description": "dateTo to date range filter type (timestamp in milliseconds)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document of the page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 50
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "The field used to sort field names.",
        "example": "name"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of tasks"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/tasks",
    "method": "createNewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Create a task",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Task: Connect with client"
      },
      {
        "name": "duration",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 600000
      },
      {
        "name": "taskTypeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "61a5cd07ca1347c82306ad09"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2021-11-01T17:44:54.668Z"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "In communication with client for resolution of queries."
      },
      {
        "name": "done",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "assignToId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "5faab4b7f195bb3c4c31e62a"
      },
      {
        "name": "contactsIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          1,
          2,
          3
        ]
      },
      {
        "name": "dealsIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "61a5ce58c5d4795761045990",
          "61a5ce58c5d4795761045991",
          "61a5ce58c5d4795761045992"
        ]
      },
      {
        "name": "companiesIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "61a5ce58c5d4795761045990",
          "61a5ce58c5d4795761045991",
          "61a5ce58c5d4795761045992"
        ]
      },
      {
        "name": "reminder",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Task Details"
      },
      {
        "statusCode": "400",
        "description": "Returned when invalid data posted"
      }
    ]
  },
  {
    "url": "/crm/tasks/{id}",
    "method": "removeTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Delete a task",
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
        "statusCode": "204",
        "description": "Returned when item deleted"
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
    "url": "/crm/tasks/{id}",
    "method": "getTaskById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get a task",
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
        "description": "Task Details"
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
    "url": "/crm/tasks/{id}",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Update a task",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Task: Connect with client"
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": "",
        "example": 600000
      },
      {
        "name": "taskTypeId",
        "schema": "string",
        "description": "",
        "example": "61a5cd07ca1347c82306ad09"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "",
        "example": "2021-11-01T17:44:54.668Z"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": "",
        "example": "In communication with client for resolution of queries."
      },
      {
        "name": "done",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "assignToId",
        "schema": "string",
        "description": "",
        "example": "5faab4b7f195bb3c4c31e62a"
      },
      {
        "name": "contactsIds",
        "schema": "array",
        "description": "",
        "example": [
          1,
          2,
          3
        ]
      },
      {
        "name": "dealsIds",
        "schema": "array",
        "description": "",
        "example": [
          "61a5ce58c5d4795761045990",
          "61a5ce58c5d4795761045991",
          "61a5ce58c5d4795761045992"
        ]
      },
      {
        "name": "companiesIds",
        "schema": "array",
        "description": "",
        "example": [
          "61a5ce58c5d4795761045990",
          "61a5ce58c5d4795761045991",
          "61a5ce58c5d4795761045992"
        ]
      },
      {
        "name": "reminder",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Task updated succussfully"
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
    "url": "/crm/notes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Get all notes",
    "parameters": [
      {
        "name": "entity",
        "schema": "string",
        "description": "Filter by note entity type"
      },
      {
        "name": "entityIds",
        "schema": "string",
        "description": "Filter by note entity IDs"
      },
      {
        "name": "dateFrom",
        "schema": "integer",
        "description": "dateFrom to date range filter type (timestamp in milliseconds)"
      },
      {
        "name": "dateTo",
        "schema": "integer",
        "description": "dateTo to date range filter type (timestamp in milliseconds)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document of the page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 50
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of notes"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/notes",
    "method": "createNewNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Create a note",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "In communication with client for resolution of queries."
      },
      {
        "name": "contactIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          247,
          1,
          2
        ]
      },
      {
        "name": "dealIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "61a5ce58c5d4795761045990",
          "61a5ce58c5d4795761045991"
        ]
      },
      {
        "name": "companyIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "61a5ce58c5d4795761045990",
          "61a5ce58c5d4795761045991"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Updated Note ID"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/notes/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Delete a note",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Note ID to delete",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned when item deleted"
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
    "url": "/crm/notes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Get a note",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Note ID to get",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Note Details"
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
    "url": "/crm/notes/{id}",
    "method": "updateNoteById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Update a note",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Note ID to update",
        "example": "ID"
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "In communication with client for resolution of queries."
      },
      {
        "name": "contactIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          247,
          1,
          2
        ]
      },
      {
        "name": "dealIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "61a5ce58c5d4795761045990",
          "61a5ce58c5d4795761045991"
        ]
      },
      {
        "name": "companyIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "61a5ce58c5d4795761045990",
          "61a5ce58c5d4795761045991"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Note updated successfully"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/files",
    "method": "getAllFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get all files",
    "parameters": [
      {
        "name": "entity",
        "schema": "string",
        "required": false,
        "description": "Filter by file entity type"
      },
      {
        "name": "entityIds",
        "schema": "string",
        "required": false,
        "description": "Filter by file entity IDs"
      },
      {
        "name": "dateFrom",
        "schema": "integer",
        "required": false,
        "description": "dateFrom to date range filter type (timestamp in milliseconds)"
      },
      {
        "name": "dateTo",
        "schema": "integer",
        "required": false,
        "description": "dateTo to date range filter type (timestamp in milliseconds)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the first document of the page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of documents per page",
        "default": 50
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of files"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/files",
    "method": "uploadFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Upload a file",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "dealId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "File data that is uploaded"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/crm/files/{id}",
    "method": "deleteFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Delete a file",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "File id to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned when file is deleted."
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
    "url": "/crm/files/{id}",
    "method": "downloadFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Download a file",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "File id to download.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Downloadable file link"
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
    "url": "/crm/files/{id}/data",
    "method": "getFileDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get file details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "File id to get file data.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File data that is uploaded"
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
    "url": "/conversations/messages",
    "method": "sendMessageAsAgent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Send a message as an agent",
    "parameters": [
      {
        "name": "visitorId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "text",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "agentId",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "receivedFrom",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "agentEmail",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "agentName",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "a Conversations message"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/conversations/messages/{id}",
    "method": "deleteMessageSentByAgent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Delete a message sent by an agent",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the message",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The message was deleted from the conversation"
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
    "url": "/conversations/messages/{id}",
    "method": "getMessageById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get a message",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the message",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "a Conversations message"
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
    "url": "/conversations/messages/{id}",
    "method": "updateAgentMessage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Update a message sent by an agent",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the message",
        "example": "ID"
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "a Conversations message"
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
    "url": "/conversations/pushedMessages",
    "method": "sendAutomatedMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Send an automated message to a visitor",
    "parameters": [
      {
        "name": "visitorId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "text",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "agentId",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "a Conversations message"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/conversations/pushedMessages/{id}",
    "method": "deleteAutomatedMessage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Delete an automated message",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the message",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The message was deleted from the conversation"
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
    "url": "/conversations/pushedMessages/{id}",
    "method": "getAutomatedMessage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get an automated message",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the message sent previously",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "a Conversations message"
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
    "url": "/conversations/pushedMessages/{id}",
    "method": "updatePushedMessage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Update an automated message",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the message",
        "example": "ID"
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "a Conversations message"
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
    "url": "/conversations/agentOnlinePing",
    "method": "setAgentOnlineStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Sets agent’s status to online for 2-3 minutes",
    "parameters": [
      {
        "name": "agentId",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "receivedFrom",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "agentEmail",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "agentName",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Status of the agent was set successfully. Response body will be empty."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/ecommerce/activate",
    "method": "activateApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Activate the eCommerce app",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "eCommerce activation is in process, please wait for 5 minutes."
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
    "url": "/orders",
    "method": "getOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Get order details",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document in the page",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "description": "Filter (https://developers.brevo.com/ the orders modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.**\n"
      },
      {
        "name": "createdSince",
        "schema": "string",
        "description": "Filter (https://developers.brevo.com/ the orders created after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.**\n"
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
    "url": "/orders/status",
    "method": "manageOrderStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Managing the status of the order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "14"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2021-07-29T20:59:23.383Z"
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2021-07-30T10:59:23.383Z"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "completed"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 308.42
      },
      {
        "name": "products",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "example@brevo.com"
      },
      {
        "name": "billing",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "coupons",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "EASTER15OFF"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/status/batch",
    "method": "createOrderBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Create orders in batch",
    "parameters": [
      {
        "name": "orders",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "notifyUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://en.wikipedia.org/wiki/Webhook"
      },
      {
        "name": "historical",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/events",
    "method": "trackInteraction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "Create an event",
    "parameters": [
      {
        "name": "event_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "video_played"
      },
      {
        "name": "event_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2024-02-06T20:59:23.383Z"
      },
      {
        "name": "identifiers",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "contact_properties",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "AGE": 32,
          "GENDER": "FEMALE"
        }
      },
      {
        "name": "event_properties",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "video_title": "Brevo — The most approachable CRM suite",
          "vide_description": "Create your free account today!",
          "duration": 142,
          "autoplayed": false,
          "upload_date": "2023-11-24T12:09:10+01:00"
        }
      }
    ],
    "responses": [
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
    "url": "/categories",
    "method": "getAllCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Return all your categories",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document in the page",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "Filter by category ids"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Filter by category name"
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "description": "Filter (https://developers.brevo.com/ the categories modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.**\n"
      },
      {
        "name": "createdSince",
        "schema": "string",
        "description": "Filter (https://developers.brevo.com/ the categories created after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.**\n"
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
    "url": "/categories",
    "method": "createCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Create/Update a category",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CAT123"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Electronics"
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "http://mydomain.com/category/electronics"
      },
      {
        "name": "updateEnabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "deletedAt",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-05-12T12:30:00.000Z"
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
    "url": "/categories/{id}",
    "method": "getCategoryDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Get a category details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Category ID",
        "example": "ID"
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
    "url": "/categories/batch",
    "method": "createCategoriesBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Create categories in batch",
    "parameters": [
      {
        "name": "categories",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "updateEnabled",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/products",
    "method": "listAllProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Return all your products",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents per page",
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document in the page",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "Filter by product ids"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Filter by product name, minimum 3 characters should be present for search"
      },
      {
        "name": "price[lte]",
        "schema": "number",
        "description": "Price filter for products less than and equals to particular amount"
      },
      {
        "name": "price[gte]",
        "schema": "number",
        "description": "Price filter for products greater than and equals to particular amount"
      },
      {
        "name": "price[lt]",
        "schema": "number",
        "description": "Price filter for products less than particular amount"
      },
      {
        "name": "price[gt]",
        "schema": "number",
        "description": "Price filter for products greater than particular amount"
      },
      {
        "name": "price[eq]",
        "schema": "number",
        "description": "Price filter for products equals to particular amount"
      },
      {
        "name": "price[ne]",
        "schema": "number",
        "description": "Price filter for products not equals to particular amount"
      },
      {
        "name": "categories",
        "schema": "array",
        "description": "Filter by product categories"
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "description": "Filter (https://developers.brevo.com/ the orders modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.**\n"
      },
      {
        "name": "createdSince",
        "schema": "string",
        "description": "Filter (https://developers.brevo.com/ the orders created after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.**\n"
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
    "url": "/products",
    "method": "createProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Create/Update a product",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "P11"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Iphone 11"
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "http://mydomain.com/product/electronics/product1"
      },
      {
        "name": "imageUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "http://mydomain.com/product-absoulte-url/img.jpeg"
      },
      {
        "name": "sku",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "price",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "parentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metaInfo",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "description": "Shoes for sports",
          "brand": "addidas"
        }
      },
      {
        "name": "updateEnabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "deletedAt",
        "schema": "string",
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
        "statusCode": "204",
        "description": "Product updated"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/{id}",
    "method": "getProductDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Get a product's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Product ID",
        "example": "ID"
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
    "url": "/products/batch",
    "method": "createProductsBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ecommerce",
    "typeScriptTag": "ecommerce",
    "description": "Create products in batch",
    "parameters": [
      {
        "name": "products",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "updateEnabled",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/couponCollections",
    "method": "listCouponCollections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coupons",
    "typeScriptTag": "coupons",
    "description": "Get all your coupon collections",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of documents returned per page",
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Index of the first document on the page",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort the results by creation time in ascending/descending order",
        "default": "desc"
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
    "url": "/couponCollections",
    "method": "createCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Coupons",
    "typeScriptTag": "coupons",
    "description": "Create а coupon collection",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SummerPromotions"
      },
      {
        "name": "defaultCoupon",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10 OFF"
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
    "url": "/couponCollections/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coupons",
    "typeScriptTag": "coupons",
    "description": "Get a coupon collection by id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the collection to return",
        "example": "ID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/couponCollections/{id}",
    "method": "updateCouponCollectionById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Coupons",
    "typeScriptTag": "coupons",
    "description": "Update a coupon collection by id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of the collection to update",
        "example": "ID"
      },
      {
        "name": "defaultCoupon",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10 OFF"
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
    "url": "/coupons",
    "method": "createCouponCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Coupons",
    "typeScriptTag": "coupons",
    "description": "Create coupons for a coupon collection",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "23befbae-1505-47a8-bd27-e30ef739f32c"
      },
      {
        "name": "coupons",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
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
    "url": "/whatsapp/sendMessage",
    "method": "sendMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional WhatsApp",
    "typeScriptTag": "transactionalWhatsApp",
    "description": "Send a WhatsApp message",
    "parameters": [],
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
    "url": "/whatsapp/statistics/events",
    "method": "getActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional WhatsApp",
    "typeScriptTag": "transactionalWhatsApp",
    "description": "Get all your WhatsApp activity (unaggregated events)",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number limitation for the result returned",
        "default": 2500
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Beginning point in the list to retrieve from",
        "default": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "**Mandatory if endDate is used.** Starting date of the report (https://developers.brevo.com/. Must be lower than equal to endDate\n"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "**Mandatory if startDate is used.** Ending date of the report (https://developers.brevo.com/. Must be greater than equal to startDate\n"
      },
      {
        "name": "days",
        "schema": "integer",
        "description": "Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_\n"
      },
      {
        "name": "contactNumber",
        "schema": "string",
        "description": "Filter results for specific contact (WhatsApp Number with country code. Example, 85264318721)"
      },
      {
        "name": "event",
        "schema": "string",
        "description": "Filter the report for a specific event type"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed",
        "default": "desc"
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
    "url": "/feeds",
    "method": "getAllFeeds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "External Feeds",
    "typeScriptTag": "externalFeeds",
    "description": "Fetch all external feeds",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Can be used to filter records by search keyword on feed name",
        "example": "search"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Mandatory if `endDate` is used. Starting date (https://developers.brevo.com/ from which you want to fetch the list. Can be maximum 30 days older than current date.",
        "example": "2022-09-04"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Mandatory if `startDate` is used. Ending date (https://developers.brevo.com/ till which you want to fetch the list. Maximum time period that can be selected is one month.",
        "example": "2022-10-01"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed.",
        "default": "desc"
      },
      {
        "name": "authType",
        "schema": "string",
        "required": false,
        "description": "Filter the records by `authType` of the feed."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of documents returned per page.",
        "example": 100,
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Index of the first document on the page.",
        "example": 0,
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/feeds",
    "method": "createFeed",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "External Feeds",
    "typeScriptTag": "externalFeeds",
    "description": "Create an external feed",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "New feed"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "http://requestb.in/173lyyx1"
      },
      {
        "name": "authType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "noAuth"
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "user"
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "password"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      },
      {
        "name": "headers",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "name": "header1",
            "value": "value1"
          },
          {
            "name": "header2",
            "value": "value2"
          }
        ]
      },
      {
        "name": "maxRetries",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 5,
        "default": 5
      },
      {
        "name": "cache",
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
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/feeds/{uuid}",
    "method": "deleteFeedByUuid",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "External Feeds",
    "typeScriptTag": "externalFeeds",
    "description": "Delete an external feed",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the feed to delete",
        "example": "38f351fb-6e77-4b38-979a-a2465260449e"
      }
    ],
    "responses": [
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
    "url": "/feeds/{uuid}",
    "method": "getFeedByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "External Feeds",
    "typeScriptTag": "externalFeeds",
    "description": "Get an external feed by UUID",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the feed to fetch",
        "example": "38f351fb-6e77-4b38-979a-a2465260449e"
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
    "url": "/feeds/{uuid}",
    "method": "updateFeedByUuid",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "External Feeds",
    "typeScriptTag": "externalFeeds",
    "description": "Update an external feed",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "UUID of the feed to update",
        "example": "38f351fb-6e77-4b38-979a-a2465260449e"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "New feed"
      },
      {
        "name": "url",
        "schema": "string",
        "description": "",
        "example": "http://requestb.in/173lyyx1"
      },
      {
        "name": "authType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": "",
        "example": "user"
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "password"
      },
      {
        "name": "token",
        "schema": "string",
        "description": "",
        "example": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      },
      {
        "name": "headers",
        "schema": "array",
        "description": "",
        "example": [
          {
            "name": "header1",
            "value": "value1"
          },
          {
            "name": "header2",
            "value": "value2"
          }
        ]
      },
      {
        "name": "maxRetries",
        "schema": "integer",
        "description": "",
        "example": 5,
        "default": 5
      },
      {
        "name": "cache",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "400",
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
      apiTitle="Brevo API"
      apiBaseUrl="https://api.brevo.com/v3"
      apiVersion="3.0.0"
      endpoints={161}
      sdkMethods={227}
      schemas={254}
      parameters={793}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brevo/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brevo/openapi.yaml"
      developerDocumentation="developers.brevo.com/"
    />
  );
}
  