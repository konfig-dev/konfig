import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Budgets",
    "numberOfMethods": 10,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "global_payments",
      "travel_expenses",
      "banking",
      "business_accounts",
      "corporate_cards"
    ],
    "index": "budgets/typescript",
    "language": "TypeScript",
    "link": "/sdk/brex/budgets/typescript/",
    "developerDocumentation": "developer.brex.com/openapi/budgets_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/budgets/openapi.yaml"
  },
  {
    "name": "Budgets",
    "numberOfMethods": 10,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "global_payments",
      "travel_expenses",
      "banking",
      "business_accounts",
      "corporate_cards"
    ],
    "index": "budgets/python",
    "language": "Python",
    "link": "/sdk/brex/budgets/python/",
    "developerDocumentation": "developer.brex.com/openapi/budgets_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/budgets/openapi.yaml"
  },
  {
    "name": "Budgets",
    "numberOfMethods": 10,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "global_payments",
      "travel_expenses",
      "banking",
      "business_accounts",
      "corporate_cards"
    ],
    "index": "budgets/java",
    "language": "Java",
    "link": "/sdk/brex/budgets/java/",
    "developerDocumentation": "developer.brex.com/openapi/budgets_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/budgets/openapi.yaml"
  },
  {
    "name": "Expenses",
    "numberOfMethods": 5,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "banking",
      "global_payments",
      "travel_expenses"
    ],
    "index": "expenses/typescript",
    "language": "TypeScript",
    "link": "/sdk/brex/expenses/typescript/",
    "developerDocumentation": "developer.brex.com/openapi/expenses_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/expenses/openapi.yaml"
  },
  {
    "name": "Expenses",
    "numberOfMethods": 5,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "banking",
      "global_payments",
      "travel_expenses"
    ],
    "index": "expenses/python",
    "language": "Python",
    "link": "/sdk/brex/expenses/python/",
    "developerDocumentation": "developer.brex.com/openapi/expenses_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/expenses/openapi.yaml"
  },
  {
    "name": "Expenses",
    "numberOfMethods": 5,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "banking",
      "global_payments",
      "travel_expenses"
    ],
    "index": "expenses/java",
    "language": "Java",
    "link": "/sdk/brex/expenses/java/",
    "developerDocumentation": "developer.brex.com/openapi/expenses_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/expenses/openapi.yaml"
  },
  {
    "name": "Onboarding",
    "numberOfMethods": 4,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "global_payments",
      "travel_expenses",
      "banking",
      "collaboration"
    ],
    "index": "onboarding/typescript",
    "language": "TypeScript",
    "link": "/sdk/brex/onboarding/typescript/",
    "developerDocumentation": "developer.brex.com/openapi/onboarding_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/onboarding/openapi.yaml"
  },
  {
    "name": "Onboarding",
    "numberOfMethods": 4,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "global_payments",
      "travel_expenses",
      "banking",
      "collaboration"
    ],
    "index": "onboarding/python",
    "language": "Python",
    "link": "/sdk/brex/onboarding/python/",
    "developerDocumentation": "developer.brex.com/openapi/onboarding_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/onboarding/openapi.yaml"
  },
  {
    "name": "Onboarding",
    "numberOfMethods": 4,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "global_payments",
      "travel_expenses",
      "banking",
      "collaboration"
    ],
    "index": "onboarding/java",
    "language": "Java",
    "link": "/sdk/brex/onboarding/java/",
    "developerDocumentation": "developer.brex.com/openapi/onboarding_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/onboarding/openapi.yaml"
  },
  {
    "name": "Payments",
    "numberOfMethods": 10,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "global_payments",
      "travel_expenses",
      "banking"
    ],
    "index": "payments/typescript",
    "language": "TypeScript",
    "link": "/sdk/brex/payments/typescript/",
    "developerDocumentation": "developer.brex.com/openapi/payments_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/payments/openapi.yaml"
  },
  {
    "name": "Payments",
    "numberOfMethods": 10,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "global_payments",
      "travel_expenses",
      "banking"
    ],
    "index": "payments/python",
    "language": "Python",
    "link": "/sdk/brex/payments/python/",
    "developerDocumentation": "developer.brex.com/openapi/payments_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/payments/openapi.yaml"
  },
  {
    "name": "Payments",
    "numberOfMethods": 10,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "global_payments",
      "travel_expenses",
      "banking"
    ],
    "index": "payments/java",
    "language": "Java",
    "link": "/sdk/brex/payments/java/",
    "developerDocumentation": "developer.brex.com/openapi/payments_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/payments/openapi.yaml"
  },
  {
    "name": "Team",
    "numberOfMethods": 26,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "banking"
    ],
    "index": "team/typescript",
    "language": "TypeScript",
    "link": "/sdk/brex/team/typescript/",
    "developerDocumentation": "developer.brex.com/openapi/team_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/team/openapi.yaml"
  },
  {
    "name": "Team",
    "numberOfMethods": 26,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "banking"
    ],
    "index": "team/python",
    "language": "Python",
    "link": "/sdk/brex/team/python/",
    "developerDocumentation": "developer.brex.com/openapi/team_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/team/openapi.yaml"
  },
  {
    "name": "Team",
    "numberOfMethods": 26,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "banking"
    ],
    "index": "team/java",
    "language": "Java",
    "link": "/sdk/brex/team/java/",
    "developerDocumentation": "developer.brex.com/openapi/team_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/team/openapi.yaml"
  },
  {
    "name": "Transactions",
    "numberOfMethods": 8,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "global_payments",
      "travel_expenses"
    ],
    "index": "transactions/typescript",
    "language": "TypeScript",
    "link": "/sdk/brex/transactions/typescript/",
    "developerDocumentation": "developer.brex.com/openapi/transactions_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/transactions/openapi.yaml"
  },
  {
    "name": "Transactions",
    "numberOfMethods": 8,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "global_payments",
      "travel_expenses"
    ],
    "index": "transactions/python",
    "language": "Python",
    "link": "/sdk/brex/transactions/python/",
    "developerDocumentation": "developer.brex.com/openapi/transactions_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/transactions/openapi.yaml"
  },
  {
    "name": "Transactions",
    "numberOfMethods": 8,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "global_payments",
      "travel_expenses"
    ],
    "index": "transactions/java",
    "language": "Java",
    "link": "/sdk/brex/transactions/java/",
    "developerDocumentation": "developer.brex.com/openapi/transactions_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/transactions/openapi.yaml"
  },
  {
    "name": "Webhooks",
    "numberOfMethods": 6,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "banking",
      "global_payments",
      "travel_expenses"
    ],
    "index": "webhooks/typescript",
    "language": "TypeScript",
    "link": "/sdk/brex/webhooks/typescript/",
    "developerDocumentation": "developer.brex.com/openapi/webhooks_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/webhooks/openapi.yaml"
  },
  {
    "name": "Webhooks",
    "numberOfMethods": 6,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "banking",
      "global_payments",
      "travel_expenses"
    ],
    "index": "webhooks/python",
    "language": "Python",
    "link": "/sdk/brex/webhooks/python/",
    "developerDocumentation": "developer.brex.com/openapi/webhooks_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/webhooks/openapi.yaml"
  },
  {
    "name": "Webhooks",
    "numberOfMethods": 6,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "automation",
      "banking",
      "global_payments",
      "travel_expenses"
    ],
    "index": "webhooks/java",
    "language": "Java",
    "link": "/sdk/brex/webhooks/java/",
    "developerDocumentation": "developer.brex.com/openapi/webhooks_api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/webhooks/openapi.yaml"
  }
];

export default function Brex() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Brex"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/budgets/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/budgets/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/budgets/favicon.png"
      sdks={sdks}
      homepage="brex.com"
      categories={allCategories}
      metaDescription={`Brex is the AI-powered spend platform. We transform finance teams from reactive no-sayers to proactive growth drivers. With Brex, companies spend with confidence by empowering employees to make smarter financial decisions from anywhere. Brex provides corporate cards, business accounts, and global payments, plus intuitive software for travel and expenses, that make it easy to plan and track all company spend in one place, in real time. Over 20,000 companies from startups to global enterprises — including DoorDash, Flexport, and Compass — use Brex to proactively control spend, reduce costs, and increase efficiency on a global scale.`}
    />
  )
}