import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Content Management",
    "numberOfMethods": 4,
    "categories": [
      "ecommerce"
    ],
    "index": "content-management/typescript",
    "language": "TypeScript",
    "link": "/sdk/walmart/content-management/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/walmart/content-management/openapi.yaml"
  },
  {
    "name": "Content Management",
    "numberOfMethods": 4,
    "categories": [
      "ecommerce"
    ],
    "index": "content-management/python",
    "language": "Python",
    "link": "/sdk/walmart/content-management/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/walmart/content-management/openapi.yaml"
  },
  {
    "name": "Content Management",
    "numberOfMethods": 4,
    "categories": [
      "ecommerce"
    ],
    "index": "content-management/java",
    "language": "Java",
    "link": "/sdk/walmart/content-management/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/walmart/content-management/openapi.yaml"
  }
];

export default function Walmart() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Walmart"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/walmart/content-management/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/walmart/content-management/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/walmart/content-management/favicon.png"
      sdks={sdks}
      homepage="developer.walmart.com/"
      categories={allCategories}
      metaDescription={`Walmart is the world's largest retailer, and the Walmart Open API provides access to our extensive product catalog, thus enabling digital businesses to create new and innovative shopping experiences.`}
    />
  )
}