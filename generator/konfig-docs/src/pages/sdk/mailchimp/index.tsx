import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Mailchimp",
    "numberOfMethods": 272,
    "categories": [
      "automation",
      "marketing",
      "developer_tools",
      "email",
      "sms",
      "social_media"
    ],
    "index": "mailchimp/typescript",
    "language": "TypeScript",
    "link": "/sdk/mailchimp/typescript/",
    "developerDocumentation": "mailchimp.com/developer/marketing/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/mailchimp/openapi.yaml"
  },
  {
    "name": "Mailchimp",
    "numberOfMethods": 272,
    "categories": [
      "automation",
      "marketing",
      "developer_tools",
      "email",
      "sms",
      "social_media"
    ],
    "index": "mailchimp/python",
    "language": "Python",
    "link": "/sdk/mailchimp/python/",
    "developerDocumentation": "mailchimp.com/developer/marketing/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/mailchimp/openapi.yaml"
  },
  {
    "name": "Mailchimp",
    "numberOfMethods": 272,
    "categories": [
      "automation",
      "marketing",
      "developer_tools",
      "email",
      "sms",
      "social_media"
    ],
    "index": "mailchimp/java",
    "language": "Java",
    "link": "/sdk/mailchimp/java/",
    "developerDocumentation": "mailchimp.com/developer/marketing/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/mailchimp/openapi.yaml"
  }
];

export default function Mailchimp() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Mailchimp"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mailchimp/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mailchimp/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mailchimp/favicon.png"
      sdks={sdks}
      homepage="mailchimp.com/"
      categories={allCategories}
      metaDescription={`Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.`}
    />
  )
}