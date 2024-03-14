import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "AccountInformationCE",
    "numberOfMethods": 13,
    "categories": [
      "finance",
      "banking",
      "payments",
      "online_payments",
      "fintech",
      "checkout_experience",
      "multinational",
      "financial_services",
      "wealth_management",
      "global_banking",
      "retail_banking",
      "commercial_banking",
      "open_banking"
    ],
    "index": "account-information-ce/typescript",
    "language": "TypeScript",
    "link": "/sdk/hsbc/account-information-ce/typescript/",
    "developerDocumentation": "develop.hsbc.com/ob-api-documentation/account-information-ce-hsbcnet/endpoints",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hsbc/accountinformationce/openapi.yaml"
  },
  {
    "name": "AccountInformationCE",
    "numberOfMethods": 13,
    "categories": [
      "finance",
      "banking",
      "payments",
      "online_payments",
      "fintech",
      "checkout_experience",
      "multinational",
      "financial_services",
      "wealth_management",
      "global_banking",
      "retail_banking",
      "commercial_banking",
      "open_banking"
    ],
    "index": "account-information-ce/python",
    "language": "Python",
    "link": "/sdk/hsbc/account-information-ce/python/",
    "developerDocumentation": "develop.hsbc.com/ob-api-documentation/account-information-ce-hsbcnet/endpoints",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hsbc/accountinformationce/openapi.yaml"
  },
  {
    "name": "AccountInformationCE",
    "numberOfMethods": 13,
    "categories": [
      "finance",
      "banking",
      "payments",
      "online_payments",
      "fintech",
      "checkout_experience",
      "multinational",
      "financial_services",
      "wealth_management",
      "global_banking",
      "retail_banking",
      "commercial_banking",
      "open_banking"
    ],
    "index": "account-information-ce/java",
    "language": "Java",
    "link": "/sdk/hsbc/account-information-ce/java/",
    "developerDocumentation": "develop.hsbc.com/ob-api-documentation/account-information-ce-hsbcnet/endpoints",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hsbc/accountinformationce/openapi.yaml"
  }
];

export default function Hsbc() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="HSBC"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hsbc/accountinformationce/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hsbc/accountinformationce/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hsbc/accountinformationce/favicon.png"
      sdks={sdks}
      homepage="hsbc.com"
      categories={allCategories}
      metaDescription={`HSBC, also known as The Hongkong and Shanghai Banking Corporation, is a multinational banking and financial services organization. It offers a wide range of services including retail banking, wealth management, commercial banking, and global banking and markets. HSBC operates in numerous countries and territories, serving millions of customers worldwide with its comprehensive banking solutions.`}
    />
  )
}