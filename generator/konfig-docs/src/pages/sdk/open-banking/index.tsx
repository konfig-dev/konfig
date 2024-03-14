import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Account and Transaction",
    "numberOfMethods": 29,
    "categories": [
      "open_banking"
    ],
    "index": "account-and-transaction/typescript",
    "language": "TypeScript",
    "link": "/sdk/open-banking/account-and-transaction/typescript/",
    "developerDocumentation": "openbanking.atlassian.net/wiki/spaces/DZ/pages/16385802/Specifications",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/open-banking/account-and-transaction/openapi.yaml"
  },
  {
    "name": "Account and Transaction",
    "numberOfMethods": 29,
    "categories": [
      "open_banking"
    ],
    "index": "account-and-transaction/python",
    "language": "Python",
    "link": "/sdk/open-banking/account-and-transaction/python/",
    "developerDocumentation": "openbanking.atlassian.net/wiki/spaces/DZ/pages/16385802/Specifications",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/open-banking/account-and-transaction/openapi.yaml"
  },
  {
    "name": "Account and Transaction",
    "numberOfMethods": 29,
    "categories": [
      "open_banking"
    ],
    "index": "account-and-transaction/java",
    "language": "Java",
    "link": "/sdk/open-banking/account-and-transaction/java/",
    "developerDocumentation": "openbanking.atlassian.net/wiki/spaces/DZ/pages/16385802/Specifications",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/open-banking/account-and-transaction/openapi.yaml"
  }
];

export default function OpenBanking() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Open Banking"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/open-banking/account-and-transaction/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/open-banking/account-and-transaction/logo.svg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/open-banking/account-and-transaction/favicon.png"
      sdks={sdks}
      homepage="www.openbanking.org.uk/"
      categories={allCategories}
      metaDescription={`The trusted technology that connects banks, fintechs & technical providers - technology that's helping 6m users take control of their money.`}
    />
  )
}