import React from 'react'
import { Company } from '../../../components/Company'

const sdks = [
  {
    name: 'Budgets',
    categories: ['Finance', 'Management'],
    numberOfMethods: 3,
    language: 'TypeScript',
    index: 'budgets/typescript',
    link: '/sdk/brex/budgets/typescript/',
    developerDocumentation: 'https://brex.com/docs/budgets',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/budgets/openapi.yaml',
  },
  {
    name: 'Budgets',
    categories: ['Finance', 'Management'],
    numberOfMethods: 3,
    language: 'Java',
    index: 'budgets/java',
    link: '/sdk/brex/budgets/java/',
    developerDocumentation: 'https://brex.com/docs/budgets',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/budgets/openapi.yaml',
  },
  {
    name: 'Budgets',
    categories: ['Finance', 'Management'],
    numberOfMethods: 3,
    language: 'Python',
    index: 'budgets/python',
    link: '/sdk/brex/budgets/python/',
    developerDocumentation: 'https://brex.com/docs/budgets',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/budgets/openapi.yaml',
  },
  {
    name: 'Expenses',
    categories: ['Finance', 'Reporting'],
    numberOfMethods: 7,
    language: 'TypeScript',
    index: 'expenses/typescript',
    link: '/sdk/brex/expenses/typescript/',
    developerDocumentation: 'https://brex.com/docs/expenses',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/expenses/openapi.yaml',
  },
  {
    name: 'Expenses',
    categories: ['Finance', 'Reporting'],
    numberOfMethods: 7,
    language: 'Java',
    index: 'expenses/java',
    link: '/sdk/brex/expenses/java/',
    developerDocumentation: 'https://brex.com/docs/expenses',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/expenses/openapi.yaml',
  },
  {
    name: 'Expenses',
    categories: ['Finance', 'Reporting'],
    numberOfMethods: 7,
    language: 'Python',
    index: 'expenses/python',
    link: '/sdk/brex/expenses/python/',
    developerDocumentation: 'https://brex.com/docs/expenses',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/expenses/openapi.yaml',
  },
  {
    name: 'Onboarding',
    categories: ['HR', 'Operations'],
    numberOfMethods: 4,
    language: 'TypeScript',
    index: 'onboarding/typescript',
    link: '/sdk/brex/onboarding/typescript/',
    developerDocumentation: 'https://brex.com/docs/onboarding',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/onboarding/openapi.yaml',
  },
  {
    name: 'Onboarding',
    categories: ['HR', 'Operations'],
    numberOfMethods: 4,
    language: 'Java',
    index: 'onboarding/java',
    link: '/sdk/brex/onboarding/java/',
    developerDocumentation: 'https://brex.com/docs/onboarding',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/onboarding/openapi.yaml',
  },
  {
    name: 'Onboarding',
    categories: ['HR', 'Operations'],
    numberOfMethods: 4,
    language: 'Python',
    index: 'onboarding/python',
    link: '/sdk/brex/onboarding/python/',
    developerDocumentation: 'https://brex.com/docs/onboarding',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/onboarding/openapi.yaml',
  },
  {
    name: 'Payments',
    categories: ['Finance', 'Transactions'],
    numberOfMethods: 6,
    language: 'TypeScript',
    index: 'payments/typescript',
    link: '/sdk/brex/payments/typescript/',
    developerDocumentation: 'https://brex.com/docs/payments',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/payments/openapi.yaml',
  },
  {
    name: 'Payments',
    categories: ['Finance', 'Transactions'],
    numberOfMethods: 6,
    language: 'Java',
    index: 'payments/java',
    link: '/sdk/brex/payments/java/',
    developerDocumentation: 'https://brex.com/docs/payments',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/payments/openapi.yaml',
  },
  {
    name: 'Payments',
    categories: ['Finance', 'Transactions'],
    numberOfMethods: 6,
    language: 'Python',
    index: 'payments/python',
    link: '/sdk/brex/payments/python/',
    developerDocumentation: 'https://brex.com/docs/payments',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/payments/openapi.yaml',
  },
  {
    name: 'Team',
    categories: ['HR', 'Management'],
    numberOfMethods: 5,
    language: 'TypeScript',
    index: 'team/typescript',
    link: '/sdk/brex/team/typescript/',
    developerDocumentation: 'https://brex.com/docs/team',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/team/openapi.yaml',
  },
  {
    name: 'Team',
    categories: ['HR', 'Management'],
    numberOfMethods: 5,
    language: 'Java',
    index: 'team/java',
    link: '/sdk/brex/team/java/',
    developerDocumentation: 'https://brex.com/docs/team',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/team/openapi.yaml',
  },
  {
    name: 'Team',
    categories: ['HR', 'Management'],
    numberOfMethods: 5,
    language: 'Python',
    index: 'team/python',
    link: '/sdk/brex/team/python/',
    developerDocumentation: 'https://brex.com/docs/team',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/team/openapi.yaml',
  },
  {
    name: 'Transactions',
    categories: ['Finance', 'Audit'],
    numberOfMethods: 9,
    language: 'TypeScript',
    index: 'transactions/typescript',
    link: '/sdk/brex/transactions/typescript/',
    developerDocumentation: 'https://brex.com/docs/transactions',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/transactions/openapi.yaml',
  },
  {
    name: 'Transactions',
    categories: ['Finance', 'Audit'],
    numberOfMethods: 9,
    language: 'Java',
    index: 'transactions/java',
    link: '/sdk/brex/transactions/java/',
    developerDocumentation: 'https://brex.com/docs/transactions',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/transactions/openapi.yaml',
  },
  {
    name: 'Transactions',
    categories: ['Finance', 'Audit'],
    numberOfMethods: 9,
    language: 'Python',
    index: 'transactions/python',
    link: '/sdk/brex/transactions/python/',
    developerDocumentation: 'https://brex.com/docs/transactions',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/transactions/openapi.yaml',
  },
  {
    name: 'Webhooks',
    categories: ['Development', 'Integration'],
    numberOfMethods: 2,
    language: 'TypeScript',
    index: 'webhooks/typescript',
    link: '/sdk/brex/webhooks/typescript/',
    developerDocumentation: 'https://brex.com/docs/webhooks',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/webhooks/openapi.yaml',
  },
  {
    name: 'Webhooks',
    categories: ['Development', 'Integration'],
    numberOfMethods: 2,
    language: 'Java',
    index: 'webhooks/java',
    link: '/sdk/brex/webhooks/java/',
    developerDocumentation: 'https://brex.com/docs/webhooks',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/webhooks/openapi.yaml',
  },
  {
    name: 'Webhooks',
    categories: ['Development', 'Integration'],
    numberOfMethods: 2,
    language: 'Python',
    index: 'webhooks/python',
    link: '/sdk/brex/webhooks/python/',
    developerDocumentation: 'https://brex.com/docs/webhooks',
    openapiGitHubUi:
      'https://github.com/konfig-sdks/openapi-examples/blob/HEAD/brex/webhooks/openapi.yaml',
  },
]

export default function BrexSDK() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Brex"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/team/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/team/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/team/favicon.png"
      sdks={sdks}
      homepage="https://brex.com"
      categories={allCategories}
      metaDescription={`Brex is the AI-powered spend platform. We transform finance teams from reactive no-sayers to proactive growth drivers. With Brex, companies spend with confidence by empowering employees to make smarter financial decisions from anywhere. Brex provides corporate cards, business accounts, and global payments, plus intuitive software for travel and expenses, that make it easy to plan and track all company spend in one place, in real time. Over 20,000 companies from startups to global enterprises — including DoorDash, Flexport, and Compass — use Brex to proactively control spend, reduce costs, and increase efficiency on a global scale.`}
    />
  )
}
