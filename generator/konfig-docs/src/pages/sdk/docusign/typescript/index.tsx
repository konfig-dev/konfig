import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function DocusignTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="docusign-typescript-sdk"
      metaDescription="DocuSign makes it easy to send, sign and manage documents securely. With DocuSign, individuals and organizations can streamline the document signing process, reduce paperwork, and increase efficiency. DocuSign offers electronic signature solutions that are trusted by millions worldwide, enabling users to sign documents anytime, anywhere, on any device."
      company="Docusign"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/docusign/logo.png"
      clientNameCamelCase="docusign"
      homepage="docusign.com"
      lastUpdated={new Date("2024-03-13T01:40:02.817Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/docusign/favicon.png"
      contactUrl="https://developers.docusign.com/"
      contactEmail="devcenter@docusign.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/docusign/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["security","collaboration","electronic_signature","document_management"]}
      methods={[
  {
    "url": "/service_information",
    "method": "getServiceInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Services",
    "typeScriptTag": "services",
    "description": "Retrieves the available REST API versions.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1",
    "method": "getResourceInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Resources",
    "typeScriptTag": "resources",
    "description": "Lists resources for REST version specified",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts",
    "method": "postAccounts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Creates new accounts.",
    "parameters": [
      {
        "name": "accountName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addressInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "creditCardInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "directDebitProcessorInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "distributorCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "distributorPassword",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enablePreAuth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopePartitionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initialUser",
        "schema": "object",
        "description": ""
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentProcessor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentProcessorInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "planInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "processPayment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "referralInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "socialAccountInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taxExemptId",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}",
    "method": "deleteAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Deletes the specified account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "redactUserData",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}",
    "method": "getAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Retrieves the account information for the specified account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "includeAccountSettings",
        "schema": "string",
        "required": false,
        "description": "When **true,** includes account settings in the response. The default value is **false.**"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains account Information."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/billing_charges",
    "method": "getAccountBillingCharges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Gets list of recurring and usage charges for the account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "includeCharges",
        "schema": "string",
        "required": false,
        "description": "Specifies which billing charges to return.\nValid values are:\n\n* envelopes\n* seats\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Defines a billing charge response object."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/billing_invoices",
    "method": "getBillingInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Get a List of Billing Invoices",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Specifies the date/time of the earliest invoice in the account to retrieve."
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "Specifies the date/time of the latest invoice in the account to retrieve."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Defines a billing invoice response object."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/billing_invoices/{invoiceId}",
    "method": "getBillingInvoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieves a billing invoice.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the invoice.",
        "example": "INVOICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains information about a billing invoice."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/billing_invoices_past_due",
    "method": "getBillingInvoicesPastDue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Get a list of past due invoices.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/billing_payments",
    "method": "getPaymentList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Gets payment information for one or more payments.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Specifies the date/time of the earliest payment in the account to retrieve."
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "Specifies the date/time of the latest payment in the account to retrieve."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Defines a billing payments response object."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/billing_payments",
    "method": "postPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Posts a payment to a past due invoice.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "paymentAmount",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Defines an billing payment response object."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/billing_payments/{paymentId}",
    "method": "getPayment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Gets billing payment information for a specific payment.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the payment.",
        "example": "PAYMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Defines a billing payment request object."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/billing_plan",
    "method": "getBillingPlan",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BillingPlans",
    "typeScriptTag": "billingPlans",
    "description": "Get Account Billing Plan",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "includeCreditCardInformation",
        "schema": "string",
        "required": false,
        "description": "When **true,** payment information including credit card information will show in the return."
      },
      {
        "name": "includeDowngradeInformation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeMetadata",
        "schema": "string",
        "required": false,
        "description": "When **true,** the `canUpgrade` and `renewalStatus` properties are included the response and an array of `supportedCountries` is added to the `billingAddress` information. "
      },
      {
        "name": "includeSuccessorPlans",
        "schema": "string",
        "required": false,
        "description": "When **true,** excludes successor information from the response."
      },
      {
        "name": "includeTaxExemptId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Defines an account billing plan response object."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/billing_plan",
    "method": "putBillingPlan",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "BillingPlans",
    "typeScriptTag": "billingPlans",
    "description": "Updates an account billing plan.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "previewBillingPlan",
        "schema": "string",
        "required": false,
        "description": "When **true,** updates the account using a preview billing plan."
      },
      {
        "name": "appStoreReceipt",
        "schema": "object",
        "description": ""
      },
      {
        "name": "billingAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "creditCardInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "directDebitProcessorInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "downgradeReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enablePreAuth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSupport",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includedSeats",
        "schema": "string",
        "description": ""
      },
      {
        "name": "incrementalSeats",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentProcessor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentProcessorInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "planInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "processPayment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "referralInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "renewalStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "saleDiscountAmount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "saleDiscountFixedAmount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "saleDiscountPercent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "saleDiscountPeriods",
        "schema": "string",
        "description": ""
      },
      {
        "name": "saleDiscountSeatPriceOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxExemptId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Defines a billing plan update response object."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/billing_plan/credit_card",
    "method": "getCreditCardInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BillingPlans",
    "typeScriptTag": "billingPlans",
    "description": "Get credit card information",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object contains information about a credit card that is associated with an account."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/billing_plan/downgrade",
    "method": "getDowngradeRequestBillingInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BillingPlans",
    "typeScriptTag": "billingPlans",
    "description": "Returns downgrade plan information for the specified account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/billing_plan/downgrade",
    "method": "putDowngradeAccountBillingPlan",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "BillingPlans",
    "typeScriptTag": "billingPlans",
    "description": "Queues downgrade billing plan request for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "downgradeEventType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "planInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "promoCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "saleDiscount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "saleDiscountPeriods",
        "schema": "string",
        "description": ""
      },
      {
        "name": "saleDiscountType",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/billing_plan/purchased_envelopes",
    "method": "putPurchasedEnvelopes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "BillingPlans",
    "typeScriptTag": "billingPlans",
    "description": "Reserved: Purchase additional envelopes.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "amount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "platform",
        "schema": "string",
        "description": ""
      },
      {
        "name": "productId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "receiptData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "storeName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/brands",
    "method": "deleteBrands",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AccountBrands",
    "typeScriptTag": "accountBrands",
    "description": "Deletes one or more brand profiles.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "brands",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The AccountBrands resource enables you to use account-level brands to customize the styles and text that recipients see."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/brands",
    "method": "getBrands",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountBrands",
    "typeScriptTag": "accountBrands",
    "description": "Gets a list of brands.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "excludeDistributorBrand",
        "schema": "string",
        "required": false,
        "description": "When **true,** excludes distributor brand information from the response set."
      },
      {
        "name": "includeLogos",
        "schema": "string",
        "required": false,
        "description": "When **true,** returns the logos associated with the brand."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The AccountBrands resource enables you to use account-level brands to customize the styles and text that recipients see."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/brands",
    "method": "postBrands",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AccountBrands",
    "typeScriptTag": "accountBrands",
    "description": "Creates one or more brand profiles for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "brandCompany",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandLanguages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "brandName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "colors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "defaultBrandLanguage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailContent",
        "schema": "array",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "isOrganizationBrand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isOverridingCompanyName",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isSendingDefault",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isSigningDefault",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "landingPages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      },
      {
        "name": "logos",
        "schema": "object",
        "description": ""
      },
      {
        "name": "organizationBrandLogo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resources",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The AccountBrands resource enables you to use account-level brands to customize the styles and text that recipients see."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/brands/{brandId}",
    "method": "deleteBrand",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AccountBrands",
    "typeScriptTag": "accountBrands",
    "description": "Deletes a brand.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "The ID of the brand.",
        "example": "BRANDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/brands/{brandId}",
    "method": "getBrand",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountBrands",
    "typeScriptTag": "accountBrands",
    "description": "Gets information about a brand.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "The ID of the brand.",
        "example": "BRANDID"
      },
      {
        "name": "includeExternalReferences",
        "schema": "string",
        "required": false,
        "description": "When **true,** the landing pages and links associated with the brand are included in the response."
      },
      {
        "name": "includeLogos",
        "schema": "string",
        "required": false,
        "description": "When **true,** the URIs for the logos associated with the brand are included in the response."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about a brand that is associated with an account. A brand applies custom styles and text to an envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/brands/{brandId}",
    "method": "putBrand",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccountBrands",
    "typeScriptTag": "accountBrands",
    "description": "Updates an existing brand.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "The ID of the brand.",
        "example": "BRANDID"
      },
      {
        "name": "replaceBrand",
        "schema": "string",
        "required": false,
        "description": "When **true,** replaces the brand instead of updating it. The only unchanged value is the brand ID. The request body must be XML. The default value is **false.**"
      },
      {
        "name": "brandCompany",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandLanguages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "brandName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "colors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "defaultBrandLanguage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailContent",
        "schema": "array",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "isOrganizationBrand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isOverridingCompanyName",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isSendingDefault",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isSigningDefault",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "landingPages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      },
      {
        "name": "logos",
        "schema": "object",
        "description": ""
      },
      {
        "name": "organizationBrandLogo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resources",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about a brand that is associated with an account. A brand applies custom styles and text to an envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/brands/{brandId}/file",
    "method": "getBrandExportFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountBrands",
    "typeScriptTag": "accountBrands",
    "description": "Exports a brand.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "The ID of the brand.",
        "example": "BRANDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/brands/{brandId}/logos/{logoType}",
    "method": "deleteBrandLogo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AccountBrands",
    "typeScriptTag": "accountBrands",
    "description": "Deletes a brand logo.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "The ID of the brand.",
        "example": "BRANDID"
      },
      {
        "name": "logoType",
        "schema": "string",
        "required": true,
        "description": "The type of logo. Valid values are:\n\n- `primary` \n- `secondary` \n- `email`",
        "example": "LOGOTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/brands/{brandId}/logos/{logoType}",
    "method": "getBrandLogo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountBrands",
    "typeScriptTag": "accountBrands",
    "description": "Gets a brand logo.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "The ID of the brand.",
        "example": "BRANDID"
      },
      {
        "name": "logoType",
        "schema": "string",
        "required": true,
        "description": "The type of logo. Valid values are:\n\n- `primary` \n- `secondary` \n- `email`",
        "example": "LOGOTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/brands/{brandId}/logos/{logoType}",
    "method": "putBrandLogo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccountBrands",
    "typeScriptTag": "accountBrands",
    "description": "Updates a brand logo.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "The ID of the brand.",
        "example": "BRANDID"
      },
      {
        "name": "logoType",
        "schema": "string",
        "required": true,
        "description": "The type of logo. Valid values are:\n\n- `primary` \n- `secondary` \n- `email`",
        "example": "LOGOTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/brands/{brandId}/resources",
    "method": "getBrandResourcesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountBrands",
    "typeScriptTag": "accountBrands",
    "description": "Returns metadata about the branding resources for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "The ID of the brand.",
        "example": "BRANDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/brands/{brandId}/resources/{resourceContentType}",
    "method": "getBrandResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountBrands",
    "typeScriptTag": "accountBrands",
    "description": "Returns a branding resource file.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "The ID of the brand.",
        "example": "BRANDID"
      },
      {
        "name": "resourceContentType",
        "schema": "string",
        "required": true,
        "description": "The type of brand resource file to return. Valid values are:\n\n- `sending`\n- `signing`\n- `email`\n- `signing_captive`",
        "example": "RESOURCECONTENTTYPE"
      },
      {
        "name": "langcode",
        "schema": "string",
        "required": false,
        "description": "The ISO 3166-1 alpha-2 codes for the languages that the brand supports."
      },
      {
        "name": "returnMaster",
        "schema": "string",
        "required": false,
        "description": "Specifies which resource file data to return. When **true,** only the master resource file is returned. When **false,** only the elements that you modified are returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/brands/{brandId}/resources/{resourceContentType}",
    "method": "putBrandResources",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccountBrands",
    "typeScriptTag": "accountBrands",
    "description": "Updates a branding resource file.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "brandId",
        "schema": "string",
        "required": true,
        "description": "The ID of the brand.",
        "example": "BRANDID"
      },
      {
        "name": "resourceContentType",
        "schema": "string",
        "required": true,
        "description": "The type of brand resource file that you are updating. Valid values are:\n\n- `sending`\n- `signing`\n- `email`\n- `signing_captive`",
        "example": "RESOURCECONTENTTYPE"
      },
      {
        "name": "file.xml",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE.XML"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the resource files that the brand uses for the email, signing, sending, and captive (embedded) signing experiences."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/bulk_send_batch",
    "method": "getBulkSendBatches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BulkSend",
    "typeScriptTag": "bulkSend",
    "description": "Returns a list of bulk send batch summaries. ",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "batchIds",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of batch IDs to query."
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n\nValid values: `1` to `100`<br>\nDefault: `100`"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "The start date for a date range in UTC DateTime format.\n\n**Note:** If this property is null, no date filtering is applied."
      },
      {
        "name": "searchText",
        "schema": "string",
        "required": false,
        "description": "Use this parameter to search for specific text."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "The kind of results to collect. Must be one of:\n\n- all\n- failed\n- sent\n- queued"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "The end of a search date range in UTC DateTime format. When you use this parameter, only templates created up to this date and time are returned.\n\n**Note:** If this property is null, the value defaults to the current date."
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of bulk send batch summaries. "
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}",
    "method": "getBulkSendBatchStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BulkSend",
    "typeScriptTag": "bulkSend",
    "description": "Gets the status of a specific bulk send batch.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "bulkSendBatchId",
        "schema": "string",
        "required": true,
        "description": "The batch ID.",
        "example": "BULKSENDBATCHID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Result of `getBulkSendBatchStatus`"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}",
    "method": "putBulkSendBatchStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "BulkSend",
    "typeScriptTag": "bulkSend",
    "description": "Updates the name of a bulk send batch.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "bulkSendBatchId",
        "schema": "string",
        "required": true,
        "description": "The batch ID.",
        "example": "BULKSENDBATCHID"
      },
      {
        "name": "batchName",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Result of `getBulkSendBatchStatus`"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}/{bulkAction}",
    "method": "putBulkSendBatchAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "BulkSend",
    "typeScriptTag": "bulkSend",
    "description": "Applies a bulk action to all envelopes from a specified bulk send.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "bulkAction",
        "schema": "string",
        "required": true,
        "description": "The action to apply. Valid values:\n* `resend`\n* `correct`\n* `void`\n",
        "example": "BULKACTION"
      },
      {
        "name": "bulkSendBatchId",
        "schema": "string",
        "required": true,
        "description": "The batch ID.",
        "example": "BULKSENDBATCHID"
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "voidReason",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Result of `getBulkSendBatchStatus`"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}/envelopes",
    "method": "getBulkSendBatchEnvelopes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BulkSend",
    "typeScriptTag": "bulkSend",
    "description": "Gets envelopes from a specific bulk send batch.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "bulkSendBatchId",
        "schema": "string",
        "required": true,
        "description": "The batch ID.",
        "example": "BULKSENDBATCHID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n\nValid values: `1` to `1000`\n"
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "When `recipients`, only envelopes with recipient nodes will be included in the response."
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "The order in which to sort the results. Valid values are:\n\n- Descending order: `desc` (default)\n- Ascending order: `asc`"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "The envelope attribute used to sort the results. Valid values are:\n\n- `created` (default)\n- `completed`\n- `last_modified`\n- `sent`\n- `status`\n- `subject`\n- `status_changed`"
      },
      {
        "name": "searchText",
        "schema": "string",
        "required": false,
        "description": "Use this parameter to search for specific text."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Comma-separated list of envelope statuses.\n\nNote that `any` should not be included with other statuses. In other words, `any` is a valid parameter value, but `any,sent` is not.\n\nUse the value `deliveryfailure` to get all envelopes with `AuthFailed` and `AutoResponded` status. This value is specific to bulk sending."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Result set for the Envelopes: listStatusChanges method"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/bulk_send_lists",
    "method": "getBulkSendLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BulkSend",
    "typeScriptTag": "bulkSend",
    "description": "Gets bulk send lists.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This complex type contains summaries that provide basic information about the bulk send lists that belong to the current user."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/bulk_send_lists",
    "method": "postBulkSendList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BulkSend",
    "typeScriptTag": "bulkSend",
    "description": "Creates a bulk send list.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The ID of the account.",
        "example": "ACCOUNTID"
      },
      {
        "name": "bulkCopies",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "This object contains the details for the bulk send list."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}",
    "method": "deleteBulkSendList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "BulkSend",
    "typeScriptTag": "bulkSend",
    "description": "Deletes a bulk send list.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "bulkSendListId",
        "schema": "string",
        "required": true,
        "description": "The GUID of the bulk send list. This property is created after you post a new bulk send list.",
        "example": "BULKSENDLISTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This complex type contains summaries that provide basic information about the bulk send lists that belong to the current user."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}",
    "method": "getBulkSendList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BulkSend",
    "typeScriptTag": "bulkSend",
    "description": "Gets a specific bulk send list.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "bulkSendListId",
        "schema": "string",
        "required": true,
        "description": "The GUID of the bulk send list. This property is created after you post a new bulk send list.",
        "example": "BULKSENDLISTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object contains the details for the bulk send list."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}",
    "method": "putBulkSendList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "BulkSend",
    "typeScriptTag": "bulkSend",
    "description": "Updates a bulk send list.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "bulkSendListId",
        "schema": "string",
        "required": true,
        "description": "The GUID of the bulk send list. This property is created after you post a new bulk send list.",
        "example": "BULKSENDLISTID"
      },
      {
        "name": "bulkCopies",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object contains the details for the bulk send list."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}/send",
    "method": "postBulkSendRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BulkSend",
    "typeScriptTag": "bulkSend",
    "description": "Creates a bulk send request.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "bulkSendListId",
        "schema": "string",
        "required": true,
        "description": "The GUID of the bulk send list. This property is created after you post a new bulk send list.",
        "example": "BULKSENDLISTID"
      },
      {
        "name": "batchName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeOrTemplateId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The object contains the response to a bulk send request."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}/test",
    "method": "postBulkSendTestRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BulkSend",
    "typeScriptTag": "bulkSend",
    "description": "Creates a bulk send test.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "bulkSendListId",
        "schema": "string",
        "required": true,
        "description": "The GUID of the bulk send list. This property is created after you post a new bulk send list.",
        "example": "BULKSENDLISTID"
      },
      {
        "name": "batchName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeOrTemplateId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "This object contains the results of a bulk send test."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/captive_recipients/{recipientPart}",
    "method": "deleteCaptiveRecipientsPart",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Deletes the signature for one or more captive recipient records.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "recipientPart",
        "schema": "string",
        "required": true,
        "description": "Signature is the only supported value. ",
        "example": "RECIPIENTPART"
      },
      {
        "name": "captiveRecipients",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains information about captive (embedded) recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/chunked_uploads",
    "method": "postChunkedUploads",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ChunkedUploads",
    "typeScriptTag": "chunkedUploads",
    "description": "Initiate a new chunked upload.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "chunkedUploadId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "This response object is returned after you upload a chunked upload."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/chunked_uploads/{chunkedUploadId}",
    "method": "deleteChunkedUpload",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ChunkedUploads",
    "typeScriptTag": "chunkedUploads",
    "description": "Deletes a chunked upload.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "chunkedUploadId",
        "schema": "string",
        "required": true,
        "description": "The ID of the chunked upload. ",
        "example": "CHUNKEDUPLOADID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This response object is returned after you upload a chunked upload."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/chunked_uploads/{chunkedUploadId}",
    "method": "getChunkedUpload",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ChunkedUploads",
    "typeScriptTag": "chunkedUploads",
    "description": "Retrieves metadata about a chunked upload.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "chunkedUploadId",
        "schema": "string",
        "required": true,
        "description": "The ID of the chunked upload. ",
        "example": "CHUNKEDUPLOADID"
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "(Optional) This parameter enables you to include additional attribute data in the response. The valid value for this method is `checksum`, which returns an SHA256 checksum of the content of the chunked upload in the response. You can use compare this checksum against your own checksum of the original content to verify that there are no missing parts before you attempt to commit the chunked upload."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This response object is returned after you upload a chunked upload."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/chunked_uploads/{chunkedUploadId}",
    "method": "putChunkedUploads",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ChunkedUploads",
    "typeScriptTag": "chunkedUploads",
    "description": "Commit a chunked upload.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "(Required) The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "chunkedUploadId",
        "schema": "string",
        "required": true,
        "description": "(Required) The ID of the chunked upload to commit.",
        "example": "CHUNKEDUPLOADID"
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": "(Required) You must use this query parameter with the value `commit`, which affirms the request to validate and prepare the chunked upload for use with other API calls."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This response object is returned after you upload a chunked upload."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/chunked_uploads/{chunkedUploadId}/{chunkedUploadPartSeq}",
    "method": "putChunkedUploadPart",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ChunkedUploads",
    "typeScriptTag": "chunkedUploads",
    "description": "Add a chunk to an existing chunked upload.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "chunkedUploadId",
        "schema": "string",
        "required": true,
        "description": "The ID of the chunked upload. ",
        "example": "CHUNKEDUPLOADID"
      },
      {
        "name": "chunkedUploadPartSeq",
        "schema": "string",
        "required": true,
        "description": "The sequence or order of the part in the chunked upload. By default, the sequence of the first part that is uploaded as part of the Create request is `0`.\n\n**Note:** You can add parts out of order. However, the chunked upload must consist of a contiguous series of one or more parts before you can successfully commit it.",
        "example": "CHUNKEDUPLOADPARTSEQ"
      },
      {
        "name": "chunkedUploadId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This response object is returned after you upload a chunked upload."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect",
    "method": "getConnectConfigs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ConnectConfigurations",
    "typeScriptTag": "connectConfigurations",
    "description": "Get Connect configuration information.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object contains the results of a ConnectConfigurations::GET method."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect",
    "method": "postConnectConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ConnectConfigurations",
    "typeScriptTag": "connectConfigurations",
    "description": "Creates a Connect configuration.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "allowEnvelopePublish",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSalesforcePublish",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allUsers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allUsersExcept",
        "schema": "string",
        "description": ""
      },
      {
        "name": "configurationType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "connectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deliveryMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disabledBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableLog",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeEvents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "eventData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "description": ""
      },
      {
        "name": "externalFolderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalFolderLabel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groupIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "includeCertificateOfCompletion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeCertSoapHeader",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeDocumentFields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeDocuments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeEnvelopeVoidReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeHMAC",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeOAuth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeSenderAccountasCustomField",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeTimeZoneInformation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "integratorManaged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientEvents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "requireMutualTls",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requiresAcknowledgement",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesforceApiVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesforceAuthcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesforceCallBackUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesforceDocumentsAsContentFiles",
        "schema": "string",
        "description": ""
      },
      {
        "name": "senderOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "senderSelectableItems",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sfObjects",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signMessageWithX509Certificate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "soapNamespace",
        "schema": "string",
        "description": ""
      },
      {
        "name": "urlToPublishTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "userName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useSoapInterface",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The `connectCustomConfiguration` object describes a Connect configuration for your account."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect",
    "method": "putConnectConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ConnectConfigurations",
    "typeScriptTag": "connectConfigurations",
    "description": "Updates a specified Connect configuration.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "allowEnvelopePublish",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSalesforcePublish",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allUsers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allUsersExcept",
        "schema": "string",
        "description": ""
      },
      {
        "name": "configurationType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "connectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deliveryMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disabledBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableLog",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeEvents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "eventData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "description": ""
      },
      {
        "name": "externalFolderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalFolderLabel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groupIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "includeCertificateOfCompletion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeCertSoapHeader",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeDocumentFields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeDocuments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeEnvelopeVoidReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeHMAC",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeOAuth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeSenderAccountasCustomField",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeTimeZoneInformation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "integratorManaged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientEvents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "requireMutualTls",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requiresAcknowledgement",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesforceApiVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesforceAuthcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesforceCallBackUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesforceDocumentsAsContentFiles",
        "schema": "string",
        "description": ""
      },
      {
        "name": "senderOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "senderSelectableItems",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sfObjects",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signMessageWithX509Certificate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "soapNamespace",
        "schema": "string",
        "description": ""
      },
      {
        "name": "urlToPublishTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "userName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useSoapInterface",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The `connectCustomConfiguration` object describes a Connect configuration for your account."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/{connectId}",
    "method": "deleteConnectConfig",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ConnectConfigurations",
    "typeScriptTag": "connectConfigurations",
    "description": "Deletes the specified Connect configuration.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "connectId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom Connect configuration being accessed.",
        "example": "CONNECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/{connectId}",
    "method": "getConnectConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ConnectConfigurations",
    "typeScriptTag": "connectConfigurations",
    "description": "Gets the details about a Connect configuration.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "connectId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom Connect configuration being accessed.",
        "example": "CONNECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object contains the results of a ConnectConfigurations::GET method."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/{connectId}/all/users",
    "method": "getConnectAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ConnectConfigurations",
    "typeScriptTag": "connectConfigurations",
    "description": "Returns all users from the configured Connect service.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "connectId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom Connect configuration being accessed.",
        "example": "CONNECTID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return."
      },
      {
        "name": "domainUsersOnly",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailSubstring",
        "schema": "string",
        "required": false,
        "description": "Filters returned user records by full email address or a substring of email address."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "The status of the item."
      },
      {
        "name": "userNameSubstring",
        "schema": "string",
        "required": false,
        "description": "Filters results based on a full or partial user name.\n\n**Note:** When you enter a partial user name, you do not use a wildcard character."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/{connectId}/users",
    "method": "getConnectUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ConnectConfigurations",
    "typeScriptTag": "connectConfigurations",
    "description": "Returns users from the configured Connect service.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "connectId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom Connect configuration being accessed.",
        "example": "CONNECTID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n\n"
      },
      {
        "name": "emailSubstring",
        "schema": "string",
        "required": false,
        "description": "Filters returned user records by full email address or a substring of email address."
      },
      {
        "name": "listIncludedUsers",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filters the results by user status.\nYou can specify a comma-separated\nlist of the following statuses:\n\n* ActivationRequired \n* ActivationSent \n* Active\n* Closed \n* Disabled\n"
      },
      {
        "name": "userNameSubstring",
        "schema": "string",
        "required": false,
        "description": "Filters results based on a full or partial user name.\n\n**Note:** When you enter a partial user name, you do not use a wildcard character."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/envelopes/{envelopeId}/retry_queue",
    "method": "putConnectRetryByEnvelope",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ConnectEvents",
    "typeScriptTag": "connectEvents",
    "description": "Republishes Connect information for the specified envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/envelopes/publish/historical",
    "method": "postHistoricalEnvelopePublishTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopePublish",
    "typeScriptTag": "envelopePublish",
    "description": "Submits a batch of historical envelopes for republish to a webhook.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "config",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopes",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/envelopes/retry_queue",
    "method": "putConnectRetry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ConnectEvents",
    "typeScriptTag": "connectEvents",
    "description": "Republishes Connect information for multiple envelopes.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "synchronous",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/failures",
    "method": "getConnectLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ConnectEvents",
    "typeScriptTag": "connectEvents",
    "description": "Gets the Connect failure log information.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "The start date for a date range in UTC DateTime format.\n\n**Note:** If this property is null, no date filtering is applied."
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "The end of a search date range in UTC DateTime format. When you use this parameter, only templates created up to this date and time are returned.\n\n**Note:** If this property is null, the value defaults to the current date."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/failures/{failureId}",
    "method": "deleteConnectFailureLog",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ConnectEvents",
    "typeScriptTag": "connectEvents",
    "description": "Deletes a Connect failure log entry.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "failureId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Connect post failure. Use `all` to delete all failures for the account.",
        "example": "FAILUREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/logs",
    "method": "deleteConnectLogs",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ConnectEvents",
    "typeScriptTag": "connectEvents",
    "description": "Deletes a list of Connect log entries.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/logs",
    "method": "getConnectLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ConnectEvents",
    "typeScriptTag": "connectEvents",
    "description": "Gets the Connect log.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "The start date for a date range in UTC DateTime format.\n\n**Note:** If this property is null, no date filtering is applied."
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "The end of a search date range in UTC DateTime format. When you use this parameter, only templates created up to this date and time are returned.\n\n**Note:** If this property is null, the value defaults to the current date."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/logs/{logId}",
    "method": "deleteConnectLog",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ConnectEvents",
    "typeScriptTag": "connectEvents",
    "description": "Deletes a specified Connect log entry.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "logId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Connect log entry.",
        "example": "LOGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/logs/{logId}",
    "method": "getConnectLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ConnectEvents",
    "typeScriptTag": "connectEvents",
    "description": "Gets a Connect log entry.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "logId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Connect log entry.",
        "example": "LOGID"
      },
      {
        "name": "additionalInfo",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response includes the `connectDebugLog` information."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains information about a Connect log entry."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/oauth",
    "method": "deleteConnectOAuthConfig",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ConnectConfigurations",
    "typeScriptTag": "connectConfigurations",
    "description": "Delete the Connect OAuth configuration.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/oauth",
    "method": "getConnectOAuthConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ConnectConfigurations",
    "typeScriptTag": "connectConfigurations",
    "description": "Retrieves the Connect OAuth information for the account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex object describing a Connect OAuth configuration."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/oauth",
    "method": "postConnectOAuthConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ConnectConfigurations",
    "typeScriptTag": "connectConfigurations",
    "description": "Set up Connect OAuth for the specified account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "authorizationServerUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customParameters",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scope",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A complex object describing a Connect OAuth configuration."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/connect/oauth",
    "method": "putConnectOAuthConfig",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ConnectConfigurations",
    "typeScriptTag": "connectConfigurations",
    "description": "Updates the existing Connect OAuth configuration for the account.\n",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "authorizationServerUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customParameters",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scope",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex object describing a Connect OAuth configuration."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/consumer_disclosure",
    "method": "getConsumerDisclosure",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountConsumerDisclosures",
    "typeScriptTag": "accountConsumerDisclosures",
    "description": "Gets the default Electronic Record and Signature Disclosure for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": false,
        "description": "The code for the signer language version of the disclosure that you want to retrieve. The following languages are supported:\n\n- Arabic (`ar`)\n- Bulgarian (`bg`)\n- Czech (`cs`)\n- Chinese Simplified (`zh_CN`)\n- Chinese Traditional (`zh_TW`)\n- Croatian (`hr`)\n- Danish (`da`)\n- Dutch (`nl`)\n- English US (`en`)\n- English UK (`en_GB`)\n- Estonian (`et`)\n- Farsi (`fa`)\n- Finnish (`fi`)\n- French (`fr`)\n- French Canadian (`fr_CA`)\n- German (`de`)\n- Greek (`el`)\n- Hebrew (`he`)\n- Hindi (`hi`)\n- Hungarian (`hu`)\n- Bahasa Indonesian (`id`)\n- Italian (`it`)\n- Japanese (`ja`)\n- Korean (`ko`)\n- Latvian (`lv`)\n- Lithuanian (`lt`)\n- Bahasa Melayu (`ms`)\n- Norwegian (`no`)\n- Polish (`pl`)\n- Portuguese (`pt`)\n- Portuguese Brazil (`pt_BR`)\n- Romanian (`ro`)\n- Russian (`ru`)\n- Serbian (`sr`)\n- Slovak (`sk`)\n- Slovenian (`sl`)\n- Spanish (`es`)\n- Spanish Latin America (`es_MX`)\n- Swedish (`sv`)\n- Thai (`th`)\n- Turkish (`tr`)\n- Ukrainian (`uk`)\n- Vietnamese (`vi`)\n\nAdditionally, you can automatically detect the browser language being used by the viewer and display the disclosure in that language by setting the value to `browser`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about account consumer disclosures."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/consumer_disclosure/{langCode}",
    "method": "getConsumerDisclosureLangCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountConsumerDisclosures",
    "typeScriptTag": "accountConsumerDisclosures",
    "description": "Gets the Electronic Record and Signature Disclosure for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": true,
        "description": "The code for the signer language version of the disclosure that you want to retrieve. The following languages are supported:\n\n- Arabic (`ar`)\n- Bulgarian (`bg`)\n- Czech (`cs`)\n- Chinese Simplified (`zh_CN`)\n- Chinese Traditional (`zh_TW`)\n- Croatian (`hr`)\n- Danish (`da`)\n- Dutch (`nl`)\n- English US (`en`)\n- English UK (`en_GB`)\n- Estonian (`et`)\n- Farsi (`fa`)\n- Finnish (`fi`)\n- French (`fr`)\n- French Canadian (`fr_CA`)\n- German (`de`)\n- Greek (`el`)\n- Hebrew (`he`)\n- Hindi (`hi`)\n- Hungarian (`hu`)\n- Bahasa Indonesian (`id`)\n- Italian (`it`)\n- Japanese (`ja`)\n- Korean (`ko`)\n- Latvian (`lv`)\n- Lithuanian (`lt`)\n- Bahasa Melayu (`ms`)\n- Norwegian (`no`)\n- Polish (`pl`)\n- Portuguese (`pt`)\n- Portuguese Brazil (`pt_BR`)\n- Romanian (`ro`)\n- Russian (`ru`)\n- Serbian (`sr`)\n- Slovak (`sk`)\n- Slovenian (`sl`)\n- Spanish (`es`)\n- Spanish Latin America (`es_MX`)\n- Swedish (`sv`)\n- Thai (`th`)\n- Turkish (`tr`)\n- Ukrainian (`uk`)\n- Vietnamese (`vi`)\n\nAdditionally, you can automatically detect the browser language being used by the viewer and display the disclosure in that language by setting the value to `browser`.",
        "example": "LANGCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about account consumer disclosures."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/consumer_disclosure/{langCode}",
    "method": "putConsumerDisclosure",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccountConsumerDisclosures",
    "typeScriptTag": "accountConsumerDisclosures",
    "description": "Updates the Electronic Record and Signature Disclosure for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": true,
        "description": "The code for the signer language version of the disclosure that you want to update. The following languages are supported:\n\n- Arabic (`ar`)\n- Bulgarian (`bg`)\n- Czech (`cs`)\n- Chinese Simplified (`zh_CN`)\n- Chinese Traditional (`zh_TW`)\n- Croatian (`hr`)\n- Danish (`da`)\n- Dutch (`nl`)\n- English US (`en`)\n- English UK (`en_GB`)\n- Estonian (`et`)\n- Farsi (`fa`)\n- Finnish (`fi`)\n- French (`fr`)\n- French Canadian (`fr_CA`)\n- German (`de`)\n- Greek (`el`)\n- Hebrew (`he`)\n- Hindi (`hi`)\n- Hungarian (`hu`)\n- Bahasa Indonesian (`id`)\n- Italian (`it`)\n- Japanese (`ja`)\n- Korean (`ko`)\n- Latvian (`lv`)\n- Lithuanian (`lt`)\n- Bahasa Melayu (`ms`)\n- Norwegian (`no`)\n- Polish (`pl`)\n- Portuguese (`pt`)\n- Portuguese Brazil (`pt_BR`)\n- Romanian (`ro`)\n- Russian (`ru`)\n- Serbian (`sr`)\n- Slovak (`sk`)\n- Slovenian (`sl`)\n- Spanish (`es`)\n- Spanish Latin America (`es_MX`)\n- Swedish (`sv`)\n- Thai (`th`)\n- Turkish (`tr`)\n- Ukrainian (`uk`)\n- Vietnamese (`vi`)\n\nAdditionally, you can automatically detect the browser language being used by the viewer and display the disclosure in that language by setting the value to `browser`.",
        "example": "LANGCODE"
      },
      {
        "name": "includeMetadata",
        "schema": "string",
        "required": false,
        "description": "(Optional) When true, the response includes metadata indicating which properties are editable."
      },
      {
        "name": "accountEsignId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowCDWithdraw",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowCDWithdrawMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "changeEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "changeEmailOther",
        "schema": "string",
        "description": ""
      },
      {
        "name": "companyName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "companyPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "copyCostPerPage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "copyFeeCollectionMethod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "copyRequestEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableEsign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "esignAgreement",
        "schema": "string",
        "description": ""
      },
      {
        "name": "esignText",
        "schema": "string",
        "description": ""
      },
      {
        "name": "languageCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mustAgreeToEsign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pdfId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useBrand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useConsumerDisclosureWithinAccount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useConsumerDisclosureWithinAccountMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "withdrawAddressLine1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withdrawAddressLine2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withdrawByEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withdrawByMail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withdrawByPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withdrawCity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withdrawConsequences",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withdrawEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withdrawOther",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withdrawPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withdrawPostalCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withdrawState",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about consumer disclosures."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/contacts",
    "method": "deleteContacts",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Deletes multiple contacts from an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "contactList",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This response objects shows the updated details for the contacts."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/contacts",
    "method": "postContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Add contacts to a contacts list.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "contactList",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "This response objects shows the updated details for the contacts."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/contacts",
    "method": "putContacts",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Updates one or more contacts.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "contactList",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This response objects shows the updated details for the contacts."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/contacts/{contactId}",
    "method": "deleteContactWithId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Deletes a contact.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The ID of a contact person in the account's address book.",
        "example": "CONTACTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This response objects shows the updated details for the contacts."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/contacts/{contactId}",
    "method": "getContactById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets one or more contacts.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The ID of a contact person in the account's address book.\n\n**Note:** To return all contacts, omit this parameter. It is not required.",
        "example": "CONTACTID"
      },
      {
        "name": "cloudProvider",
        "schema": "string",
        "required": false,
        "description": "(Optional) The cloud provider from which to retrieve the contacts. Valid values are:\n\n- `rooms`\n- `docusignCore` (default)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This response object contains information about the contacts associated with an account."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/custom_fields",
    "method": "getAccountCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountCustomFields",
    "typeScriptTag": "accountCustomFields",
    "description": "Gets a list of custom fields.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An `accountCustomField` is an envelope custom field that you set at the account level.\nApplying custom fields enables account administrators to group and manage envelopes.\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/custom_fields",
    "method": "postAccountCustomFields",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AccountCustomFields",
    "typeScriptTag": "accountCustomFields",
    "description": "Creates an account custom field.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "applyToTemplates",
        "schema": "string",
        "required": false,
        "description": "(Optional) When **true,** the new custom field is applied to all of the templates on the account."
      },
      {
        "name": "customFieldType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "fieldId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "listItems",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "required",
        "schema": "string",
        "description": ""
      },
      {
        "name": "show",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An `accountCustomField` is an envelope custom field that you set at the account level.\nApplying custom fields enables account administrators to group and manage envelopes.\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/custom_fields/{customFieldId}",
    "method": "deleteAccountCustomFields",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AccountCustomFields",
    "typeScriptTag": "accountCustomFields",
    "description": "Deletes an account custom field.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "customFieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "CUSTOMFIELDID"
      },
      {
        "name": "applyToTemplates",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/custom_fields/{customFieldId}",
    "method": "putAccountCustomFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccountCustomFields",
    "typeScriptTag": "accountCustomFields",
    "description": "Updates an account custom field.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "customFieldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the custom field.",
        "example": "CUSTOMFIELDID"
      },
      {
        "name": "applyToTemplates",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customFieldType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "fieldId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "listItems",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "required",
        "schema": "string",
        "description": ""
      },
      {
        "name": "show",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An `accountCustomField` is an envelope custom field that you set at the account level.\nApplying custom fields enables account administrators to group and manage envelopes.\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes",
    "method": "getEnvelopes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Search for specific sets of envelopes by using search filters.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "acStatus",
        "schema": "string",
        "required": false,
        "description": "Specifies the Authoritative Copy Status for the envelopes. Valid values: Unknown, Original, Transferred, AuthoritativeCopy, AuthoritativeCopyExportPending, AuthoritativeCopyExported, DepositPending, Deposited, DepositedEO, or DepositFailed."
      },
      {
        "name": "block",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign.\n"
      },
      {
        "name": "cdseMode",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign.\n"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign."
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n"
      },
      {
        "name": "customField",
        "schema": "string",
        "required": false,
        "description": "Optional. Specifies an envelope custom field name and value searched for in the envelopes. Format: `custom_envelope_field_name=desired_value`\n\nExample: If you have an envelope custom field named \"Region\" and you want to search for all envelopes where the value is \"West\" you would use set this parameter to `Region=West`. \n \n"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Limit results to envelopes\nsent by the account user\nwith this email address.\n\n`user_name` must be given as well,\nand both `email` and `user_name`\nmust refer to an existing account user.\n"
      },
      {
        "name": "envelopeIds",
        "schema": "string",
        "required": false,
        "description": "Comma separated list of `envelopeId` values."
      },
      {
        "name": "exclude",
        "schema": "string",
        "required": false,
        "description": "Excludes information from the response. Enter  as a comma-separated list (e.g., `folders,powerforms`). Valid values are:\n\n- `recipients`\n- `powerforms`\n- `folders`"
      },
      {
        "name": "folderIds",
        "schema": "string",
        "required": false,
        "description": "Returns the envelopes from specific folders. Enter as a comma-separated list of either valid folder Guids or the following values: \n\n- `awaiting_my_signature`\n- `completed`\n- `draft`\n- `drafts`\n- `expiring_soon`\n- `inbox`\n- `out_for_signature`\n- `recyclebin`\n- `sentitems`\n- `waiting_for_others`"
      },
      {
        "name": "folderTypes",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of folder types you want to retrieve envelopes from. Valid values are: \n\n- `normal`\n- `inbox`\n- `sentitems`\n- `draft`\n- `templates`"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Specifies the date and time\nto start looking for status changes.\nThis parameter is required\nunless `envelopeIds` or `transactionIds`\nare set.\n\n\nAlthough you can use any date format\nsupported by the .NET system library's\n[`DateTime.Parse()`][msoft] function,\nDocuSign recommends\nusing [ISO 8601][] format dates\nwith an explicit time zone offset\nIf you do not provide\na time zone offset,\nthe method uses the server's time zone.\n\nFor example, the following dates and times refer to the same instant:\n\n* `2017-05-02T01:44Z`\n* `2017-05-01T21:44-04:00`\n* `2017-05-01T18:44-07:00`\n\n\n[msoft]: https://docs.microsoft.com/en-us/dotnet/api/system.datetime.parse?redirectedfrom=MSDN&view=net-5.0#overloads\n[ISO 8601]: https://en.wikipedia.org/wiki/ISO_8601"
      },
      {
        "name": "fromToStatus",
        "schema": "string",
        "required": false,
        "description": "This is the status type checked for in the `from_date`/`to_date` period. If `changed` is specified, then envelopes that changed status during the period are found. If for example, `created` is specified, then envelopes created during the period are found. Default is `changed`. \n\nPossible values are: Voided, Changed, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing."
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "Specifies additional information to return  about the envelopes.\nUse a comma-separated list, such as `folders, recipients` to specify information.\nValid values are:\n\n- `custom_fields`: The custom fields associated with the envelope.\n- `documents`: The documents associated with the envelope.\n- `attachments`: The attachments associated with the envelope.\n- `extensions`: Information about the email settings associated with the envelope.\n- `folders`: The folders where the envelope exists.\n- `recipients`: The recipients associated with the envelope.\n- `payment_tabs`: The payment tabs associated with the envelope.\n"
      },
      {
        "name": "includePurgeInformation",
        "schema": "string",
        "required": false,
        "description": "When **true,** information about envelopes that have been deleted is included in the response."
      },
      {
        "name": "intersectingFolderIds",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of folders that you want want to get envelopes from. Valid values are: \n\n- `normal`\n- `inbox`\n- `sentitems`\n- `draft`\n- `templates`"
      },
      {
        "name": "lastQueriedDate",
        "schema": "string",
        "required": false,
        "description": "Returns envelopes that were modified prior to the specified date and time. \n\nExample: `2020-05-09T21:56:12.2500000Z`"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Returns envelopes in either ascending (`asc`) or descending (`desc`) order."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Sorts results according to a specific property. Valid values are:\n\n- `last_modified`\n- `action_required`\n- `created`\n- `completed`\n- `envelope_name`\n- `expire`\n- `sent`\n- `signer_list`\n- `status`\n- `subject`\n- `user_name`\n- `status_changed`\n- `last_modified`"
      },
      {
        "name": "powerformids",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of `PowerFormId` values."
      },
      {
        "name": "queryBudget",
        "schema": "string",
        "required": false,
        "description": "The time in seconds that the query should run before returning data."
      },
      {
        "name": "requesterDateFormat",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "searchMode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "searchText",
        "schema": "string",
        "required": false,
        "description": "Free text search criteria that you can use to filter the list of envelopes that is returned."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of current envelope statuses to included in the response. Possible values are:\n\n* `completed`\n* `created`\n* `declined`\n* `deleted`\n* `delivered`\n* `processing`\n* `sent`\n* `signed`\n* `timedout`\n* `voided`\n\nThe `any` value is equivalent to any status.\n"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "Specifies the date and time\nto stop looking for status changes.\nThe default is the current date and time.\n\nAlthough you can use any date format\nsupported by the .NET system library's\n[`DateTime.Parse()`][msoft] function,\nDocuSign recommends\nusing [ISO 8601][] format dates\nwith an explicit time zone offset\nIf you do not provide\na time zone offset,\nthe method uses the server's time zone.\n\nFor example, the following dates and times refer to the same instant:\n\n* `2017-05-02T01:44Z`\n* `2017-05-01T21:44-04:00`\n* `2017-05-01T18:44-07:00`\n\n\n[msoft]: https://docs.microsoft.com/en-us/dotnet/api/system.datetime.parse?redirectedfrom=MSDN&view=net-5.0#overloads\n[ISO 8601]: https://en.wikipedia.org/wiki/ISO_8601\n"
      },
      {
        "name": "transactionIds",
        "schema": "string",
        "required": false,
        "description": "If included in the query string, this is a comma separated list of envelope `transactionId`s. \n\nIf included in the `request_body`, this is a list of envelope `transactionId`s. \n\n###### Note: `transactionId`s are only valid in the DocuSign system for seven days.\n"
      },
      {
        "name": "userFilter",
        "schema": "string",
        "required": false,
        "description": "Returns envelopes where the current user is the recipient, the sender, or the recipient only. (For example, `user_filter=sender`.) Valid values are:\n\n- `sender`\n- `recipient`\n- `recipient_only`"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "The ID of the user who created the envelopes to be retrieved. Note that an account can have multiple users, and any user with account access can retrieve envelopes by user_id from the account."
      },
      {
        "name": "userName",
        "schema": "string",
        "required": false,
        "description": "Limit results to envelopes\nsent by the account user\nwith this user name.\n\n`email` must be given as well,\nand both `email` and `user_name`\nmust refer to an existing account user.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Result set for the Envelopes: listStatusChanges method"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes",
    "method": "postEnvelopes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Creates an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "cdseMode",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign.\n"
      },
      {
        "name": "changeRoutingOrder",
        "schema": "string",
        "required": false,
        "description": "When true, users can define the routing order of recipients while sending documents for signature."
      },
      {
        "name": "completedDocumentsOnly",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign.\n"
      },
      {
        "name": "mergeRolesOnDraft",
        "schema": "string",
        "required": false,
        "description": "When **true,** template roles will be merged, and empty recipients will be removed. This parameter applies when you create a draft envelope with multiple templates. (To create a draft envelope, the `status` field is set to `created`.)\n\n**Note:** DocuSign recommends that this parameter should be set to **true** whenever you create a draft envelope with multiple templates."
      },
      {
        "name": "accessControlListBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accessibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMarkup",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowReassign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowRecipientRecursion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowViewHistory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anySigner",
        "schema": "string",
        "description": ""
      },
      {
        "name": "asynchronous",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attachmentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopyDefault",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoNavigation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "burnDefaultTabData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "certificateUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "compositeTemplates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "copyRecipientData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customFieldsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "declinedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deletedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deliveredDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableResponsiveDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "documentsCombinedUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailBlurb",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailSubject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableWetSign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enforceSignerVisibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeAttachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeCustomMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeDocuments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeIdStamping",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventNotification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "expireAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalEnvelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folders",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasFormDataChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasWavFile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "holder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initialSentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is21CFRPart11",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDynamicEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isSignatureProviderEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "messageLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "notificationUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerForm",
        "schema": "object",
        "description": ""
      },
      {
        "name": "purgeCompletedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeRequestDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recipientsLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientViewRequest",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerCanSignOnMobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusChangedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateRoles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "templatesUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useDisclosure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": " This object describes an envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}",
    "method": "getEnvelope",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Gets the status of a single envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "advancedUpdate",
        "schema": "string",
        "required": false,
        "description": "When **true,** envelope information can be added or modified."
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "Specifies additional information about the envelope to return. Enter a comma-separated list, such as `tabs,recipients`. Valid values are:\n\n- `custom_fields`: The custom fields associated with the envelope.\n- `documents`: The documents associated with the envelope.\n- `attachments`: The attachments associated with the envelope.\n- `extensions`: The email settings associated with the envelope.\n- `folders`: The folder where the envelope exists.\n- `recipients`: The recipients associated with the envelope.\n- `powerform`: The PowerForms associated with the envelope.\n- `tabs`: The tabs associated with the envelope.\n- `payment_tabs`: The payment tabs associated with the envelope.\n- `workflow`: The workflow definition associated with the envelope.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}",
    "method": "putEnvelope",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Send, void, or modify a draft envelope. Purge documents from a completed envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "advancedUpdate",
        "schema": "string",
        "required": false,
        "description": "When **true,** allows the caller to update recipients, tabs, custom fields, notification, email settings and other envelope attributes."
      },
      {
        "name": "resendEnvelope",
        "schema": "string",
        "required": false,
        "description": "When **true,**\nsends the specified envelope again."
      },
      {
        "name": "accessControlListBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMarkup",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowReassign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowViewHistory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anySigner",
        "schema": "string",
        "description": ""
      },
      {
        "name": "asynchronous",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachmentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopyDefault",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoNavigation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "burnDefaultTabData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "certificateUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "copyRecipientData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customFieldsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "declinedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deletedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deliveredDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableResponsiveDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentsCombinedUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailBlurb",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailSubject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableWetSign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enforceSignerVisibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeAttachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeCustomMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeDocuments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeIdStamping",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalEnvelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folders",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasFormDataChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasWavFile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "holder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initialSentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is21CFRPart11",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDynamicEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isSignatureProviderEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "messageLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "notificationUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerForm",
        "schema": "object",
        "description": ""
      },
      {
        "name": "purgeCompletedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeRequestDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recipientsLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerCanSignOnMobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusChangedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templatesUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useDisclosure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "object",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/attachments",
    "method": "deleteAttachments",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeAttachments",
    "typeScriptTag": "envelopeAttachments",
    "description": "Deletes one or more envelope attachments from a draft envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "attachments",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/attachments",
    "method": "getAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeAttachments",
    "typeScriptTag": "envelopeAttachments",
    "description": "Returns a list of envelope attachments associated with a specified envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/attachments",
    "method": "putAttachments",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeAttachments",
    "typeScriptTag": "envelopeAttachments",
    "description": "Adds one or more envelope attachments to a draft or in-process envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "attachments",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/attachments/{attachmentId}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeAttachments",
    "typeScriptTag": "envelopeAttachments",
    "description": "Retrieves an envelope attachment from an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the attachment.",
        "example": "ATTACHMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/attachments/{attachmentId}",
    "method": "putAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeAttachments",
    "typeScriptTag": "envelopeAttachments",
    "description": "Updates an envelope attachment in a draft or in-process envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the attachment.",
        "example": "ATTACHMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "accessControl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachmentType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "remoteUrl",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/audit_events",
    "method": "getAuditEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Gets the envelope audit events for an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/comments/transcript",
    "method": "getCommentsTranscript",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Gets a PDF transcript of all of the comments in an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "encoding",
        "schema": "string",
        "required": false,
        "description": "(Optional) The encoding to use for the file."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/custom_fields",
    "method": "deleteCustomFields",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeCustomFields",
    "typeScriptTag": "envelopeCustomFields",
    "description": "Deletes envelope custom fields for draft and in-process envelopes.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "listCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textCustomFields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An envelope custom field enables you to collect custom data about envelopes on a per-envelope basis. You can then use the custom data for sorting, organizing, searching, and other downstream processes. For example, you can use custom fields to copy envelopes or data to multiple areas in Salesforce. eOriginal customers can eVault their documents from the web app on a per-envelope basis by setting an envelope custom field with a name like \"eVault with eOriginal?\" to \"Yes\" or \"No\".\n\nWhen a user creates an envelope, the envelope custom fields display in the **Envelope Settings** section of the DocuSign console. Envelope recipients do not see the envelope custom fields. For more information, see [Envelope Custom Fields](https://support.docusign.com/s/document-item?bundleId=pik1583277475390&topicId=qor1583277385137.html)."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/custom_fields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeCustomFields",
    "typeScriptTag": "envelopeCustomFields",
    "description": "Gets the custom field information for the specified envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/custom_fields",
    "method": "postCustomFields",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeCustomFields",
    "typeScriptTag": "envelopeCustomFields",
    "description": "Creates envelope custom fields for an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "listCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textCustomFields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An envelope custom field enables you to collect custom data about envelopes on a per-envelope basis. You can then use the custom data for sorting, organizing, searching, and other downstream processes. For example, you can use custom fields to copy envelopes or data to multiple areas in Salesforce. eOriginal customers can eVault their documents from the web app on a per-envelope basis by setting an envelope custom field with a name like \"eVault with eOriginal?\" to \"Yes\" or \"No\".\n\nWhen a user creates an envelope, the envelope custom fields display in the **Envelope Settings** section of the DocuSign console. Envelope recipients do not see the envelope custom fields. For more information, see [Envelope Custom Fields](https://support.docusign.com/s/document-item?bundleId=pik1583277475390&topicId=qor1583277385137.html)."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/custom_fields",
    "method": "putCustomFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeCustomFields",
    "typeScriptTag": "envelopeCustomFields",
    "description": "Updates envelope custom fields in an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "listCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textCustomFields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An envelope custom field enables you to collect custom data about envelopes on a per-envelope basis. You can then use the custom data for sorting, organizing, searching, and other downstream processes. For example, you can use custom fields to copy envelopes or data to multiple areas in Salesforce. eOriginal customers can eVault their documents from the web app on a per-envelope basis by setting an envelope custom field with a name like \"eVault with eOriginal?\" to \"Yes\" or \"No\".\n\nWhen a user creates an envelope, the envelope custom fields display in the **Envelope Settings** section of the DocuSign console. Envelope recipients do not see the envelope custom fields. For more information, see [Envelope Custom Fields](https://support.docusign.com/s/document-item?bundleId=pik1583277475390&topicId=qor1583277385137.html)."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/docGenFormFields",
    "method": "getEnvelopeDocGenFormFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DocumentGeneration",
    "typeScriptTag": "documentGeneration",
    "description": "Returns form fields for an envelope",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An object for document generation responses."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/docGenFormFields",
    "method": "putEnvelopeDocGenFormFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "DocumentGeneration",
    "typeScriptTag": "documentGeneration",
    "description": "Updates form fields for an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "updateDocgenFormfieldsOnly",
        "schema": "string",
        "required": false,
        "description": "When **true,** only the form fields are updated.\nWhen **false** or omitted,\nthe documents are updated as well."
      },
      {
        "name": "docGenFormFields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An object for document generation responses."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents",
    "method": "deleteDocuments",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeDocuments",
    "typeScriptTag": "envelopeDocuments",
    "description": "Deletes documents from a draft envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "accessControlListBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accessibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMarkup",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowReassign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowRecipientRecursion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowViewHistory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anySigner",
        "schema": "string",
        "description": ""
      },
      {
        "name": "asynchronous",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attachmentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopyDefault",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoNavigation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "burnDefaultTabData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "certificateUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "compositeTemplates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "copyRecipientData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customFieldsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "declinedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deletedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deliveredDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableResponsiveDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "documentsCombinedUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailBlurb",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailSubject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableWetSign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enforceSignerVisibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeAttachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeCustomMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeDocuments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeIdStamping",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventNotification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "expireAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalEnvelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folders",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasFormDataChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasWavFile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "holder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initialSentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is21CFRPart11",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDynamicEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isSignatureProviderEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "messageLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "notificationUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerForm",
        "schema": "object",
        "description": ""
      },
      {
        "name": "purgeCompletedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeRequestDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recipientsLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientViewRequest",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerCanSignOnMobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusChangedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateRoles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "templatesUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useDisclosure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "object",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents",
    "method": "getDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeDocuments",
    "typeScriptTag": "envelopeDocuments",
    "description": "Gets a list of documents in an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "documentsByUserid",
        "schema": "string",
        "required": false,
        "description": "When **true,** allows recipients to get documents by their user id. For example, if a user is included in two different routing orders with different visibilities, using this parameter returns all of the documents from both routing orders."
      },
      {
        "name": "includeDocgenFormfields",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign."
      },
      {
        "name": "includeMetadata",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response includes metadata that indicates which properties the sender can edit."
      },
      {
        "name": "includeTabs",
        "schema": "string",
        "required": false,
        "description": "When **true,** information about the tabs, including prefill tabs, associated with the documents are included in the response."
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": false,
        "description": "Allows the sender to retrieve the documents as one of the recipients that they control. The `documents_by_userid` parameter must be set to **false** for this to work."
      },
      {
        "name": "sharedUserId",
        "schema": "string",
        "required": false,
        "description": "The ID of a shared user that you want to impersonate in order to\nretrieve their view of the list of documents. This parameter is\nused in the context of a shared inbox (i.e., when you share\nenvelopes from one user to another through the DocuSign Admin console)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents",
    "method": "putDocuments",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeDocuments",
    "typeScriptTag": "envelopeDocuments",
    "description": "Adds one or more documents to an existing envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "accessControlListBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accessibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMarkup",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowReassign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowRecipientRecursion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowViewHistory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anySigner",
        "schema": "string",
        "description": ""
      },
      {
        "name": "asynchronous",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attachmentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopyDefault",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoNavigation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "burnDefaultTabData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "certificateUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "compositeTemplates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "copyRecipientData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customFieldsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "declinedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deletedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deliveredDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableResponsiveDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "documentsCombinedUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailBlurb",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailSubject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableWetSign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enforceSignerVisibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeAttachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeCustomMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeDocuments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeIdStamping",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventNotification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "expireAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalEnvelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folders",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasFormDataChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasWavFile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "holder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initialSentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is21CFRPart11",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDynamicEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isSignatureProviderEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "messageLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "notificationUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerForm",
        "schema": "object",
        "description": ""
      },
      {
        "name": "purgeCompletedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeRequestDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recipientsLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientViewRequest",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerCanSignOnMobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusChangedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateRoles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "templatesUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useDisclosure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "object",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}",
    "method": "getDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeDocuments",
    "typeScriptTag": "envelopeDocuments",
    "description": "Retrieves a single document or all documents from an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the document to retrieve. Alternatively, you can use one of the following special keywords:\n\n- `combined`: Retrieves all of the documents as a single PDF file.\n  When the query parameter `certificate` is **true,** the certificate of completion is included in the PDF file.\n  When the query parameter `certificate` is **false,** the certificate of completion is not included in the PDF file.\n- `archive`: Retrieves a ZIP archive that contains all of the PDF documents and the certificate of completion.\n- `certificate`: Retrieves only the certificate of completion as a PDF file.\n- `portfolio`: Retrieves the envelope documents as a [PDF portfolio](https://helpx.adobe.com/acrobat/using/overview-pdf-portfolios.html).",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "certificate",
        "schema": "string",
        "required": false,
        "description": "Used only when the `documentId` parameter is the special keyword `combined`.\n\nWhen **true,** the certificate of completion is included in the combined PDF file.\nWhen **false,** (the default) the certificate of completion is not included in the combined PDF file.\n\n"
      },
      {
        "name": "documentsByUserid",
        "schema": "string",
        "required": false,
        "description": "When **true,** allows recipients to get documents by their user id. For example, if a user is included in two different routing orders with different visibilities, using this parameter returns all of the documents from both routing orders."
      },
      {
        "name": "encoding",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign."
      },
      {
        "name": "encrypt",
        "schema": "string",
        "required": false,
        "description": "When **true,** the PDF bytes returned in the response are encrypted for all the key managers configured on your DocuSign account. You can decrypt the documents by using the Key Manager DecryptDocument API method. For more information about Key Manager, see the DocuSign Security Appliance Installation Guide that your organization received from DocuSign."
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "Specifies the language for the Certificate of Completion in the response. The supported languages are: Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Dutch (nl), English US (en), French (fr), German (de), Italian (it), Japanese (ja), Korean (ko), Portuguese (pt), Portuguese (Brazil) (pt_BR), Russian (ru), Spanish (es). "
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": false,
        "description": "Allows the sender to retrieve the documents as one of the recipients that they control. The `documents_by_userid` parameter must be set to **false** for this functionality to work."
      },
      {
        "name": "sharedUserId",
        "schema": "string",
        "required": false,
        "description": "The ID of a shared user that you want to impersonate in order to\nretrieve their view of the list of documents. This parameter is\nused in the context of a shared inbox (i.e., when you share\nenvelopes from one user to another through the DocuSign Admin console)."
      },
      {
        "name": "showChanges",
        "schema": "string",
        "required": false,
        "description": "When **true,** any changed fields for the returned PDF are highlighted in yellow and optional signatures or initials outlined in red. The account must have the **Highlight Data Changes** feature enabled."
      },
      {
        "name": "watermark",
        "schema": "string",
        "required": false,
        "description": "When **true,** the account has the watermark feature enabled, and the envelope is not complete, then the watermark for the account is added to the PDF documents. This option can remove the watermark. "
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}",
    "method": "putDocument",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeDocuments",
    "typeScriptTag": "envelopeDocuments",
    "description": "Adds or replaces a document in an existing envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object contains details about the envelope document."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields",
    "method": "deleteDocumentFields",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeDocumentFields",
    "typeScriptTag": "envelopeDocumentFields",
    "description": "Deletes custom document fields from an existing envelope document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "documentFields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Envelope document fields"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields",
    "method": "getDocumentFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeDocumentFields",
    "typeScriptTag": "envelopeDocumentFields",
    "description": "Gets the custom document fields from an  existing envelope document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Envelope document fields"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields",
    "method": "postDocumentFields",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeDocumentFields",
    "typeScriptTag": "envelopeDocumentFields",
    "description": "Creates custom document fields in an existing envelope document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "documentFields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Envelope document fields"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields",
    "method": "putDocumentFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeDocumentFields",
    "typeScriptTag": "envelopeDocumentFields",
    "description": "Updates existing custom document fields in an existing envelope document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "documentFields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Envelope document fields"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/html_definitions",
    "method": "getEnvelopeDocumentHtmlDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeDocumentHtmlDefinitions",
    "typeScriptTag": "envelopeDocumentHtmlDefinitions",
    "description": "Retrieves the HTML definition used to generate a dynamically sized responsive document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The GUID of the document.\n\nExample: c671747c-xxxx-xxxx-xxxx-4a4a48e23744",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages",
    "method": "getPageImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Returns document page images based on input.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return."
      },
      {
        "name": "dpi",
        "schema": "string",
        "required": false,
        "description": "The number of dots per inch (DPI) for the resulting images. Valid values are 1-310 DPI. The default value is 94."
      },
      {
        "name": "maxHeight",
        "schema": "string",
        "required": false,
        "description": "Sets the maximum height of the returned images in pixels."
      },
      {
        "name": "maxWidth",
        "schema": "string",
        "required": false,
        "description": "Sets the maximum width of the returned images in pixels."
      },
      {
        "name": "nocache",
        "schema": "string",
        "required": false,
        "description": "When **true,** using cache is disabled and image information is retrieved from a database. **True** is the default value. "
      },
      {
        "name": "showChanges",
        "schema": "string",
        "required": false,
        "description": "When **true,** changes display in the user interface."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages/{pageNumber}",
    "method": "deletePage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Deletes a page from a document in an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": true,
        "description": "The page number being accessed.",
        "example": "PAGENUMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages/{pageNumber}/page_image",
    "method": "getPageImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Gets a page image from an envelope for display.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": true,
        "description": "The page number being accessed.",
        "example": "PAGENUMBER"
      },
      {
        "name": "dpi",
        "schema": "string",
        "required": false,
        "description": "Sets the dots per inch (DPI) for the returned image."
      },
      {
        "name": "maxHeight",
        "schema": "string",
        "required": false,
        "description": "Sets the maximum height for the page image in pixels. The DPI is recalculated based on this setting."
      },
      {
        "name": "maxWidth",
        "schema": "string",
        "required": false,
        "description": "Sets the maximum width for the page image in pixels. The DPI is recalculated based on this setting."
      },
      {
        "name": "showChanges",
        "schema": "string",
        "required": false,
        "description": "When **true,** changes display in the user interface."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages/{pageNumber}/page_image",
    "method": "putPageImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Rotates page image from an envelope for display.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": true,
        "description": "The page number being accessed.",
        "example": "PAGENUMBER"
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rotate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages/{pageNumber}/tabs",
    "method": "getPageTabs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeDocumentTabs",
    "typeScriptTag": "envelopeDocumentTabs",
    "description": "Returns tabs on the specified page.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": true,
        "description": "The page number being accessed.",
        "example": "PAGENUMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Document tabs are tabs that are associated with a document rather than with a recipient."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/responsive_html_preview",
    "method": "postDocumentResponsiveHtmlPreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DocumentResponsiveHtmlPreview",
    "typeScriptTag": "documentResponsiveHtmlPreview",
    "description": "Creates a preview of the responsive version of a document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "displayAnchorPrefix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayAnchors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "displayOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayPageNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentGuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headerLabel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxScreenWidth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "removeEmptyTags",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showMobileOptimizedToggle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/tabs",
    "method": "deleteDocumentTabs",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeDocumentTabs",
    "typeScriptTag": "envelopeDocumentTabs",
    "description": "Deletes tabs from a document in an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "approveTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "checkboxTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commentThreadTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionCountyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionExpirationTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionStateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateSignedTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "declineTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "drawTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailAddressTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeIdTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "formulaTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fullNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "initialHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarizeTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarySealTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "noteTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numericalTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phoneNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "polyLineOverlayTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "prefillTabs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "radioGroupTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signerAttachmentTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "smartSectionTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssnTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tabGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "titleTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "viewTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "zipTabs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tabs indicate to recipients where they should sign, initial, or enter data on a document. They are represented graphically as symbols on documents at the time of signing. Tabs can also display data to the recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/tabs",
    "method": "getDocumentTabs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeDocumentTabs",
    "typeScriptTag": "envelopeDocumentTabs",
    "description": "Returns the tabs on a document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "includeMetadata",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response includes metadata indicating which properties are editable."
      },
      {
        "name": "pageNumbers",
        "schema": "string",
        "required": false,
        "description": "Filters for tabs that occur on the pages that you specify. Enter as a comma-separated list of page GUIDs.\n\nExample: `page_numbers=2,6`\n\nNote: You can only enter individual page numbers, and not a page range."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Document tabs are tabs that are associated with a document rather than with a recipient."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/tabs",
    "method": "postDocumentTabs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeDocumentTabs",
    "typeScriptTag": "envelopeDocumentTabs",
    "description": "Adds tabs to a document in an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "approveTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "checkboxTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commentThreadTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionCountyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionExpirationTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionStateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateSignedTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "declineTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "drawTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailAddressTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeIdTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "formulaTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fullNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "initialHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarizeTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarySealTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "noteTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numericalTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phoneNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "polyLineOverlayTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "prefillTabs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "radioGroupTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signerAttachmentTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "smartSectionTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssnTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tabGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "titleTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "viewTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "zipTabs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Tabs indicate to recipients where they should sign, initial, or enter data on a document. They are represented graphically as symbols on documents at the time of signing. Tabs can also display data to the recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/tabs",
    "method": "putDocumentTabs",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeDocumentTabs",
    "typeScriptTag": "envelopeDocumentTabs",
    "description": "Updates the tabs for document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "approveTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "checkboxTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commentThreadTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionCountyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionExpirationTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionStateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateSignedTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "declineTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "drawTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailAddressTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeIdTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "formulaTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fullNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "initialHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarizeTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarySealTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "noteTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numericalTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phoneNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "polyLineOverlayTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "prefillTabs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "radioGroupTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signerAttachmentTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "smartSectionTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssnTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tabGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "titleTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "viewTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "zipTabs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tabs indicate to recipients where they should sign, initial, or enter data on a document. They are represented graphically as symbols on documents at the time of signing. Tabs can also display data to the recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates",
    "method": "getDocumentTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeTemplates",
    "typeScriptTag": "envelopeTemplates",
    "description": "Gets the templates associated with a document in an existing envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list that limits the results.\nValid values are:\n\n* `applied`\n* `matched`\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates",
    "method": "postDocumentTemplates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeTemplates",
    "typeScriptTag": "envelopeTemplates",
    "description": "Adds templates to a document in an  envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "preserveTemplateRecipient",
        "schema": "string",
        "required": false,
        "description": "If omitted or set to false (the default),\nenvelope recipients _will be removed_\nif the template being applied\nincludes only  tabs positioned via anchor text for the recipient,\nand none of the documents include the anchor text. \n\nWhen **true,** the recipients _will be preserved_ after the template is applied.\n\n"
      },
      {
        "name": "documentTemplates",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates/{templateId}",
    "method": "deleteDocumentTemplates",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeTemplates",
    "typeScriptTag": "envelopeTemplates",
    "description": "Deletes a template from a document in an existing envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/email_settings",
    "method": "deleteEmailSettings",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeEmailSettings",
    "typeScriptTag": "envelopeEmailSettings",
    "description": "Deletes the email setting overrides for an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that allows  the sender to override some envelope email setting information. This can be used to override the Reply To email address and name associated with the envelope and to override the BCC email addresses to which an envelope is sent. \n\nWhen the emailSettings information is used for an envelope, it only applies to that envelope. \n\n**IMPORTANT:** The emailSettings information is not returned in the GET for envelope status. Use GET /email_settings to return information about the emailSettings. \n\nEmailSettings consists of: \n\n* replyEmailAddressOverride - The Reply To email used for the envelope. DocuSign will verify that a correct email format is used, but does not verify that the email is active. Maximum Length: 100 characters.\n* replyEmailNameOverride - The name associated with the Reply To email address. Maximum Length: 100 characters.\n* bccEmailAddresses - An array of up to five email addresses to which the envelope is sent to as a BCC email. Only users with canManageAccount setting set to true can use this option. \nDocuSign verifies that the email format is correct, but does not verify that the email is active. Using this overrides the BCC for Email Archive information setting for this envelope. Maximum Length: 100 characters.\n*Example*: if your account has BCC for Email Archive set up for the email address 'archive@mycompany.com' and you send an envelope using the BCC Email Override to send a BCC email to 'salesarchive@mycompany.com', then a copy of the envelope is only sent to the 'salesarchive@mycompany.com' email address."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/email_settings",
    "method": "getEmailSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeEmailSettings",
    "typeScriptTag": "envelopeEmailSettings",
    "description": "Gets the email setting overrides for an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that allows  the sender to override some envelope email setting information. This can be used to override the Reply To email address and name associated with the envelope and to override the BCC email addresses to which an envelope is sent. \n\nWhen the emailSettings information is used for an envelope, it only applies to that envelope. \n\n**IMPORTANT:** The emailSettings information is not returned in the GET for envelope status. Use GET /email_settings to return information about the emailSettings. \n\nEmailSettings consists of: \n\n* replyEmailAddressOverride - The Reply To email used for the envelope. DocuSign will verify that a correct email format is used, but does not verify that the email is active. Maximum Length: 100 characters.\n* replyEmailNameOverride - The name associated with the Reply To email address. Maximum Length: 100 characters.\n* bccEmailAddresses - An array of up to five email addresses to which the envelope is sent to as a BCC email. Only users with canManageAccount setting set to true can use this option. \nDocuSign verifies that the email format is correct, but does not verify that the email is active. Using this overrides the BCC for Email Archive information setting for this envelope. Maximum Length: 100 characters.\n*Example*: if your account has BCC for Email Archive set up for the email address 'archive@mycompany.com' and you send an envelope using the BCC Email Override to send a BCC email to 'salesarchive@mycompany.com', then a copy of the envelope is only sent to the 'salesarchive@mycompany.com' email address."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/email_settings",
    "method": "postEmailSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeEmailSettings",
    "typeScriptTag": "envelopeEmailSettings",
    "description": "Adds email setting overrides to an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "bccEmailAddresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "replyEmailAddressOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyEmailNameOverride",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A complex element that allows  the sender to override some envelope email setting information. This can be used to override the Reply To email address and name associated with the envelope and to override the BCC email addresses to which an envelope is sent. \n\nWhen the emailSettings information is used for an envelope, it only applies to that envelope. \n\n**IMPORTANT:** The emailSettings information is not returned in the GET for envelope status. Use GET /email_settings to return information about the emailSettings. \n\nEmailSettings consists of: \n\n* replyEmailAddressOverride - The Reply To email used for the envelope. DocuSign will verify that a correct email format is used, but does not verify that the email is active. Maximum Length: 100 characters.\n* replyEmailNameOverride - The name associated with the Reply To email address. Maximum Length: 100 characters.\n* bccEmailAddresses - An array of up to five email addresses to which the envelope is sent to as a BCC email. Only users with canManageAccount setting set to true can use this option. \nDocuSign verifies that the email format is correct, but does not verify that the email is active. Using this overrides the BCC for Email Archive information setting for this envelope. Maximum Length: 100 characters.\n*Example*: if your account has BCC for Email Archive set up for the email address 'archive@mycompany.com' and you send an envelope using the BCC Email Override to send a BCC email to 'salesarchive@mycompany.com', then a copy of the envelope is only sent to the 'salesarchive@mycompany.com' email address."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/email_settings",
    "method": "putEmailSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeEmailSettings",
    "typeScriptTag": "envelopeEmailSettings",
    "description": "Updates the email setting overrides for an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "bccEmailAddresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "replyEmailAddressOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyEmailNameOverride",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that allows  the sender to override some envelope email setting information. This can be used to override the Reply To email address and name associated with the envelope and to override the BCC email addresses to which an envelope is sent. \n\nWhen the emailSettings information is used for an envelope, it only applies to that envelope. \n\n**IMPORTANT:** The emailSettings information is not returned in the GET for envelope status. Use GET /email_settings to return information about the emailSettings. \n\nEmailSettings consists of: \n\n* replyEmailAddressOverride - The Reply To email used for the envelope. DocuSign will verify that a correct email format is used, but does not verify that the email is active. Maximum Length: 100 characters.\n* replyEmailNameOverride - The name associated with the Reply To email address. Maximum Length: 100 characters.\n* bccEmailAddresses - An array of up to five email addresses to which the envelope is sent to as a BCC email. Only users with canManageAccount setting set to true can use this option. \nDocuSign verifies that the email format is correct, but does not verify that the email is active. Using this overrides the BCC for Email Archive information setting for this envelope. Maximum Length: 100 characters.\n*Example*: if your account has BCC for Email Archive set up for the email address 'archive@mycompany.com' and you send an envelope using the BCC Email Override to send a BCC email to 'salesarchive@mycompany.com', then a copy of the envelope is only sent to the 'salesarchive@mycompany.com' email address."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/form_data",
    "method": "getFormData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeFormData",
    "typeScriptTag": "envelopeFormData",
    "description": "Returns envelope tab data for an existing envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes the form data of the envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/html_definitions",
    "method": "getEnvelopeHtmlDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeHtmlDefinitions",
    "typeScriptTag": "envelopeHtmlDefinitions",
    "description": "Gets the Original HTML Definition used to generate the Responsive HTML for the envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/lock",
    "method": "deleteEnvelopeLock",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeLocks",
    "typeScriptTag": "envelopeLocks",
    "description": "Deletes an envelope lock.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Envelope locks let you lock an envelope to prevent any changes while you are updating an envelope.\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/lock",
    "method": "getEnvelopeLock",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeLocks",
    "typeScriptTag": "envelopeLocks",
    "description": "Gets envelope lock information.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Envelope locks let you lock an envelope to prevent any changes while you are updating an envelope.\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/lock",
    "method": "postEnvelopeLock",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeLocks",
    "typeScriptTag": "envelopeLocks",
    "description": "Locks an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "lockDurationInSeconds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockedByApp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templatePassword",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useScratchPad",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Envelope locks let you lock an envelope to prevent any changes while you are updating an envelope.\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/lock",
    "method": "putEnvelopeLock",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeLocks",
    "typeScriptTag": "envelopeLocks",
    "description": "Updates an envelope lock.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "lockDurationInSeconds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockedByApp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templatePassword",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useScratchPad",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Envelope locks let you lock an envelope to prevent any changes while you are updating an envelope.\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/notification",
    "method": "getEnvelopesEnvelopeIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Gets envelope notification information.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that specifies the notification settings for the envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/notification",
    "method": "putEnvelopesEnvelopeIdNotification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Sets envelope notifications for an existing envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "expirations",
        "schema": "object",
        "description": ""
      },
      {
        "name": "reminders",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useAccountDefaults",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that specifies the notification settings for the envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients",
    "method": "deleteRecipients",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeRecipients",
    "typeScriptTag": "envelopeRecipients",
    "description": "Deletes recipients from an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "agents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "carbonCopies",
        "schema": "array",
        "description": ""
      },
      {
        "name": "certifiedDeliveries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "currentRoutingOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "editors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inPersonSigners",
        "schema": "array",
        "description": ""
      },
      {
        "name": "intermediaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "participants",
        "schema": "array",
        "description": ""
      },
      {
        "name": "recipientCount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "seals",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "witnesses",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Envelope recipients"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients",
    "method": "getRecipients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeRecipients",
    "typeScriptTag": "envelopeRecipients",
    "description": "Gets the status of recipients for an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "includeAnchorTabLocations",
        "schema": "string",
        "required": false,
        "description": " When **true** and `include_tabs` value is set to **true,** all tabs with anchor tab properties are included in the response. "
      },
      {
        "name": "includeExtended",
        "schema": "string",
        "required": false,
        "description": " When **true,** the extended properties are included in the response. "
      },
      {
        "name": "includeMetadata",
        "schema": "string",
        "required": false,
        "description": "Boolean value that specifies whether to include metadata associated with the recipients (for envelopes only, not templates)."
      },
      {
        "name": "includeTabs",
        "schema": "string",
        "required": false,
        "description": "When **true,** the tab information associated with the recipient is included in the response."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Envelope recipients"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients",
    "method": "postRecipients",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeRecipients",
    "typeScriptTag": "envelopeRecipients",
    "description": "Adds one or more recipients to an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "resendEnvelope",
        "schema": "string",
        "required": false,
        "description": "When **true,**\nforces the envelope to be resent\nif it would not be resent otherwise.\n\nOrdinarily, if the recipient's routing order\nis before or the same as the envelope's next recipient,\nthe envelope is not resent.\n\nSetting this query parameter\nto **false** has no effect and is the same as omitting\nit altogether.\n"
      },
      {
        "name": "agents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "carbonCopies",
        "schema": "array",
        "description": ""
      },
      {
        "name": "certifiedDeliveries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "currentRoutingOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "editors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inPersonSigners",
        "schema": "array",
        "description": ""
      },
      {
        "name": "intermediaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "participants",
        "schema": "array",
        "description": ""
      },
      {
        "name": "recipientCount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "seals",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "witnesses",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Envelope recipients"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients",
    "method": "putRecipients",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeRecipients",
    "typeScriptTag": "envelopeRecipients",
    "description": "Updates recipients in a draft envelope or corrects recipient information for an in-process envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "combineSameOrderRecipients",
        "schema": "string",
        "required": false,
        "description": "When **true,** recipients are combined or merged with matching recipients. Recipient matching occurs as part of [template matching](https://support.docusign.com/s/document-item?bundleId=jux1643235969954&topicId=fxo1578456612662.html), and is based on Recipient Role and Routing Order."
      },
      {
        "name": "offlineSigning",
        "schema": "string",
        "required": false,
        "description": "Indicates if offline signing is enabled for the recipient when a network connection is unavailable. "
      },
      {
        "name": "resendEnvelope",
        "schema": "string",
        "required": false,
        "description": "When **true,**\nforces the envelope to be resent\nif it would not be resent otherwise.\n\nOrdinarily, if the recipient's routing order\nis before or the same as the envelope's next recipient,\nthe envelope is not resent.\n\nSetting this query parameter\nto **false** has no effect and is the same as omitting\nit altogether.\n"
      },
      {
        "name": "agents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "carbonCopies",
        "schema": "array",
        "description": ""
      },
      {
        "name": "certifiedDeliveries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "currentRoutingOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "editors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inPersonSigners",
        "schema": "array",
        "description": ""
      },
      {
        "name": "intermediaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "participants",
        "schema": "array",
        "description": ""
      },
      {
        "name": "recipientCount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "seals",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "witnesses",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This is the response that the API returns after you update recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}",
    "method": "deleteRecipient",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeRecipients",
    "typeScriptTag": "envelopeRecipients",
    "description": "Deletes a recipient from an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Envelope recipients"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/consumer_disclosure",
    "method": "getConsumerDisclosureEnvelopeIdRecipientId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeConsumerDisclosures",
    "typeScriptTag": "envelopeConsumerDisclosures",
    "description": "Gets the default Electronic Record and Signature Disclosure for an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": false,
        "description": "(Optional) The code for the signer language version of the disclosure that you want to retrieve. The following languages are supported:\n\n- Arabic (`ar`)\n- Bulgarian (`bg`)\n- Czech (`cs`)\n- Chinese Simplified (`zh_CN`)\n- Chinese Traditional (`zh_TW`)\n- Croatian (`hr`)\n- Danish (`da`)\n- Dutch (`nl`)\n- English US (`en`)\n- English UK (`en_GB`)\n- Estonian (`et`)\n- Farsi (`fa`)\n- Finnish (`fi`)\n- French (`fr`)\n- French Canadian (`fr_CA`)\n- German (`de`)\n- Greek (`el`)\n- Hebrew (`he`)\n- Hindi (`hi`)\n- Hungarian (`hu`)\n- Bahasa Indonesian (`id`)\n- Italian (`it`)\n- Japanese (`ja`)\n- Korean (`ko`)\n- Latvian (`lv`)\n- Lithuanian (`lt`)\n- Bahasa Melayu (`ms`)\n- Norwegian (`no`)\n- Polish (`pl`)\n- Portuguese (`pt`)\n- Portuguese Brazil (`pt_BR`)\n- Romanian (`ro`)\n- Russian (`ru`)\n- Serbian (`sr`)\n- Slovak (`sk`)\n- Slovenian (`sl`)\n- Spanish (`es`)\n- Spanish Latin America (`es_MX`)\n- Swedish (`sv`)\n- Thai (`th`)\n- Turkish (`tr`)\n- Ukrainian (`uk`) \n- Vietnamese (`vi`)\n\nAdditionally, you can automatically detect the browser language being used by the viewer and display the disclosure in that language by setting the value to `browser`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about consumer disclosures."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/consumer_disclosure/{langCode}",
    "method": "getConsumerDisclosureEnvelopeIdRecipientIdLangCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeConsumerDisclosures",
    "typeScriptTag": "envelopeConsumerDisclosures",
    "description": "Gets the Electronic Record and Signature Disclosure for a specific envelope recipient.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": true,
        "description": "(Optional) The code for the signer language version of the disclosure that you want to retrieve, as a path parameter. The following languages are supported:\n\n- Arabic (`ar`)\n- Bulgarian (`bg`)\n- Czech (`cs`)\n- Chinese Simplified (`zh_CN`)\n- Chinese Traditional (`zh_TW`)\n- Croatian (`hr`)\n- Danish (`da`)\n- Dutch (`nl`)\n- English US (`en`)\n- English UK (`en_GB`)\n- Estonian (`et`)\n- Farsi (`fa`)\n- Finnish (`fi`)\n- French (`fr`)\n- French Canadian (`fr_CA`)\n- German (`de`)\n- Greek (`el`)\n- Hebrew (`he`)\n- Hindi (`hi`)\n- Hungarian (`hu`)\n- Bahasa Indonesian (`id`)\n- Italian (`it`)\n- Japanese (`ja`)\n- Korean (`ko`)\n- Latvian (`lv`)\n- Lithuanian (`lt`)\n- Bahasa Melayu (`ms`)\n- Norwegian (`no`)\n- Polish (`pl`)\n- Portuguese (`pt`)\n- Portuguese Brazil (`pt_BR`)\n- Romanian (`ro`)\n- Russian (`ru`)\n- Serbian (`sr`)\n- Slovak (`sk`)\n- Slovenian (`sl`)\n- Spanish (`es`)\n- Spanish Latin America (`es_MX`)\n- Swedish (`sv`)\n- Thai (`th`)\n- Turkish (`tr`)\n- Ukrainian (`uk`) \n- Vietnamese (`vi`)\n\nAdditionally, you can automatically detect the browser language being used by the viewer and display the disclosure in that language by setting the value to `browser`.",
        "example": "LANGCODE"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": false,
        "description": "(Optional) The code for the signer language version of the disclosure that you want to retrieve, as a query parameter. The following languages are supported:\n\n- Arabic (`ar`)\n- Bulgarian (`bg`)\n- Czech (`cs`)\n- Chinese Simplified (`zh_CN`)\n- Chinese Traditional (`zh_TW`)\n- Croatian (`hr`)\n- Danish (`da`)\n- Dutch (`nl`)\n- English US (`en`)\n- English UK (`en_GB`)\n- Estonian (`et`)\n- Farsi (`fa`)\n- Finnish (`fi`)\n- French (`fr`)\n- French Canadian (`fr_CA`)\n- German (`de`)\n- Greek (`el`)\n- Hebrew (`he`)\n- Hindi (`hi`)\n- Hungarian (`hu`)\n- Bahasa Indonesian (`id`)\n- Italian (`it`)\n- Japanese (`ja`)\n- Korean (`ko`)\n- Latvian (`lv`)\n- Lithuanian (`lt`)\n- Bahasa Melayu (`ms`)\n- Norwegian (`no`)\n- Polish (`pl`)\n- Portuguese (`pt`)\n- Portuguese Brazil (`pt_BR`)\n- Romanian (`ro`)\n- Russian (`ru`)\n- Serbian (`sr`)\n- Slovak (`sk`)\n- Slovenian (`sl`)\n- Spanish (`es`)\n- Spanish Latin America (`es_MX`)\n- Swedish (`sv`)\n- Thai (`th`)\n- Turkish (`tr`)\n- Ukrainian (`uk`) \n- Vietnamese (`vi`)\n\nAdditionally, you can automatically detect the browser language being used by the viewer and display the disclosure in that language by setting the value to `browser`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about consumer disclosures."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/document_visibility",
    "method": "getRecipientDocumentVisibility",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeDocumentVisibility",
    "typeScriptTag": "envelopeDocumentVisibility",
    "description": "Returns document visibility for a recipient",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of `documentVisibility` objects that specify whether documents are visible to recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/document_visibility",
    "method": "putRecipientDocumentVisibility",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeDocumentVisibility",
    "typeScriptTag": "envelopeDocumentVisibility",
    "description": "Updates document visibility for a recipient",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "documentVisibility",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of `documentVisibility` objects that specify whether documents are visible to recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/identity_proof_token",
    "method": "postRecipientProofFileResourceToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeRecipients",
    "typeScriptTag": "envelopeRecipients",
    "description": "Creates a resource token for a sender to request ID Evidence data. ",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "The `recipientIdGuid`.",
        "example": "RECIPIENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/initials_image",
    "method": "getRecipientInitialsImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Gets the initials image for a user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "includeChrome",
        "schema": "string",
        "required": false,
        "description": "The added line and identifier around the initial image. Note: Older envelopes might only have chromed images. If getting the non-chromed image fails, try getting the chromed image."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/initials_image",
    "method": "putRecipientInitialsImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Sets the initials image for an accountless signer.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/signature",
    "method": "getRecipientSignature",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Gets signature information for a signer or sign-in-person recipient.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/signature_image",
    "method": "getRecipientSignatureImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Retrieve signature image information for a signer/sign-in-person recipient.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "includeChrome",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response includes the chromed version of the signature image."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/signature_image",
    "method": "putRecipientSignatureImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Sets the signature image for an accountless signer.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs",
    "method": "deleteRecipientTabs",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeRecipientTabs",
    "typeScriptTag": "envelopeRecipientTabs",
    "description": "Deletes the tabs associated with a recipient.\n\n**Note:** It is an error to delete a tab that has the\n`templateLocked` property set to true.\nThis property corresponds to the **Restrict changes** option in the web app.\n\n",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "approveTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "checkboxTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commentThreadTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionCountyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionExpirationTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionStateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateSignedTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "declineTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "drawTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailAddressTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeIdTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "formulaTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fullNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "initialHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarizeTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarySealTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "noteTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numericalTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phoneNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "polyLineOverlayTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "prefillTabs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "radioGroupTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signerAttachmentTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "smartSectionTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssnTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tabGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "titleTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "viewTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "zipTabs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "All of the tabs associated with a recipient. Each property is a list of a type of tab.\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs",
    "method": "getRecipientTabs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeRecipientTabs",
    "typeScriptTag": "envelopeRecipientTabs",
    "description": "Gets the tabs information for a signer or sign-in-person recipient in an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "includeAnchorTabLocations",
        "schema": "string",
        "required": false,
        "description": "When **true,** all tabs with anchor tab properties are included in the response. The default value is **false.**"
      },
      {
        "name": "includeMetadata",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response includes metadata indicating which properties are editable."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "All of the tabs associated with a recipient. Each property is a list of a type of tab.\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs",
    "method": "postRecipientTabs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeRecipientTabs",
    "typeScriptTag": "envelopeRecipientTabs",
    "description": "Adds tabs for a recipient.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "approveTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "checkboxTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commentThreadTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionCountyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionExpirationTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionStateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateSignedTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "declineTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "drawTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailAddressTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeIdTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "formulaTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fullNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "initialHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarizeTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarySealTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "noteTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numericalTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phoneNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "polyLineOverlayTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "prefillTabs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "radioGroupTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signerAttachmentTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "smartSectionTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssnTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tabGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "titleTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "viewTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "zipTabs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "All of the tabs associated with a recipient. Each property is a list of a type of tab.\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs",
    "method": "putRecipientTabs",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeRecipientTabs",
    "typeScriptTag": "envelopeRecipientTabs",
    "description": "Updates the tabs for a recipient.\n\n",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "approveTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "checkboxTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commentThreadTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionCountyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionExpirationTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionStateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateSignedTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "declineTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "drawTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailAddressTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeIdTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "formulaTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fullNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "initialHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarizeTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarySealTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "noteTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numericalTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phoneNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "polyLineOverlayTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "prefillTabs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "radioGroupTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signerAttachmentTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "smartSectionTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssnTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tabGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "titleTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "viewTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "zipTabs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "All of the tabs associated with a recipient. Each property is a list of a type of tab.\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/views/identity_manual_review",
    "method": "postRecipientManualReviewView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeRecipients",
    "typeScriptTag": "envelopeRecipients",
    "description": "Create the link to the page for manually reviewing IDs.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "A value that identifies your account. This value is automatically generated by DocuSign for any account you create. Copy the value from the API Account ID field in the [AppsI and Keys](https://support.docusign.com/s/document-item?bundleId=pik1583277475390&topicId=pmp1583277397015.html) page.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A GUID value that DocuSign assigns to identify each recipient in an envelope. This value is globally unique for all recipients, not just those in your account.\n\nThe specified recipient must belong to a workflow that allows the [manual review](https://support.docusign.com/s/document-item?bundleId=pik1583277475390&topicId=eya1583277454804.html) of IDs. In addition, the status of the automatic verification for this recipient must return `Failed` and the value of the `vendorFailureStatusCode` field must be `MANUAL_REVIEW_STARTED` as shown in the following extract of a response to the [GET ENVELOPE](https://raw.githubusercontent.com) method:\n<p>\n\n```\n\"recipientAuthenticationStatus\": {\n       \"identityVerificationResult\": { \n             \"status\": \"Failed\",\n             \"eventTimestamp\": \"2020-09-04T16:59:42.8045667Z\",\n             \"vendorFailureStatusCode\": \"MANUAL_REVIEW_STARTED\"\n        }\n  }\n```",
        "example": "RECIPIENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/document_visibility",
    "method": "putRecipientsDocumentVisibility",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeDocumentVisibility",
    "typeScriptTag": "envelopeDocumentVisibility",
    "description": "Updates document visibility for recipients",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "documentVisibility",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of `documentVisibility` objects that specify whether documents are visible to recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/responsive_html_preview",
    "method": "postResponsiveHtmlPreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ResponsiveHtmlPreview",
    "typeScriptTag": "responsiveHtmlPreview",
    "description": "Creates a preview of the responsive versions of all of the documents in an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "displayAnchorPrefix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayAnchors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "displayOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayPageNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentGuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headerLabel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxScreenWidth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "removeEmptyTags",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showMobileOptimizedToggle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/tabs_blob",
    "method": "getTabsBlob",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TabsBlob",
    "typeScriptTag": "tabsBlob",
    "description": "Reserved for DocuSign.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/tabs_blob",
    "method": "putTabsBlob",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TabsBlob",
    "typeScriptTag": "tabsBlob",
    "description": "Reserved for DocuSign.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/templates",
    "method": "getEnvelopeTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeTemplates",
    "typeScriptTag": "envelopeTemplates",
    "description": "Get List of Templates used in an Envelope",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "The possible value is `matching_applied`, which returns template matching information for the template."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/templates",
    "method": "postEnvelopeTemplates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeTemplates",
    "typeScriptTag": "envelopeTemplates",
    "description": "Adds templates to an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "preserveTemplateRecipient",
        "schema": "string",
        "required": false,
        "description": "If omitted or set to false (the default),\nenvelope recipients _will be removed_\nif the template being applied\nincludes only  tabs positioned via anchor text for the recipient,\nand none of the documents include the anchor text. \n\nWhen **true,** the recipients _will be preserved_ after the template is applied.\n\n"
      },
      {
        "name": "documentTemplates",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/views/correct",
    "method": "deleteEnvelopeCorrectView",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeViews",
    "typeScriptTag": "envelopeViews",
    "description": "Revokes the correction view URL to the Envelope UI.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "beginOnTagger",
        "schema": "string",
        "description": ""
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "suppressNavigation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "viewUrl",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/views/correct",
    "method": "postEnvelopeCorrectView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeViews",
    "typeScriptTag": "envelopeViews",
    "description": "Returns a URL to the envelope correction UI.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "beginOnTagger",
        "schema": "string",
        "description": ""
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "suppressNavigation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "viewUrl",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provides a URL that you can embed in your application\nto provide access to the DocuSign UI.\n\n### Related topics\n\n- [Embedded signing and sending](https://raw.githubusercontent.com)\n- [Send an envelope via your app](https://raw.githubusercontent.com)\n- [Introducing customizable embedded sending](https://www.docusign.com/blog/developers/introducing-customizable-embedded-sending)\n\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/views/edit",
    "method": "postEnvelopeEditView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeViews",
    "typeScriptTag": "envelopeViews",
    "description": "Returns a URL to the edit view UI.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provides a URL that you can embed in your application\nto provide access to the DocuSign UI.\n\n### Related topics\n\n- [Embedded signing and sending](https://raw.githubusercontent.com)\n- [Send an envelope via your app](https://raw.githubusercontent.com)\n- [Introducing customizable embedded sending](https://www.docusign.com/blog/developers/introducing-customizable-embedded-sending)\n\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/views/recipient",
    "method": "postEnvelopeRecipientView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeViews",
    "typeScriptTag": "envelopeViews",
    "description": "Returns a URL to the recipient view UI.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The ID of the draft envelope or template to preview.",
        "example": "ENVELOPEID"
      },
      {
        "name": "assertionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authenticationInstant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authenticationMethod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientURLs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "clientUserId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "frameAncestors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "messageOrigins",
        "schema": "array",
        "description": ""
      },
      {
        "name": "pingFrequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pingUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "securityDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xFrameOptions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xFrameOptionsAllowFromUrl",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provides a URL that you can embed in your application\nto provide access to the DocuSign UI.\n\n### Related topics\n\n- [Embedded signing and sending](https://raw.githubusercontent.com)\n- [Send an envelope via your app](https://raw.githubusercontent.com)\n- [Introducing customizable embedded sending](https://www.docusign.com/blog/developers/introducing-customizable-embedded-sending)\n\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/views/recipient_preview",
    "method": "postEnvelopeRecipientPreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeRecipients",
    "typeScriptTag": "envelopeRecipients",
    "description": "Creates an envelope recipient preview.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "assertionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authenticationInstant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authenticationMethod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientURLs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pingFrequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pingUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "securityDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xFrameOptions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xFrameOptionsAllowFromUrl",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/views/sender",
    "method": "postEnvelopeSenderView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeViews",
    "typeScriptTag": "envelopeViews",
    "description": "Returns a URL to the sender view UI.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provides a URL that you can embed in your application\nto provide access to the DocuSign UI.\n\n### Related topics\n\n- [Embedded signing and sending](https://raw.githubusercontent.com)\n- [Send an envelope via your app](https://raw.githubusercontent.com)\n- [Introducing customizable embedded sending](https://www.docusign.com/blog/developers/introducing-customizable-embedded-sending)\n\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/views/shared",
    "method": "postEnvelopeRecipientSharedView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeViews",
    "typeScriptTag": "envelopeViews",
    "description": "Returns a URL to the shared recipient view UI for an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "assertionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authenticationInstant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authenticationMethod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientURLs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "clientUserId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "frameAncestors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "messageOrigins",
        "schema": "array",
        "description": ""
      },
      {
        "name": "pingFrequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pingUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "securityDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xFrameOptions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xFrameOptionsAllowFromUrl",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow",
    "method": "deleteEnvelopeWorkflowDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Delete the workflow definition for an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow",
    "method": "getEnvelopeWorkflowDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Returns the workflow definition for an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes the workflow for an envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow",
    "method": "putEnvelopeWorkflowDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Updates the workflow definition for an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "currentWorkflowStepId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resumeDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scheduledSending",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workflowStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflowSteps",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes the workflow for an envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow/scheduledSending",
    "method": "deleteEnvelopeScheduledSendingDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Deletes the scheduled sending rules for the envelope's workflow.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow/scheduledSending",
    "method": "getEnvelopeScheduledSendingDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Returns the scheduled sending rules for an envelope's workflow definition.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that specifies the scheduled sending settings for the envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow/scheduledSending",
    "method": "putEnvelopeScheduledSendingDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Updates the scheduled sending rules for an envelope's workflow.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "bulkListId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resumeDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that specifies the scheduled sending settings for the envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow/steps",
    "method": "postEnvelopeWorkflowStepDefinition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Adds a new step to an envelope's workflow.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delayedRouting",
        "schema": "object",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientRouting",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "triggeredDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "triggerOnItem",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Describes a single step in a workflow."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow/steps/{workflowStepId}",
    "method": "deleteEnvelopeWorkflowStepDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Deletes a workflow step from an envelope's workflow definition.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workflow step.",
        "example": "WORKFLOWSTEPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow/steps/{workflowStepId}",
    "method": "getEnvelopeWorkflowStepDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Returns a specified workflow step for a specified template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workflow step.",
        "example": "WORKFLOWSTEPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes a single step in a workflow."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow/steps/{workflowStepId}",
    "method": "putEnvelopeWorkflowStepDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Updates the specified workflow step for an envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workflow step.",
        "example": "WORKFLOWSTEPID"
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delayedRouting",
        "schema": "object",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientRouting",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "triggeredDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "triggerOnItem",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes a single step in a workflow."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow/steps/{workflowStepId}/delayedRouting",
    "method": "deleteEnvelopeDelayedRoutingDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Deletes the delayed routing rules for the specified envelope workflow step.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workflow step.",
        "example": "WORKFLOWSTEPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow/steps/{workflowStepId}/delayedRouting",
    "method": "getEnvelopeDelayedRoutingDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Returns the delayed routing rules for an envelope's workflow step definition.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workflow step.",
        "example": "WORKFLOWSTEPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that specifies the delayed routing settings for the workflow step."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/{envelopeId}/workflow/steps/{workflowStepId}/delayedRouting",
    "method": "putEnvelopeDelayedRoutingDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Updates the delayed routing rules for an envelope's workflow step definition.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "required": true,
        "description": "The envelope's GUID. \n\nExample: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`\n",
        "example": "ENVELOPEID"
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workflow step.",
        "example": "WORKFLOWSTEPID"
      },
      {
        "name": "resumeDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that specifies the delayed routing settings for the workflow step."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/status",
    "method": "putStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Envelopes",
    "typeScriptTag": "envelopes",
    "description": "Gets envelope statuses for a set of envelopes.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "acStatus",
        "schema": "string",
        "required": false,
        "description": "Specifies the Authoritative Copy Status for the envelopes. Valid values: \n\n- `Unknown`\n- `Original`\n- `Transferred`\n- `AuthoritativeCopy`\n- `AuthoritativeCopyExportPending`\n- `AuthoritativeCopyExported`\n- `DepositPending`\n- `Deposited`\n- `DepositedEO`\n- `DepositFailed`"
      },
      {
        "name": "block",
        "schema": "string",
        "required": false,
        "description": "When **true,** removes any results that match one of the provided `transaction_ids`."
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n\n"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "The email address of the sender."
      },
      {
        "name": "envelopeIds",
        "schema": "string",
        "required": false,
        "description": "The envelope IDs to include in the results.\n\nThe value of this property can be:\n- A comma-separated list of envelope IDs\n- The special value `request_body`. In this case, the method uses the envelope IDs in the request body."
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "The date/time setting that specifies when the request begins checking for status changes for envelopes in the account. This is required unless parameters `envelope_ids` and/or `transaction_Ids` are provided.\n\n**Note:** This parameter must be set to a valid  `DateTime`, or  `envelope_ids` and/or `transaction_ids` must be specified."
      },
      {
        "name": "fromToStatus",
        "schema": "string",
        "required": false,
        "description": "The envelope status that you are checking for. Possible values are:\n\n\n- `Changed` (default)\n- `Completed`\n- `Created`\n- `Declined`\n- `Deleted`\n- `Delivered`\n- `Processing`\n- `Sent`\n- `Signed`\n- `TimedOut`\n- `Voided`\n\nFor example, if you specify `Changed`, this method\nreturns a list of envelopes that changed status\nduring the `from_date` to `to_date` time period. \n"
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of envelope status to search for. Possible values are:\n\n- `completed`\n- `created`\n- `declined`\n- `deleted`\n- `delivered`\n- `processing`\n- `sent`\n- `signed`\n- `template`\n- `voided`\n"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "Optional date/time setting\nthat specifies the last date/time \nor envelope status changes in the result set. \n\nThe default value is the time that you call the method. \n"
      },
      {
        "name": "transactionIds",
        "schema": "string",
        "required": false,
        "description": "The transaction IDs to include in the results. Note that transaction IDs are valid for seven days.\n\nThe value of this property can be:\n- A list of comma-separated transaction IDs\n- The special value `request_body`. In this case, this method uses the transaction IDs in the request body."
      },
      {
        "name": "userName",
        "schema": "string",
        "required": false,
        "description": "Limits results to envelopes\nsent by the account user\nwith this user name.\n\n`email` must be given as well,\nand both `email` and `user_name`\nmust refer to an existing account user.\n"
      },
      {
        "name": "envelopeIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "transactionIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Result set for the Envelopes: listStatusChanges method"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/transfer_rules",
    "method": "getEnvelopeTransferRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeTransferRules",
    "typeScriptTag": "envelopeTransferRules",
    "description": "Gets envelope transfer rules.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n"
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/transfer_rules",
    "method": "postEnvelopeTransferRules",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeTransferRules",
    "typeScriptTag": "envelopeTransferRules",
    "description": "Creates an envelope transfer rule.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "carbonCopyOriginalOwner",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeTransferRuleId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fromUsers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "modifiedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedUser",
        "schema": "object",
        "description": ""
      },
      {
        "name": "toFolder",
        "schema": "object",
        "description": ""
      },
      {
        "name": "toUser",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/transfer_rules",
    "method": "putEnvelopeTransferRules",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeTransferRules",
    "typeScriptTag": "envelopeTransferRules",
    "description": "Changes the status of multiple envelope transfer rules.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "endPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeTransferRules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "nextUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "previousUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resultSetSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "totalSetSize",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/transfer_rules/{envelopeTransferRuleId}",
    "method": "deleteEnvelopeTransferRules",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeTransferRules",
    "typeScriptTag": "envelopeTransferRules",
    "description": "Deletes an envelope transfer rule.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeTransferRuleId",
        "schema": "string",
        "required": true,
        "description": "The ID of the envelope transfer rule. The system generates this ID when the rule is first created.",
        "example": "ENVELOPETRANSFERRULEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/envelopes/transfer_rules/{envelopeTransferRuleId}",
    "method": "putEnvelopeTransferRule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeTransferRules",
    "typeScriptTag": "envelopeTransferRules",
    "description": "Changes the status of an envelope transfer rule.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeTransferRuleId",
        "schema": "string",
        "required": true,
        "description": "The ID of the envelope transfer rule. The system generates this ID when the rule is first created.",
        "example": "ENVELOPETRANSFERRULEID"
      },
      {
        "name": "carbonCopyOriginalOwner",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeTransferRuleId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromGroup",
        "schema": "object",
        "description": ""
      },
      {
        "name": "fromUser",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modifiedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedUser",
        "schema": "object",
        "description": ""
      },
      {
        "name": "toFolder",
        "schema": "object",
        "description": ""
      },
      {
        "name": "toUser",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object contains details about an envelope transfer rule."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/favorite_templates",
    "method": "unFavoriteTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "FavoriteTemplates",
    "typeScriptTag": "favoriteTemplates",
    "description": "Remove one or more templates from the account favorites.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "favoriteTemplates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "templatesUpdatedCount",
        "schema": "integer",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/favorite_templates",
    "method": "getFavoriteTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FavoriteTemplates",
    "typeScriptTag": "favoriteTemplates",
    "description": "Retrieves the list of favorite templates for the account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/favorite_templates",
    "method": "putFavoriteTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "FavoriteTemplates",
    "typeScriptTag": "favoriteTemplates",
    "description": "Set one or more templates as account favorites.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "favoriteTemplates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "templatesUpdatedCount",
        "schema": "integer",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/folders",
    "method": "getFolders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Returns a list of the account's folders.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return."
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of folder types to include in the response.\nValid values are:\n\n- `envelope_folders`: Returns a list of envelope folders. (Default)\n- `template_folders`: Returns a list of template folders. \n- `shared_template_folders`: Returns a list of shared template folders.\n"
      },
      {
        "name": "includeItems",
        "schema": "string",
        "required": false,
        "description": "Indicates whether folder items are included in the response. If this parameter is omitted, the default is false."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nThe default value is `0`.\n"
      },
      {
        "name": "subFolderDepth",
        "schema": "string",
        "required": false,
        "description": "If missing or any value other than `-1`, the returned list contains only the top-level folders.\nA value of `-1` returns the complete folder hierarchy.\n"
      },
      {
        "name": "template",
        "schema": "string",
        "required": false,
        "description": "This parameter is deprecated as of version 2.1. Use `include` instead."
      },
      {
        "name": "userFilter",
        "schema": "string",
        "required": false,
        "description": "Narrows down the resulting folder list by the following values:\n\n- `all`: Returns all templates owned or shared with the user. (default)\n- `owned_by_me`: Returns only  templates the user owns.\n- `shared_with_me`: Returns only templates that are shared with the user.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/folders/{folderId}",
    "method": "getFolderItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Gets information about items in a specified folder. ",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The ID of the folder.",
        "example": "FOLDERID"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign."
      },
      {
        "name": "includeItems",
        "schema": "string",
        "required": false,
        "description": "Indicates whether folder items are included in the response. If this parameter is omitted, the default is false."
      },
      {
        "name": "ownerEmail",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign."
      },
      {
        "name": "ownerName",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign."
      },
      {
        "name": "searchText",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign."
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/folders/{folderId}",
    "method": "putFolderById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Moves a set of envelopes from their current folder to another folder.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The ID of the folder.",
        "example": "FOLDERID"
      },
      {
        "name": "envelopeIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "folders",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fromFolderId",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/groups",
    "method": "deleteGroups",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Deletes an existing user group.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "endPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "nextUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "previousUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resultSetSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "totalSetSize",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object is used for both requests and responses. Some properties (such as `endPosition`) only apply to the response of [Groups: list](https://raw.githubusercontent.com).\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/groups",
    "method": "getGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Gets information about groups associated with the account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n\nValid values: `1` to `100`"
      },
      {
        "name": "groupType",
        "schema": "string",
        "required": false,
        "description": "The type of group to return. Valid values:\n\n* `AdminGroup`\n* `CustomGroup`\n* `EveryoneGroup`"
      },
      {
        "name": "includeUsercount",
        "schema": "string",
        "required": false,
        "description": "When **true,** every group returned in the response includes a `userCount` property that contains the total number of users in the group. The default is **true.**"
      },
      {
        "name": "searchText",
        "schema": "string",
        "required": false,
        "description": "Filters the results of a GET request based on the text that you specify."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object is used for both requests and responses. Some properties (such as `endPosition`) only apply to the response of [Groups: list](https://raw.githubusercontent.com).\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/groups",
    "method": "postGroups",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Creates one or more groups for the account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "endPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "nextUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "previousUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resultSetSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "totalSetSize",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "This object is used for both requests and responses. Some properties (such as `endPosition`) only apply to the response of [Groups: list](https://raw.githubusercontent.com).\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/groups",
    "method": "putGroups",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Updates the group information for a group.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "endPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "nextUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "previousUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resultSetSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "totalSetSize",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object is used for both requests and responses. Some properties (such as `endPosition`) only apply to the response of [Groups: list](https://raw.githubusercontent.com).\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/groups/{groupId}/brands",
    "method": "deleteGroupBrands",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "GroupBrands",
    "typeScriptTag": "groupBrands",
    "description": "Deletes brand information from a group.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group.",
        "example": "GROUPID"
      },
      {
        "name": "brands",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "If your account includes multiple signing brands, you can use the groups functionality to assign different brands to different groups. This resource enables you to manage group brands."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/groups/{groupId}/brands",
    "method": "getGroupBrands",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GroupBrands",
    "typeScriptTag": "groupBrands",
    "description": "Gets the brand information for a group.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group.",
        "example": "GROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "If your account includes multiple signing brands, you can use the groups functionality to assign different brands to different groups. This resource enables you to manage group brands."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/groups/{groupId}/brands",
    "method": "putGroupBrands",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "GroupBrands",
    "typeScriptTag": "groupBrands",
    "description": "Adds an existing brand to a group.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group being accessed.",
        "example": "GROUPID"
      },
      {
        "name": "brands",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "If your account includes multiple signing brands, you can use the groups functionality to assign different brands to different groups. This resource enables you to manage group brands."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/groups/{groupId}/users",
    "method": "deleteGroupUsers",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "GroupUsers",
    "typeScriptTag": "groupUsers",
    "description": "Deletes one or more users from a group",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group being accessed.",
        "example": "GROUPID"
      },
      {
        "name": "users",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/groups/{groupId}/users",
    "method": "getGroupUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GroupUsers",
    "typeScriptTag": "groupUsers",
    "description": "Gets a list of users in a group.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group being accessed.",
        "example": "GROUPID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n\nValid values: `1` to `100`\n"
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/groups/{groupId}/users",
    "method": "putGroupUsers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "GroupUsers",
    "typeScriptTag": "groupUsers",
    "description": "Adds one or more users to an existing group.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group being accessed.",
        "example": "GROUPID"
      },
      {
        "name": "users",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/identity_verification",
    "method": "getAccountIdentityVerification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IdentityVerifications",
    "typeScriptTag": "identityVerifications",
    "description": "Retrieves the Identity Verification workflows available to an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "identityVerificationWorkflowStatus",
        "schema": "string",
        "required": false,
        "description": "Filters the workflows returned according to status. Valid values:\n\n- `active`: Only active workflows are returned. This is the default.\n- `deactivated`: Only deactivated workflows are returned.\n- `all`: All workflows are returned.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/payment_gateway_accounts",
    "method": "getAllPaymentGatewayAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentGatewayAccounts",
    "typeScriptTag": "paymentGatewayAccounts",
    "description": "List payment gateway accounts",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Holds information about connected payment accounts."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/permission_profiles",
    "method": "getPermissionProfiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountPermissionProfiles",
    "typeScriptTag": "accountPermissionProfiles",
    "description": "Gets a list of permission profiles.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of additional properties to return in the response. Valid values are:\n\n- `user_count`: The total number of users associated with the permission profile.\n- `closed_users`: Includes closed users in the `user_count`.\n- `account_management`: The account management settings.\n- `metadata`: Metadata indicating whether the properties associated with the account permission profile are editable.\n\nExample: `user_count,closed_users`\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains details about the permission profiles associated with an account."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/permission_profiles",
    "method": "postPermissionProfiles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AccountPermissionProfiles",
    "typeScriptTag": "accountPermissionProfiles",
    "description": "Creates a new permission profile for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of additional properties to return in the response. The only valid value for this request is `metadata`, which returns metadata indicating whether the properties associated with the account permission profile are editable."
      },
      {
        "name": "modifiedByUsername",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "permissionProfileId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "permissionProfileName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "userCount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "This object defines the account permissions for a profile that you can apply to a group of users."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/permission_profiles/{permissionProfileId}",
    "method": "deletePermissionProfiles",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AccountPermissionProfiles",
    "typeScriptTag": "accountPermissionProfiles",
    "description": "Deletes a permission profile from an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "permissionProfileId",
        "schema": "string",
        "required": true,
        "description": "The ID of the permission profile.\n\nUse [AccountPermissionProfiles: list](https://raw.githubusercontent.com)\nto get a list of permission profiles and their IDs.\n\nYou can also download a CSV file of all permission profiles\nand their IDs from the **Settings > Permission Profiles** page\nof your eSignature account page.\n",
        "example": "PERMISSIONPROFILEID"
      },
      {
        "name": "moveUsersTo",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/permission_profiles/{permissionProfileId}",
    "method": "getPermissionProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountPermissionProfiles",
    "typeScriptTag": "accountPermissionProfiles",
    "description": "Returns a permission profile for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "permissionProfileId",
        "schema": "string",
        "required": true,
        "description": "The ID of the permission profile.\n\nUse [AccountPermissionProfiles: list](https://raw.githubusercontent.com)\nto get a list of permission profiles and their IDs.\n\nYou can also download a CSV file of all permission profiles\nand their IDs from the **Settings > Permission Profiles** page\nof your eSignature account page.\n",
        "example": "PERMISSIONPROFILEID"
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of additional properties to return in the response. The only valid value for this request is `metadata`, which returns metadata indicating whether the properties associated with the account permission profile are editable."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object defines the account permissions for a profile that you can apply to a group of users."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/permission_profiles/{permissionProfileId}",
    "method": "putPermissionProfiles",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccountPermissionProfiles",
    "typeScriptTag": "accountPermissionProfiles",
    "description": "Updates a permission profile.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "permissionProfileId",
        "schema": "string",
        "required": true,
        "description": "The ID of the permission profile.\n\nUse [AccountPermissionProfiles: list](https://raw.githubusercontent.com)\nto get a list of permission profiles and their IDs.\n\nYou can also download a CSV file of all permission profiles\nand their IDs from the **Settings > Permission Profiles** page\nof your eSignature account page.\n",
        "example": "PERMISSIONPROFILEID"
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of additional properties to return in the response. The only valid value for this request is `metadata`, which returns metadata indicating whether the properties associated with the account permission profile are editable."
      },
      {
        "name": "modifiedByUsername",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "permissionProfileId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "permissionProfileName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "userCount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object defines the account permissions for a profile that you can apply to a group of users."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/powerforms",
    "method": "deletePowerFormsList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PowerForms",
    "typeScriptTag": "powerForms",
    "description": "Deletes one or more PowerForms.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "powerForms",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of PowerForms."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/powerforms",
    "method": "getPowerFormsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PowerForms",
    "typeScriptTag": "powerForms",
    "description": "Returns a list of PowerForms.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "The start date for a date range.\n\n**Note:** If no value is provided, no date filtering is applied."
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "The order in which to sort the results.\n\nValid values are: \n\n\n* `asc`: Ascending order.\n* `desc`: Descending order. "
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "The file attribute to use to sort the results.\n\nValid values are:\n\n- `sender`\n- `auth`\n- `used`\n- `remaining`\n- `lastused`\n- `status`\n- `type`\n- `templatename`\n- `created`"
      },
      {
        "name": "searchFields",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of additional properties to include in a search.\n\n- `sender`: Include sender name and email in the search.\n- `recipients`: Include recipient names and emails in the search.\n- `envelope`: Include envelope information in the search.\n"
      },
      {
        "name": "searchText",
        "schema": "string",
        "required": false,
        "description": "Use this parameter to search for specific text."
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "The end date for a date range.\n\n**Note:** If no value is provided, this property defaults to the current date."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of PowerForms."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/powerforms",
    "method": "postPowerForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PowerForms",
    "typeScriptTag": "powerForms",
    "description": "Creates a new PowerForm",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailBody",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailSubject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "instructions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isActive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUsed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limitUseInterval",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limitUseIntervalEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limitUseIntervalUnits",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxUseEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerFormId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerFormUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "array",
        "description": ""
      },
      {
        "name": "senderName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "senderUserId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timesUsed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "usesRemaining",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contains details about a PowerForm."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/powerforms/{powerFormId}",
    "method": "deletePowerForm",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PowerForms",
    "typeScriptTag": "powerForms",
    "description": "Deletes a PowerForm.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "powerFormId",
        "schema": "string",
        "required": true,
        "description": "The ID of the PowerForm.",
        "example": "POWERFORMID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/powerforms/{powerFormId}",
    "method": "getPowerForm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PowerForms",
    "typeScriptTag": "powerForms",
    "description": "Returns a single PowerForm.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "powerFormId",
        "schema": "string",
        "required": true,
        "description": "The ID of the PowerForm.",
        "example": "POWERFORMID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains details about a PowerForm."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/powerforms/{powerFormId}",
    "method": "putPowerForm",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PowerForms",
    "typeScriptTag": "powerForms",
    "description": "Updates an existing PowerForm.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "powerFormId",
        "schema": "string",
        "required": true,
        "description": "The ID of the PowerForm.",
        "example": "POWERFORMID"
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailBody",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailSubject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "instructions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isActive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUsed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limitUseInterval",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limitUseIntervalEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limitUseIntervalUnits",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxUseEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerFormId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerFormUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "array",
        "description": ""
      },
      {
        "name": "senderName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "senderUserId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timesUsed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "usesRemaining",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains details about a PowerForm."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/powerforms/{powerFormId}/form_data",
    "method": "getPowerFormFormData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PowerFormData",
    "typeScriptTag": "powerFormData",
    "description": "Returns the data that users entered in a PowerForm.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "powerFormId",
        "schema": "string",
        "required": true,
        "description": "The ID of the PowerForm.",
        "example": "POWERFORMID"
      },
      {
        "name": "dataLayout",
        "schema": "string",
        "required": false,
        "description": "The layout in which to return the PowerForm data. Valid values are:\n\n- `Native`\n- `Csv_Classic`\n- `Csv_One_Envelope_Per_Line`\n- `Xml_Classic`"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "The start date for a date range in UTC DateTime format.\n\n**Note:** If this property is null, no date filtering is applied."
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "The end date of a date range in UTC DateTime format. The default value is `UtcNow`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/powerforms/senders",
    "method": "getPowerFormsSenders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PowerForms",
    "typeScriptTag": "powerForms",
    "description": "Gets PowerForm senders.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object includes information about the users who have sent PowerForms."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/recipient_names",
    "method": "getRecipientNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Gets the recipient names associated with an email address.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "(Required) The email address for which you want to retrieve recipient names."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This response object contains a list of recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/seals",
    "method": "getSealProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountSealProviders",
    "typeScriptTag": "accountSealProviders",
    "description": "Returns available seals for specified account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/search_folders/{searchFolderId}",
    "method": "getSearchFolderContents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Deprecated. Use Envelopes: listStatusChanges.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "searchFolderId",
        "schema": "string",
        "required": true,
        "description": "Specifies the envelope group that is searched by the request. These are logical groupings, not actual folder names. Valid values are: drafts, awaiting_my_signature, completed, out_for_signature.",
        "example": "SEARCHFOLDERID"
      },
      {
        "name": "all",
        "schema": "string",
        "required": false,
        "description": "Specifies that all envelopes that match the criteria are returned."
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n\nValid values: `1` to `100`\n"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Specifies the start of the date range to return. If no value is provided, the default search is the previous 30 days."
      },
      {
        "name": "includeRecipients",
        "schema": "string",
        "required": false,
        "description": "When **true,** the recipient information is returned in the response."
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Specifies the order in which the list is returned. Valid values are: `asc` for ascending order, and `desc` for descending order."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Specifies the property used to sort the list. Valid values are: `action_required`, `created`, `completed`, `sent`, `signer_list`, `status`, or `subject`."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "Specifies the end of the date range to return."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Results from a folder item request."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Gets account settings information.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains account settings information. Used in requests to set property values. Used in responses to report property values."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings",
    "method": "putSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Updates the account settings for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "accessCodeFormat",
        "schema": "object",
        "description": ""
      },
      {
        "name": "accountDateTimeFormat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountDateTimeFormatMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "accountDefaultLanguage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountDefaultLanguageMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "accountName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountNameMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "accountNotification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "accountUISettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "adoptSigConfig",
        "schema": "string",
        "description": ""
      },
      {
        "name": "adoptSigConfigMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "advancedCorrect",
        "schema": "string",
        "description": ""
      },
      {
        "name": "advancedCorrectMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "advancedSearchEnableTabField",
        "schema": "string",
        "description": ""
      },
      {
        "name": "advancedSearchEnableTabFieldMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "advancedSearchEnableTemplateIdField",
        "schema": "string",
        "description": ""
      },
      {
        "name": "advancedSearchEnableTemplateIdFieldMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "advancedSearchEnableTemplateNameField",
        "schema": "string",
        "description": ""
      },
      {
        "name": "advancedSearchEnableTemplateNameFieldMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowAccessCodeFormat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowAccessCodeFormatMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowAccountManagementGranular",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowAccountManagementGranularMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowAccountMemberNameChange",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowAccountMemberNameChangeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowACE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowACEMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowAdvancedRecipientRoutingConditional",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowAdvancedRecipientRoutingConditionalMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowAgentNameEmailEdit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowAgentNameEmailEditMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowAgreementActions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowAgreementActionsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowAgreementOrchestrations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowAgreementOrchestrationsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowAutoNavSettings",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowAutoNavSettingsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowAutoTagging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowAutoTaggingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowBulkSend",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowBulkSendMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowCDWithdraw",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowCDWithdrawMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowConnectHttpListenerConfigs",
        "schema": "string",
        "description": ""
      },
      {
        "name": "AllowConnectIdentityVerificationUI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowConnectOAuthUI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowConnectSendFinishLater",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowConnectSendFinishLaterMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowConnectUnifiedPayloadUI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowConsumerDisclosureOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowConsumerDisclosureOverrideMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowDataDownload",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowDataDownloadMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowDelayedRouting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowDelayedRoutingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowDelegatedSigning",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowDelegatedSigningMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowDocGenDocuments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowDocGenDocumentsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowDocumentDisclosures",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowDocumentDisclosuresMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowDocumentsOnSignedEnvelopes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowDocumentsOnSignedEnvelopesMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowDocumentVisibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowDocumentVisibilityMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowEditingEnvelopesOnBehalfOfOthers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowEditingEnvelopesOnBehalfOfOthersMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowEHankoStamps",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowEHankoStampsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowENoteEOriginal",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowENoteEOriginalMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowEnvelopeCorrect",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowEnvelopeCorrectMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowEnvelopeCustodyTransfer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowEnvelopeCustodyTransferMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowEnvelopeCustomFields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowEnvelopeCustomFieldsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowEnvelopePublishReporting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowEnvelopePublishReportingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowEnvelopeReporting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowEnvelopeReportingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowExpression",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowExpressionMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowExpressSignerCertificate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowExpressSignerCertificateMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowExtendedSendingResourceFile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowExtendedSendingResourceFileMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowExternalLinkedAccounts",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowExternalLinkedAccountsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowExternalSignaturePad",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowExternalSignaturePadMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowIDVForEUQualifiedSignatures",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowIDVForEUQualifiedSignaturesMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowIDVLevel1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowIDVLevel1Metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowIDVLevel1Trial",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowIDVLevel1TrialMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowIDVLevel2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowIDVLevel2Metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowIDVLevel3",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowIDVLevel3Metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowIDVPlatform",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowIDVPlatformMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowInPerson",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowInPersonElectronicNotary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowInPersonElectronicNotaryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowInPersonMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowManagedStamps",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowManagedStampsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowManagingEnvelopesOnBehalfOfOthers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowManagingEnvelopesOnBehalfOfOthersMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowMarkup",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMarkupMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowMemberTimeZone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMemberTimeZoneMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowMergeFields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMergeFieldsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowMultipleBrandProfiles",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMultipleBrandProfilesMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowMultipleSignerAttachments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMultipleSignerAttachmentsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowNonUSPhoneAuth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowNonUSPhoneAuthMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowOcrOfEnvelopeDocuments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowOcrOfEnvelopeDocumentsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowOfflineSigning",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowOfflineSigningMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowOpenTrustSignerCertificate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowOpenTrustSignerCertificateMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowOrganizationDocusignMonitor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowOrganizationDocusignMonitorFree",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowOrganizationDocusignMonitorFreeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowOrganizationDocusignMonitorMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowOrganizationDomainUserManagement",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowOrganizationDomainUserManagementMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowOrganizations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowOrganizationsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowOrganizationSsoManagement",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowOrganizationSsoManagementMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowOrganizationToUseInPersonElectronicNotary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowOrganizationToUseInPersonElectronicNotaryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowOrganizationToUseRemoteNotary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowOrganizationToUseRemoteNotaryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowOrganizationToUseThirdPartyElectronicNotary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowOrganizationToUseThirdPartyElectronicNotaryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowParticipantRecipientType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowParticipantRecipientTypeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowPaymentProcessing",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowPaymentProcessingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowPerformanceAnalytics",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowPerformanceAnalyticsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowPhoneAuthentication",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowPhoneAuthenticationMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowPhoneAuthOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowPhoneAuthOverrideMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowPrivateSigningGroups",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowPrivateSigningGroupsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowRecipientConnect",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowRecipientConnectMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowReminders",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowRemindersMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowRemoteNotary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowRemoteNotaryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowResourceFileBranding",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowResourceFileBrandingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSafeBioPharmaSignerCertificate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSafeBioPharmaSignerCertificateMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowScheduledSending",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowScheduledSendingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSecurityAppliance",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSecurityApplianceMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSendingEnvelopesOnBehalfOfOthers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSendingEnvelopesOnBehalfOfOthersMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSendToCertifiedDelivery",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSendToCertifiedDeliveryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSendToIntermediary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSendToIntermediaryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowServerTemplates",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowServerTemplatesMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSetEmbeddedRecipientStartURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSetEmbeddedRecipientStartURLMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSharedTabs",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSharedTabsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSignatureStamps",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSignatureStampsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSignDocumentFromHomePage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSignDocumentFromHomePageMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSignerReassign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSignerReassignMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSignerReassignOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSignerReassignOverrideMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSigningExtensions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSigningExtensionsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSigningGroups",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSigningGroupsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSigningInsights",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSigningInsightsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSigningRadioDeselect",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSigningRadioDeselectMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSignNow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSignNowMetadata",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSMSDelivery",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSMSDeliveryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSocialIdLogin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSocialIdLoginMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSupplementalDocuments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSupplementalDocumentsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowThirdPartyElectronicNotary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowThirdPartyElectronicNotaryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowTransactionsWorkspace",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowTransactionsWorkspaceMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowTransactionsWorkspaceOriginal",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowTransactionsWorkspaceOriginalMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowUsersToAccessDirectory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowUsersToAccessDirectoryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowValueInsights",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowValueInsightsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowWebForms",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowWebFormsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowWhatsAppDelivery",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowWhatsAppDeliveryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "anchorPopulationScope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorPopulationScopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "anchorTagVersionedPlacementEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorTagVersionedPlacementMetadataEnabled",
        "schema": "object",
        "description": ""
      },
      {
        "name": "attachCompletedEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachCompletedEnvelopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "authenticationCheck",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authenticationCheckMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "autoNavRule",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoNavRuleMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "autoProvisionSignerAccount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoProvisionSignerAccountMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "bccEmailArchive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bccEmailArchiveMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "betaSwitchConfiguration",
        "schema": "string",
        "description": ""
      },
      {
        "name": "betaSwitchConfigurationMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "billingAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "billingAddressMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "bulkSend",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bulkSendActionResendLimit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bulkSendMaxCopiesInBatch",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bulkSendMaxUnprocessedEnvelopesCount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bulkSendMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canSelfBrandSend",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canSelfBrandSendMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canSelfBrandSign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canSelfBrandSignMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canUseSalesforceOAuth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canUseSalesforceOAuthMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "captureVoiceRecording",
        "schema": "string",
        "description": ""
      },
      {
        "name": "captureVoiceRecordingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "cfr21SimplifiedSigningEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cfr21SimplifiedSigningEnabledMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "cfrUseWideImage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cfrUseWideImageMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "checkForMultipleAdminsOnAccount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "checkForMultipleAdminsOnAccountMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "chromeSignatureEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "chromeSignatureEnabledMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "commentEmailShowMessageText",
        "schema": "string",
        "description": ""
      },
      {
        "name": "commentEmailShowMessageTextMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "commentsAllowEnvelopeOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "commentsAllowEnvelopeOverrideMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conditionalFieldsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "conditionalFieldsEnabledMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "consumerDisclosureFrequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "consumerDisclosureFrequencyMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "convertPdfFields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "convertPdfFieldsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dataPopulationScope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dataPopulationScopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "defaultToAdvancedEnvelopesFilterForm",
        "schema": "string",
        "description": ""
      },
      {
        "name": "defaultToAdvancedEnvelopesFilterFormMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disableAutoTemplateMatching",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableAutoTemplateMatchingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disableMobileApp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableMobileAppMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disableMobilePushNotifications",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableMobilePushNotificationsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disableMobileSending",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableMobileSendingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disableMultipleSessions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableMultipleSessionsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disablePurgeNotificationsForSenderMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disableSignerCertView",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableSignerCertViewMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disableSignerHistoryView",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableSignerHistoryViewMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disableStyleSignature",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableStyleSignatureMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disableUploadSignature",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableUploadSignatureMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disableUserSharing",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableUserSharingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "displayBetaSwitch",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayBetaSwitchMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "documentConversionRestrictions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentConversionRestrictionsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "documentRetention",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentRetentionMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "documentRetentionPurgeTabs",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentVisibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentVisibilityMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "draftEnvelopeRetention",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draftEnvelopeRetentionMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dss_EnableProvisioningPenConfiguration_RadminOption",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dss_EnableSignatureTypeCustomTagRadmin_RadminOption",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dss_SIGN_28411_EnableLeavePagePrompt_RadminOption",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dss_SIGN_29182_SlideUpBar_RadminOption",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailTemplateVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailTemplateVersionMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableAccessCodeGenerator",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableAccessCodeGeneratorMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableAccountWideSearch",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableAccountWideSearchMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableAdmHealthcare",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableAdmHealthcareMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableAdvancedEnvelopesSearch",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableAdvancedEnvelopesSearchMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableAdvancedPayments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableAdvancedPaymentsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableAdvancedPowerForms",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableAdvancedPowerFormsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableAgreementActionsForCLM",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableAgreementActionsForCLMMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableAgreementActionsForESign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableAgreementActionsForESignMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableAutoNav",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableAutoNavMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableBccDummyLink",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableBccDummyLinkMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableCalculatedFields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableCalculatedFieldsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableClickPlus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableClickPlusConditionalContent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableClickPlusConditionalContentMetaData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableClickPlusCustomFields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableClickPlusCustomFieldsMetaData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableClickPlusCustomStyle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableClickPlusCustomStyleMetaData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableClickPlusDynamicContent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableClickPlusDynamicContentMetaData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableClickPlusMetaData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableClickwraps",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableClickwrapsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableCombinedPDFDownloadForSBS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableCommentsHistoryDownloadInSigning",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableCommentsHistoryDownloadInSigningMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableContactSuggestions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableContactSuggestionsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableCustomerSatisfactionMetricTracking",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableCustomerSatisfactionMetricTrackingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableDSigEUAdvancedPens",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableDSigEUAdvancedPensMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableDSigExpressPens",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableDSigExpressPensMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableDSigIDCheckForAESPens",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableDSigIDCheckForAESPensMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableDSigIDCheckInPersonForQESPens",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableDSigIDCheckInPersonForQESPensMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableDSigIDCheckRemoteForQESPens",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableDSigIDCheckRemoteForQESPensMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableDSigIDVerificationPens",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableDSigIDVerificationPensMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableDSigIDVerificationPremierPens",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableDSigIDVerificationPremierPensMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableDSPro",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableDSProMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableEnforceTlsEmailsSettingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableEnvelopeStampingByAccountAdmin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableEnvelopeStampingByAccountAdminMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableEnvelopeStampingByDSAdmin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableEnvelopeStampingByDSAdminMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableESignAPIHourlyLimitManagement",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableESignAPIHourlyLimitManagementMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableEsignCommunities",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableEsignCommunitiesMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableIDFxAccountlessSMSAuthForPart11",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableIDFxAccountlessSMSAuthForPart11Metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableIDFxIntuitKBA",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableIDFxIntuitKBAMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableIDFxPhoneAuthentication",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableIDFxPhoneAuthenticationMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableIdfxPhoneAuthSignatureAuthStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableIdfxPhoneAuthSignatureAuthStatusMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableInboxBrowseViewsPoweredByElasticSearch",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableInboxBrowseViewsPoweredByElasticSearchMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableInboxRelevanceSort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableInboxRelevanceSortForRecentAccounts",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableInboxRelevanceSortForRecentAccountsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableInboxRelevanceSortMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableInBrowserEditor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableInBrowserEditorMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableKeyTermsSuggestionsByDocumentType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableKeyTermsSuggestionsByDocumentTypeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableLargeFileSupport",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableLargeFileSupportMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableParticipantRecipientSettingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enablePaymentProcessing",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enablePaymentProcessingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enablePDFAConversion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enablePDFAConversionMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enablePowerForm",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enablePowerFormDirect",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enablePowerFormDirectMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enablePowerFormMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableRecipientDomainValidation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableRecipientDomainValidationMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableRecipientMayProvidePhoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableRecipientMayProvidePhoneNumberMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableReportLinks",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableReportLinksMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableRequireSignOnPaper",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableRequireSignOnPaperMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableReservedDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableReservedDomainMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableResponsiveSigning",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableResponsiveSigningMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableScheduledRelease",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableScheduledReleaseMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSearch",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSearchMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSearchServiceAzureUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSearchServiceAzureUriMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSearchSiteSpecificApi",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSearchSiteSpecificApiMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSearchUI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSearchUIMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSendingTagsFontSettings",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSendingTagsFontSettingsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSendToAgent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSendToAgentMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSendToIntermediary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSendToIntermediaryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSendToManage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSendToManageMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSequentialSigningAPI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSequentialSigningAPIMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSequentialSigningUI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSequentialSigningUIMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSignerAttachments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSignerAttachmentsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSigningExtensionComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSigningExtensionCommentsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSigningExtensionConversations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSigningExtensionConversationsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSigningOrderSettingsForAccount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSigningOrderSettingsForAccountMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSignOnPaper",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSignOnPaperMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSignOnPaperOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSignOnPaperOverrideMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSignWithNotary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSignWithNotaryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSmartContracts",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSmartContractsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSMSAuthentication",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSMSAuthenticationMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSMSDeliveryAdditionalNotification",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSMSDeliveryAdditionalNotificationMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSMSDeliveryPrimary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSocialIdLogin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSocialIdLoginMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableStrikeThrough",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableStrikeThroughMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableTransactionPoint",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableTransactionPointMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableVaulting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableVaultingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableWebFormsSeparateUserPermissions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableWebFormsSeparateUserPermissionsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableWitnessing",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableWitnessingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enforceTemplateNameUniqueness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enforceTemplateNameUniquenessMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enforceTlsEmails",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enforceTlsEmailsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeIntegrationAllowed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeIntegrationAllowedMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeIntegrationEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeIntegrationEnabledMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "EnvelopeLimitsTotalDocumentSizeAllowedInMB",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EnvelopeLimitsTotalDocumentSizeAllowedInMBEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EnvelopeLimitsTotalDocumentSizeAllowedInMBEnabledMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "EnvelopeLimitsTotalDocumentSizeAllowedInMBMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeSearchMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeSearchModeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeStampingDefaultValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeStampingDefaultValueMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "exitPrompt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "exitPromptMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "expressSend",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expressSendAllowTabs",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expressSendAllowTabsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "expressSendMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalDocumentSources",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalSignaturePadType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalSignaturePadTypeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "faxOutEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "faxOutEnabledMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "finishReminder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "finishReminderMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "guidedFormsHtmlAllowed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "guidedFormsHtmlAllowedMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "guidedFormsHtmlConversionPolicy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "guidedFormsHtmlConversionPolicyMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "hasRecipientConnectClaimedDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hideAccountAddressInCoC",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hideAccountAddressInCoCMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "hidePricing",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hidePricingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "idCheckConfigurations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "idCheckExpire",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCheckExpireDays",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCheckExpireDaysMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "idCheckExpireMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "idCheckExpireMinutes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCheckExpireMinutesMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "idCheckRequired",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCheckRequiredMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "identityVerification",
        "schema": "array",
        "description": ""
      },
      {
        "name": "identityVerificationMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "idfxKBAAuthenticationOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idfxKBAAuthenticationOverrideMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "idfxPhoneAuthenticationOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idfxPhoneAuthenticationOverrideMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ignoreErrorIfAnchorTabNotFound",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ignoreErrorIfAnchorTabNotFoundMetadataEnabled",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inPersonIDCheckQuestion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inPersonIDCheckQuestionMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inPersonSigningEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inPersonSigningEnabledMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inSessionEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inSessionEnabledMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inSessionSuppressEmails",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inSessionSuppressEmailsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "isConnectDocumentFieldsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "linkedExternalPrimaryAccounts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "maximumSigningGroups",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maximumSigningGroupsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "maximumUsersPerSigningGroup",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maximumUsersPerSigningGroupMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "maxNumberOfCustomStamps",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mergeMixedModeResults",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mergeMixedModeResultsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "mobileSessionTimeout",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobileSessionTimeoutMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "numberOfActiveCustomStamps",
        "schema": "string",
        "description": ""
      },
      {
        "name": "optInMobileSigningV02",
        "schema": "string",
        "description": ""
      },
      {
        "name": "optInMobileSigningV02Metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "optInUniversalSignatures",
        "schema": "string",
        "description": ""
      },
      {
        "name": "optOutAutoNavTextAndTabColorUpdates",
        "schema": "string",
        "description": ""
      },
      {
        "name": "optOutAutoNavTextAndTabColorUpdatesMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "optOutNewPlatformSeal",
        "schema": "string",
        "description": ""
      },
      {
        "name": "optOutNewPlatformSealPlatformMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pdfMaxChunkedUploadPartSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pdfMaxChunkedUploadPartSizeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pdfMaxChunkedUploadTotalSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pdfMaxChunkedUploadTotalSizeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pdfMaxIndividualUploadSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pdfMaxIndividualUploadSizeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phoneAuthRecipientMayProvidePhoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneAuthRecipientMayProvidePhoneNumberMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pkiSignDownloadedPDFDocs",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pkiSignDownloadedPDFDocsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "readOnlyMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "readOnlyModeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recipientsCanSignOffline",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientsCanSignOfflineMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recipientSigningAutoNavigationControl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientSigningAutoNavigationControlMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "require21CFRpt11Compliance",
        "schema": "string",
        "description": ""
      },
      {
        "name": "require21CFRpt11ComplianceMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "requireDeclineReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requireDeclineReasonMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "requireExternalUserManagement",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requireExternalUserManagementMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "requireSignerCertificateType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requireSignerCertificateTypeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rsaVeridAccountName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rsaVeridPassword",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rsaVeridRuleset",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rsaVeridUserId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sbsTransactionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "selfSignedRecipientEmailDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "selfSignedRecipientEmailDocumentMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "selfSignedRecipientEmailDocumentUserOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "selfSignedRecipientEmailDocumentUserOverrideMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "senderCanSignInEachLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "senderCanSignInEachLocationMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "senderMustAuthenticateSigning",
        "schema": "string",
        "description": ""
      },
      {
        "name": "senderMustAuthenticateSigningMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sendingTagsFontColor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendingTagsFontColorMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sendingTagsFontName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendingTagsFontNameMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sendingTagsFontSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendingTagsFontSizeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sendLockoutRecipientNotification",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendLockoutRecipientNotificationMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sendToCertifiedDeliveryEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendToCertifiedDeliveryEnabledMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sessionTimeout",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sessionTimeoutMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "setRecipEmailLang",
        "schema": "string",
        "description": ""
      },
      {
        "name": "setRecipEmailLangMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "setRecipSignLang",
        "schema": "string",
        "description": ""
      },
      {
        "name": "setRecipSignLangMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sharedTemplateFolders",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sharedTemplateFoldersMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "showCompleteDialogInEmbeddedSession",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showCompleteDialogInEmbeddedSessionMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "showConditionalRoutingOnSend",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showConditionalRoutingOnSendMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "showInitialConditionalFields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showInitialConditionalFieldsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "showLocalizedWatermarks",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showLocalizedWatermarksMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "showMaskedFieldsWhenDownloadingDocumentAsSender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showMaskedFieldsWhenDownloadingDocumentAsSenderMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "showTutorials",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showTutorialsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signatureProviders",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signatureProvidersMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signDateFormat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signDateFormatMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signDateTimeAccountLanguageOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signDateTimeAccountLanguageOverrideMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signDateTimeAccountTimezoneOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signDateTimeAccountTimezoneOverrideMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signerAttachCertificateToEnvelopePDF",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerAttachCertificateToEnvelopePDFMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signerAttachConcat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerAttachConcatMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signerCanCreateAccount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerCanCreateAccountMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signerCanSignOnMobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerCanSignOnMobileMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signerInSessionUseEnvelopeCompleteEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerInSessionUseEnvelopeCompleteEmailMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signerLoginRequirements",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerLoginRequirementsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signerMustHaveAccount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerMustHaveAccountMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signerMustLoginToSign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerMustLoginToSignMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signerShowSecureFieldInitialValues",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerShowSecureFieldInitialValuesMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signingSessionTimeout",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingSessionTimeoutMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signingUiVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingUiVersionMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signTimeFormat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signTimeFormatMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signTimeShowAmPm",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signTimeShowAmPmMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "simplifiedSendingEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "simplifiedSendingEnabledMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "singleSignOnEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "singleSignOnEnabledMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "skipAuthCompletedEnvelopes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skipAuthCompletedEnvelopesMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "socialIdRecipAuth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "socialIdRecipAuthMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "specifyDocumentVisibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "specifyDocumentVisibilityMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "startInAdvancedCorrect",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startInAdvancedCorrectMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "supplementalDocumentsMustAccept",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supplementalDocumentsMustAcceptMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "supplementalDocumentsMustRead",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supplementalDocumentsMustReadMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "supplementalDocumentsMustView",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supplementalDocumentsMustViewMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "suppressCertificateEnforcement",
        "schema": "string",
        "description": ""
      },
      {
        "name": "suppressCertificateEnforcementMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tabAccountSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "timezoneOffsetAPI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezoneOffsetAPIMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "timezoneOffsetUI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezoneOffsetUIMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "universalSignatureOptIn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useAccountLevelEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useAccountLevelEmailMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useConsumerDisclosure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useConsumerDisclosureMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useConsumerDisclosureWithinAccount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useConsumerDisclosureWithinAccountMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useDerivedKeys",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useDerivedKeysMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useDocuSignExpressSignerCertificate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useDocuSignExpressSignerCertificateMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useEnvelopeSearchMixedMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useEnvelopeSearchMixedModeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useMultiAppGroupsData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useMultiAppGroupsDataMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useNewBlobForPdf",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useNewBlobForPdfMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useNewEnvelopeSearch",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useNewEnvelopeSearchMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useNewEnvelopeSearchOnlyWhenSearchingAfterDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useNewEnvelopeSearchOnlyWhenSearchingAfterDateMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useNewEnvelopeSearchOnlyWithSearchTerm",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useNewEnvelopeSearchOnlyWithSearchTermMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useSAFESignerCertificates",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useSAFESignerCertificatesMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "usesAPI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "usesAPIMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useSignatureProviderPlatform",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useSignatureProviderPlatformMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useSmartContractsV1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validationsAllowed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validationsAllowedMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "validationsBrand",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validationsBrandMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "validationsCadence",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validationsCadenceMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "validationsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validationsEnabledMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "validationsReport",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validationsReportMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "waterMarkEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "waterMarkEnabledMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "writeReminderToEnvelopeHistory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "writeReminderToEnvelopeHistoryMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "wurflMinAllowableScreenSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "wurflMinAllowableScreenSizeMetadata",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/bcc_email_archives",
    "method": "getBccEmailArchiveList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BCCEmailArchive",
    "typeScriptTag": "bccEmailArchive",
    "description": "Gets the BCC email archive configurations for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n"
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains a list of BCC email archive configurations."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/bcc_email_archives",
    "method": "postBccEmailArchive",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BCCEmailArchive",
    "typeScriptTag": "bccEmailArchive",
    "description": "Creates a BCC email archive configuration.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bccEmailArchiveId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailNotificationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedBy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "This object contains information abut a BCC email archive configuration (a BCC email address used to archive DocuSign-generated emails)."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/bcc_email_archives/{bccEmailArchiveId}",
    "method": "deleteBccEmailArchive",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "BCCEmailArchive",
    "typeScriptTag": "bccEmailArchive",
    "description": "Deletes a BCC email archive configuration.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "bccEmailArchiveId",
        "schema": "string",
        "required": true,
        "description": "The ID of the BCC email archive configuration.",
        "example": "BCCEMAILARCHIVEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/bcc_email_archives/{bccEmailArchiveId}",
    "method": "getBccEmailArchiveHistoryList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BCCEmailArchive",
    "typeScriptTag": "bccEmailArchive",
    "description": "Gets a BCC email archive configuration and its history.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "bccEmailArchiveId",
        "schema": "string",
        "required": true,
        "description": "The ID of the BCC email archive configuration.",
        "example": "BCCEMAILARCHIVEID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of items to skip.\n"
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/enote_configuration",
    "method": "deleteENoteConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ENoteConfigurations",
    "typeScriptTag": "eNoteConfigurations",
    "description": "Deletes configuration information for the eNote eOriginal integration.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/enote_configuration",
    "method": "getENoteConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ENoteConfigurations",
    "typeScriptTag": "eNoteConfigurations",
    "description": "Returns the configuration information for the eNote eOriginal integration.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object contains information used to\nconfigure [eNote][eNote] functionality.\nTo use eNote, the Allow eNote for eOriginal account plan item must be on,\nand the Connect configuration for eOriginal must be set correctly.\n\n[eNote]: https://support.docusign.com/s/document-item?bundleId=pik1583277475390&topicId=tsn1583277394951.html\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/enote_configuration",
    "method": "putENoteConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ENoteConfigurations",
    "typeScriptTag": "eNoteConfigurations",
    "description": "Updates configuration information for the eNote eOriginal integration.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "apiKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "connectConfigured",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eNoteConfigured",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userName",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object contains information used to\nconfigure [eNote][eNote] functionality.\nTo use eNote, the Allow eNote for eOriginal account plan item must be on,\nand the Connect configuration for eOriginal must be set correctly.\n\n[eNote]: https://support.docusign.com/s/document-item?bundleId=pik1583277475390&topicId=tsn1583277394951.html\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/envelope_purge_configuration",
    "method": "getEnvelopePurgeConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Gets the envelope purge configuration for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains information about the current envelope purge configuration for an account, which enables account administrators to purge documents from completed and voided envelopes after a set number of days (`retentionDays`). "
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/envelope_purge_configuration",
    "method": "putEnvelopePurgeConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Sets the envelope purge configuration for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "purgeEnvelopes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "redactPII",
        "schema": "string",
        "description": ""
      },
      {
        "name": "removeTabsAndEnvelopeAttachments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "retentionDays",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains information about the current envelope purge configuration for an account, which enables account administrators to purge documents from completed and voided envelopes after a set number of days (`retentionDays`). "
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/notification_defaults",
    "method": "getNotificationDefaults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Gets envelope notification defaults.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/notification_defaults",
    "method": "putNotificationDefaults",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Updates envelope notification default settings.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "apiEmailNotifications",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailNotifications",
        "schema": "object",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/password_rules",
    "method": "getAccountPasswordRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountPasswordRules",
    "typeScriptTag": "accountPasswordRules",
    "description": "Gets the password rules for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/password_rules",
    "method": "putAccountPasswordRules",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccountPasswordRules",
    "typeScriptTag": "accountPasswordRules",
    "description": "Updates the password rules for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "expirePassword",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expirePasswordDays",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expirePasswordDaysMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lockoutDurationMinutes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockoutDurationMinutesMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lockoutDurationType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockoutDurationTypeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "minimumPasswordAgeDays",
        "schema": "string",
        "description": ""
      },
      {
        "name": "minimumPasswordAgeDaysMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "minimumPasswordLength",
        "schema": "string",
        "description": ""
      },
      {
        "name": "minimumPasswordLengthMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "passwordIncludeDigit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordIncludeDigitOrSpecialCharacter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordIncludeLowerCase",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordIncludeSpecialCharacter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordIncludeUpperCase",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordStrengthType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordStrengthTypeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "questionsRequired",
        "schema": "string",
        "description": ""
      },
      {
        "name": "questionsRequiredMetadata",
        "schema": "object",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/tabs",
    "method": "getTabSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountTabSettings",
    "typeScriptTag": "accountTabSettings",
    "description": "Returns tab settings list for specified account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/settings/tabs",
    "method": "putSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccountTabSettings",
    "typeScriptTag": "accountTabSettings",
    "description": "Modifies tab settings for specified account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "allowTabOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowTabOrderMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "approveDeclineTabsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "approveDeclineTabsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "calculatedFieldsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "calculatedFieldsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "checkboxTabsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "checkBoxTabsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dataFieldRegexEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dataFieldRegexMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dataFieldSizeEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dataFieldSizeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "drawTabsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "drawTabsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "firstLastEmailTabsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstLastEmailTabsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "listTabsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "listTabsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "noteTabsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "noteTabsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "numericalTabsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "numericalTabsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "prefillTabsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefillTabsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "radioTabsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "radioTabsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "savingCustomTabsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "savingCustomTabsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "senderToChangeTabAssignmentsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "senderToChangeTabAssignmentsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sharedCustomTabsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sharedCustomTabsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tabDataLabelEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tabDataLabelMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tabLocationEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tabLocationMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tabLockingEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tabLockingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tabScaleEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tabScaleMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tabTextFormattingEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tabTextFormattingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "textTabsEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "textTabsMetadata",
        "schema": "object",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/shared_access",
    "method": "getSharedAccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Reserved: Gets the shared item status for one or more users.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n\nDefault: `1000`\n"
      },
      {
        "name": "envelopesNotSharedUserStatus",
        "schema": "string",
        "required": false,
        "description": "This query parameter works in conjunction with `user_ids`. When you specify one of the following user statuses, the query limits the results to only users that match the specified status:\n- `ActivationRequired`: Membership Activation required\n- `ActivationSent`: Membership activation sent to user\n- `Active`: User Membership is active\n- `Closed`: User Membership is closed\n- `Disabled`: User Membership is disabled"
      },
      {
        "name": "folderIds",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of folder IDs for which to return shared item information. If `item_type` is set to `folders`, at least one folder ID is required."
      },
      {
        "name": "itemType",
        "schema": "string",
        "required": false,
        "description": "Specifies the type of shared item being requested. Valid values:\n\n- `envelopes`: Get information about envelope sharing between users.\n- `templates`: Get information about template sharing among users and groups.\n- `folders`: Get information about folder sharing among users and groups.\n"
      },
      {
        "name": "searchText",
        "schema": "string",
        "required": false,
        "description": "Filter user names based on the specified string. The wild-card '*' (asterisk) can be used in the string."
      },
      {
        "name": "shared",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of sharing filters that specifies which users appear in the response. \n\n- `not_shared`: The response lists users who do not share items of `item_type` with the current user.\n\n- `shared_to`: The response lists users in `user_list` who are sharing items to current user.\n\n- `shared_from`: The response lists users in `user_list` who are sharing items from the current user.\n\n- `shared_to_and_from`: The response lists users in `user_list` who are sharing items to and from the current user.\n\nIf the current user does not have administrative privileges, only the `shared_to` option is valid."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      },
      {
        "name": "userIds",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of user IDs for whom the shared item information is being requested."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains shared access information."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/shared_access",
    "method": "putSharedAccess",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Reserved: Sets the shared access information for users.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "itemType",
        "schema": "string",
        "required": false,
        "description": "Specifies the type of shared item being set:\n- `envelopes`: Set envelope sharing between users.\n- `templates`: Set information about template sharing among users and groups.\n- `folders`: Get information about folder sharing among users and groups.\n"
      },
      {
        "name": "preserveExistingSharedAccess",
        "schema": "string",
        "required": false,
        "description": "When **true,** preserve the existing shared access settings."
      },
      {
        "name": "userIds",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of IDs for users whose shared item access is being set."
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "nextUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "previousUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resultSetSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sharedAccess",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "totalSetSize",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains shared access information."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signatureProviders",
    "method": "getSignatureProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountSignatureProviders",
    "typeScriptTag": "accountSignatureProviders",
    "description": "Gets the available signature providers for an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signatures",
    "method": "getAccountSignatures",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountSignatures",
    "typeScriptTag": "accountSignatures",
    "description": "Returns a list of stamps available in the account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "stampFormat",
        "schema": "string",
        "required": false,
        "description": "The format of the stamp to return. Valid values:\n- `NameDateHanko`\n- `NameHanko`\n- `PlaceholderHanko`"
      },
      {
        "name": "stampName",
        "schema": "string",
        "required": false,
        "description": "The name associated with the stamps to return. This value can be a Japanese surname (up to 5 characters) or a purchase order ID."
      },
      {
        "name": "stampType",
        "schema": "string",
        "required": false,
        "description": "The type of the stamps to return. Valid values:\n- `name_stamp`\n- `stamp`\n- `signature`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signatures",
    "method": "postAccountSignatures",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AccountSignatures",
    "typeScriptTag": "accountSignatures",
    "description": "Adds or updates one or more account stamps.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "decodeOnly",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountSignatures",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signatures",
    "method": "putAccountSignature",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccountSignatures",
    "typeScriptTag": "accountSignatures",
    "description": "Updates an account stamp.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "accountSignatures",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signatures/{signatureId}",
    "method": "deleteAccountSignature",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AccountSignatures",
    "typeScriptTag": "accountSignatures",
    "description": "Deletes an account stamp.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The ID of the account stamp.",
        "example": "SIGNATUREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signatures/{signatureId}",
    "method": "getAccountSignature",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountSignatures",
    "typeScriptTag": "accountSignatures",
    "description": "Returns information about the specified stamp.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The ID of the account stamp.",
        "example": "SIGNATUREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signatures/{signatureId}",
    "method": "putAccountSignatureById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccountSignatures",
    "typeScriptTag": "accountSignatures",
    "description": "Updates an account stamp by ID.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The ID of the account stamp.",
        "example": "SIGNATUREID"
      },
      {
        "name": "closeExistingSignature",
        "schema": "string",
        "required": false,
        "description": "When **true,** closes the current signature."
      },
      {
        "name": "dateStampProperties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disallowUserResizeStamp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "imageType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDefault",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nrdsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nrdsLastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneticName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureFont",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signatureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureInitials",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureUsers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "stampFormat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stampSizeMM",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signatures/{signatureId}/{imageType}",
    "method": "deleteAccountSignatureImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AccountSignatures",
    "typeScriptTag": "accountSignatures",
    "description": "Deletes the image for a stamp.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "imageType",
        "schema": "string",
        "required": true,
        "description": "Specificies the type of image. Valid values:\n\n- `stamp_image`\n- `signature_image`\n- `initials_image`",
        "example": "IMAGETYPE"
      },
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The ID of the account stamp.",
        "example": "SIGNATUREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signatures/{signatureId}/{imageType}",
    "method": "getAccountSignatureImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountSignatures",
    "typeScriptTag": "accountSignatures",
    "description": "Returns the image for an account stamp.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "imageType",
        "schema": "string",
        "required": true,
        "description": "Specificies the type of image. Valid values:\n\n- `stamp_image`\n- `signature_image`\n- `initials_image`",
        "example": "IMAGETYPE"
      },
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The ID of the account stamp.",
        "example": "SIGNATUREID"
      },
      {
        "name": "includeChrome",
        "schema": "string",
        "required": false,
        "description": "When **true,** the chrome (or frame containing the added line and identifier) is included with the signature image."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signatures/{signatureId}/{imageType}",
    "method": "putAccountSignatureImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccountSignatures",
    "typeScriptTag": "accountSignatures",
    "description": "Sets a signature image, initials, or stamp.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "imageType",
        "schema": "string",
        "required": true,
        "description": "Specificies the type of image. Valid values:\n\n- `stamp_image`\n- `signature_image`\n- `initials_image`",
        "example": "IMAGETYPE"
      },
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The ID of the account stamp.",
        "example": "SIGNATUREID"
      },
      {
        "name": "transparentPng",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signing_groups",
    "method": "deleteSigningGroups",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SigningGroups",
    "typeScriptTag": "signingGroups",
    "description": "Deletes one or more signing groups.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "groups",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signing_groups",
    "method": "getSigningGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SigningGroups",
    "typeScriptTag": "signingGroups",
    "description": "Gets a list of the Signing Groups in an account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "groupType",
        "schema": "string",
        "required": false,
        "description": "Filters by the type of signing group. Valid values:\n* `sharedSigningGroup`\n* `privateSigningGroup`\n* `systemSigningGroup`"
      },
      {
        "name": "includeUsers",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response includes the signing group members. "
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signing_groups",
    "method": "postSigningGroups",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SigningGroups",
    "typeScriptTag": "signingGroups",
    "description": "Creates a signing group. ",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "groups",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signing_groups",
    "method": "putSigningGroups",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "SigningGroups",
    "typeScriptTag": "signingGroups",
    "description": "Updates signing group names.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "groups",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signing_groups/{signingGroupId}",
    "method": "getSigningGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SigningGroups",
    "typeScriptTag": "signingGroups",
    "description": "Gets information about a signing group. ",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "signingGroupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the [signing group](https://support.docusign.com/s/document-item?bundleId=gav1643676262430&topicId=zgn1578456447934.html).\n",
        "example": "SIGNINGGROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains details about a signing group. Signing groups enable you to send an envelope to a predefined group of recipients and have any one member of the group sign your documents. When you send an envelope to a signing group, anyone in the group can open it and sign it with their own signature."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signing_groups/{signingGroupId}",
    "method": "putSigningGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "SigningGroups",
    "typeScriptTag": "signingGroups",
    "description": "Updates a signing group. ",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "signingGroupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the [signing group](https://support.docusign.com/s/document-item?bundleId=gav1643676262430&topicId=zgn1578456447934.html).\n",
        "example": "SIGNINGGROUPID"
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "groupEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groupName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groupType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingGroupId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains details about a signing group. Signing groups enable you to send an envelope to a predefined group of recipients and have any one member of the group sign your documents. When you send an envelope to a signing group, anyone in the group can open it and sign it with their own signature."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signing_groups/{signingGroupId}/users",
    "method": "deleteSigningGroupUsers",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SigningGroupUsers",
    "typeScriptTag": "signingGroupUsers",
    "description": "Deletes  one or more members from a signing group.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "signingGroupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the [signing group](https://support.docusign.com/s/document-item?bundleId=gav1643676262430&topicId=zgn1578456447934.html).\n\n**Note:** When you send an envelope to a signing group,\nanyone in the group can open it and sign it with their own signature.\nFor this reason, DocuSign recommends that\nyou do not include non-signer recipients\n(such as carbon copy recipients)\nin the same signing group as signer recipients.\nHowever, you could create a second signing group\nfor the non-signer recipients and change t\nhe default action of Needs to Sign to a different value,\nsuch as Receives a Copy.",
        "example": "SIGNINGGROUPID"
      },
      {
        "name": "users",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signing_groups/{signingGroupId}/users",
    "method": "getSigningGroupUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SigningGroupUsers",
    "typeScriptTag": "signingGroupUsers",
    "description": "Gets a list of members in a Signing Group.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "signingGroupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the [signing group](https://support.docusign.com/s/document-item?bundleId=gav1643676262430&topicId=zgn1578456447934.html).\n\n**Note:** When you send an envelope to a signing group,\nanyone in the group can open it and sign it with their own signature.\nFor this reason, DocuSign recommends that\nyou do not include non-signer recipients\n(such as carbon copy recipients)\nin the same signing group as signer recipients.\nHowever, you could create a second signing group\nfor the non-signer recipients and change t\nhe default action of Needs to Sign to a different value,\nsuch as Receives a Copy.",
        "example": "SIGNINGGROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/signing_groups/{signingGroupId}/users",
    "method": "putSigningGroupUsers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "SigningGroupUsers",
    "typeScriptTag": "signingGroupUsers",
    "description": "Adds members to a signing group. ",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "signingGroupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the [signing group](https://support.docusign.com/s/document-item?bundleId=gav1643676262430&topicId=zgn1578456447934.html).\n\n**Note:** When you send an envelope to a signing group,\nanyone in the group can open it and sign it with their own signature.\nFor this reason, DocuSign recommends that\nyou do not include non-signer recipients\n(such as carbon copy recipients)\nin the same signing group as signer recipients.\nHowever, you could create a second signing group\nfor the non-signer recipients and change t\nhe default action of Needs to Sign to a different value,\nsuch as Receives a Copy.",
        "example": "SIGNINGGROUPID"
      },
      {
        "name": "users",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/supported_languages",
    "method": "getSupportedLanguages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Gets the supported languages for envelope recipients.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of supported languages."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/tab_definitions",
    "method": "getTabDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomTabs",
    "typeScriptTag": "customTabs",
    "description": "Gets a list of all account tabs.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "customTabOnly",
        "schema": "string",
        "required": false,
        "description": "When **true,** only custom tabs are returned in the response. "
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/tab_definitions",
    "method": "postTabDefinitions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomTabs",
    "typeScriptTag": "customTabs",
    "description": "Creates a custom tab.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "anchor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorCaseSensitive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorHorizontalAlignment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorIgnoreIfNotPresent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorMatchWholeWord",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorUnits",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorXOffset",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorYOffset",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bold",
        "schema": "string",
        "description": ""
      },
      {
        "name": "collaborative",
        "schema": "string",
        "description": ""
      },
      {
        "name": "concealValueOnDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdByDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdByUserId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customTabId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableAutoSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "editable",
        "schema": "string",
        "description": ""
      },
      {
        "name": "font",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fontColor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fontSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "height",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includedInEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initialValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "italic",
        "schema": "string",
        "description": ""
      },
      {
        "name": "items",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedByDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedByUserId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "localePolicy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "locked",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maximumLength",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxNumericalValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mergeField",
        "schema": "object",
        "description": ""
      },
      {
        "name": "minNumericalValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "numericalValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentItemCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentItemDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentItemName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requireAll",
        "schema": "string",
        "description": ""
      },
      {
        "name": "required",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requireInitialOnSharedChange",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scaleValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "selected",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shared",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureProviderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stampType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stampTypeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tabLabel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "underline",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validationMessage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validationPattern",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validationType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "width",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/tab_definitions/{customTabId}",
    "method": "deleteCustomTab",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CustomTabs",
    "typeScriptTag": "customTabs",
    "description": "Deletes custom tab information.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "customTabId",
        "schema": "string",
        "required": true,
        "description": "The DocuSign-generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.",
        "example": "CUSTOMTABID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/tab_definitions/{customTabId}",
    "method": "getCustomTab",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomTabs",
    "typeScriptTag": "customTabs",
    "description": "Gets custom tab information.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "customTabId",
        "schema": "string",
        "required": true,
        "description": "The DocuSign-generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.",
        "example": "CUSTOMTABID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/tab_definitions/{customTabId}",
    "method": "putCustomTab",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CustomTabs",
    "typeScriptTag": "customTabs",
    "description": "Updates custom tab information.\n\n",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "customTabId",
        "schema": "string",
        "required": true,
        "description": "The DocuSign-generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.",
        "example": "CUSTOMTABID"
      },
      {
        "name": "anchor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorCaseSensitive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorHorizontalAlignment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorIgnoreIfNotPresent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorMatchWholeWord",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorUnits",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorXOffset",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anchorYOffset",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bold",
        "schema": "string",
        "description": ""
      },
      {
        "name": "collaborative",
        "schema": "string",
        "description": ""
      },
      {
        "name": "concealValueOnDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdByDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdByUserId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customTabId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableAutoSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "editable",
        "schema": "string",
        "description": ""
      },
      {
        "name": "font",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fontColor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fontSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "height",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includedInEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initialValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "italic",
        "schema": "string",
        "description": ""
      },
      {
        "name": "items",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedByDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedByUserId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "localePolicy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "locked",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maximumLength",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxNumericalValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mergeField",
        "schema": "object",
        "description": ""
      },
      {
        "name": "minNumericalValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "numericalValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentItemCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentItemDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentItemName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requireAll",
        "schema": "string",
        "description": ""
      },
      {
        "name": "required",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requireInitialOnSharedChange",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scaleValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "selected",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shared",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureProviderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stampType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stampTypeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tabLabel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "underline",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validationMessage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validationPattern",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validationType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "width",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates",
    "method": "getTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Gets the list of templates.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n"
      },
      {
        "name": "createdFromDate",
        "schema": "string",
        "required": false,
        "description": "Lists templates created on or after this date."
      },
      {
        "name": "createdToDate",
        "schema": "string",
        "required": false,
        "description": "Lists templates modified before this date."
      },
      {
        "name": "folderIds",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of folder ID GUIDs."
      },
      {
        "name": "folderTypes",
        "schema": "string",
        "required": false,
        "description": "The type of folder to return templates for. Possible values are:\n\n- `templates`: Templates in the **My Templates** folder.\n  Templates in the **Shared Templates**  and **All Template** folders (if the request ID from and Admin) are excluded.\n- `templates_root`: Templates in the root level of the **My Templates** folder, but not in an actual folder. Note that the **My Templates** folder is not a real folder.\n- `recylebin`: Templates that have been deleted.\n"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Start of the search date range. Only returns templates created on or after this date/time. If no value is specified, there is no limit on the earliest date created."
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list\nof additional template attributes\nto include in the response.\nValid values are:\n\n- `powerforms`: Includes details about the PowerForms associated with the templates.\n- `documents`: Includes information about template documents.\n- `folders`: Includes information about the folder that holds the template.\n- `favorite_template_status`: Includes the template `favoritedByMe` property. **Note:** You can mark a template as a favorite only in eSignature v2.1.\n- `advanced_templates`: Includes information about advanced templates.\n- `recipients`: Includes information about template recipients.\n- `custom_fields`: Includes information about template custom fields.\n- `notifications`: Includes information about the notification settings for templates."
      },
      {
        "name": "isDeletedTemplateOnly",
        "schema": "string",
        "required": false,
        "description": "When **true,** retrieves templates that have been permanently deleted. The default is **false.**\n\n**Note:** After you delete a template, you can see it in the `Deleted` bin in the UI for 24 hours. After 24 hours, the template is permanently deleted.\n"
      },
      {
        "name": "isDownload",
        "schema": "string",
        "required": false,
        "description": "When **true,** downloads the templates listed in `template_ids` as a collection of JSON definitions in a single zip file.\n\nThe `Content-Disposition` header is set in the response. The value of the header provides the filename of the file.\n\nThe default is **false.**\n\n**Note:** This parameter only works when you specify a list of templates in the `template_ids` parameter."
      },
      {
        "name": "modifiedFromDate",
        "schema": "string",
        "required": false,
        "description": "Lists templates modified on or after this date."
      },
      {
        "name": "modifiedToDate",
        "schema": "string",
        "required": false,
        "description": "Lists templates modified before this date."
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Specifies the sort order of the search results.\nValid values are:\n\n- `asc`: Ascending (A to Z)\n- `desc`: Descending (Z to A)"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Specifies how the search results are listed.\nValid values are:\n\n- `name`: template name\n- `modified`: date/time template was last modified\n- `used`: date/time the template was last used."
      },
      {
        "name": "searchFields",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of additional template properties to search.\n\n\n- `sender`: Include sender name and email in the search.\n- `recipients`: Include recipient names and emails in the search.\n- `envelope`: Not used in template searches.\n"
      },
      {
        "name": "searchText",
        "schema": "string",
        "required": false,
        "description": "The text to use to search the names of templates.\n\nLimit: 48 characters."
      },
      {
        "name": "sharedByMe",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response only includes templates shared by the user. When **false,** the response only returns template not shared by the user. If not specified, templates are returned whether or not they have been shared by the user."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      },
      {
        "name": "templateIds",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of template IDs to download. This value is valid only when `is_download` is **true.**"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "The end of a search date range in UTC DateTime format. When you use this parameter, only templates created up to this date and time are returned.\n\n**Note:** If this property is null, the value defaults to the current date."
      },
      {
        "name": "usedFromDate",
        "schema": "string",
        "required": false,
        "description": "Start of the search date range. Only returns templates used or edited on or after this date/time. If no value is specified, there is no limit on the earliest date used."
      },
      {
        "name": "usedToDate",
        "schema": "string",
        "required": false,
        "description": "End of the search date range. Only returns templates used or edited up to this date/time. If no value is provided, this defaults to the current date."
      },
      {
        "name": "userFilter",
        "schema": "string",
        "required": false,
        "description": "Filters the templates in the response. Valid values are: \n\n- `owned_by_me`: Results include only templates owned by the user.\n- `shared_with_me`: Results include only templates shared with the user.  \n- `all`:  Results include all templates owned or shared with the user."
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about templates."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates",
    "method": "postTemplates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Creates one or more templates.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "(Required) The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accessControlListBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMarkup",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowReassign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowViewHistory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anySigner",
        "schema": "string",
        "description": ""
      },
      {
        "name": "asynchronous",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachmentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopyDefault",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoMatch",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoMatchSpecifiedByUser",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoNavigation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "burnDefaultTabData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "certificateUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "copyRecipientData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customFieldsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "declinedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deletedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deliveredDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableResponsiveDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "documentsCombinedUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailBlurb",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailSubject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableWetSign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enforceSignerVisibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeAttachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeCustomMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeDocuments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeIdStamping",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalEnvelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "favoritedByMe",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folderIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "folderName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folders",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasFormDataChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasWavFile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "holder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initialSentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is21CFRPart11",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isAceGenTemplate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDocGenTemplate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDynamicEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isSignatureProviderEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedBy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUsed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "messageLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "newPassword",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "notificationUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "owner",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pageCount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordProtected",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerForm",
        "schema": "object",
        "description": ""
      },
      {
        "name": "powerForms",
        "schema": "array",
        "description": ""
      },
      {
        "name": "purgeCompletedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeRequestDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recipientsLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shared",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerCanSignOnMobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusChangedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templatesUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useDisclosure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Summary of a template request."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}",
    "method": "getTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Gets a specific template associated with a specified account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list\nof additional template attributes\nto include in the response.\nValid values are:\n\n- `powerforms`: Includes information about PowerForms.\n- `tabs`: Includes information about tabs.\n- `documents`: Includes information about documents.\n- `favorite_template_status`: : Includes the template `favoritedByMe` property in the response. **Note:** You can mark a template as a favorite only in eSignature v2.1."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}",
    "method": "putTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Updates an existing template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accessControlListBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMarkup",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowReassign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowViewHistory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anySigner",
        "schema": "string",
        "description": ""
      },
      {
        "name": "asynchronous",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachmentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopyDefault",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoMatch",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoMatchSpecifiedByUser",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoNavigation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "burnDefaultTabData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "certificateUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "copyRecipientData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customFieldsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "declinedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deletedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deliveredDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableResponsiveDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "documentsCombinedUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailBlurb",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailSubject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableWetSign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enforceSignerVisibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeAttachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeCustomMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeDocuments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeIdStamping",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalEnvelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "favoritedByMe",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folderIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "folderName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folders",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasFormDataChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasWavFile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "holder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initialSentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is21CFRPart11",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isAceGenTemplate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDocGenTemplate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDynamicEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isSignatureProviderEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedBy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastUsed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "messageLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "newPassword",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "notificationUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "owner",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pageCount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordProtected",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerForm",
        "schema": "object",
        "description": ""
      },
      {
        "name": "powerForms",
        "schema": "array",
        "description": ""
      },
      {
        "name": "purgeCompletedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeRequestDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recipientsLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shared",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerCanSignOnMobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusChangedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templatesUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useDisclosure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "object",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/{templatePart}",
    "method": "deleteTemplatePart",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Removes a member group's sharing permissions for a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "templatePart",
        "schema": "string",
        "required": true,
        "description": "Currently, the only defined part is **groups.**",
        "example": "TEMPLATEPART"
      },
      {
        "name": "endPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "nextUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "previousUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resultSetSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "totalSetSize",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object is used for both requests and responses. Some properties (such as `endPosition`) only apply to the response of [Groups: list](https://raw.githubusercontent.com).\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/{templatePart}",
    "method": "putTemplatePart",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Shares a template with a group.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "templatePart",
        "schema": "string",
        "required": true,
        "description": "Currently, the only defined part is **groups.**",
        "example": "TEMPLATEPART"
      },
      {
        "name": "endPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "nextUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "previousUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resultSetSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "totalSetSize",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object is used for both requests and responses. Some properties (such as `endPosition`) only apply to the response of [Groups: list](https://raw.githubusercontent.com).\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/custom_fields",
    "method": "deleteTemplateCustomFields",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TemplateCustomFields",
    "typeScriptTag": "templateCustomFields",
    "description": "Deletes envelope custom fields in a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "listCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textCustomFields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains information about custom fields."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/custom_fields",
    "method": "getTemplateCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TemplateCustomFields",
    "typeScriptTag": "templateCustomFields",
    "description": "Gets the custom document fields from a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains information about custom fields."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/custom_fields",
    "method": "postTemplateCustomFields",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TemplateCustomFields",
    "typeScriptTag": "templateCustomFields",
    "description": "Creates custom document fields in an existing template document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "listCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textCustomFields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contains information about custom fields."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/custom_fields",
    "method": "putTemplateCustomFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TemplateCustomFields",
    "typeScriptTag": "templateCustomFields",
    "description": "Updates envelope custom fields in a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "listCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textCustomFields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains information about custom fields."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents",
    "method": "deleteTemplateDocuments",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TemplateDocuments",
    "typeScriptTag": "templateDocuments",
    "description": "Deletes documents from a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "accessControlListBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accessibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMarkup",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowReassign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowRecipientRecursion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowViewHistory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anySigner",
        "schema": "string",
        "description": ""
      },
      {
        "name": "asynchronous",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attachmentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopyDefault",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoNavigation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "burnDefaultTabData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "certificateUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "compositeTemplates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "copyRecipientData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customFieldsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "declinedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deletedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deliveredDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableResponsiveDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "documentsCombinedUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailBlurb",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailSubject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableWetSign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enforceSignerVisibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeAttachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeCustomMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeDocuments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeIdStamping",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventNotification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "expireAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalEnvelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folders",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasFormDataChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasWavFile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "holder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initialSentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is21CFRPart11",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDynamicEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isSignatureProviderEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "messageLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "notificationUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerForm",
        "schema": "object",
        "description": ""
      },
      {
        "name": "purgeCompletedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeRequestDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recipientsLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientViewRequest",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerCanSignOnMobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusChangedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateRoles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "templatesUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useDisclosure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The results of this method."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents",
    "method": "getTemplateDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TemplateDocuments",
    "typeScriptTag": "templateDocuments",
    "description": "Gets a list of documents associated with a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "includeTabs",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The results of this method."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents",
    "method": "putTemplateDocuments",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TemplateDocuments",
    "typeScriptTag": "templateDocuments",
    "description": "Adds documents to a template document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "accessControlListBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accessibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMarkup",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowReassign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowRecipientRecursion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowViewHistory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anySigner",
        "schema": "string",
        "description": ""
      },
      {
        "name": "asynchronous",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attachmentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopyDefault",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoNavigation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "burnDefaultTabData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "certificateUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "compositeTemplates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "copyRecipientData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customFieldsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "declinedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deletedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deliveredDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableResponsiveDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "documentsCombinedUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailBlurb",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailSubject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableWetSign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enforceSignerVisibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeAttachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeCustomMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeDocuments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeIdStamping",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventNotification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "expireAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalEnvelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folders",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasFormDataChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasWavFile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "holder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initialSentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is21CFRPart11",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDynamicEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isSignatureProviderEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "messageLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "notificationUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerForm",
        "schema": "object",
        "description": ""
      },
      {
        "name": "purgeCompletedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeRequestDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recipientsLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientViewRequest",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerCanSignOnMobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusChangedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateRoles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "templatesUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useDisclosure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The results of this method."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}",
    "method": "getTemplateDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TemplateDocuments",
    "typeScriptTag": "templateDocuments",
    "description": "Gets PDF documents from a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "encrypt",
        "schema": "string",
        "required": false,
        "description": "When **true,** the PDF bytes returned in the response are encrypted for all the key managers configured on your DocuSign account. You can decrypt the documents by using the Key Manager DecryptDocument API method. For more information about Key Manager, see the DocuSign Security Appliance Installation Guide that your organization received from DocuSign."
      },
      {
        "name": "fileType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "showChanges",
        "schema": "string",
        "required": false,
        "description": "When **true,** any document fields that a recipient changed are highlighted in yellow in the returned PDF document, and optional signatures or initials are outlined in red."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}",
    "method": "putTemplateDocument",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TemplateDocuments",
    "typeScriptTag": "templateDocuments",
    "description": "Updates a template document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "isEnvelopeDefinition",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accessControlListBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accessibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowMarkup",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowReassign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowRecipientRecursion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowViewHistory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anySigner",
        "schema": "string",
        "description": ""
      },
      {
        "name": "asynchronous",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attachmentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authoritativeCopyDefault",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoNavigation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brandLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "burnDefaultTabData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "certificateUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "compositeTemplates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "copyRecipientData",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customFieldsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "declinedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deletedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deliveredDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableResponsiveDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "documentsCombinedUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailBlurb",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailSubject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableWetSign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enforceSignerVisibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeAttachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeCustomMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeDocuments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeIdStamping",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "envelopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "envelopeUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventNotification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "expireAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expireEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalEnvelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folders",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasComments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasFormDataChanged",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hasWavFile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "holder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initialSentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is21CFRPart11",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDynamicEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isSignatureProviderEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "messageLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "notificationUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerForm",
        "schema": "object",
        "description": ""
      },
      {
        "name": "purgeCompletedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeRequestDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purgeState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipients",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recipientsLock",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientsUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientViewRequest",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sentDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signerCanSignOnMobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signingLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusChangedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateRoles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "templatesUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transactionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useDisclosure",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidedReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflow",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object contains details about the envelope document."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields",
    "method": "deleteTemplateDocumentFields",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TemplateDocumentFields",
    "typeScriptTag": "templateDocumentFields",
    "description": "Deletes custom document fields from an existing template document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "documentFields",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields",
    "method": "getTemplateDocumentFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TemplateDocumentFields",
    "typeScriptTag": "templateDocumentFields",
    "description": "Gets the custom document fields for a an existing template document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields",
    "method": "postTemplateDocumentFields",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TemplateDocumentFields",
    "typeScriptTag": "templateDocumentFields",
    "description": "Creates custom document fields in an existing template document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "documentFields",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields",
    "method": "putTemplateDocumentFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TemplateDocumentFields",
    "typeScriptTag": "templateDocumentFields",
    "description": "Updates existing custom document fields in an existing template document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "documentFields",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/html_definitions",
    "method": "getTemplateDocumentHtmlDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TemplateDocumentHtmlDefinitions",
    "typeScriptTag": "templateDocumentHtmlDefinitions",
    "description": "Gets the Original HTML Definition used to generate the Responsive HTML for a given document in a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages",
    "method": "getTemplatePageImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Returns document page images based on input.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "(Required) The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "(Required) The ID of the document.",
        "example": "DOCUMENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "(Required) The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return."
      },
      {
        "name": "dpi",
        "schema": "string",
        "required": false,
        "description": "The number of dots per inch (DPI) for the resulting images. Valid values are 1-310 DPI. The default value is 94."
      },
      {
        "name": "maxHeight",
        "schema": "string",
        "required": false,
        "description": "Sets the maximum height of the returned images in pixels."
      },
      {
        "name": "maxWidth",
        "schema": "string",
        "required": false,
        "description": "Sets the maximum width of the returned images in pixels."
      },
      {
        "name": "nocache",
        "schema": "string",
        "required": false,
        "description": "When **true,** using cache is disabled and image information is retrieved from a database. **True** is the default value. "
      },
      {
        "name": "showChanges",
        "schema": "string",
        "required": false,
        "description": "When **true,** changes display in the user interface."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}",
    "method": "deleteTemplatePage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Deletes a page from a document in an template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": true,
        "description": "The page number being accessed.",
        "example": "PAGENUMBER"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rotate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}/page_image",
    "method": "getTemplatePageImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Gets a page image from a template for display.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": true,
        "description": "The page number being accessed.",
        "example": "PAGENUMBER"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "dpi",
        "schema": "string",
        "required": false,
        "description": "The number of dots per inch (DPI) for the resulting images. Valid values are 1-310 DPI. The default value is 94."
      },
      {
        "name": "maxHeight",
        "schema": "string",
        "required": false,
        "description": "Sets the maximum height of the returned images in pixels."
      },
      {
        "name": "maxWidth",
        "schema": "string",
        "required": false,
        "description": "Sets the maximum width of the returned images in pixels."
      },
      {
        "name": "showChanges",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}/page_image",
    "method": "putTemplatePageImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Rotates page image from a template for display.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": true,
        "description": "The page number being accessed.",
        "example": "PAGENUMBER"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rotate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}/tabs",
    "method": "getTemplatePageTabs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TemplateDocumentTabs",
    "typeScriptTag": "templateDocumentTabs",
    "description": "Returns tabs on the specified page.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "pageNumber",
        "schema": "string",
        "required": true,
        "description": "The page number being accessed.",
        "example": "PAGENUMBER"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/responsive_html_preview",
    "method": "postTemplateDocumentResponsiveHtmlPreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TemplateDocumentResponsiveHtmlPreview",
    "typeScriptTag": "templateDocumentResponsiveHtmlPreview",
    "description": "Creates a preview of the responsive version of a template document.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "displayAnchorPrefix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayAnchors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "displayOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayPageNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentGuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headerLabel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxScreenWidth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "removeEmptyTags",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showMobileOptimizedToggle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/tabs",
    "method": "deleteTemplateDocumentTabs",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TemplateDocumentTabs",
    "typeScriptTag": "templateDocumentTabs",
    "description": "Deletes tabs from a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "approveTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "checkboxTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commentThreadTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionCountyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionExpirationTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionStateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateSignedTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "declineTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "drawTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailAddressTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeIdTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "formulaTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fullNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "initialHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarizeTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarySealTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "noteTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numericalTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phoneNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "polyLineOverlayTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "prefillTabs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "radioGroupTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signerAttachmentTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "smartSectionTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssnTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tabGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "titleTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "viewTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "zipTabs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tabs indicate to recipients where they should sign, initial, or enter data on a document. They are represented graphically as symbols on documents at the time of signing. Tabs can also display data to the recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/tabs",
    "method": "getTemplateDocumentTabs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TemplateDocumentTabs",
    "typeScriptTag": "templateDocumentTabs",
    "description": "Returns tabs on a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "pageNumbers",
        "schema": "string",
        "required": false,
        "description": "Filters for tabs that occur on the pages that you specify. Enter as a comma-separated list of page Guids.\n\nExample: `page_numbers=2,6`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/tabs",
    "method": "postTemplateDocumentTabs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TemplateDocumentTabs",
    "typeScriptTag": "templateDocumentTabs",
    "description": "Adds tabs to a document in a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "approveTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "checkboxTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commentThreadTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionCountyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionExpirationTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionStateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateSignedTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "declineTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "drawTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailAddressTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeIdTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "formulaTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fullNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "initialHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarizeTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarySealTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "noteTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numericalTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phoneNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "polyLineOverlayTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "prefillTabs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "radioGroupTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signerAttachmentTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "smartSectionTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssnTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tabGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "titleTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "viewTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "zipTabs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Tabs indicate to recipients where they should sign, initial, or enter data on a document. They are represented graphically as symbols on documents at the time of signing. Tabs can also display data to the recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/tabs",
    "method": "putTemplateDocumentTabs",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TemplateDocumentTabs",
    "typeScriptTag": "templateDocumentTabs",
    "description": "Updates the tabs for a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the document within the envelope.\n\nUnlike other IDs in the eSignature API,\nyou specify the `documentId` yourself.\nTypically the first document has the ID\n`1`, the second document `2`, and so on,\nbut you can use any numbering scheme\nthat fits within a 32-bit signed integer\n(1 through 2147483647).\n\n\nTab objects have a `documentId` property\nthat specifies the document on which to place\nthe tab.\n",
        "example": "DOCUMENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "approveTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "checkboxTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commentThreadTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionCountyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionExpirationTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionStateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateSignedTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "declineTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "drawTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailAddressTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeIdTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "formulaTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fullNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "initialHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarizeTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarySealTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "noteTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numericalTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phoneNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "polyLineOverlayTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "prefillTabs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "radioGroupTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signerAttachmentTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "smartSectionTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssnTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tabGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "titleTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "viewTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "zipTabs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tabs indicate to recipients where they should sign, initial, or enter data on a document. They are represented graphically as symbols on documents at the time of signing. Tabs can also display data to the recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/html_definitions",
    "method": "getTemplateHtmlDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TemplateHtmlDefinitions",
    "typeScriptTag": "templateHtmlDefinitions",
    "description": "Gets the Original HTML Definition used to generate the Responsive HTML for the template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/lock",
    "method": "deleteTemplateLock",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TemplateLocks",
    "typeScriptTag": "templateLocks",
    "description": "Deletes a template lock.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "lockDurationInSeconds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockedByApp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templatePassword",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useScratchPad",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/lock",
    "method": "getTemplateLock",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TemplateLocks",
    "typeScriptTag": "templateLocks",
    "description": "Gets template lock information.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/lock",
    "method": "postTemplateLock",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TemplateLocks",
    "typeScriptTag": "templateLocks",
    "description": "Locks a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "lockDurationInSeconds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockedByApp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templatePassword",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useScratchPad",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/lock",
    "method": "putTemplateLock",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TemplateLocks",
    "typeScriptTag": "templateLocks",
    "description": "Updates a template lock.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "lockDurationInSeconds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockedByApp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lockType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templatePassword",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useScratchPad",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/notification",
    "method": "getTemplatesTemplateIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Gets template notification information.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that specifies the notification settings for the envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/notification",
    "method": "putTemplatesTemplateIdNotification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Updates the notification  structure for an existing template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "expirations",
        "schema": "object",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reminders",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useAccountDefaults",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that specifies the notification settings for the envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/recipients",
    "method": "deleteTemplateRecipients",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TemplateRecipients",
    "typeScriptTag": "templateRecipients",
    "description": "Deletes recipients from a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "agents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "carbonCopies",
        "schema": "array",
        "description": ""
      },
      {
        "name": "certifiedDeliveries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "currentRoutingOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "editors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inPersonSigners",
        "schema": "array",
        "description": ""
      },
      {
        "name": "intermediaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "participants",
        "schema": "array",
        "description": ""
      },
      {
        "name": "recipientCount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "seals",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "witnesses",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Specifies the envelope recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/recipients",
    "method": "getTemplateRecipients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TemplateRecipients",
    "typeScriptTag": "templateRecipients",
    "description": "Gets recipient information from a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "includeAnchorTabLocations",
        "schema": "string",
        "required": false,
        "description": " When **true** and `include_tabs` is set to **true,** all tabs with anchor tab properties are included in the response. "
      },
      {
        "name": "includeExtended",
        "schema": "string",
        "required": false,
        "description": " When **true,** the extended properties are included in the response. "
      },
      {
        "name": "includeTabs",
        "schema": "string",
        "required": false,
        "description": "When **true,** the tab information associated with the recipient is included in the response."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Specifies the envelope recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/recipients",
    "method": "postTemplateRecipients",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TemplateRecipients",
    "typeScriptTag": "templateRecipients",
    "description": "Adds tabs for a recipient.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "resendEnvelope",
        "schema": "string",
        "required": false,
        "description": "When **true,**\nresends the envelope to the recipients\nthat you specify in the request body.\nUse this parameter to resend the envelope\nto a recipient\nwho deleted the original email notification.\n\n**Note:** Correcting an envelope is a different process.\nDocuSign always resends an envelope when you correct it,\nregardless of the value that you enter here."
      },
      {
        "name": "agents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "carbonCopies",
        "schema": "array",
        "description": ""
      },
      {
        "name": "certifiedDeliveries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "currentRoutingOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "editors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inPersonSigners",
        "schema": "array",
        "description": ""
      },
      {
        "name": "intermediaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "participants",
        "schema": "array",
        "description": ""
      },
      {
        "name": "recipientCount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "seals",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "witnesses",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Specifies the envelope recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/recipients",
    "method": "putTemplateRecipients",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TemplateRecipients",
    "typeScriptTag": "templateRecipients",
    "description": "Updates recipients in a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "resendEnvelope",
        "schema": "string",
        "required": false,
        "description": "When **true,**\nresends the envelope to the recipients\nthat you specify in the request body.\nUse this parameter to resend the envelope\nto a recipient\nwho deleted the original email notification.\n\n**Note:** Correcting an envelope is a different process.\nDocuSign always resends an envelope when you correct it,\nregardless of the value that you enter here."
      },
      {
        "name": "agents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "carbonCopies",
        "schema": "array",
        "description": ""
      },
      {
        "name": "certifiedDeliveries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "currentRoutingOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "editors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inPersonSigners",
        "schema": "array",
        "description": ""
      },
      {
        "name": "intermediaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "participants",
        "schema": "array",
        "description": ""
      },
      {
        "name": "recipientCount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "seals",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "witnesses",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This is the response that the API returns after you update recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}",
    "method": "deleteTemplateRecipient",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TemplateRecipients",
    "typeScriptTag": "templateRecipients",
    "description": "Deletes the specified recipient file from a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "agents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "carbonCopies",
        "schema": "array",
        "description": ""
      },
      {
        "name": "certifiedDeliveries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "currentRoutingOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "editors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inPersonSigners",
        "schema": "array",
        "description": ""
      },
      {
        "name": "intermediaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notaries",
        "schema": "array",
        "description": ""
      },
      {
        "name": "participants",
        "schema": "array",
        "description": ""
      },
      {
        "name": "recipientCount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "seals",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "witnesses",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Specifies the envelope recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/document_visibility",
    "method": "getTemplateRecipientDocumentVisibility",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TemplateDocumentVisibility",
    "typeScriptTag": "templateDocumentVisibility",
    "description": "Returns document visibility for a template recipient",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of `documentVisibility` objects that specify whether documents are visible to recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/document_visibility",
    "method": "putTemplateRecipientDocumentVisibility",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TemplateDocumentVisibility",
    "typeScriptTag": "templateDocumentVisibility",
    "description": "Updates document visibility for a template recipient",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "documentVisibility",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of `documentVisibility` objects that specify whether the documents associated with a template are visible to recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs",
    "method": "deleteTemplateRecipientTabs",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TemplateRecipientTabs",
    "typeScriptTag": "templateRecipientTabs",
    "description": "Deletes the tabs associated with a recipient in a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "approveTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "checkboxTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commentThreadTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionCountyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionExpirationTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionStateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateSignedTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "declineTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "drawTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailAddressTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeIdTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "formulaTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fullNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "initialHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarizeTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarySealTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "noteTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numericalTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phoneNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "polyLineOverlayTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "prefillTabs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "radioGroupTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signerAttachmentTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "smartSectionTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssnTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tabGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "titleTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "viewTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "zipTabs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tabs indicate to recipients where they should sign, initial, or enter data on a document. They are represented graphically as symbols on documents at the time of signing. Tabs can also display data to the recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs",
    "method": "getTemplateRecipientTabs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TemplateRecipientTabs",
    "typeScriptTag": "templateRecipientTabs",
    "description": "Gets the tabs information for a signer or sign-in-person recipient in a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "includeAnchorTabLocations",
        "schema": "string",
        "required": false,
        "description": "When **true,** all tabs with anchor tab properties are included in the response. The default value is **false.**"
      },
      {
        "name": "includeMetadata",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response includes metadata indicating which properties are editable."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tabs indicate to recipients where they should sign, initial, or enter data on a document. They are represented graphically as symbols on documents at the time of signing. Tabs can also display data to the recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs",
    "method": "postTemplateRecipientTabs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TemplateRecipientTabs",
    "typeScriptTag": "templateRecipientTabs",
    "description": "Adds tabs for a recipient.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "approveTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "checkboxTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commentThreadTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionCountyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionExpirationTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionStateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateSignedTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "declineTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "drawTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailAddressTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeIdTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "formulaTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fullNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "initialHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarizeTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarySealTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "noteTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numericalTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phoneNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "polyLineOverlayTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "prefillTabs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "radioGroupTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signerAttachmentTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "smartSectionTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssnTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tabGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "titleTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "viewTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "zipTabs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Tabs indicate to recipients where they should sign, initial, or enter data on a document. They are represented graphically as symbols on documents at the time of signing. Tabs can also display data to the recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs",
    "method": "putTemplateRecipientTabs",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TemplateRecipientTabs",
    "typeScriptTag": "templateRecipientTabs",
    "description": "Updates the tabs for a recipient.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "A local reference used to map\nrecipients to other objects, such as specific\ndocument tabs.\n\nA `recipientId` must be\neither an integer or a GUID,\nand the `recipientId` must be\nunique within an envelope.\n\nFor example, many envelopes assign the first recipient\na `recipientId` of `1`.\n",
        "example": "RECIPIENTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "approveTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "checkboxTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commentThreadTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionCountyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionExpirationTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commissionStateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateSignedTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "declineTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "drawTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailAddressTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emailTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "envelopeIdTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "formulaTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fullNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "initialHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastNameTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "listTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarizeTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notarySealTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "noteTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "numericalTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phoneNumberTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "polyLineOverlayTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "prefillTabs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "radioGroupTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signerAttachmentTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "signHereTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "smartSectionTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssnTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tabGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "textTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "titleTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "viewTabs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "zipTabs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Tabs indicate to recipients where they should sign, initial, or enter data on a document. They are represented graphically as symbols on documents at the time of signing. Tabs can also display data to the recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/recipients/document_visibility",
    "method": "putTemplateRecipientsDocumentVisibility",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TemplateDocumentVisibility",
    "typeScriptTag": "templateDocumentVisibility",
    "description": "Updates document visibility for template recipients",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "documentVisibility",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of `documentVisibility` objects that specify whether the documents associated with a template are visible to recipients."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/responsive_html_preview",
    "method": "postTemplateResponsiveHtmlPreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TemplateResponsiveHtmlPreview",
    "typeScriptTag": "templateResponsiveHtmlPreview",
    "description": "Creates a preview of the responsive versions of all of the documents associated with a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "displayAnchorPrefix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayAnchors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "displayOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayPageNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentGuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headerLabel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxScreenWidth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "removeEmptyTags",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showMobileOptimizedToggle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/views/edit",
    "method": "postTemplateEditView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TemplateViews",
    "typeScriptTag": "templateViews",
    "description": "Gets a URL for a template edit view.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "returnUrl",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/views/recipient_preview",
    "method": "postTemplateRecipientPreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TemplateRecipients",
    "typeScriptTag": "templateRecipients",
    "description": "Creates a template recipient preview.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "assertionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authenticationInstant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authenticationMethod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientURLs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pingFrequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pingUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "securityDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xFrameOptions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xFrameOptionsAllowFromUrl",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/workflow",
    "method": "deleteTemplateWorkflowDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Delete the workflow definition for a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/workflow",
    "method": "getTemplateWorkflowDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Returns the workflow definition for a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes the workflow for an envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/workflow",
    "method": "putTemplateWorkflowDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Updates the workflow definition for a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "currentWorkflowStepId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resumeDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scheduledSending",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workflowStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflowSteps",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes the workflow for an envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/workflow/scheduledSending",
    "method": "deleteTemplateScheduledSendingDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Deletes the scheduled sending rules for the template's workflow.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/workflow/scheduledSending",
    "method": "getTemplateScheduledSendingDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Returns the scheduled sending rules for a template's workflow definition.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that specifies the scheduled sending settings for the envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/workflow/scheduledSending",
    "method": "putTemplateScheduledSendingDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Updates the scheduled sending rules for a template's workflow definition.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "bulkListId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resumeDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that specifies the scheduled sending settings for the envelope."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/workflow/steps",
    "method": "postTemplateWorkflowStepDefinition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Adds a new step to a template's workflow.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delayedRouting",
        "schema": "object",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientRouting",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "triggeredDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "triggerOnItem",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Describes a single step in a workflow."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/workflow/steps/{workflowStepId}",
    "method": "deleteTemplateWorkflowStepDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Deletes a workflow step from an template's workflow definition.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workflow step.",
        "example": "WORKFLOWSTEPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/workflow/steps/{workflowStepId}",
    "method": "getTemplateWorkflowStepDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Returns a specified workflow step for a specified envelope.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workflow step.",
        "example": "WORKFLOWSTEPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes a single step in a workflow."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/workflow/steps/{workflowStepId}",
    "method": "putTemplateWorkflowStepDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Updates a specified workflow step for a template.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workflow step.",
        "example": "WORKFLOWSTEPID"
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delayedRouting",
        "schema": "object",
        "description": ""
      },
      {
        "name": "itemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientRouting",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "triggeredDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "triggerOnItem",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes a single step in a workflow."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/workflow/steps/{workflowStepId}/delayedRouting",
    "method": "deleteTemplateDelayedRoutingDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Deletes the delayed routing rules for the specified template workflow step.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workflow step.",
        "example": "WORKFLOWSTEPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/workflow/steps/{workflowStepId}/delayedRouting",
    "method": "getTemplateDelayedRoutingDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Returns the delayed routing rules for a template's workflow step definition.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workflow step.",
        "example": "WORKFLOWSTEPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that specifies the delayed routing settings for the workflow step."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/templates/{templateId}/workflow/steps/{workflowStepId}/delayedRouting",
    "method": "putTemplateDelayedRoutingDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "EnvelopeWorkflowDefinition",
    "typeScriptTag": "envelopeWorkflowDefinition",
    "description": "Updates the delayed routing rules for a template's workflow step.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template.",
        "example": "TEMPLATEID"
      },
      {
        "name": "workflowStepId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workflow step.",
        "example": "WORKFLOWSTEPID"
      },
      {
        "name": "resumeDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex element that specifies the delayed routing settings for the workflow step."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/unsupported_file_types",
    "method": "getUnsupportedFileTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Gets a list of unsupported file types.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users",
    "method": "deleteUsers",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Closes one or more users in the account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "delete",
        "schema": "string",
        "required": false,
        "description": "A list of groups to remove the user from.\nA comma-separated list of the following:\n\n- `Groups`\n- `PermissionSet`\n- `SigningGroupsEmail`"
      },
      {
        "name": "users",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users",
    "method": "getUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieves the list of users for the specified account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "(Required) The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "additionalInfo",
        "schema": "string",
        "required": false,
        "description": "When **true,** the custom settings information is returned for each user in the account. If this parameter is omitted, the default behavior is **false.**"
      },
      {
        "name": "alternateAdminsOnly",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n\nValid values: `1` to `100`\n"
      },
      {
        "name": "domainUsersOnly",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Filters results based on the email address associated with the user that you want to return.\n\n**Note:** You can use either this parameter or the `email_substring` parameter, but not both. For older accounts, this parameter might return multiple users who are associated with a single email address. "
      },
      {
        "name": "emailSubstring",
        "schema": "string",
        "required": false,
        "description": "Filters results based on a fragment of an email address. For example, you could enter `gmail` to return all users who have Gmail addresses.\n\n**Note:** You do not use a wildcard character with this parameter. You can use either this parameter or the `email` parameter, but not both. "
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": "Filters results based on one or more group IDs."
      },
      {
        "name": "includeUsersettingsForCsv",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response includes the `userSettings` object data in CSV format."
      },
      {
        "name": "loginStatus",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response includes the login status of each user."
      },
      {
        "name": "notGroupId",
        "schema": "string",
        "required": false,
        "description": "Return user records excluding the specified group IDs."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filters results by user account status.\nA comma-separated list of any of the following:\n\n* `ActivationRequired`\n* `ActivationSent`\n* `Active`\n* `Closed`\n* `Disabled`\n"
      },
      {
        "name": "userNameSubstring",
        "schema": "string",
        "required": false,
        "description": "Filters the user records returned by the user name or a sub-string of user name."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains a list of account users."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users",
    "method": "postUsers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Adds new users to the specified account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "newUsers",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Object representing a summary of data for new users."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users",
    "method": "putUsers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Changes one or more users in the specified account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "allowAllLanguages",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nextUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "previousUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resultSetSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startPosition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "totalSetSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains a list of account users."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Gets the user information for a specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "additionalInfo",
        "schema": "string",
        "required": false,
        "description": "Setting this parameter has no effect in this operation."
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Setting this parameter has no effect in this operation."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User information."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}",
    "method": "putUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Updates user information for the specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "allowAllLanguages",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "activationAccessCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company",
        "schema": "string",
        "description": ""
      },
      {
        "name": "connectConfigurations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customSettings",
        "schema": "array",
        "description": ""
      },
      {
        "name": "defaultAccountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableConnectForUser",
        "schema": "string",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "forgottenPasswordInfo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "groupList",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hasRemoteNotary",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "homeAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "initialsImageUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isAdmin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isAlternateAdmin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isNAREnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastLogin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "loginStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passwordExpiration",
        "schema": "string",
        "description": ""
      },
      {
        "name": "permissionProfileId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "permissionProfileName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profileImageUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendActivationEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendActivationOnInvalidLogin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureImageUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribe",
        "schema": "string",
        "description": ""
      },
      {
        "name": "suffixName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userAddedToAccountDateTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userProfileLastModifiedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userSettings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "userStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workAddress",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User information."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/authorization",
    "method": "createUserAuthorization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authorizations",
    "typeScriptTag": "authorizations",
    "description": "Creates a user authorization.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the principal user.",
        "example": "USERID"
      },
      {
        "name": "agentUser",
        "schema": "object",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "permission",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A complex object describing a user authorization."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/authorization/{authorizationId}",
    "method": "deleteUserAuthorization",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Authorizations",
    "typeScriptTag": "authorizations",
    "description": "Deletes the user authorization.\n",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "authorizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user authorization.",
        "example": "AUTHORIZATIONID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the principal user.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/authorization/{authorizationId}",
    "method": "getUserAuthorization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authorizations",
    "typeScriptTag": "authorizations",
    "description": "Returns the user authorization for a given authorization ID.\n",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "authorizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user authorization.",
        "example": "AUTHORIZATIONID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the principal user.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex object describing a user authorization."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/authorization/{authorizationId}",
    "method": "updateUserAuthorization",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Authorizations",
    "typeScriptTag": "authorizations",
    "description": "Updates the start or end date for a user authorization.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "authorizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user authorization.",
        "example": "AUTHORIZATIONID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the principal user.",
        "example": "USERID"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A complex object describing a user authorization."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/authorizations",
    "method": "deleteUserAuthorizations",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Authorizations",
    "typeScriptTag": "authorizations",
    "description": "Delete multiple user authorizations.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the principal user.",
        "example": "USERID"
      },
      {
        "name": "authorizations",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/authorizations",
    "method": "getPrincipalUserAuthorizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authorizations",
    "typeScriptTag": "authorizations",
    "description": "Returns the authorizations for which the specified user is the principal user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the principal user.",
        "example": "USERID"
      },
      {
        "name": "activeOnly",
        "schema": "string",
        "required": false,
        "description": "When **true,** return only active authorizations. The default value is **true.**"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return."
      },
      {
        "name": "emailSubstring",
        "schema": "string",
        "required": false,
        "description": "Filters returned user records by full email address or a substring of email address."
      },
      {
        "name": "includeClosedUsers",
        "schema": "string",
        "required": false,
        "description": "When **true,** returns active and scheduled authorizations of closed users. The default value is **true.** This value is only applied when `active_only` is **false.**"
      },
      {
        "name": "permissions",
        "schema": "string",
        "required": false,
        "description": "Filters results by authorization permission. Valid values:\n* `Send`\n* `Manage`\n* `Sign`"
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image."
      },
      {
        "name": "userNameSubstring",
        "schema": "string",
        "required": false,
        "description": "Filters results based on a full or partial user name.\n\n**Note:** When you enter a partial user name, you do not use a wildcard character."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/authorizations",
    "method": "postUserAuthorizations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authorizations",
    "typeScriptTag": "authorizations",
    "description": "Create or update multiple user authorizations.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the principal user.",
        "example": "USERID"
      },
      {
        "name": "authorizations",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/authorizations/agent",
    "method": "getAgentUserAuthorizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authorizations",
    "typeScriptTag": "authorizations",
    "description": "Returns the authorizations for which the specified user is the agent user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The user who is acting as the agent.",
        "example": "USERID"
      },
      {
        "name": "activeOnly",
        "schema": "string",
        "required": false,
        "description": "When **true,** only active users are returned. The default value is **false.**"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return."
      },
      {
        "name": "emailSubstring",
        "schema": "string",
        "required": false,
        "description": "Filters returned user records by full email address or a substring of email address."
      },
      {
        "name": "includeClosedUsers",
        "schema": "string",
        "required": false,
        "description": "When **true,** returns active and scheduled authorizations of closed users. The default value is **true.** This value is only applied when `active_only` is **false.**"
      },
      {
        "name": "permissions",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image."
      },
      {
        "name": "userNameSubstring",
        "schema": "string",
        "required": false,
        "description": "Filters results based on a full or partial user name.\n\n**Note:** When you enter a partial user name, you do not use a wildcard character."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/cloud_storage",
    "method": "deleteCloudStorageProviders",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CloudStorageProviders",
    "typeScriptTag": "cloudStorageProviders",
    "description": "Deletes the user authentication information for one or more cloud storage providers.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "storageProviders",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/cloud_storage",
    "method": "getCloudStorageProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CloudStorageProviders",
    "typeScriptTag": "cloudStorageProviders",
    "description": "Get the Cloud Storage Provider configuration for the specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "redirectUrl",
        "schema": "string",
        "required": false,
        "description": " The URL the user is redirected to after the cloud storage provider authenticates the user. Using this will append the redirectUrl to the authenticationUrl.\n\nThe redirectUrl is restricted to URLs in the docusign.com or docusign.net domains.\n "
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/cloud_storage",
    "method": "postCloudStorage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CloudStorageProviders",
    "typeScriptTag": "cloudStorageProviders",
    "description": "Configures the redirect URL information  for one or more cloud storage providers for the specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "storageProviders",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/cloud_storage/{serviceId}",
    "method": "deleteCloudStorage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CloudStorageProviders",
    "typeScriptTag": "cloudStorageProviders",
    "description": "Deletes the user authentication information for the specified cloud storage provider.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the service to access. \n\nValid values are the service name (\"Box\") or the numerical serviceId (\"4136\").",
        "example": "SERVICEID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/cloud_storage/{serviceId}",
    "method": "getCloudStorage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CloudStorageProviders",
    "typeScriptTag": "cloudStorageProviders",
    "description": "Gets the specified Cloud Storage Provider configuration for the User.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the service to access. \n\nValid values are the service name (\"Box\") or the numerical serviceId (\"4136\").",
        "example": "SERVICEID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "redirectUrl",
        "schema": "string",
        "required": false,
        "description": " The URL the user is redirected to after the cloud storage provider authenticates the user. Using this will append the redirectUrl to the authenticationUrl.\n\nThe redirectUrl is restricted to URLs in the docusign.com or docusign.net domains.\n "
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/cloud_storage/{serviceId}/folders",
    "method": "getCloudStorageFolderAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CloudStorage",
    "typeScriptTag": "cloudStorage",
    "description": "Retrieves a list of all the items in a specified folder from the specified cloud storage provider.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the service to access. \n\nValid values are the service name (\"Box\") or the numerical serviceId (\"4136\").",
        "example": "SERVICEID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "cloudStorageFolderPath",
        "schema": "string",
        "required": false,
        "description": "A comma separated list of folder IDs included in the request. "
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n\nDefault: `25`\n"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "The order in which to sort the results.\n\nValid values are: \n\n\n* `asc`: Ascending order.\n* `desc`: Descending order. "
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "The file attribute to use to sort the results.\n\nValid values are: \n\n* `modified`\n* `name`"
      },
      {
        "name": "searchText",
        "schema": "string",
        "required": false,
        "description": "Use this parameter to search for specific text."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/cloud_storage/{serviceId}/folders/{folderId}",
    "method": "getCloudStorageFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CloudStorage",
    "typeScriptTag": "cloudStorage",
    "description": "Gets a list of items from a cloud storage provider.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The ID of the folder.",
        "example": "FOLDERID"
      },
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the service to access. \n\nValid values are the service name (\"Box\") or the numerical serviceId (\"4136\").",
        "example": "SERVICEID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "cloudStorageFolderPath",
        "schema": "string",
        "required": false,
        "description": "The file path to a cloud storage folder."
      },
      {
        "name": "cloudStorageFolderidPlain",
        "schema": "string",
        "required": false,
        "description": "A plain-text folder ID that you can use as an alternative to the existing folder id. This property is mainly used for rooms. Enter multiple folder IDs as a comma-separated list."
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n\nDefault: `25`\n"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "The order in which to sort the results.\n\nValid values are: \n\n\n* `asc`: Ascending order.\n* `desc`: Descending order. "
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "The file attribute to use to sort the results.\n\nValid values are: \n\n* `modified`\n* `name`"
      },
      {
        "name": "searchText",
        "schema": "string",
        "required": false,
        "description": "Use this parameter to search for specific text."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/custom_settings",
    "method": "deleteCustomSettings",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UserCustomSettings",
    "typeScriptTag": "userCustomSettings",
    "description": "Deletes custom user settings for a specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "customSettings",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/custom_settings",
    "method": "getCustomSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserCustomSettings",
    "typeScriptTag": "userCustomSettings",
    "description": "Retrieves the custom user settings for a specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/custom_settings",
    "method": "putCustomSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "UserCustomSettings",
    "typeScriptTag": "userCustomSettings",
    "description": "Adds or updates custom user settings for the specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "customSettings",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/profile",
    "method": "getProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserProfiles",
    "typeScriptTag": "userProfiles",
    "description": "Retrieves the user profile for a specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/profile",
    "method": "putProfile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "UserProfiles",
    "typeScriptTag": "userProfiles",
    "description": "Updates the user profile information for the specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "authenticationMethods",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayOrganizationInfo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayPersonalInfo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayProfile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayUsageHistory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profileImageUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "usageHistory",
        "schema": "object",
        "description": ""
      },
      {
        "name": "userDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "userProfileLastModifiedDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/profile/image",
    "method": "deleteUserProfileImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Deletes the user profile image for the specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/profile/image",
    "method": "getUserProfileImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieves the user profile image for the specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "encoding",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/profile/image",
    "method": "putUserProfileImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Updates the user profile image for a specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/settings",
    "method": "getUserSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Gets the user account settings for a specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Properties that configure the settings for a user. Some elements of this object have a `metadata` property, which includes the following:\n- `rights`: The calling users permissions to edit this setting (can be `editable` or `read_only`)\n- `uiHint`: Internally used to build UIs (can be `available` or `hidden`)\n- `options`: The values supported for this setting (not all settings have this element)"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/settings",
    "method": "putUserSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Updates the user account settings for a specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "allowAllLanguages",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountManagementGranular",
        "schema": "object",
        "description": ""
      },
      {
        "name": "adminOnly",
        "schema": "string",
        "description": ""
      },
      {
        "name": "adminOnlyMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowAutoTagging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowedOrchestrationAccess",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowedOrchestrationAccessMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowEnvelopeTransferTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowEnvelopeTransferToMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowEsealRecipients",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowEsealRecipientsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowPowerFormsAdminToAccessAllPowerFormEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowPowerFormsAdminToAccessAllPowerFormEnvelopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowRecipientLanguageSelection",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowRecipientLanguageSelectionMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSendOnBehalfOf",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSendOnBehalfOfMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowSupplementalDocuments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowSupplementalDocumentsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "allowTransactions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowTransactionsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "anchorTagVersionedPlacementEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiAccountWideAccess",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiAccountWideAccessMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "apiCanExportAC",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiCanExportACMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "bulkSend",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bulkSendMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canChargeAccount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canChargeAccountMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canCreateTransaction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canCreateTransactionMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canDeleteDocumentsInTransaction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canDeleteDocumentsInTransactionMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canDeleteTransaction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canDeleteTransactionMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canEditSharedAddressbook",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canEditSharedAddressbookMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canLockEnvelopes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canLockEnvelopesMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canManageAccount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canManageAccountMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canManageDistributor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canManageDistributorMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canManageTemplates",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canManageTemplatesMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canSendAPIRequests",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canSendAPIRequestsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canSendEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canSendEnvelopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canSendEnvelopesViaSMS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canSendEnvelopesViaSMSMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canSignEnvelope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canSignEnvelopeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canUseScratchpad",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canUseScratchpadMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "canUseSmartContracts",
        "schema": "string",
        "description": ""
      },
      {
        "name": "canUseSmartContractsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disableDocumentUpload",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableDocumentUploadMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disableOtherActions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableOtherActionsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableDSPro",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableDSProMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableKeyTermsSuggestionsByDocumentType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableKeyTermsSuggestionsByDocumentTypeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSequentialSigningAPI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSequentialSigningAPIMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSequentialSigningUI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSequentialSigningUIMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSignerAttachments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSignerAttachmentsMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableSignOnPaperOverride",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableSignOnPaperOverrideMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableTransactionPoint",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableTransactionPointMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enableVaulting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableVaultingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "expressSendOnly",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "localeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "localePolicy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "manageClickwrapsMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "manageClickwrapsModeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modifiedBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedByMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modifiedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedDateMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modifiedPage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedPageMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "newSendUI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "newSendUIMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "powerFormMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerFormModeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recipientViewedNotification",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipientViewedNotificationMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sealIdentifiers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "selfSignedRecipientEmailDocument",
        "schema": "string",
        "description": ""
      },
      {
        "name": "selfSignedRecipientEmailDocumentMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "senderEmailNotifications",
        "schema": "object",
        "description": ""
      },
      {
        "name": "signerEmailNotifications",
        "schema": "object",
        "description": ""
      },
      {
        "name": "supplementalDocumentIncludeInDownload",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supplementalDocumentsMustAccept",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supplementalDocumentsMustAcceptMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "supplementalDocumentsMustRead",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supplementalDocumentsMustReadMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "supplementalDocumentsMustView",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supplementalDocumentsMustViewMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "templateActiveCreation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateActiveCreationMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "templateApplyNotify",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateApplyNotifyMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "templateAutoMatching",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateAutoMatchingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "templateMatchingSensitivity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templateMatchingSensitivityMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "templatePageLevelMatching",
        "schema": "string",
        "description": ""
      },
      {
        "name": "templatePageLevelMatchingMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "timezoneDST",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezoneDSTMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "timezoneMask",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezoneMaskMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "timezoneOffset",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezoneOffsetMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "timezoneSendingPref",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezoneSendingPrefMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "timezoneSigningPref",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezoneSigningPrefMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "transactionPointSiteNameURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transactionPointSiteNameURLMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "transactionPointUserName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transactionPointUserNameMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "vaultingMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vaultingModeMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "webForms",
        "schema": "string",
        "description": ""
      },
      {
        "name": "webFormsMetadata",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/signatures",
    "method": "getUserSignatures",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserSignatures",
    "typeScriptTag": "userSignatures",
    "description": "Retrieves a list of signature definitions for a user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "stampType",
        "schema": "string",
        "required": false,
        "description": "The type of stamps to return. Valid values are:\n\n- `signature`: Returns information about signature images only. This is the default value.\n- `stamp`: Returns information about eHanko and custom stamps only.\n- null"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/signatures",
    "method": "postUserSignatures",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserSignatures",
    "typeScriptTag": "userSignatures",
    "description": "Adds user Signature and initials images to a Signature.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "userSignatures",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/signatures",
    "method": "putUserSignature",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "UserSignatures",
    "typeScriptTag": "userSignatures",
    "description": "Adds/updates a user signature.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "userSignatures",
        "schema": "array",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/signatures/{signatureId}",
    "method": "deleteUserSignature",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UserSignatures",
    "typeScriptTag": "userSignatures",
    "description": "Removes removes signature information for the specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The ID of the account stamp.",
        "example": "SIGNATUREID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/signatures/{signatureId}",
    "method": "getUserSignature",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserSignatures",
    "typeScriptTag": "userSignatures",
    "description": "Gets the user signature information for the specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The ID of the account stamp.",
        "example": "SIGNATUREID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/signatures/{signatureId}",
    "method": "putUserSignatureById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "UserSignatures",
    "typeScriptTag": "userSignatures",
    "description": "Updates the user signature for a specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The ID of the account stamp.",
        "example": "SIGNATUREID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "closeExistingSignature",
        "schema": "string",
        "required": false,
        "description": "When **true,** closes the current signature."
      },
      {
        "name": "dateStampProperties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disallowUserResizeStamp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalID",
        "schema": "string",
        "description": ""
      },
      {
        "name": "imageType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDefault",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nrdsId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nrdsLastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneticName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureFont",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureInitials",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signatureType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stampFormat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stampSizeMM",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/signatures/{signatureId}/{imageType}",
    "method": "deleteUserSignatureImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UserSignatures",
    "typeScriptTag": "userSignatures",
    "description": "Deletes the user initials image or the  user signature image for the specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "imageType",
        "schema": "string",
        "required": true,
        "description": "Specificies the type of image. Valid values:\n\n- `stamp_image`\n- `signature_image`\n- `initials_image`",
        "example": "IMAGETYPE"
      },
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The ID of the account stamp.",
        "example": "SIGNATUREID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/signatures/{signatureId}/{imageType}",
    "method": "getUserSignatureImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserSignatures",
    "typeScriptTag": "userSignatures",
    "description": "Retrieves the user initials image or the  user signature image for the specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "imageType",
        "schema": "string",
        "required": true,
        "description": "Specificies the type of image. Valid values:\n\n- `stamp_image`\n- `signature_image`\n- `initials_image`",
        "example": "IMAGETYPE"
      },
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The ID of the account stamp.",
        "example": "SIGNATUREID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "includeChrome",
        "schema": "string",
        "required": false,
        "description": "When **true,** the chrome (or frame containing the added line and identifier) is included with the signature image."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/users/{userId}/signatures/{signatureId}/{imageType}",
    "method": "putUserSignatureImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "UserSignatures",
    "typeScriptTag": "userSignatures",
    "description": "Updates the user signature image or user initials image for the specified user.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "imageType",
        "schema": "string",
        "required": true,
        "description": "Specificies the type of image. Valid values:\n\n- `stamp_image`\n- `signature_image`\n- `initials_image`",
        "example": "IMAGETYPE"
      },
      {
        "name": "signatureId",
        "schema": "string",
        "required": true,
        "description": "The ID of the account stamp.",
        "example": "SIGNATUREID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to access.\n\n**Note:** Users can only access their own information. A user, even one with Admin rights, cannot access another user's settings.",
        "example": "USERID"
      },
      {
        "name": "transparentPng",
        "schema": "string",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/views/console",
    "method": "postAccountConsoleView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EnvelopeViews",
    "typeScriptTag": "envelopeViews",
    "description": "Returns a URL to the DocuSign UI.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "envelopeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "returnUrl",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provides a URL that you can embed in your application\nto provide access to the DocuSign UI.\n\n### Related topics\n\n- [Embedded signing and sending](https://raw.githubusercontent.com)\n- [Send an envelope via your app](https://raw.githubusercontent.com)\n- [Introducing customizable embedded sending](https://www.docusign.com/blog/developers/introducing-customizable-embedded-sending)\n\n"
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/watermark",
    "method": "getWatermark",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountWatermarks",
    "typeScriptTag": "accountWatermarks",
    "description": "Get watermark information.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/watermark",
    "method": "putWatermark",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccountWatermarks",
    "typeScriptTag": "accountWatermarks",
    "description": "Update watermark information.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "displayAngle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "font",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fontColor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fontSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "imageBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transparency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "watermarkText",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/watermark/preview",
    "method": "putWatermarkPreview",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccountWatermarks",
    "typeScriptTag": "accountWatermarks",
    "description": "Get watermark preview.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "displayAngle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "font",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fontColor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fontSize",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "imageBase64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "transparency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "watermarkText",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/workspaces",
    "method": "getWorkspaces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List Workspaces",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object contains a list of available workspaces."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/workspaces",
    "method": "postWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Create a Workspace",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "billableAccountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callerInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdByInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedByInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workspaceBaseUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workspaceDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workspaceName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workspaceUri",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A DocuSign workspace is a collaboration area for sharing files and data."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/workspaces/{workspaceId}",
    "method": "deleteWorkspace",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Delete Workspace",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workspace.",
        "example": "WORKSPACEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A DocuSign workspace is a collaboration area for sharing files and data."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/workspaces/{workspaceId}",
    "method": "getWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Get Workspace",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workspace.",
        "example": "WORKSPACEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A DocuSign workspace is a collaboration area for sharing files and data."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/workspaces/{workspaceId}",
    "method": "putWorkspace",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Update Workspace",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workspace.",
        "example": "WORKSPACEID"
      },
      {
        "name": "billableAccountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callerInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdByInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lastModified",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastModifiedByInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workspaceBaseUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workspaceDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workspaceName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workspaceUri",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A DocuSign workspace is a collaboration area for sharing files and data."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}",
    "method": "deleteWorkspaceItems",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "WorkspaceItems",
    "typeScriptTag": "workspaceItems",
    "description": "Deletes files or sub-folders from a workspace.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The ID of the folder.",
        "example": "FOLDERID"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workspace.",
        "example": "WORKSPACEID"
      },
      {
        "name": "items",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}",
    "method": "getWorkspaceFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WorkspaceItems",
    "typeScriptTag": "workspaceItems",
    "description": "List workspace folder contents",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The ID of the folder.",
        "example": "FOLDERID"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workspace.",
        "example": "WORKSPACEID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n"
      },
      {
        "name": "includeFiles",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response includes file information (in addition to folder information). The default is **false.**"
      },
      {
        "name": "includeSubFolders",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response includes information about the sub-folders of the current folder. The default is **false.**"
      },
      {
        "name": "includeThumbnails",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response returns thumbnails.  The default is **false.**"
      },
      {
        "name": "includeUserDetail",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response includes extended details about the user. The default is **false.**"
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      },
      {
        "name": "workspaceUserId",
        "schema": "string",
        "required": false,
        "description": "If set, the response only includes results associated with the `userId` that you specify."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object's properties describe the contents of a workspace folder."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}/files",
    "method": "postWorkspaceFiles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WorkspaceItems",
    "typeScriptTag": "workspaceItems",
    "description": "Creates a workspace file.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The ID of the folder.",
        "example": "FOLDERID"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workspace.",
        "example": "WORKSPACEID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "This object represents an item in a workspace, which can be either a file or folder."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}/files/{fileId}",
    "method": "getWorkspaceFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WorkspaceItems",
    "typeScriptTag": "workspaceItems",
    "description": "Gets a workspace file",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The ID of the file.",
        "example": "FILEID"
      },
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The ID of the folder.",
        "example": "FOLDERID"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workspace.",
        "example": "WORKSPACEID"
      },
      {
        "name": "isDownload",
        "schema": "string",
        "required": false,
        "description": "When **true,** the `Content-Disposition` header is set in the response. The value of the header provides the filename of the file. The default is **false.**"
      },
      {
        "name": "pdfVersion",
        "schema": "string",
        "required": false,
        "description": "When **true** the file is returned in PDF format."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}/files/{fileId}",
    "method": "putWorkspaceFile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "WorkspaceItems",
    "typeScriptTag": "workspaceItems",
    "description": "Update workspace file or folder metadata",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The ID of the file.",
        "example": "FILEID"
      },
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The ID of the folder.",
        "example": "FOLDERID"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workspace.",
        "example": "WORKSPACEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object represents an item in a workspace, which can be either a file or folder."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}/files/{fileId}/pages",
    "method": "getWorkspaceFilePages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WorkspaceItems",
    "typeScriptTag": "workspaceItems",
    "description": "List File Pages",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The external account number (int) or account ID GUID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The ID of the file.",
        "example": "FILEID"
      },
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The ID of the folder.",
        "example": "FOLDERID"
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workspace.",
        "example": "WORKSPACEID"
      },
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return.\n\nUse `start_position` to specify the number of results to skip.\n"
      },
      {
        "name": "dpi",
        "schema": "string",
        "required": false,
        "description": "The number of dots per inch (DPI) for the resulting images. Valid values are 1-310 DPI. The default value is 94."
      },
      {
        "name": "maxHeight",
        "schema": "string",
        "required": false,
        "description": "Sets the maximum height of the returned images in pixels."
      },
      {
        "name": "maxWidth",
        "schema": "string",
        "required": false,
        "description": "Sets the maximum width of the returned images in pixels."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The zero-based index of the\nresult from which to start returning results.\n\nUse with `count` to limit the number\nof results.\n\nThe default value is `0`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/accounts/provisioning",
    "method": "getProvisioning",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Retrieves the account provisioning information for the account.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/billing_plans",
    "method": "getBillingPlans",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BillingPlans",
    "typeScriptTag": "billingPlans",
    "description": "Gets a list of available billing plans.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Defines a billing plans response object."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/billing_plans/{billingPlanId}",
    "method": "getBillingPlan",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BillingPlans",
    "typeScriptTag": "billingPlans",
    "description": "Gets billing plan details.",
    "parameters": [
      {
        "name": "billingPlanId",
        "schema": "string",
        "required": true,
        "description": "The ID of the billing plan being accessed.",
        "example": "BILLINGPLANID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Defines a billing plan response object."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/current_user/notary",
    "method": "getNotary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notary",
    "typeScriptTag": "notary",
    "description": "Gets settings for a  notary user.",
    "parameters": [
      {
        "name": "includeJurisdictions",
        "schema": "string",
        "required": false,
        "description": "When **true,** the response will include a `jurisdiction` property that contains an array of all supported jurisdictions for the current user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes a single notary jurisdiction."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/current_user/notary",
    "method": "postNotary",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notary",
    "typeScriptTag": "notary",
    "description": "Registers the current user as a notary.",
    "parameters": [
      {
        "name": "createdDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "searchable",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userInfo",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/current_user/notary",
    "method": "putNotary",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notary",
    "typeScriptTag": "notary",
    "description": "Updates notary information for the current user.",
    "parameters": [
      {
        "name": "createdDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "searchable",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userInfo",
        "schema": "object",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/current_user/notary/journals",
    "method": "getNotaryJournals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NotaryJournals",
    "typeScriptTag": "notaryJournals",
    "description": "Gets notary jurisdictions for a user.",
    "parameters": [
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The maximum number of results to return."
      },
      {
        "name": "searchText",
        "schema": "string",
        "required": false,
        "description": "Use this parameter to search for specific text."
      },
      {
        "name": "startPosition",
        "schema": "string",
        "required": false,
        "description": "The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/current_user/notary/jurisdictions",
    "method": "getNotaryJurisdictions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NotaryJurisdiction",
    "typeScriptTag": "notaryJurisdiction",
    "description": "Returns a list of jurisdictions that the notary is registered in.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A paged list of jurisdictions."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/current_user/notary/jurisdictions",
    "method": "postNotaryJurisdictions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "NotaryJurisdiction",
    "typeScriptTag": "notaryJurisdiction",
    "description": "Creates a jurisdiction object.",
    "parameters": [
      {
        "name": "commissionExpiration",
        "schema": "string",
        "description": ""
      },
      {
        "name": "commissionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "jurisdiction",
        "schema": "object",
        "description": ""
      },
      {
        "name": "registeredName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sealType",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A notary jurisdiction."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/current_user/notary/jurisdictions/{jurisdictionId}",
    "method": "deleteNotaryJurisdiction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "NotaryJurisdiction",
    "typeScriptTag": "notaryJurisdiction",
    "description": "Deletes the specified jurisdiction.",
    "parameters": [
      {
        "name": "jurisdictionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the jurisdiction.\nThe following jurisdictions\nare supported:\n\n-  `5 - California`\n-  `6 - Colorado`\n-  `9 - Florida`\n-  `10 - Georgia`\n-  `12 - Idaho`\n-  `13 - Illinois`\n-  `14 - Indiana`\n-  `15 - Iowa`\n-  `17 - Kentucky`\n-  `23 - Minnesota`\n-  `25 - Missouri`\n-  `30 - New Jersey`\n-  `32 - New York`\n-  `33 - North Carolina`\n-  `35 - Ohio`\n-  `37 - Oregon`\n-  `38 - Pennsylvania`\n-  `40 - South Carolina`\n-  `43 - Texas`\n-  `44 - Utah`\n-  `47 - Washington`\n-  `48 - West Virginia`\n-  `49 - Wisconsin`\n-  `62 - Florida Commissioner of Deeds`\n",
        "example": "JURISDICTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/current_user/notary/jurisdictions/{jurisdictionId}",
    "method": "getNotaryJurisdiction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NotaryJurisdiction",
    "typeScriptTag": "notaryJurisdiction",
    "description": "Gets a jurisdiction object for the current user. The user must be a notary.",
    "parameters": [
      {
        "name": "jurisdictionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the jurisdiction.\nThe following jurisdictions\nare supported:\n\n-  `5 - California`\n-  `6 - Colorado`\n-  `9 - Florida`\n-  `10 - Georgia`\n-  `12 - Idaho`\n-  `13 - Illinois`\n-  `14 - Indiana`\n-  `15 - Iowa`\n-  `17 - Kentucky`\n-  `23 - Minnesota`\n-  `25 - Missouri`\n-  `30 - New Jersey`\n-  `32 - New York`\n-  `33 - North Carolina`\n-  `35 - Ohio`\n-  `37 - Oregon`\n-  `38 - Pennsylvania`\n-  `40 - South Carolina`\n-  `43 - Texas`\n-  `44 - Utah`\n-  `47 - Washington`\n-  `48 - West Virginia`\n-  `49 - Wisconsin`\n-  `62 - Florida Commissioner of Deeds`\n",
        "example": "JURISDICTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A notary jurisdiction."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/current_user/notary/jurisdictions/{jurisdictionId}",
    "method": "putNotaryJurisdiction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "NotaryJurisdiction",
    "typeScriptTag": "notaryJurisdiction",
    "description": "Updates the jurisdiction information about a notary.",
    "parameters": [
      {
        "name": "jurisdictionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the jurisdiction.\nThe following jurisdictions\nare supported:\n\n-  `5 - California`\n-  `6 - Colorado`\n-  `9 - Florida`\n-  `10 - Georgia`\n-  `12 - Idaho`\n-  `13 - Illinois`\n-  `14 - Indiana`\n-  `15 - Iowa`\n-  `17 - Kentucky`\n-  `23 - Minnesota`\n-  `25 - Missouri`\n-  `30 - New Jersey`\n-  `32 - New York`\n-  `33 - North Carolina`\n-  `35 - Ohio`\n-  `37 - Oregon`\n-  `38 - Pennsylvania`\n-  `40 - South Carolina`\n-  `43 - Texas`\n-  `44 - Utah`\n-  `47 - Washington`\n-  `48 - West Virginia`\n-  `49 - Wisconsin`\n-  `62 - Florida Commissioner of Deeds`\n",
        "example": "JURISDICTIONID"
      },
      {
        "name": "commissionExpiration",
        "schema": "string",
        "description": ""
      },
      {
        "name": "commissionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "county",
        "schema": "string",
        "description": ""
      },
      {
        "name": "errorDetails",
        "schema": "object",
        "description": ""
      },
      {
        "name": "jurisdiction",
        "schema": "object",
        "description": ""
      },
      {
        "name": "registeredName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sealType",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A notary jurisdiction."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/current_user/password_rules",
    "method": "getPasswordRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccountPasswordRules",
    "typeScriptTag": "accountPasswordRules",
    "description": "Gets membership account password rules.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains details about the password rules for a user."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/diagnostics/request_logs",
    "method": "deleteRequestLogs",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "RequestLogs",
    "typeScriptTag": "requestLogs",
    "description": "Deletes the request log files.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/diagnostics/request_logs",
    "method": "getRequestLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RequestLogs",
    "typeScriptTag": "requestLogs",
    "description": "Gets the API request logging log files.",
    "parameters": [
      {
        "name": "encoding",
        "schema": "string",
        "required": false,
        "description": "Reserved for DocuSign."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains information about multiple API request logs."
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/diagnostics/request_logs/{requestLogId}",
    "method": "getRequestLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RequestLogs",
    "typeScriptTag": "requestLogs",
    "description": "Gets a request logging log file.",
    "parameters": [
      {
        "name": "requestLogId",
        "schema": "string",
        "required": true,
        "description": "The ID of the log entry.",
        "example": "REQUESTLOGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/diagnostics/settings",
    "method": "getRequestLogSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RequestLogs",
    "typeScriptTag": "requestLogs",
    "description": "Gets the API request logging settings.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  },
  {
    "url": "/v2.1/diagnostics/settings",
    "method": "putRequestLogSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "RequestLogs",
    "typeScriptTag": "requestLogs",
    "description": "Enables or disables API request logging for troubleshooting.",
    "parameters": [
      {
        "name": "apiRequestLogging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiRequestLogMaxEntries",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiRequestLogRemainingEntries",
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
        "description": "This object describes errors that occur. It is only valid for responses and ignored in requests."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="DocuSign REST API"
      apiBaseUrl="https://www.docusign.net/restapi"
      apiVersion="v2.1"
      endpoints={208}
      sdkMethods={610}
      schemas={598}
      parameters={4443}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/docusign/openapi.yaml"
    />
  );
}
  