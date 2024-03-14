import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Shutterstock",
    "numberOfMethods": 118,
    "categories": [
      "media"
    ],
    "index": "shutterstock/typescript",
    "language": "TypeScript",
    "link": "/sdk/shutterstock/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shutterstock/openapi.yaml"
  },
  {
    "name": "Shutterstock",
    "numberOfMethods": 118,
    "categories": [
      "media"
    ],
    "index": "shutterstock/python",
    "language": "Python",
    "link": "/sdk/shutterstock/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shutterstock/openapi.yaml"
  },
  {
    "name": "Shutterstock",
    "numberOfMethods": 118,
    "categories": [
      "media"
    ],
    "index": "shutterstock/java",
    "language": "Java",
    "link": "/sdk/shutterstock/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shutterstock/openapi.yaml"
  }
];

export default function Shutterstock() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Shutterstock"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shutterstock/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shutterstock/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shutterstock/favicon.ico"
      sdks={sdks}
      homepage="developers.shutterstock.com"
      categories={allCategories}
      metaDescription={`Download the best royalty free images from Shutterstock, including photos, vectors, and illustrations. Enjoy straightforward pricing and simple licensing.`}
    />
  )
}