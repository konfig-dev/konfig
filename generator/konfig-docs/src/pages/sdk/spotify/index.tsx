import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Spotify",
    "numberOfMethods": 88,
    "categories": [
      "media"
    ],
    "index": "spotify/typescript",
    "language": "TypeScript",
    "link": "/sdk/spotify/typescript/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/spotify/openapi.yaml"
  },
  {
    "name": "Spotify",
    "numberOfMethods": 88,
    "categories": [
      "media"
    ],
    "index": "spotify/python",
    "language": "Python",
    "link": "/sdk/spotify/python/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/spotify/openapi.yaml"
  },
  {
    "name": "Spotify",
    "numberOfMethods": 88,
    "categories": [
      "media"
    ],
    "index": "spotify/java",
    "language": "Java",
    "link": "/sdk/spotify/java/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/spotify/openapi.yaml"
  }
];

export default function Spotify() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Spotify"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotify/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotify/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotify/favicon.ico"
      sdks={sdks}
      homepage="developer.spotify.com"
      categories={allCategories}
      metaDescription={`Spotify is a digital music service that gives you access to millions of songs.`}
    />
  )
}