import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function JustEatTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="just-eat-typescript-sdk"
      metaDescription={`Just Eat is an online food ordering and delivery platform that connects users with a wide range of restaurants in their area. Users can browse menus, place orders, and have food delivered straight to their doorstep. Just Eat offers a convenient and easy way to satisfy food cravings from the comfort of home.`}
      company="Just Eat"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/just-eat/logo.png"
      companyKebabCase="just-eat"
      clientNameCamelCase="justEat"
      homepage="developers.just-eat.com/"
      lastUpdated={new Date("2024-03-14T08:10:33.678Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/just-eat/favicon.png"
      contactUrl="https://developers.just-eat.com/"
      contactEmail="david.handley@justeattakeaway.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/just-eat/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["ecommerce","food_delivery","online_food_ordering"]}
      methods={[
  {
    "url": "/applications/orderpad-app/restaurants/{tenant}/device-tokens",
    "method": "linkRestaurantToOrderpad",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Link a restaurant to an Orderpad",
    "parameters": [
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "The identifier for the tenant",
        "example": "TENANT"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAILADDRESS"
      },
      {
        "name": "loginCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOGINCODE"
      },
      {
        "name": "pushNotificationId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Orderpad authentication token"
      },
      {
        "statusCode": "400",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "401",
        "description": "Login code invalid"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/applications/orderpad-app/restaurants/{tenant}/login-sessions",
    "method": "createRestaurantLoginSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Login session for a restaurant owner",
    "parameters": [
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "The identifier for the tenant",
        "example": "TENANT"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAILADDRESS"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request received, no info about success or failure."
      },
      {
        "statusCode": "400",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/applications/orderpad-app/restaurants/{tenant}/{restaurantId}/registration-codes",
    "method": "createOrderRegistrationCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Create Orderpad registration code",
    "parameters": [
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "The identifier for the tenant",
        "example": "TENANT"
      },
      {
        "name": "restaurantId",
        "schema": "string",
        "required": true,
        "description": "The restaurant Id",
        "example": "RESTAURANTID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Registration code successfully created. Location header set to registration code resource"
      },
      {
        "statusCode": "400",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "401",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "403",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/attempted-delivery-query-resolved",
    "method": "resolveDeliveryQuery",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Attempted delivery query resolved",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "Tenant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Resolution",
        "schema": "object",
        "description": ""
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Respond with a 200 status code to indicate that you have received the notification."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/brands/{brand_slug}/orders",
    "method": "getBrandOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Management",
    "typeScriptTag": "partnerManagement",
    "description": "Get Brand Orders",
    "parameters": [
      {
        "name": "brandSlug",
        "schema": "string",
        "required": true,
        "description": "The brand slug to query.",
        "example": "BRAND_SLUG"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Since when to start fetching orders. It's a timestamp in RFC3339 format. By default it will be set to the previous 2 hours since the moment of the request. The maximum is 15 days ago."
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "Until when to stop fetching orders. It's a timestamp in RFC3339 format. By default it will use the moment of the request."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Used to return orders by order status. By default it will return all orders."
      },
      {
        "name": "locations",
        "schema": "string",
        "required": false,
        "description": "Location ID's to filter by. Multiple locations can be provided with comma separated strings. No input means we don't filter by location."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination is available if the brand has too many orders that can’t be returned in a single request. The maximum orders per request is 50."
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "A standard http error."
      },
      {
        "statusCode": "401",
        "description": "A standard http error."
      },
      {
        "statusCode": "403",
        "description": "A standard http error."
      },
      {
        "statusCode": "404",
        "description": "A standard http error."
      },
      {
        "statusCode": "429",
        "description": "A standard http error."
      },
      {
        "statusCode": "500",
        "description": "A standard http error."
      }
    ]
  },
  {
    "url": "/brands/{brand_slug}/orders/{orderID}",
    "method": "getOrderDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Management",
    "typeScriptTag": "partnerManagement",
    "description": "Get Full Order Details",
    "parameters": [
      {
        "name": "brandSlug",
        "schema": "string",
        "required": true,
        "description": "The brand slug to query.",
        "example": "BRAND_SLUG"
      },
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "The order id to query.",
        "example": "ORDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Order represents an order that was placed."
      },
      {
        "statusCode": "400",
        "description": "A standard http error."
      },
      {
        "statusCode": "401",
        "description": "A standard http error."
      },
      {
        "statusCode": "403",
        "description": "A standard http error."
      },
      {
        "statusCode": "404",
        "description": "A standard http error."
      },
      {
        "statusCode": "429",
        "description": "A standard http error."
      },
      {
        "statusCode": "500",
        "description": "A standard http error."
      }
    ]
  },
  {
    "url": "/consumers/{tenant}/me/exclusions",
    "method": "consumerExclusionsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Experience",
    "typeScriptTag": "customerExperience",
    "description": "Get exclusion list for consumer",
    "parameters": [
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "Request tenant.",
        "example": "TENANT"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provides the list of exclusions."
      },
      {
        "statusCode": "401",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "403",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "404",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/consumers/{tenant}/me/exclusions/{productType}",
    "method": "createOrUpdateExclusion",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer Experience",
    "typeScriptTag": "customerExperience",
    "description": "Create or update an exclusion",
    "parameters": [
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "Request tenant.",
        "example": "TENANT"
      },
      {
        "name": "productType",
        "schema": "string",
        "required": true,
        "description": "Product type.",
        "example": "PRODUCTTYPE"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
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
        "description": "The exclusion created or updated"
      },
      {
        "statusCode": "400",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "401",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "403",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "404",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/delivery/pools",
    "method": "getDeliveryPools",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Get your delivery pools",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes a delivery pool"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/delivery/pools",
    "method": "createDeliveryPool",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Create a new delivery pool",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "restaurants",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Pool has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/delivery/pools/{deliveryPoolId}/availability/relative",
    "method": "getPickupEta",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Get availability for pickup",
    "parameters": [
      {
        "name": "deliveryPoolId",
        "schema": "string",
        "required": true,
        "description": "Identifier for the pool",
        "example": "DELIVERYPOOLID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The pool could not be found"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/delivery/pools/{deliveryPoolId}/availability/relative",
    "method": "setPickupEta",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Set availability for pickup",
    "parameters": [
      {
        "name": "deliveryPoolId",
        "schema": "string",
        "required": true,
        "description": "Identifier for the pool",
        "example": "DELIVERYPOOLID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "bestGuess",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Update will take effect shortly"
      },
      {
        "statusCode": "404",
        "description": "The pool could not be found"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/delivery/pools/{deliveryPoolId}/change-risk",
    "method": "updateDeliveryPoolRiskSignal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Update delivery pool risk signal",
    "parameters": [
      {
        "name": "deliveryPoolId",
        "schema": "string",
        "required": true,
        "description": "Identifier for the pool",
        "example": "DELIVERYPOOLID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "riskLevel",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "401",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "403",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "404",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 5xx error response"
      }
    ]
  },
  {
    "url": "/delivery/pools/{deliveryPoolId}",
    "method": "removeDeliveryPool",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Delete a delivery pool",
    "parameters": [
      {
        "name": "deliveryPoolId",
        "schema": "string",
        "required": true,
        "description": "Identifier for the pool",
        "example": "DELIVERYPOOLID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pool deleted"
      },
      {
        "statusCode": "404",
        "description": "The pool could not be found"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/delivery/pools/{deliveryPoolId}",
    "method": "getDeliveryPool",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Get an individual delivery pool",
    "parameters": [
      {
        "name": "deliveryPoolId",
        "schema": "string",
        "required": true,
        "description": "Identifier for the pool",
        "example": "DELIVERYPOOLID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The pool could not be found"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/delivery/pools/{deliveryPoolId}",
    "method": "modifyDeliveryPool",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Modify a delivery pool",
    "parameters": [
      {
        "name": "deliveryPoolId",
        "schema": "string",
        "required": true,
        "description": "Identifier for the pool",
        "example": "DELIVERYPOOLID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "restaurants",
        "schema": "array",
        "description": ""
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
        "description": "The pool could not be found"
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/delivery/pools/{deliveryPoolId}",
    "method": "replaceDeliveryPool",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Replace an existing delivery pool",
    "parameters": [
      {
        "name": "deliveryPoolId",
        "schema": "string",
        "required": true,
        "description": "Identifier for the pool",
        "example": "DELIVERYPOOLID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "restaurants",
        "schema": "array",
        "required": false,
        "description": ""
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
        "description": "The pool could not be found"
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/delivery/pools/{deliveryPoolId}/hours",
    "method": "setDeliveryPoolHours",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Set the delivery pools daily start and end times",
    "parameters": [
      {
        "name": "deliveryPoolId",
        "schema": "string",
        "required": true,
        "description": "Identifier for the pool",
        "example": "DELIVERYPOOLID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "friday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "tuesday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "thursday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "sunday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "saturday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "monday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wednesday",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pool hours have been updated"
      },
      {
        "statusCode": "404",
        "description": "The pool could not be found"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/delivery/pools/{deliveryPoolId}/offline-events",
    "method": "deleteOfflineEvents",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Delete offline events",
    "parameters": [
      {
        "name": "deliveryPoolId",
        "schema": "string",
        "required": true,
        "description": "Identifier for the pool",
        "example": "DELIVERYPOOLID"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "Reason of the offline event. e.g. `?reason=manual`",
        "example": "REASON"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Manual offline events deleted"
      },
      {
        "statusCode": "400",
        "description": "Tenant in request doesn't correspond with pool tenant"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "The pool could not be found"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": "The operation has not been implemented"
      }
    ]
  },
  {
    "url": "/delivery/pools/{deliveryPoolId}/offline-events",
    "method": "takePoolOffline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Take delivery pool offline",
    "parameters": [
      {
        "name": "deliveryPoolId",
        "schema": "string",
        "required": true,
        "description": "Identifier for the pool",
        "example": "DELIVERYPOOLID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "reason",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Pool status manually changed to offline"
      },
      {
        "statusCode": "400",
        "description": "Tenant in request doesn't correspond with pool tenant"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "The pool could not be found"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": "The operation has not been implemented"
      }
    ]
  },
  {
    "url": "/delivery/pools/{deliveryPoolId}/restaurants",
    "method": "removeDeliveryPoolRestaurants",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Remove restaurants from a delivery pool",
    "parameters": [
      {
        "name": "deliveryPoolId",
        "schema": "string",
        "required": true,
        "description": "Identifier for the pool",
        "example": "DELIVERYPOOLID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "restaurants",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Pool has been updated"
      },
      {
        "statusCode": "400",
        "description": "There was something invalid in your request - check response body for details"
      },
      {
        "statusCode": "404",
        "description": "The pool could not be found"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/delivery/pools/{deliveryPoolId}/restaurants",
    "method": "addRestaurantsToDeliveryPool",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Add restaurants to an existing delivery pool",
    "parameters": [
      {
        "name": "deliveryPoolId",
        "schema": "string",
        "required": true,
        "description": "Identifier for the pool",
        "example": "DELIVERYPOOLID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "There was something invalid in your request - check response body for details"
      },
      {
        "statusCode": "404",
        "description": "The pool could not be found"
      },
      {
        "statusCode": "409",
        "description": "The restaurants could not be added to the pool. Typically this is because they are already assigned to another pool"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/delivery/pools/{deliveryPoolId}/status",
    "method": "getDeliveryPoolStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Get status of delivery pool",
    "parameters": [
      {
        "name": "deliveryPoolId",
        "schema": "string",
        "required": true,
        "description": "Identifier for the pool",
        "example": "DELIVERYPOOLID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "The pool could not be found"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/delivery-failed",
    "method": "attemptedDeliveryPut",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Delivery Attempt Failed",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "Reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RestaurantId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "Tenant",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Respond with a 200 status code to indicate that you have received the notification."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/delivery-fees/{tenant}",
    "method": "getRestaurantDeliveryFees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Get restaurant delivery fees",
    "parameters": [
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "Tenant containing the restaurants.",
        "example": "uk"
      },
      {
        "name": "restaurantIds",
        "schema": "array",
        "required": true,
        "description": "Restaurant IDs which fees are requested for. e.g. `?restaurantIds=1,2,3,4`",
        "example": [
          "1",
          "2",
          "3",
          "4"
        ]
      },
      {
        "name": "deliveryTime",
        "schema": "string",
        "required": true,
        "description": "Delivery date/time when fees are required (ISO8601 format).",
        "example": "2019-09-05T12:43:48.431Z"
      },
      {
        "name": "zone",
        "schema": "string",
        "required": false,
        "description": "Postcode or other location name identifying the location to which delivery is required. For use when precise location is not available. This will be removed in future in favour of location.",
        "example": "BS1"
      },
      {
        "name": "latlong",
        "schema": "array",
        "required": false,
        "description": "Point to which delivery is required (latitude, longitude). Supply this where possible as support for zone-only based lookups will be removed in future.",
        "example": [
          51.3851513,
          -2.0841275
        ]
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/discovery/{tenant}/restaurants/enriched/bypostcode/{postcode}",
    "method": "getEnrichedRestaurantsByPostcode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Orchestrator",
    "typeScriptTag": "searchOrchestrator",
    "description": "Get enriched restaurants by postcode",
    "parameters": [
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "The tenant that the request is coming from.",
        "example": "uk"
      },
      {
        "name": "postcode",
        "schema": "string",
        "required": true,
        "description": "The postcode of the requested area.",
        "example": "bs14dj"
      },
      {
        "name": "ratingsOutOfFive",
        "schema": "boolean",
        "description": "Whether returned ratings are out of 5 stars",
        "default": false
      },
      {
        "name": "serviceType",
        "schema": "string",
        "required": false,
        "description": "Retrieve restaurants based on the type of service they offer.\n\n- `any`: Retrieve restaurants offering any service type (default).\n- `delivery`: Retrieve restaurants that offer delivery.\n- `collection`: Retrieve restaurants that offer collection.\n",
        "default": "any"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/discovery/{tenant}/restaurants/enriched",
    "method": "getEnrichedRestaurants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Orchestrator",
    "typeScriptTag": "searchOrchestrator",
    "description": "Get enriched restaurants by location",
    "parameters": [
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "The tenant that the request is coming from.",
        "example": "uk"
      },
      {
        "name": "latitude",
        "schema": "number",
        "description": "The latitude of the requested area.",
        "example": 51.451772
      },
      {
        "name": "longitude",
        "schema": "number",
        "description": "The longitude of the requested area.",
        "example": -2.596847
      },
      {
        "name": "ratingsOutOfFive",
        "schema": "boolean",
        "description": "Whether returned ratings are out of 5 stars",
        "default": false
      },
      {
        "name": "serviceType",
        "schema": "string",
        "required": false,
        "description": "Retrieve restaurants based on the type of service they offer.\n\n- `any`: Retrieve restaurants offering any service type (default).\n- `delivery`: Retrieve restaurants that offer delivery.\n- `collection`: Retrieve restaurants that offer collection.\n",
        "default": "any"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/driver-assigned-to-delivery",
    "method": "assignDriverToDelivery",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Driver Assigned to Delivery",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DriverContactNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Event",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DriverName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TimeStamp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EstimatedDeliveryTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EstimatedPickupTime",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/driver-at-delivery-address",
    "method": "updateDriverDeliveryAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Driver at delivery address",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DriverContactNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Event",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DriverName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TimeStamp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EstimatedDeliveryTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EstimatedPickupTime",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/driver-at-restaurant",
    "method": "confirmDriverAtRestaurant",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Driver at restaurant",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DriverContactNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Event",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DriverName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TimeStamp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EstimatedDeliveryTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EstimatedPickupTime",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/driver-has-delivered-order",
    "method": "updateDriverDeliveryStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Driver has delivered order",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DriverContactNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Event",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DriverName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TimeStamp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EstimatedDeliveryTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EstimatedPickupTime",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/driver-location",
    "method": "updateDriverLocation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Driver Location",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "TimeStamp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "description": "",
        "example": {
          "Longitude": -0.103198,
          "Latitude": 51.51641
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/driver-on-their-way-to-delivery-address",
    "method": "updateDriverLocationToDeliveryAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Driver on their way to delivery address",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DriverContactNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Event",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DriverName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TimeStamp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EstimatedDeliveryTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EstimatedPickupTime",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/final/{finalPickedOrder}",
    "method": "receiveFinalPickedOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JET Connect for Manage Order Status",
    "typeScriptTag": "jetConnectForManageOrderStatus",
    "description": "Final Picked Order",
    "parameters": [
      {
        "name": "finalPickedOrder",
        "schema": "string",
        "required": true,
        "description": "The endpoint you have provided to us.",
        "example": "https://www.your-base-url.com/finalPickedOrders"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "third_party_order_reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THIRD_PARTY_ORDER_REFERENCE"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "posLocationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSLOCATIONID"
      },
      {
        "name": "location",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "menu_reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MENU_REFERENCE"
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "channel",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "collect_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "collection_notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deliver_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "delivery_notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "kitchen_notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT_METHOD"
      },
      {
        "name": "tender_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "driver",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "collector",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "delivery",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "extras",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "promotions",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "To indicate that the order was successfully processed, return a `200` status code with an Order Number. JET Connect will notify your delivery partner that the order was successfully processed."
      },
      {
        "statusCode": "202",
        "description": "If you would like to handle the order asynchronously, return a 202 status code. JET Connect will place the order in a pending state, which will fail after 3 minutes if you do not notify JET Connect through the Update Order Status endpoint. If this endpoint is not called within 3 minutes, the order will be marked as failed to inject."
      },
      {
        "statusCode": "400",
        "description": "Any non-2xx status codes will be taken as a failure and redirected to the tablet to be hand-keyed into your POS."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Authorization failed or the HMAC validation did not match."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/initial/{receiveOrder}",
    "method": "receiveOrderPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JET Connect for Manage Order Status",
    "typeScriptTag": "jetConnectForManageOrderStatus",
    "description": "Receive Order",
    "parameters": [
      {
        "name": "receiveOrder",
        "schema": "string",
        "required": true,
        "description": "The endpoint you have provided to us.",
        "example": "https://www.your-base-url.com/receiveOrders"
      },
      {
        "name": "xJetConnectHash",
        "schema": "string",
        "description": "The HMAC secret that you have provided to JET to sign order requests, this header will be omitted if no secret was provided. The signature is created using SHA256, Base64 to encode and UTF-8 for character encoding. An example is below:\n\n`HMAC-SHA256 t=1673428038618,signature=gy7evLHPTUadsmEVw7h6HmOHafCLq4gLKlss1VCV8lI=`\n- `t` represents the UNIX timestamp of when the body was signed.\n- `signature` is the body of the request which has been JSON encoded and hashed using a shared secret.\n\nGiven the following secret of `key` and a body of `example`, the following hash will be generated `FGwot7AqiDIthEv6TippJm35DaRpRac5NSLd/wSp9go=`"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "third_party_order_reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THIRD_PARTY_ORDER_REFERENCE"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "posLocationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSLOCATIONID"
      },
      {
        "name": "location",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "menu_reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MENU_REFERENCE"
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "channel",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "collect_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "collection_notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deliver_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "delivery_notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "kitchen_notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT_METHOD"
      },
      {
        "name": "tender_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "driver",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "collector",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "delivery",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "extras",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "promotions",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "To indicate that the order was successfully processed, return a `200` status code with an Order Number. JET Connect will notify your delivery partner that the order was successfully processed."
      },
      {
        "statusCode": "202",
        "description": "If you would like to handle the order asynchronously, return a 202 status code. JET Connect will place the order in a pending state, which will fail after 3 minutes if you do not notify JET Connect through the Update Order Status endpoint. If this endpoint is not called within 3 minutes, the order will be marked as failed to inject."
      },
      {
        "statusCode": "400",
        "description": "Any non-2xx status codes will be taken as a failure and redirected to the tablet to be hand-keyed into your POS."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Authorization failed or the HMAC validation did not match."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/item-availability",
    "method": "updateItemAvailability",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JET Connect for Manage Product Catalogue",
    "typeScriptTag": "jetConnectForManageProductCatalogue",
    "description": "Update the availability of menu items",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "event",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNAVAILABLE"
      },
      {
        "name": "itemReferences",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "restaurant",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESTAURANT"
      },
      {
        "name": "happenedAt",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2018-10-11T14:56:18.234284+01:00"
      },
      {
        "name": "nextAvailableAt",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2018-10-11T14:56:18.234284+01:00"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Is returned when a request has been accepted and is processing"
      },
      {
        "statusCode": "400",
        "description": "Standard error response for this service."
      },
      {
        "statusCode": "403",
        "description": "Standard error response for this service."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "Standard error response for this service."
      }
    ]
  },
  {
    "url": "/late-order-compensation-query",
    "method": "queryRestaurantResponseRequired",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "late order compensation query, restaurant response required",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "tenant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "compensationOptions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "orderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "restaurantId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Respond with a 200 status code to indicate that you have received the notification"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/late-order-query",
    "method": "restaurantResponseRequired",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "late order query, restaurant response required",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "tenant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "restaurantId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Respond with a 200 status code to indicate that you have received the notification."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/locations/{locationID}/orders",
    "method": "listLocationOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Management",
    "typeScriptTag": "partnerManagement",
    "description": "Get Location Orders",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Since when to start fetching orders. It's a timestamp in RFC3339 format. By default it will be set to the previous 2 hours since the moment of the request. The maximum is 15 days ago."
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "Until when to stop fetching orders. It's a timestamp in RFC3339 format. By default it will use the moment of the request."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Used to return orders by order status. By default it will return all orders."
      },
      {
        "name": "locationId",
        "schema": "string",
        "required": true,
        "description": "The location ID to query by.",
        "example": "LOCATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "A standard http error."
      },
      {
        "statusCode": "401",
        "description": "A standard http error."
      },
      {
        "statusCode": "403",
        "description": "A standard http error."
      },
      {
        "statusCode": "404",
        "description": "A standard http error."
      },
      {
        "statusCode": "429",
        "description": "A standard http error."
      },
      {
        "statusCode": "500",
        "description": "A standard http error."
      }
    ]
  },
  {
    "url": "/menu-ingestion-complete",
    "method": "confirmMenuIngestionCompletion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Menu ingestion complete",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "tenant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "string",
        "description": ""
      },
      {
        "name": "correlationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "restaurantId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timestamp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fault",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/menus",
    "method": "ingestMenuFromPos",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JET Connect for Manage Product Catalogue",
    "typeScriptTag": "jetConnectForManageProductCatalogue",
    "description": "Ingest menu from POS",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "restaurants",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "menus",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "callback_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com/menu_webhook"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Is returned when a request has been accepted and is processing"
      },
      {
        "statusCode": "400",
        "description": "Standard error response for this service."
      },
      {
        "statusCode": "403",
        "description": "Standard error response for this service."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "Standard error response for this service."
      }
    ]
  },
  {
    "url": "/order/{id}/sent-to-pos-failed",
    "method": "markOrderInjectionFailed",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JET Connect for Manage Order Status",
    "typeScriptTag": "jetConnectForManageOrderStatus",
    "description": "Update JET Connect with the unsuccessful result of an async order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier for the order for which the status should be updated. Note that this is the JET Connect order ID, received as id in the Receive Order endpoint body.",
        "example": "xsfkfwtowkm1mswn2gmjjq"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "happenedAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HAPPENEDAT"
      },
      {
        "name": "errorCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERRORCODE"
      },
      {
        "name": "errorMessage",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERRORMESSAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The order was found and its status was updated. The delivery partner will be notified of the order status."
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/order/{id}/sent-to-pos-success",
    "method": "updateOrderStatusSuccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JET Connect for Manage Order Status",
    "typeScriptTag": "jetConnectForManageOrderStatus",
    "description": "Update JET Connect with the successful result of an async order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier for the order for which the status should be updated. Note that this is the JET Connect order ID, received as id in the Receive Order endpoint body.",
        "example": "xsfkfwtowkm1mswn2gmjjq"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "happenedAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HAPPENEDAT"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The order was found and its status was updated. The delivery partner will be notified of the order status."
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/order-accepted",
    "method": "orderAcceptedPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Order accepted",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "AcceptedFor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Event",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Respond with a 200 status code to indicate that you have received the notification."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/order-cancelled",
    "method": "orderCancelledPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Order cancelled",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "Event",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Reason",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Respond with a 200 status code to indicate that you have received the notification."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/order-eligible-for-restaurant-compensation",
    "method": "checkOrderCompensationEligibility",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Order Eligible For Restaurant Compensation",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "IsEligible",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Respond with a 200 status code to indicate that you have received the notification."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/order-is-ready-for-pickup",
    "method": "orderReadyForCollectionPut",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Order ready for pickup",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "Event",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Timestamp",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Upon successful receipt of the event, delivery partners should return a 200 HTTP status code indicating acknowledgement of transmission."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "default",
        "description": "An event showing an order is ready for pickup"
      }
    ]
  },
  {
    "url": "/order-ready-for-preparation-async",
    "method": "recordOrderPreparation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Order ready for preparation (async)",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "CustomerNotes",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Restaurant",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Payment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Customer",
        "schema": "object",
        "description": ""
      },
      {
        "name": "PlacedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Items",
        "schema": "array",
        "description": ""
      },
      {
        "name": "IsTest",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "Fulfilment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "TotalPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "PriceBreakdown",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Upon successful receipt of this event, a `202` status code should be returned, indicating the request has been accepted. You should then later respond with the result of processing this request, via the [callback URL](https://uk.api.just-eat.io/docs/) endpoint."
      },
      {
        "statusCode": "400",
        "description": "Should the initial validation of the order fail, return a `400` status code. NOTE: In this instance we do not also expect a failure callback via the async callback URL."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/order-ready-for-preparation-sync",
    "method": "recordOrderPreparation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Order ready for preparation (sync)",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "CustomerNotes",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Restaurant",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Payment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Customer",
        "schema": "object",
        "description": ""
      },
      {
        "name": "PlacedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Items",
        "schema": "array",
        "description": ""
      },
      {
        "name": "IsTest",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "Fulfilment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "TotalPrice",
        "schema": "number",
        "description": ""
      },
      {
        "name": "PriceBreakdown",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Respond with a 200 status code to indicate that you have received the notification."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/order-rejected",
    "method": "notifyOrderRejection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Order rejected",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "Event",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RejectedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RejectedReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RejectedBy",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Respond with a 200 status code to indicate that you have received the notification."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/order-requires-delivery-acceptance",
    "method": "scheduleOrderPickup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Order requires delivery acceptance",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "In the event of successful handling of the request, a 201 status code should be returned, indicating acknowledgement of transmission success."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/order-time-updated",
    "method": "updateOrderTime",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Order time updated",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "upperBoundMinutes",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "serviceType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dayOfWeek",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lowerBoundMinutes",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "restaurantId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orderdispatchwebhooks",
    "method": "createRestaurantOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "New Order For Restaurant",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDERID"
      },
      {
        "name": "orderReference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDERREFERENCE"
      },
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TENANT"
      },
      {
        "name": "totalPrice",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "placedDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLACEDDATE"
      },
      {
        "name": "acceptanceDeadline",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCEPTANCEDEADLINE"
      },
      {
        "name": "status",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "restaurant",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "payment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "fulfilment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priceBreakdown",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "customerNotes",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "restrictions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "discounts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Respond with a 200 status code to indicate that you have received the notification."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders/deliverystate/driverlocation",
    "method": "updateDriverLocationsBulkUpload",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Update current driver locations (bulk upload)",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Experience",
    "typeScriptTag": "customerExperience",
    "description": "Create order",
    "parameters": [
      {
        "name": "xJeApiVersion",
        "schema": "number",
        "required": false,
        "description": "The api version to use. Version 2.0 is the only available version.",
        "example": 2,
        "default": 1
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "Customer",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "OrderReference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDERREFERENCE"
      },
      {
        "name": "IsTest",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "FriendlyOrderReference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomerNotes",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "NoteForDelivery": "Red door",
          "NoteForRestaurant": "Make it spicy"
        }
      },
      {
        "name": "Fulfilment",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "Method": "Delivery",
          "DueDate": "2020-01-01T09:00:00.000Z",
          "DueAsap": false
        }
      },
      {
        "name": "Payment",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "Tips": [
            {
              "Value": 2.5,
              "Type": "driver"
            }
          ],
          "Lines": [
            {
              "ServiceFee": 0,
              "Type": "Card",
              "Paid": true,
              "Value": 19.95,
              "LastCardDigits": "1234"
            }
          ],
          "Fees": [
            {
              "Value": 0.25,
              "Type": "card"
            },
            {
              "Value": 3.5,
              "Type": "delivery"
            }
          ]
        }
      },
      {
        "name": "Items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "Restaurant",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "TotalPrice",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Describes a created order"
      },
      {
        "statusCode": "400",
        "description": "Bad Request - Request is for deprecated API version or has failed validation in some way - see response body for details"
      },
      {
        "statusCode": "409",
        "description": "Describes a created order"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders/{brandSlug}/{orderId}/amend",
    "method": "getAmendmentProgress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "JET Connect for Manage Order Status",
    "typeScriptTag": "jetConnectForManageOrderStatus",
    "description": "Get amendedment",
    "parameters": [
      {
        "name": "brandSlug",
        "schema": "string",
        "required": true,
        "description": "The owning brand in the brand slug format e.g. `je-uk-example` (contact delivery manager if unsure). This field may be removed in a future version.",
        "example": "je-uk-example"
      },
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "The originating order ID as supplied by the ordering partner.",
        "example": "00025doahk2txeo9ttd0ma"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about this amendment."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/orders/{brandSlug}/{orderId}/amend",
    "method": "amendOrderProgress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JET Connect for Manage Order Status",
    "typeScriptTag": "jetConnectForManageOrderStatus",
    "description": "Amend order",
    "parameters": [
      {
        "name": "brandSlug",
        "schema": "string",
        "required": true,
        "description": "The owning brand in the brand slug format e.g. `je-uk-example` (contact delivery manager if unsure). This field may be removed in a future version.",
        "example": "je-uk-example"
      },
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "The originating order ID as supplied by the ordering partner.",
        "example": "00025doahk2txeo9ttd0ma"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "The out of stock items request has been accepted and will be processed."
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": "An order can only be amended once so any subsequent attempt will return a conflict."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/orders/{brandSlug}/{orderId}/cancel",
    "method": "cancelOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JET Connect for Manage Order Status",
    "typeScriptTag": "jetConnectForManageOrderStatus",
    "description": "Cancel order",
    "parameters": [
      {
        "name": "brandSlug",
        "schema": "string",
        "required": true,
        "description": "The owning brand in the brand slug format e.g. `je-uk-example` (contact delivery manager if unsure). This field may be removed in a future version.",
        "example": "je-uk-example"
      },
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "The originating order ID as supplied by the ordering partner.",
        "example": "00025doahk2txeo9ttd0ma"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about this cancellation."
      },
      {
        "statusCode": "400",
        "description": "The response body we will provide with information about why the cancellation failed to process."
      },
      {
        "statusCode": "401",
        "description": "The response body we will provide when authorization failed."
      },
      {
        "statusCode": "403",
        "description": "The response body we will provide with information about why the cancellation failed to process."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "The response body we will provide with information about why the cancellation failed to process."
      }
    ]
  },
  {
    "url": "/orders/{orderId}/accept",
    "method": "acceptOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Accept order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "The order id",
        "example": "ORDERID"
      },
      {
        "name": "xJeConversation",
        "schema": "string",
        "required": false,
        "description": "The value used for cross feature correlation."
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "TimeAcceptedFor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OrderPreparationTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "CourierPickupTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "UserId",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - status updated successfully or it is already in the requested state"
      },
      {
        "statusCode": "404",
        "description": "Order could not be found"
      },
      {
        "statusCode": "409",
        "description": "Conflict. This order has either already been accepted, rejected or ignored by restaurant or cancelled by ops"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/beingprepared",
    "method": "updateOrderBeingPrepared",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Update order to Being Prepared",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "The order id",
        "example": "ORDERID"
      },
      {
        "name": "xJeConversation",
        "schema": "string",
        "required": false,
        "description": "The value used for cross feature correlation."
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content - status updated successfully or it is already in the requested state"
      },
      {
        "statusCode": "404",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/cancel",
    "method": "cancelOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Cancel order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "The order id",
        "example": "ORDERID"
      },
      {
        "name": "xJeConversation",
        "schema": "string",
        "required": false,
        "description": "The value used for cross feature correlation."
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "Message",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - status updated successfully or it is already in the requested state"
      },
      {
        "statusCode": "404",
        "description": "Order could not be found"
      },
      {
        "statusCode": "409",
        "description": "Conflict. This order has already been cancelled"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/complete",
    "method": "markOrderComplete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Complete order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "The ID of the order to mark as complete",
        "example": "ORDERID"
      },
      {
        "name": "xJeConversation",
        "schema": "string",
        "required": false,
        "description": "The value used for cross feature correlation."
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content - status updated successfully or it is already in the requested state"
      },
      {
        "statusCode": "404",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "409",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/deliverystate/atdeliveryaddress",
    "method": "updateDeliveredDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Update order with driver at delivery address details",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "Just Eat order identifier",
        "example": "ORDERID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "DriverId",
        "schema": "string",
        "description": "",
        "example": "123456"
      },
      {
        "name": "Location",
        "schema": "object",
        "description": "",
        "example": {
          "Speed": 8.68,
          "Latitude": 51.51641,
          "Heading": 357.10382,
          "Accuracy": 12.814,
          "Longitude": -0.103198
        }
      },
      {
        "name": "TimeStampWithUtcOffset",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/deliverystate/atrestaurant",
    "method": "updateDriverAtRestaurantDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Update order with driver at restaurant details",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "Just Eat order identifier",
        "example": "ORDERID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "Location",
        "schema": "object",
        "description": "",
        "example": {
          "Speed": 8.68,
          "Latitude": 51.51641,
          "Heading": 357.10382,
          "Accuracy": 12.814,
          "Longitude": -0.103198
        }
      },
      {
        "name": "EtaAtDeliveryAddress",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TimeStampWithUtcOffset",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/deliverystate/atrestauranteta",
    "method": "updateDriverAtRestaurantEta",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Update the driver's estimated time to arrive at the Restaurant",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "Just Eat order identifier",
        "example": "ORDERID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "bestGuess",
        "schema": "string",
        "description": ""
      },
      {
        "name": "estimatedAt",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/deliverystate/delivered",
    "method": "updateDeliveredDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Update order with delivered details",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "Just Eat order identifier",
        "example": "ORDERID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "DriverId",
        "schema": "string",
        "description": "",
        "example": "123456"
      },
      {
        "name": "Location",
        "schema": "object",
        "description": "",
        "example": {
          "Speed": 8.68,
          "Latitude": 51.51641,
          "Heading": 357.10382,
          "Accuracy": 12.814,
          "Longitude": -0.103198
        }
      },
      {
        "name": "TimeStampWithUtcOffset",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/deliverystate/driverassigned",
    "method": "updateOrderDriverAssignedDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Update order with driver assigned details",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "Just Eat order identifier",
        "example": "ORDERID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "DriverId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123456"
      },
      {
        "name": "EtaAtDeliveryAddress",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-12-25T16:45:28.753Z"
      },
      {
        "name": "TimeStampWithUtcOffset",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-12-25T15:45:28.753Z"
      },
      {
        "name": "DriverContactNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "+447123456789"
      },
      {
        "name": "VehicleDetails",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "DriverName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "David"
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "Speed": 8.68,
          "Latitude": 51.51641,
          "Heading": 357.10382,
          "Accuracy": 12.814,
          "Longitude": -0.103198
        }
      },
      {
        "name": "EtaAtRestaurant",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-12-25T15:30:28.753Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/deliverystate/driverlocation",
    "method": "updateDriverLocationEta",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Update the driver's current location",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "Just Eat order identifier",
        "example": "ORDERID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "EtaAtRestaurant",
        "schema": "string",
        "description": "",
        "example": "2020-12-25T16:30:28.753Z"
      },
      {
        "name": "Location",
        "schema": "object",
        "description": "",
        "example": {
          "Speed": 8.68,
          "Latitude": 51.51641,
          "Heading": 357.10382,
          "Accuracy": 12.814,
          "Longitude": -0.103198
        }
      },
      {
        "name": "EtaAtDeliveryAddress",
        "schema": "string",
        "description": "",
        "example": "2020-12-25T16:45:28.753Z"
      },
      {
        "name": "TimeStampWithUtcOffset",
        "schema": "string",
        "description": "",
        "example": "2020-12-25T15:45:28.753Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/deliverystate/driverunassigned",
    "method": "updateDriverUnassignedDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Update order with driver unassigned details",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "Just Eat order identifier",
        "example": "ORDERID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "EtaAtDeliveryAddress",
        "schema": "string",
        "description": "",
        "example": "2020-12-25T16:45:28.753Z"
      },
      {
        "name": "Location:",
        "schema": "object",
        "description": "",
        "example": {
          "Speed": 8.68,
          "Latitude": 51.51641,
          "Heading": 357.10382,
          "Accuracy": 12.814,
          "Longitude": -0.103198
        }
      },
      {
        "name": "TimeStampWithUtcOffset",
        "schema": "string",
        "description": "",
        "example": "2020-12-25T15:30:28.753Z"
      },
      {
        "name": "DriverContactNumber",
        "schema": "string",
        "description": "",
        "example": "+447123456789"
      },
      {
        "name": "UnassignedBy",
        "schema": "string",
        "description": "",
        "example": "operation"
      },
      {
        "name": "DriverName",
        "schema": "string",
        "description": "",
        "example": "David McDriverson"
      },
      {
        "name": "Reason",
        "schema": "string",
        "description": "",
        "example": "package_not_ready"
      },
      {
        "name": "Comment",
        "schema": "string",
        "description": "",
        "example": "Order was not ready"
      },
      {
        "name": "EtaAtRestaurant",
        "schema": "string",
        "description": "",
        "example": "2020-12-25T16:30:28.753Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/deliverystate/onitsway",
    "method": "updateDriverOnitsWayDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Update order with driver on its way details",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "The order id",
        "example": "ORDERID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "DriverId",
        "schema": "string",
        "description": "",
        "example": "123456"
      },
      {
        "name": "Location",
        "schema": "object",
        "description": "",
        "example": {
          "Speed": 8.68,
          "Latitude": 51.51641,
          "Heading": 357.10382,
          "Accuracy": 12.814,
          "Longitude": -0.103198
        }
      },
      {
        "name": "EstimatedArrivalTime",
        "schema": "string",
        "description": "",
        "example": "2020-12-25T16:45:28.753Z"
      },
      {
        "name": "TimeStampWithUtcOffset",
        "schema": "string",
        "description": "",
        "example": "2020-12-25T15:30:28.753Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/dispatchedtocustomer",
    "method": "markOrderDispatchedToCustomer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Mark order as dispatched to customer",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "The ID of the order to mark it as dispatched to customer",
        "example": "ORDERID"
      },
      {
        "name": "xJeConversation",
        "schema": "string",
        "required": false,
        "description": "The value used for cross feature correlation."
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content - status updated successfully or it is already in the requested state"
      },
      {
        "statusCode": "404",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "409",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/duedate",
    "method": "updateOrderEta",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Update order ETA",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "The order id",
        "example": "ORDERID"
      },
      {
        "name": "xJeConversation",
        "schema": "string",
        "required": false,
        "description": "The value used for cross feature correlation."
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "DueDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - order due date updated successfully"
      },
      {
        "statusCode": "400",
        "description": "The due date is missing, or out of range (either in the past, or > 7 days in the future)."
      },
      {
        "statusCode": "404",
        "description": "The order could not be found."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/readyforcollection",
    "method": "markReadyForCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Mark order as ready for collection",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "The ID of the order to mark as ready for collection",
        "example": "ORDERID"
      },
      {
        "name": "xJeConversation",
        "schema": "string",
        "required": false,
        "description": "The value used for cross feature correlation."
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content - status updated successfully or it is already in the requested state"
      },
      {
        "statusCode": "404",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "409",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/orders/{orderId}/reject",
    "method": "rejectOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Order Journey",
    "typeScriptTag": "manageOrderJourney",
    "description": "Reject order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "The order id",
        "example": "ORDERID"
      },
      {
        "name": "xJeConversation",
        "schema": "string",
        "required": false,
        "description": "The value used for cross feature correlation."
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "Message",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - status updated successfully or it is already in the requested state"
      },
      {
        "statusCode": "404",
        "description": "Order could not be found"
      },
      {
        "statusCode": "409",
        "description": "Conflict. This order has either already been accepted, rejected or ignored by restaurant or cancelled by ops"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/redelivery-requested",
    "method": "customerResponseRedelivery",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Customer Requested Redelivery",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "Tenant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Update",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Notes",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Respond with a 200 status code to indicate that you have received the notification."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/restaurant-offline-status",
    "method": "updateRestaurantOfflineStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Restaurant Offline Status",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "Tenant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "IsOffline",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "RestaurantId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "AllowRestaurantOverride",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/restaurant-online-status",
    "method": "updateRestaurantOnlineStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Restaurant Online Status",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "Tenant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "IsOffline",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "RestaurantId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "AllowRestaurantOverride",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/restaurants/bylatlong",
    "method": "getRestaurantsByLocation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Orchestrator",
    "typeScriptTag": "searchOrchestrator",
    "description": "Get restaurants by location",
    "parameters": [
      {
        "name": "acceptTenant",
        "schema": "string",
        "required": false,
        "description": "A valid country code, e.g. \"uk\". Filter search results to only include restaurants for the specified country. Required when using OAuth for authentication."
      },
      {
        "name": "latitude",
        "schema": "number",
        "required": true,
        "description": "Filter search results to only include restaurants that deliver to the specified location",
        "example": 0
      },
      {
        "name": "longitude",
        "schema": "number",
        "required": true,
        "description": "Filter search results to only include restaurants that deliver to the specified location",
        "example": 0
      },
      {
        "name": "cuisine",
        "schema": "string",
        "required": false,
        "description": "Filter search results to only include restaurants that offer the specified cuisine"
      },
      {
        "name": "restaurantName",
        "schema": "string",
        "required": false,
        "description": "Filter search results to only include restaurants that have a name that matches the specified value"
      },
      {
        "name": "brandName",
        "schema": "string",
        "required": false,
        "description": "Filter search results to only include restaurants of the specified brand"
      },
      {
        "name": "ratingsOutOfFive",
        "schema": "boolean",
        "required": false,
        "description": "Whether returned ratings are out of 5 stars",
        "default": false
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
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
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/restaurants/bypostcode/{postcode}",
    "method": "getRestaurantsByPostcode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Orchestrator",
    "typeScriptTag": "searchOrchestrator",
    "description": "Get restaurants by postcode",
    "parameters": [
      {
        "name": "acceptTenant",
        "schema": "string",
        "required": false,
        "description": "A valid country code, e.g. \"uk\". Filter search results to only include restaurants for the specified country. Required when using OAuth for authentication."
      },
      {
        "name": "postcode",
        "schema": "string",
        "required": true,
        "description": "Filter search results to only include restaurants that deliver to the specified postcode",
        "example": "POSTCODE"
      },
      {
        "name": "cuisine",
        "schema": "string",
        "required": false,
        "description": "Filter search results to only include restaurants that offer the specified cuisine"
      },
      {
        "name": "restaurantName",
        "schema": "string",
        "required": false,
        "description": "Filter search results to only include restaurants that have a name that matches the specified value"
      },
      {
        "name": "brandName",
        "schema": "string",
        "required": false,
        "description": "Filter search results to only include restaurants of the specified brand"
      },
      {
        "name": "ratingsOutOfFive",
        "schema": "boolean",
        "required": false,
        "description": "Whether returned ratings are out of 5 stars",
        "default": false
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
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
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/restaurants/driver/eta",
    "method": "setPickupEta",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Logistic Management",
    "typeScriptTag": "logisticManagement",
    "description": "Set ETA for pickup",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "There was something invalid in your request - check response body for details"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/restaurants/{restaurantReference}/offline",
    "method": "setRestaurantOffline",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "JET Connect for Manage Partner Availability",
    "typeScriptTag": "jetConnectForManagePartnerAvailability",
    "description": "Set a restaurant offline",
    "parameters": [
      {
        "name": "restaurantReference",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the restaurant as provided to and configured by JET Connect",
        "example": "RESTAURANTREFERENCE"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "onlineAt",
        "schema": "string",
        "description": "",
        "example": "2021-10-13T12:03:00"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Is returned when a request has been accepted and is processing"
      },
      {
        "statusCode": "400",
        "description": "Standard error response for this type of service."
      },
      {
        "statusCode": "403",
        "description": "Standard error response for this type of service."
      },
      {
        "statusCode": "404",
        "description": "Standard error response for this type of service."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "Standard error response for this type of service."
      }
    ]
  },
  {
    "url": "/restaurants/{restaurantReference}/online",
    "method": "setRestaurantOnline",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "JET Connect for Manage Partner Availability",
    "typeScriptTag": "jetConnectForManagePartnerAvailability",
    "description": "Set a restaurant online",
    "parameters": [
      {
        "name": "restaurantReference",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the restaurant as provided to and configured by JET Connect",
        "example": "RESTAURANTREFERENCE"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Is returned when a request has been accepted and is processing"
      },
      {
        "statusCode": "400",
        "description": "Standard error response for this type of service."
      },
      {
        "statusCode": "403",
        "description": "Standard error response for this type of service."
      },
      {
        "statusCode": "404",
        "description": "Standard error response for this type of service."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "Standard error response for this type of service."
      }
    ]
  },
  {
    "url": "/restaurants/{restaurantReference}/servicetimes",
    "method": "updateRestaurantServiceTimes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "JET Connect for Manage Partner Availability",
    "typeScriptTag": "jetConnectForManagePartnerAvailability",
    "description": "Updates restaurant's opening times",
    "parameters": [
      {
        "name": "restaurantReference",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the restaurant as provided to and configured by JET Connect",
        "example": "RESTAURANTREFERENCE"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Europe/London"
      },
      {
        "name": "serviceTimes",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Is returned when a request has been accepted and is processing"
      },
      {
        "statusCode": "400",
        "description": "Standard error response for this type of service."
      },
      {
        "statusCode": "403",
        "description": "Standard error response for this type of service."
      },
      {
        "statusCode": "404",
        "description": "Standard error response for this type of service."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "Standard error response for this type of service."
      }
    ]
  },
  {
    "url": "/restaurants/{tenant}",
    "method": "createRestaurant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Partner Management",
    "typeScriptTag": "partnerManagement",
    "description": "Create a new Restaurant",
    "parameters": [
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "Request tenant",
        "example": "TENANT"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "400",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "401",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "403",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/restaurants/{tenant}/{restaurantId}/creation-status",
    "method": "getRestaurantCreationStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Management",
    "typeScriptTag": "partnerManagement",
    "description": "Get Restaurant Creation Status",
    "parameters": [
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "The request tenant",
        "example": "TENANT"
      },
      {
        "name": "restaurantId",
        "schema": "string",
        "required": true,
        "description": "The restaurant identifier",
        "example": "RESTAURANTID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The creation status of a given restaurant."
      },
      {
        "statusCode": "401",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "403",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "404",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/restaurants/{tenant}/{restaurantId}/creation-status",
    "method": "updateCreationStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Partner Management",
    "typeScriptTag": "partnerManagement",
    "description": "Update Restaurant Creation Status",
    "parameters": [
      {
        "name": "tenant",
        "schema": "string",
        "required": true,
        "description": "The request tenant",
        "example": "TENANT"
      },
      {
        "name": "restaurantId",
        "schema": "string",
        "required": true,
        "description": "The restaurant identifier",
        "example": "RESTAURANTID"
      },
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "401",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "403",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "404",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "A HTTP 500 error response"
      }
    ]
  },
  {
    "url": "/send-to-pos-failed",
    "method": "handlePosFailed",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Partner Management Gateway",
    "typeScriptTag": "apiPartnerManagementGateway",
    "description": "Send to POS failed",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "OrderId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Respond with a 200 status code to indicate that you have received the notification."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      }
    ]
  },
  {
    "url": "/your-cancel-order-notification-endpoint",
    "method": "notifyOrderCancellation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JET Connect for Manage Order Status",
    "typeScriptTag": "jetConnectForManageOrderStatus",
    "description": "Cancel Order Notification",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "orderID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDERID"
      },
      {
        "name": "reason",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "happenedAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HAPPENEDAT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata about the order that was cancelled."
      },
      {
        "statusCode": "400",
        "description": "Please return errors to calling your webhook in this format."
      },
      {
        "statusCode": "401",
        "description": "Please return errors to calling your webhook in this format."
      },
      {
        "statusCode": "403",
        "description": "Please return errors to calling your webhook in this format."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "Please return errors to calling your webhook in this format."
      }
    ]
  },
  {
    "url": "/your-driver-status-notification-endpoint",
    "method": "receiveDriverStatusUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JET Connect for Manage Order Status",
    "typeScriptTag": "jetConnectForManageOrderStatus",
    "description": "Driver Status Notification",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "orderID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDERID"
      },
      {
        "name": "driverStatus",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "happenedAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HAPPENEDAT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata about the order and information about the new driver status."
      },
      {
        "statusCode": "400",
        "description": "Please return errors to calling your webhook in this format."
      },
      {
        "statusCode": "401",
        "description": "Please return errors to calling your webhook in this format."
      },
      {
        "statusCode": "403",
        "description": "Please return errors to calling your webhook in this format."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "Please return errors to calling your webhook in this format."
      }
    ]
  },
  {
    "url": "/your-failed-order-for-backup-flow-endpoint",
    "method": "notifyFailedOrderBackupFlow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JET Connect for Manage Order Status",
    "typeScriptTag": "jetConnectForManageOrderStatus",
    "description": "Failed Order For Backup Flow",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "validationError",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALIDATIONERROR"
      },
      {
        "name": "unknownReference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "menuId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about an order that failed validation."
      },
      {
        "statusCode": "400",
        "description": "Please return errors to calling your webhook in this format."
      },
      {
        "statusCode": "401",
        "description": "Please return errors to calling your webhook in this format."
      },
      {
        "statusCode": "403",
        "description": "Please return errors to calling your webhook in this format."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "Please return errors to calling your webhook in this format."
      }
    ]
  },
  {
    "url": "/your-restaurant-temp-offline-endpoint",
    "method": "notifyRestaurantTempOffline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "JET Connect for Manage Partner Availability",
    "typeScriptTag": "jetConnectForManagePartnerAvailability",
    "description": "Restaurant Temporarily Offline Notification",
    "parameters": [
      {
        "name": "xJetApplication",
        "schema": "string",
        "required": false,
        "description": "Descriptor of client or internal application"
      },
      {
        "name": "restaurantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESTAURANTID"
      },
      {
        "name": "lastChangedTimeStampUtc",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTCHANGEDTIMESTAMPUTC"
      },
      {
        "name": "collection",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "delivery",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "dineIn",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Notification about which service type of restaurant is going temporary offline and online again."
      },
      {
        "statusCode": "400",
        "description": "Please return errors to calling your webhook in this format."
      },
      {
        "statusCode": "401",
        "description": "Please return errors to calling your webhook in this format."
      },
      {
        "statusCode": "403",
        "description": "Please return errors to calling your webhook in this format."
      },
      {
        "statusCode": "429",
        "description": "A HTTP 4xx error response"
      },
      {
        "statusCode": "500",
        "description": "Please return errors to calling your webhook in this format."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Just Eat API"
      apiBaseUrl="https://uk.api.just-eat.io"
      apiVersion="1.0.0"
      endpoints={82}
      sdkMethods={91}
      schemas={1382}
      parameters={493}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/just-eat/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/just-eat/openapi.yaml"
      
    />
  );
}
  