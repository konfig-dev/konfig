import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Snyk",
    "numberOfMethods": 96,
    "categories": [
      "security"
    ],
    "index": "snyk/typescript",
    "language": "TypeScript",
    "link": "/sdk/snyk/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/snyk/openapi.yaml"
  },
  {
    "name": "Snyk",
    "numberOfMethods": 96,
    "categories": [
      "security"
    ],
    "index": "snyk/python",
    "language": "Python",
    "link": "/sdk/snyk/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/snyk/openapi.yaml"
  },
  {
    "name": "Snyk",
    "numberOfMethods": 96,
    "categories": [
      "security"
    ],
    "index": "snyk/java",
    "language": "Java",
    "link": "/sdk/snyk/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/snyk/openapi.yaml"
  }
];

export default function Snyk() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Snyk"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/snyk/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/snyk/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/snyk/favicon.ico"
      sdks={sdks}
      homepage="docs.snyk.io/snyk-api/snyk-rest-api-overview"
      categories={allCategories}
      metaDescription={`Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.`}
    />
  )
}