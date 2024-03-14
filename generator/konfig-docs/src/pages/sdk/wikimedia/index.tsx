import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Wikimedia",
    "numberOfMethods": 35,
    "categories": [
      "media"
    ],
    "index": "wikimedia/typescript",
    "language": "TypeScript",
    "link": "/sdk/wikimedia/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wikimedia/openapi.yaml"
  },
  {
    "name": "Wikimedia",
    "numberOfMethods": 35,
    "categories": [
      "media"
    ],
    "index": "wikimedia/python",
    "language": "Python",
    "link": "/sdk/wikimedia/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wikimedia/openapi.yaml"
  },
  {
    "name": "Wikimedia",
    "numberOfMethods": 35,
    "categories": [
      "media"
    ],
    "index": "wikimedia/java",
    "language": "Java",
    "link": "/sdk/wikimedia/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wikimedia/openapi.yaml"
  }
];

export default function Wikimedia() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Wikimedia"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wikimedia/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wikimedia/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wikimedia/favicon.ico"
      sdks={sdks}
      homepage="wikimedia.org"
      categories={allCategories}
      metaDescription={`Wikimedia is a global movement whose mission is to bring free educational content to the world.`}
    />
  )
}