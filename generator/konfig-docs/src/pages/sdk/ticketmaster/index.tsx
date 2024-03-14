import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Discovery",
    "numberOfMethods": 13,
    "categories": [
      "ecommerce"
    ],
    "index": "discovery/typescript",
    "language": "TypeScript",
    "link": "/sdk/ticketmaster/discovery/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ticketmaster/discovery/openapi.yaml"
  },
  {
    "name": "Discovery",
    "numberOfMethods": 13,
    "categories": [
      "ecommerce"
    ],
    "index": "discovery/python",
    "language": "Python",
    "link": "/sdk/ticketmaster/discovery/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ticketmaster/discovery/openapi.yaml"
  },
  {
    "name": "Discovery",
    "numberOfMethods": 13,
    "categories": [
      "ecommerce"
    ],
    "index": "discovery/java",
    "language": "Java",
    "link": "/sdk/ticketmaster/discovery/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ticketmaster/discovery/openapi.yaml"
  }
];

export default function Ticketmaster() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Ticketmaster"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ticketmaster/discovery/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ticketmaster/discovery/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ticketmaster/discovery/favicon.ico"
      sdks={sdks}
      homepage="developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/"
      categories={allCategories}
      metaDescription={`Tap into the Ticketmaster open developer network which gives you the flexibility and scale to bring unforgettable live events to fans. It’s our technology – your way.`}
    />
  )
}