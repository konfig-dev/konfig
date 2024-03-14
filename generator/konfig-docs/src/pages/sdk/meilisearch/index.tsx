import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Meilisearch",
    "numberOfMethods": 73,
    "categories": [
      "database",
      "search",
      "cloud",
      "open_source",
      "geosearch",
      "nlp"
    ],
    "index": "meilisearch/typescript",
    "language": "TypeScript",
    "link": "/sdk/meilisearch/typescript/",
    "developerDocumentation": "www.meilisearch.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/meilisearch/openapi.yaml"
  },
  {
    "name": "Meilisearch",
    "numberOfMethods": 73,
    "categories": [
      "database",
      "search",
      "cloud",
      "open_source",
      "geosearch",
      "nlp"
    ],
    "index": "meilisearch/python",
    "language": "Python",
    "link": "/sdk/meilisearch/python/",
    "developerDocumentation": "www.meilisearch.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/meilisearch/openapi.yaml"
  },
  {
    "name": "Meilisearch",
    "numberOfMethods": 73,
    "categories": [
      "database",
      "search",
      "cloud",
      "open_source",
      "geosearch",
      "nlp"
    ],
    "index": "meilisearch/java",
    "language": "Java",
    "link": "/sdk/meilisearch/java/",
    "developerDocumentation": "www.meilisearch.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/meilisearch/openapi.yaml"
  }
];

export default function Meilisearch() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Meilisearch"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/meilisearch/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/meilisearch/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/meilisearch/favicon.png"
      sdks={sdks}
      homepage="www.meilisearch.com/"
      categories={allCategories}
      metaDescription={`Meilisearch is a powerful, fast, open-source, and easy-to-use search engine that provides instant search results for large datasets. It offers features like typo-tolerance, faceting, filters, and customizable ranking to enhance search experiences for developers and users alike.`}
    />
  )
}