import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "ClickUp",
    "numberOfMethods": 126,
    "categories": [
      "productivity",
      "collaboration",
      "planning",
      "agile",
      "automation",
      "docs",
      "documentation",
      "okr",
      "goals",
      "gantt",
      "kanban",
      "forms",
      "wikis",
      "roadmap",
      "reporting"
    ],
    "index": "click-up/typescript",
    "language": "TypeScript",
    "link": "/sdk/click-up/typescript/",
    "developerDocumentation": "clickup.com/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clickup/openapi.yaml"
  },
  {
    "name": "ClickUp",
    "numberOfMethods": 126,
    "categories": [
      "productivity",
      "collaboration",
      "planning",
      "agile",
      "automation",
      "docs",
      "documentation",
      "okr",
      "goals",
      "gantt",
      "kanban",
      "forms",
      "wikis",
      "roadmap",
      "reporting"
    ],
    "index": "click-up/python",
    "language": "Python",
    "link": "/sdk/click-up/python/",
    "developerDocumentation": "clickup.com/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clickup/openapi.yaml"
  },
  {
    "name": "ClickUp",
    "numberOfMethods": 126,
    "categories": [
      "productivity",
      "collaboration",
      "planning",
      "agile",
      "automation",
      "docs",
      "documentation",
      "okr",
      "goals",
      "gantt",
      "kanban",
      "forms",
      "wikis",
      "roadmap",
      "reporting"
    ],
    "index": "click-up/java",
    "language": "Java",
    "link": "/sdk/click-up/java/",
    "developerDocumentation": "clickup.com/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clickup/openapi.yaml"
  }
];

export default function ClickUp() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="ClickUp"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickup/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickup/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickup/favicon.png"
      sdks={sdks}
      homepage="clickup.com"
      categories={allCategories}
      metaDescription={`ClickUp is a productivity platform that allows teams to manage tasks, documents, goals, and chat all in one place. With customizable features and integrations, ClickUp aims to streamline workflows and improve collaboration within organizations of all sizes.`}
    />
  )
}