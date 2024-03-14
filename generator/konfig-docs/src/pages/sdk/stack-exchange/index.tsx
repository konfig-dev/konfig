import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Stack Exchange",
    "numberOfMethods": 124,
    "categories": [
      "collaboration",
      "developer_tools",
      "support"
    ],
    "index": "stack-exchange/typescript",
    "language": "TypeScript",
    "link": "/sdk/stack-exchange/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/stack-exchange/openapi.yaml"
  },
  {
    "name": "Stack Exchange",
    "numberOfMethods": 124,
    "categories": [
      "collaboration",
      "developer_tools",
      "support"
    ],
    "index": "stack-exchange/python",
    "language": "Python",
    "link": "/sdk/stack-exchange/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/stack-exchange/openapi.yaml"
  },
  {
    "name": "Stack Exchange",
    "numberOfMethods": 124,
    "categories": [
      "collaboration",
      "developer_tools",
      "support"
    ],
    "index": "stack-exchange/java",
    "language": "Java",
    "link": "/sdk/stack-exchange/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/stack-exchange/openapi.yaml"
  }
];

export default function StackExchange() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Stack Exchange"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stack-exchange/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stack-exchange/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stack-exchange/favicon.ico"
      sdks={sdks}
      homepage="api.stackexchange.com"
      categories={allCategories}
      metaDescription={`We make Stack Overflow and 170+ other community-powered Q&A sites.`}
    />
  )
}