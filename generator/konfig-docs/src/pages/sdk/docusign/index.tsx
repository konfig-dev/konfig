import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Docusign",
    "numberOfMethods": 402,
    "categories": [
      "security",
      "collaboration",
      "electronic_signature",
      "document_management"
    ],
    "index": "docusign/typescript",
    "language": "TypeScript",
    "link": "/sdk/docusign/typescript/",
    "developerDocumentation": "developers.docusign.com/docs/esign-rest-api/reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/docusign/openapi.yaml"
  },
  {
    "name": "Docusign",
    "numberOfMethods": 402,
    "categories": [
      "security",
      "collaboration",
      "electronic_signature",
      "document_management"
    ],
    "index": "docusign/python",
    "language": "Python",
    "link": "/sdk/docusign/python/",
    "developerDocumentation": "developers.docusign.com/docs/esign-rest-api/reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/docusign/openapi.yaml"
  },
  {
    "name": "Docusign",
    "numberOfMethods": 402,
    "categories": [
      "security",
      "collaboration",
      "electronic_signature",
      "document_management"
    ],
    "index": "docusign/java",
    "language": "Java",
    "link": "/sdk/docusign/java/",
    "developerDocumentation": "developers.docusign.com/docs/esign-rest-api/reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/docusign/openapi.yaml"
  }
];

export default function Docusign() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Docusign"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/docusign/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/docusign/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/docusign/favicon.png"
      sdks={sdks}
      homepage="docusign.com"
      categories={allCategories}
      metaDescription={`DocuSign makes it easy to send, sign and manage documents securely. With DocuSign, individuals and organizations can streamline the document signing process, reduce paperwork, and increase efficiency. DocuSign offers electronic signature solutions that are trusted by millions worldwide, enabling users to sign documents anytime, anywhere, on any device.`}
    />
  )
}