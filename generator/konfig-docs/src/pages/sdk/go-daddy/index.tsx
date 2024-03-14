import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Domains",
    "numberOfMethods": 53,
    "categories": [
      "hosting"
    ],
    "index": "domains/typescript",
    "language": "TypeScript",
    "link": "/sdk/go-daddy/domains/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/godaddy/domains/openapi.yaml"
  },
  {
    "name": "Domains",
    "numberOfMethods": 53,
    "categories": [
      "hosting"
    ],
    "index": "domains/python",
    "language": "Python",
    "link": "/sdk/go-daddy/domains/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/godaddy/domains/openapi.yaml"
  },
  {
    "name": "Domains",
    "numberOfMethods": 53,
    "categories": [
      "hosting"
    ],
    "index": "domains/java",
    "language": "Java",
    "link": "/sdk/go-daddy/domains/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/godaddy/domains/openapi.yaml"
  }
];

export default function GoDaddy() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="GoDaddy"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/godaddy/domains/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/godaddy/domains/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/godaddy/domains/favicon.png"
      sdks={sdks}
      homepage="developer.godaddy.com"
      categories={allCategories}
      metaDescription={`All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way.`}
    />
  )
}