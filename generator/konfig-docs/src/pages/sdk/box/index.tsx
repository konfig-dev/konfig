import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Box",
    "numberOfMethods": 263,
    "categories": [
      "collaboration",
      "storage",
      "cloud_content_management",
      "file_sharing",
      "ftp_replacement",
      "enterprise_content_management",
      "content_management",
      "esignature",
      "esign"
    ],
    "index": "box/typescript",
    "language": "TypeScript",
    "link": "/sdk/box/typescript/",
    "developerDocumentation": "developer.box.com/reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/box/openapi.yaml"
  },
  {
    "name": "Box",
    "numberOfMethods": 263,
    "categories": [
      "collaboration",
      "storage",
      "cloud_content_management",
      "file_sharing",
      "ftp_replacement",
      "enterprise_content_management",
      "content_management",
      "esignature",
      "esign"
    ],
    "index": "box/python",
    "language": "Python",
    "link": "/sdk/box/python/",
    "developerDocumentation": "developer.box.com/reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/box/openapi.yaml"
  },
  {
    "name": "Box",
    "numberOfMethods": 263,
    "categories": [
      "collaboration",
      "storage",
      "cloud_content_management",
      "file_sharing",
      "ftp_replacement",
      "enterprise_content_management",
      "content_management",
      "esignature",
      "esign"
    ],
    "index": "box/java",
    "language": "Java",
    "link": "/sdk/box/java/",
    "developerDocumentation": "developer.box.com/reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/box/openapi.yaml"
  }
];

export default function Box() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Box"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/box/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/box/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/box/favicon.png"
      sdks={sdks}
      homepage="box.com"
      categories={allCategories}
      metaDescription={`Box (NYSE:BOX) is the Cloud Content Management company that empowers enterprises to revolutionize how they work by securely connecting their people, information and applications. Founded in 2005, Box powers more than 87,000 businesses globally, including AstraZeneca, General Electric, P&G, and The GAP. Box is headquartered in Redwood City, CA, with offices across the United States, Europe and Asia. To learn more about Box, visit http://www.box.com/.`}
    />
  )
}