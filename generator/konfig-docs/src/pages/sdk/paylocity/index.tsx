import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Weblink",
    "numberOfMethods": 43,
    "categories": [
      "payroll",
      "hr"
    ],
    "index": "weblink/typescript",
    "language": "TypeScript",
    "link": "/sdk/paylocity/weblink/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paylocity/weblink/openapi.yaml"
  },
  {
    "name": "Weblink",
    "numberOfMethods": 43,
    "categories": [
      "payroll",
      "hr"
    ],
    "index": "weblink/python",
    "language": "Python",
    "link": "/sdk/paylocity/weblink/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paylocity/weblink/openapi.yaml"
  },
  {
    "name": "Weblink",
    "numberOfMethods": 43,
    "categories": [
      "payroll",
      "hr"
    ],
    "index": "weblink/java",
    "language": "Java",
    "link": "/sdk/paylocity/weblink/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paylocity/weblink/openapi.yaml"
  }
];

export default function Paylocity() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Paylocity"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paylocity/weblink/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paylocity/weblink/logo.jpg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paylocity/weblink/favicon.jpg"
      sdks={sdks}
      homepage="developer.paylocity.com"
      categories={allCategories}
      metaDescription={`Paylocity is the HR & Payroll provider that frees you from the tasks of today, so together, we can spend more time focused on the promise of tomorrow.`}
    />
  )
}