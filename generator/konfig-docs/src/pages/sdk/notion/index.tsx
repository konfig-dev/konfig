import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Notion",
    "numberOfMethods": 20,
    "categories": [
      "all_in_one",
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
    "index": "notion/typescript",
    "language": "TypeScript",
    "link": "/sdk/notion/typescript/",
    "developerDocumentation": "developers.notion.com/reference/intro",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/notion/openapi.yaml"
  },
  {
    "name": "Notion",
    "numberOfMethods": 20,
    "categories": [
      "all_in_one",
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
    "index": "notion/python",
    "language": "Python",
    "link": "/sdk/notion/python/",
    "developerDocumentation": "developers.notion.com/reference/intro",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/notion/openapi.yaml"
  },
  {
    "name": "Notion",
    "numberOfMethods": 20,
    "categories": [
      "all_in_one",
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
    "index": "notion/java",
    "language": "Java",
    "link": "/sdk/notion/java/",
    "developerDocumentation": "developers.notion.com/reference/intro",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/notion/openapi.yaml"
  }
];

export default function Notion() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Notion"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notion/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notion/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notion/favicon.png"
      sdks={sdks}
      homepage="developers.notion.com"
      companyKebabCase="notion"
      categories={allCategories}
      metaDescription={`Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.`}
    />
  )
}