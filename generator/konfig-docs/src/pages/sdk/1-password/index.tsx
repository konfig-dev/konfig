import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Connect",
    "numberOfMethods": 15,
    "categories": [
      "security",
      "identity_and_access_management",
      "password_management"
    ],
    "index": "connect/typescript",
    "language": "TypeScript",
    "link": "/sdk/1-password/connect/typescript/",
    "developerDocumentation": "developer.1password.com/docs/connect/connect-api-reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/1-password/connect/openapi.yaml"
  },
  {
    "name": "Connect",
    "numberOfMethods": 15,
    "categories": [
      "security",
      "identity_and_access_management",
      "password_management"
    ],
    "index": "connect/python",
    "language": "Python",
    "link": "/sdk/1-password/connect/python/",
    "developerDocumentation": "developer.1password.com/docs/connect/connect-api-reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/1-password/connect/openapi.yaml"
  },
  {
    "name": "Connect",
    "numberOfMethods": 15,
    "categories": [
      "security",
      "identity_and_access_management",
      "password_management"
    ],
    "index": "connect/java",
    "language": "Java",
    "link": "/sdk/1-password/connect/java/",
    "developerDocumentation": "developer.1password.com/docs/connect/connect-api-reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/1-password/connect/openapi.yaml"
  },
  {
    "name": "Partnership",
    "numberOfMethods": 4,
    "categories": [
      "password_management",
      "security",
      "identity_and_access_management"
    ],
    "index": "partnership/typescript",
    "language": "TypeScript",
    "link": "/sdk/1-password/partnership/typescript/",
    "developerDocumentation": "developer.1password.com/docs/partnership-api/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/1-password/partnership/openapi.yaml"
  },
  {
    "name": "Partnership",
    "numberOfMethods": 4,
    "categories": [
      "password_management",
      "security",
      "identity_and_access_management"
    ],
    "index": "partnership/python",
    "language": "Python",
    "link": "/sdk/1-password/partnership/python/",
    "developerDocumentation": "developer.1password.com/docs/partnership-api/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/1-password/partnership/openapi.yaml"
  },
  {
    "name": "Partnership",
    "numberOfMethods": 4,
    "categories": [
      "password_management",
      "security",
      "identity_and_access_management"
    ],
    "index": "partnership/java",
    "language": "Java",
    "link": "/sdk/1-password/partnership/java/",
    "developerDocumentation": "developer.1password.com/docs/partnership-api/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/1-password/partnership/openapi.yaml"
  }
];

export default function Sdk1Password() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="1Password"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/1-password/connect/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/1-password/connect/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/1-password/connect/favicon.png"
      sdks={sdks}
      homepage="1password.com"
      categories={allCategories}
      metaDescription={`Trusted by more than 100,000 businesses to protect their data, 1Password gives you complete control over passwords and other sensitive business information. 

As an integral layer of the Identity and Access Management (IAM) stack, 1Password protects all employee accounts – even those you aren't aware of. Give employees secure access to any app or service and safely share everything you need to work together – including logins, documents, credit cards, and more – while keeping everything else private.

1Password is easy to deploy and integrates with Azure AD, Okta, OneLogin, and Slack, so you can automatically provision employees using the systems you already trust. It's simple to manage and fits seamlessly into your team's workflow, so you can secure your business without compromising productivity.`}
    />
  )
}