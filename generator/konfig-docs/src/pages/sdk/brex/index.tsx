import React from 'react'
import { Company } from '../../../components/Company'

const services = [
  {
    name: 'Budgets',
    numberOfMethods: 3,
    categories: ['Finance', 'Management'],
    index: 'brex/budgets/typescript',
    link: '/sdk/brex/budgets/typescript/',
  },
  {
    name: 'Expenses',
    numberOfMethods: 7,
    categories: ['Finance', 'Reporting'],
    index: 'brex/expenses/typescript',
    link: '/sdk/brex/expenses/typescript/',
  },
  {
    name: 'Onboarding',
    numberOfMethods: 4,
    categories: ['HR', 'Operations'],
    index: 'brex/onboarding/typescript',
    link: '/sdk/brex/onboarding/typescript/',
  },
  {
    name: 'Payments',
    numberOfMethods: 6,
    categories: ['Finance', 'Transactions'],
    index: 'brex/payments/typescript',
    link: '/sdk/brex/payments/typescript/',
  },
  {
    name: 'Team',
    numberOfMethods: 5,
    categories: ['HR', 'Management'],
    index: 'brex/team/typescript',
    link: '/sdk/brex/team/typescript/',
  },
  {
    name: 'Transactions',
    numberOfMethods: 9,
    categories: ['Finance', 'Audit'],
    index: 'brex/transactions/typescript',
    link: '/sdk/brex/transactions/typescript/',
  },
  {
    name: 'Webhooks',
    numberOfMethods: 2,
    categories: ['Development', 'Integration'],
    index: 'brex/webhooks/typescript',
    link: '/sdk/brex/webhooks/typescript/',
  },
]

export default function BrexSDK() {
  const allCategories: string[] = services.flatMap(
    (service) => service.categories,
  )
  return (
    <Company
      company="Brex"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/team/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/team/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/team/favicon.png"
      services={services}
      homepage="https://brex.com"
      categories={allCategories}
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex"
      metaDescription={`Brex is the AI-powered spend platform. We transform finance teams from reactive no-sayers to proactive growth drivers. With Brex, companies spend with confidence by empowering employees to make smarter financial decisions from anywhere. Brex provides corporate cards, business accounts, and global payments, plus intuitive software for travel and expenses, that make it easy to plan and track all company spend in one place, in real time. Over 20,000 companies from startups to global enterprises — including DoorDash, Flexport, and Compass — use Brex to proactively control spend, reduce costs, and increase efficiency on a global scale.`}
    />
  )
}
