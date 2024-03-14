import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Mastercard",
    "numberOfMethods": 104,
    "categories": [
      "payments",
      "finance",
      "open_banking",
      "banking",
      "consumer"
    ],
    "index": "mastercard/typescript",
    "language": "TypeScript",
    "link": "/sdk/mastercard/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/mastercard/openapi.yaml"
  },
  {
    "name": "Mastercard",
    "numberOfMethods": 104,
    "categories": [
      "payments",
      "finance",
      "open_banking",
      "banking",
      "consumer"
    ],
    "index": "mastercard/python",
    "language": "Python",
    "link": "/sdk/mastercard/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/mastercard/openapi.yaml"
  },
  {
    "name": "Mastercard",
    "numberOfMethods": 104,
    "categories": [
      "payments",
      "finance",
      "open_banking",
      "banking",
      "consumer"
    ],
    "index": "mastercard/java",
    "language": "Java",
    "link": "/sdk/mastercard/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/mastercard/openapi.yaml"
  }
];

export default function Mastercard() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Mastercard"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mastercard/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mastercard/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mastercard/favicon.png"
      sdks={sdks}
      homepage="finicity.com"
      categories={allCategories}
      metaDescription={`Mastercard is a global payment technology company that connects billions of consumers, financial institutions, merchants, governments, and businesses worldwide, enabling them to use electronic forms of payment securely and efficiently.`}
    />
  )
}