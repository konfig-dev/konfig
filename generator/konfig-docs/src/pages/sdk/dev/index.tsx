import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "DEV",
    "numberOfMethods": 58,
    "categories": [
      "developer_tools",
      "automation",
      "collaboration",
      "media",
      "community_engagement",
      "discussion",
      "knowledge_sharing",
      "platform",
      "writing",
      "reading",
      "code",
      "software_development",
      "resources",
      "skills",
      "network",
      "blogging",
      "industry_professionals"
    ],
    "index": "dev/typescript",
    "language": "TypeScript",
    "link": "/sdk/dev/typescript/",
    "developerDocumentation": "developers.forem.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dev/openapi.yaml"
  },
  {
    "name": "DEV",
    "numberOfMethods": 58,
    "categories": [
      "developer_tools",
      "automation",
      "collaboration",
      "media",
      "community_engagement",
      "discussion",
      "knowledge_sharing",
      "platform",
      "writing",
      "reading",
      "code",
      "software_development",
      "resources",
      "skills",
      "network",
      "blogging",
      "industry_professionals"
    ],
    "index": "dev/python",
    "language": "Python",
    "link": "/sdk/dev/python/",
    "developerDocumentation": "developers.forem.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dev/openapi.yaml"
  },
  {
    "name": "DEV",
    "numberOfMethods": 58,
    "categories": [
      "developer_tools",
      "automation",
      "collaboration",
      "media",
      "community_engagement",
      "discussion",
      "knowledge_sharing",
      "platform",
      "writing",
      "reading",
      "code",
      "software_development",
      "resources",
      "skills",
      "network",
      "blogging",
      "industry_professionals"
    ],
    "index": "dev/java",
    "language": "Java",
    "link": "/sdk/dev/java/",
    "developerDocumentation": "developers.forem.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dev/openapi.yaml"
  }
];

export default function Dev() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="DEV"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dev/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dev/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dev/favicon.png"
      sdks={sdks}
      homepage="dev.to"
      categories={allCategories}
      metaDescription={`DEV is a community of software developers where they can share knowledge, collaborate, and learn from each other. It's a platform for writing, reading, and discussing code and software development topics. DEV also provides resources, tools, and opportunities for developers to grow their skills and network with industry professionals.`}
    />
  )
}