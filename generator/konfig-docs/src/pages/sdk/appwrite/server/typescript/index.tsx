import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function AppwriteServerTypeScriptSdk() {
  return (
    <Sdk
      sdkName="appwrite-server-typescript-sdk"
      metaDescription="Appwrite's open-source development platform lets you build any application at any scale, own your data, and use your preferred coding languages and tools.

Build like a team of hundreds."
      company="Appwrite"
      serviceName="Server"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/server/logo.png"
      clientNameCamelCase="appwriteServer"
      homepage="appwrite.io"
      lastUpdated={new Date("2024-03-11T17:31:04.042Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/server/favicon.png"
      contactUrl="https://appwrite.io/support"
      contactEmail="team@appwrite.io"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/server/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/account",
    "method": "getCurrentUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Get account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create account",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/email",
    "method": "updateEmailAddress",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update email",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/identities",
    "method": "listIdentities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "List Identities",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Identities List"
      }
    ]
  },
  {
    "url": "/account/identities/{identityId}",
    "method": "deleteIdentityById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Delete identity",
    "parameters": [
      {
        "name": "identityId",
        "schema": "string",
        "required": true,
        "description": "Identity ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/account/jwt",
    "method": "createJwt",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create JWT",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "JWT"
      }
    ]
  },
  {
    "url": "/account/logs",
    "method": "listLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "List logs",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/account/mfa",
    "method": "updateMfaStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update MFA",
    "parameters": [
      {
        "name": "mfa",
        "schema": "boolean",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/mfa/authenticators/{type}",
    "method": "deleteAuthenticatorById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Delete Authenticator",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of authenticator."
      },
      {
        "name": "otp",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/mfa/authenticators/{type}",
    "method": "addAuthenticatorApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Add Authenticator",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of authenticator. Must be `totp`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFAType"
      }
    ]
  },
  {
    "url": "/account/mfa/authenticators/{type}",
    "method": "verifyAuthenticator",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Verify Authenticator",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of authenticator."
      },
      {
        "name": "otp",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/mfa/challenge",
    "method": "beginMfaVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create 2FA Challenge",
    "parameters": [
      {
        "name": "factor",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "MFA Challenge"
      }
    ]
  },
  {
    "url": "/account/mfa/challenge",
    "method": "completeMfaChallenge",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create MFA Challenge (confirmation)",
    "parameters": [
      {
        "name": "challengeId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "otp",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/mfa/factors",
    "method": "listMfaFactors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "List Factors",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFAFactors"
      }
    ]
  },
  {
    "url": "/account/mfa/recovery-codes",
    "method": "getMfaRecoveryCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Get MFA Recovery Codes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFA Recovery Codes"
      }
    ]
  },
  {
    "url": "/account/mfa/recovery-codes",
    "method": "regenerateMfaRecoveryCodes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Regenerate MFA Recovery Codes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFA Recovery Codes"
      }
    ]
  },
  {
    "url": "/account/mfa/recovery-codes",
    "method": "generateRecoveryCodes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create MFA Recovery Codes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "MFA Recovery Codes"
      }
    ]
  },
  {
    "url": "/account/name",
    "method": "updateNameOperation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update name",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/password",
    "method": "updatePasswordOperation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update password",
    "parameters": [
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oldPassword",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/phone",
    "method": "updatePhone",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update phone",
    "parameters": [
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/prefs",
    "method": "getPrefs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Get account preferences",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Preferences"
      }
    ]
  },
  {
    "url": "/account/prefs",
    "method": "updatePreferences",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update preferences",
    "parameters": [
      {
        "name": "prefs",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/recovery",
    "method": "createPasswordRecovery",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create password recovery",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/recovery",
    "method": "completePasswordRecovery",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create password recovery (confirmation)",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/sessions",
    "method": "deleteUserSessions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Delete sessions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/account/sessions",
    "method": "listSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "List sessions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sessions List"
      }
    ]
  },
  {
    "url": "/account/sessions/anonymous",
    "method": "createAnonymousSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create anonymous session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/sessions/email",
    "method": "createEmailPasswordSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create email password session",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/sessions/magic-url",
    "method": "updateMagicUrlSession",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update magic URL session",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/sessions/phone",
    "method": "updatePhoneSession",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update phone session",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/sessions/token",
    "method": "createTokenSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create session",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/sessions/{sessionId}",
    "method": "logoutSessionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Delete session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Session ID. Use the string 'current' to delete the current device session."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/account/sessions/{sessionId}",
    "method": "getSessionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Get session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Session ID. Use the string 'current' to get the current device session."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/sessions/{sessionId}",
    "method": "extendSessionLength",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Session ID. Use the string 'current' to update the current device session."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/account/status",
    "method": "blockCurrentUserStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update status",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/account/tokens/email",
    "method": "createEmailToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create email token (OTP)",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "phrase",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/tokens/magic-url",
    "method": "createMagicUrlToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create magic URL token",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phrase",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/tokens/oauth2/{provider}",
    "method": "createOAuth2Token",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create OAuth2 token",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom."
      },
      {
        "name": "success",
        "schema": "string",
        "required": false,
        "description": "URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API."
      },
      {
        "name": "failure",
        "schema": "string",
        "required": false,
        "description": "URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API."
      },
      {
        "name": "scopes",
        "schema": "array",
        "required": false,
        "description": "A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long."
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "File"
      }
    ]
  },
  {
    "url": "/account/tokens/phone",
    "method": "createPhoneToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create phone token",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/verification",
    "method": "createEmailVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create email verification",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/verification",
    "method": "completeEmailVerification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create email verification (confirmation)",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/verification/phone",
    "method": "createPhoneVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create phone verification",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/account/verification/phone",
    "method": "confirmPhoneVerification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create phone verification (confirmation)",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/avatars/browsers/{code}",
    "method": "getBrowserIcon",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get browser icon",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Browser Code."
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Image width. Pass an integer between 0 to 2000. Defaults to 100."
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Image height. Pass an integer between 0 to 2000. Defaults to 100."
      },
      {
        "name": "quality",
        "schema": "integer",
        "required": false,
        "description": "Image quality. Pass an integer between 0 to 100. Defaults to 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/avatars/credit-cards/{code}",
    "method": "getCreditCardIcon",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get credit card icon",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Credit Card Code. Possible values: amex, argencard, cabal, censosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, union-china-pay, visa, mir, maestro."
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Image width. Pass an integer between 0 to 2000. Defaults to 100."
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Image height. Pass an integer between 0 to 2000. Defaults to 100."
      },
      {
        "name": "quality",
        "schema": "integer",
        "required": false,
        "description": "Image quality. Pass an integer between 0 to 100. Defaults to 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/avatars/favicon",
    "method": "getFavicon",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get favicon",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "Website URL which you want to fetch the favicon from."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/avatars/flags/{code}",
    "method": "getCountryFlag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get country flag",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Country Code. ISO Alpha-2 country code format."
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Image width. Pass an integer between 0 to 2000. Defaults to 100."
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Image height. Pass an integer between 0 to 2000. Defaults to 100."
      },
      {
        "name": "quality",
        "schema": "integer",
        "required": false,
        "description": "Image quality. Pass an integer between 0 to 100. Defaults to 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/avatars/image",
    "method": "getRemoteImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get image from URL",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "Image URL which you want to crop."
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Resize preview image width, Pass an integer between 0 to 2000. Defaults to 400."
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Resize preview image height, Pass an integer between 0 to 2000. Defaults to 400."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/avatars/initials",
    "method": "getUserInitials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get user initials",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Full Name. When empty, current user name or email will be used. Max length: 128 chars."
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Image width. Pass an integer between 0 to 2000. Defaults to 100."
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Image height. Pass an integer between 0 to 2000. Defaults to 100."
      },
      {
        "name": "background",
        "schema": "string",
        "required": false,
        "description": "Changes background color. By default a random color will be picked and stay will persistent to the given name."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/avatars/qr",
    "method": "generateQrCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get QR code",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "Plain text to be converted to QR code image."
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "QR code size. Pass an integer between 1 to 1000. Defaults to 400."
      },
      {
        "name": "margin",
        "schema": "integer",
        "required": false,
        "description": "Margin from edge. Pass an integer between 0 to 10. Defaults to 1."
      },
      {
        "name": "download",
        "schema": "boolean",
        "required": false,
        "description": "Return resulting image with 'Content-Disposition: attachment ' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/databases",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List databases",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Databases List"
      }
    ]
  },
  {
    "url": "/databases",
    "method": "createDatabase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create database",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Database"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Delete database",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Get database",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Database"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update database",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Database"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections",
    "method": "listCollections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List collections",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Collections List"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections",
    "method": "createCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create collection",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "documentSecurity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Collection"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}",
    "method": "deleteCollectionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Delete collection",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}",
    "method": "getCollectionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Get collection",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Collection"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}",
    "method": "updateCollectionById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update collection",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "documentSecurity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Collection"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes",
    "method": "listCollectionAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List attributes",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, size, required, array, status, error"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Attributes List"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/boolean",
    "method": "createBooleanAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create boolean attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeBoolean"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/boolean/{key}",
    "method": "updateBooleanAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update boolean attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key."
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeBoolean"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/datetime",
    "method": "createDatetimeAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create datetime attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeDatetime"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/datetime/{key}",
    "method": "updateDatetimeAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update dateTime attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key."
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeDatetime"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/email",
    "method": "createEmailAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create email attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeEmail"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/email/{key}",
    "method": "updateEmailAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update email attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key."
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeEmail"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/enum",
    "method": "createEnumAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create enum attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "elements",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeEnum"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/enum/{key}",
    "method": "updateEnumAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update enum attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key."
      },
      {
        "name": "elements",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeEnum"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/float",
    "method": "createFloatAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create float attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "min",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "max",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "default",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeFloat"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/float/{key}",
    "method": "updateFloatAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update float attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key."
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "min",
        "schema": "number",
        "required": true,
        "description": ""
      },
      {
        "name": "max",
        "schema": "number",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "number",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeFloat"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/integer",
    "method": "createIntegerAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create integer attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "min",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "max",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "default",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeInteger"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/integer/{key}",
    "method": "updateIntegerAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update integer attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key."
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "min",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "max",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "integer",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeInteger"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/ip",
    "method": "createIpAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create IP address attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeIP"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/ip/{key}",
    "method": "updateIpAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update IP address attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key."
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeIP"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/relationship",
    "method": "createRelationshipAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create relationship attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "relatedCollectionId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "twoWay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "twoWayKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "onDelete",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeRelationship"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/string",
    "method": "createStringAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create string attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "encrypt",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeString"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/string/{key}",
    "method": "updateStringAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update string attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key."
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeString"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/url",
    "method": "createUrlAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create URL attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "array",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "AttributeURL"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/url/{key}",
    "method": "updateUrlAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update URL attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key."
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "default",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeURL"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/{key}",
    "method": "deleteAttributeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Delete attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/{key}",
    "method": "getAttributeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Get attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key."
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
    "url": "/databases/{databaseId}/collections/{collectionId}/attributes/{key}/relationship",
    "method": "updateRelationshipAttribute",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update relationship attribute",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Attribute Key."
      },
      {
        "name": "onDelete",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AttributeRelationship"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/documents",
    "method": "listCollectionDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List documents",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Documents List"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/documents",
    "method": "createDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create document",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents."
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Document"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}",
    "method": "deleteDocumentById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Delete document",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "Document ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}",
    "method": "getDocumentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Get document",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "Document ID."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Document"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}",
    "method": "updateDocumentById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Update document",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID."
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "Document ID."
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Document"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/indexes",
    "method": "listIndexes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List indexes",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Indexes List"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/indexes",
    "method": "createIndex",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Create index",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "orders",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Index"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/indexes/{key}",
    "method": "deleteIndex",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Delete index",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Index Key."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/databases/{databaseId}/collections/{collectionId}/indexes/{key}",
    "method": "getIndexById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "Get index",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID."
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Index Key."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Index"
      }
    ]
  },
  {
    "url": "/functions",
    "method": "listAllFunctions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "List functions",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deployment, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Functions List"
      }
    ]
  },
  {
    "url": "/functions",
    "method": "createNewFunction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Create function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "runtime",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "execute",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timeout",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "logging",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "entrypoint",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "commands",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "installationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerRepositoryId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerBranch",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerSilentMode",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "providerRootDirectory",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "templateRepository",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "templateOwner",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "templateRootDirectory",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "templateBranch",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Function"
      }
    ]
  },
  {
    "url": "/functions/runtimes",
    "method": "listRuntimes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "List runtimes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Runtimes List"
      }
    ]
  },
  {
    "url": "/functions/{functionId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Delete function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/functions/{functionId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Get function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Function"
      }
    ]
  },
  {
    "url": "/functions/{functionId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Update function",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "runtime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "execute",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timeout",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "logging",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "entrypoint",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "commands",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "installationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerRepositoryId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerBranch",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerSilentMode",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "providerRootDirectory",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Function"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments",
    "method": "listDeployments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "List deployments",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: size, buildId, activate, entrypoint, commands"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Deployments List"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments",
    "method": "createDeploymentFunctionCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Create deployment",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID."
      },
      {
        "name": "entrypoint",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "commands",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "activate",
        "schema": "boolean",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Deployment"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments/{deploymentId}",
    "method": "deleteDeployment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Delete deployment",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID."
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "Deployment ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments/{deploymentId}",
    "method": "getDeploymentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Get deployment",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID."
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "Deployment ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Deployment"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments/{deploymentId}",
    "method": "updateDeploymentFunctionCode",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Update function deployment",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID."
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "Deployment ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Function"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments/{deploymentId}/builds/{buildId}",
    "method": "createBuild",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Create build",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID."
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "Deployment ID."
      },
      {
        "name": "buildId",
        "schema": "string",
        "required": true,
        "description": "Build unique ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/deployments/{deploymentId}/download",
    "method": "getDeploymentContents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Download Deployment",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID."
      },
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "Deployment ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/executions",
    "method": "listExecutions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "List executions",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Executions List"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/executions",
    "method": "triggerExecution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Create execution",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID."
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "async",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "path",
        "schema": "string",
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headers",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Execution"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/executions/{executionId}",
    "method": "getExecutionLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Get execution",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID."
      },
      {
        "name": "executionId",
        "schema": "string",
        "required": true,
        "description": "Execution ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Execution"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/variables",
    "method": "listVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "List variables",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function unique ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Variables List"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/variables",
    "method": "createVariable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Create variable",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function unique ID."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Variable"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/variables/{variableId}",
    "method": "deleteVariableById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Delete variable",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function unique ID."
      },
      {
        "name": "variableId",
        "schema": "string",
        "required": true,
        "description": "Variable unique ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/variables/{variableId}",
    "method": "getVariableById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Get variable",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function unique ID."
      },
      {
        "name": "variableId",
        "schema": "string",
        "required": true,
        "description": "Variable unique ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Variable"
      }
    ]
  },
  {
    "url": "/functions/{functionId}/variables/{variableId}",
    "method": "updateVariableById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Update variable",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function unique ID."
      },
      {
        "name": "variableId",
        "schema": "string",
        "required": true,
        "description": "Variable unique ID."
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Variable"
      }
    ]
  },
  {
    "url": "/graphql",
    "method": "executeMutation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "graphql",
    "typeScriptTag": "graphql",
    "description": "GraphQL endpoint",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Any"
      }
    ]
  },
  {
    "url": "/graphql/mutation",
    "method": "executeMutation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "graphql",
    "typeScriptTag": "graphql",
    "description": "GraphQL endpoint",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Any"
      }
    ]
  },
  {
    "url": "/health",
    "method": "checkServerStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get HTTP",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/anti-virus",
    "method": "checkAntivirusStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get antivirus",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Antivirus"
      }
    ]
  },
  {
    "url": "/health/cache",
    "method": "checkCacheStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get cache",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/certificate",
    "method": "getSslCert",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get the SSL certificate for a domain",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": false,
        "description": "string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Certificate"
      }
    ]
  },
  {
    "url": "/health/db",
    "method": "checkDbStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get DB",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/pubsub",
    "method": "checkPubsubServerStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get pubsub",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/queue",
    "method": "getQueueStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get queue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/queue/builds",
    "method": "getBuildsQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get builds queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/certificates",
    "method": "queueCertificatesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get certificates queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/databases",
    "method": "getDatabasesQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get databases queue",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Queue name for which to check the queue size"
      },
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/deletes",
    "method": "getDeletesQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get deletes queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/failed/{name}",
    "method": "getFailedJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get number of failed queue jobs",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The name of the queue"
      },
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/functions",
    "method": "functionsQueueCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get functions queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/logs",
    "method": "getQueueLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get logs queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/mails",
    "method": "getMailQueueSize",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get mails queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/messaging",
    "method": "getQueueMessaging",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get messaging queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/migrations",
    "method": "getMigrationsQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get migrations queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/usage",
    "method": "getQueueUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get usage queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/usage-dump",
    "method": "getQueueUsageDump",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get usage dump queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/queue/webhooks",
    "method": "getWebhooksQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get webhooks queue",
    "parameters": [
      {
        "name": "threshold",
        "schema": "integer",
        "required": false,
        "description": "Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Queue"
      }
    ]
  },
  {
    "url": "/health/storage",
    "method": "checkStorageStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get storage",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/storage/local",
    "method": "checkLocalStorageStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get local storage",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Status"
      }
    ]
  },
  {
    "url": "/health/time",
    "method": "getTimeInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "health",
    "typeScriptTag": "health",
    "description": "Get time",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Health Time"
      }
    ]
  },
  {
    "url": "/locale",
    "method": "getUserLocaleData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "Get user locale",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Locale"
      }
    ]
  },
  {
    "url": "/locale/codes",
    "method": "listCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List Locale Codes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Locale codes list"
      }
    ]
  },
  {
    "url": "/locale/continents",
    "method": "listContinents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List continents",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Continents List"
      }
    ]
  },
  {
    "url": "/locale/countries",
    "method": "listCountries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List countries",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Countries List"
      }
    ]
  },
  {
    "url": "/locale/countries/eu",
    "method": "listEuCountries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List EU countries",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Countries List"
      }
    ]
  },
  {
    "url": "/locale/countries/phones",
    "method": "listPhoneCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List countries phone codes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Phones List"
      }
    ]
  },
  {
    "url": "/locale/currencies",
    "method": "listCurrenciesData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List currencies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Currencies List"
      }
    ]
  },
  {
    "url": "/locale/languages",
    "method": "getLanguageList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locale",
    "typeScriptTag": "locale",
    "description": "List languages",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Languages List"
      }
    ]
  },
  {
    "url": "/messaging/messages",
    "method": "listMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List messages",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: scheduledAt, deliveredAt, deliveredTotal, status, description, providerType"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Message list"
      }
    ]
  },
  {
    "url": "/messaging/messages/email",
    "method": "createEmailMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create email",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "topics",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "targets",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bcc",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "html",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/email/{messageId}",
    "method": "updateEmailById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update email",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID."
      },
      {
        "name": "topics",
        "schema": "array",
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "description": ""
      },
      {
        "name": "targets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "html",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "cc",
        "schema": "array",
        "description": ""
      },
      {
        "name": "bcc",
        "schema": "array",
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/push",
    "method": "createPushNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create push notification",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "topics",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "targets",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "image",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sound",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "badge",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/push/{messageId}",
    "method": "updatePushNotification",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update push notification",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "topics",
        "schema": "array",
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "description": ""
      },
      {
        "name": "targets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "image",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sound",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "badge",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/sms",
    "method": "createSmsMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create SMS",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "topics",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "targets",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/sms/{messageId}",
    "method": "updateSmsMessage",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update SMS",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID."
      },
      {
        "name": "topics",
        "schema": "array",
        "description": ""
      },
      {
        "name": "users",
        "schema": "array",
        "description": ""
      },
      {
        "name": "targets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "scheduledAt",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/{messageId}",
    "method": "deleteMessageById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Delete message",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/messaging/messages/{messageId}",
    "method": "getMessageById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Get message",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Message"
      }
    ]
  },
  {
    "url": "/messaging/messages/{messageId}/logs",
    "method": "getMessageLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List message logs",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/messaging/messages/{messageId}/targets",
    "method": "listMessageTargets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List message targets",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Target list"
      }
    ]
  },
  {
    "url": "/messaging/providers",
    "method": "listProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List providers",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider list"
      }
    ]
  },
  {
    "url": "/messaging/providers/apns",
    "method": "createApnsProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create APNS provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "authKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "authKeyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "teamId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bundleId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sandbox",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/apns/{providerId}",
    "method": "updateApnsProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update APNS provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "authKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authKeyId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bundleId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sandbox",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/fcm",
    "method": "createFcmProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create FCM provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "serviceAccountJSON",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/fcm/{providerId}",
    "method": "updateFcmProviderById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update FCM provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "serviceAccountJSON",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/mailgun",
    "method": "createProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Mailgun provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isEuRegion",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fromName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyToName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyToEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/mailgun/{providerId}",
    "method": "updateMailgunProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Mailgun provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isEuRegion",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "fromName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyToEmail",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/msg91",
    "method": "createMsg91Provider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Msg91 provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "senderId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "authKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/msg91/{providerId}",
    "method": "updateMsg91Provider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Msg91 provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "senderId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/sendgrid",
    "method": "createSendgridProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Sendgrid provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyToName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyToEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/sendgrid/{providerId}",
    "method": "updateProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Sendgrid provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyToEmail",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/smtp",
    "method": "createSmtpProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create SMTP provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "host",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "port",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "encryption",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "autoTLS",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "mailer",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyToName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyToEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/smtp/{providerId}",
    "method": "updateProviderById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update SMTP provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "host",
        "schema": "string",
        "description": ""
      },
      {
        "name": "port",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "encryption",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoTLS",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "mailer",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyToName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyToEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/telesign",
    "method": "createTelesignProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Telesign provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/telesign/{providerId}",
    "method": "updateTelesignProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Telesign provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/textmagic",
    "method": "createTextmagicProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Textmagic provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/textmagic/{providerId}",
    "method": "updateTextmagicProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Textmagic provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/twilio",
    "method": "createTwilioProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Twilio provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountSid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "authToken",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/twilio/{providerId}",
    "method": "updateTwilioProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Twilio provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "accountSid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authToken",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/vonage",
    "method": "createVonageProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create Vonage provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiSecret",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/vonage/{providerId}",
    "method": "updateVonageProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update Vonage provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "apiKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "apiSecret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/{providerId}",
    "method": "deleteProviderById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Delete provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/messaging/providers/{providerId}",
    "method": "getProviderById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Get provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider"
      }
    ]
  },
  {
    "url": "/messaging/providers/{providerId}/logs",
    "method": "listProviderLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List provider logs",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Provider ID."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/messaging/subscribers/{subscriberId}/logs",
    "method": "listSubscriberLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List subscriber logs",
    "parameters": [
      {
        "name": "subscriberId",
        "schema": "string",
        "required": true,
        "description": "Subscriber ID."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/messaging/topics",
    "method": "listTopics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List topics",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, description, emailTotal, smsTotal, pushTotal"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Topic list"
      }
    ]
  },
  {
    "url": "/messaging/topics",
    "method": "createTopic",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create topic",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "subscribe",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Topic"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}",
    "method": "deleteTopicById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Delete topic",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}",
    "method": "getTopicById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Get topic",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Topic"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}",
    "method": "updateTopicById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Update topic",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribe",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Topic"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}/logs",
    "method": "listTopicLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List topic logs",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}/subscribers",
    "method": "listSubscribers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "List subscribers",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID. The topic ID subscribed to."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Subscriber list"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}/subscribers",
    "method": "createSubscriber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create subscriber",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID. The topic ID to subscribe to."
      },
      {
        "name": "subscriberId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Subscriber"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}/subscribers/{subscriberId}",
    "method": "deleteSubscriberById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Delete subscriber",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID. The topic ID subscribed to."
      },
      {
        "name": "subscriberId",
        "schema": "string",
        "required": true,
        "description": "Subscriber ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/messaging/topics/{topicId}/subscribers/{subscriberId}",
    "method": "getSubscriberById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Get subscriber",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID. The topic ID subscribed to."
      },
      {
        "name": "subscriberId",
        "schema": "string",
        "required": true,
        "description": "Subscriber ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Subscriber"
      }
    ]
  },
  {
    "url": "/storage/buckets",
    "method": "listBuckets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "List buckets",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: enabled, name, fileSecurity, maximumFileSize, encryption, antivirus"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Buckets List"
      }
    ]
  },
  {
    "url": "/storage/buckets",
    "method": "createNewBucket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Create bucket",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fileSecurity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "maximumFileSize",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "allowedFileExtensions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "compression",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "encryption",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "antivirus",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Bucket"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}",
    "method": "deleteBucketById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Delete bucket",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Bucket unique ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}",
    "method": "getBucketById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Get bucket",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Bucket unique ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Bucket"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}",
    "method": "updateBucketById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Update bucket",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Bucket unique ID."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fileSecurity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "maximumFileSize",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "allowedFileExtensions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "compression",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "encryption",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "antivirus",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Bucket"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files",
    "method": "listFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "List files",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket)."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Files List"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files",
    "method": "createFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Create file",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket)."
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "File"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files/{fileId}",
    "method": "deleteFileById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Delete File",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket)."
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files/{fileId}",
    "method": "getFileById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Get file",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket)."
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files/{fileId}",
    "method": "updateFileById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Update file",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket)."
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File unique ID."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files/{fileId}/download",
    "method": "getFileDownload",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Get file for download",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket)."
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files/{fileId}/preview",
    "method": "getFilePreviewImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Get file preview",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket)."
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID"
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Resize preview image width, Pass an integer between 0 to 4000."
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Resize preview image height, Pass an integer between 0 to 4000."
      },
      {
        "name": "gravity",
        "schema": "string",
        "required": false,
        "description": "Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right"
      },
      {
        "name": "quality",
        "schema": "integer",
        "required": false,
        "description": "Preview image quality. Pass an integer between 0 to 100. Defaults to 100."
      },
      {
        "name": "borderWidth",
        "schema": "integer",
        "required": false,
        "description": "Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0."
      },
      {
        "name": "borderColor",
        "schema": "string",
        "required": false,
        "description": "Preview image border color. Use a valid HEX color, no # is needed for prefix."
      },
      {
        "name": "borderRadius",
        "schema": "integer",
        "required": false,
        "description": "Preview image border radius in pixels. Pass an integer between 0 to 4000."
      },
      {
        "name": "opacity",
        "schema": "number",
        "required": false,
        "description": "Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1."
      },
      {
        "name": "rotation",
        "schema": "integer",
        "required": false,
        "description": "Preview image rotation in degrees. Pass an integer between -360 and 360."
      },
      {
        "name": "background",
        "schema": "string",
        "required": false,
        "description": "Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix."
      },
      {
        "name": "output",
        "schema": "string",
        "required": false,
        "description": "Output format type (jpeg, jpg, png, gif and webp)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image"
      }
    ]
  },
  {
    "url": "/storage/buckets/{bucketId}/files/{fileId}/view",
    "method": "getFileView",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Get file for view",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket)."
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File"
      }
    ]
  },
  {
    "url": "/teams",
    "method": "getUserTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "List teams",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Teams List"
      }
    ]
  },
  {
    "url": "/teams",
    "method": "createNewTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Create team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Team"
      }
    ]
  },
  {
    "url": "/teams/{teamId}",
    "method": "removeTeamById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Delete team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/teams/{teamId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Get team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Team"
      }
    ]
  },
  {
    "url": "/teams/{teamId}",
    "method": "updateNameById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Update name",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Team"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/memberships",
    "method": "listMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "List team memberships",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Memberships List"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/memberships",
    "method": "createMembershipRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Create team membership",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID."
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Membership"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/memberships/{membershipId}",
    "method": "deleteMembership",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Delete team membership",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID."
      },
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "Membership ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/memberships/{membershipId}",
    "method": "getMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Get team membership",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID."
      },
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "Membership ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Membership"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/memberships/{membershipId}",
    "method": "updateMembershipRoles",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Update membership",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID."
      },
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "Membership ID."
      },
      {
        "name": "roles",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Membership"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/memberships/{membershipId}/status",
    "method": "updateMembershipStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Update team membership status",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID."
      },
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "Membership ID."
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Membership"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/prefs",
    "method": "getPrefsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Get team preferences",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Preferences"
      }
    ]
  },
  {
    "url": "/teams/{teamId}/prefs",
    "method": "updatePrefsById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Update preferences",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID."
      },
      {
        "name": "prefs",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Preferences"
      }
    ]
  },
  {
    "url": "/users",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List users",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Users List"
      }
    ]
  },
  {
    "url": "/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/argon2",
    "method": "createArgon2User",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with Argon2 password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/bcrypt",
    "method": "createBcryptUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with bcrypt password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/identities",
    "method": "listIdentities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List Identities",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Identities List"
      }
    ]
  },
  {
    "url": "/users/identities/{identityId}",
    "method": "deleteIdentityById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete identity",
    "parameters": [
      {
        "name": "identityId",
        "schema": "string",
        "required": true,
        "description": "Identity ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/users/md5",
    "method": "createMd5User",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with MD5 password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/phpass",
    "method": "createPhpassUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with PHPass password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/scrypt",
    "method": "createScryptUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with Scrypt password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "passwordSalt",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "passwordCpu",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "passwordMemory",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "passwordParallel",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "passwordLength",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/scrypt-modified",
    "method": "createScryptModifiedUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with Scrypt modified password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "passwordSalt",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "passwordSaltSeparator",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "passwordSignerKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/sha",
    "method": "createShaUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create user with SHA password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "passwordVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}",
    "method": "deleteUserById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/users/{userId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/email",
    "method": "updateEmailById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update email",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/labels",
    "method": "updateLabelsById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update user labels",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "labels",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/logs",
    "method": "listUserLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List user logs",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Logs List"
      }
    ]
  },
  {
    "url": "/users/{userId}/memberships",
    "method": "listMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List user memberships",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Memberships List"
      }
    ]
  },
  {
    "url": "/users/{userId}/mfa",
    "method": "updateMfaStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update MFA",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "mfa",
        "schema": "boolean",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/mfa/authenticators/{type}",
    "method": "deleteAuthenticator",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete Authenticator",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of authenticator."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/mfa/factors",
    "method": "listFactors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List Factors",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFAFactors"
      }
    ]
  },
  {
    "url": "/users/{userId}/mfa/recovery-codes",
    "method": "getMfaRecoveryCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get MFA Recovery Codes",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFA Recovery Codes"
      }
    ]
  },
  {
    "url": "/users/{userId}/mfa/recovery-codes",
    "method": "createMfaRecoveryCodes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create MFA Recovery Codes",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "MFA Recovery Codes"
      }
    ]
  },
  {
    "url": "/users/{userId}/mfa/recovery-codes",
    "method": "regenerateMfaRecoveryCodes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Regenerate MFA Recovery Codes",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MFA Recovery Codes"
      }
    ]
  },
  {
    "url": "/users/{userId}/name",
    "method": "updateUserByName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update name",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/password",
    "method": "updatePasswordById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update password",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/phone",
    "method": "updatePhoneById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update phone",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "number",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/prefs",
    "method": "getUserPrefs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get user preferences",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Preferences"
      }
    ]
  },
  {
    "url": "/users/{userId}/prefs",
    "method": "updatePreferencesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update user preferences",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "prefs",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Preferences"
      }
    ]
  },
  {
    "url": "/users/{userId}/sessions",
    "method": "deleteUserSessions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete user sessions",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/users/{userId}/sessions",
    "method": "listSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List user sessions",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sessions List"
      }
    ]
  },
  {
    "url": "/users/{userId}/sessions",
    "method": "createSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create session",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Session"
      }
    ]
  },
  {
    "url": "/users/{userId}/sessions/{sessionId}",
    "method": "deleteSessionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete user session",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Session ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/users/{userId}/status",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update user status",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "status",
        "schema": "boolean",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/targets",
    "method": "listTargets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List User Targets",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Target list"
      }
    ]
  },
  {
    "url": "/users/{userId}/targets",
    "method": "createTargetMessaging",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create User Target",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "providerType",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "providerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Target"
      }
    ]
  },
  {
    "url": "/users/{userId}/targets/{targetId}",
    "method": "deleteTargetMessaging",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete user target",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "Target ID."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/users/{userId}/targets/{targetId}",
    "method": "getUserTargetById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get User Target",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "Target ID."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Target"
      }
    ]
  },
  {
    "url": "/users/{userId}/targets/{targetId}",
    "method": "updateTargetMessaging",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update User target",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "Target ID."
      },
      {
        "name": "identifier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "providerId",
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
        "description": "Target"
      }
    ]
  },
  {
    "url": "/users/{userId}/tokens",
    "method": "createTokenSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create token",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "length",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "expire",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Token"
      }
    ]
  },
  {
    "url": "/users/{userId}/verification",
    "method": "updateEmailVerification",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update email verification",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "emailVerification",
        "schema": "boolean",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  },
  {
    "url": "/users/{userId}/verification/phone",
    "method": "updatePhoneVerification",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update phone verification",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID."
      },
      {
        "name": "phoneVerification",
        "schema": "boolean",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Appwrite"
      apiBaseUrl="https://cloud.appwrite.io/v1"
      apiVersion="1.5.0"
      endpoints={194}
      sdkMethods={259}
      schemas={207}
      parameters={824}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/server/openapi.yaml"
    />
  );
}
  