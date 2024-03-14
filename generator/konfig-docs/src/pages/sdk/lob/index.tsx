import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Lob",
    "numberOfMethods": 94,
    "categories": [
      "printing",
      "mail"
    ],
    "index": "lob/typescript",
    "language": "TypeScript",
    "link": "/sdk/lob/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lob/openapi.yaml"
  },
  {
    "name": "Lob",
    "numberOfMethods": 94,
    "categories": [
      "printing",
      "mail"
    ],
    "index": "lob/python",
    "language": "Python",
    "link": "/sdk/lob/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lob/openapi.yaml"
  },
  {
    "name": "Lob",
    "numberOfMethods": 94,
    "categories": [
      "printing",
      "mail"
    ],
    "index": "lob/java",
    "language": "Java",
    "link": "/sdk/lob/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lob/openapi.yaml"
  }
];

export default function Lob() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Lob"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lob/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lob/logo.svg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lob/favicon.png"
      sdks={sdks}
      homepage="lob.com"
      categories={allCategories}
      metaDescription={`Lob provides a suite of APIs to deliver mail, including address verification, mail tracking, and more. Our print & mail API is used by companies large and small to send postcards, letters, and checks.`}
    />
  )
}