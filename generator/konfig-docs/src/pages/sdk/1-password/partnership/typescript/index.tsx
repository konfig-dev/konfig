import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function Sdk1PasswordPartnershipTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="1-password-partnership-typescript-sdk"
      metaDescription={`Trusted by more than 100,000 businesses to protect their data, 1Password gives you complete control over passwords and other sensitive business information. 

As an integral layer of the Identity and Access Management (IAM) stack, 1Password protects all employee accounts – even those you aren't aware of. Give employees secure access to any app or service and safely share everything you need to work together – including logins, documents, credit cards, and more – while keeping everything else private.

1Password is easy to deploy and integrates with Azure AD, Okta, OneLogin, and Slack, so you can automatically provision employees using the systems you already trust. It's simple to manage and fits seamlessly into your team's workflow, so you can secure your business without compromising productivity.`}
      company="1Password"
      serviceName="Partnership"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/1-password/partnership/logo.png"
      companyKebabCase="1-password"
      clientNameCamelCase="onePasswordPartnership"
      homepage="1password.com"
      lastUpdated={new Date("2024-03-14T08:10:33.678Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/1-password/partnership/favicon.png"
      contactUrl="https://www.1password.partners/English/"
      contactEmail="partners@1password.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/1-password/partnership/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["password_management","security","identity_and_access_management"]}
      methods={[
  {
    "url": "/api/v1/partners/accounts",
    "method": "beginProvisioningProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Begins provisioning process for a new partner associated 1Password account.",
    "parameters": [
      {
        "name": "customer_account_uid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ACCOUNT_UID"
      },
      {
        "name": "account_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_TYPE"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "ends_at",
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/partners/accounts/{customer_account_uid}",
    "method": "removeFromPartnership",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Removes an account from the partnership domain.",
    "parameters": [
      {
        "name": "customerAccountUid",
        "schema": "string",
        "required": true,
        "description": "Unique ID of partner_account to delete.",
        "example": "CUSTOMER_ACCOUNT_UID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returned upon successful deactivation of a partnership account."
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/partners/accounts/{customer_account_uid}",
    "method": "getByUid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Returns an account based on an UID.",
    "parameters": [
      {
        "name": "customerAccountUid",
        "schema": "string",
        "required": true,
        "description": "Unique ID of an account to retrieve.",
        "example": "CUSTOMER_ACCOUNT_UID"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "410",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/partners/accounts/{customer_account_uid}",
    "method": "updateEndsAtByUid",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Updates the ends_at attribute of an account based on an UID.",
    "parameters": [
      {
        "name": "customerAccountUid",
        "schema": "string",
        "required": true,
        "description": "Unique ID of partner_account to update.",
        "example": "CUSTOMER_ACCOUNT_UID"
      },
      {
        "name": "ends_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDS_AT"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="1Password Partnership API"
      apiBaseUrl="https://billing.b5test.eu"
      apiVersion="2.0.0"
      endpoints={2}
      sdkMethods={4}
      schemas={4}
      parameters={8}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/1-password/partnership/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/1-password/partnership/openapi.yaml"
      developerDocumentation="developer.1password.com/docs/partnership-api/reference"
    />
  );
}
  