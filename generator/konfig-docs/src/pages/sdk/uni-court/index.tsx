import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "UniCourt",
    "numberOfMethods": 158,
    "categories": [
      "open_data"
    ],
    "index": "uni-court/typescript",
    "language": "TypeScript",
    "link": "/sdk/uni-court/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/unicourt/openapi.yaml"
  },
  {
    "name": "UniCourt",
    "numberOfMethods": 158,
    "categories": [
      "open_data"
    ],
    "index": "uni-court/python",
    "language": "Python",
    "link": "/sdk/uni-court/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/unicourt/openapi.yaml"
  },
  {
    "name": "UniCourt",
    "numberOfMethods": 158,
    "categories": [
      "open_data"
    ],
    "index": "uni-court/java",
    "language": "Java",
    "link": "/sdk/uni-court/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/unicourt/openapi.yaml"
  }
];

export default function UniCourt() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="UniCourt"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unicourt/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unicourt/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unicourt/favicon.png"
      sdks={sdks}
      homepage="unicourt.com"
      categories={allCategories}
      metaDescription={`UniCourt is a leader in making court data more accessible and useful. We provide real-time access to court data from state, federal, and local courts, as well as analytics, case management, and automation tools for legal professionals.`}
    />
  )
}