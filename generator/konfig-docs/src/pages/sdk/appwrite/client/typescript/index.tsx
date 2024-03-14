import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AppwriteClientTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="appwrite-client-typescript-sdk"
      metaDescription={`Appwrite's open-source development platform lets you build any application at any scale, own your data, and use your preferred coding languages and tools.

Build like a team of hundreds.`}
      company="Appwrite"
      serviceName="Client"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/client/logo.png"
      companyKebabCase="appwrite"
      clientNameCamelCase="appwriteClient"
      homepage="appwrite.io"
      lastUpdated={new Date("2024-03-14T08:10:33.678Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/client/favicon.png"
      contactUrl="https://appwrite.io/support"
      contactEmail="team@appwrite.io"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/client/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["developer_tools","open_source","platform","storage","auth","functions","database","db"]}
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
    "method": "registerUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create account",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
    "method": "updateUserEmail",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update email",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry",
        "default": []
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
        "description": "Identity ID.",
        "example": "IDENTITYID"
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
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset",
        "default": []
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
        "description": "",
        "example": true
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
    "method": "deleteAuthenticator",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Delete Authenticator",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of authenticator.",
        "example": "TYPE"
      },
      {
        "name": "otp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OTP"
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
    "method": "addAuthenticator",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Add Authenticator",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of authenticator. Must be `totp`",
        "example": "TYPE"
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
        "description": "Type of authenticator.",
        "example": "TYPE"
      },
      {
        "name": "otp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OTP"
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
    "method": "createMfaChallenge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create 2FA Challenge",
    "parameters": [
      {
        "name": "factor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FACTOR"
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
        "description": "",
        "example": "CHALLENGEID"
      },
      {
        "name": "otp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OTP"
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
    "method": "createMfaRecoveryCodes",
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
        "description": "",
        "example": "NAME"
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
    "method": "updatePassword",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update password",
    "parameters": [
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
        "description": "",
        "example": "PHONE"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
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
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
    "method": "removeSessions",
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
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
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
    "url": "/account/sessions/oauth2/{provider}",
    "method": "createOAuth2Session",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create OAuth2 session",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.",
        "example": "PROVIDER"
      },
      {
        "name": "success",
        "schema": "string",
        "required": false,
        "description": "URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.",
        "default": ""
      },
      {
        "name": "failure",
        "schema": "string",
        "required": false,
        "description": "URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.",
        "default": ""
      },
      {
        "name": "scopes",
        "schema": "array",
        "required": false,
        "description": "A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.",
        "default": []
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
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
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
    "method": "createSessionFromToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create session",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
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
        "description": "Session ID. Use the string 'current' to delete the current device session.",
        "example": "SESSIONID"
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
    "method": "getSession",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Get session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Session ID. Use the string 'current' to get the current device session.",
        "example": "SESSIONID"
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
        "description": "Session ID. Use the string 'current' to update the current device session.",
        "example": "SESSIONID"
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
    "method": "blockUserStatus",
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
    "url": "/account/targets/push",
    "method": "createPushTarget",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create push target",
    "parameters": [
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETID"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      },
      {
        "name": "providerId",
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
    "url": "/account/targets/{targetId}/push",
    "method": "deletePushTarget",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Delete push target",
    "parameters": [
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "Target ID.",
        "example": "TARGETID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Target"
      }
    ]
  },
  {
    "url": "/account/targets/{targetId}/push",
    "method": "updatePushTarget",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Update push target",
    "parameters": [
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "Target ID.",
        "example": "TARGETID"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
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
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
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
        "description": "",
        "example": "USERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
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
        "description": "OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.",
        "example": "PROVIDER"
      },
      {
        "name": "success",
        "schema": "string",
        "required": false,
        "description": "URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.",
        "default": ""
      },
      {
        "name": "failure",
        "schema": "string",
        "required": false,
        "description": "URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.",
        "default": ""
      },
      {
        "name": "scopes",
        "schema": "array",
        "required": false,
        "description": "A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.",
        "default": []
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
        "description": "",
        "example": "USERID"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE"
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
        "description": "",
        "example": "URL"
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
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "account",
    "typeScriptTag": "account",
    "description": "Create email verification (confirmation)",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
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
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
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
    "method": "getBrowserIconByCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get browser icon",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Browser Code.",
        "example": "CODE"
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Image width. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 100
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Image height. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 100
      },
      {
        "name": "quality",
        "schema": "integer",
        "required": false,
        "description": "Image quality. Pass an integer between 0 to 100. Defaults to 100.",
        "default": 100
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
        "description": "Credit Card Code. Possible values: amex, argencard, cabal, censosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, union-china-pay, visa, mir, maestro.",
        "example": "CODE"
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Image width. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 100
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Image height. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 100
      },
      {
        "name": "quality",
        "schema": "integer",
        "required": false,
        "description": "Image quality. Pass an integer between 0 to 100. Defaults to 100.",
        "default": 100
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
        "description": "Website URL which you want to fetch the favicon from.",
        "example": "URL"
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
    "method": "getCountryFlagByCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get country flag",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Country Code. ISO Alpha-2 country code format.",
        "example": "CODE"
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Image width. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 100
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Image height. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 100
      },
      {
        "name": "quality",
        "schema": "integer",
        "required": false,
        "description": "Image quality. Pass an integer between 0 to 100. Defaults to 100.",
        "default": 100
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
        "description": "Image URL which you want to crop.",
        "example": "URL"
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Resize preview image width, Pass an integer between 0 to 2000. Defaults to 400.",
        "default": 400
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Resize preview image height, Pass an integer between 0 to 2000. Defaults to 400.",
        "default": 400
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
        "description": "Full Name. When empty, current user name or email will be used. Max length: 128 chars.",
        "default": ""
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Image width. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 500
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Image height. Pass an integer between 0 to 2000. Defaults to 100.",
        "default": 500
      },
      {
        "name": "background",
        "schema": "string",
        "required": false,
        "description": "Changes background color. By default a random color will be picked and stay will persistent to the given name.",
        "default": ""
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
    "method": "generateQrCodeImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "avatars",
    "typeScriptTag": "avatars",
    "description": "Get QR code",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "Plain text to be converted to QR code image.",
        "example": "TEXT"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "QR code size. Pass an integer between 1 to 1000. Defaults to 400.",
        "default": 400
      },
      {
        "name": "margin",
        "schema": "integer",
        "required": false,
        "description": "Margin from edge. Pass an integer between 0 to 10. Defaults to 1.",
        "default": 1
      },
      {
        "name": "download",
        "schema": "boolean",
        "required": false,
        "description": "Return resulting image with 'Content-Disposition: attachment ' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0.",
        "default": false
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
    "url": "/databases/{databaseId}/collections/{collectionId}/documents",
    "method": "listUserDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "databases",
    "typeScriptTag": "databases",
    "description": "List documents",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.",
        "default": []
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
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.",
        "example": "COLLECTIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENTID"
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
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "Document ID.",
        "example": "DOCUMENTID"
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
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).",
        "example": "COLLECTIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "Document ID.",
        "example": "DOCUMENTID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.",
        "default": []
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
        "description": "Database ID.",
        "example": "DATABASEID"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "Collection ID.",
        "example": "COLLECTIONID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "Document ID.",
        "example": "DOCUMENTID"
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
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
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
    "method": "triggerFunctionExecution",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Create execution",
    "parameters": [
      {
        "name": "functionId",
        "schema": "string",
        "required": true,
        "description": "Function ID.",
        "example": "FUNCTIONID"
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
        "description": "Function ID.",
        "example": "FUNCTIONID"
      },
      {
        "name": "executionId",
        "schema": "string",
        "required": true,
        "description": "Execution ID.",
        "example": "EXECUTIONID"
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
    "method": "executeMutationOperation",
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
    "url": "/locale",
    "method": "getUserLocale",
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
    "method": "getEuCountries",
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
    "method": "listCountriesPhones",
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
    "method": "getCurrencies",
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
    "method": "listLanguages",
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
    "url": "/messaging/topics/{topicId}/subscribers",
    "method": "addNewSubscriber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messaging",
    "typeScriptTag": "messaging",
    "description": "Create subscriber",
    "parameters": [
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": "Topic ID. The topic ID to subscribe to.",
        "example": "TOPICID"
      },
      {
        "name": "subscriberId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBSCRIBERID"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETID"
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
        "description": "Topic ID. The topic ID subscribed to.",
        "example": "TOPICID"
      },
      {
        "name": "subscriberId",
        "schema": "string",
        "required": true,
        "description": "Subscriber ID.",
        "example": "SUBSCRIBERID"
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
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
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
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEID"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
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
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID.",
        "example": "FILEID"
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
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID.",
        "example": "FILEID"
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
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File unique ID.",
        "example": "FILEID"
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
        "description": "Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID.",
        "example": "FILEID"
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
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID",
        "example": "FILEID"
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "Resize preview image width, Pass an integer between 0 to 4000.",
        "default": 0
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "Resize preview image height, Pass an integer between 0 to 4000.",
        "default": 0
      },
      {
        "name": "gravity",
        "schema": "string",
        "required": false,
        "description": "Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right",
        "default": "center"
      },
      {
        "name": "quality",
        "schema": "integer",
        "required": false,
        "description": "Preview image quality. Pass an integer between 0 to 100. Defaults to 100.",
        "default": 100
      },
      {
        "name": "borderWidth",
        "schema": "integer",
        "required": false,
        "description": "Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.",
        "default": 0
      },
      {
        "name": "borderColor",
        "schema": "string",
        "required": false,
        "description": "Preview image border color. Use a valid HEX color, no # is needed for prefix.",
        "default": ""
      },
      {
        "name": "borderRadius",
        "schema": "integer",
        "required": false,
        "description": "Preview image border radius in pixels. Pass an integer between 0 to 4000.",
        "default": 0
      },
      {
        "name": "opacity",
        "schema": "number",
        "required": false,
        "description": "Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.",
        "default": 1
      },
      {
        "name": "rotation",
        "schema": "integer",
        "required": false,
        "description": "Preview image rotation in degrees. Pass an integer between -360 and 360.",
        "default": 0
      },
      {
        "name": "background",
        "schema": "string",
        "required": false,
        "description": "Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.",
        "default": ""
      },
      {
        "name": "output",
        "schema": "string",
        "required": false,
        "description": "Output format type (jpeg, jpg, png, gif and webp).",
        "default": ""
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
    "method": "getFileForView",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "storage",
    "typeScriptTag": "storage",
    "description": "Get file for view",
    "parameters": [
      {
        "name": "bucketId",
        "schema": "string",
        "required": true,
        "description": "Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).",
        "example": "BUCKETID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID.",
        "example": "FILEID"
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
    "method": "getUserMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "List teams",
    "parameters": [
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
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
        "description": "",
        "example": "TEAMID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
    "method": "removeTeam",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Delete team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
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
        "description": "Team ID.",
        "example": "TEAMID"
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
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "queries",
        "schema": "array",
        "required": false,
        "description": "Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm",
        "default": []
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term to filter your list results. Max length: 256 chars.",
        "default": ""
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
    "method": "createMembership",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Create team membership",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
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
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "Membership ID.",
        "example": "MEMBERSHIPID"
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
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "Membership ID.",
        "example": "MEMBERSHIPID"
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
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "Membership ID.",
        "example": "MEMBERSHIPID"
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
        "description": "Team ID.",
        "example": "TEAMID"
      },
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "Membership ID.",
        "example": "MEMBERSHIPID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRET"
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
    "method": "getPrefs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "teams",
    "typeScriptTag": "teams",
    "description": "Get team preferences",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID.",
        "example": "TEAMID"
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
        "description": "Team ID.",
        "example": "TEAMID"
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
  }
]
    }
      language="TypeScript"
      apiTitle="Appwrite"
      apiBaseUrl="https://cloud.appwrite.io/v1"
      apiVersion="1.5.0"
      endpoints={67}
      sdkMethods={95}
      schemas={86}
      parameters={193}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/appwrite/client/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/appwrite/client/openapi.yaml"
      developerDocumentation="appwrite.io/docs/references#api"
    />
  );
}
  