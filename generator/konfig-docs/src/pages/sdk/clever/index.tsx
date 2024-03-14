import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Clever",
    "numberOfMethods": 42,
    "categories": [
      "education",
      "collaboration",
      "developer_tools",
      "learning_platform",
      "educational_equity",
      "educational_technology",
      "education",
      "k_12_education",
      "application_platforms",
      "enterprise_software",
      "information_technology"
    ],
    "index": "clever/typescript",
    "language": "TypeScript",
    "link": "/sdk/clever/typescript/",
    "developerDocumentation": "dev.clever.com/reference/schema",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clever/openapi.yaml"
  },
  {
    "name": "Clever",
    "numberOfMethods": 42,
    "categories": [
      "education",
      "collaboration",
      "developer_tools",
      "learning_platform",
      "educational_equity",
      "educational_technology",
      "education",
      "k_12_education",
      "application_platforms",
      "enterprise_software",
      "information_technology"
    ],
    "index": "clever/python",
    "language": "Python",
    "link": "/sdk/clever/python/",
    "developerDocumentation": "dev.clever.com/reference/schema",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clever/openapi.yaml"
  },
  {
    "name": "Clever",
    "numberOfMethods": 42,
    "categories": [
      "education",
      "collaboration",
      "developer_tools",
      "learning_platform",
      "educational_equity",
      "educational_technology",
      "education",
      "k_12_education",
      "application_platforms",
      "enterprise_software",
      "information_technology"
    ],
    "index": "clever/java",
    "language": "Java",
    "link": "/sdk/clever/java/",
    "developerDocumentation": "dev.clever.com/reference/schema",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clever/openapi.yaml"
  }
];

export default function Clever() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Clever"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clever/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clever/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clever/favicon.png"
      sdks={sdks}
      homepage="clever.com"
      categories={allCategories}
      metaDescription={`We believe technology is a powerful lever to make education equitable for all and the fastest way to improve educational outcomes now. 

Clever is on a mission to unlock new ways to learn for all students. More than 75% of U.S. K-12 schools now use Clever to simplify access and improve engagement with digital learning. With our free platform for schools and a network of leading application providers, we're committed to advancing educational equity.  Clever has offices in San Francisco, CA and Durham, NC but you can visit us at clever.com anytime or follow us on Twitter @Clever.

Together, we're solving extremely challenging problems that the education system has been facing for decades. It's important that we also enjoy the journey. At Clever, we create a space for purposeful collaboration and plenty of fun. Our Culture Tenets encourage every person on our team to learn, grow, and create change at work.

We go to work every day striving to improve education for millions of kids. Join us!`}
    />
  )
}