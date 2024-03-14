import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Trello",
    "numberOfMethods": 323,
    "categories": [
      "collaboration"
    ],
    "index": "trello/typescript",
    "language": "TypeScript",
    "link": "/sdk/trello/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/trello/openapi.yaml"
  },
  {
    "name": "Trello",
    "numberOfMethods": 323,
    "categories": [
      "collaboration"
    ],
    "index": "trello/python",
    "language": "Python",
    "link": "/sdk/trello/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/trello/openapi.yaml"
  },
  {
    "name": "Trello",
    "numberOfMethods": 323,
    "categories": [
      "collaboration"
    ],
    "index": "trello/java",
    "language": "Java",
    "link": "/sdk/trello/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/trello/openapi.yaml"
  }
];

export default function Trello() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Trello"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/favicon.ico"
      sdks={sdks}
      homepage="developer.atlassian.com/cloud/trello"
      categories={allCategories}
      metaDescription={`Trello is a collaboration tool that organizes your projects into boards. In one glance, Trello tells you what's being worked on, who's working on what, and where something is in a process.`}
    />
  )
}