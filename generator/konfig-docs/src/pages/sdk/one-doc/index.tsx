import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "OneDoc",
    "numberOfMethods": 2,
    "categories": [
      "developer_tools",
      "documentation",
      "pdf_generation",
      "react"
    ],
    "index": "one-doc/typescript",
    "language": "TypeScript",
    "link": "/sdk/one-doc/typescript/",
    "developerDocumentation": "docs.onedoclabs.com/api-reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/onedoc/openapi.yaml"
  },
  {
    "name": "OneDoc",
    "numberOfMethods": 2,
    "categories": [
      "developer_tools",
      "documentation",
      "pdf_generation",
      "react"
    ],
    "index": "one-doc/python",
    "language": "Python",
    "link": "/sdk/one-doc/python/",
    "developerDocumentation": "docs.onedoclabs.com/api-reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/onedoc/openapi.yaml"
  },
  {
    "name": "OneDoc",
    "numberOfMethods": 2,
    "categories": [
      "developer_tools",
      "documentation",
      "pdf_generation",
      "react"
    ],
    "index": "one-doc/java",
    "language": "Java",
    "link": "/sdk/one-doc/java/",
    "developerDocumentation": "docs.onedoclabs.com/api-reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/onedoc/openapi.yaml"
  }
];

export default function OneDoc() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="OneDoc"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onedoc/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onedoc/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onedoc/favicon.png"
      sdks={sdks}
      homepage="onedoc.com"
      categories={allCategories}
      metaDescription={`Onedoc is an innovative API solution for developers, offering a simple and secure way to create and manage PDF documents using familiar technologies like React.`}
    />
  )
}