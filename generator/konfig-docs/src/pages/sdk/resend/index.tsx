import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Resend",
    "numberOfMethods": 22,
    "categories": [
      "email",
      "developer_tools",
      "automation"
    ],
    "index": "resend/typescript",
    "language": "TypeScript",
    "link": "/sdk/resend/typescript/",
    "developerDocumentation": "resend.com/docs/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/resend/openapi.yaml"
  },
  {
    "name": "Resend",
    "numberOfMethods": 22,
    "categories": [
      "email",
      "developer_tools",
      "automation"
    ],
    "index": "resend/python",
    "language": "Python",
    "link": "/sdk/resend/python/",
    "developerDocumentation": "resend.com/docs/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/resend/openapi.yaml"
  },
  {
    "name": "Resend",
    "numberOfMethods": 22,
    "categories": [
      "email",
      "developer_tools",
      "automation"
    ],
    "index": "resend/java",
    "language": "Java",
    "link": "/sdk/resend/java/",
    "developerDocumentation": "resend.com/docs/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/resend/openapi.yaml"
  }
];

export default function Resend() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Resend"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resend/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resend/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resend/favicon.png"
      sdks={sdks}
      homepage="resend.com"
      categories={allCategories}
      metaDescription={`Email for developers`}
    />
  )
}