import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BityTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="bity-typescript-sdk"
      metaDescription={`Bity provides crypto finance services and products for individuals and businesses all over the world. We work as an exchange between cryptocurrencies and fiat money through the blockchain.

What We Do

We offer a cryptocurrency exchange platform, a network of BTMs / CTMs (cryptocurrency teller machines) in Switzerland, crypto to fiat and fiat to crypto online bill pay and money transfer solutions, APIs for businesses, over-the-counter trading and affiliate programs.

Who We Are

Founded in January 2014, our company, as a Swiss-based FinTech startup, is positioned at the intersection of finance, technology and innovation. We connect people with the collaborative economy by simplifying the conversion from traditional money into cryptocurrencies and Blockchain assets.

Our Mission: To build a universal cryptocurrency gateway that provides secure and reliable products and services.

Our Goal: To empower digital nations.

Why Choose Us

As a Swiss company, we manage ourselves within a legal environment, with a high regard for data protection and privacy, and a strong financial ecosystem.

Some other benefits of choosing us as your crypto finance services provider include:

- Compliance: Audited by KPMG, Oversight by Swiss regulators, Swiss Digital Finance Compliance Association (DFCA) Member. fully licensed and registered brokerage.
- Years spent building trusted and reliable Swiss and European banking partnerships.
- We provide a platform accepting multiple currencies: cryptocurrencies (BTC, ETH), digital assets (REP), and fiat (EUR, CHF) with easy integration for developers (API).
- We are a secure and reliable link between traditional finance and blockchain economy.
- We focus on privacy, automation, and delivering our crypto products and services with the highest quality Swiss standards in everything we do.

We are the Swiss gateway to cryptocurrencies for a decentralized future.

Visit us on the web at https://bity.com
Follow us on Twitter: @Bity or Facebook.com/hello.bity`}
      company="Bity"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bity/logo.png"
      companyKebabCase="bity"
      clientNameCamelCase="bity"
      homepage="bity.com/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bity/favicon.png"
      contactUrl="https://bity.com/"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bity/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["fintech","banking","blockchain","crypto_platform","financial_services","bitcoin","cryptocurrency","financial_technology"]}
      methods={[
  {
    "url": "/currencies",
    "method": "currencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currencies",
    "typeScriptTag": "currencies",
    "description": "List currencies",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "Comma-separated list of tags. Currencies that contain all tags will be filtered."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/currencies/{currency_code}",
    "method": "getByCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currencies",
    "typeScriptTag": "currencies",
    "description": "Get a single currency",
    "parameters": [
      {
        "name": "currencyCode",
        "schema": "string",
        "required": true,
        "description": "Currency code identifying the currency about which to return information.",
        "example": "BTC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Currency not found or unsupported"
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders",
    "method": "orders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "List previously placed orders",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of the page to retrieve, defaults to the first page (https://doc.bity.com/exchange/v2/. See also the `Link` header in the 200 response."
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of orders to include in a page. When not specified, 100."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "When specified, restrict the orders listing to orders with a\nspecific status.\n\nThe currently understood values are:\n\n- `finalized`: Only include orders that have reached a final state.\n- `ongoing`: Only include orders that are not finalized.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders",
    "method": "order",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Place an order",
    "parameters": [
      {
        "name": "client_value",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "contact_person",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "input",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "output",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "partner_fee",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The order has been successfully created.\n\nThe `Location` header contains the URI (which can be relative) at\nwhich the order status and details can be retrieved. That is the\n`Location` header is meant to be interpreted as per RFC 7231 section\n7.1.2.\n"
      },
      {
        "statusCode": "400",
        "description": "Following cases:\n\n- Unsupported currency pair.\n- Quota exceeded for the bank account or crypto-address.\n- Provided input payment address cannot be used currently. Please try again later.\n- Internal error.\n"
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/estimate",
    "method": "calculateAmountEstimate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Estimate the amount of an order",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Malformed request. <br> Invalid currency code. <br> Invalid currency pair. <br> Invalid amount."
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/estimate/multiple",
    "method": "performMultipleEstimations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Perform several estimations in one request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This endpoint can produce the same errors as `/orders/estimate` in addition to refusing to perform too many estimations in a single call."
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{order_uuid}",
    "method": "getOrderDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get the details of an order",
    "parameters": [
      {
        "name": "orderUuid",
        "schema": "string",
        "required": true,
        "description": "ID of the order.",
        "example": "ORDER_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Order with such ID not found."
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{order_uuid}/bank_transfer_qr_bill",
    "method": "getQrBill",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Get the QR-bill of an order where the input is bank_transfer.",
    "parameters": [
      {
        "name": "orderUuid",
        "schema": "string",
        "required": true,
        "description": "Identifier of the order for which to retrieve the QR-bill image.",
        "example": "ORDER_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The specified order does not exist, its input is not bank_transfer or the order's input currency is not fiat."
      }
    ]
  },
  {
    "url": "/orders/{order_uuid}/cancel",
    "method": "order",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Cancel an order",
    "parameters": [
      {
        "name": "orderUuid",
        "schema": "string",
        "required": true,
        "description": "Identifier of the order to attempt to cancel",
        "example": "ORDER_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "The request to cancel the order is being processed asynchronously.\n\nIt is at this time not possible to know whether the cancellation\nattempt will be successful or not.\n"
      },
      {
        "statusCode": "204",
        "description": "The cancellation attempt was successful."
      },
      {
        "statusCode": "400",
        "description": "The cancellation attempt was unsuccessful."
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{order_uuid}/duplicate",
    "method": "order",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Duplicate an order",
    "parameters": [
      {
        "name": "orderUuid",
        "schema": "string",
        "required": true,
        "description": "ID of the order to duplicate.",
        "example": "ORDER_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The order has been successfully created.\n\nThe `Location` header contains the URI (which can be relative) at\nwhich the order status and details can be retrieved. That is, the\n`Location` header is meant to be interpreted as per RFC 7231\nsection 7.1.2.\n"
      },
      {
        "statusCode": "400",
        "description": "This operation can return the same errors as the `place_order` operation (POST /orders)."
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{order_uuid}/execute",
    "method": "order",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Execute order",
    "parameters": [
      {
        "name": "orderUuid",
        "schema": "string",
        "required": true,
        "description": "Identifier of the order to attempt to execute",
        "example": "ORDER_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "The order has been paid, execution is ongoing"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      }
    ]
  },
  {
    "url": "/orders/{order_uuid}/signature",
    "method": "submitSignature",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Orders",
    "typeScriptTag": "orders",
    "description": "Sign proof of wallet ownership message",
    "parameters": [
      {
        "name": "orderUuid",
        "schema": "string",
        "required": true,
        "description": "ID of the order.",
        "example": "ORDER_UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The signature is correct, the order details now contain `payment_details`."
      },
      {
        "statusCode": "400",
        "description": "The signature is invalid."
      },
      {
        "statusCode": "404",
        "description": "The associated order could not be found or there is no message to sign."
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": "Internal error."
      },
      {
        "statusCode": "503",
        "description": "Internal error."
      },
      {
        "statusCode": "504",
        "description": "Internal error."
      }
    ]
  },
  {
    "url": "/pairs",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currencies",
    "typeScriptTag": "currencies",
    "description": "List currency pairs",
    "parameters": [
      {
        "name": "input",
        "schema": "string",
        "required": false,
        "description": "Retrieve all pairs for given input currency code. This parameter can be repeated several times to match many input currencies."
      },
      {
        "name": "output",
        "schema": "string",
        "required": false,
        "description": "Retrieve all pairs for given output currency code. This parameter can be repeated several times to match many output currencies."
      },
      {
        "name": "enabled",
        "schema": "string",
        "required": false,
        "description": "Retrieve all pairs that are enabled for trading or not."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Bity Exchange API"
      apiBaseUrl="https://exchange.api.bity.com/v2"
      apiVersion="2.6.0"
      endpoints={13}
      sdkMethods={23}
      schemas={85}
      parameters={20}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bity/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bity/openapi.yaml"
      developerDocumentation="doc.bity.com/exchange/v2/"
    />
  );
}
  