import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Zuora",
    "numberOfMethods": 458,
    "categories": [
      "finance",
      "developer_tools",
      "billing",
      "payments"
    ],
    "index": "zuora/typescript",
    "language": "TypeScript",
    "link": "/sdk/zuora/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zuora/openapi.yaml"
  },
  {
    "name": "Zuora",
    "numberOfMethods": 458,
    "categories": [
      "finance",
      "developer_tools",
      "billing",
      "payments"
    ],
    "index": "zuora/python",
    "language": "Python",
    "link": "/sdk/zuora/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zuora/openapi.yaml"
  },
  {
    "name": "Zuora",
    "numberOfMethods": 458,
    "categories": [
      "finance",
      "developer_tools",
      "billing",
      "payments"
    ],
    "index": "zuora/java",
    "language": "Java",
    "link": "/sdk/zuora/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zuora/openapi.yaml"
  }
];

export default function Zuora() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Zuora"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zuora/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zuora/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zuora/favicon.png"
      sdks={sdks}
      homepage="zuora.com"
      categories={allCategories}
      metaDescription={`Zuora is a subscription management platform that helps businesses manage their subscription-based services efficiently. It provides tools for billing, revenue recognition, subscription analytics, and more. Zuora empowers companies to launch and scale subscription models, optimize pricing strategies, and enhance customer relationships.`}
    />
  )
}