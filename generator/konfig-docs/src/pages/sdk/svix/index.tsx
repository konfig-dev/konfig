import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Svix",
    "numberOfMethods": 59,
    "categories": [
      "webhooks",
      "notifications",
      "automation",
      "developer_tools"
    ],
    "index": "svix/typescript",
    "language": "TypeScript",
    "link": "/sdk/svix/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/svix/openapi.yaml"
  },
  {
    "name": "Svix",
    "numberOfMethods": 59,
    "categories": [
      "webhooks",
      "notifications",
      "automation",
      "developer_tools"
    ],
    "index": "svix/python",
    "language": "Python",
    "link": "/sdk/svix/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/svix/openapi.yaml"
  },
  {
    "name": "Svix",
    "numberOfMethods": 59,
    "categories": [
      "webhooks",
      "notifications",
      "automation",
      "developer_tools"
    ],
    "index": "svix/java",
    "language": "Java",
    "link": "/sdk/svix/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/svix/openapi.yaml"
  }
];

export default function Svix() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Svix"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/svix/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/svix/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/svix/favicon.png"
      sdks={sdks}
      homepage="svix.com"
      categories={allCategories}
      metaDescription={`Svix is a platform that simplifies webhook processing for developers. By providing a reliable infrastructure and powerful tools, Svix enables developers to easily send and receive webhooks, ensuring seamless communication between services and applications.`}
    />
  )
}