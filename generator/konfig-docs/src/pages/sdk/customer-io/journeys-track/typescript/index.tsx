import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function CustomerIoJourneysTrackTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="customer-io-journeys-track-typescript-sdk"
      metaDescription={`Customer.io is a versatile marketing automation tool for sending relevant messages based on behavior across web and mobile products.

Impersonal messages lead to bad experiences. That's why we use real-time data to help you deliver the right message, exactly when it's needed — like sending an event reminder over SMS or the perfect onboarding email.

Our robust platform enables you to:
- Automate your product messaging, with the ability to build, test, and send messages from one platform.
- Create and manage newsletters, transactional messages, and behavioral messages
- Do more with your behavior and data -- connect our powerful segmentation and automation engine with other apps to drive user behavior and save time.

Learn more: https://customer.io`}
      company="Customer.io"
      serviceName="Journeys Track"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/journeys-track/logo.png"
      companyKebabCase="customer-io"
      clientNameCamelCase="customerIoJourneysTrack"
      homepage="customer.io"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/journeys-track/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/journeys-track/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["automation","marketing","messaging"]}
      methods={[
  {
    "url": "/api/v1/accounts/region",
    "method": "findAccountRegion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "trackRegion",
    "typeScriptTag": "trackRegion",
    "description": "Find your account region",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Your credentials are not valid."
      }
    ]
  },
  {
    "url": "/api/v1/customers/{identifier}",
    "method": "removeCustomer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Track Customers",
    "typeScriptTag": "trackCustomers",
    "description": "Delete a customer",
    "parameters": [
      {
        "name": "identifier",
        "schema": "undefined",
        "required": true,
        "description": "The unique value representing a person. The values you use to identify a person may be an `id`, `email` address, or the `cio_id` (when updating people), depending on your workspace settings. When you reference people by `cio_id`, you must prefix the value with `cio_`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      }
    ]
  },
  {
    "url": "/api/v1/customers/{identifier}",
    "method": "addOrUpdatePerson",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Track Customers",
    "typeScriptTag": "trackCustomers",
    "description": "Add or update a customer",
    "parameters": [
      {
        "name": "identifier",
        "schema": "undefined",
        "required": true,
        "description": "The unique value representing a person. The values you use to identify a person may be an `id`, `email` address, or the `cio_id` (when updating people), depending on your workspace settings. When you reference people by `cio_id`, you must prefix the value with `cio_`.\n"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anonymous_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "_update",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "cio_relationships",
        "schema": "object",
        "description": ""
      },
      {
        "name": "unsubscribed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "cio_subscription_preferences",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      }
    ]
  },
  {
    "url": "/api/v1/customers/{identifier}/devices",
    "method": "device",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Track Customers",
    "typeScriptTag": "trackCustomers",
    "description": "Add or update a customer device",
    "parameters": [
      {
        "name": "device",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      }
    ]
  },
  {
    "url": "/api/v1/customers/{identifier}/devices/{device_id}",
    "method": "device",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Track Customers",
    "typeScriptTag": "trackCustomers",
    "description": "Delete a customer device",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "A successful request returns an empty object response."
      }
    ]
  },
  {
    "url": "/api/v1/customers/{identifier}/suppress",
    "method": "suppressCustomerProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Track Customers",
    "typeScriptTag": "trackCustomers",
    "description": "Suppress a customer profile",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      }
    ]
  },
  {
    "url": "/api/v1/customers/{identifier}/unsuppress",
    "method": "unsuppressProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Track Customers",
    "typeScriptTag": "trackCustomers",
    "description": "Unsuppress a customer profile",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      }
    ]
  },
  {
    "url": "/unsubscribe/{delivery_id}",
    "method": "handleUnsubscribe",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Track Customers",
    "typeScriptTag": "trackCustomers",
    "description": "Custom unsubscribe handling",
    "parameters": [
      {
        "name": "unsubscribe",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "400",
        "description": "The `delivery_id` format is incorrect or the request is malformed."
      }
    ]
  },
  {
    "url": "/api/v1/customers/{identifier}/events",
    "method": "postCustomerEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Track Events",
    "typeScriptTag": "trackEvents",
    "description": "Track a customer event",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      }
    ]
  },
  {
    "url": "/api/v1/events",
    "method": "createAnonymousEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Track Events",
    "typeScriptTag": "trackEvents",
    "description": "Track an anonymous event",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      }
    ]
  },
  {
    "url": "/api/v1/forms/{form_id}/submit",
    "method": "submitFormResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Submit a form",
    "parameters": [
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "The identifier for a form. If Customer.io does not recognize the `form_id`, we create a new form connection (found on the *Data & Integrations* > *Forms* page). Use a value that makes sense to you, or something that you can trace to your backend system.",
        "example": "FORM_ID"
      },
      {
        "name": "data",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful requests do not return anything."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/merge_customers",
    "method": "mergePeople",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Track Customers",
    "typeScriptTag": "trackCustomers",
    "description": "Merge duplicate people",
    "parameters": [
      {
        "name": "primary",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "secondary",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      }
    ]
  },
  {
    "url": "/api/v1/metrics",
    "method": "reportMetrics",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Track Events",
    "typeScriptTag": "trackEvents",
    "description": "Report metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was received."
      }
    ]
  },
  {
    "url": "/api/v1/push/events",
    "method": "reportPushMetrics",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Track Events",
    "typeScriptTag": "trackEvents",
    "description": "Report push metrics",
    "parameters": [
      {
        "name": "delivery_id",
        "schema": "string",
        "description": "",
        "example": "RPILAgUBcRhIBqSfeiIwdIYJKxTY"
      },
      {
        "name": "event",
        "schema": "string",
        "description": ""
      },
      {
        "name": "device_id",
        "schema": "string",
        "description": "",
        "example": "CIO-Delivery-Token from the notification"
      },
      {
        "name": "timestamp",
        "schema": "integer",
        "description": "",
        "example": 1613063089
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request was received."
      }
    ]
  },
  {
    "url": "/api/v1/segments/{segment_id}/add_customers",
    "method": "addCustomersToManualSegment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Track Segments",
    "typeScriptTag": "trackSegments",
    "description": "Add people to a manual segment",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/segments/{segment_id}/remove_customers",
    "method": "removeCustomers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Track Segments",
    "typeScriptTag": "trackSegments",
    "description": "Remove people from a manual segment",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/entity",
    "method": "createEntity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "track_v2",
    "typeScriptTag": "trackV2",
    "description": "Make a single request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      }
    ]
  },
  {
    "url": "/api/v2/batch",
    "method": "sendMultipleRequests",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "track_v2",
    "typeScriptTag": "trackV2",
    "description": "Send multiple requests",
    "parameters": [
      {
        "name": "batch",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      },
      {
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Journeys Track API"
      apiBaseUrl="https://track.customer.io"
      apiVersion="1.0.0"
      endpoints={17}
      sdkMethods={26}
      schemas={236}
      parameters={23}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/journeys-track/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/customer-io/journeys-track/openapi.yaml"
      developerDocumentation="customer.io/docs/api/track/"
    />
  );
}
  