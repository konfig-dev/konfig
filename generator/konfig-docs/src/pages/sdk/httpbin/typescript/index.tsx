import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function HttpbinTypeScriptSdk() {
  return (
    <Sdk
      sdkName="httpbin-typescript-sdk"
      metaDescription="httpbin is a simple HTTP request and response service that provides a variety of endpoints to test HTTP methods, headers, and status codes. It is useful for developers to debug and test their HTTP client libraries and tools. httpbin allows users to simulate different scenarios and observe the behavior of their HTTP requests in a controlled environment."
      company="httpbin"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/httpbin/logo.svg"
      clientNameCamelCase="httpbin"
      homepage="httpbin.org"
      lastUpdated={new Date("2024-03-08T22:02:35.788Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/httpbin/favicon.png"
      contactUrl="https://kennethreitz.org"
      contactEmail="me@kennethreitz.org"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/httpbin/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/absolute-redirect/{n}",
    "method": "absolutelyRedirectsN",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Redirects",
    "typeScriptTag": "redirects",
    "description": "Absolutely 302 Redirects n times.",
    "parameters": [
      {
        "name": "n",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "A redirection."
      }
    ]
  },
  {
    "url": "/anything",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Anything",
    "typeScriptTag": "anything",
    "description": "Returns anything passed in request data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Anything passed in request"
      }
    ]
  },
  {
    "url": "/anything",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Anything",
    "typeScriptTag": "anything",
    "description": "Returns anything passed in request data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Anything passed in request"
      }
    ]
  },
  {
    "url": "/anything",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Anything",
    "typeScriptTag": "anything",
    "description": "Returns anything passed in request data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Anything passed in request"
      }
    ]
  },
  {
    "url": "/anything",
    "method": "postRequestData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Anything",
    "typeScriptTag": "anything",
    "description": "Returns anything passed in request data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Anything passed in request"
      }
    ]
  },
  {
    "url": "/anything",
    "method": "putRequestData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Anything",
    "typeScriptTag": "anything",
    "description": "Returns anything passed in request data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Anything passed in request"
      }
    ]
  },
  {
    "url": "/anything",
    "method": "getPassedData",
    "httpMethod": HttpMethodsEnum.TRACE,
    "tag": "Anything",
    "typeScriptTag": "anything",
    "description": "Returns anything passed in request data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Anything passed in request"
      }
    ]
  },
  {
    "url": "/anything/{anything}",
    "method": "getAnything",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Anything",
    "typeScriptTag": "anything",
    "description": "Returns anything passed in request data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Anything passed in request"
      }
    ]
  },
  {
    "url": "/anything/{anything}",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Anything",
    "typeScriptTag": "anything",
    "description": "Returns anything passed in request data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Anything passed in request"
      }
    ]
  },
  {
    "url": "/anything/{anything}",
    "method": "updateAnythingData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Anything",
    "typeScriptTag": "anything",
    "description": "Returns anything passed in request data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Anything passed in request"
      }
    ]
  },
  {
    "url": "/anything/{anything}",
    "method": "returnRequestData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Anything",
    "typeScriptTag": "anything",
    "description": "Returns anything passed in request data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Anything passed in request"
      }
    ]
  },
  {
    "url": "/anything/{anything}",
    "method": "returnData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Anything",
    "typeScriptTag": "anything",
    "description": "Returns anything passed in request data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Anything passed in request"
      }
    ]
  },
  {
    "url": "/anything/{anything}",
    "method": "getPassedData",
    "httpMethod": HttpMethodsEnum.TRACE,
    "tag": "Anything",
    "typeScriptTag": "anything",
    "description": "Returns anything passed in request data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Anything passed in request"
      }
    ]
  },
  {
    "url": "/base64/{value}",
    "method": "decodeBase64UrlString",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Decodes base64url-encoded string.",
    "parameters": [
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Decoded base64 content."
      }
    ]
  },
  {
    "url": "/basic-auth/{user}/{passwd}",
    "method": "promptAuthorizationUsingHttpGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Prompts the user for authorization using HTTP Basic Auth.",
    "parameters": [
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "passwd",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sucessful authentication."
      },
      {
        "statusCode": "401",
        "description": "Unsuccessful authentication."
      }
    ]
  },
  {
    "url": "/bearer",
    "method": "promptAuthorization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Prompts the user for authorization using bearer authentication.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sucessful authentication."
      },
      {
        "statusCode": "401",
        "description": "Unsuccessful authentication."
      }
    ]
  },
  {
    "url": "/brotli",
    "method": "brotliGetData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response formats",
    "typeScriptTag": "responseFormats",
    "description": "Returns Brotli-encoded data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Brotli-encoded data."
      }
    ]
  },
  {
    "url": "/bytes/{n}",
    "method": "getRandomBytes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Returns n random bytes generated with given seed",
    "parameters": [
      {
        "name": "n",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Bytes."
      }
    ]
  },
  {
    "url": "/cache",
    "method": "notModifiedGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response inspection",
    "typeScriptTag": "responseInspection",
    "description": "Returns a 304 if an If-Modified-Since header or If-None-Match is present. Returns the same as a GET otherwise.",
    "parameters": [
      {
        "name": "ifModifiedSince",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ifNoneMatch",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Cached response"
      },
      {
        "statusCode": "304",
        "description": "Modified"
      }
    ]
  },
  {
    "url": "/cache/{value}",
    "method": "cacheControlSet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response inspection",
    "typeScriptTag": "responseInspection",
    "description": "Sets a Cache-Control header for n seconds.",
    "parameters": [
      {
        "name": "value",
        "schema": "integer",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Cache control set"
      }
    ]
  },
  {
    "url": "/cookies",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cookies",
    "typeScriptTag": "cookies",
    "description": "Returns cookie data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Set cookies."
      }
    ]
  },
  {
    "url": "/cookies/delete",
    "method": "deleteRedirectToCookieList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cookies",
    "typeScriptTag": "cookies",
    "description": "Deletes cookie(s) as provided by the query string and redirects to cookie list.",
    "parameters": [
      {
        "name": "freeform",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Redirect to cookie list"
      }
    ]
  },
  {
    "url": "/cookies/set",
    "method": "setRedirect",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cookies",
    "typeScriptTag": "cookies",
    "description": "Sets cookie(s) as provided by the query string and redirects to cookie list.",
    "parameters": [
      {
        "name": "freeform",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Redirect to cookie list"
      }
    ]
  },
  {
    "url": "/cookies/set/{name}/{value}",
    "method": "setCookieRedirect",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cookies",
    "typeScriptTag": "cookies",
    "description": "Sets a cookie and redirects to cookie list.",
    "parameters": [
      {
        "name": "name",
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
        "statusCode": "200",
        "description": "Set cookies and redirects to cookie list."
      }
    ]
  },
  {
    "url": "/deflate",
    "method": "deflateDataGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response formats",
    "typeScriptTag": "responseFormats",
    "description": "Returns Deflate-encoded data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Defalte-encoded data."
      }
    ]
  },
  {
    "url": "/delay/{delay}",
    "method": "delayedResponseDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Returns a delayed response (max of 10 seconds).",
    "parameters": [
      {
        "name": "delay",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A delayed response."
      }
    ]
  },
  {
    "url": "/delay/{delay}",
    "method": "delayedResponseGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Returns a delayed response (max of 10 seconds).",
    "parameters": [
      {
        "name": "delay",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A delayed response."
      }
    ]
  },
  {
    "url": "/delay/{delay}",
    "method": "returnDelayedResponse",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Returns a delayed response (max of 10 seconds).",
    "parameters": [
      {
        "name": "delay",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A delayed response."
      }
    ]
  },
  {
    "url": "/delay/{delay}",
    "method": "returnDelayedResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Returns a delayed response (max of 10 seconds).",
    "parameters": [
      {
        "name": "delay",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A delayed response."
      }
    ]
  },
  {
    "url": "/delay/{delay}",
    "method": "returnDelayedResponse",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Returns a delayed response (max of 10 seconds).",
    "parameters": [
      {
        "name": "delay",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A delayed response."
      }
    ]
  },
  {
    "url": "/delay/{delay}",
    "method": "returnDelayedResponseTrace",
    "httpMethod": HttpMethodsEnum.TRACE,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Returns a delayed response (max of 10 seconds).",
    "parameters": [
      {
        "name": "delay",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A delayed response."
      }
    ]
  },
  {
    "url": "/delete",
    "method": "deleteRequestParameters",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "HTTP Methods",
    "typeScriptTag": "httpMethods",
    "description": "The request's DELETE parameters.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request's DELETE parameters."
      }
    ]
  },
  {
    "url": "/deny",
    "method": "deniedPageGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response formats",
    "typeScriptTag": "responseFormats",
    "description": "Returns page denied by robots.txt rules.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Denied message"
      }
    ]
  },
  {
    "url": "/digest-auth/{qop}/{user}/{passwd}",
    "method": "digestAuthPrompt",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Prompts the user for authorization using Digest Auth.",
    "parameters": [
      {
        "name": "qop",
        "schema": "string",
        "required": true,
        "description": "auth or auth-int"
      },
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "passwd",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sucessful authentication."
      },
      {
        "statusCode": "401",
        "description": "Unsuccessful authentication."
      }
    ]
  },
  {
    "url": "/digest-auth/{qop}/{user}/{passwd}/{algorithm}",
    "method": "userAuthorizationDigest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Prompts the user for authorization using Digest Auth + Algorithm.",
    "parameters": [
      {
        "name": "qop",
        "schema": "string",
        "required": true,
        "description": "auth or auth-int"
      },
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "passwd",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "algorithm",
        "schema": "string",
        "required": true,
        "description": "MD5, SHA-256, SHA-512"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sucessful authentication."
      },
      {
        "statusCode": "401",
        "description": "Unsuccessful authentication."
      }
    ]
  },
  {
    "url": "/digest-auth/{qop}/{user}/{passwd}/{algorithm}/{stale_after}",
    "method": "promptAuthorizationUsingDigest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Prompts the user for authorization using Digest Auth + Algorithm.",
    "parameters": [
      {
        "name": "qop",
        "schema": "string",
        "required": true,
        "description": "auth or auth-int"
      },
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "passwd",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "algorithm",
        "schema": "string",
        "required": true,
        "description": "MD5, SHA-256, SHA-512"
      },
      {
        "name": "staleAfter",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sucessful authentication."
      },
      {
        "statusCode": "401",
        "description": "Unsuccessful authentication."
      }
    ]
  },
  {
    "url": "/drip",
    "method": "dripDataOverDuration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Drips data over a duration after an optional initial delay.",
    "parameters": [
      {
        "name": "duration",
        "schema": "number",
        "required": false,
        "description": "The amount of time (in seconds) over which to drip each byte"
      },
      {
        "name": "numbytes",
        "schema": "integer",
        "required": false,
        "description": "The number of bytes to respond with"
      },
      {
        "name": "code",
        "schema": "integer",
        "required": false,
        "description": "The response code that will be returned"
      },
      {
        "name": "delay",
        "schema": "number",
        "required": false,
        "description": "The amount of time (in seconds) to delay before responding"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A dripped response."
      }
    ]
  },
  {
    "url": "/encoding/utf8",
    "method": "utf8BodyGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response formats",
    "typeScriptTag": "responseFormats",
    "description": "Returns a UTF-8 encoded body.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Encoded UTF-8 content."
      }
    ]
  },
  {
    "url": "/etag/{etag}",
    "method": "resourceInspectionGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response inspection",
    "typeScriptTag": "responseInspection",
    "description": "Assumes the resource has the given etag and responds to If-None-Match and If-Match headers appropriately.",
    "parameters": [
      {
        "name": "ifNoneMatch",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ifMatch",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Normal response"
      },
      {
        "statusCode": "412",
        "description": "match"
      }
    ]
  },
  {
    "url": "/get",
    "method": "requestQueryParametersGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "HTTP Methods",
    "typeScriptTag": "httpMethods",
    "description": "The request's query parameters.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request's query parameters."
      }
    ]
  },
  {
    "url": "/gzip",
    "method": "gzipDataGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response formats",
    "typeScriptTag": "responseFormats",
    "description": "Returns GZip-encoded data.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "GZip-encoded data."
      }
    ]
  },
  {
    "url": "/headers",
    "method": "incomingHeadersGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Request inspection",
    "typeScriptTag": "requestInspection",
    "description": "Return the incoming request's HTTP headers.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request's headers."
      }
    ]
  },
  {
    "url": "/hidden-basic-auth/{user}/{passwd}",
    "method": "promptUserAuthorization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Prompts the user for authorization using HTTP Basic Auth.",
    "parameters": [
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "passwd",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sucessful authentication."
      },
      {
        "statusCode": "404",
        "description": "Unsuccessful authentication."
      }
    ]
  },
  {
    "url": "/html",
    "method": "simpleHtmlGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response formats",
    "typeScriptTag": "responseFormats",
    "description": "Returns a simple HTML document.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An HTML page."
      }
    ]
  },
  {
    "url": "/image",
    "method": "getByAcceptHeader",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Returns a simple image of the type suggest by the Accept header.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An image."
      }
    ]
  },
  {
    "url": "/image/jpeg",
    "method": "getJpegImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Returns a simple JPEG image.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A JPEG image."
      }
    ]
  },
  {
    "url": "/image/png",
    "method": "getPngImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Returns a simple PNG image.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A PNG image."
      }
    ]
  },
  {
    "url": "/image/svg",
    "method": "getSvgImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Returns a simple SVG image.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An SVG image."
      }
    ]
  },
  {
    "url": "/image/webp",
    "method": "getWebpImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Returns a simple WEBP image.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A WEBP image."
      }
    ]
  },
  {
    "url": "/ip",
    "method": "ipAddressGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Request inspection",
    "typeScriptTag": "requestInspection",
    "description": "Returns the requester's IP Address.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Requester's IP Address."
      }
    ]
  },
  {
    "url": "/json",
    "method": "simpleJsonGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response formats",
    "typeScriptTag": "responseFormats",
    "description": "Returns a simple JSON document.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An JSON document."
      }
    ]
  },
  {
    "url": "/links/{n}/{offset}",
    "method": "generatePageContainingLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Generate a page containing n links to other pages which do the same.",
    "parameters": [
      {
        "name": "n",
        "schema": "int",
        "required": true,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "HTML links."
      }
    ]
  },
  {
    "url": "/patch",
    "method": "updateRequestParameters",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "HTTP Methods",
    "typeScriptTag": "httpMethods",
    "description": "The request's PATCH parameters.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request's PATCH parameters."
      }
    ]
  },
  {
    "url": "/post",
    "method": "postRequestParameters",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "HTTP Methods",
    "typeScriptTag": "httpMethods",
    "description": "The request's POST parameters.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request's POST parameters."
      }
    ]
  },
  {
    "url": "/put",
    "method": "putRequestParameters",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "HTTP Methods",
    "typeScriptTag": "httpMethods",
    "description": "The request's PUT parameters.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request's PUT parameters."
      }
    ]
  },
  {
    "url": "/range/{numbytes}",
    "method": "streamRandomBytes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Streams n random bytes generated with given seed, at given chunk size per packet.",
    "parameters": [
      {
        "name": "numbytes",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Bytes."
      }
    ]
  },
  {
    "url": "/redirect-to",
    "method": "toGivenUrlDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Redirects",
    "typeScriptTag": "redirects",
    "description": "302/3XX Redirects to the given URL.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": "A redirection."
      }
    ]
  },
  {
    "url": "/redirect-to",
    "method": "toGivenUrlGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Redirects",
    "typeScriptTag": "redirects",
    "description": "302/3XX Redirects to the given URL.",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "statusCode",
        "schema": "int",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "A redirection."
      }
    ]
  },
  {
    "url": "/redirect-to",
    "method": "toGivenUrlPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Redirects",
    "typeScriptTag": "redirects",
    "description": "302/3XX Redirects to the given URL.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": "A redirection."
      }
    ]
  },
  {
    "url": "/redirect-to",
    "method": "toGivenUrlPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Redirects",
    "typeScriptTag": "redirects",
    "description": "302/3XX Redirects to the given URL.",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "status_code",
        "schema": "int",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "A redirection."
      }
    ]
  },
  {
    "url": "/redirect-to",
    "method": "givenUrlPutRedirect",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Redirects",
    "typeScriptTag": "redirects",
    "description": "302/3XX Redirects to the given URL.",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "status_code",
        "schema": "int",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "A redirection."
      }
    ]
  },
  {
    "url": "/redirect-to",
    "method": "toGivenUrlTrace",
    "httpMethod": HttpMethodsEnum.TRACE,
    "tag": "Redirects",
    "typeScriptTag": "redirects",
    "description": "302/3XX Redirects to the given URL.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": "A redirection."
      }
    ]
  },
  {
    "url": "/redirect/{n}",
    "method": "302RedirectsN",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Redirects",
    "typeScriptTag": "redirects",
    "description": "302 Redirects n times.",
    "parameters": [
      {
        "name": "n",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "A redirection."
      }
    ]
  },
  {
    "url": "/relative-redirect/{n}",
    "method": "relatively302RedirectsN",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Redirects",
    "typeScriptTag": "redirects",
    "description": "Relatively 302 Redirects n times.",
    "parameters": [
      {
        "name": "n",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "A redirection."
      }
    ]
  },
  {
    "url": "/response-headers",
    "method": "queryHeadersGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response inspection",
    "typeScriptTag": "responseInspection",
    "description": "Returns a set of response headers from the query string.",
    "parameters": [
      {
        "name": "freeform",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response headers"
      }
    ]
  },
  {
    "url": "/response-headers",
    "method": "getResponseHeaders",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Response inspection",
    "typeScriptTag": "responseInspection",
    "description": "Returns a set of response headers from the query string.",
    "parameters": [
      {
        "name": "freeform",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response headers"
      }
    ]
  },
  {
    "url": "/robots.txt",
    "method": "getRobotsRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response formats",
    "typeScriptTag": "responseFormats",
    "description": "Returns some robots.txt rules.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Robots file"
      }
    ]
  },
  {
    "url": "/status/{codes}",
    "method": "returnRandomCode",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Status codes",
    "typeScriptTag": "statusCodes",
    "description": "Return status code or random status code if more than one are given",
    "parameters": [
      {
        "name": "codes",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "100",
        "description": "Informational responses"
      },
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "300",
        "description": "Redirection"
      },
      {
        "statusCode": "400",
        "description": "Client Errors"
      },
      {
        "statusCode": "500",
        "description": "Server Errors"
      }
    ]
  },
  {
    "url": "/status/{codes}",
    "method": "returnRandomCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status codes",
    "typeScriptTag": "statusCodes",
    "description": "Return status code or random status code if more than one are given",
    "parameters": [
      {
        "name": "codes",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "100",
        "description": "Informational responses"
      },
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "300",
        "description": "Redirection"
      },
      {
        "statusCode": "400",
        "description": "Client Errors"
      },
      {
        "statusCode": "500",
        "description": "Server Errors"
      }
    ]
  },
  {
    "url": "/status/{codes}",
    "method": "returnRandomCode",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Status codes",
    "typeScriptTag": "statusCodes",
    "description": "Return status code or random status code if more than one are given",
    "parameters": [
      {
        "name": "codes",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "100",
        "description": "Informational responses"
      },
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "300",
        "description": "Redirection"
      },
      {
        "statusCode": "400",
        "description": "Client Errors"
      },
      {
        "statusCode": "500",
        "description": "Server Errors"
      }
    ]
  },
  {
    "url": "/status/{codes}",
    "method": "returnRandomCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Status codes",
    "typeScriptTag": "statusCodes",
    "description": "Return status code or random status code if more than one are given",
    "parameters": [
      {
        "name": "codes",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "100",
        "description": "Informational responses"
      },
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "300",
        "description": "Redirection"
      },
      {
        "statusCode": "400",
        "description": "Client Errors"
      },
      {
        "statusCode": "500",
        "description": "Server Errors"
      }
    ]
  },
  {
    "url": "/status/{codes}",
    "method": "returnRandomCode",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Status codes",
    "typeScriptTag": "statusCodes",
    "description": "Return status code or random status code if more than one are given",
    "parameters": [
      {
        "name": "codes",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "100",
        "description": "Informational responses"
      },
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "300",
        "description": "Redirection"
      },
      {
        "statusCode": "400",
        "description": "Client Errors"
      },
      {
        "statusCode": "500",
        "description": "Server Errors"
      }
    ]
  },
  {
    "url": "/status/{codes}",
    "method": "returnRandomCode",
    "httpMethod": HttpMethodsEnum.TRACE,
    "tag": "Status codes",
    "typeScriptTag": "statusCodes",
    "description": "Return status code or random status code if more than one are given",
    "parameters": [
      {
        "name": "codes",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "100",
        "description": "Informational responses"
      },
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "300",
        "description": "Redirection"
      },
      {
        "statusCode": "400",
        "description": "Client Errors"
      },
      {
        "statusCode": "500",
        "description": "Server Errors"
      }
    ]
  },
  {
    "url": "/stream-bytes/{n}",
    "method": "streamRandomBytes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Streams n random bytes generated with given seed, at given chunk size per packet.",
    "parameters": [
      {
        "name": "n",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Bytes."
      }
    ]
  },
  {
    "url": "/stream/{n}",
    "method": "streamJsonResponses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Stream n JSON responses",
    "parameters": [
      {
        "name": "n",
        "schema": "int",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Streamed JSON responses."
      }
    ]
  },
  {
    "url": "/user-agent",
    "method": "userAgentGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Request inspection",
    "typeScriptTag": "requestInspection",
    "description": "Return the incoming requests's User-Agent header.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request's User-Agent header."
      }
    ]
  },
  {
    "url": "/uuid",
    "method": "generateUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dynamic data",
    "typeScriptTag": "dynamicData",
    "description": "Return a UUID4.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A UUID4."
      }
    ]
  },
  {
    "url": "/xml",
    "method": "simpleXmlGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Response formats",
    "typeScriptTag": "responseFormats",
    "description": "Returns a simple XML document.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An XML document."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="httpbin.org"
      apiBaseUrl="https://httpbin.org"
      apiVersion="0.9.2"
      endpoints={52}
      sdkMethods={78}
      schemas={0}
      parameters={60}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/httpbin/openapi.yaml"
    />
  );
}
  