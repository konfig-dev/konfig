import React from 'react'
import { Company } from '../../../components/Company'

const services = [
  { name: 'Budgets', numberOfMethods: 3 },
  { name: 'Expenses', numberOfMethods: 7 },
  { name: 'Onboarding', numberOfMethods: 4 },
  { name: 'Payments', numberOfMethods: 6 },
  { name: 'Team', numberOfMethods: 5 },
  { name: 'Transactions', numberOfMethods: 9 },
  { name: 'Webhooks', numberOfMethods: 2 },
]

export default function BrexSDK() {
  return (
    <Company
      company="Brex"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/team/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/team/logo.png"
      services={services}
    />
  )
}
