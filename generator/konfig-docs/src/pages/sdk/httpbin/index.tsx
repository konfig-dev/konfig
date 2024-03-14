import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "httpbin",
    "numberOfMethods": 78,
    "categories": [
      "developer_tools",
      "automation",
      "testing",
      "http"
    ],
    "index": "httpbin/typescript",
    "language": "TypeScript",
    "link": "/sdk/httpbin/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/httpbin/openapi.yaml"
  },
  {
    "name": "httpbin",
    "numberOfMethods": 78,
    "categories": [
      "developer_tools",
      "automation",
      "testing",
      "http"
    ],
    "index": "httpbin/python",
    "language": "Python",
    "link": "/sdk/httpbin/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/httpbin/openapi.yaml"
  },
  {
    "name": "httpbin",
    "numberOfMethods": 78,
    "categories": [
      "developer_tools",
      "automation",
      "testing",
      "http"
    ],
    "index": "httpbin/java",
    "language": "Java",
    "link": "/sdk/httpbin/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/httpbin/openapi.yaml"
  }
];

export default function Httpbin() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="httpbin"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/httpbin/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/httpbin/logo.svg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/httpbin/favicon.png"
      sdks={sdks}
      homepage="httpbin.org"
      categories={allCategories}
      metaDescription={`httpbin is a simple HTTP request and response service that provides a variety of endpoints to test HTTP methods, headers, and status codes. It is useful for developers to debug and test their HTTP client libraries and tools. httpbin allows users to simulate different scenarios and observe the behavior of their HTTP requests in a controlled environment.`}
    />
  )
}