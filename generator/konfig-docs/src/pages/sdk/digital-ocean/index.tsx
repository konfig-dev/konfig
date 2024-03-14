import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "DigitalOcean",
    "numberOfMethods": 300,
    "categories": [
      "cloud",
      "data_center",
      "storage",
      "virtual_private_servers",
      "developer_tools",
      "automation",
      "collaboration"
    ],
    "index": "digital-ocean/typescript",
    "language": "TypeScript",
    "link": "/sdk/digital-ocean/typescript/",
    "developerDocumentation": "docs.digitalocean.com/reference/api/api-reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/digitalocean/openapi.yaml"
  },
  {
    "name": "DigitalOcean",
    "numberOfMethods": 300,
    "categories": [
      "cloud",
      "data_center",
      "storage",
      "virtual_private_servers",
      "developer_tools",
      "automation",
      "collaboration"
    ],
    "index": "digital-ocean/python",
    "language": "Python",
    "link": "/sdk/digital-ocean/python/",
    "developerDocumentation": "docs.digitalocean.com/reference/api/api-reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/digitalocean/openapi.yaml"
  },
  {
    "name": "DigitalOcean",
    "numberOfMethods": 300,
    "categories": [
      "cloud",
      "data_center",
      "storage",
      "virtual_private_servers",
      "developer_tools",
      "automation",
      "collaboration"
    ],
    "index": "digital-ocean/java",
    "language": "Java",
    "link": "/sdk/digital-ocean/java/",
    "developerDocumentation": "docs.digitalocean.com/reference/api/api-reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/digitalocean/openapi.yaml"
  }
];

export default function DigitalOcean() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="DigitalOcean"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/digitalocean/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/digitalocean/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/digitalocean/favicon.png"
      sdks={sdks}
      homepage="digitalocean.com"
      categories={allCategories}
      metaDescription={`DigitalOcean is a cloud infrastructure provider that offers virtual servers, storage, networking, and more to help developers deploy and scale applications quickly and easily. Known for its simplicity and developer-friendly tools, DigitalOcean is used by startup companies, independent developers, and enterprises alike to power a wide range of web applications and services.`}
    />
  )
}