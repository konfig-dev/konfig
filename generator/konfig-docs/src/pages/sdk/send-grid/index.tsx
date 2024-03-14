import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "SendGrid",
    "numberOfMethods": 334,
    "categories": [
      "email",
      "marketing"
    ],
    "index": "send-grid/typescript",
    "language": "TypeScript",
    "link": "/sdk/send-grid/typescript/",
    "developerDocumentation": "docs.sendgrid.com/api-reference/how-to-use-the-sendgrid-v3-api/authentication",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sendgrid/openapi.yaml"
  },
  {
    "name": "SendGrid",
    "numberOfMethods": 334,
    "categories": [
      "email",
      "marketing"
    ],
    "index": "send-grid/python",
    "language": "Python",
    "link": "/sdk/send-grid/python/",
    "developerDocumentation": "docs.sendgrid.com/api-reference/how-to-use-the-sendgrid-v3-api/authentication",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sendgrid/openapi.yaml"
  },
  {
    "name": "SendGrid",
    "numberOfMethods": 334,
    "categories": [
      "email",
      "marketing"
    ],
    "index": "send-grid/java",
    "language": "Java",
    "link": "/sdk/send-grid/java/",
    "developerDocumentation": "docs.sendgrid.com/api-reference/how-to-use-the-sendgrid-v3-api/authentication",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sendgrid/openapi.yaml"
  }
];

export default function SendGrid() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="SendGrid"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sendgrid/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sendgrid/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sendgrid/favicon.png"
      sdks={sdks}
      homepage="sendgrid.com/en-us"
      categories={allCategories}
      metaDescription={`SendGrid is a cloud-based email delivery service that assists businesses in sending transactional and marketing emails. With a focus on reliability and deliverability, SendGrid helps developers send emails efficiently and effectively to their audiences.`}
    />
  )
}