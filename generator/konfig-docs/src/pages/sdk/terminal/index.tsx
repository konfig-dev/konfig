import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Terminal",
    "numberOfMethods": 29,
    "categories": [
      "developer_tools",
      "telematics",
      "trucking",
      "universal_api",
      "gps_data",
      "speeding_data",
      "vehicle_stats"
    ],
    "index": "terminal/typescript",
    "language": "TypeScript",
    "link": "/sdk/terminal/typescript/",
    "developerDocumentation": "docs.withterminal.com/api-reference/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/terminal/openapi.yaml"
  },
  {
    "name": "Terminal",
    "numberOfMethods": 29,
    "categories": [
      "developer_tools",
      "telematics",
      "trucking",
      "universal_api",
      "gps_data",
      "speeding_data",
      "vehicle_stats"
    ],
    "index": "terminal/python",
    "language": "Python",
    "link": "/sdk/terminal/python/",
    "developerDocumentation": "docs.withterminal.com/api-reference/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/terminal/openapi.yaml"
  },
  {
    "name": "Terminal",
    "numberOfMethods": 29,
    "categories": [
      "developer_tools",
      "telematics",
      "trucking",
      "universal_api",
      "gps_data",
      "speeding_data",
      "vehicle_stats"
    ],
    "index": "terminal/java",
    "language": "Java",
    "link": "/sdk/terminal/java/",
    "developerDocumentation": "docs.withterminal.com/api-reference/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/terminal/openapi.yaml"
  }
];

export default function Terminal() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Terminal"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/terminal/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/terminal/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/terminal/favicon.png"
      sdks={sdks}
      homepage="withterminal.com"
      categories={allCategories}
      metaDescription={`Terminal is Plaid for Telematics in commercial trucking. Companies building the next generation of insurance products, financial services and fleet software for trucking use our Universal API to access GPS data, speeding data and vehicle stats.Check us out at https://withterminal.com`}
    />
  )
}