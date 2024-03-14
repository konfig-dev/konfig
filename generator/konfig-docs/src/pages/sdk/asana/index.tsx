import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Asana",
    "numberOfMethods": 183,
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
      "reporting",
      "collaboration",
      "productivity",
      "workspace",
      "productivity_software",
      "task_management",
      "information_technology",
      "business_productivity",
      "enterprise_software",
      "work_management",
      "project_management",
      "organization"
    ],
    "index": "asana/typescript",
    "language": "TypeScript",
    "link": "/sdk/asana/typescript/",
    "developerDocumentation": "developers.asana.com/reference/rest-api-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/asana/openapi.yaml"
  },
  {
    "name": "Asana",
    "numberOfMethods": 183,
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
      "reporting",
      "collaboration",
      "productivity",
      "workspace",
      "productivity_software",
      "task_management",
      "information_technology",
      "business_productivity",
      "enterprise_software",
      "work_management",
      "project_management",
      "organization"
    ],
    "index": "asana/python",
    "language": "Python",
    "link": "/sdk/asana/python/",
    "developerDocumentation": "developers.asana.com/reference/rest-api-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/asana/openapi.yaml"
  },
  {
    "name": "Asana",
    "numberOfMethods": 183,
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
      "reporting",
      "collaboration",
      "productivity",
      "workspace",
      "productivity_software",
      "task_management",
      "information_technology",
      "business_productivity",
      "enterprise_software",
      "work_management",
      "project_management",
      "organization"
    ],
    "index": "asana/java",
    "language": "Java",
    "link": "/sdk/asana/java/",
    "developerDocumentation": "developers.asana.com/reference/rest-api-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/asana/openapi.yaml"
  }
];

export default function Asana() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Asana"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/asana/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/asana/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/asana/favicon.png"
      sdks={sdks}
      homepage="asana.com"
      categories={allCategories}
      metaDescription={`Asana helps teams orchestrate their work, from small projects to strategic initiatives. Headquartered in San Francisco, CA, Asana has more than 131,000 paying customers and millions of free organizations across 190 countries. Global customers such as Amazon, Japan Airlines, Sky, and Affirm rely on Asana to manage everything from company objectives to digital transformation to product launches and marketing campaigns. For more information, visit www.asana.com.`}
    />
  )
}