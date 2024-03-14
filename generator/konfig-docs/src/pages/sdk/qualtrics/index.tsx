import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Survey",
    "numberOfMethods": 36,
    "categories": [
      "survey"
    ],
    "index": "survey/typescript",
    "language": "TypeScript",
    "link": "/sdk/qualtrics/survey/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/qualtrics/survey/openapi.yaml"
  },
  {
    "name": "Survey",
    "numberOfMethods": 36,
    "categories": [
      "survey"
    ],
    "index": "survey/python",
    "language": "Python",
    "link": "/sdk/qualtrics/survey/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/qualtrics/survey/openapi.yaml"
  },
  {
    "name": "Survey",
    "numberOfMethods": 36,
    "categories": [
      "survey"
    ],
    "index": "survey/java",
    "language": "Java",
    "link": "/sdk/qualtrics/survey/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/qualtrics/survey/openapi.yaml"
  }
];

export default function Qualtrics() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Qualtrics"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/qualtrics/survey/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/qualtrics/survey/logo.svg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/qualtrics/survey/favicon.png"
      sdks={sdks}
      homepage="api.qualtrics.com"
      categories={allCategories}
      metaDescription={`Know what your customers and employees need, when they need it, and deliver it every time with powerful, AI driven Experience Management (XM) software.`}
    />
  )
}