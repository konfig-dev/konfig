import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Baremetrics",
    "numberOfMethods": 61,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "developer_tools",
      "automation",
      "analytics",
      "metrics",
      "forecasting",
      "subscription"
    ],
    "index": "baremetrics/typescript",
    "language": "TypeScript",
    "link": "/sdk/baremetrics/typescript/",
    "developerDocumentation": "developers.baremetrics.com/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/baremetrics/openapi.yaml"
  },
  {
    "name": "Baremetrics",
    "numberOfMethods": 61,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "developer_tools",
      "automation",
      "analytics",
      "metrics",
      "forecasting",
      "subscription"
    ],
    "index": "baremetrics/python",
    "language": "Python",
    "link": "/sdk/baremetrics/python/",
    "developerDocumentation": "developers.baremetrics.com/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/baremetrics/openapi.yaml"
  },
  {
    "name": "Baremetrics",
    "numberOfMethods": 61,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "developer_tools",
      "automation",
      "analytics",
      "metrics",
      "forecasting",
      "subscription"
    ],
    "index": "baremetrics/java",
    "language": "Java",
    "link": "/sdk/baremetrics/java/",
    "developerDocumentation": "developers.baremetrics.com/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/baremetrics/openapi.yaml"
  }
];

export default function Baremetrics() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Baremetrics"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baremetrics/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baremetrics/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baremetrics/favicon.png"
      sdks={sdks}
      homepage="baremetrics.com"
      categories={allCategories}
      metaDescription={`Baremetrics provides real-time subscription metrics for teams built with Stripe, Shopify Partners, Braintree, Recurly, Chargebee, Google Play, and App Store Connect. 

In addition to metrics, Baremetrics provides tools that help you reduce churn and grow your business faster: 

Recover: Prevent failed charges and keep your hard-earned revenue with our 100% automated toolkit. 

Cancellation insights: Learn exactly why your customers cancel, calculate lost revenue by cancellation reason, and send automated emails to win customers back.

Flightpath: Plan for the future with flexible financial modeling tools built for growing SaaS companies.`}
    />
  )
}