import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "UploadThing",
    "numberOfMethods": 13,
    "categories": [
      "developer_tools",
      "storage"
    ],
    "index": "upload-thing/typescript",
    "language": "TypeScript",
    "link": "/sdk/upload-thing/typescript/",
    "developerDocumentation": "docs.uploadthing.com/api-reference/openapi-spec",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/uploadthing/openapi.yaml"
  },
  {
    "name": "UploadThing",
    "numberOfMethods": 13,
    "categories": [
      "developer_tools",
      "storage"
    ],
    "index": "upload-thing/python",
    "language": "Python",
    "link": "/sdk/upload-thing/python/",
    "developerDocumentation": "docs.uploadthing.com/api-reference/openapi-spec",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/uploadthing/openapi.yaml"
  },
  {
    "name": "UploadThing",
    "numberOfMethods": 13,
    "categories": [
      "developer_tools",
      "storage"
    ],
    "index": "upload-thing/java",
    "language": "Java",
    "link": "/sdk/upload-thing/java/",
    "developerDocumentation": "docs.uploadthing.com/api-reference/openapi-spec",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/uploadthing/openapi.yaml"
  }
];

export default function UploadThing() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="UploadThing"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadthing/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadthing/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadthing/favicon.png"
      sdks={sdks}
      homepage="uploadthing.com"
      companyKebabCase="upload-thing"
      categories={allCategories}
      metaDescription={`UploadThing is the easiest way to add file uploads to your full stack TypeScript application. Many services have tried to build a "better S3", but in our opinion, none found the right compromise of ownership, flexibility and safety.`}
    />
  )
}