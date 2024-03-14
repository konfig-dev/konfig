import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Checkout",
    "numberOfMethods": 4,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "checkout_experience"
    ],
    "index": "checkout/typescript",
    "language": "TypeScript",
    "link": "/sdk/klarna/checkout/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/klarna/checkout/openapi.yaml"
  },
  {
    "name": "Checkout",
    "numberOfMethods": 4,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "checkout_experience"
    ],
    "index": "checkout/python",
    "language": "Python",
    "link": "/sdk/klarna/checkout/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/klarna/checkout/openapi.yaml"
  },
  {
    "name": "Checkout",
    "numberOfMethods": 4,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "checkout_experience"
    ],
    "index": "checkout/java",
    "language": "Java",
    "link": "/sdk/klarna/checkout/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/klarna/checkout/openapi.yaml"
  },
  {
    "name": "Payments",
    "numberOfMethods": 6,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "checkout_experience"
    ],
    "index": "payments/typescript",
    "language": "TypeScript",
    "link": "/sdk/klarna/payments/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/klarna/payments/openapi.yaml"
  },
  {
    "name": "Payments",
    "numberOfMethods": 6,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "checkout_experience"
    ],
    "index": "payments/python",
    "language": "Python",
    "link": "/sdk/klarna/payments/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/klarna/payments/openapi.yaml"
  },
  {
    "name": "Payments",
    "numberOfMethods": 6,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "checkout_experience"
    ],
    "index": "payments/java",
    "language": "Java",
    "link": "/sdk/klarna/payments/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/klarna/payments/openapi.yaml"
  }
];

export default function Klarna() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Klarna"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/klarna/checkout/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/klarna/checkout/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/klarna/checkout/favicon.png"
      sdks={sdks}
      homepage="klarna.com"
      categories={allCategories}
      metaDescription={`Klarna is a Swedish fintech company that provides online financial services such as payment solutions for online storefronts, direct payments, and more. Klarna's 'buy now, pay later' options make shopping easier for customers, allowing them to defer payments or pay in installments. The company has gained popularity for its smooth and secure checkout process, enhancing the overall shopping experience for consumers worldwide.`}
    />
  )
}