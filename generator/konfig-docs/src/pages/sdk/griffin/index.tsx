import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Griffin",
    "numberOfMethods": 69,
    "categories": [
      "finance",
      "banking",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "open_banking",
      "wealth_management",
      "global_banking",
      "retail_banking",
      "commercial_banking",
      "multinational_financial_services",
      "financial_technology",
      "financial_services"
    ],
    "index": "griffin/typescript",
    "language": "TypeScript",
    "link": "/sdk/griffin/typescript/",
    "developerDocumentation": "docs.griffin.com/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/griffin/openapi.yaml"
  },
  {
    "name": "Griffin",
    "numberOfMethods": 69,
    "categories": [
      "finance",
      "banking",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "open_banking",
      "wealth_management",
      "global_banking",
      "retail_banking",
      "commercial_banking",
      "multinational_financial_services",
      "financial_technology",
      "financial_services"
    ],
    "index": "griffin/python",
    "language": "Python",
    "link": "/sdk/griffin/python/",
    "developerDocumentation": "docs.griffin.com/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/griffin/openapi.yaml"
  },
  {
    "name": "Griffin",
    "numberOfMethods": 69,
    "categories": [
      "finance",
      "banking",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "open_banking",
      "wealth_management",
      "global_banking",
      "retail_banking",
      "commercial_banking",
      "multinational_financial_services",
      "financial_technology",
      "financial_services"
    ],
    "index": "griffin/java",
    "language": "Java",
    "link": "/sdk/griffin/java/",
    "developerDocumentation": "docs.griffin.com/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/griffin/openapi.yaml"
  }
];

export default function Griffin() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Griffin"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/griffin/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/griffin/logo.webp"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/griffin/favicon.png"
      sdks={sdks}
      homepage="griffin.com"
      categories={allCategories}
      metaDescription={`Griffin is the bank you can build on. We make it simple, quick and cost-effective to build and launch financial products. 

Build on the secure and regulated infrastructure of a bank and seamlessly embed financial services into your app. 

Griffin is authorised (with restrictions) by the PRA and FCA and backed by leading investors EQT Ventures, MassMutual Ventures, Tribe Capital, Notion Capital and Seedcamp.`}
    />
  )
}