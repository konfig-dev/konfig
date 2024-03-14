import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Hetzner",
    "numberOfMethods": 162,
    "categories": [
      "cloud",
      "security",
      "hosting",
      "data_center",
      "dedicated_servers",
      "storage",
      "virtual_private_servers"
    ],
    "index": "hetzner/typescript",
    "language": "TypeScript",
    "link": "/sdk/hetzner/typescript/",
    "developerDocumentation": "docs.hetzner.cloud/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hetzner/openapi.yaml"
  },
  {
    "name": "Hetzner",
    "numberOfMethods": 162,
    "categories": [
      "cloud",
      "security",
      "hosting",
      "data_center",
      "dedicated_servers",
      "storage",
      "virtual_private_servers"
    ],
    "index": "hetzner/python",
    "language": "Python",
    "link": "/sdk/hetzner/python/",
    "developerDocumentation": "docs.hetzner.cloud/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hetzner/openapi.yaml"
  },
  {
    "name": "Hetzner",
    "numberOfMethods": 162,
    "categories": [
      "cloud",
      "security",
      "hosting",
      "data_center",
      "dedicated_servers",
      "storage",
      "virtual_private_servers"
    ],
    "index": "hetzner/java",
    "language": "Java",
    "link": "/sdk/hetzner/java/",
    "developerDocumentation": "docs.hetzner.cloud/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hetzner/openapi.yaml"
  }
];

export default function Hetzner() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Hetzner"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hetzner/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hetzner/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hetzner/favicon.png"
      sdks={sdks}
      homepage="hetzner.com"
      categories={allCategories}
      metaDescription={`Hetzner provides reliable and efficient cloud hosting and data center services. With state-of-the-art infrastructure and a focus on security and performance, Hetzner caters to a wide range of businesses looking for scalable and dependable hosting solutions. From dedicated servers to cloud storage and virtual private servers, Hetzner offers a comprehensive suite of services to meet the diverse needs of its clients.`}
    />
  )
}