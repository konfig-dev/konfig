import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Platform",
    "numberOfMethods": 22,
    "categories": [
      "cloud"
    ],
    "index": "platform/typescript",
    "language": "TypeScript",
    "link": "/sdk/ably/platform/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ably/platform/openapi.yaml"
  },
  {
    "name": "Platform",
    "numberOfMethods": 22,
    "categories": [
      "cloud"
    ],
    "index": "platform/python",
    "language": "Python",
    "link": "/sdk/ably/platform/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ably/platform/openapi.yaml"
  },
  {
    "name": "Platform",
    "numberOfMethods": 22,
    "categories": [
      "cloud"
    ],
    "index": "platform/java",
    "language": "Java",
    "link": "/sdk/ably/platform/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ably/platform/openapi.yaml"
  }
];

export default function Ably() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Ably"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ably/platform/imagePreview.jpeg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ably/platform/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ably/platform/favicon.ico"
      sdks={sdks}
      homepage="ably.com"
      categories={allCategories}
      metaDescription={`Ably provides a suite of APIs to build, extend, and deliver powerful digital experiences in realtime. Organizations like Toyota, Bloomberg, HubSpot, and Hopin depend on Ably’s platform to offload the growing complexity of business-critical realtime data synchronization at global scale.`}
    />
  )
}