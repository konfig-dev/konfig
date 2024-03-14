import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Embed",
    "numberOfMethods": 11,
    "categories": [
      "automation",
      "developer_tools",
      "productivity_software",
      "developer_apis",
      "business_productivity",
      "data_integration",
      "development_platforms",
      "integrations"
    ],
    "index": "embed/typescript",
    "language": "TypeScript",
    "link": "/sdk/zapier/embed/typescript/",
    "developerDocumentation": "docs.api.zapier.com/api#/v4f9fwzq9hclo-zapier-embed-api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zapier/embed/openapi.yaml"
  },
  {
    "name": "Embed",
    "numberOfMethods": 11,
    "categories": [
      "automation",
      "developer_tools",
      "productivity_software",
      "developer_apis",
      "business_productivity",
      "data_integration",
      "development_platforms",
      "integrations"
    ],
    "index": "embed/python",
    "language": "Python",
    "link": "/sdk/zapier/embed/python/",
    "developerDocumentation": "docs.api.zapier.com/api#/v4f9fwzq9hclo-zapier-embed-api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zapier/embed/openapi.yaml"
  },
  {
    "name": "Embed",
    "numberOfMethods": 11,
    "categories": [
      "automation",
      "developer_tools",
      "productivity_software",
      "developer_apis",
      "business_productivity",
      "data_integration",
      "development_platforms",
      "integrations"
    ],
    "index": "embed/java",
    "language": "Java",
    "link": "/sdk/zapier/embed/java/",
    "developerDocumentation": "docs.api.zapier.com/api#/v4f9fwzq9hclo-zapier-embed-api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zapier/embed/openapi.yaml"
  },
  {
    "name": "AI Actions",
    "numberOfMethods": 5,
    "categories": [
      "automation",
      "ai",
      "developer_tools"
    ],
    "index": "ai-actions/typescript",
    "language": "TypeScript",
    "link": "/sdk/zapier/ai-actions/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zapier/ai-actions/openapi.yaml"
  },
  {
    "name": "AI Actions",
    "numberOfMethods": 5,
    "categories": [
      "automation",
      "ai",
      "developer_tools"
    ],
    "index": "ai-actions/python",
    "language": "Python",
    "link": "/sdk/zapier/ai-actions/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zapier/ai-actions/openapi.yaml"
  },
  {
    "name": "AI Actions",
    "numberOfMethods": 5,
    "categories": [
      "automation",
      "ai",
      "developer_tools"
    ],
    "index": "ai-actions/java",
    "language": "Java",
    "link": "/sdk/zapier/ai-actions/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zapier/ai-actions/openapi.yaml"
  }
];

export default function Zapier() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Zapier"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zapier/embed/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zapier/embed/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zapier/embed/favicon.png"
      sdks={sdks}
      homepage="zapier.com"
      categories={allCategories}
      metaDescription={`Zapier is a tool that allows users to connect and automate workflows between different apps and services. With Zapier, users can create "Zaps" that integrate various applications to streamline tasks and improve efficiency. It offers a wide range of integrations, making it easy for users to set up automated actions without the need for coding skills.`}
    />
  )
}