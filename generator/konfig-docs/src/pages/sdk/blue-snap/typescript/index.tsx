import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BlueSnapTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="blue-snap-typescript-sdk"
      metaDescription={`At BlueSnap, we look at payments a little differently. Our Payment Orchestration Platform helps businesses accept payments globally and is designed to increase revenue and reduces costs. We provide a comprehensive back-end solutions that simplifies the complexity of payments, managing the full process from start to finish.

BlueSnap supports payments through multiple sales channels such as online and mobile sales, marketplaces, subscriptions, invoice payments and manual orders through a virtual terminal. And for businesses looking for embedded payments, we offer white-labeled payments for platforms with automated underwriting and onboarding that supports marketplaces and split payments.

And with one integration and contract, businesses can sell in over 200 geographies with access to local acquiring in 47 countries, 110+ currencies and 100+ global payment types, including popular eWallets, automated accounts receivable, world-class fraud protection and chargeback management, built-in solutions for regulation and tax compliance, and unified global reporting to help businesses grow.

With a US headquarters in Waltham, MA, and EU headquarters in Dublin, Ireland, BlueSnap is backed by world-class private equity investors including Great Hill Partners and Parthenon Capital Partners.

Learn more at BlueSnap.com`}
      company="BlueSnap"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluesnap/logo.png"
      companyKebabCase="blue-snap"
      clientNameCamelCase="blueSnap"
      homepage="www.bluesnap.com/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluesnap/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluesnap/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payments","embedded_payments","global_payments"]}
      methods={[
  {
    "url": "/transactions",
    "method": "createTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authorization",
    "typeScriptTag": "authorization",
    "description": "Auth Only",
    "parameters": [
      {
        "name": "amount",
        "schema": "number",
        "description": "",
        "default": 11
      },
      {
        "name": "softDescriptor",
        "schema": "string",
        "description": "",
        "default": "DescTest"
      },
      {
        "name": "cardHolderInfo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "default": "USD"
      },
      {
        "name": "creditCard",
        "schema": "object",
        "description": ""
      },
      {
        "name": "cardTransactionType",
        "schema": "string",
        "description": "",
        "default": "AUTH_ONLY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/transactions",
    "method": "authTransaction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Reversal",
    "typeScriptTag": "reversal",
    "description": "Auth Reversal",
    "parameters": [
      {
        "name": "cardTransactionType",
        "schema": "string",
        "description": "",
        "default": "AUTH_REVERSAL"
      },
      {
        "name": "transactionId",
        "schema": "integer",
        "description": "",
        "default": 1011671987
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/transactions/{transactionId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Retrieve",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "transaction ID received in the response from BlueSnap",
        "example": "TRANSACTIONID",
        "default": "1011582369"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/alt-transactions",
    "method": "createSofortTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Create SEPA DD Transaction",
    "parameters": [
      {
        "name": "ecpTransaction",
        "schema": "object",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": "",
        "default": 9.65
      },
      {
        "name": "payerInfo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "softDescriptor",
        "schema": "string",
        "description": "",
        "default": "ABC COMPANY"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "default": "EUR"
      },
      {
        "name": "authorizedByShopper",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "becsDirectDebitTransaction",
        "schema": "object",
        "description": ""
      },
      {
        "name": "idealTransaction",
        "schema": "object",
        "description": ""
      },
      {
        "name": "localBankTransferTransaction",
        "schema": "object",
        "description": ""
      },
      {
        "name": "paypalTransaction",
        "schema": "object",
        "description": ""
      },
      {
        "name": "acssDirectDebitTransaction",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sepaDirectDebitTransaction",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/alt-transactions",
    "method": "updatePaypalTransaction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Update PayPal Transaction",
    "parameters": [
      {
        "name": "amount",
        "schema": "number",
        "description": "",
        "default": 105
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "default": "USD"
      },
      {
        "name": "paypalTransaction",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/alt-transactions/{transactionId}",
    "method": "getSepaDd",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Retrieve SEPA DD Transaction",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "transaction ID received in the response from BlueSnap",
        "example": "TRANSACTIONID",
        "default": "1014672453"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/alt-transactions/resolve",
    "method": "getSofortTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Retrieve Sofort Transaction",
    "parameters": [
      {
        "name": "orderId",
        "schema": "integer",
        "required": true,
        "description": "Order ID received in the Create Sofort Transaction response from BlueSnap",
        "example": 0,
        "default": 20922493
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/agreements/debit/{region}/{type}",
    "method": "createDebitForAusCan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Agreement",
    "typeScriptTag": "agreement",
    "description": "Create Debit Agreement",
    "parameters": [
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "Represents the country. Possible Values: `au`, `ca`",
        "example": "REGION",
        "default": "ca"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Represents the mandate type. Possible Values: `onetime`,`recurring`, `ondemand`",
        "example": "TYPE",
        "default": "onetime"
      },
      {
        "name": "planid",
        "schema": "string",
        "description": "SKU number"
      },
      {
        "name": "overriderecurringchargeamount",
        "schema": "string",
        "description": "the amount which overrides recurring charge"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/agreements/{agreementId}",
    "method": "getDebit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agreement",
    "typeScriptTag": "agreement",
    "description": "Get Debit Agreement",
    "parameters": [
      {
        "name": "agreementId",
        "schema": "string",
        "description": "Argument included in the response for the Create Debit Agreement request",
        "default": "1065"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/agreements/prenotification/{transactionId}",
    "method": "getPreNotificationDebitAgreement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Get Pre-Notification Debit Agreement",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "description": "Argument included in the response for the Create Debit Agreement request",
        "default": "38943468"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/alt-transactions/resolve?orderId={orderId}",
    "method": "getPaypalTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Retrieve PayPal Transaction",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "order ID received in the response",
        "example": "ORDERID",
        "default": "5666625"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/batch-transactions",
    "method": "createBatchTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Create Batch Transaction",
    "parameters": [
      {
        "name": "batchTransaction",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/transactions/refund/{transactionId}",
    "method": "initiateRefund",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Refund",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "ID of the transaction to be refunded <br> Required if not using `merchantTransactionId`",
        "example": "TRANSACTIONID",
        "default": "1095710747"
      },
      {
        "name": "reason",
        "schema": "string",
        "description": "",
        "default": "Refund for order #1992"
      },
      {
        "name": "cancelSubscriptions",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "transactionMetaData",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/transactions/pending-refund/{transactionId}",
    "method": "cancelPendingRefund",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Cancel Pending Refund",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "transactionId received from BlueSnap",
        "example": "TRANSACTIONID",
        "default": "1109144995"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/vaulted-shoppers",
    "method": "createVaultedShopper",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shopper",
    "typeScriptTag": "shopper",
    "description": "Create Vaulted Shopper",
    "parameters": [
      {
        "name": "paymentSources",
        "schema": "object",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "default": "FirstName"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "default": "LastName"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/vaulted-shoppers/{vaultedShopperId}",
    "method": "deleteVaultedShopper",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shopper",
    "typeScriptTag": "shopper",
    "description": "Delete Vaulted Shopper",
    "parameters": [
      {
        "name": "vaultedShopperId",
        "schema": "string",
        "required": true,
        "description": "vaultedShopperId received from BlueSnap",
        "example": "VAULTEDSHOPPERID",
        "default": "20769005"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/vaulted-shoppers/{vaultedShopperId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shopper",
    "typeScriptTag": "shopper",
    "description": "Retrieve Vaulted Shopper",
    "parameters": [
      {
        "name": "vaultedShopperId",
        "schema": "string",
        "required": true,
        "description": "vaultedShopperId received from BlueSnap",
        "example": "VAULTEDSHOPPERID",
        "default": "20769005"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/vaulted-shoppers/{vaultedShopperId}",
    "method": "updateVaultedShopper",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shopper",
    "typeScriptTag": "shopper",
    "description": "Update Vaulted Shopper",
    "parameters": [
      {
        "name": "vaultedShopperId",
        "schema": "string",
        "required": true,
        "description": "vaultedShopperId received from BlueSnap",
        "example": "VAULTEDSHOPPERID",
        "default": "40444721"
      },
      {
        "name": "paymentSources",
        "schema": "object",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "default": "FirstName"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "default": "LastName"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/recurring/plans",
    "method": "createRecurringPlan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Plan",
    "typeScriptTag": "plan",
    "description": "Create Plan",
    "parameters": [
      {
        "name": "chargeFrequency",
        "schema": "string",
        "description": "",
        "default": "MONTHLY"
      },
      {
        "name": "gracePeriodDays",
        "schema": "integer",
        "description": "",
        "default": 10
      },
      {
        "name": "trialPeriodDays",
        "schema": "integer",
        "description": "",
        "default": 14
      },
      {
        "name": "initialChargeAmount",
        "schema": "integer",
        "description": "",
        "default": 100
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "default": "Gold Plan"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "default": "USD"
      },
      {
        "name": "maxNumberOfCharges",
        "schema": "integer",
        "description": "",
        "default": 12
      },
      {
        "name": "recurringChargeAmount",
        "schema": "number",
        "description": "",
        "default": 29.99
      },
      {
        "name": "chargeOnPlanSwitch",
        "schema": "boolean",
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/recurring/plans/{planId}",
    "method": "getSpecific",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Plan",
    "typeScriptTag": "plan",
    "description": "Retrieve Specific Plan",
    "parameters": [
      {
        "name": "planId",
        "schema": "integer",
        "required": true,
        "description": "BlueSnap identifier for the plan.",
        "example": 0,
        "default": 2283845
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/recurring/plans/{planId}",
    "method": "updateRecurringPlan",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Plan",
    "typeScriptTag": "plan",
    "description": "Update Plan",
    "parameters": [
      {
        "name": "planId",
        "schema": "integer",
        "required": true,
        "description": "BlueSnap identifier for the plan.",
        "example": 0,
        "default": 2111111
      },
      {
        "name": "chargeFrequency",
        "schema": "string",
        "description": "",
        "default": "MONTHLY"
      },
      {
        "name": "trialPeriodDays",
        "schema": "string",
        "description": "",
        "default": "7"
      },
      {
        "name": "initialChargeAmount",
        "schema": "string",
        "description": "",
        "default": "30"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "default": "Gold Plan"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "default": "USD"
      },
      {
        "name": "recurringChargeAmount",
        "schema": "string",
        "description": "",
        "default": "19"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/recurring/plans?{parameters}",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Plan",
    "typeScriptTag": "plan",
    "description": "Retrieve All Plans",
    "parameters": [
      {
        "name": "pagesize",
        "schema": "string",
        "description": "",
        "default": "5"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "",
        "default": "2185254"
      },
      {
        "name": "gettotal",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "fulldescription",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/recurring/subscriptions",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Create Subscription",
    "parameters": [
      {
        "name": "payerInfo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "paymentSource",
        "schema": "object",
        "description": ""
      },
      {
        "name": "planId",
        "schema": "integer",
        "description": "",
        "default": 2283845
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/recurring/subscriptions/{subscriptionId}",
    "method": "getSpecific",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Retrieve Specific Subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "integer",
        "required": true,
        "description": "BlueSnap identifier for the subscription.",
        "example": 0,
        "default": 8491535
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/recurring/subscriptions/{subscriptionId}",
    "method": "updateSubscription",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Update Subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "integer",
        "required": true,
        "description": "BlueSnap identifier for the subscription.",
        "example": 0,
        "default": 8491543
      },
      {
        "name": "planId",
        "schema": "string",
        "description": "",
        "default": "2283849"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/recurring/ondemand",
    "method": "createMerchantManagedSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Create Merchant-Managed Subscription",
    "parameters": [
      {
        "name": "amount",
        "schema": "number",
        "description": "",
        "default": 45
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "default": "USD"
      },
      {
        "name": "payerInfo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "paymentSource",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/recurring/ondemand/{subscriptionId}",
    "method": "createMerchantManagedCharge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Create Merchant-Managed Subscription Charge",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "integer",
        "required": true,
        "description": "BlueSnap identifier for the subscription.",
        "example": 0,
        "default": 10543419
      },
      {
        "name": "amount",
        "schema": "number",
        "description": "",
        "default": 45
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "default": "USD"
      },
      {
        "name": "merchantTransactionId",
        "schema": "string",
        "description": "",
        "default": "MyUniqueOnDemandSubscription"
      },
      {
        "name": "taxReference",
        "schema": "string",
        "description": "",
        "default": "048deff0-a285-47e1-bc39-42f79bf0095b"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/recurring/subscriptions/:subscriptionId/switch-charge-amount",
    "method": "getSwitchChargeAmount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Retrieve Subscription Switch Charge Amount",
    "parameters": [
      {
        "name": "newplanid",
        "schema": "string",
        "description": "",
        "default": "111111"
      },
      {
        "name": "newquantity",
        "schema": "string",
        "description": "",
        "default": "2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/transactions/approval",
    "method": "approveMerchantTransaction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Merchant Approve Transaction",
    "parameters": [
      {
        "name": "transactionid",
        "schema": "string",
        "description": "either `transactionid` or `merchanttransactionid` <b>is required</b> <br />ID of the transaction to be approved/declined",
        "default": "38612140"
      },
      {
        "name": "approvetransaction",
        "schema": "boolean",
        "description": "Set to `true` to approve the transaction or to `false` to decline the transaction. Default value is `true`.",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/vendors",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vendor",
    "typeScriptTag": "vendor",
    "description": "Create Vendor",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "default": "vendor@example.com"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "default": "Joe"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "default": "Smith"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "",
        "default": "1-123-456-7890"
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "default": "123 Main Street"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "default": "Boston"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "default": "US"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "default": "MA"
      },
      {
        "name": "zip",
        "schema": "string",
        "description": "",
        "default": "02453"
      },
      {
        "name": "defaultPayoutCurrency",
        "schema": "string",
        "description": "",
        "default": "USD"
      },
      {
        "name": "ipnUrl",
        "schema": "string",
        "description": "",
        "default": "https://ipnaddress.com"
      },
      {
        "name": "vendorPrincipal",
        "schema": "object",
        "description": ""
      },
      {
        "name": "vendorAgreement",
        "schema": "object",
        "description": ""
      },
      {
        "name": "payoutInfo",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/vendors/{vendorId}",
    "method": "getVendor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendor",
    "typeScriptTag": "vendor",
    "description": "Retrieve Vendor",
    "parameters": [
      {
        "name": "vendorId",
        "schema": "integer",
        "required": true,
        "description": "BlueSnap identifier for the vendor",
        "example": 0,
        "default": 837389
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/vendors/{vendorId}",
    "method": "updateVendor",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Vendor",
    "typeScriptTag": "vendor",
    "description": "Update Vendor",
    "parameters": [
      {
        "name": "vendorId",
        "schema": "integer",
        "required": true,
        "description": "BlueSnap identifier for the vendor",
        "example": 0
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "default": "vendor@bluesnap.com"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "default": "Important Vendor"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "default": "Joe"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "default": "Smith"
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "default": "123 Main Street"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "default": "testing city"
      },
      {
        "name": "zip",
        "schema": "string",
        "description": "",
        "default": "02453"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "default": "US"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "",
        "default": "1-054-976-6778"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "default": "MA"
      },
      {
        "name": "taxId",
        "schema": "integer",
        "description": "",
        "default": 123456789
      },
      {
        "name": "vendorUrl",
        "schema": "string",
        "description": "",
        "default": "http://mycompany.com"
      },
      {
        "name": "ipnUrl",
        "schema": "string",
        "description": "",
        "default": "https://ipnaddress.com"
      },
      {
        "name": "defaultPayoutCurrency",
        "schema": "string",
        "description": "",
        "default": "USD"
      },
      {
        "name": "vendorPrincipal",
        "schema": "object",
        "description": ""
      },
      {
        "name": "payoutInfo",
        "schema": "array",
        "description": ""
      },
      {
        "name": "vendorAgreement",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="API Settings"
      apiBaseUrl="https://sandbox.bluesnap.com/services/2"
      apiVersion="8976-Tools"
      endpoints={29}
      sdkMethods={36}
      schemas={16}
      parameters={129}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluesnap/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bluesnap/openapi.yaml"
      developerDocumentation="developers.bluesnap.com/v8976-JSON/reference"
    />
  );
}
  