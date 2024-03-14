import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Business",
    "numberOfMethods": 55,
    "categories": [
      "messaging",
      "sms"
    ],
    "index": "business/typescript",
    "language": "TypeScript",
    "link": "/sdk/whats-app/business/typescript/",
    "developerDocumentation": "developers.facebook.com/docs/whatsapp/cloud-api/get-started",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/whatsapp/business/openapi.yaml"
  },
  {
    "name": "Business",
    "numberOfMethods": 55,
    "categories": [
      "messaging",
      "sms"
    ],
    "index": "business/python",
    "language": "Python",
    "link": "/sdk/whats-app/business/python/",
    "developerDocumentation": "developers.facebook.com/docs/whatsapp/cloud-api/get-started",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/whatsapp/business/openapi.yaml"
  },
  {
    "name": "Business",
    "numberOfMethods": 55,
    "categories": [
      "messaging",
      "sms"
    ],
    "index": "business/java",
    "language": "Java",
    "link": "/sdk/whats-app/business/java/",
    "developerDocumentation": "developers.facebook.com/docs/whatsapp/cloud-api/get-started",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/whatsapp/business/openapi.yaml"
  }
];

export default function WhatsApp() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="WhatsApp"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/whatsapp/business/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/whatsapp/business/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/whatsapp/business/favicon.png"
      sdks={sdks}
      homepage="developers.facebook.com/docs/whatsapp"
      categories={allCategories}
      metaDescription={`Use WhatsApp Messenger to stay in touch with friends and family. WhatsApp is free and offers simple, secure, reliable messaging and calling, available on phones all over the world.`}
    />
  )
}