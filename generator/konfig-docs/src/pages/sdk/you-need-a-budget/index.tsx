import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "You Need A Budget",
    "numberOfMethods": 31,
    "categories": [
      "finance"
    ],
    "index": "you-need-a-budget/typescript",
    "language": "TypeScript",
    "link": "/sdk/you-need-a-budget/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/you-need-a-budget/openapi.yaml"
  },
  {
    "name": "You Need A Budget",
    "numberOfMethods": 31,
    "categories": [
      "finance"
    ],
    "index": "you-need-a-budget/python",
    "language": "Python",
    "link": "/sdk/you-need-a-budget/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/you-need-a-budget/openapi.yaml"
  },
  {
    "name": "You Need A Budget",
    "numberOfMethods": 31,
    "categories": [
      "finance"
    ],
    "index": "you-need-a-budget/java",
    "language": "Java",
    "link": "/sdk/you-need-a-budget/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/you-need-a-budget/openapi.yaml"
  }
];

export default function YouNeedABudget() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="You Need A Budget"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/you-need-a-budget/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/you-need-a-budget/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/you-need-a-budget/favicon.png"
      sdks={sdks}
      homepage="api.youneedabudget.com"
      categories={allCategories}
      metaDescription={`Working hard with nothing to show for it? Use your money more efficiently and control your spending and saving with the YNAB app.`}
    />
  )
}