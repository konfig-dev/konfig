import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function KlarnaCheckoutTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="klarna-checkout-typescript-sdk"
      metaDescription="Klarna is a Swedish fintech company that provides online financial services such as payment solutions for online storefronts, direct payments, and more. Klarna's 'buy now, pay later' options make shopping easier for customers, allowing them to defer payments or pay in installments. The company has gained popularity for its smooth and secure checkout process, enhancing the overall shopping experience for consumers worldwide."
      company="Klarna"
      serviceName="Checkout"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/klarna/checkout/logo.png"
      clientNameCamelCase="klarnaCheckout"
      homepage="klarna.com"
      lastUpdated={new Date("2024-03-13T02:25:22.175Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/klarna/checkout/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/klarna/checkout/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["finance","payments","online_payments","fintech","checkout_experience"]}
      methods={[
  {
    "url": "/checkout/v3/orders",
    "method": "createNewOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Create an order",
    "parameters": [
      {
        "name": "klarnaPartner",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "order_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "f3392f8b-6116-4073-ab96-e330819e2c07"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Women's Fashion"
      },
      {
        "name": "purchase_country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "US"
      },
      {
        "name": "purchase_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "en-US"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CHECKOUT_INCOMPLETE"
      },
      {
        "name": "billing_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "order_amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 50000
      },
      {
        "name": "order_tax_amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4545
      },
      {
        "name": "order_lines",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_urls",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "html_snippet",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "<div id='klarna-checkout-container'><script>alert('Initializing Klarna Checkout');</script></div>"
      },
      {
        "name": "merchant_reference1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "45aa52f387871e3a210645d4"
      },
      {
        "name": "merchant_reference2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "45aa52f387871e3a210645d4"
      },
      {
        "name": "started_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "completed_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "attachment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "external_payment_methods",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "external_checkouts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_countries",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_options",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_data",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "{\"marketplace_seller_info\":[{\"product_category\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}"
      },
      {
        "name": "gui",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_requested",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "selected_shipping_option",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "recurring",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "recurring_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recurring_description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billing_countries",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "discount_lines",
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
        "description": "We were unable to create an order with the provided data. Some field constraint was violated."
      },
      {
        "statusCode": "401",
        "description": "You were not authorized to execute this operation."
      }
    ]
  },
  {
    "url": "/checkout/v3/orders/{order_id}",
    "method": "getOrderDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Get order details",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "You were not authorized to execute this operation."
      },
      {
        "statusCode": "403",
        "description": "Merchant was not activated."
      },
      {
        "statusCode": "404",
        "description": "We did not find any order with given ID. You need to create a new order."
      }
    ]
  },
  {
    "url": "/checkout/v3/orders/{order_id}",
    "method": "updateOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Update an order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDER_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "order_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "f3392f8b-6116-4073-ab96-e330819e2c07"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Women's Fashion"
      },
      {
        "name": "purchase_country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "US"
      },
      {
        "name": "purchase_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "en-US"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CHECKOUT_INCOMPLETE"
      },
      {
        "name": "billing_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "order_amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 50000
      },
      {
        "name": "order_tax_amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4545
      },
      {
        "name": "order_lines",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_urls",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "html_snippet",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "<div id='klarna-checkout-container'><script>alert('Initializing Klarna Checkout');</script></div>"
      },
      {
        "name": "merchant_reference1",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "45aa52f387871e3a210645d4"
      },
      {
        "name": "merchant_reference2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "45aa52f387871e3a210645d4"
      },
      {
        "name": "started_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "completed_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "attachment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "external_payment_methods",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "external_checkouts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_countries",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_options",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_data",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "{\"marketplace_seller_info\":[{\"product_category\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}"
      },
      {
        "name": "gui",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_requested",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "selected_shipping_option",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "recurring",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "recurring_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recurring_description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billing_countries",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "discount_lines",
        "schema": "array",
        "required": false,
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
        "description": "We were unable to update an order with the provided data. Some field constraint was violated."
      },
      {
        "statusCode": "401",
        "description": "You were not authorized to execute this operation."
      },
      {
        "statusCode": "403",
        "description": "You tried to modify a read only resource."
      },
      {
        "statusCode": "404",
        "description": "We did not find any order with given ID. You need to create a new order."
      }
    ]
  },
  {
    "url": "/checkout/v3/orders/{order_id}/abort",
    "method": "abortOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Order",
    "typeScriptTag": "order",
    "description": "Abort an order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "You tried to modify a read only resource."
      },
      {
        "statusCode": "404",
        "description": "We did not find any order with given ID. You need to create a new order."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Klarna Checkout API V3"
      apiBaseUrl="https://api.klarna.com"
      apiVersion="1.0.0"
      endpoints={3}
      sdkMethods={4}
      schemas={24}
      parameters={74}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/klarna/checkout/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/klarna/checkout/openapi.yaml"
      
    />
  );
}
  