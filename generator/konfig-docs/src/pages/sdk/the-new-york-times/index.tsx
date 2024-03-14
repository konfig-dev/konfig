import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Books",
    "numberOfMethods": 7,
    "categories": [
      "news"
    ],
    "index": "books/typescript",
    "language": "TypeScript",
    "link": "/sdk/the-new-york-times/books/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/the-new-york-times/books/openapi.yaml"
  },
  {
    "name": "Books",
    "numberOfMethods": 7,
    "categories": [
      "news"
    ],
    "index": "books/python",
    "language": "Python",
    "link": "/sdk/the-new-york-times/books/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/the-new-york-times/books/openapi.yaml"
  },
  {
    "name": "Books",
    "numberOfMethods": 7,
    "categories": [
      "news"
    ],
    "index": "books/java",
    "language": "Java",
    "link": "/sdk/the-new-york-times/books/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/the-new-york-times/books/openapi.yaml"
  }
];

export default function TheNewYorkTimes() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="The New York Times"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/the-new-york-times/books/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/the-new-york-times/books/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/the-new-york-times/books/favicon.png"
      sdks={sdks}
      homepage="developer.nytimes.com"
      categories={allCategories}
      metaDescription={`Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world. Subscribe for coverage of U.S. and international news, politics, business, technology, science, health, arts, sports and more.`}
    />
  )
}