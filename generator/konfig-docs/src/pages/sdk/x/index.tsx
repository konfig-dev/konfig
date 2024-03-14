import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "X",
    "numberOfMethods": 80,
    "categories": [
      "social"
    ],
    "index": "x/typescript",
    "language": "TypeScript",
    "link": "/sdk/x/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/x/openapi.yaml"
  },
  {
    "name": "X",
    "numberOfMethods": 80,
    "categories": [
      "social"
    ],
    "index": "x/python",
    "language": "Python",
    "link": "/sdk/x/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/x/openapi.yaml"
  },
  {
    "name": "X",
    "numberOfMethods": 80,
    "categories": [
      "social"
    ],
    "index": "x/java",
    "language": "Java",
    "link": "/sdk/x/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/x/openapi.yaml"
  }
];

export default function X() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="X"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/x/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/x/logo.jpg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/x/favicon.ico"
      sdks={sdks}
      homepage="developer.x.com"
      categories={allCategories}
      metaDescription={`Publish & analyze posts, optimize ads, & create unique customer experiences with the X API, X Ads API, & X Embeds.`}
    />
  )
}