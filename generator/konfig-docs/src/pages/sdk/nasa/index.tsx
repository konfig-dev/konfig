import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "TechPort",
    "numberOfMethods": 7,
    "categories": [
      "space",
      "government",
      "aeronautics",
      "science"
    ],
    "index": "tech-port/typescript",
    "language": "TypeScript",
    "link": "/sdk/nasa/tech-port/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nasa/techport/openapi.yaml"
  },
  {
    "name": "TechPort",
    "numberOfMethods": 7,
    "categories": [
      "space",
      "government",
      "aeronautics",
      "science"
    ],
    "index": "tech-port/python",
    "language": "Python",
    "link": "/sdk/nasa/tech-port/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nasa/techport/openapi.yaml"
  },
  {
    "name": "TechPort",
    "numberOfMethods": 7,
    "categories": [
      "space",
      "government",
      "aeronautics",
      "science"
    ],
    "index": "tech-port/java",
    "language": "Java",
    "link": "/sdk/nasa/tech-port/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nasa/techport/openapi.yaml"
  }
];

export default function Nasa() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="NASA"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nasa/techport/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nasa/techport/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nasa/techport/favicon.png"
      sdks={sdks}
      homepage="techport.nasa.gov/home"
      categories={allCategories}
      metaDescription={`NASA, the National Aeronautics and Space Administration, is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and aerospace research. NASA conducts space exploration missions, scientific research, and technology development to expand our understanding of the universe.`}
    />
  )
}