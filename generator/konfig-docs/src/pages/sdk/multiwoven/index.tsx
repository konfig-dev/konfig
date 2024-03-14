import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Multiwoven",
    "numberOfMethods": 24,
    "categories": [
      "open_source",
      "automation",
      "data_management",
      "open_source",
      "developer_tools",
      "reverse_etl",
      "data_segmentation",
      "data_sync",
      "data_activation"
    ],
    "index": "multiwoven/typescript",
    "language": "TypeScript",
    "link": "/sdk/multiwoven/typescript/",
    "developerDocumentation": "docs.multiwoven.com/get-started/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/multiwoven/openapi.yaml"
  },
  {
    "name": "Multiwoven",
    "numberOfMethods": 24,
    "categories": [
      "open_source",
      "automation",
      "data_management",
      "open_source",
      "developer_tools",
      "reverse_etl",
      "data_segmentation",
      "data_sync",
      "data_activation"
    ],
    "index": "multiwoven/python",
    "language": "Python",
    "link": "/sdk/multiwoven/python/",
    "developerDocumentation": "docs.multiwoven.com/get-started/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/multiwoven/openapi.yaml"
  },
  {
    "name": "Multiwoven",
    "numberOfMethods": 24,
    "categories": [
      "open_source",
      "automation",
      "data_management",
      "open_source",
      "developer_tools",
      "reverse_etl",
      "data_segmentation",
      "data_sync",
      "data_activation"
    ],
    "index": "multiwoven/java",
    "language": "Java",
    "link": "/sdk/multiwoven/java/",
    "developerDocumentation": "docs.multiwoven.com/get-started/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/multiwoven/openapi.yaml"
  }
];

export default function Multiwoven() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Multiwoven"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/multiwoven/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/multiwoven/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/multiwoven/favicon.png"
      sdks={sdks}
      homepage="www.multiwoven.com/"
      categories={allCategories}
      metaDescription={`Open-source Reverse ETL that makes data segmentation, sync and activation both easy and fully secure.`}
    />
  )
}