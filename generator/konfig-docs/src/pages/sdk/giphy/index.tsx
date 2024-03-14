import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Giphy",
    "numberOfMethods": 10,
    "categories": [
      "media",
      "collaboration",
      "social_media",
      "animated_gifs",
      "stickers",
      "visual_content"
    ],
    "index": "giphy/typescript",
    "language": "TypeScript",
    "link": "/sdk/giphy/typescript/",
    "developerDocumentation": "developers.giphy.com/docs/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/giphy/openapi.yaml"
  },
  {
    "name": "Giphy",
    "numberOfMethods": 10,
    "categories": [
      "media",
      "collaboration",
      "social_media",
      "animated_gifs",
      "stickers",
      "visual_content"
    ],
    "index": "giphy/python",
    "language": "Python",
    "link": "/sdk/giphy/python/",
    "developerDocumentation": "developers.giphy.com/docs/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/giphy/openapi.yaml"
  },
  {
    "name": "Giphy",
    "numberOfMethods": 10,
    "categories": [
      "media",
      "collaboration",
      "social_media",
      "animated_gifs",
      "stickers",
      "visual_content"
    ],
    "index": "giphy/java",
    "language": "Java",
    "link": "/sdk/giphy/java/",
    "developerDocumentation": "developers.giphy.com/docs/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/giphy/openapi.yaml"
  }
];

export default function Giphy() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Giphy"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/giphy/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/giphy/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/giphy/favicon.png"
      sdks={sdks}
      homepage="giphy.com"
      categories={allCategories}
      metaDescription={`Giphy is a platform that provides a vast collection of animated GIFs and stickers for users to express themselves in various online conversations. It offers a wide range of categories and search functionalities to easily find and share engaging visual content across social media, messaging platforms, and more.`}
    />
  )
}