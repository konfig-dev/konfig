import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Rotten Tomatoes",
    "numberOfMethods": 18,
    "categories": [
      "media",
      "collaboration",
      "social_media",
      "reviews",
      "trailers",
      "showtimes",
      "tickets"
    ],
    "index": "rotten-tomatoes/typescript",
    "language": "TypeScript",
    "link": "/sdk/rotten-tomatoes/typescript/",
    "developerDocumentation": "developer.fandango.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rotten-tomatoes/openapi.yaml"
  },
  {
    "name": "Rotten Tomatoes",
    "numberOfMethods": 18,
    "categories": [
      "media",
      "collaboration",
      "social_media",
      "reviews",
      "trailers",
      "showtimes",
      "tickets"
    ],
    "index": "rotten-tomatoes/python",
    "language": "Python",
    "link": "/sdk/rotten-tomatoes/python/",
    "developerDocumentation": "developer.fandango.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rotten-tomatoes/openapi.yaml"
  },
  {
    "name": "Rotten Tomatoes",
    "numberOfMethods": 18,
    "categories": [
      "media",
      "collaboration",
      "social_media",
      "reviews",
      "trailers",
      "showtimes",
      "tickets"
    ],
    "index": "rotten-tomatoes/java",
    "language": "Java",
    "link": "/sdk/rotten-tomatoes/java/",
    "developerDocumentation": "developer.fandango.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rotten-tomatoes/openapi.yaml"
  }
];

export default function RottenTomatoes() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Rotten Tomatoes"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rotten-tomatoes/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rotten-tomatoes/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rotten-tomatoes/favicon.png"
      sdks={sdks}
      homepage="developer.fandango.com/rotten_tomatoes"
      categories={allCategories}
      metaDescription={`Rotten Tomatoes, home of the Tomatometer, is the most trusted measurement of quality for Movies & TV. The definitive site for Reviews, Trailers, Showtimes, and Tickets.`}
    />
  )
}