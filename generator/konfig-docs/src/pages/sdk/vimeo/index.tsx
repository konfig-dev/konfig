import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Vimeo",
    "numberOfMethods": 485,
    "categories": [
      "media"
    ],
    "index": "vimeo/typescript",
    "language": "TypeScript",
    "link": "/sdk/vimeo/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/vimeo/openapi.yaml"
  },
  {
    "name": "Vimeo",
    "numberOfMethods": 485,
    "categories": [
      "media"
    ],
    "index": "vimeo/python",
    "language": "Python",
    "link": "/sdk/vimeo/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/vimeo/openapi.yaml"
  },
  {
    "name": "Vimeo",
    "numberOfMethods": 485,
    "categories": [
      "media"
    ],
    "index": "vimeo/java",
    "language": "Java",
    "link": "/sdk/vimeo/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/vimeo/openapi.yaml"
  }
];

export default function Vimeo() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Vimeo"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vimeo/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vimeo/logo.avif"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vimeo/favicon.jpg"
      sdks={sdks}
      homepage="developer.vimeo.com"
      categories={allCategories}
      metaDescription={`Join the world's leading professional video platform and grow your business with easy-to-use, high-quality video creation, hosting, and marketing tools.`}
    />
  )
}